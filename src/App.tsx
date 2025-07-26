import { User, Home } from 'lucide-react';
import ReactModal from 'react-modal';
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import StorySlide from './components/StorySlide';
import { useVoiceNarration } from './hooks/useVoiceNarration';
import { stories } from './data/storyData';
import { preloadImages } from './utils/preloadImages';


function App() {
  // Update document title based on selected story
  const [showUserModal, setShowUserModal] = useState(false);

  // Modal styles for center display
  const modalStyles = {
    overlay: { zIndex: 1000, background: 'rgba(0,0,0,0.6)' },
    content: {
      top: '50%', left: '50%', right: 'auto', bottom: 'auto',
      marginRight: '-50%', transform: 'translate(-50%, -50%)',
      borderRadius: '1.5rem', padding: '2rem', background: '#18181b', color: 'white', border: 'none', minWidth: 320, maxWidth: 400
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStart, setShowStart] = useState(true);

  // Update document title based on selected story
  useEffect(() => {
    if (selectedStoryId) {
      const story = stories.find(s => s.id === selectedStoryId);
      if (story) {
        document.title = story.title + ' | Kids Story';
      }
    } else {
      document.title = 'Kids Story';
    }
  }, [selectedStoryId]);

  const {
    speak,
    stop,
    pause,
    resume,
    toggleEnabled,
    toggleMuted,
    isSpeaking,
    isPaused,
    isEnabled,
    isMuted,
    currentWordIndex,
    words,
  } = useVoiceNarration();

  // Initialize loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  // Prevent multiple voice narrations automatically, but always allow manual replay
  const lastNarratedSlide = React.useRef<number | null>(null);
  // Get the selected story's slides
  const selectedStory = stories.find(s => s.id === selectedStoryId) || stories[0];
  const storySlides = selectedStory.slides;

  const speakCurrentSlide = useCallback((force?: boolean) => {
    const slide = storySlides[currentSlide];
    if (slide) {
      // Always stop before speaking to avoid overlap
      stop();
      setTimeout(() => {
        if (force || lastNarratedSlide.current !== currentSlide) {
          speak(slide.story);
          lastNarratedSlide.current = currentSlide;
        }
      }, 250); // Give time for cancel to take effect
    }
  }, [currentSlide, speak, stop, storySlides]);

  useEffect(() => {
    lastNarratedSlide.current = null;
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    stop();
    setTimeout(() => {
      setCurrentSlide(prev => {
        const next = prev < storySlides.length - 1 ? prev + 1 : 0;
        return next;
      });
    }, 250); // Wait for stop to take effect
  }, [stop, storySlides.length]);

  const prevSlide = useCallback(() => {
    stop();
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  }, [stop]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          stop();
          break;
        case 'r':
        case 'R':
          speakCurrentSlide();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, stop, speakCurrentSlide]);

  const handlePauseResume = useCallback(() => {
    console.log('Pause/Resume clicked. isSpeaking:', isSpeaking, 'isPaused:', isPaused); // Debug log
    if (isSpeaking) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    }
  }, [pause, resume, isPaused, isSpeaking]);

  useEffect(() => {
    if (selectedStoryId) {
      const story = stories.find(s => s.id === selectedStoryId);
      if (story) {
        document.title = story.title + ' | Kids Story';
      }
    } else {
      document.title = 'Kids Story';
    }
  }, [selectedStoryId]);

  // Get background image for current slide if available
  const currentBgImage = !isLoading && selectedStoryId && !showStart && storySlides[currentSlide]?.backgroundImage;

  // Preload all background and character images for the selected story
  useEffect(() => {
    if (!selectedStoryId) return;
    const bgImages = storySlides.map(slide => slide.backgroundImage).filter((img): img is string => typeof img === 'string');
    const charImages = storySlides.flatMap(slide =>
      slide.characters
        .map(char => char.image)
        .filter((img): img is string => typeof img === 'string')
    );
    preloadImages([...bgImages, ...charImages]);
  }, [selectedStoryId, storySlides]);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative text-base sm:text-lg">
      {/* Fullscreen background image */}
      {currentBgImage && (
        <img
          src={currentBgImage}
          alt="Background"
          className="fixed inset-0 w-full h-full object-contain z-0 pointer-events-none select-none"
          style={{
            objectFit: 'contain',
            width: '100vw',
            height: '100vh',
            left: 0,
            top: 0,
            position: 'fixed',
            zIndex: 0
          }}
          draggable={false}
        />
      )}

      <LoadingScreen isLoading={isLoading} />

      {/* Story Selection Overlay */}
      {!isLoading && !selectedStoryId && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 drop-shadow-lg text-center font-title-interactive animate-bounce-slow">Select a Story</h1>
          <div className="w-full max-w-5xl flex-1 overflow-y-auto">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 justify-center">
              {stories.map(story => (
                <button
                  key={story.id}
                  className="flex flex-col items-center bg-white/10 hover:bg-cyan-500/30 border-2 border-white/20 rounded-2xl shadow-lg p-2 sm:p-4 w-full transition-all duration-300"
                  onClick={() => setSelectedStoryId(story.id)}
                >
                  <img src={story.coverImage} alt={story.title} className="w-full h-24 sm:h-32 object-cover rounded-xl mb-2 sm:mb-3" />
                  <span className="text-xs sm:text-lg font-bold mb-1 sm:mb-2 drop-shadow text-center font-title-interactive">{story.title}</span>
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 sm:mt-10 text-white/80 text-base sm:text-lg text-center">Choose a story to begin your adventure!</p>
        </div>
      )}

      {/* Start Story Overlay */}
      {!isLoading && selectedStoryId && showStart && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 drop-shadow-lg text-center font-title-interactive animate-bounce-slow">{selectedStory.title}</h1>
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-xl sm:text-2xl font-bold rounded-2xl shadow-lg transition-all duration-300"
            onClick={() => {
              lastNarratedSlide.current = null;
              setShowStart(false);
            }}
          >
            Start Story
          </button>
          <p className="mt-4 sm:mt-6 text-white/80 text-base sm:text-lg text-center">Click to begin and enable narration</p>
        </div>
      )}

      {!isLoading && selectedStoryId && !showStart && (
        <>
          {/* Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 z-40 transition-all duration-500"
               style={{ width: `${((currentSlide + 1) / storySlides.length) * 100}%` }} />

          {/* Slide Counter */}
          <div className="fixed top-6 right-6 bg-black/50 backdrop-blur-lg text-white px-4 py-2 rounded-full font-bold z-40 border border-white/30">
            {currentSlide + 1} / {storySlides.length}
          </div>

          {/* Audio Controls */}
          <div className="fixed top-6 left-6 flex gap-3 z-40">
            <button
              onClick={toggleMuted}
              className={`
                w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-lg
                flex items-center justify-center text-white transition-all duration-300 hover:scale-110
                bg-black/50 hover:bg-black/60
                ${isMuted ? 'border-red-500/50' : ''}
              `}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <button
              onClick={handlePauseResume}
              className={`
                w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-lg
                flex items-center justify-center text-white transition-all duration-300 hover:scale-110
                bg-black/50 hover:bg-black/60
                ${!isSpeaking ? 'opacity-50' : ''}
              `}
              title={!isSpeaking ? 'No audio playing' : 'Pause/Resume'}
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>
            
            <button
              onClick={toggleEnabled}
              className={`
                w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-lg
                flex items-center justify-center text-white transition-all duration-300 hover:scale-110
                bg-black/50 hover:bg-black/60
                ${isEnabled ? 'border-green-500/50' : 'border-gray-500/50'}
              `}
              title={isEnabled ? 'Disable Voice' : 'Enable Voice'}
            >
              {isEnabled ? <Mic size={20} /> : <MicOff size={20} />}
            </button>
          </div>

          {/* Story Slides */}
          <div className="relative w-full h-[80vh] min-h-[400px] max-h-[900px] mx-auto">
            {storySlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  absolute inset-0 transition-all duration-1000 ease-in-out
                  ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
              >
                <StorySlide
                  {...slide}
                  isActive={index === currentSlide}
                  narrationEnabled={!showStart}
                  onStoryClick={() => speakCurrentSlide(true)}
                  onReadyToNarrate={index === currentSlide && !showStart ? speakCurrentSlide : undefined}
                  words={index === currentSlide ? words : []}
                  currentWordIndex={index === currentSlide ? currentWordIndex : -1}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 flex gap-2 sm:gap-3 z-40">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-black/50 backdrop-blur-lg border-2 border-white/30 text-white px-6 py-3 rounded-full
                       font-bold transition-all duration-300 hover:bg-black/60 hover:scale-105 disabled:opacity-50 
                       disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Previous
            </button>
            

            
            <button
              onClick={nextSlide}
              className="bg-black/50 backdrop-blur-lg border-2 border-white/30 text-white px-6 py-3 rounded-full
                       font-bold transition-all duration-300 hover:bg-black/60 hover:scale-105 flex items-center gap-2"
            >
              {currentSlide === storySlides.length - 1 ? '🔄 Restart' : 'Next'} <ChevronRight size={20} />
            </button>
          </div>

          {/* Voice Indicator */}
          {/* <VoiceIndicator isActive={isSpeaking} message={narrationMessage} /> */}

          {/* Sparkle Effects Container */}
          <div id="sparkles-container" className="fixed inset-0 pointer-events-none z-30" />

          {/* Instructions removed as requested */}
        </>
      )}

    {/* Floating Home Icon */}
    <button
      className="fixed bottom-20 left-4 z-[1001] bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center transition-all duration-300"
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.2)' }}
      onClick={() => {
        stop();
        setSelectedStoryId(null);
        setShowStart(true);
        setCurrentSlide(0);
      }}
      title="Home / Select Another Story"
    >
      <Home size={28} />
    </button>

    {/* Floating User Icon */}
    <button
      className="fixed bottom-4 left-4 z-[1001] bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center transition-all duration-300"
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.2)' }}
      onClick={() => setShowUserModal(true)}
      title="About the Developer"
    >
      <User size={28} />
    </button>

    {/* User Details Modal */}
    <ReactModal
      isOpen={showUserModal}
      onRequestClose={() => setShowUserModal(false)}
      style={modalStyles}
      ariaHideApp={false}
      contentLabel="User Details"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="bg-cyan-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-2">HK</div>
        <div className="text-xl font-bold">Hari Krishna Anem</div>
        <div className="text-base text-cyan-300 font-mono">+91 9885699666</div>
        <div className="text-base text-cyan-300 font-mono">anemharikrishna@gmail.com</div>
        <div className="flex flex-col gap-2 mt-2 w-full">
          <a href="https://www.linkedin.com/in/anemharikrishna" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-2">🔗 LinkedIn</a>
          <a href="https://github.com/HariKrishna-9885699666/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-2">🐙 Github</a>
          <a href="https://harikrishna.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-2">🌐 Portfolio</a>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold shadow"
          onClick={() => setShowUserModal(false)}
        >Close</button>
      </div>
    </ReactModal>
    </div>
  );
}

export default App;
