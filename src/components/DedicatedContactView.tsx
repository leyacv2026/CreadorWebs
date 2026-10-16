import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, MessageSquare, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import { QuoteCalculator } from './QuoteCalculator';
import { ContactSection } from './ContactSection';

interface DedicatedContactViewProps {
  onNavigate: (path: string) => void;
  initialConfig?: {
    packageName?: string;
    extraCost?: number;
    selectedAddons?: string[];
  } | null;
}

export const DedicatedContactView: React.FC<DedicatedContactViewProps> = ({
  onNavigate,
  initialConfig,
}) => {
  useEffect(() => {
    document.title = 'Solicitar Presupuesto y Contacto | CreadorWebs';
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
            <span className="text-teal-300">Presupuesto &amp; Contacto Oficial</span>
          </div>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Presupuesto Inmediato · Respuesta en menos de 1 hora</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Solicita tu Presupuesto Web a Medida
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Configura las características de tu proyecto para obtener una estimación transparente en tiempo real, o contáctanos directamente a través de WhatsApp o LinkedIn.
          </p>
        </header>

        {/* Interactive Quote Calculator */}
        <div className="mb-16">
          <QuoteCalculator initialConfig={initialConfig} />
        </div>

        {/* Contact Channels */}
        <ContactSection onOpenQuote={() => {}} />

      </div>
    </article>
  );
};
