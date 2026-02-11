import React, { useState, useEffect } from 'react';

const CryptoScam = ({ onBack }: { onBack: () => void }) => {
  const [connected, setConnected] = useState(false);
  const [fakeTvl, setFakeTvl] = useState(942039123);
  const [notification, setNotification] = useState<{show: boolean, msg: string, type: 'success' | 'error'}>({show: false, msg: '', type: 'success'});
  
  useEffect(() => {
    const interval = setInterval(() => {
        setFakeTvl(prev => prev + Math.floor(Math.random() * 10000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const showNotify = (msg: string, type: 'success' | 'error') => {
      setNotification({show: true, msg, type});
      setTimeout(() => setNotification(n => ({...n, show: false})), 3000);
  };

  const handleConnect = () => {
      if (!connected) {
          showNotify("МЫ ПОЛУЧИЛИ ДОСТУП К ВАШЕМУ КОШЕЛЬКУ. СПАСИБО.", 'success');
          setConnected(true);
      }
  };

  const handleBuy = () => {
      showNotify("ОШИБКА: НЕДОСТАТОЧНО СРЕДСТВ НА КАРТЕ МАМЫ.", 'error');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      
      
      <div className={`fixed top-24 right-4 z-[100] transition-all duration-300 transform ${notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className={`border-l-4 p-4 rounded bg-gray-900 shadow-2xl max-w-xs ${notification.type === 'success' ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}`}>
              <div className="font-bold mb-1">{notification.type === 'success' ? 'SUCCESS' : 'ERROR'}</div>
              <div className="text-white text-sm">{notification.msg}</div>
          </div>
      </div>

      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-yellow-600/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      
      <nav className="relative z-50 flex justify-between items-center p-4 md:p-6 border-b border-white/10 backdrop-blur-md sticky top-0">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
              <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-bold text-black">
                  L
              </div>
              <span className="font-bold text-lg md:text-xl tracking-wider">LOH_COIN <span className="text-xs text-gray-500 align-top hidden md:inline">FINANCE</span></span>
          </div>
          <div className="flex gap-4">
              <button onClick={onBack} className="text-gray-400 hover:text-white text-sm hidden md:block">Назад в реальность</button>
              <button 
                onClick={handleConnect}
                className={`px-4 py-2 text-sm md:text-base md:px-6 rounded-full font-bold transition-all ${connected ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-yellow-400'}`}
              >
                  {connected ? '0x7F...SCAM' : 'ПОДКЛЮЧИТЬ'}
              </button>
          </div>
      </nav>

      
      <main className="relative z-10 container mx-auto px-4 pt-12 md:pt-20 pb-32 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/50 bg-yellow-500/10 text-yellow-500 text-xs md:text-sm font-bold mb-6 animate-bounce">
              🚀 Элон Маск (не) одобряет этот проект
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 leading-tight">
              ИНВЕСТИРУЙ В <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 animate-pulse">НИЧЕГО</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Первая в мире децентрализованная экосистема, которая гарантирует 
              <span className="text-white font-bold"> отрицательную доходность</span>. 
              Забудь про завод. Забудь про деньги.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-20 px-4">
              <button onClick={handleBuy} className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl font-bold text-black text-lg md:text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                  КУПИТЬ ТОКЕНЫ
              </button>
              <button className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white text-lg md:text-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                  WHITEPAPER (PDF)
              </button>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">Всего украдено (TVL)</div>
                  <div className="text-3xl md:text-4xl font-mono font-bold text-white">
                      ${fakeTvl.toLocaleString()}
                  </div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">Проценты (APY)</div>
                  <div className="text-3xl md:text-4xl font-mono font-bold text-green-400">
                      99,999%
                  </div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 transition-colors">
                  <div className="text-gray-400 text-sm uppercase tracking-widest mb-2">Инвесторов</div>
                  <div className="text-3xl md:text-4xl font-mono font-bold text-white">
                      0 (Ты первый)
                  </div>
              </div>
          </div>
      </main>

      
      <section className="relative z-10 max-w-md mx-auto mb-32 px-4">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
             
             <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold">Обмен (Swap)</h2>
                 <span className="text-xs text-gray-500">Комиссия: 100%</span>
             </div>

             
             <div className="bg-white/5 p-4 rounded-xl mb-2 border border-white/5 hover:border-white/20 transition-colors">
                 <div className="flex justify-between mb-2">
                     <span className="text-xs text-gray-400">Отдаешь</span>
                     <span className="text-xs text-gray-400">Баланс: Вся жизнь</span>
                 </div>
                 <div className="flex justify-between items-center">
                     <input type="number" placeholder="1000" className="bg-transparent text-xl md:text-2xl font-mono outline-none w-1/2" />
                     <div className="flex items-center gap-2 bg-black/50 px-2 py-1 md:px-3 md:py-1 rounded-lg">
                         <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500"></div>
                         <span className="font-bold text-sm md:text-base">RUB</span>
                     </div>
                 </div>
             </div>

             
             <div className="flex justify-center -my-3 relative z-10">
                 <div className="bg-[#2a2a2a] p-2 rounded-full border border-black cursor-pointer hover:rotate-180 transition-transform duration-500">
                     ⬇️
                 </div>
             </div>

             
             <div className="bg-white/5 p-4 rounded-xl mt-2 border border-white/5 hover:border-white/20 transition-colors">
                 <div className="flex justify-between mb-2">
                     <span className="text-xs text-gray-400">Получаешь</span>
                     <span className="text-xs text-gray-400">Баланс: 0</span>
                 </div>
                 <div className="flex justify-between items-center">
                     <input type="text" value="0.00" disabled className="bg-transparent text-xl md:text-2xl font-mono outline-none w-1/2 text-gray-500" />
                     <div className="flex items-center gap-2 bg-black/50 px-2 py-1 md:px-3 md:py-1 rounded-lg">
                         <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-500"></div>
                         <span className="font-bold text-sm md:text-base">LHC</span>
                     </div>
                 </div>
             </div>

             <button onClick={handleBuy} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-purple-900/20">
                 ОБМЕНЯТЬ БУДУЩЕЕ
             </button>
             <p className="text-[10px] text-center mt-4 text-gray-600">
                 Нажимая кнопку, вы соглашаетесь переписать квартиру на создателя сайта.
             </p>
          </div>
      </section>

      
      <section className="relative z-10 py-20 border-t border-white/5 bg-black/20">
          <div className="container mx-auto text-center">
              <p className="text-gray-500 uppercase tracking-widest text-sm mb-10">Нам доверяют (зря)</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4">
                  <span className="text-xl md:text-2xl font-black text-white">МММ</span>
                  <span className="text-xl md:text-2xl font-black text-white">КАЗИНО ВУЛКАН</span>
                  <span className="text-xl md:text-2xl font-black text-white">ЦЫГАНЕ</span>
                  <span className="text-xl md:text-2xl font-black text-white">ТВОЙ БЫВШИЙ</span>
              </div>
          </div>
      </section>

    </div>
  );
};

export default CryptoScam;