
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const bestSellers = SERVICES.filter(s => s.isBestSeller).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary-dark">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Percetakan Terpercaya Karanganyar
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-text-main leading-tight tracking-tight">
                Percetakan Cepat, Hemat, & <span className="text-primary relative inline-block">
                  Amanah
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Solusi lengkap untuk kebutuhan cetak personal maupun bisnis Anda. Mulai dari MMT, spanduk, neon box, ID card, hingga souvenir dengan kualitas terbaik.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Link to="/layanan" className="bg-primary hover:bg-primary-dark text-text-main px-8 py-4 rounded-xl font-black flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20">
                  <span>Lihat Layanan</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/kontak" className="bg-background-light hover:bg-gray-200 text-text-main px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 ring-1 ring-gray-900/5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYswWEU3wqqfFr7P5MFnidDSDnp1wKlANcJOoxuxpi06iBGlkB6gFPP8EetzclEORBqGlUsNfboQJile2YFjk23g2_Wyks784s2cz1ncm3KzSs-OXqRlnUw0BtlpVRIofXib8GAkNsYMwcL4wMKo_oWV4e5wi1JaiIaRa8NTu3EspM_nLzhZ-6DZoef-JvYwRye9V11hs_VHQzWB_UrzgAPeEYU5aw9dIYHCJyd8VWE5gPg56lFJQLbwv7NAEp1RYQ8mSzeaDnz9VP"
                  alt="High quality large format printing machine"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-lg max-w-sm hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/20 p-2 rounded-full text-primary-dark">
                      <span className="material-symbols-outlined text-[20px] font-bold">verified</span>
                    </div>
                    <span className="font-black text-sm text-text-main">Kualitas Terjamin</span>
                  </div>
                  <p className="text-xs text-text-muted font-medium">Kami menggunakan mesin cetak generasi terbaru untuk hasil tajam & presisi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-4 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">Produk Terlaris</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Produk yang paling sering dipesan oleh pelanggan setia kami di Karanganyar dan sekitarnya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-text-main text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm">
                    Best Seller
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-text-main mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm mb-6 flex-1">{service.description}</p>
                  <a
                    href={`https://wa.me/6285100823761?text=Halo Santri Letter, saya ingin bertanya tentang ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-primary/20 rounded-xl font-bold text-text-main hover:bg-primary hover:border-primary transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    Tanya Harga
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/layanan" className="text-primary-dark font-black flex items-center justify-center gap-2 hover:gap-3 transition-all">
              Lihat Semua Produk <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYadT4LS7dwwEMEq_wAWHGjaRs8a2-mo958P3alpZmSQ9ns42SPRjA-S_zyMctO8FQKtVxnlkZPRYBMS3wSPqg9-Q-6jNUTp6HOYHPfwZtK57Whn_rlTUj5Q5HY_SfJ5YfKmw4iQLIH-ly1m_xEnFf4O5n0SqDvvpYvKXBgioEVMuMxz4my8OJHHVijWpf8MEFMa5aHkNUEbM8heLVj1skWKsr-XuO1T_HD98MKEN3he76xhQXyDOECSeg8i68XZg88Bx09Pn6e-4b"
                  alt="Why choose us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">bolt</span>
                    <h4 className="text-xl font-black mb-2">Pengerjaan Cepat</h4>
                    <p className="text-sm opacity-90">Kami menghargai waktu Anda. Pesanan selesai sesuai target waktu yang dijanjikan.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight">Mengapa Memilih <br /><span className="text-primary">Santri Letter?</span></h2>
              <div className="grid gap-8">
                {[
                  { icon: 'print_connect', title: 'Alat Cetak Modern', desc: 'Teknologi mesin terbaru untuk hasil cetak tajam dan tahan lama.' },
                  { icon: 'shopping_bag', title: 'Bisa Satuan & Grosir', desc: 'Melayani kebutuhan personal kecil hingga korporat besar tanpa batas.' },
                  { icon: 'savings', title: 'Harga Terjangkau', desc: 'Solusi cetak hemat tanpa mengurangi kualitas bahan material.' },
                  { icon: 'handshake', title: 'Respon Cepat & Amanah', desc: 'Pelayanan ramah, jujur, dan terpercaya untuk setiap pelanggan.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl font-bold">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-text-main mb-1">{item.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background-light">
        <div className="max-w-4xl mx-auto">
          <div className="bg-text-main rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 size-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 size-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-white">Siap Cetak Kebutuhan Anda Hari Ini?</h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">Konsultasikan desain dan bahan yang cocok untuk kebutuhan Anda. Tim kami siap membantu sepenuh hati.</p>
              <div className="pt-4">
                <a
                  href="https://wa.me/6285100823761"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-text-main px-10 py-5 rounded-2xl font-black transition-all transform hover:scale-105"
                >
                  <span className="material-symbols-outlined text-2xl">chat</span>
                  Hubungi Kami Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
