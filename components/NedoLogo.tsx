import React, { useState } from 'react';

interface LogoProps {
    onTriggerBsod?: () => void;
}

const NedoLogo: React.FC<LogoProps> = ({ onTriggerBsod }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks === 5) {
        console.warn("SYSTEM WARNING: DO NOT CLICK THE LOGO. IT IS UNSTABLE.");
    }

    if (newClicks >= 10 && onTriggerBsod) {
        onTriggerBsod();
        setClicks(0);
    }
  };

  const chaosStyle = {
    transform: `rotate(${clicks * 5}deg) scale(${1 + clicks * 0.1})`,
    filter: `blur(${clicks * 0.5}px)`,
    transition: 'all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  };

  return (
    <div 
        className="logo-container relative inline-block cursor-help select-none" 
        onClick={handleClick}
        style={chaosStyle}
    >
      
      <div className="logo-mark text-4xl md:text-5xl lg:text-6xl">
        NEDO.DEV<span className="logo-dot">.</span>
      </div>
      {clicks > 0 && clicks < 10 && (
          <div className="absolute -top-4 -right-4 bg-red-600 text-white text-[10px] px-1 font-mono animate-bounce">
              WARN: {10 - clicks}
          </div>
      )}
    </div>
  );
};

export default NedoLogo;