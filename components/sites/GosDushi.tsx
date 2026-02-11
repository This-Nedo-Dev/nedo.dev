import React, { useState } from 'react';

const GosDushi = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextStep = () => {
      setLoading(true);
      setError(null);
      setTimeout(() => {
          setLoading(false);
          if (step < 3) setStep(s => s + 1);
          else {
            setError("ОШИБКА #1488-B: Справка о наличии справки не найдена в реестре отсутствующих справок. Обратитесь в окно №0.");
          }
      }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f2f3f7] font-sans text-[#333]">
      
      <header className="bg-white border-b border-gray-300 py-4 px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">ГД</div>
              <div className="font-bold text-blue-900 leading-tight">ГОСУСЛУГИ<br/><span className="text-red-600 text-xs">ДУШИ НАСЕЛЕНИЯ</span></div>
          </div>
          <button onClick={onBack} className="text-blue-600 text-sm hover:underline">Выйти</button>
      </header>

      <main className="max-w-3xl mx-auto mt-12 p-8 bg-white shadow-sm rounded-lg border border-gray-200">
          <h1 className="text-2xl font-bold mb-6">Запись к врачу (Очередь живая)</h1>
          
          {loading ? (
              <div className="flex flex-col items-center py-20">
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500">Ищем смысл жизни...</p>
              </div>
          ) : (
              <div>
                  
                  {error && (
                      <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4">
                          <div className="flex">
                              <div className="flex-shrink-0">
                                  <span className="text-red-500 font-bold">!</span>
                              </div>
                              <div className="ml-3">
                                  <p className="text-sm text-red-700 font-bold">
                                      ОТКАЗАНО В ДОСТУПЕ
                                  </p>
                                  <p className="text-sm text-red-600 mt-1">
                                      {error}
                                  </p>
                              </div>
                          </div>
                      </div>
                  )}

                  {step === 1 && (
                      <div className="space-y-4">
                          <label className="block">
                              <span className="text-sm text-gray-500">Ваш СНИЛС</span>
                              <input type="text" className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="000-000-000 00" />
                          </label>
                          <label className="block">
                              <span className="text-sm text-gray-500">Причина обращения</span>
                              <select className="mt-1 block w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                  <option>Болит всё</option>
                                  <option>Я просто спросить</option>
                                  <option>Мне только печать поставить</option>
                              </select>
                          </label>
                      </div>
                  )}
                   {step === 2 && (
                      <div className="text-center py-8">
                          <p className="text-lg mb-4">Ближайшее свободное окно:</p>
                          <div className="text-4xl font-bold text-blue-600 mb-2">32 Мартобря 2048</div>
                          <p className="text-gray-500">Врач: Терапевт-Некромант</p>
                      </div>
                  )}
                  {step === 3 && !error && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded text-red-700">
                          ВНИМАНИЕ: Для подтверждения записи необходимо принести:
                          <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                               <li>Справку от мамы</li>
                               <li>Анализ кала единорога</li>
                               <li>Копию паспорта (все страницы, включая обложку)</li>
                          </ul>
                      </div>
                  )}

                  <div className="mt-8 flex justify-end">
                      {step === 3 && error ? (
                           <button onClick={() => setStep(1)} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 font-bold">
                               Начать сначала
                           </button>
                      ) : (
                          <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-bold shadow-md">
                              {step === 3 ? "Подтвердить" : "Далее"}
                          </button>
                      )}
                  </div>
              </div>
          )}
      </main>
      
      <div className="mt-8 text-center text-gray-400 text-xs">
          Техническая поддержка не работает. Вообще никогда.
      </div>
    </div>
  );
};
export default GosDushi;