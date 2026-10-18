import React, { useState, useEffect } from 'react';
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
import { DedicatedServiceView } from './components/DedicatedServiceView';
import { DedicatedPortfolioView } from './components/DedicatedPortfolioView';
import { DedicatedContactView } from './components/DedicatedContactView';
import { FiverrPackage, PortfolioProject } from './data/portfolioData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [quoteConfig, setQuoteConfig] = useState<{
    packageName?: string;
    extraCost?: number;
    selectedAddons?: string[];
  } | null>(null);

  // Sync with browser navigation (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToQuote = () => {
    if (currentPath !== '/') {
      navigate('/contacto');
      return;
    }
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
    if (currentPath !== '/') {
      navigate('/contacto');
    } else {
      scrollToQuote();
    }
  };

  const handleSelectCustomConfig = (packageName: string, extraCost: number, selectedAddons: string[]) => {
    setQuoteConfig({
      packageName,
      extraCost,
      selectedAddons,
    });
    if (currentPath !== '/') {
      navigate('/contacto');
    } else {
      scrollToQuote();
    }
  };

  const handleRequestSimilar = (project: PortfolioProject) => {
    setQuoteConfig({
      packageName: `Estilo ${project.title} (${project.categoryLabel})`,
      extraCost: 0,
      selectedAddons: project.deliverables,
    });
    if (currentPath !== '/') {
      navigate('/contacto');
    } else {
      scrollToQuote();
    }
  };

  // Main homepage title reset
  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'CreadorWebs | Diseño Web & Desarrollo Profesional';
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Navigation Top Bar */}
      <TopBar currentPath={currentPath} onNavigate={navigate} onOpenQuote={scrollToQuote} />

      <main className="flex-1">
        {currentPath === '/servicios/landing-pages' && (
          <DedicatedServiceView
            serviceSlug="landing-pages"
            onNavigate={navigate}
            onOpenQuote={handleSelectPackage}
          />
        )}

        {currentPath === '/servicios/webs-corporativas' && (
          <DedicatedServiceView
            serviceSlug="webs-corporativas"
            onNavigate={navigate}
            onOpenQuote={handleSelectPackage}
          />
        )}

        {currentPath === '/servicios/tiendas-online' && (
          <DedicatedServiceView
            serviceSlug="tiendas-online"
            onNavigate={navigate}
            onOpenQuote={handleSelectPackage}
          />
        )}

        {currentPath === '/portafolio' && (
          <DedicatedPortfolioView
            onNavigate={navigate}
            onRequestSimilar={handleRequestSimilar}
          />
        )}

        {currentPath === '/contacto' && (
          <DedicatedContactView
            onNavigate={navigate}
            initialConfig={quoteConfig}
          />
        )}

        {/* Default Homepage Route */}
        {currentPath !== '/servicios/landing-pages' &&
          currentPath !== '/servicios/webs-corporativas' &&
          currentPath !== '/servicios/tiendas-online' &&
          currentPath !== '/portafolio' &&
          currentPath !== '/contacto' && (
            <>
              {/* Hero Section */}
              <HeroSection onOpenQuote={scrollToQuote} />

              {/* Sobre mí */}
              <AboutSection />

              {/* Servicios & Paquetes Web Profesionales */}
              <ServicesSection
                onSelectPackageForQuote={handleSelectPackage}
                onViewServicePage={(slug) => navigate(`/servicios/${slug}`)}
              />

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

              {/* Contacto Multicanal Directo (WhatsApp / LinkedIn) */}
              <ContactSection onOpenQuote={scrollToQuote} />
            </>
          )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Cookies & Protección de Clientes (RGPD) */}
      <CookieConsent />
    </div>
  );
}
