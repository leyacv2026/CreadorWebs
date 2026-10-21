import React from 'react';
import { User, MapPin, CheckCircle2, MessageSquare, Linkedin, ExternalLink, Award, Code2, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO, HOW_I_WORK_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 bg-[#021622] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-teal-400" />
            <span>Sobre mí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tu idea, mi código, tu web
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Desarrollo web artesanal y estratégico con base en Barcelona. Sin intermediarios, sin plantillas genéricas sobrecargadas.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Fotografías de Estudio y Workspace */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-teal-500/30 shadow-2xl aspect-[4/3] bg-slate-900 group">
              <img
                src={PERSONAL_INFO.workspaceImage}
                alt="Workspace de desarrollo web en Barcelona"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021622] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#031d2c]/90 backdrop-blur-md border border-slate-700 text-xs flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-teal-300 font-semibold">Creador-Webs</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#062b40]/60 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Trato 100% Directo</h4>
                  <p className="text-xs text-slate-300">Hablas directamente con quien programa tu web.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Historia y Metodología */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Hola, soy <span className="text-teal-300 font-black">Yanis HP</span>. Ayudo a negocios y profesionales a tener la web que de verdad merecen.
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              Durante años he visto cómo emprendedores y pequeñas empresas gastan presupuestos desorbitados en agencias para recibir páginas lentas, difíciles de editar y que no consiguen clientes. 
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Mi filosofía en <strong>Creador-Webs</strong> es la contraria: <strong>claridad, velocidad y retorno de inversión</strong>. Cada línea de código que escribo tiene como único objetivo que quien visite tu web entienda tu valor en menos de 5 segundos y tenga un camino sin fricción para contactarte.
            </p>

            {/* 3 Pilares de Trabajo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {HOW_I_WORK_PILLARS.map((pillar) => (
                <div key={pillar.number} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
                  <span className="text-xs font-mono font-black text-teal-400 block mb-1">
                    {pillar.number}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Botones de acción y perfil */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Hablar con Yanis</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>Ver Perfil en LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
