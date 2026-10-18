import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { PortfolioGallery } from './PortfolioGallery';
import { PortfolioProject } from '../data/portfolioData';

interface DedicatedPortfolioViewProps {
  onNavigate: (path: string) => void;
  onRequestSimilar: (project: PortfolioProject) => void;
}

export const DedicatedPortfolioView: React.FC<DedicatedPortfolioViewProps> = ({
  onNavigate,
  onRequestSimilar,
}) => {
  useEffect(() => {
    document.title = 'Portafolio de Páginas Web & Casos de Éxito | CreadorWebs';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <article className="py-16 md:py-24 bg-slate-900 text-white min-h-[85vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Miga de pan" className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Inicio</span>
            </button>
            <span>/</span>
            <span className="text-teal-300">Portafolio &amp; Casos de Éxito</span>
          </div>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Casos Reales · Proyectos 100% a Medida</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Portafolio de Páginas Web y Casos de Estudio
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explora una muestra de sitios web diseñados a medida: webs corporativas, e-commerce y páginas de restauración. Cada proyecto cuenta con un propósito comercial claro, diseño 100% adaptable y velocidad de carga extrema.
          </p>
        </header>

        {/* Gallery */}
        <div className="mb-16">
          <PortfolioGallery onRequestSimilarProject={onRequestSimilar} />
        </div>

        {/* Bottom CTA to Services */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#042436] to-[#021824] border border-teal-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">
              ¿Quieres una web como estas para tu negocio?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Recuerda nuestro compromiso de exclusividad: solo realizamos 1 web por pedido para prestarle el 100% de nuestra atención.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contacto')}
            className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-teal-500/25 shrink-0 transition-all cursor-pointer"
          >
            <span>Solicitar mi presupuesto a medida</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>

      </div>
    </article>
  );
};
