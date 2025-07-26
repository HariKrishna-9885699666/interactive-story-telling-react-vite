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
  const speechStartTimeRef = useRef<number>(0);
  const boundaryTimesRef = useRef<number[]>([]);
  const adaptiveTimingRef = useRef<number[]>([]);

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

  // Learn timing patterns from successful boundary events
  const updateAdaptiveTiming = useCallback((wordIndex: number, actualTime: number) => {
    const words = wordsRef.current;
    if (!words[wordIndex]) return;
    
    const word = words[wordIndex];
    const expectedBase = 300 + (word.length * 25);
    const ratio = actualTime / expectedBase;
    
    // Store the ratio for this word type
    adaptiveTimingRef.current[wordIndex] = actualTime;
    
    // Update future predictions based on learned patterns
    for (let i = wordIndex + 1; i < words.length; i++) {
      if (!adaptiveTimingRef.current[i]) {
        const futureWord = words[i];
        let predictedTime = 300 + (futureWord.length * 25);
        
        // Apply learned ratio
        predictedTime *= ratio;
        
        // Adjust for punctuation
        if (/[.,;:]$/.test(futureWord)) predictedTime += 100;
        if (/[!?]$/.test(futureWord)) predictedTime += 150;
        if (/[.]$/.test(futureWord)) predictedTime += 200;
        
        adaptiveTimingRef.current[i] = Math.max(200, Math.min(predictedTime, 1000));
      }
    }
  }, []);

  // Adaptive fallback timer that learns from speech patterns
  const startAdaptiveFallback = useCallback((startIndex: number = 0) => {
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
    }
    
    let currentIndex = startIndex;
    const words = wordsRef.current;
    
    const scheduleNextWord = () => {
      if (currentIndex >= words.length) {
        setCurrentWordIndex(-1);
        return;
      }
      
      setCurrentWordIndex(currentIndex);
      onWordHighlightRef.current?.(currentIndex);
      
      // Calculate next word timing
      let nextTiming = adaptiveTimingRef.current[currentIndex];
      
      if (!nextTiming) {
        // Fallback calculation if we don't have learned timing
        const word = words[currentIndex];
        nextTiming = 300 + (word.length * 25);
        
        if (/[.,;:]$/.test(word)) nextTiming += 100;
        if (/[!?]$/.test(word)) nextTiming += 150;
        if (/[.]$/.test(word)) nextTiming += 200;
        
        // Adjust based on speech rate
        nextTiming = nextTiming / 0.8;
        nextTiming = Math.max(200, Math.min(nextTiming, 1000));
      }
      
      currentIndex++;
      
      if (currentIndex < words.length) {
        fallbackTimerRef.current = window.setTimeout(scheduleNextWord, nextTiming);
      }
    };
    
    scheduleNextWord();
  }, []);

  // Speak with word highlighting (syncs with voice, fallback for mobile)
  const speakNarration = useCallback((text: string, onWordHighlight?: (wordIndex: number) => void) => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    
    // Clear any existing fallback timer and reset timing data
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    
    boundaryTimesRef.current = [];
    adaptiveTimingRef.current = [];
    
    if (!isEnabled || isMuted || !text.trim()) return;

    setTimeout(() => {
      const words = text.match(/[\w']+(?:[.,!?;:])?/g) || [];
      wordsRef.current = words;
      onWordHighlightRef.current = onWordHighlight;

      // Create character to word mapping for boundary events
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

      let lastBoundaryWordIndex = -1;
      let boundaryEventCount = 0;
      const mobile = isMobile();
      let usingFallback = false;

      // Enhanced boundary event handler that learns timing
      utterance.onboundary = (event) => {
        if (event.name === 'word' && !usingFallback) {
          const currentTime = Date.now();
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
            boundaryEventCount++;
            boundaryTimesRef.current[wordIndex] = currentTime;
            
            // Learn timing from successful boundary events
            if (lastBoundaryWordIndex >= 0 && lastBoundaryWordIndex < wordIndex - 1) {
              const timeDiff = currentTime - boundaryTimesRef.current[lastBoundaryWordIndex];
              const wordsSpanned = wordIndex - lastBoundaryWordIndex;
              const avgTimePerWord = timeDiff / wordsSpanned;
              
              // Update timing for the words we learned about
              for (let i = lastBoundaryWordIndex + 1; i <= wordIndex; i++) {
                updateAdaptiveTiming(i, avgTimePerWord);
              }
            }
            
            lastBoundaryWordIndex = wordIndex;
            setCurrentWordIndex(wordIndex);
            onWordHighlight?.(wordIndex);
          }
        }
      };

      utterance.onstart = () => {
        setIsSpeaking(true);
        speechStartTimeRef.current = Date.now();
        boundaryEventCount = 0;
        
        // Always highlight first word immediately
        setTimeout(() => {
          setCurrentWordIndex(0);
          onWordHighlight?.(0);
          boundaryTimesRef.current[0] = Date.now();
        }, 100);
        
        // Monitor for boundary events and switch to fallback if needed
        setTimeout(() => {
          if (boundaryEventCount < 2 || mobile) {
            console.log('Switching to adaptive fallback - boundary events:', boundaryEventCount);
            usingFallback = true;
            
            // Start adaptive fallback from word 1 (we already showed word 0)
            startAdaptiveFallback(1);
          }
        }, 1200);
        
        // Secondary check - if boundary events stop coming
        const boundaryMonitor = setInterval(() => {
          if (!speechSynthesis.speaking || usingFallback) {
            clearInterval(boundaryMonitor);
            return;
          }
          
          const currentTime = Date.now();
          const lastBoundaryTime = Math.max(...boundaryTimesRef.current.filter(t => t > 0));
          
          if (currentTime - lastBoundaryTime > 1500) {
            console.log('Boundary events stopped, switching to adaptive fallback');
            clearInterval(boundaryMonitor);
            usingFallback = true;
            
            // Find current word index and continue from there
            const currentIndex = boundaryTimesRef.current.filter(t => t > 0).length;
            startAdaptiveFallback(currentIndex);
          }
        }, 1000);
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
  }, [isEnabled, isMuted, selectedVoice, isMobile, startAdaptiveFallback, updateAdaptiveTiming]);

  const stop = useCallback(() => {
    console.log('Stopping speech');
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
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
      // Note: We don't restart fallback here as speech should continue from where it paused
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