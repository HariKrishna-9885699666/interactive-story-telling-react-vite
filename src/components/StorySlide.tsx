import React, { useEffect, useState } from 'react';
import InteractiveCharacter from './InteractiveCharacter';

interface Character {
  emoji?: string;
  image?: string;
  name: string;
  position: { left: string; top: string };
  delay: number;
}

interface StorySlideProps {
  title: string;
  subtitle: string;
  story: string;
  characters: Character[];
  backgroundImage: string;
  backgroundClass: string;
  isActive: boolean;
  onStoryClick: () => void;
  onReadyToNarrate?: () => void;
  words?: string[];
  currentWordIndex?: number;
  narrationEnabled?: boolean;
}

const StorySlide: React.FC<StorySlideProps> = ({
  title,
  subtitle,
  story,
  characters,
  isActive,
  onStoryClick,
  onReadyToNarrate,
  words,
  currentWordIndex,
  narrationEnabled
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showStory, setShowStory] = useState(false);

  // Track if narration has been triggered for this slide activation
  const hasTriggeredNarration = React.useRef(false);

  useEffect(() => {
    // Clear any existing timeouts when component unmounts or slide changes
    const timeouts: number[] = [];
    
    if (isActive) {
      // Reset states when slide becomes active
      setShowTitle(false);
      setShowSubtitle(false);
      setShowCharacters(false);
      setShowStory(false);
      hasTriggeredNarration.current = false;

      timeouts.push(setTimeout(() => setShowTitle(true), 200));
      timeouts.push(setTimeout(() => setShowSubtitle(true), 600));
      timeouts.push(setTimeout(() => setShowCharacters(true), 1000));
      
      // First show the story text
      timeouts.push(setTimeout(() => {
        setShowStory(true);
      }, 2500));
      
      // Then wait an additional 0.5 seconds before starting narration
      // Use a longer delay to ensure everything is ready
      timeouts.push(setTimeout(() => {
        // Only trigger narration if it hasn't been triggered yet for this slide activation
        if (onReadyToNarrate && !hasTriggeredNarration.current && narrationEnabled) {
          hasTriggeredNarration.current = true;
          onReadyToNarrate();
        }
      }, 3500));
    } else {
      // Reset the flag when slide becomes inactive
      hasTriggeredNarration.current = false;
    }
    
    // Cleanup function to clear all timeouts when component unmounts or dependencies change
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isActive, onReadyToNarrate]);

  const handleCharacterClick = () => {
    const sparkles = document.createElement('div');
    sparkles.innerHTML = '✨';
    sparkles.className = 'fixed text-4xl pointer-events-none z-50 animate-ping';
    sparkles.style.left = Math.random() * window.innerWidth + 'px';
    sparkles.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(sparkles);
    setTimeout(() => sparkles.remove(), 1000);
  };

  return (

    <div className="relative w-full h-full flex flex-col items-center justify-center px-2 sm:px-6 py-4 sm:py-8">
        <h1 className={`
          text-2xl sm:text-4xl md:text-6xl font-black text-center mb-4 sm:mb-6
          font-title-interactive drop-shadow-lg animate-bounce-slow
          transition-all duration-1000 ease-out
          ${showTitle ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-12 scale-90'}
        `}>
          {title}
        </h1>

        <p className={`
          text-base sm:text-xl md:text-2xl text-center mb-6 sm:mb-12
          font-subtitle-interactive animate-fade-in
          transition-all duration-1000 ease-out delay-300
          ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}>
          {subtitle}
        </p>

        {/* Character Icons Row - always above text area */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-12">
          {characters.map((character, index) => (
            <InteractiveCharacter
              key={index}
              {...character}
              isVisible={showCharacters}
              onClick={handleCharacterClick}
            />
          ))}
        </div>
        <div 
          className={`
            w-full max-w-2xl sm:max-w-3xl md:max-w-4xl p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/30
            cursor-pointer transition-all duration-1000 ease-out
            mt-16 sm:mt-0
            bg-black/50
            ${showStory ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
          `}
          onClick={onStoryClick}
        >
          <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-center font-medium text-white break-words">
            {Array.isArray(words) && words.length > 0 && typeof currentWordIndex === 'number' && currentWordIndex >= 0
              ? (
                <span className="inline-flex flex-wrap justify-center gap-1">
                  {words.map((word, idx) => (
                    <span
                      key={`word-${idx}`}
                      className={`
                        inline-block
                        ${idx === currentWordIndex 
                          ? 'bg-yellow-300 text-black rounded px-1 py-0.5 transform scale-110 transition-all duration-150' 
                          : 'transition-all duration-150'}
                      `}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              )
              : story}
          </p>
          <div className="mt-2 sm:mt-4 text-center">
            <span className="text-cyan-300 text-xs sm:text-sm font-medium animate-pulse">
              🎯 Click here to hear the story again!
            </span>
          </div>
        </div>
      </div>
  );
};

export default StorySlide;
