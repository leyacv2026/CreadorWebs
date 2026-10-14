import React from 'react';
import { Heart, Sparkles, Check, Linkedin, ExternalLink, ShieldCheck, Zap, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-teal-600 text-xs font-extrabold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Sobre mí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062b40] tracking-tight">
            Mi pasión, tu proyecto.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Una presencia online que refleja tu idea con claridad, elegancia y resultados tangibles.
          </p>
        </div>

        {/* 2-Column Split: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column: Portrait + Workspace */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Main Portrait */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100 relative group">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating quote bubble matching user flyer */}
                <div className="absolute -bottom-4 right-4 bg-[#062b40] text-white p-4 rounded-2xl shadow-xl max-w-xs border border-teal-500/30">
                  <p className="text-sm font-semibold italic text-slate-100">
                    "{PERSONAL_INFO.philosophy}"
                  </p>
                  <span className="block text-[11px] text-teal-300 font-bold uppercase tracking-wider mt-2">
                    CreadorWebs · Diseño &amp; Desarrollo Web
                  </span>
                </div>
              </div>

              {/* Verified channel card */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center font-bold">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Perfil en LinkedIn</span>
                    <span className="text-slate-500 block">Conecta para colaboraciones y contratos</span>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#0077b5] hover:bg-[#005f93] rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Conectar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Text & Traits Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-slate-700 leading-relaxed">
              {PERSONAL_INFO.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Traits */}
            <div className="pt-2">
              <h3 className="text-sm font-extrabold text-[#062b40] uppercase tracking-wider mb-4">
                Pilares de mi forma de trabajar
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center mb-2 font-bold text-sm">
                    ✦
                  </div>
                  <h4 className="font-bold text-sm text-[#062b40]">Creativa</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Diseños originales y estética cuidada sin plantillas genéricas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center mb-2 font-bold text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <h4 className="font-bold text-sm text-[#062b40]">Comprometida</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Atención al detalle y comunicación transparente en todo momento.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center mb-2 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#062b40]">Orientada a resultados</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Estructuras diseñadas para que tus visitas se conviertan en clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist of guarantees from user flyer */}
            <div className="p-5 rounded-2xl bg-[#062b40] text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-teal-300" />
                <span>Lo que garantizo en cada entrega</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PERSONAL_INFO.guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-teal-400 text-[#031d2c] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">{item.title}</span>
                      <span className="text-slate-300 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
