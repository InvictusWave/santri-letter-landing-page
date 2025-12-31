
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#f0f5f1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="text-primary flex items-center justify-center size-10 rounded-xl bg-primary/10">
                <span className="material-symbols-outlined text-2xl font-bold">print</span>
              </div>
              <h3 className="text-xl font-black text-text-main tracking-tight">Santri Letter</h3>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Mitra percetakan terpercaya di Karanganyar. Kami mengutamakan kualitas, kecepatan, dan kejujuran dalam setiap lembar yang kami cetak.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/santriletter/?hl=id',
                  path: 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1,1 0 0,1 19,6A1,1 0 0,1 18,7A1,1 0 0,1 17,6A1,1 0 0,1 18,5Z'
                },
                {
                  name: 'Facebook',
                  url: 'https://web.facebook.com/p/Percetakan-Santri-letter-100069753648844/?locale=id_ID&_rdc=1&_rdr#',
                  path: 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.38 6.04V8.69H14.85C13.64 8.69 13.4 9.27 13.4 10.12V12.06H16.34L15.86 14.96H13.4V21.96C18.19 21.21 21.84 17.06 21.84 12.06C21.84 6.53 17.34 2.04 12 2.04Z'
                },
                {
                  name: 'WhatsApp',
                  url: 'https://wa.me/6285100823761',
                  path: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M16.53 13.33C16.29 13.2 15.1 12.61 14.89 12.5C14.66 12.4 14.5 12.35 14.32 12.62C14.07 12.87 13.56 13.46 13.41 13.63C13.23 13.84 13.06 13.86 12.81 13.73C11.53 13.1 10.5 12.42 9.7 11.04C9.5 10.68 10 10.31 10.38 9.53C10.47 9.35 10.43 9.21 10.37 9.09C10.3 8.97 9.8 7.75 9.6 7.25C9.4 6.77 9.21 6.84 9.05 6.84C8.92 6.84 8.76 6.84 8.58 6.84C8.41 6.84 8.13 6.91 7.9 7.16C7.66 7.41 7 8.04 7 9.32C7 10.6 7.93 11.83 8.06 12C8.2 12.18 9.94 14.86 12.6 16C14.39 16.77 14.82 16.71 15.42 16.61C16.08 16.5 16.92 16.05 17.1 15.54C17.27 15.03 17.27 14.59 17.22 14.5C17.16 14.42 17 14.36 16.77 14.25H16.53Z'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-background-light flex items-center justify-center text-text-muted hover:text-primary transition-colors border border-gray-100"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-widest text-xs">Layanan Kami</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/layanan" className="hover:text-primary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Outdoor Printing</Link></li>
              <li><Link to="/layanan" className="hover:text-primary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Identitas Bisnis</Link></li>
              <li><Link to="/layanan" className="hover:text-primary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Signage & Display</Link></li>
              <li><Link to="/layanan" className="hover:text-primary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Souvenir & Trophy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link to="/" className="hover:text-primary">Beranda</Link></li>
              <li><Link to="/layanan" className="hover:text-primary">Produk Lengkap</Link></li>
              <li><Link to="/kontak" className="hover:text-primary">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-main mb-6 uppercase tracking-widest text-xs">Kontak & Lokasi</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">location_on</span>
                <span>Jl. Lawu No. 45, Karanganyar, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                <span>Senin - Sabtu: 08.30 - 16.30 WIB</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                <span>+62 851-0082-3761</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f0f5f1] pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Santri Letter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
