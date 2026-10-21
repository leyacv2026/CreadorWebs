import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenLegal: (tab: 'aviso' | 'privacidad' | 'cookies') => void;
  onScrollToSection?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onScrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    if (onScrollToSection) {
      onScrollToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#011019] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Columna 1: Marca & Propósito */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-teal-400 bg-[#083852] shrink-0">
                <img
                  src={PERSONAL_INFO.logoImage}
                  alt="Logo Creador-Webs"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-xl font-black text-white">
                  {PERSONAL_INFO.brandName}
                </span>
                <span className="block text-xs text-teal-300 font-medium">
                  Diseño Web 24/7
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Páginas web modernas de alta conversión para autónomos, pymes y negocios locales. Trato directo sin intermediarios.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Barcelona, España</span>
              </span>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('inicio')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sobre-mi')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Sobre mí
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('servicios')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Servicios y Paquetes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('comparador')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Comparador de Paquetes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('chat-soporte')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Chat 24/7 para Clientes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portafolio')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Portafolio & Casos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nichos')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Nichos Principales
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cotizador')} className="hover:text-teal-300 transition-colors cursor-pointer">
                  Cotizador Online
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios Principales */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Servicios Web
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Landing Pages Express (250 €)</li>
              <li>Webs Corporativas para Empresas (550 €)</li>
              <li>Tiendas Online & E-Commerce (950 €)</li>
              <li>Desarrollo Web a Medida (1.200 €)</li>
              <li>Soporte por Chat 24/7 (FAQ y Citas)</li>
              <li>Mantenimiento Web Opcional (+100 €/mes)</li>
            </ul>
          </div>

          {/* Columna 4: Contacto Inmediato */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto Directo
            </h4>
            
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-teal-300 hover:text-teal-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-teal-400" />
              <span>WhatsApp: +34 {PERSONAL_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Llamadas: +34 {PERSONAL_INFO.phone}</span>
            </div>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>Perfil de LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Parte inferior: Derechos y Enlaces Legales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>{PERSONAL_INFO.brandName}</strong> · Yanis HP. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegal('aviso')}
              className="hover:text-teal-300 underline underline-offset-4 cursor-pointer"
            >
              Aviso Legal
            </button>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-teal-300 underline underline-offset-4 cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-teal-300 underline underline-offset-4 cursor-pointer"
            >
              Política de Cookies
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
