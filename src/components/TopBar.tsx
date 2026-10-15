import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopBarProps {
  onOpenQuote: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Comparador', href: '#comparador' },
    { label: 'Portafolio', href: '#portafolio' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#031d2c]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg py-1"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-teal-400/40 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform bg-[#021824] shrink-0">
            <img
              src={PERSONAL_INFO.logoImage}
              alt="Logo CreadorWebs"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-teal-300 transition-colors whitespace-nowrap">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-[11px] font-medium text-slate-300 whitespace-nowrap">
              Diseño Web &amp; Desarrollo
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-200" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-teal-300 transition-colors py-1 whitespace-nowrap shrink-0 hover:underline hover:underline-offset-8 decoration-teal-400 decoration-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#031d2c] bg-[#16d5d0] hover:bg-[#61efdf] rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#062b40] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-teal-300 hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#031d2c] bg-[#16d5d0] rounded-xl hover:bg-[#61efdf] transition-colors"
            >
              <span>Cotizar Proyecto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
