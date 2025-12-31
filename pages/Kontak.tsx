
import React from 'react';

const Kontak: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      {/* Header */}
      <section className="bg-white py-16 border-b border-[#f0f5f1]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-text-main mb-4 tracking-tight">Hubungi Kami</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">Punya pertanyaan atau ingin diskusi desain? Tim kami siap melayani Anda di workshop kami atau via chat.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-2xl font-black text-text-main mb-2">Informasi Kontak</h2>

            <div className="group flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#f0f5f1] shadow-sm hover:shadow-md transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
              </div>
              <div>
                <h3 className="font-black text-text-main mb-1">Alamat Workshop</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Jl. Kamboja, Dompon, Karanganyar, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711
                </p>
                <a href="https://www.google.com/maps/place/Santri+Letter/@-7.586283,110.9362626,14.66z/data=!4m6!3m5!1s0x2e7a187fb117abc7:0x4fdf40525aae14fd!8m2!3d-7.600596!4d110.948697!16s%2Fg%2F11b6zwlzd_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-dark font-black text-sm mt-3 hover:underline">
                  Buka di Google Maps <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#f0f5f1] shadow-sm hover:shadow-md transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl font-bold">call</span>
              </div>
              <div>
                <h3 className="font-black text-text-main mb-1">Telepon / WhatsApp</h3>
                <p className="text-sm text-text-muted mb-1">Customer Service (Senin-Sabtu)</p>
                <p className="text-xl font-black text-text-main tracking-wide">+62 851-0082-3761</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#f0f5f1] shadow-sm hover:shadow-md transition-all">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl font-bold">mail</span>
              </div>
              <div>
                <h3 className="font-black text-text-main mb-1">Email Bisnis</h3>
                <p className="text-sm text-text-muted mb-1">Kirim file desain via email untuk hasil maksimal.</p>
                <p className="text-lg font-bold text-text-main">santri.letter@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Schedule & Map Side */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-[#f0f5f1] overflow-hidden shadow-sm">
              <div className="bg-background-light px-6 py-4 border-b border-[#f0f5f1] flex items-center gap-2">
                <span className="material-symbols-outlined text-primary font-bold">schedule</span>
                <h3 className="font-black text-text-main text-sm uppercase tracking-widest">Jam Operasional</h3>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-bold text-text-main">Senin - Kamis</td>
                      <td className="px-6 py-4 text-text-muted">08.30 - 16.30 WIB <span className="block text-[10px] text-text-muted font-medium">(Istirahat 12.00 - 13.00)</span></td>
                      <td className="px-6 py-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 uppercase">Buka</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-bold text-text-main">Jumat</td>
                      <td className="px-6 py-4 text-text-muted">08.30 - 16.30 WIB <span className="block text-[10px] text-text-muted font-medium">(Istirahat 11.30 - 12.30)</span></td>
                      <td className="px-6 py-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 uppercase tracking-tighter">Buka</span></td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-bold text-text-main">Sabtu</td>
                      <td className="px-6 py-4 text-text-muted">08.30 - 16.30 WIB <span className="block text-[10px] text-text-muted font-medium">(Istirahat 12.00 - 13.00)</span></td>
                      <td className="px-6 py-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 uppercase">Buka</span></td>
                    </tr>
                    <tr className="bg-red-50/30">
                      <td className="px-6 py-4 font-bold text-red-700">Minggu / Libur Nasional</td>
                      <td className="px-6 py-4 text-red-600/70 italic">Libur</td>
                      <td className="px-6 py-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-red-100 text-red-700 uppercase">Tutup</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRr3bolzuuMnBa0mzd3E4x__4LWxEr8i4Lz82rLS0ciYGn1780M4JX6g-ZGMw7TBwlIfN0hrgd-nmDAmfYYCRgxCSgJRD2Wd2bL2Kf98q-sJ5w-J5oFPuQa2EnUv8g59afrUZzV7ZSvTssPEJnv000m6QRQEzMCWY5Q1Drk07KENS_uaLO4gEyv6YC1JTPv_SLOr4WdKNPi8vTJaS6hdNunZaQ9PNCPo7nYEZ5AvHq5j8mu07l4KEqpzLvhgbqlofmLs5iTfqB2bY"
                alt="Karanganyar Map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-3 rounded-2xl shadow-2xl flex flex-col items-center animate-bounce border border-gray-100">
                  <span className="material-symbols-outlined text-red-500 text-4xl">location_on</span>
                  <span className="text-[10px] font-black text-text-main mt-1 uppercase tracking-widest">Santri Letter</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-lg border border-white text-xs font-black text-text-main">
                Karanganyar, Jawa Tengah
              </div>
              <a
                href="https://www.google.com/maps/place/Santri+Letter/@-7.586283,110.9362626,14.66z/data=!4m6!3m5!1s0x2e7a187fb117abc7:0x4fdf40525aae14fd!8m2!3d-7.600596!4d110.948697!16s%2Fg%2F11b6zwlzd_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-text-main px-4 py-2 rounded-xl shadow-lg font-black text-xs transition-transform hover:scale-105"
              >
                Navigasi Ke Sini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
