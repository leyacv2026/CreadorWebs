import React, { useState } from 'react';
import { Menu, X, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { OrbitalSphere } from './OrbitalSphere';

interface TopBarProps {
  onScrollToSection?: (id: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "Servicios", id: "servicios" },
    { label: "Comparador", id: "comparador" },
    { label: "Portafolio", id: "portafolio" },
    { label: "Nichos", id: "nichos" },
    { label: "Cotizador", id: "cotizador" },
    { label: "Contacto", id: "contacto" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#031d2c]/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Marca Personal */}
          <div 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-teal-400 shadow-[0_0_15px_rgba(22,213,208,0.3)] bg-[#083852] shrink-0">
              <img
                src={PERSONAL_INFO.logoImage}
                alt="Logo Creador-Webs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  {PERSONAL_INFO.brandName}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Diseño Web 24/7
              </p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-semibold text-slate-300 hover:text-teal-300 transition-colors tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bloque Derecho: Orbital Type Sphere + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Esfera Orbital 3D interactiva solicitada */}
            <div className="relative flex items-center justify-center">
              <OrbitalSphere size={72} />
            </div>

            {/* Botón WhatsApp / Cotizar */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-[0_0_20px_rgba(22,213,208,0.35)] hover:shadow-[0_0_25px_rgba(22,213,208,0.5)] transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Pedir Presupuesto</span>
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Esfera pequeña en móvil */}
            <OrbitalSphere size={44} className="sm:hidden" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#031d2c] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-teal-300 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Escríbeme por WhatsApp ({PERSONAL_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
