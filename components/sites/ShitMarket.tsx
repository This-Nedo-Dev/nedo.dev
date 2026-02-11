import React from 'react';

const ShitMarket = ({ onBack }: { onBack: () => void }) => {
  const products = [
      { id: 1, name: "Куча Классическая", price: "500₽", img: "💩", rating: "★★★★★" },
      { id: 2, name: "Навоз Элитный (от Козы)", price: "1200₽", img: "🐐", rating: "★★★★☆" },
      { id: 3, name: "Ветка (Просто ветка)", price: "5000₽", img: "🌿", rating: "★☆☆☆☆" },
      { id: 4, name: "Воздух в банке", price: "999₽", img: "💨", rating: "★★★★★" },
  ];

  return (
    <div className="min-h-screen bg-[#f5deb3] font-sans text-[#5c4033] p-2 md:p-4 relative" style={{ fontFamily: '"Comic Sans MS", cursive' }}>
       <button onClick={onBack} className="fixed top-4 left-4 z-50 bg-brown-600 text-white bg-[#5c4033] px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-transform text-xs md:text-base">
        ← УЙТИ ОТСЮДА
      </button>

      <header className="bg-[#8b4513] text-[#f5deb3] p-4 md:p-6 mb-8 border-b-8 border-[#5c4033] transform -rotate-1 shadow-xl mt-12 md:mt-0">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
              <h1 className="text-3xl md:text-6xl font-bold">💩 NAVOZ.ON</h1>
              <div className="text-xs md:text-xl">Маркетплейс #2 (после Авито)</div>
          </div>
      </header>

      <main className="max-w-6xl mx-auto px-2">
          <div className="bg-yellow-200 p-4 border-2 border-dashed border-[#8b4513] mb-8 text-center text-base md:text-xl animate-pulse">
              🎉 АКЦИЯ! КУПИ 2 КУЧИ - ПОЛУЧИ МУХУ БЕСПЛАТНО! 🎉
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {products.map(p => (
                  <div key={p.id} className="bg-white border-4 border-[#8b4513] p-4 rounded-xl shadow-[8px_8px_0px_#5c4033] hover:translate-y-2 hover:shadow-none transition-all cursor-pointer group">
                      <div className="h-40 bg-[#f0f0f0] rounded-lg flex items-center justify-center text-6xl group-hover:scale-125 transition-transform">
                          {p.img}
                      </div>
                      <div className="mt-4">
                          <h3 className="font-bold text-xl leading-tight">{p.name}</h3>
                          <div className="text-yellow-500 my-1 tracking-widest">{p.rating}</div>
                          <div className="flex justify-between items-center mt-4">
                              <span className="font-bold text-2xl">{p.price}</span>
                              <button className="bg-[#8b4513] text-white px-3 py-1 rounded hover:bg-green-600">
                                  В КОРЗИНУ
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          <div className="mt-12 bg-white p-6 md:p-8 border-4 border-[#8b4513] rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Отзывы покупателей</h2>
              <div className="space-y-4">
                  <div className="border-b-2 border-gray-200 pb-2">
                      <p className="font-bold">Иван Тракторист</p>
                      <p className="text-sm md:text-base">"Навоз отличный, на вкус не пробовал, но пахнет как дома. Рекомендую!"</p>
                  </div>
                  <div className="border-b-2 border-gray-200 pb-2">
                      <p className="font-bold">Гламурная Чика</p>
                      <p className="text-sm md:text-base">"Заказала ветку для инстаграма. Пришла сломанная. Верните деньги!!!"</p>
                  </div>
              </div>
          </div>
      </main>

      <footer className="mt-20 text-center opacity-50 text-xs md:text-sm pb-8">
          © 2026 NAVOZ.ON INC. запах передается через экран.
      </footer>
    </div>
  );
};

export default ShitMarket;