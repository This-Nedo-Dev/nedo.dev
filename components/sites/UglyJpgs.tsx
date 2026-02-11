import React, { useState } from 'react';

const UglyJpgs = ({ onBack }: { onBack: () => void }) => {
  const [showError, setShowError] = useState(false);

  const nfts = [
      { id: 1, name: "Monkey #001", price: "150 ETH", img: "🐵" },
      { id: 2, name: "Pixel Trash", price: "500 ETH", img: "🗑️" },
      { id: 3, name: "Blue Square", price: "1000 ETH", img: "🟦" },
      { id: 4, name: "Just a Rock", price: "9999 ETH", img: "🪨" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-mono relative">
      
      
      {showError && (
          <div className="fixed top-4 right-4 z-50 w-80 bg-[#1e1e1e] border border-gray-700 rounded-xl shadow-2xl p-4 animate-bounce">
              <div className="flex items-center gap-3 mb-3 border-b border-gray-700 pb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold">🦊</div>
                  <span className="font-bold">MetaMask (Not really)</span>
                  <button onClick={() => setShowError(false)} className="ml-auto text-gray-400 hover:text-white">✕</button>
              </div>
              <div className="text-red-500 font-bold mb-2">Transaction Failed</div>
              <div className="text-sm text-gray-300 mb-4">
                  Insufficient funds for gas. Estimated fee: <span className="font-bold text-white">$5,420.69</span>
              </div>
              <button onClick={() => setShowError(false)} className="w-full bg-blue-600 py-2 rounded font-bold hover:bg-blue-500">
                  Cry & Close
              </button>
          </div>
      )}

      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
          <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              UGLY.JPEG
          </div>
          <button onClick={onBack} className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">EXIT</button>
      </nav>

      <div className="container mx-auto p-8">
          <header className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Discover Digital Garbage</h1>
              <p className="text-gray-400">Buy things that don't exist for money you don't have.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nfts.map(nft => (
                  <div key={nft.id} className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors group">
                      <div className="h-64 bg-black flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                          {nft.img}
                      </div>
                      <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
                          <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Price</span>
                              <span className="font-bold text-purple-400">{nft.price}</span>
                          </div>
                          <button onClick={() => setShowError(true)} className="w-full mt-4 bg-white text-black font-bold py-2 rounded hover:bg-purple-500 hover:text-white transition-colors">
                              MINT NOW
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};
export default UglyJpgs;