
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import Kontak from './pages/Kontak';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285100823761 "
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 md:size-16 rounded-full bg-primary text-text-main shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          aria-label="Chat WhatsApp"
        >
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white px-4 py-2 rounded-xl shadow-xl text-xs font-black text-text-main whitespace-nowrap border border-gray-100">
            Tanya Admin Sekarang 👋
          </div>
          <span className="material-symbols-outlined text-3xl md:text-4xl font-bold">chat</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
