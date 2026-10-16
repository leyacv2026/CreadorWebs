import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Laptop, Smartphone, ExternalLink, Sparkles, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const currentProject = PORTFOLIO_PROJECTS[activePreviewIndex];

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#031d2c] via-[#062b40] to-[#08354e] text-white pt-12 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Creadora de páginas web</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
              Creo páginas web modernas <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300">para dar vida a tus ideas.</span>
            </h1>

            <p className="text-lg text-slate-200/90 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Diseño 100% adaptable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Optimización SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Entrega desde 3 días</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#16d5d0] hover:bg-[#61efdf] text-[#031d2c] font-black text-sm shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Ver presupuesto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Ver planes y tarifas</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-300 transition-colors py-2 px-1"
              >
                <span>LinkedIn oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Mockup Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Laptop mockup enclosure */}
              <div className="bg-[#102736] border-4 border-[#1b3d54] rounded-2xl shadow-2xl overflow-hidden p-2.5 relative">
                
                {/* Browser top bar */}
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/10 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="bg-[#061b27] px-3 py-0.5 rounded text-[10px] text-teal-300 font-mono truncate max-w-[220px]">
                    creador-webs.vercel.app/proyectos/{currentProject.id}
                  </div>
                  <div className="flex items-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>

                {/* Main Screen Content */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 mt-2 group">
                  <img
                    src={currentProject.heroImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] uppercase tracking-wider text-teal-300 font-bold">
                      {currentProject.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {currentProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1">
                      {currentProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Interactive Demo Switcher */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between gap-2 px-1">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Explorar muestra:
                  </span>
                  <div className="flex items-center gap-1">
                    {PORTFOLIO_PROJECTS.map((proj, idx) => (
                      <button
                        key={proj.id}
                        onClick={() => setActivePreviewIndex(idx)}
                        className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-all cursor-pointer ${
                          activePreviewIndex === idx
                            ? 'bg-teal-400 text-[#031d2c] shadow-sm'
                            : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                      >
                        {proj.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile device overlay badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white text-[#062b40] p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 backdrop-blur-sm max-w-[260px]">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="leading-tight text-xs">
                  <span className="font-extrabold text-[#062b40] block">Tu proyecto, en la web</span>
                  <span className="text-slate-500 text-[11px] block mt-0.5">Adaptable a cualquier pantalla</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Sales Hooks / Conversion Cards */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => {
            const icons = [
              <ShieldCheck key="shield" className="w-5 h-5 text-teal-300" />,
              <Zap key="zap" className="w-5 h-5 text-amber-300" />,
              <Sparkles key="sparkles" className="w-5 h-5 text-cyan-300" />,
              <TrendingUp key="trending" className="w-5 h-5 text-emerald-300" />
            ];
            return (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-teal-400/40 transition-all text-left group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    {icons[i % icons.length]}
                  </div>
                  {stat.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30">
                      {stat.highlight}
                    </span>
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-teal-300 mt-1">
                  {stat.label}
                </div>
                {stat.desc && (
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {stat.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
