import React, { useState } from 'react';

const TinderUgly = ({ onBack }: { onBack: () => void }) => {
  const [currentId, setCurrentId] = useState(0);
  const [popup, setPopup] = useState<{show: boolean, type: 'match' | 'reject', text: string}>({ show: false, type: 'match', text: '' });

  const profiles = [
      { name: "Олег, 42", bio: "Живу с мамой. Люблю майонез. В душе поэт, на деле охранник.", img: "🥔" },
      { name: "Светлана, 54", bio: "Ищу папика. Пенсия маленькая. Зубы свои (почти).", img: "👵" },
      { name: "Игорь, ?", bio: "Просто Игорь. Не спрашивай, откуда этот запах.", img: "👽" },
      { name: "Виталик, 12", bio: "Бизнесмен, инвестор, мамин симпатяга. Ищу жену.", img: "👶" },
      { name: "Анжела, 30", bio: "Кошатница. 40 кошек. Мужчин не люблю, ищу спонсора для корма.", img: "🐈" },
      { name: "Вася 'Кастет'", bio: "Отсидел, вышел, ищу заочницу. Романтик.", img: "🔪" },
      { name: "Ершик", bio: "Просто туалетный ершик. Твой единственный шанс.", img: "🧹" },
      { name: "Твоя Судьба", bio: "Беги.", img: "💀" },
  ];

  const handleAction = (type: 'like' | 'dislike') => {
      if (type === 'dislike') {
          if (currentId < profiles.length - 1) {
             setCurrentId(c => c + 1);
          } else {
             setPopup({ show: true, type: 'reject', text: "Уроды закончились. Посмотри в зеркало." });
          }
      } else {
          setPopup({ 
              show: true, 
              type: 'match', 
              text: "ОШИБКА: Вы слишком красивы для этого человека (шутка, вы тоже урод, но база данных упала)." 
          });
      }
  };

  const closePopup = () => {
      setPopup({ ...popup, show: false });
      if (popup.type === 'match' && currentId < profiles.length - 1) {
          setCurrentId(c => c + 1);
      }
  };

  const profile = profiles[currentId] || profiles[profiles.length - 1];

  return (
    <div className="min-h-screen bg-pink-900 flex flex-col items-center justify-center p-4 relative font-sans text-white overflow-hidden">
      <button onClick={onBack} className="absolute top-4 left-4 bg-black border-2 border-white px-4 py-2 font-bold z-50">← ESCAPE</button>
      
      
      {popup.show && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200">
              <div className="bg-pink-600 border-4 border-white p-6 md:p-8 rounded-2xl max-w-md text-center shadow-[0_0_50px_#ff00ff]">
                  <div className="text-6xl mb-4">
                      {popup.type === 'match' ? '💔' : '🤮'}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">
                      {popup.type === 'match' ? "IT'S A MATCH!" : "GAME OVER"}
                  </h2>
                  <p className="font-mono text-base md:text-lg mb-8 leading-tight">
                      {popup.text}
                  </p>
                  <button onClick={closePopup} className="bg-white text-pink-600 font-black text-lg md:text-xl px-8 py-4 rounded-full hover:scale-105 transition-transform">
                      ПРОДОЛЖИТЬ СТРАДАТЬ
                  </button>
              </div>
          </div>
      )}

      <div className="w-full max-w-sm bg-black border-4 border-pink-500 rounded-xl overflow-hidden shadow-[10px_10px_0px_#ff00ff] relative z-10 flex flex-col max-h-[85vh]">
          <div className="bg-pink-600 p-4 text-center font-black text-2xl uppercase italic flex justify-between items-center flex-shrink-0">
              <span>💔 UGLY_DATE</span>
              <span className="text-xs bg-black px-2 py-1 rounded">ver 0.1</span>
          </div>
          
          <div className="flex-grow bg-gray-800 flex items-center justify-center text-8xl md:text-9xl relative overflow-hidden group min-h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <span className="z-0 group-hover:scale-110 transition-transform duration-500 select-none">{profile.img}</span>
              <div className="absolute bottom-4 left-4 z-20">
                  <h2 className="text-3xl md:text-4xl font-bold shadow-black drop-shadow-lg">{profile.name}</h2>
              </div>
          </div>

          <div className="p-4 md:p-6 flex-shrink-0">
              <div className="min-h-[60px] md:min-h-[80px]">
                <p className="text-gray-400 font-mono text-xs md:text-sm mb-4 border-l-4 border-pink-500 pl-4 italic">
                    "{profile.bio}"
                </p>
              </div>

              <div className="flex justify-between gap-4 md:gap-6">
                  <button 
                    onClick={() => handleAction('dislike')} 
                    className="flex-1 bg-gray-900 text-red-500 py-4 md:py-6 rounded-full text-3xl md:text-4xl border-4 border-gray-700 hover:border-red-500 hover:bg-red-900/20 transition-all active:scale-95 flex items-center justify-center"
                  >
                      ✖
                  </button>
                  <button 
                    onClick={() => handleAction('like')} 
                    className="flex-1 bg-gray-900 text-green-500 py-4 md:py-6 rounded-full text-3xl md:text-4xl border-4 border-gray-700 hover:border-green-500 hover:bg-green-900/20 transition-all active:scale-95 flex items-center justify-center"
                  >
                      ♥
                  </button>
              </div>
          </div>
      </div>
      <div className="mt-4 md:mt-8 text-center text-pink-300 text-xs font-mono opacity-50">
          Вы просмотрели {currentId + 1} из {profiles.length} уродов.
      </div>
    </div>
  );
};
export default TinderUgly;