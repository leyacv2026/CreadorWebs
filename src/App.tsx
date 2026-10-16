import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackageComparator } from './components/PackageComparator';
import { PortfolioGallery } from './components/PortfolioGallery';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { FiverrPackage, PortfolioProject } from './data/portfolioData';

export default function App() {
  const [quoteConfig, setQuoteConfig] = useState<{
    packageName?: string;
    extraCost?: number;
    selectedAddons?: string[];
  } | null>(null);

  const scrollToQuote = () => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: FiverrPackage) => {
    setQuoteConfig({
      packageName: `${pkg.name} (${pkg.subtitle})`,
      extraCost: 0,
      selectedAddons: [],
    });
    scrollToQuote();
  };

  const handleSelectCustomConfig = (packageName: string, extraCost: number, selectedAddons: string[]) => {
    setQuoteConfig({
      packageName,
      extraCost,
      selectedAddons,
    });
    scrollToQuote();
  };

  const handleRequestSimilar = (project: PortfolioProject) => {
    setQuoteConfig({
      packageName: `Estilo ${project.title} (${project.categoryLabel})`,
      extraCost: 0,
      selectedAddons: project.deliverables,
    });
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Navigation Top Bar */}
      <TopBar onOpenQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenQuote={scrollToQuote} />

        {/* Sobre mí */}
        <AboutSection />

        {/* Servicios & Paquetes Estilo Fiverr */}
        <ServicesSection onSelectPackageForQuote={handleSelectPackage} />

        {/* Comparador Interactivo de Paquetes y Beneficios */}
        <PackageComparator onSelectConfigForQuote={handleSelectCustomConfig} />

        {/* Portafolio & Casos de Éxito */}
        <PortfolioGallery onRequestSimilarProject={handleRequestSimilar} />

        {/* Calculadora Interactiva de Presupuesto & Formulario de Cotización */}
        <QuoteCalculator initialConfig={quoteConfig} />

        {/* Opiniones y Testimonios */}
        <TestimonialsSection />

        {/* Preguntas Frecuentes */}
        <FaqSection />

        {/* Contacto Multicanal (Fiverr / LinkedIn / WhatsApp) */}
        <ContactSection onOpenQuote={scrollToQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookies & Protección de Clientes (RGPD) */}
      <CookieConsent />
    </div>
  );
}
