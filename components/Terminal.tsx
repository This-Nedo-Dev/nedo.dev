import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="bg-black border-4 border-[#22b4ff] p-4 font-mono text-sm shadow-[8px_8px_0px_#000000]">
        <div className="bg-[#22b4ff] text-black font-black p-1 mb-2">ERROR_LOG_V666.TXT</div>
        <div className="space-y-1 text-[#0066ff]">
            <p>{'>'} KTO_TO_NAZHAL_KNOPOCHKU.JS:32</p>
            <p className="text-white">{'>'} FATAL ERROR: BRAIN NOT FOUND</p>
            <p>{'>'} TRYING TO FIX...</p>
            <p className="text-red-500 font-bold">{'>'} FAILED SUCCESSFULLY</p>
            <p>{'>'} ------------------------</p>
            <p>{'>'} ЕСЛИ ТЫ ЭТО ЧИТАЕШЬ, ЗНАЧИТ МЫ ЕЩЕ НЕ УПАЛИ.</p>
            <p>{'>'} ПИШИ В ТЕЛЕГУ, ЕСЛИ ЧТО-ТО ОТВАЛИЛОСЬ.</p>
            <p className="animate-pulse">_</p>
        </div>
    </div>
  );
};

export default Terminal;
