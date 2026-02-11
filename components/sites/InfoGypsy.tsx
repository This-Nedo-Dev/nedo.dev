import React, { useState } from 'react';

const InfoGypsy = ({ onBack }: { onBack: () => void }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-serif relative overflow-x-hidden">
      <button onClick={onBack} className="fixed top-4 left-4 z-50 bg-black text-white px-4 py-2 font-bold uppercase hover:bg-gray-800 text-xs md:text-base">← Вернуться в бедность</button>

      
      {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#d4af37]/20 backdrop-blur-md p-4" onClick={() => setShowModal(false)}>
              <div className="bg-white border-8 border-[#d4af37] p-6 md:p-8 max-w-lg text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative animate-bounce">
                  <button onClick={() => setShowModal(false)} className="absolute top-2 right-4 text-2xl font-bold hover:text-red-500">×</button>
                  <div className="text-6xl mb-4">🌌</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#d4af37] mb-4 uppercase tracking-widest">
                      ВСЕЛЕННАЯ НЕ В РЕСУРСЕ
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 italic mb-6">
                      Ваша чакра закрыта для транзакций. Ретроградный Меркурий блокирует перевод.
                      <br/><br/>
                      Попробуйте подышать маткой и повторить попытку.
                  </p>
                  <button className="bg-[#d4af37] text-white px-6 py-3 md:px-8 md:py-3 font-bold rounded-full hover:bg-yellow-600 transition-colors text-sm md:text-base">
                      ПРИНЯТЬ И ОТПУСТИТЬ
                  </button>
              </div>
          </div>
      )}

      
      <div className="bg-[#d4af37] text-center py-2 font-bold text-xs tracking-widest uppercase animate-pulse pt-16 md:pt-2">
          ⚡ Осталось 1 место на поток ⚡
      </div>

      <header className="text-center py-12 md:py-20 px-4 bg-[url('https://media.giphy.com/media/l0Ex6kAKAoFRsFh6M/giphy.gif')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-7xl font-bold mb-6 text-[#d4af37] drop-shadow-md leading-tight">
                  ДЫШИ МАТКОЙ —<br/>ЗАРАБАТЫВАЙ МИЛЛИОНЫ
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 italic mb-8">
                  Авторский курс от <span className="font-bold">Илоны Блиновской-Маск</span>.
                  Я научу тебя входить в ресурс и выходить в окно.
              </p>
              <button onClick={() => setShowModal(true)} className="bg-[#d4af37] text-white text-lg md:text-2xl font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-xl hover:scale-105 transition-transform uppercase tracking-wider">
                  КУПИТЬ ЭНЕРГИЮ
              </button>
          </div>
      </header>

      <section className="py-12 md:py-16 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 uppercase">Что вы получите?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 border border-[#d4af37] rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">💸</div>
                  <h3 className="font-bold mb-2">Денежный поток</h3>
                  <p className="text-sm text-gray-500">Научишься просить деньги у мужа.</p>
              </div>
              <div className="p-6 border border-[#d4af37] rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">🧘‍♀️</div>
                  <h3 className="font-bold mb-2">Осознанность</h3>
                  <p className="text-sm text-gray-500">Поймешь, что ты лох, но осознанно.</p>
              </div>
              <div className="p-6 border border-[#d4af37] rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">🔮</div>
                  <h3 className="font-bold mb-2">Вибрации</h3>
                  <p className="text-sm text-gray-500">Поднимем твои вибрации до уровня перфоратора.</p>
              </div>
          </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center text-xs px-4">
          <p>ООО "ВОЗДУХ ИНКОРПОРЕЙТЕД" © 2026</p>
          <p className="text-gray-600 mt-2">Не является публичной офертой. Является скамом.</p>
      </footer>
    </div>
  );
};
export default InfoGypsy;