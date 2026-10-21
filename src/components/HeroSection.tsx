import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, Zap, TrendingUp, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onScrollToCalculator?: () => void;
  onScrollToServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onScrollToCalculator,
  onScrollToServices 
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#031d2c] via-[#062b40] to-[#031d2c] text-white pt-10 sm:pt-16 pb-20 sm:pb-28">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Copy de Conversión & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge de propuesta de valor */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Diseño Web de Alta Conversión · Barcelona & Online</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Creo páginas web modernas que no solo se ven bien:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400">
                venden.
              </span>
            </h1>

            {/* Subtítulo persuasivo */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transformo la presencia digital de tu negocio en una máquina de generar clientes. 
              Páginas ultra rápidas, perfectamente optimizadas para móvil y diseñadas para que tus visitas te llamen o te escriban por WhatsApp.
            </p>

            {/* Doble CTA de Acción Inmediata */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-base transition-all shadow-[0_0_25px_rgba(22,213,208,0.4)] hover:shadow-[0_0_35px_rgba(22,213,208,0.6)] transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Escríbeme por WhatsApp</span>
              </a>

              <button
                onClick={onScrollToCalculator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-base border border-slate-600 transition-all cursor-pointer"
              >
                <span>Calcular Presupuesto</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>

            {/* Garantías y factores clave */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Entrega desde 5 días</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Adaptada a móvil</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Velocidad &lt; 1s</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Sin intermediarios</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Visual con Retrato de Yanis y Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Marco de Tarjeta Pro */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#083852] to-[#042031] rounded-3xl p-6 border border-teal-500/30 shadow-2xl">
              
              {/* Badge superior de estado activo */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-300">Disponible para nuevos proyectos</span>
                </div>
                <span className="text-teal-400 font-mono font-bold">Barcelona</span>
              </div>

              {/* Imagen de Yanis con halo */}
              <div className="my-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-700/80 group">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Yanis HP - Diseñador Web & Desarrollador"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual si la ruta variase
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031d2c] via-transparent to-transparent opacity-70" />
                
                {/* Floating pill sobre la foto */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#031d2c]/90 backdrop-blur-md border border-teal-400/30 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Yanis HP</p>
                    <p className="text-[11px] text-teal-300">Especialista en Diseño Web</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold">
                    Trato 1 a 1
                  </span>
                </div>
              </div>

              {/* Estadísticas de valor */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-center">
                  <p className="text-2xl font-black text-teal-400">100%</p>
                  <p className="text-[11px] text-slate-300 font-medium">Diseño a medida</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-center">
                  <p className="text-2xl font-black text-cyan-300">&lt; 24h</p>
                  <p className="text-[11px] text-slate-300 font-medium">Tiempo de respuesta</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            GANCHOS DE VENTA PERSUASIVOS (Sustituyen antiguos indicadores de Fiverr)
            (Prompts 2 y 3 del usuario)
           ========================================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Por qué invertir en una web profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Tres pilares pensados para multiplicar tus ingresos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Gancho 1: Tu web, tu activo más rentable */}
            <div className="relative p-7 rounded-2xl bg-gradient-to-b from-[#083852]/70 to-[#031d2c]/90 border border-teal-500/30 hover:border-teal-400/60 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 px-2.5 py-1 rounded-full bg-teal-950/70 border border-teal-400/30">
                {PERSONAL_INFO.sellingHooks[0].badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                {PERSONAL_INFO.sellingHooks[0].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.sellingHooks[0].description}
              </p>
            </div>

            {/* Gancho 2: Diseño que no solo se ve bien, vende */}
            <div className="relative p-7 rounded-2xl bg-gradient-to-b from-[#083852]/70 to-[#031d2c]/90 border border-teal-500/30 hover:border-teal-400/60 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/30">
                {PERSONAL_INFO.sellingHooks[1].badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                {PERSONAL_INFO.sellingHooks[1].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.sellingHooks[1].description}
              </p>
            </div>

            {/* Gancho 3: Resultados digitales medibles */}
            <div className="relative p-7 rounded-2xl bg-gradient-to-b from-[#083852]/70 to-[#031d2c]/90 border border-teal-500/30 hover:border-teal-400/60 transition-all hover:-translate-y-1 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-400/30">
                {PERSONAL_INFO.sellingHooks[2].badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">
                {PERSONAL_INFO.sellingHooks[2].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.sellingHooks[2].description}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
