
import React, { useState } from 'react';
import { CATEGORIES_WITH_ICONS, SERVICES } from '../constants';
import { Category } from '../types';

const Layanan: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.All);

  const filteredServices = activeCategory === Category.All
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-background-light min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#f0f5f1]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-text-main mb-4 tracking-tight">Katalog Layanan</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Temukan berbagai solusi percetakan berkualitas untuk segala kebutuhan Anda.</p>
        </div>
      </section>

      {/* Filter Chips */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur border-b border-[#f0f5f1] py-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 min-w-max justify-center">
          {CATEGORIES_WITH_ICONS.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name as Category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all ${activeCategory === cat.name
                ? 'bg-primary text-text-main shadow-lg shadow-primary/20 ring-2 ring-primary ring-offset-2'
                : 'bg-[#f0f5f1] text-text-muted hover:bg-gray-200 hover:text-text-main'
                }`}
            >
              <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden border border-[#f0f5f1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {service.isBestSeller && (
                    <div className="absolute top-4 right-4 bg-primary text-text-main text-[10px] font-black px-2 py-1 rounded shadow-md uppercase tracking-widest">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-text-muted flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[12px]">category</span>
                    {service.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-text-main mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-6 flex-1">{service.description}</p>



                  <a
                    href={`https://wa.me/6285100823761?text=Halo Santri Letter, saya ingin pesan ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#f0f5f1] hover:bg-primary transition-all text-text-main py-3 rounded-xl font-black text-sm"
                  >
                    <span className="material-symbols-outlined text-[18px] text-green-700">chat</span>
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
              <p className="text-text-muted">Layanan tidak ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
