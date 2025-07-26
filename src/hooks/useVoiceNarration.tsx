import { useState, useCallback, useEffect, useRef } from 'react';

export const useVoiceNarration = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Refs for pause/resume functionality
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const wordsRef = useRef<string[]>([]);
  const onWordHighlightRef = useRef<((wordIndex: number) => void) | undefined>(undefined);
  const fallbackTimerRef = useRef<number | null>(null);
  const lastBoundaryTimeRef = useRef<number>(0);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      const englishVoice = availableVoices.find(voice => voice.lang.startsWith('en'));
      setSelectedVoice(englishVoice || availableVoices[0] || null);
    };

    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, []);

  // Detect if we're on mobile
  const isMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  // Speak with word highlighting (syncs with voice, fallback for mobile)
  const speakNarration = useCallback((text: string, onWordHighlight?: (wordIndex: number) => void) => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    
    // Clear any existing fallback timer
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    
    if (!isEnabled || isMuted || !text.trim()) return;

    setTimeout(() => {
      const words = text.match(/[\w']+(?:[.,!?;:])?/g) || [];
      wordsRef.current = words;
      onWordHighlightRef.current = onWordHighlight;

      // Create a more accurate mapping of character positions to word indices
      const charToWordMap = new Map<number, number>();
      let lastIndex = 0;
      const wordPositions: {word: string; startIndex: number; endIndex: number; wordIndex: number}[] = [];
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const startIndex = text.indexOf(word, lastIndex);
        if (startIndex !== -1) {
          const endIndex = startIndex + word.length;
          wordPositions.push({ word, startIndex, endIndex, wordIndex: i });
          lastIndex = endIndex;
        }
      }
      for (let i = 0; i < text.length; i++) {
        const wordPosition = wordPositions.find(pos => i >= pos.startIndex && i < pos.endIndex);
        if (wordPosition) {
          charToWordMap.set(i, wordPosition.wordIndex);
        }
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.volume = 0.9;
      if (selectedVoice) utterance.voice = selectedVoice;
      utteranceRef.current = utterance;

      let currentWordIndexInternal = -1;
      const mobile = isMobile();
      
      // Calculate dynamic timing for each word based on speech characteristics
      const calculateWordTiming = (word: string, rate: number = 0.8) => {
        let baseTime = 300; // Base time per word in ms
        
        // Adjust for word length
        baseTime += word.length * 30;
        
        // Adjust for punctuation (natural pauses)
        if (/[.,;:]$/.test(word)) baseTime += 150;
        if (/[!?]$/.test(word)) baseTime += 200;
        if (/[.]$/.test(word)) baseTime += 250; // Sentence endings
        
        // Adjust for speech rate
        baseTime = baseTime / rate;
        
        // Ensure minimum and maximum bounds
        return Math.max(200, Math.min(baseTime, 1200));
      };

      // Fallback timer function with dynamic timing
      const startFallbackTimer = () => {
        if (fallbackTimerRef.current) clearInterval(fallbackTimerRef.current);
        
        const scheduleNextWord = () => {
          currentWordIndexInternal++;
          if (currentWordIndexInternal < words.length) {
            setCurrentWordIndex(currentWordIndexInternal);
            onWordHighlight?.(currentWordIndexInternal);
            
            // Calculate timing for next word
            const nextWordTime = calculateWordTiming(words[currentWordIndexInternal], 0.8);
            fallbackTimerRef.current = window.setTimeout(scheduleNextWord, nextWordTime);
          } else {
            setCurrentWordIndex(-1);
            fallbackTimerRef.current = null;
          }
        };
        
        // Start with first word timing
        const firstWordTime = calculateWordTiming(words[0] || '', 0.8);
        fallbackTimerRef.current = window.setTimeout(scheduleNextWord, firstWordTime);
      };

      // Enhanced boundary event handler
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          lastBoundaryTimeRef.current = Date.now();
          
          const charIndex = event.charIndex;
          let wordIndex = -1;
          
          if (charToWordMap.has(charIndex)) {
            wordIndex = charToWordMap.get(charIndex) || -1;
          } else {
            // Try nearby characters
            for (let i = 1; i <= 5; i++) {
              if (charToWordMap.has(charIndex - i)) {
                wordIndex = charToWordMap.get(charIndex - i) || -1;
                break;
              }
              if (charToWordMap.has(charIndex + i)) {
                wordIndex = charToWordMap.get(charIndex + i) || -1;
                break;
              }
            }
          }
          
          if (wordIndex >= 0 && wordIndex < words.length) {
            currentWordIndexInternal = wordIndex;
            setCurrentWordIndex(wordIndex);
            onWordHighlight?.(wordIndex);
            
            // If we're getting boundary events, clear fallback timer
            if (fallbackTimerRef.current) {
              clearTimeout(fallbackTimerRef.current);
              fallbackTimerRef.current = null;
            }
          }
        }
      };

      utterance.onstart = () => {
        setIsSpeaking(true);
        currentWordIndexInternal = -1;
        lastBoundaryTimeRef.current = Date.now();
        
        setTimeout(() => {
          // Always highlight first word
          currentWordIndexInternal = 0;
          setCurrentWordIndex(0);
          onWordHighlight?.(0);
          
          // For mobile or as a safety net, check if boundary events are working
          setTimeout(() => {
            const timeSinceLastBoundary = Date.now() - lastBoundaryTimeRef.current;
            
            // If we haven't received boundary events recently, or we're on mobile, start fallback
            if (mobile || timeSinceLastBoundary > 800) {
              console.log('Starting fallback timer for word highlighting');
              // Start from word 1 since we already highlighted word 0
              currentWordIndexInternal = 0;
              startFallbackTimer();
            }
          }, 800); // Reduced delay for better sync
          
          // Also set up a monitoring interval to detect if boundary events stop coming
          const boundaryMonitor = setInterval(() => {
            if (!speechSynthesis.speaking) {
              clearInterval(boundaryMonitor);
              return;
            }
            
            const timeSinceLastBoundary = Date.now() - lastBoundaryTimeRef.current;
            if (timeSinceLastBoundary > 1000 && currentWordIndexInternal < words.length - 1) {
              console.log('Boundary events stopped, switching to fallback');
              clearInterval(boundaryMonitor);
              startFallbackTimer();
            }
          }, 800);
          
        }, 200);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentWordIndex(-1);
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentWordIndex(-1);
        if (fallbackTimerRef.current) {
          clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
      };

      setTimeout(() => {
        speechSynthesis.speak(utterance);
      }, 300);
    }, 100);
  }, [isEnabled, isMuted, selectedVoice, isMobile]);

  const stop = useCallback(() => {
    console.log('Stopping speech');
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    if (fallbackTimerRef.current) {
      clearInterval(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, []);

  const pause = useCallback(() => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    }
  }, []);

  const resume = useCallback(() => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
      // Restart monitoring for boundary events after resume
      lastBoundaryTimeRef.current = Date.now();
    }
  }, []);

  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => {
      if (!prev) {
        setIsMuted(false);
      } else {
        stop();
      }
      return !prev;
    });
  }, [stop]);

  const toggleMuted = useCallback(() => {
    setIsMuted(prev => {
      if (!prev) {
        stop();
      }
      return !prev;
    });
  }, [stop]);

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setSelectedVoice(voice);
  }, []);

  return {
    speak: speakNarration,
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
    voices,
    setVoice,
    words: wordsRef.current,
  };
};