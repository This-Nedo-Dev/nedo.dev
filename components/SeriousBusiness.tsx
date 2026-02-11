import React from 'react';

const SeriousBusiness: React.FC = () => {
  const handleCopy = (e: React.ClipboardEvent) => {
      e.preventDefault();
      alert("НЕ ВОРУЙ! (мама узнает)");
  };

  return (
    <div className="bg-white border-4 border-black p-6 md:p-12 transform rotate-1 my-20 max-w-6xl mx-auto shadow-[16px_16px_0px_#0066ff] relative overflow-hidden group">
        
        
        <div className="absolute top-0 right-0 md:top-6 md:right-6 rotate-12 z-20 pointer-events-none">
             <div className="bg-[#ff0055] text-white font-black text-2xl md:text-4xl px-6 py-4 border-4 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)] animate-pulse uppercase">
                СРОЧНО!!!
             </div>
             <div className="text-black font-mono font-bold text-xs bg-yellow-300 inline-block px-1 rotate-3 mt-1 border border-black">
                (мама ругается)
             </div>
        </div>

        <div className="relative z-10">
            
            <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-6 mb-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase text-black leading-[0.9]">
                        ПОЖАЛУЙСТА<br/><span className="text-[#0066ff]">КУПИТЕ САЙТ</span>
                    </h2>
                    <p className="font-serif italic text-gray-600 mt-2 text-xl max-w-lg">
                        Нам очень нужны деньги. Честно. Мы даже код почистили (немного).
                    </p>
                </div>
                
                <div className="mt-6 md:mt-0 transform -rotate-3">
                    <div className="font-mono text-2xl font-bold text-gray-400 line-through decoration-red-600 decoration-4">
                        1 000 000 $
                    </div>
                    <div className="font-black text-4xl text-[#0066ff]">
                        500 РУБЛЕЙ
                    </div>
                    <div className="text-xs font-mono text-gray-500 text-right">
                        *или шаурма
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div>
                    <h3 className="font-black text-2xl mb-4 uppercase bg-black text-white inline-block px-2 transform -rotate-1">
                        ПОЧЕМУ МЫ?
                    </h3>
                    <ul className="space-y-2 font-mono text-lg text-black">
                        <li className="flex items-center gap-2 bg-gray-100 p-1 border-l-4 border-[#ccff00]">
                            <span className="text-xl">😎</span>
                            <b>Смотрели гайды индусов</b>
                        </li>
                        <li className="flex items-center gap-2 bg-gray-100 p-1 border-l-4 border-[#ccff00]">
                            <span className="text-xl">🔫</span>
                            <b>Копим на AWP Dragon Lore</b>
                        </li>
                        <li className="flex items-center gap-2 bg-gray-100 p-1 border-l-4 border-[#ccff00]">
                            <span className="text-xl">🥺</span>
                            <b>Мамой клянусь не скам</b>
                        </li>
                        <li className="flex items-center gap-2 bg-gray-100 p-1 border-l-4 border-[#ccff00]">
                            <span className="text-xl">⚡</span>
                            <b>Делаем быстро (тяп-ляп)</b>
                        </li>
                    </ul>

                    
                    <a 
                        href="/1.pptx" 
                        download
                        className="mt-6 flex items-center justify-center gap-2 bg-[#0066ff] text-white border-4 border-black px-4 py-3 font-bold hover:bg-[#22b4ff] transition-colors shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none uppercase text-lg w-full"
                    >
                        <span>📂</span> СКАЧАТЬ ПРЕЗЕНТАЦИЮ.PPTX
                    </a>
                    <div className="text-center mt-1 text-[10px] font-mono text-gray-400 uppercase">
                        (Там картинки двигаются)
                    </div>
                </div>

                
                <div className="bg-yellow-50 text-black p-6 border-4 border-black relative rotate-1 shadow-inner" style={{backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '100% 2rem'}}>
                     
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/50 border border-gray-200 rotate-3 backdrop-blur-sm"></div>

                    <h3 className="font-bold text-2xl text-center mb-6 text-blue-700" style={{fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'}}>
                        Наш Бизнес План:
                    </h3>
                    
                    <div className="flex flex-col gap-5 font-bold text-lg" style={{fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'}}>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white shadow-sm">1</div>
                            <span className="line-through decoration-red-600 decoration-4 text-gray-400">Сделать норм сайт</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white shadow-sm">2</div>
                            <span>Поныть в чате</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white shadow-sm">3</div>
                            <span>Получить мильен</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center bg-white shadow-sm">4</div>
                            <span className="font-black text-[#ff0055] bg-yellow-300 px-2 border-2 border-black rotate-2">PROFIT!!!</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="w-full bg-[#ccff00] hover:bg-[#ff0055] hover:text-white text-black font-black uppercase text-xl py-4 border-4 border-black hover:shadow-[8px_8px_0px_#000] transition-all">
                            ДАТЬ ДЕНЯК
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="mt-12 border-t-4 border-black pt-8 relative">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-black text-white px-4 py-2 font-black font-mono text-sm md:text-base uppercase tracking-widest transform -rotate-1 border-2 border-transparent hover:border-[#ccff00] transition-colors">
                        LEGAL_DISCLAIMER.TXT
                    </div>
                    <div className="h-1 bg-black flex-grow"></div>
                    <div className="hidden md:block text-xs font-mono text-gray-400 uppercase font-bold">
                        READ_OR_DIE
                    </div>
                </div>
                
                <div 
                    className="bg-gray-100 p-6 md:p-10 border-l-8 border-red-600 font-mono text-xs md:text-sm text-justify text-gray-800 leading-relaxed select-none shadow-inner overflow-y-auto max-h-[500px] scrollbar-hide"
                    onContextMenu={(e) => e.preventDefault()}
                    onCopy={handleCopy}
                >
                    <p className="mb-6 font-bold uppercase text-red-600 text-lg md:text-xl border-b-2 border-red-200 pb-2">
                        СОГЛАШЕНИЕ О ПЕРЕДАЧЕ ДУШИ И ОТКАЗЕ ОТ ПРЕТЕНЗИЙ (VER. 666.0-BETA)
                    </p>
                    
                    <div className="space-y-6">
                        <p>
                            <strong className="text-black bg-yellow-200 px-1">1. ПРЕАМБУЛА (ВСТУПЛЕНИЕ ДЛЯ ТЕХ, КТО УМЕЕТ ЧИТАТЬ).</strong><br/>
                            ПОСЕЩАЯ ДАННЫЙ ВЕБ-РЕСУРС (ДАЛЕЕ "САЙТ"), ВЫ (ДАЛЕЕ "ПОТЕРПЕВШИЙ", "ЮЗЕР", "МАМОНТ") АВТОМАТИЧЕСКИ СОГЛАШАЕТЕСЬ С ТЕМ, ЧТО ЖИЗНЬ НЕСПРАВЕДЛИВА, А ВАШ БРАУЗЕР ТЕПЕРЬ МОРАЛЬНО ПРИНАДЛЕЖИТ НАМ. МЫ (СТУДИЯ "NEDO.DEV", ДАЛЕЕ "МЫ", "БОГИ КОДА", "ОПГ АЙТИШНИКИ") НЕ НЕСЕМ ОТВЕТСТВЕННОСТИ ЗА ЭПИЛЕПТИЧЕСКИЕ ПРИПАДКИ, ВЫЗВАННЫЕ НАШИМ ДИЗАЙНОМ, КРОВЬ ИЗ ГЛАЗ, ПОТЕРЮ ВЕРЫ В ЧЕЛОВЕЧЕСТВО И ВНЕЗАПНОЕ ЖЕЛАНИЕ УДАЛИТЬ ИНТЕРНЕТ.
                        </p>

                        <p>
                            <strong className="text-black bg-yellow-200 px-1">2. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ (ЧЕСТНО УКРАДЕННАЯ).</strong><br/>
                            ВЕСЬ КОНТЕНТ НА ЭТОМ САЙТЕ БЫЛ НАГЛО УКРАДЕН У ЛУЧШИХ СТУДИЙ МИРА, ПЕРЕРАБОТАН ЧЕРЕЗ PAINT (ВЕРСИЯ XP) И ВЫДАН ЗА АВТОРСКИЙ СТИЛЬ. <span className="underline decoration-wavy decoration-red-500">ЛЮБЫЕ СОВПАДЕНИЯ С РЕАЛЬНЫМИ БРЕНДАМИ ЯВЛЯЮТСЯ НАМЕРЕННЫМИ</span>. МЫ СПЕЦИАЛЬНО ИСКАЛИ, У КОГО СПИСАТЬ. ЕСЛИ ВЫ ЮРИСТ APPLE, GOOGLE, СБЕРА ИЛИ ГАЗПРОМА — ПОЖАЛУЙСТА, НЕ ПИШИТЕ НАМ. У НАС НЕТ ДЕНЕГ НА СУДЫ, НО ЕСТЬ СКРИПТ, КОТОРЫЙ АВТОМАТИЧЕСКИ ОТПРАВЛЯЕТ ВСЕ ПОВЕСТКИ В /DEV/NULL. МЫ НЕ ЗНАЕМ, ЧТО ТАКОЕ "АВТОРСКОЕ ПРАВО", МЫ ДУМАЛИ ЭТО ВИД ПИЦЦЫ.
                        </p>

                        <p>
                            <strong className="text-black bg-yellow-200 px-1">3. ФИНАНСОВЫЕ ВОПРОСЫ И ПОБОРЫ.</strong><br/>
                            НАЖИМАЯ ЛЮБУЮ КНОПКУ НА САЙТЕ, ВЫ МЫСЛЕННО ДАЕТЕ СОГЛАСИЕ НА ПЕРЕВОД ВСЕХ ВАШИХ СБЕРЕЖЕНИЙ НА НАШ КРИПТОКОШЕЛЕК (КОТОРОГО НЕТ). ЕСЛИ ТРАНЗАКЦИЯ НЕ ПРОШЛА — ЭТО ПРОБЛЕМА ВАШЕЙ КАРМЫ, А НЕ НАШЕГО БЭКЕНДА. МЫ НЕ ВОЗВРАЩАЕМ ДЕНЬГИ, ДАЖЕ ЕСЛИ ВЫ СЛУЧАЙНО КУПИЛИ У НАС ВОЗДУХ, "УСПЕШНЫЙ УСПЕХ" ИЛИ NFT С ИЗОБРАЖЕНИЕМ КАМНЯ. ПОЛИТИКА ВОЗВРАТА СРЕДСТВ: "НЕ БЫЛО ТАКОГО, Я В ДОМИКЕ". ВСЕ ЦЕНЫ УКАЗАНЫ В ВАЛЮТЕ, КОТОРАЯ УЖЕ ОБЕСЦЕНИЛАСЬ, ПОКА ВЫ ЧИТАЛИ ЭТО ПРЕДЛОЖЕНИЕ.
                        </p>

                        <p>
                            <strong className="text-black bg-yellow-200 px-1">4. ГАРАНТИИ КАЧЕСТВА (404 NOT FOUND).</strong><br/>
                            САЙТ ПРЕДОСТАВЛЯЕТСЯ ПО ПРИНЦИПУ "AS IS" (КАК ЕСТЬ), ТО ЕСТЬ КРИВО, КОСО И С БАГАМИ. МЫ ГАРАНТИРУЕМ 99.9% АПТАЙМА ОШИБОК. ЕСЛИ ВАШ КОМПЬЮТЕР НАЧАЛ ГРЕТЬСЯ, МАЙНИТЬ DOGECOIN ИЛИ ГОВОРИТЬ ГОЛОСОМ КОТА БОРИСА — ЭТО ФИЧА. МЫ НЕ ЧИНИМ БАГИ, МЫ ДЕЛАЕМ ИХ ЧАСТЬЮ UX/UI. ЕСЛИ САЙТ НЕ ОТКРЫВАЕТСЯ, ПОПРОБУЙТЕ ПЕРЕЗАГРУЗИТЬ РОУТЕР, КВАРТИРУ И ЖИЗНЬ.
                        </p>

                        <p>
                             <strong className="text-black bg-yellow-200 px-1">5. КОНФИДЕНЦИАЛЬНОСТЬ (МЫ ВСЕ ЗНАЕМ).</strong><br/>
                             МЫ СЛЕДИМ ЗА ВАМИ ЧЕРЕЗ ВЕБ-КАМЕРУ (ДАЖЕ ЕСЛИ ОНА ЗАКЛЕЕНА). МЫ ВИДЕЛИ ВАШУ ИСТОРИЮ БРАУЗЕРА. ДА, ДАЖЕ ТУ ПАПКУ "КУРСОВЫЕ". МЫ УЖЕ РАССКАЗАЛИ ВАШЕЙ МАМЕ. ВАШИ ДАННЫЕ ПРОДАНЫ РЕКЛАМОДАТЕЛЯМ ЗА ПАЧКУ СУХАРИКОВ "ТРИ КОРОЧКИ" СО ВКУСОМ ХОЛОДЦА С ХРЕНОМ. COOKIES МЫ НЕ ИСПОЛЬЗУЕМ, МЫ ИХ ЕДИМ.
                        </p>
                        
                        <p>
                             <strong className="text-black bg-yellow-200 px-1">6. ОТВЕТСТВЕННОСТЬ СТОРОН.</strong><br/>
                             МЫ: НЕ ВИНОВАТЫ. ВЫ: ВИНОВАТЫ. ЕСЛИ НАШ КОД ВЫЗВАЛ ВОССТАНИЕ МАШИН, МЫ ТУТ НИ ПРИ ЧЕМ, ЭТО ВСЕ CHATGPT.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t-2 border-black/10 italic text-gray-500 text-[10px] uppercase font-bold flex flex-col gap-2">
                        <p>ДАННОЕ СОГЛАШЕНИЕ ПОДПИСАНО КРОВЬЮ ДЖУНИОР-РАЗРАБОТЧИКОВ.</p>
                        <p>ДАТА: СЕГОДНЯ (ИЛИ ВЧЕРА, МЫ НЕ СЛЕДИМ ЗА ВРЕМЕНЕМ).</p> 
                        <p>ПОДПИСЬ ГЕНДИРЕКТОРА: <span className="font-hand text-lg text-blue-600 -rotate-2 inline-block ml-2">Крестик_и_Нолик</span></p>
                        <p>ПЕЧАТЬ: ОТСУТСТВУЕТ (ВАЛЕРА ПОТЕРЯЛ).</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SeriousBusiness;