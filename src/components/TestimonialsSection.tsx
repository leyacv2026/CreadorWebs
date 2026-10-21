import React from 'react';
import { Quote, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#031d2c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Opiniones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Negocios que ya Crecen con su Nueva Web
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            La satisfacción de trabajar con plazos cumplidos, comunicación directa y resultados tangibles desde el primer día.
          </p>
        </div>

        {/* Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#062b40]/70 rounded-3xl p-8 border border-slate-700/80 hover:border-teal-500/50 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Comillas */}
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Destacado */}
                <p className="text-sm font-bold text-teal-300 mb-3">
                  "{t.highlight}"
                </p>

                {/* Contenido */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Autor */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} · {t.business}</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-teal-300 border border-slate-700">
                  {t.projectTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Llamada a la acción al pie */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-300 mb-4">
            ¿Quieres que tu web sea el próximo caso de éxito?
          </p>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Empezar mi Proyecto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
