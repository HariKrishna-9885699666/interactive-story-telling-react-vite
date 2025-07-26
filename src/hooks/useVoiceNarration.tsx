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

  // Speak with word highlighting (syncs with voice)
  const speakNarration = useCallback((text: string, onWordHighlight?: (wordIndex: number) => void) => {
    // First, cancel any ongoing speech synthesis
    speechSynthesis.cancel();
    
    // Reset all state variables
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
    
    // Return early if narration is disabled or muted or text is empty
    if (!isEnabled || isMuted || !text.trim()) return;

    // Add a small delay before starting new narration to ensure previous one is fully stopped
    setTimeout(() => {
      // Process text into words with better tokenization
      // This regex splits text into words while preserving punctuation with the words
      // We're using a more sophisticated regex to handle various word boundaries and punctuation
      const words = text.match(/[\w']+(?:[.,!?;:])?/g) || [];
      wordsRef.current = words;
      onWordHighlightRef.current = onWordHighlight;

    // Create a more accurate mapping of character positions to word indices
    const charToWordMap = new Map<number, number>();
    
    // Find all word positions in the original text
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
    
    // Map each character position to its corresponding word index
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

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        // Get the character index from the speech event
        const charIndex = event.charIndex;
        
        // Find the closest word index for this character position
        let wordIndex = -1;
        
        // Try exact match first
        if (charToWordMap.has(charIndex)) {
          wordIndex = charToWordMap.get(charIndex) || -1;
        } else {
          // If no exact match, find the closest word by searching nearby positions
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
        
        // Ensure we don't go out of bounds and we have a valid word index
        if (wordIndex >= 0 && wordIndex < words.length) {
          setCurrentWordIndex(wordIndex);
          onWordHighlight?.(wordIndex);
        }
      }
    };

    utterance.onstart = () => {
      console.log('Speech started');
      setIsSpeaking(true);
      // Initialize with the first word after a small delay to ensure synchronization
      // Use a slightly longer delay to ensure text is fully visible before highlighting begins
      setTimeout(() => {
        setCurrentWordIndex(0);
        onWordHighlight?.(0);
      }, 200);
    };
    utterance.onend = () => {
      console.log('Speech ended');
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentWordIndex(-1);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentWordIndex(-1);
    };

    // Add a small delay before starting speech synthesis to ensure UI is ready
    setTimeout(() => {
      console.log('Speaking utterance');
      speechSynthesis.speak(utterance);
    }, 300);
  }, 100); // Delay the entire speech process to ensure previous speech is fully canceled
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