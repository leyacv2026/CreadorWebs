import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopBarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenQuote: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentPath = '/', onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Landing Pages', path: '/servicios/landing-pages' },
    { label: 'Webs Empresas', path: '/servicios/webs-corporativas' },
    { label: 'Tiendas Online', path: '/servicios/tiendas-online' },
    { label: 'Portafolio', path: '/portafolio' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.pathname = path;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#031d2c]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
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

        {/* Zone 2: Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-200" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`py-1 whitespace-nowrap transition-colors hover:text-teal-300 ${
                  isActive
                    ? 'text-teal-300 underline underline-offset-8 decoration-teal-400 decoration-2 font-black'
                    : 'text-slate-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
              key={link.path}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`block px-3 py-2 text-base font-semibold rounded-lg transition-colors ${
                currentPath === link.path
                  ? 'text-teal-300 bg-white/10 font-bold'
                  : 'text-slate-200 hover:text-teal-300 hover:bg-white/5'
              }`}
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
