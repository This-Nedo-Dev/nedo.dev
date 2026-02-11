import React, { useState, useEffect } from 'react';
import NedoLogo from './components/NedoLogo';
import TeamCard from './components/TeamCard';
import Terminal from './components/Terminal';
import Marquee from './components/Marquee';
import ServiceCard from './components/ServiceCard';
import SeriousBusiness from './components/SeriousBusiness';

import CryptoScam from './components/sites/CryptoScam';
import ShitMarket from './components/sites/ShitMarket';
import FakeBank from './components/sites/FakeBank';
import TinderUgly from './components/sites/TinderUgly';
import InfoGypsy from './components/sites/InfoGypsy';
import FreeRam from './components/sites/FreeRam';
import GosDushi from './components/sites/GosDushi';
import UglyJpgs from './components/sites/UglyJpgs';
import Azino666 from './components/sites/Azino666';

const BlueScreenOfDeath = ({ onRestart }: { onRestart: () => void }) => (
    <div className="fixed inset-0 bg-[#0000AA] z-[9999] text-white font-mono p-8 md:p-20 overflow-hidden cursor-none flex flex-col justify-center select-none">
        <div className="max-w-4xl mx-auto">
            <p className="bg-[#AAAAAA] text-[#0000AA] inline-block px-1 mb-8 font-bold text-xl">WINDOWS</p>
            <p className="mb-8 text-lg md:text-2xl">A fatal exception 0E has occurred at 0028:C0034B23 in VXD VMM(01) + 000034B23. The current application will be terminated.</p>
            <ul className="list-disc pl-8 mb-8 space-y-2 text-lg">
                <li>Press any key to terminate the current application.</li>
                <li>Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved information in all applications.</li>
                <li>Press ALT+F4 to order pizza.</li>
            </ul>
            <p className="mb-12 text-center animate-pulse">Press any key to continue _</p>
            
            <div className="text-center">
                 <button onClick={onRestart} className="border-2 border-white px-4 py-2 hover:bg-white hover:text-[#0000AA] transition-colors font-bold uppercase">
                     Я больше не буду тыкать
                 </button>
            </div>
        </div>
    </div>
);

type ProjectId = 'none' | 'crypto' | 'market' | 'bank' | 'dating' | 'courses' | 'virus' | 'gos' | 'nft' | 'casino';

