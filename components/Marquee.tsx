import React from 'react';

const Marquee: React.FC = () => {
  return (
    <div className="bg-[#ccff00] text-black border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative transform -rotate-2 scale-105 my-20 shadow-[0_0_20px_#ccff00]">
      <div className="inline-block animate-[scroll_10s_linear_infinite] font-black text-3xl font-mono">
        МЫ ЛОМАЕМ ИНТЕРНЕТ • КОД ГОВНО НО РАБОТАЕТ • 100% БАГОВ • ГАРАНТИЯ ХУЕВОГО КАЧЕСТВА • ПЛАТИ ИЛИ УХОДИ • PHP IS ALIVE • DELETE PROD • 
        МЫ ЛОМАЕМ ИНТЕРНЕТ • КОД ГОВНО НО РАБОТАЕТ • 100% БАГОВ • ГАРАНТИЯ ХУЕВОГО КАЧЕСТВА • ПЛАТИ ИЛИ УХОДИ • PHP IS ALIVE • DELETE PROD • 
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;