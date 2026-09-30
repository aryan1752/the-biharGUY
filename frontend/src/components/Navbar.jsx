import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rescues', path: '/rescues' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-300 transform ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
    }`}>
      
      {/* Translucent Glass Floating Pill Navbar Container */}
      <div className="bg-white/75 backdrop-blur-lg rounded-full border border-white/80 shadow-2xl px-5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
        
        {/* Left: Astravana Emblem Logo Only */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/astravana_logo.png"
            alt="Astravana Emblem Logo"
            className="h-11 sm:h-12 w-auto object-contain shrink-0 hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
        </Link>

        {/* Middle: Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-slate-900/90 text-white font-bold shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-900/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Black Call for Rescue Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href="tel:+918851284861"
            className="inline-flex items-center space-x-2 bg-black hover:bg-slate-900 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 animate-pulse fill-current" />
            <span>Call for Rescue</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href="tel:+918851284861"
            className="sm:hidden inline-flex items-center space-x-1 bg-black text-white font-bold text-[10px] px-3 py-1.5 rounded-full shadow-md"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>Call Rescue</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-slate-800 hover:bg-slate-900/10 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl p-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-black text-white font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-100">
            <a
              href="tel:+918851284861"
              className="flex items-center justify-center space-x-2 w-full bg-black text-white font-bold py-3.5 rounded-2xl text-xs shadow-md"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call for Rescue</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
