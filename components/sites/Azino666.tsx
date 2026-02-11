import React, { useState, useEffect } from 'react';

const Azino666 = ({ onBack }: { onBack: () => void }) => {
  const [slots, setSlots] = useState(["🍒", "🍒", "🍒"]);
  const [spinning, setSpinning] = useState(false);
  const items = ["🍒", "🍋", "7️⃣", "💩", "💎"];

  const spin = () => {
      setSpinning(true);
      const interval = setInterval(() => {
          setSlots([
              items[Math.floor(Math.random() * items.length)],
              items[Math.floor(Math.random() * items.length)],
              items[Math.floor(Math.random() * items.length)]
          ]);
      }, 100);

      setTimeout(() => {
          clearInterval(interval);
          setSlots(["💩", "💩", "💩"]);
          setSpinning(false);
      }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#2b0000] flex flex-col items-center justify-center relative overflow-hidden p-4">
      <button onClick={onBack} className="absolute top-4 left-4 z-50 text-white border border-red-500 px-4 py-1">← ESC</button>
      
      
      <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif')] opacity-20 bg-cover mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 text-center w-full max-w-2xl">
          <h1 className="text-5xl md:text-8xl font-black text-yellow-500 mb-8 drop-shadow-[0_0_10px_red] animate-bounce">
              AZINO 666
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 uppercase tracking-widest font-bold">Поднял бабла? Верни обратно.</p>

          <div className="bg-black border-8 border-yellow-600 p-4 md:p-8 rounded-3xl shadow-[0_0_50px_orange] inline-block mb-12 transform scale-90 md:scale-100">
              <div className="flex gap-2 md:gap-4 mb-8 bg-white/10 p-4 rounded-xl justify-center">
                  {slots.map((s, i) => (
                      <div key={i} className="w-16 h-16 md:w-24 md:h-24 bg-white flex items-center justify-center text-4xl md:text-6xl rounded border-4 border-gray-300">
                          {s}
                      </div>
                  ))}
              </div>
              <button 
                onClick={spin} 
                disabled={spinning}
                className="w-full bg-gradient-to-b from-red-500 to-red-900 text-white font-black text-xl md:text-3xl py-4 rounded-xl border-b-8 border-red-950 active:border-b-0 active:translate-y-2 transition-all disabled:opacity-50"
              >
                  {spinning ? "КРУТИМ..." : "КРУТИТЬ БАРАБАН"}
              </button>
          </div>

          <div className="text-yellow-200 text-xs md:text-sm animate-pulse">
              ВЫИГРЫШ: 0 РУБЛЕЙ (Комиссия за вывод: 100%)
          </div>
      </div>
    </div>
  );
};
export default Azino666;
