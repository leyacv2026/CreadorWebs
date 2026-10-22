import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackageComparator } from './components/PackageComparator';
import { ChatFeatureSection } from './components/ChatFeatureSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { NichesSection } from './components/NichesSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveChatWidget } from './components/LiveChatWidget';
import { CookieConsent } from './components/CookieConsent';
import { LegalModal } from './components/LegalModal';
import { NicheDemoLandingPage } from './components/NicheDemoLandingPage';

export const App: React.FC = () => {
  const [activeNicheDemo, setActiveNicheDemo] = useState<string | null>(null);
  const [chatWidgetOpen, setChatWidgetOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'aviso' | 'privacidad' | 'cookies'>('aviso');

  // Sincronización con el hash de la URL para permitir enlaces directos a cualquier demo de nicho
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#demo-')) {
        const nicheId = hash.replace('#demo-', '');
        setActiveNicheDemo(nicheId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#reformas') {
        setActiveNicheDemo('reformas');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveNicheDemo(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (!activeNicheDemo) {
      document.title = "Creador-Webs | Landing Pages, Webs Corporativas, Tiendas Online, Mantenimiento & Reformas · Yanis HP";
    }
  }, [activeNicheDemo]);

  const handleOpenLegal = (tab: 'aviso' | 'privacidad' | 'cookies') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    if (activeNicheDemo) {
      setActiveNicheDemo(null);
      window.location.hash = `#${id}`;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenNicheDemo = (nicheId: string) => {
    setActiveNicheDemo(nicheId);
    window.location.hash = `#demo-${nicheId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveNicheDemo(null);
    window.location.hash = '#nichos';
    setTimeout(() => {
      const el = document.getElementById('nichos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Si hay una demo de nicho activa
  if (activeNicheDemo) {
    return <NicheDemoLandingPage nicheId={activeNicheDemo} onBack={handleBackToHome} />;
  }

  // Vista principal de Creador-Webs
  return (
    <div className="min-h-screen bg-[#031d2c] text-white flex flex-col font-sans selection:bg-teal-500 selection:text-[#031d2c]">
      
      {/* 1. Header con TopBar & Esfera Orbital Type */}
      <TopBar onScrollToSection={handleScrollToSection} />

      {/* 2. Hero Section con Ganchos de Venta y Retrato de Yanis */}
      <main className="flex-1">
        <HeroSection 
          onScrollToCalculator={() => handleScrollToSection('cotizador')}
          onScrollToServices={() => handleScrollToSection('servicios')}
        />

        {/* 3. Sobre mí & Metodología */}
        <AboutSection />

        {/* 4. Servicios & Paquetes Estructurados */}
        <ServicesSection 
          onSelectPackage={() => handleScrollToSection('cotizador')}
        />

        {/* 5. Comparador Interactivo de Paquetes y Extras */}
        <PackageComparator />

        {/* 6. Soporte por Chat 24/7 (Respuestas inmediatas, automatiza FAQ, citas y consultas) */}
        <ChatFeatureSection 
          onOpenChatWidget={() => setChatWidgetOpen(true)}
        />

        {/* 7. Portafolio & Casos Reales (EcoVida, Belleza Natural, La Terraza) */}
        <PortfolioGallery />

        {/* 8. Nichos Principales (con botón interactivo a la demo de cada nicho) */}
        <NichesSection 
          onOpenNicheDemo={handleOpenNicheDemo}
        />

        {/* 9. Cotizador de Presupuestos en Tiempo Real */}
        <QuoteCalculator />

        {/* 10. Opiniones y Experiencias de Clientes */}
        <TestimonialsSection />

        {/* 11. Contacto Directo & WhatsApp */}
        <ContactSection onOpenLegal={handleOpenLegal} />
      </main>

      {/* 12. Footer Institucional */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onScrollToSection={handleScrollToSection}
      />

      {/* 13. Widget Interactivo de Soporte por Chat 24/7 */}
      <LiveChatWidget
        isOpen={chatWidgetOpen}
        onOpen={() => setChatWidgetOpen(true)}
        onClose={() => setChatWidgetOpen(false)}
        standaloneToggle={true}
      />

      {/* 14. Botón Flotante Permanente de WhatsApp */}
      <FloatingWhatsApp />

      {/* 15. Banner de Cookies conforme a RGPD */}
      <CookieConsent />

      {/* 16. Modal de Aviso Legal, Privacidad y Cookies */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />

    </div>
  );
};

export default App;
