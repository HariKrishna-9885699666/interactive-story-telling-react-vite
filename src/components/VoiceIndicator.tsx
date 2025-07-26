import React from 'react';

interface VoiceIndicatorProps {
  isActive: boolean;
  message: string;
}

const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ isActive, message }) => {
  return (
    <div className={`
      fixed bottom-24 left-8 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full
      transition-all duration-300 z-50 border border-white/30
      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
    `}>
      <div className="flex items-center gap-3">
        <span className="text-lg">🎤</span>
        <span className="font-medium">{message}</span>
        {isActive && (
          <div className="flex gap-1 ml-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-5 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceIndicator;