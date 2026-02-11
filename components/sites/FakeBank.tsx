import React, { useState } from 'react';

const FakeBank = ({ onBack }: { onBack: () => void }) => {
  const [card, setCard] = useState('');
  const [cvv, setCvv] = useState('');
  const [status, setStatus] = useState<null | 'loading' | 'stolen'>(null);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
      setTimeout(() => {
          setStatus('stolen');
          console.log(`STOLEN DATA: Card: ${card}, CVV: ${cvv}`);
      }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-[#1a9f29] font-sans relative overflow-hidden p-4">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a9f29] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <button onClick={onBack} className="absolute top-4 left-4 z-50 text-gray-500 hover:text-black font-bold text-sm">
        ← Вернуться (Пока не посадили)
      </button>

      <div className="max-w-md mx-auto mt-16 md:mt-20 bg-white shadow-2xl rounded-3xl overflow-hidden relative z-10">
          <div className="bg-[#1a9f29] p-6 md:p-8 text-center">
              <div className="inline-block w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-[#1a9f29] text-3xl md:text-4xl font-black mb-4 shadow-lg">
                  $
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wider">SBER_BOMZH</h1>
              <p className="text-green-100 text-xs md:text-sm mt-2">Всегда рядом. (В твоем кармане)</p>
          </div>

          <div className="p-6 md:p-8">
              {status === 'stolen' ? (
                  <div className="text-center py-10 animate-pulse">
                      <div className="text-6xl mb-4">✅</div>
                      <h2 className="text-2xl font-bold text-black mb-2">СПАСИБО!</h2>
                      <p className="text-gray-600">Мы оформили на вас 3 кредита.</p>
                      <p className="text-gray-400 text-xs mt-4">Коллекторы уже выехали.</p>
                      <button onClick={() => setStatus(null)} className="mt-6 text-[#1a9f29] font-bold hover:underline">
                          Повторить (для верности)
                      </button>
                  </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="text-black font-bold text-lg md:text-xl mb-6 text-center">Вход в личный кабинет</h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Номер карты</label>
                                <input 
                                    type="text" 
                                    placeholder="0000 0000 0000 0000"
                                    value={card}
                                    onChange={e => setCard(e.target.value)}
                                    className="w-full border-b-2 border-gray-200 py-2 text-black text-base md:text-lg focus:outline-none focus:border-[#1a9f29] transition-colors bg-transparent placeholder-gray-300"
                                    required
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Срок</label>
                                    <input 
                                        type="text" 
                                        placeholder="MM/YY"
                                        className="w-full border-b-2 border-gray-200 py-2 text-black text-base md:text-lg focus:outline-none focus:border-[#1a9f29] transition-colors bg-transparent placeholder-gray-300"
                                    />
                                </div>
                                <div className="w-20 md:w-24">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">CVV</label>
                                    <input 
                                        type="text"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={e => setCvv(e.target.value)}
                                        className="w-full border-b-2 border-gray-200 py-2 text-black text-base md:text-lg focus:outline-none focus:border-[#1a9f29] transition-colors bg-transparent placeholder-gray-300"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                         <input type="checkbox" id="agree" className="accent-[#1a9f29]" defaultChecked />
                         <label htmlFor="agree" className="text-xs text-gray-500">Я согласен отдать квартиру</label>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full bg-[#1a9f29] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-green-600 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'ВОРУЕМ ДАННЫЕ...' : 'ВОЙТИ'}
                    </button>
                </form>
              )}
          </div>

          <div className="bg-gray-50 p-4 text-center text-[10px] text-gray-400">
              Лицензия ЦБ РФ №000 (Отозвана в 90-х)
          </div>
      </div>
    </div>
  );
};

export default FakeBank;