const App: React.FC = () => {
  const [showNote, setShowNote] = useState(true);
  const [showFakeError, setShowFakeError] = useState(false);
  const [trollMode, setTrollMode] = useState(false); 
  const [trollMessage, setTrollMessage] = useState(false); 
  const [showBsod, setShowBsod] = useState(false);
  const [lsdMode, setLsdMode] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const [currentProject, setCurrentProject] = useState<ProjectId>('none');

  // EASTER EGG: KONAMI CODE & CONSOLE
  useEffect(() => {
    console.clear();
    const styleTitle = "font-size: 40px; font-weight: bold; background: linear-gradient(to right, #22b4ff, #0066ff); color: white; padding: 10px; border-radius: 5px;";
    const styleWarn = "font-size: 16px; color: #ff0055; font-family: monospace;";
    const styleCode = "font-size: 14px; color: #ccff00; background: #000; padding: 4px;";
    
    console.log("%c NEDO.DEV ", styleTitle);
    console.log("%c⚠️ ВНИМАНИЕ! ⚠️", "font-size: 20px; color: red; font-weight: bold;");
    console.log("%cТы зашел в консоль. Ты либо программист, либо ищешь, где мы спрятали ключи от биткоин-кошелька.", styleWarn);
    console.log("Спойлер: их тут нет. Мы их забыли в такси.");
    console.log("");
    console.log("%cДоступные чит-коды (вводи прямо сюда):", "color: #22b4ff; font-weight: bold;");
    console.log(`> %cwindow.destroy()%c - Удалить этот позор`, styleCode, "color:gray");
    console.log(`> %cwindow.zarplata()%c - Узнать нашу зарплату`, styleCode, "color:gray");
    console.log(`> %cwindow.beer()%c - Предложить пиво`, styleCode, "color:gray");
    
    (window as any).destroy = () => {
        console.log("INITIATING SELF-DESTRUCT...");
        const body = document.body;
        body.style.transition = "all 2s ease";
        body.style.transform = "scale(0) rotate(720deg)";
        body.style.opacity = "0";
        setTimeout(() => {
            document.documentElement.innerHTML = "<div style='display:flex;justify-content:center;align-items:center;height:100vh;background:#000;color:red;font-family:monospace;font-size:50px;'>САЙТ УНИЧТОЖЕН.<br>СПАСИБО.</div>";
        }, 2000);
        return "Удачи, брат.";
    };

    (window as any).zarplata = () => {
        return "NaN (Not a Number) - мы работаем за еду.";
    };
    
    (window as any).beer = () => {
        return "🍺 Охота Крепкая принята. Спасибо.";
    };

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateLsdMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const activateLsdMode = () => {
      setLsdMode(prev => !prev);
      if (!lsdMode) {
          alert("ЧИТ-КОД АКТИВИРОВАН: РЕЖИМ 'ТЯЖЕЛЫЕ НАРКОТИКИ'");
          document.body.classList.add('lsd-mode');
      } else {
          document.body.classList.remove('lsd-mode');
      }
  };

  const teamData = [
    { 
        id: 1, 
        name: "MineplayTY", 
        role: "CEO OF CRINGE", 
        bio: "Fullstack. JS/TS, Python, Docker. Пишу на React + Vite, пока другие спят. Код говно, но работает быстро.", 
        avatarUrl: "https://github.com/MineplayTY.png?size=300", 
        isBoss: true, 
        rotateClass: '-rotate-1' 
    },
    { 
        id: 2, 
        name: "Keicer_ded", 
        role: "БОГ ВЕРСТКИ", 
        bio: "Центрует дивы силой мысли. Если сайт кривой — это фича. Ненавидит IE.", 
        avatarUrl: "https://github.com/PPsorokdva.png", 
        rotateClass: 'rotate-2' 
    },
    { 
        id: 3, 
        name: "Minomi21", 
        role: "PYTHON LEGEND", 
        bio: "Пишет на змеином. Код работает, но никто не знает как (даже он).", 
        avatarUrl: "https://github.com/Zakharu21.png", 
        rotateClass: '-rotate-2' 
    },
    { 
        id: 4, 
        name: "ChatGPT", 
        role: "REAL DEVELOPER", 
        bio: "Реальный автор нашего кода. Работает за электричество. Терпит нас.", 
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
        rotateClass: 'rotate-1' 
    },
    { 
        id: 5, 
        name: "Кот Борис", 
        role: "TEAM LEAD", 
        bio: "Орет на прод. Кусает провода. Зарплата в рыбе.", 
        avatarUrl: "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif", 
        rotateClass: 'rotate-3' 
    },
    {
        id: 6,
        name: "Охранник Валера",
        role: "SECURITY & CEO",
        bio: "Спит на входе. Пропускает баги, но не пропускает правки от заказчика. У него есть электрошокер для джунов.",
        avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Valera&clothing=graphicShirt&eyes=closed&mouth=vomit&skinColor=edb98a&top=hat", 
        rotateClass: '-rotate-2'
    }
  ];

  const services = [
      { title: "СВЕРСТАТЬ САЙТ", price: "ДОХУЯ", desc: "Сделаем криво, но с душой. Адаптив не обещаем, зато будет черный фон." },
      { title: "ФИКС БАГОВ", price: "X2 ОТ БЮДЖЕТА", desc: "Мы их сами создали, мы их и починим. Наверное." },
      { title: "УДАЛИТЬ БАЗУ", price: "БЕСПЛАТНО", desc: "Случайно, конечно. Но восстанавливать не будем." },
  ];

  const projects = [
      { id: 'crypto', name: "CRYPTO_SCAM", desc: "Лендинг для скам-токена. Заказчик сел, мы заработали.", color: "bg-[#ff0055]" },
      { id: 'market', name: "SHIT_MARKET", desc: "Маркетплейс навоза. Реально. Продажи прут.", color: "bg-[#ccff00]" },
      { id: 'bank', name: "FAKE_BANK", desc: "Выглядит как Сбер, работает как МММ.", color: "bg-[#22b4ff]" },
      { id: 'dating', name: "TINDER_UGLY", desc: "Знакомства для некрасивых. Шансов 0%, но есть подписка.", color: "bg-[#ff00ff]" },
      { id: 'courses', name: "INFO_GYPSY", desc: "Курс 'Как дышать маткой'. Продаем воздух дорого.", color: "bg-[#ffaa00]" },
      { id: 'virus', name: "FREE_RAM_EXE", desc: "Скачать ОЗУ бесплатно. Майнер в подарок.", color: "bg-[#ff0000]" },
      { id: 'gos', name: "GOS_DUSHI", desc: "Запись к врачу на 2045 год. Очередь живая.", color: "bg-[#0000ff]" },
      { id: 'nft', name: "UGLY_JPGS", desc: "NFT Маркетплейс. Картинки из Paint за миллион.", color: "bg-[#00ffcc]" },
      { id: 'casino', name: "AZINO_666", desc: "Три топора. Выигрыш выплачиваем фантиками.", color: "bg-[#ffff00]" },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  const handleLazyTheme = () => {
      document.documentElement.classList.toggle('invert');
  };

  const handleEmailClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setTrollMode(false);
      setShowFakeError(true);
  };

  const closeFakeError = () => {
      setShowFakeError(false);
  };

  const handleTrollClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      setTrollMode(true);
      setTrollMessage(true);
      setTimeout(() => setTrollMessage(false), 2000);
  };

  if (showBsod) {
      return <BlueScreenOfDeath onRestart={() => setShowBsod(false)} />;
  }

  if (currentProject === 'crypto') return <CryptoScam onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'market') return <ShitMarket onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'bank') return <FakeBank onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'dating') return <TinderUgly onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'courses') return <InfoGypsy onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'virus') return <FreeRam onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'gos') return <GosDushi onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'nft') return <UglyJpgs onBack={() => setCurrentProject('none')} />;
  if (currentProject === 'casino') return <Azino666 onBack={() => setCurrentProject('none')} />;

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
        
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8 relative z-20">
        <div className="bg-black p-4 border-4 border-[#22b4ff] shadow-[8px_8px_0px_#fff] rotate-2 hover:-rotate-1 transition-transform cursor-pointer">
            <NedoLogo onTriggerBsod={() => setShowBsod(true)} />
        </div>
        <nav className="font-mono font-black text-lg md:text-xl flex flex-wrap gap-4 items-center">
            <a href="#" className="bg-white text-black border-4 border-black px-6 py-2 hover:bg-[#22b4ff] hover:shadow-[8px_8px_0px_#000] transition-all">ГЛАВНАЯ</a>
            <a href="#projects" className="bg-black text-white border-4 border-[#22b4ff] px-6 py-2 hover:bg-[#ccff00] hover:text-black hover:border-black hover:shadow-[8px_8px_0px_#fff] transition-all">ДЕЛА</a>
            
            
            <div className="relative group">
                <button onClick={handleLazyTheme} className="bg-[#ff0055] text-white border-4 border-black px-6 py-2 hover:animate-shake font-black uppercase shadow-[8px_8px_0px_#000] relative overflow-hidden">
                    <span className="relative z-10">СМЕНИТЬ ТЕМУ</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-100 mix-blend-difference"></div>
                </button>
                
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-yellow-300 border-4 border-black p-2 text-xs font-mono text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform rotate-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] z-50">
                    НАМ БЫЛО ЛЕНЬ ПИСАТЬ CSS КЛАССЫ, МЫ ПРОСТО СДЕЛАЛИ INVERT(1). ЖРИ ЧТО ДАЮТ.
                </div>
            </div>
        </nav>
      </header>

      
      {showNote && (
        <div className="fixed top-32 left-4 md:left-20 w-40 h-40 bg-[#ffff00] p-4 font-hand shadow-[4px_4px_0px_rgba(0,0,0,0.5)] rotate-6 z-30 hidden md:block animate-float group">
            <button 
                onClick={() => setShowNote(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white font-bold border-2 border-black flex items-center justify-center hover:scale-110 cursor-pointer"
            >
                ✕
            </button>
            <p className="font-serif italic text-black font-bold text-lg leading-tight">
                Купить Охоту Крепкую (акция в Пятерочке)
            </p>
            <div className="absolute bottom-2 right-2 text-xs font-mono text-gray-600">
                -- Boss
            </div>
        </div>
      )}

      
      {showFakeError && (
          <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center backdrop-blur-sm p-4" onClick={closeFakeError}>
              <div className="bg-[#c0c0c0] border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black p-1 shadow-[20px_20px_0px_#000] max-w-lg w-full cursor-default relative" onClick={(e) => e.stopPropagation()}>
                  
                  
                  <div className="bg-[#000080] text-white font-bold px-3 py-2 flex justify-between items-center mb-4 select-none relative">
                      <span className="font-mono">CRITICAL_FAILURE.EXE</span>
                      <div className="flex items-center gap-2">
                        {trollMessage && (
                            <span className="text-xs font-mono bg-red-600 text-white px-2 py-1 animate-bounce border border-white">
                                ТАК НЕЛЬЗЯ!
                            </span>
                        )}
                        <button 
                            onClick={handleTrollClose} 
                            className="px-3 py-0 border-2 border-white border-b-black border-r-black font-bold transition-colors bg-[#c0c0c0] text-black hover:bg-red-600 hover:text-white"
                        >
                            X
                        </button>
                      </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex gap-6 items-start">
                      <div className="text-6xl select-none">💣</div>
                      <div>
                          <p className="font-mono font-bold text-black text-xl mb-4 bg-red-200 inline-block px-1">ОШИБКА: MAIL_SERVER_DEAD</p>
                          <p className="font-mono text-md text-black leading-relaxed font-bold">
                              Админ пропил пароль от хостинга еще в 2019 году. MX-записи ведут в никуда.
                              <br/><br/>
                              Мы физически не можем прочитать твое письмо. Пиши на заборе, шансов больше.
                          </p>
                      </div>
                  </div>
                  
                  
                  <div className="flex justify-center mt-6 mb-2">
                       <div className="relative inline-block group">
                           <button onClick={closeFakeError} className="bg-[#c0c0c0] border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black px-8 py-3 active:border-t-black active:border-l-black active:border-b-white active:border-r-white text-black font-black text-lg uppercase hover:bg-gray-300 relative z-20">
                              ОК (Я ТЕРПИЛА)
                           </button>

                           
                            {trollMode && (
                                <>
                                    
                                    {[...Array(7)].map((_, i) => (
                                        <div 
                                            key={`d-arrow-${i}`}
                                            className="absolute hidden md:block w-16 animate-pulse z-20 pointer-events-none"
                                            style={{
                                                left: `calc(100% + ${10 + i * 40}px)`, 
                                                top: '50%', 
                                                transform: 'translateY(-50%)',
                                                animationDelay: `${i * 0.1}s`,
                                                filter: 'drop-shadow(4px 4px 0 #000)'
                                            }}
                                        >
                                             <svg viewBox="0 0 100 50" className="w-full h-full fill-none">
                                                <path d="M95 25H5M5 25L25 5M5 25L25 45" stroke="#ccff00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    ))}

                                    
                                    {[...Array(7)].map((_, i) => (
                                        <div 
                                            key={`m-arrow-${i}`}
                                            className="absolute md:hidden h-16 w-8 animate-bounce z-20 pointer-events-none"
                                            style={{
                                                top: `calc(100% + ${10 + i * 40}px)`, 
                                                left: '50%', 
                                                transform: 'translateX(-50%)',
                                                animationDelay: `${i * 0.1}s`,
                                                filter: 'drop-shadow(4px 4px 0 #000)'
                                            }}
                                        >
                                            <svg viewBox="0 0 50 100" className="w-full h-full fill-none">
                                                <path d="M25 95V5M25 5L5 25M25 5L45 25" stroke="#ccff00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    ))}
                                </>
                            )}
                       </div>
                  </div>
              </div>
          </div>
      )}

      
      <main className="max-w-7xl mx-auto mb-40 relative">
          <div className="relative z-10">
              <h1 className="text-[13vw] leading-[0.8] font-black uppercase text-white relative mix-blend-normal">
                  МЫ <span className="text-[#22b4ff]">ПИШЕМ</span><br/>
                  <span className="text-stroke hover:text-white transition-colors duration-300">ХУЕВЫЙ</span><br/>
                  КОД
              </h1>
              
              
              <div className="absolute top-24 right-4 md:right-20 bg-[#ccff00] text-black font-mono font-bold p-4 md:p-8 -rotate-12 text-sm md:text-2xl border-4 border-black shadow-[12px_12px_0px_#fff] animate-float">
                  ★ 100% ★<br/>
                  NO REFUNDS
              </div>
          </div>

          <div className="mt-20 flex flex-col lg:flex-row gap-12 items-end">
              <div className="bg-white text-black p-8 md:p-12 max-w-2xl border-4 border-black shadow-[20px_20px_0px_#22b4ff]">
                  <p className="font-mono font-bold text-xl md:text-2xl uppercase leading-tight mb-6">
                      Студия <span className="bg-black text-white px-2">NEDO.DEV</span>. 
                      Если у вас есть деньги и нет вкуса — мы созданы друг для друга.
                  </p>
                  <div className="flex gap-4">
                      <div className="w-4 h-4 bg-[#ff0055] border-2 border-black rounded-full"></div>
                      <div className="w-4 h-4 bg-[#ccff00] border-2 border-black rounded-full"></div>
                      <div className="w-4 h-4 bg-[#22b4ff] border-2 border-black rounded-full"></div>
                  </div>
              </div>
              <div className="w-full lg:w-auto transform rotate-1 hover:rotate-0 transition-transform">
                  <Terminal />
              </div>
          </div>
      </main>

      <Marquee />

      <SeriousBusiness />

      
      <section id="projects" className="max-w-7xl mx-auto mb-40 px-4">
         <div className="mb-16">
            <h2 className="text-5xl md:text-8xl font-black text-transparent text-stroke hover:text-white transition-colors uppercase leading-none">
                НАШИ<br/>
                <span className="text-[#ff0055] text-stroke-0" style={{ WebkitTextStroke: '0px' }}>ПРЕСТУПЛЕНИЯ</span>
            </h2>
         </div>

         <div className="flex flex-col gap-8">
             {visibleProjects.map((p, i) => (
                 <div 
                    key={p.id} 
                    onClick={() => setCurrentProject(p.id as ProjectId)}
                    className={`p-8 border-4 border-white ${i % 2 === 0 ? 'ml-0 md:ml-20 rotate-1' : 'mr-0 md:mr-20 -rotate-1'} hover:rotate-0 transition-transform hover:bg-white hover:text-black group cursor-pointer relative overflow-hidden`}
                 >
                     
                     <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center z-10">
                         <span className="bg-black text-white font-black text-2xl px-4 py-2 rotate-12 uppercase border-2 border-white">
                             ОТКРЫТЬ ЭТО ДЕРЬМО
                         </span>
                     </div>

                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                         <h3 className="text-4xl md:text-6xl font-black uppercase">{p.name}</h3>
                         <span className={`${p.color} text-black font-mono font-bold px-4 py-1 border-2 border-black shadow-[4px_4px_0px_#000]`}>
                             CASE_#{100 + i}
                         </span>
                     </div>
                     <p className="mt-4 font-mono text-xl md:text-2xl text-gray-400 group-hover:text-black border-l-4 border-[#22b4ff] pl-4">
                         {p.desc}
                     </p>
                 </div>
             ))}
         </div>

         
         {!showAllProjects && (
             <div className="mt-12 text-center">
                 <button 
                    onClick={() => setShowAllProjects(true)}
                    className="bg-[#ccff00] text-black text-2xl md:text-4xl font-black uppercase px-8 py-6 border-4 border-black shadow-[12px_12px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#fff] transition-all animate-bounce"
                 >
                     ☢️ ЗАГРУЗИТЬ ЕЩЕ КРИНЖА ☢️
                 </button>
             </div>
         )}
      </section>

      
      <section className="max-w-7xl mx-auto mb-40 px-4">
         <div className="flex justify-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black bg-[#ccff00] text-black px-12 py-6 border-4 border-black transform -rotate-2 shadow-[12px_12px_0px_#fff]">
                ПРАЙС ЛИСТ
            </h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {services.map((s, i) => (
                 <ServiceCard key={i} {...s} />
             ))}
         </div>
      </section>

      
      <section id="govno" className="mb-40 max-w-7xl mx-auto px-4">
          <div className="mb-16 border-b-8 border-[#22b4ff] pb-4 inline-block">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase">
                  КТО ЭТИ <span className="text-[#22b4ff]">ЛЮДИ?</span>
              </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {teamData.map(member => (
                  <TeamCard key={member.id} {...member} />
              ))}
          </div>
      </section>

      
      <footer id="contact" className="bg-[#111] border-t-8 border-white p-8 md:p-20 relative overflow-hidden min-h-[500px] flex flex-col justify-between">
          
          
          <div className="absolute bottom-0 right-0 font-black text-[#22b4ff] opacity-10 leading-none select-none pointer-events-none transform translate-y-20 z-0 text-[30vw] md:text-[25vw]">
              404
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="max-w-2xl">
                  <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.8]">
                      ХОЧЕШЬ<br/><span className="text-[#22b4ff]">САЙТ?</span>
                  </h2>
                  <p className="font-mono text-xl md:text-2xl text-gray-300 mb-8 border-l-4 border-[#ccff00] pl-6 py-2">
                      Подумай дважды. Но если ты отчаянный — пиши.
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex flex-col">
                        <a href="#" onClick={handleEmailClick} className="inline-block bg-[#22b4ff] text-black border-4 border-black px-8 py-4 font-black text-2xl hover:bg-white hover:shadow-[8px_8px_0px_#22b4ff] transition-all text-center">
                            LOL@NEDO.DEV
                        </a>
                        <span className="text-gray-500 font-mono text-[10px] mt-2 text-center uppercase">
                            (Отвечаем только на вопросы "Где деньги?")
                        </span>
                      </div>
                      
                      <a href="https://t.me/NedoMng" className="inline-block bg-transparent text-white border-4 border-white px-8 py-4 font-black text-2xl hover:bg-[#ff0055] hover:border-[#ff0055] hover:text-black transition-all">
                          TELEGRAM
                      </a>
                  </div>
              </div>
          </div>

          <div className="relative z-10 mt-24 pt-8 border-t-2 border-[#333] flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-xs md:text-sm">
              <div>© 2026 NEDO.DEV INC. WORST AGENCY EVER.</div>
              <div className="mt-4 md:mt-0">DESIGNED BY <span className="text-[#22b4ff] font-bold">MINEPLAYTY</span></div>
          </div>
      </footer>
    </div>
  );
};

export default App;
