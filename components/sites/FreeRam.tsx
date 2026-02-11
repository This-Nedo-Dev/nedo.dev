import React, { useState, useEffect } from 'react';

const FreeRam = ({ onBack }: { onBack: () => void }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Waiting for victim...");
  const [popups, setPopups] = useState<number[]>([]);
  const [blueScreen, setBlueScreen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        if (Math.random() > 0.7) {
            setPopups(prev => [...prev, Date.now()]);
        }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const closePopup = (id: number) => {
      setPopups(prev => prev.filter(p => p !== id));
  };

  const startDownload = () => {
      if (downloading) return;
      setDownloading(true);
      setStatusText("Connecting to NASA servers...");
      
      let p = 0;
      const interval = setInterval(() => {
          p += Math.floor(Math.random() * 5);
          setProgress(p);

          if (p > 10 && p < 30) setStatusText("Downloading RAM.zip.exe...");
          if (p > 30 && p < 50) setStatusText("Deleting System32 to make space...");
          if (p > 50 && p < 70) setStatusText("Installing Bitcoin Miner (Hidden)...");
          if (p > 70 && p < 90) setStatusText("Sending browser history to Mom...");
          if (p >= 100) {
              clearInterval(interval);
              setStatusText("CRITICAL ERROR: RAM LEAK DETECTED");
              setTimeout(() => setBlueScreen(true), 1000);
          }
      }, 300);
  };

  if (blueScreen) {
      return (
          <div className="min-h-screen bg-[#0000AA] text-white font-mono p-8 cursor-none select-none" onClick={() => { setBlueScreen(false); setProgress(0); setDownloading(false); }}>
              <div className="text-center mt-20">
                  <span className="bg-[#AAAAAA] text-[#0000AA] font-bold px-2">WINDOWS</span>
                  <h1 className="text-3xl md:text-4xl mt-4 mb-8">A FATAL EXCEPTION HAS OCCURRED</h1>
                  <p>YOUR PC IS DEAD.</p>
                  <p>WE STOLE YOUR RAM.</p>
                  <p className="mt-8 animate-pulse">Press ANY KEY to cry...</p>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#008080] font-sans relative overflow-hidden p-2 md:p-8 cursor-progress">
      
      
      <div className="absolute top-0 left-0 w-full bg-[#c0c0c0] border-b-2 border-white p-1 flex items-center gap-2 z-50">
          <button onClick={onBack} className="flex items-center gap-1 bg-[#c0c0c0] border-2 border-white border-b-black border-r-black px-2 active:border-t-black active:border-l-black">
              ❌ <span className="font-bold text-xs">EXIT</span>
          </button>
          <div className="bg-white border border-gray-500 px-2 text-xs w-full font-mono overflow-hidden text-ellipsis whitespace-nowrap">
              http://www.download-free-ram.net/virus_installer.exe
          </div>
      </div>

      
      {popups.map((id, index) => (
          <div 
            key={id}
            className="absolute bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 w-64 shadow-xl z-[100]"
            style={{ 
                top: `${20 + (index * 10) % 60}%`, 
                left: `${(index * 20) % 60}%`,
                maxWidth: '90vw'
            }}
          >
              <div className="bg-[#000080] text-white text-xs font-bold px-1 flex justify-between items-center">
                  <span>WINNER!!!</span>
                  <button onClick={(e) => { e.stopPropagation(); closePopup(id); }} className="bg-[#c0c0c0] text-black px-1 border border-white border-b-black border-r-black leading-none">x</button>
              </div>
              <div className="p-4 text-center font-bold text-red-600 animate-pulse">
                  YOU WON AN iPHONE 4!!!
                  <br/>
                  <span className="text-black text-xs font-normal">Click to claim (gives virus)</span>
              </div>
          </div>
      ))}

      
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
          
          
          <div className="hidden md:block md:col-span-3 space-y-4">
              <div className="bg-white border-2 border-black p-2 text-center">
                  <h3 className="font-bold text-red-600 animate-blink">HOT SINGLES!</h3>
                  <div className="w-full h-24 bg-pink-200 flex items-center justify-center text-4xl">💃</div>
                  <p className="text-xs text-blue-600 underline cursor-pointer">In your area (0km)</p>
              </div>
              <div className="bg-white border-2 border-black p-2 text-center">
                  <h3 className="font-bold text-green-600">MINECRAFT 2</h3>
                  <div className="w-full h-24 bg-green-200 flex items-center justify-center text-4xl">🧱</div>
                  <button className="bg-green-500 text-white w-full text-xs font-bold mt-2">DOWNLOAD</button>
              </div>
          </div>

          
          <div className="md:col-span-6">
              <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 shadow-2xl">
                  <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white px-2 py-1 font-bold text-sm flex justify-between items-center">
                      <span className="truncate mr-2">Download_RAM_Wizard.exe</span>
                      <div className="flex gap-1 flex-shrink-0">
                          <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] border border-white border-b-black border-r-black flex items-center justify-center font-bold">_</button>
                          <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] border border-white border-b-black border-r-black flex items-center justify-center font-bold">□</button>
                          <button onClick={onBack} className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] border border-white border-b-black border-r-black flex items-center justify-center font-bold">x</button>
                      </div>
                  </div>

                  <div className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center md:items-start text-center md:text-left">
                          <div className="w-24 h-24 bg-white border-2 border-gray-500 p-2 shadow-inner">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/RAM_icon.png" alt="RAM" className="w-full h-full object-contain pixelated grayscale" />
                          </div>
                          <div>
                              <h1 className="text-xl md:text-2xl font-black font-serif text-black">Download More RAM™</h1>
                              <p className="text-sm text-gray-600">Version 6.9 (Cracked by xX_DarkLord_Xx)</p>
                              <div className="flex gap-2 mt-2 text-xs justify-center md:justify-start">
                                  <span className="text-green-600 font-bold">✅ Virus Free</span>
                                  <span className="text-green-600 font-bold">✅ 100% Legit</span>
                              </div>
                          </div>
                      </div>

                      
                      <div className="space-y-4 mb-8">
                          <div className="bg-[#ffffcc] border border-[#d4d4d4] p-2 flex justify-between items-center cursor-pointer hover:bg-white">
                              <span className="font-bold text-green-600 text-lg md:text-xl">DOWNLOAD (FAST)</span>
                              <span className="text-xs text-gray-400">Ad</span>
                          </div>
                          
                          <button 
                             onClick={startDownload}
                             disabled={downloading}
                             className="w-full bg-[#008000] hover:bg-[#006000] text-white text-2xl md:text-3xl font-black py-4 border-4 border-[#00ff00] border-b-[#004000] border-r-[#004000] active:border-t-[#004000] active:translate-y-1 shadow-lg break-words"
                          >
                              {downloading ? "WORKING..." : "DOWNLOAD NOW"}
                          </button>
                          <div className="text-center text-[10px] text-gray-500">
                              By clicking download you agree to install Ask Toolbar and sell your soul.
                          </div>
                      </div>

                      
                      <div className="bg-gray-200 border-2 border-gray-600 h-8 p-1 relative mb-2">
                          <div className="h-full bg-[url('https://i.imgur.com/3Y1D21s.png')] bg-blue-700 w-0 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                      </div>
                      <div className="font-mono text-xs bg-black text-green-500 p-2 h-20 overflow-y-auto border-2 border-gray-600">
                          {'>'} {statusText}<br/>
                          {progress > 20 && "> Allocating fake memory..."}<br/>
                          {progress > 50 && "> Overheating CPU..."}<br/>
                          <span className="animate-pulse">_</span>
                      </div>
                  </div>
              </div>
          </div>

          
          <div className="hidden md:block md:col-span-3">
              <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 text-xs font-mono mb-4">
                  <div className="bg-blue-800 text-white px-1 mb-1">System Info</div>
                  <p>OS: Windows 98 SE</p>
                  <p>CPU: Potato i3</p>
                  <p className="text-red-600 font-bold">RAM: 0MB (NEED MORE!)</p>
              </div>

               <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 text-center">
                   <div className="text-4xl animate-bounce mb-2">👮‍♂️</div>
                   <p className="font-bold text-red-600">WARNING!</p>
                   <p className="text-xs">Your PC is infected with 420 viruses.</p>
                   <button className="mt-2 w-full bg-[#c0c0c0] border border-black text-[10px] hover:bg-white">FIX NOW</button>
               </div>
          </div>

      </div>

      <footer className="absolute bottom-2 w-full text-center text-white text-xs font-mono opacity-50">
          Copyright 1998-2026. Made with FrontPage Express.
      </footer>
    </div>
  );
};

export default FreeRam;
