import React from 'react';
import { Mail, Phone, Linkedin, MessageSquare, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#062b40] via-[#042436] to-[#021824] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a4666] via-[#073650] to-[#05263a] p-8 sm:p-14 border border-teal-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/15 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contacto Directo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                ¿Hablamos de tu proyecto?
              </h2>

              <p className="text-base text-slate-200 leading-relaxed max-w-xl">
                Cuéntame qué tienes en mente. Podemos hablar de tus objetivos comerciales y de la página web que mejor encaje con tu negocio y presupuesto.
              </p>

              {/* Direct Channels List */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">LinkedIn Oficial</span>
                    <span className="text-slate-300 text-[11px] block truncate">Conectar con CreadorWebs</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 ml-auto shrink-0" />
                </a>

                {/* Fiverr */}
                <a
                  href={PERSONAL_INFO.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1dbf73] text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    fi
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">Canal de Fiverr</span>
                    <span className="text-slate-300 text-[11px] block truncate">Contratar con protección</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 ml-auto shrink-0" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500 text-[#031d2c] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">Correo Electrónico</span>
                    <span className="text-slate-300 text-[11px] block truncate">Enviar mensaje directo</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 ml-auto shrink-0" />
                </a>

                {/* WhatsApp */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-bold text-white block truncate">WhatsApp Directo</span>
                    <span className="text-slate-300 text-[11px] block truncate">Iniciar conversación por chat</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 ml-auto shrink-0" />
                </a>

              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5 bg-[#031d2c]/90 rounded-3xl p-6 sm:p-8 border border-teal-400/40 text-center space-y-4">
              <span className="text-xs uppercase tracking-wider font-extrabold text-teal-300 block">
                ¿Prefieres un presupuesto inmediato?
              </span>

              <h3 className="text-2xl font-bold text-white">
                Calcula tu cotización en 2 minutos
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Selecciona las páginas y opciones de tu web para recibir una propuesta cerrada y sin sorpresas.
              </p>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-6 rounded-full bg-[#16d5d0] hover:bg-[#61efdf] text-[#031d2c] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-transform active:scale-95 cursor-pointer"
              >
                <span>Ir al Calculador de Presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-[11px] text-slate-400">
                Respuesta garantizada en menos de 1 hora · Trato directo
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
