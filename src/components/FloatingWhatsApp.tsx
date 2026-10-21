import React from 'react';
import { MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside 
      aria-label="Contacto rápido por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center group select-none"
    >
      {/* Tooltip flotante en hover para desktop */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#031d2c] border border-teal-400/40 text-white text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        <span>Escríbeme por WhatsApp</span>
      </div>

      {/* Botón flotante */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a Creador-Webs"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        {/* Notificación ping */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#031d2c]"></span>
        </span>
      </a>
    </aside>
  );
};
