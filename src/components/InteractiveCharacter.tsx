import React, { useState } from 'react';

interface InteractiveCharacterProps {
  emoji?: string;
  image?: string;
  name: string;
  position: { left: string; top: string };
  delay: number;
  isVisible: boolean;
  onClick?: () => void;
}

const InteractiveCharacter: React.FC<InteractiveCharacterProps> = ({
  emoji,
  image,
  name,
  position,
  delay,
  isVisible,
  onClick
}) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Multi-step fallback for AI images
  const [imgStep, setImgStep] = useState(0);
  // Step 0: original, 1: fallback AI prompt, 2: static placeholder
  let imgSrc = image;
  if (imgStep === 1 && image && image.includes('image.pollinations.ai')) {
    // fallback: use a generic prompt for higher success
    imgSrc = 'https://image.pollinations.ai/prompt/cartoon-animal?width=200&height=200';
  } else if (imgStep === 2) {
    imgSrc = '/ai-image-placeholder.png';
  }

  const handleImgError = () => {
    setImgStep((prev) => (prev < 2 ? prev + 1 : 2));
  };

  const handleClick = () => {
    setIsClicked(true);
    setIsHighlighted(true);
    onClick?.();
    setTimeout(() => setIsClicked(false), 800);
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  return (
    <div
      className={`
        w-16 h-16 sm:w-24 sm:h-24 cursor-pointer transition-all duration-700 ease-out
        flex items-center justify-center
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}
        ${isClicked ? 'scale-110' : 'hover:scale-105'}
        ${isHighlighted ? 'animate-pulse ring-4 ring-yellow-400/70' : ''}
        fade-in-character
      `}
      style={{
        transitionDelay: `${delay}ms`,
        margin: '0 4px',
      }}
      onClick={handleClick}
    >
      <div className={`
        w-full h-full backdrop-blur-sm rounded-3xl border-4 
        flex items-center justify-center shadow-2xl transition-all duration-300 group
        ${isHighlighted 
          ? 'bg-yellow-200/40 border-yellow-400/80 shadow-yellow-400/50' 
          : 'bg-white/20 border-white/40 hover:shadow-cyan-400/30'
        }
      `}>
        {image ? (
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            onError={handleImgError}
          />
        ) : (
          <div className="text-6xl">{emoji || '❓'}</div>
        )}
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                     bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </div>
    </div>
  );
};

export default InteractiveCharacter;
