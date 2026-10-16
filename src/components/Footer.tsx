import React from 'react';
import { Linkedin, MessageSquare, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#021824] text-slate-400 text-xs border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-teal-400/40 bg-[#021824] flex items-center justify-center shrink-0">
                <img
                  src={PERSONAL_INFO.logoImage}
                  alt="Logo CreadorWebs"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-base font-extrabold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Diseño Web &amp; Desarrollo · Especialista en pequeñas empresas y profesionales
            </p>
          </div>

          {/* Channels / Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Perfil de LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors font-bold text-xs"
              aria-label="Canal de Fiverr"
            >
              Fiverr
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Navigation & Services internal links for Google SEO */}
        <div className="py-6 border-b border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-medium">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Inicio
          </a>
          <a
            href="/servicios/landing-pages"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/servicios/landing-pages');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Landing Pages (250€)
          </a>
          <a
            href="/servicios/webs-corporativas"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/servicios/webs-corporativas');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Webs Empresas (700€)
          </a>
          <a
            href="/servicios/tiendas-online"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/servicios/tiendas-online');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Tiendas Online (1.200€)
          </a>
          <a
            href="/portafolio"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/portafolio');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Portafolio
          </a>
          <a
            href="/contacto"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/contacto');
              }
            }}
            className="hover:text-teal-300 transition-colors"
          >
            · Contacto &amp; Cotizador
          </a>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos los derechos reservados.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
              className="text-slate-400 hover:text-teal-300 transition-colors cursor-pointer underline underline-offset-2"
            >
              Protección de datos &amp; Cookies
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>{PERSONAL_INFO.motto}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
