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

  // Speak with word highlighting (syncs with voice, fallback for mobile)
  const speakNarration = useCallback((text: string, onWordHighlight?: (wordIndex: number) => void) => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    if (!isEnabled || isMuted || !text.trim()) return;

    setTimeout(() => {
      const words = text.match(/[\w']+(?:[.,!?;:])?/g) || [];
      wordsRef.current = words;
      onWordHighlightRef.current = onWordHighlight;

      // --- Fallback timer for mobile ---
      let fallbackTimer: number | null = null;
      let fallbackIndex = 0;
      let boundaryFired = false;

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

      // Fallback: If onboundary doesn't fire, use timer
      const startFallback = () => {
        if (fallbackTimer) clearInterval(fallbackTimer);
        fallbackIndex = 0;
        fallbackTimer = window.setInterval(() => {
          setCurrentWordIndex(idx => {
            const nextIdx = idx < 0 ? 0 : idx + 1;
            if (nextIdx < words.length) {
              onWordHighlight?.(nextIdx);
              return nextIdx;
            } else {
              if (fallbackTimer) clearInterval(fallbackTimer);
              return -1;
            }
          });
        }, 350); // Adjust speed as needed
      };

      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          boundaryFired = true;
          if (fallbackTimer) clearInterval(fallbackTimer);
          const charIndex = event.charIndex;
          let wordIndex = -1;
          if (charToWordMap.has(charIndex)) {
            wordIndex = charToWordMap.get(charIndex) || -1;
          } else {
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
            setCurrentWordIndex(wordIndex);
            onWordHighlight?.(wordIndex);
          }
        }
      };

      utterance.onstart = () => {
        setIsSpeaking(true);
        setTimeout(() => {
          setCurrentWordIndex(0);
          onWordHighlight?.(0);
          // If onboundary doesn't fire in 500ms, start fallback
          setTimeout(() => {
            if (!boundaryFired) startFallback();
          }, 500);
        }, 200);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentWordIndex(-1);
        if (fallbackTimer) clearInterval(fallbackTimer);
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setCurrentWordIndex(-1);
        if (fallbackTimer) clearInterval(fallbackTimer);
      };

      setTimeout(() => {
        speechSynthesis.speak(utterance);
      }, 300);
    }, 100);
  }, [isEnabled, isMuted, selectedVoice]);

  const stop = useCallback(() => {
    console.log('Stopping speech');
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
  }, []);

  const pause = useCallback(() => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
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
