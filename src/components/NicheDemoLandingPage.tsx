import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  ArrowLeft, 
  Check, 
  X, 
  Clock, 
  Smartphone, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Info,
  Target,
  Hammer,
  Zap,
  Paintbrush,
  Wrench
} from 'lucide-react';
import { NICHES_DEMO_DATA, NicheDemoConfig } from '../data/nichesDemoData';
import { LegalModal } from './LegalModal';

interface NicheDemoLandingPageProps {
  nicheId: string;
  onBack: () => void;
}

export const NicheDemoLandingPage: React.FC<NicheDemoLandingPageProps> = ({ nicheId, onBack }) => {
  // Estado local para permitir alternar entre sectores desde la misma barra de navegación
  const [selectedId, setSelectedId] = useState<string>(nicheId || 'reformistas');

  useEffect(() => {
    if (nicheId) {
      setSelectedId(nicheId);
    }
  }, [nicheId]);

  useEffect(() => {
    const nicheTitles: Record<string, string> = {
      reformistas: "Webs para Reformas y Reformistas | Creador-Webs · Landing Pages, Webs Corporativas, Tiendas Online y Mantenimiento",
      electricistas: "Webs para Electricistas | Creador-Webs · Landing Pages, Webs Corporativas, Tiendas Online y Mantenimiento",
      pintores: "Webs para Pintores | Creador-Webs · Landing Pages, Webs Corporativas, Tiendas Online y Mantenimiento",
      fontaneros: "Webs para Fontaneros | Creador-Webs · Landing Pages, Webs Corporativas, Tiendas Online y Mantenimiento",
    };
    document.title = nicheTitles[selectedId] || "Creador-Webs | Landing Pages, Webs Corporativas, Tiendas Online, Mantenimiento & Reformas · Yanis HP";
  }, [selectedId]);

  const config: NicheDemoConfig = NICHES_DEMO_DATA[selectedId] || NICHES_DEMO_DATA['reformistas'];

  const PHONE_NUMBER = "608 18 02 31";
  const BRAND_NAME = "Creador-Webs";
  const LOCATION = "Barcelona y área metropolitana";
  const WHATSAPP_URL = `https://wa.me/34608180231?text=${encodeURIComponent(config.whatsappMessage)}`;
  const EMAIL_PLACEHOLDER = "[PENDIENTE: email]";
  const CTA_REPEATED = "Escríbeme y te respondo hoy";

  // Estado del formulario
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formTrade, setFormTrade] = useState(config.tradeOptions[0]?.value || '');
  const [formMessage, setFormMessage] = useState('');
  const [formPrivacy, setFormPrivacy] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Actualizar trade por defecto cuando cambia el nicho
  useEffect(() => {
    setFormTrade(config.tradeOptions[0]?.value || '');
    setFormSubmitted(false);
  }, [selectedId, config]);

  // Estado del modal legal
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'aviso' | 'privacidad' | 'cookies'>('aviso');

  const openLegal = (tab: 'aviso' | 'privacidad' | 'cookies') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPrivacy) return;
    setFormSubmitted(true);
  };

  const tradeTabs = [
    { id: 'reformistas', label: 'Reformistas', icon: <Hammer className="w-3.5 h-3.5" /> },
    { id: 'electricistas', label: 'Electricistas', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'pintores', label: 'Pintores', icon: <Paintbrush className="w-3.5 h-3.5" /> },
    { id: 'fontaneros', label: 'Fontaneros', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const isTradeNiche = config.sectorGroup === 'oficios';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Barra superior de navegación */}
      <nav className="sticky top-0 z-50 bg-[#031d2c] border-b border-slate-700 shadow-md text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Creador-Webs</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
              Demo: {config.nicheShortName}
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Selector dinámico de oficios para alternar en tiempo real entre los 4 sectores */}
        {isTradeNiche && (
          <div className="bg-[#021622] border-t border-slate-800 py-2 px-4 sm:px-6 overflow-x-auto">
            <div className="max-w-6xl mx-auto flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden md:inline-block mr-2">
                Ver copy específico:
              </span>
              {tradeTabs.map((tab) => {
                const isActive = selectedId === tab.id || (tab.id === 'reformistas' && selectedId === 'reformas') || (tab.id === 'electricistas' && selectedId === 'electricidad') || (tab.id === 'pintores' && selectedId === 'pintura') || (tab.id === 'fontaneros' && selectedId === 'fontaneria');
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedId(tab.id);
                      window.location.hash = `#demo-${tab.id}`;
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-teal-500 text-[#031d2c] shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* =========================================================================
          a) HERO SECTION (Texto dinámico adaptado al sector del copywriter)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-[#031d2c] to-[#062b40] text-white pt-12 pb-20 px-4 sm:px-6 border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-teal-400" />
            <span>{config.badge}</span>
          </div>

          {/* Titular del copywriter específico para el sector */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            {config.title}
          </h1>

          {/* Subtítulo dinámico para el sector */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {config.subtitle}
          </p>

          {/* Botón principal directo de WhatsApp */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-base transition-all shadow-lg hover:shadow-teal-500/30"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Escríbeme por WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-400" />
              250 € precio cerrado
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              Entrega en 5 días
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-teal-400" />
              Optimizada para cargar rápido en móvil
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          b) EL PROBLEMA, EN 3 FRASES (Específico de cada oficio)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              El Problema Habitual
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {config.problemTitle}
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {config.problemPoints[0]}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {config.problemPoints[1]}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-bold">
                {config.problemPoints[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          c) QUÉ INCLUYE MI LANDING (Estructura única cerrada de 250 €)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Oferta Clara y Cerrada
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Qué incluye mi landing page para {config.nicheShortName}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Lista de lo que incluye */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">
                  Landing Page: 250 €
                </h3>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Entrega en 5 días
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-500">
                Pago 50 % al empezar (125 €) y 50 % al entregar (125 €)
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Diseño responsive (optimizada para cargar rápido en móvil)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Galería de obras terminadas o catálogo visual de servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Botón de WhatsApp para pedir presupuesto o aviso en 1 toque</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Formulario de presupuesto claro y fácil de rellenar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>SEO técnico básico para aparecer en Google</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>2 rondas de revisiones incluidas antes de publicar</span>
                </li>
              </ul>
            </div>

            {/* Lista de lo que NO incluye */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                ✕ Lo que no incluye (sin sorpresas):
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Fotos y textos profesionales (si hace falta, se presupuestan aparte)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Dominio y alojamiento (se contratan a tu nombre para que seas el dueño absoluto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Cambios posteriores a la entrega del proyecto</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                <strong>Segunda opción:</strong> Web de hasta 5 páginas: presupuesto según proyecto.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          d) EJEMPLO DE CÓMO QUEDARÍA TU WEB (MAQUETA DEMO FICTICIA DEL OFICIO)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-300">
              <Info className="w-3.5 h-3.5 text-amber-700" />
              <span>{config.mockup.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Así vería un cliente la web de tu negocio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Estructura directa, limpia y pensada para que te contacten de inmediato.
            </p>
          </div>

          {/* Maqueta Interactiva de Empresa Ficticia del Sector */}
          <div className="rounded-3xl border-2 border-slate-300 bg-slate-900 p-2 sm:p-4 shadow-xl">
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-300">
              
              {/* Header simulado de la empresa ficticia */}
              <div className="bg-white px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-black text-slate-900 text-sm sm:text-base">
                    {config.mockup.businessName}
                  </span>
                  <p className="text-[10px] text-teal-700 font-bold">
                    {config.mockup.tagline}
                  </p>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{PHONE_NUMBER}</span>
                </span>
              </div>

              {/* Contenido simulado del sector específico */}
              <div className="p-6 space-y-6">
                <div className="text-center max-w-lg mx-auto space-y-1">
                  <h3 className="text-lg font-black text-slate-900">
                    {config.mockup.servicesTitle}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {config.mockup.servicesSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {config.mockup.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                        {item.tag}
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                      <div className="text-xs text-slate-600 space-y-1 pt-1">
                        <p><span className="font-bold text-slate-800">{item.detail1Label}</span> {item.detail1}</p>
                        <p><span className="font-bold text-emerald-700">{item.detail2Label}</span> {item.detail2}</p>
                      </div>
                      <span className="block text-[10px] text-slate-400 font-semibold pt-1">
                        {item.badgeFoot}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botón simulado en la maqueta */}
                <div className="text-center pt-2">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-black text-xs shadow-md">
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{config.mockup.ctaText}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          e) CÓMO TRABAJO, EN 3 PASOS
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Proceso Directo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Cómo trabajo, en 3 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-sm">
                1
              </div>
              <h3 className="font-black text-slate-900 text-base">
                Llamada de 15 minutos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hablamos por teléfono o WhatsApp de tu negocio, los trabajos que quieres mostrar y la zona de Barcelona que cubres.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-sm">
                2
              </div>
              <h3 className="font-black text-slate-900 text-base">
                Propuesta con precio cerrado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                250 € exactos, sin costes ocultos ni sorpresas. Pago del 50 % al empezar y 50 % al entregar la web publicada.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-sm">
                3
              </div>
              <h3 className="font-black text-slate-900 text-base">
                Entrega en 5 días
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reviso contigo el diseño, aplicamos tus ajustes (2 rondas de revisiones incluidas) y tu web queda publicada para recibir clientes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          f) QUIÉN SOY (1ª persona del singular)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Diseño Web Cercano
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Quién soy y cómo trabajo
            </h2>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Soy el responsable de <strong>{BRAND_NAME}</strong>, diseñador web independiente con base en <strong>Barcelona</strong>. Trabajo directamente con autónomos y pequeños negocios de oficios (reformistas, electricistas, pintores, fontaneros) de Barcelona y su área metropolitana.
            </p>
            <p>
              Mi forma de trabajar es directa: cuando un cliente busca un profesional o te encuentra tras una recomendación, necesita ver rápido qué haces y tener un botón para llamarte o escribirte. No necesita efectos lentos ni textos largos que nadie lee.
            </p>
            <p>
              No tengo comerciales ni derivo tu proyecto a terceros. Tratas conmigo desde el primer día: revisamos tus fotos de obras, acordamos el diseño y en 5 días tienes tu web lista para empezar a trabajar.
            </p>

            <div className="pt-2 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>Base en Barcelona · Trato 1 a 1 directo</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          g) PRECIO Y MANTENIMIENTO
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Precios Coherentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Precios y servicio de mantenimiento opcional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Tarjeta Landing */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-500 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Oferta Principal
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Landing Page para {config.nicheShortName}
                </h3>
                <div className="font-mono text-4xl font-black text-slate-900">
                  250 €
                </div>
                <p className="text-xs text-slate-600">
                  Pago 50 % al empezar (125 €) y 50 % al entregar (125 €). Entrega en 5 días.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Diseño responsive adaptado a móvil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Galería de obras y trabajos terminados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Botón directo de WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Formulario de presupuesto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>2 rondas de revisiones incluidas</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-black text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Pedir mi Web de 250 €</span>
                </a>
              </div>
            </div>

            {/* Tarjeta Mantenimiento Opcional */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  Opcional · Sin Permanencia
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Mantenimiento Web
                </h3>
                <div className="font-mono text-4xl font-black text-slate-900">
                  100 €<span className="text-xs text-slate-500 font-normal">/mes</span>
                </div>
                <p className="text-xs text-slate-600">
                  Alcance cerrado para tu total tranquilidad:
                </p>
                <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Copias de seguridad periódicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Actualizaciones de software y seguridad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Revisión mensual de formularios y enlaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Monitorización de disponibilidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Hasta 2 pequeños cambios de contenido al mes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Informe mensual de estado</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <p className="text-[11px] text-slate-400 mb-2 italic">
                  Todo lo demás se presupuesta aparte. Servicio totalmente opcional.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          h) CONTACTO: BOTÓN DE WHATSAPP Y FORMULARIO
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              {CTA_REPEATED}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Empieza hoy mismo tu web de {config.nicheShortName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Escríbeme por WhatsApp o rellena este breve formulario y te respondo hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* WhatsApp directo */}
            <div className="bg-[#031d2c] rounded-3xl p-8 text-white space-y-5">
              <h3 className="text-xl font-black">
                Contacto Rápido por WhatsApp
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Envíame un mensaje o un audio comentando qué tipo de trabajos realizas y en qué zona de Barcelona operas.
              </p>
              <div className="p-4 rounded-xl bg-slate-800 text-xs text-teal-300 font-mono">
                Tel: +34 {PHONE_NUMBER}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Escríbeme por WhatsApp</span>
              </a>
              <p className="text-[11px] text-slate-400 text-center font-medium">
                {CTA_REPEATED}
              </p>
            </div>

            {/* Formulario sencillo con oficios específicos */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    ¡Mensaje enviado con éxito!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Gracias {formName}. He recibido tu solicitud y te responderé hoy mismo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre o Negocio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Mi Empresa"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono o Email de Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. 600 000 000"
                      value={formContact}
                      onChange={(e) => setFormContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tipo de Trabajo o Especialidad
                    </label>
                    <select
                      value={formTrade}
                      onChange={(e) => setFormTrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:border-teal-600"
                    >
                      {config.tradeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Cuéntame brevemente qué trabajos te gustaría mostrar en tu web..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:outline-none focus:border-teal-600"
                    />
                  </div>

                  {/* Casilla RGPD obligatoria */}
                  <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      required
                      checked={formPrivacy}
                      onChange={(e) => setFormPrivacy(e.target.checked)}
                      className="mt-0.5 rounded accent-teal-600"
                    />
                    <span>
                      Acepto la{' '}
                      <button
                        type="button"
                        onClick={() => openLegal('privacidad')}
                        className="text-teal-700 underline hover:text-teal-900"
                      >
                        política de privacidad
                      </button>{' '}
                      para el envío de mi solicitud de presupuesto.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-black text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Pie de página con datos requeridos y plantillas legales */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-bold text-white text-sm">{BRAND_NAME}</p>
            <p>{LOCATION} · Teléfono: {PHONE_NUMBER}</p>
            <p className="text-[11px] text-slate-500">Email: {EMAIL_PLACEHOLDER}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => openLegal('aviso')}
              className="hover:text-teal-300 underline underline-offset-2 cursor-pointer"
            >
              Aviso legal
            </button>
            <button
              onClick={() => openLegal('privacidad')}
              className="hover:text-teal-300 underline underline-offset-2 cursor-pointer"
            >
              Política de privacidad
            </button>
            <button
              onClick={() => openLegal('cookies')}
              className="hover:text-teal-300 underline underline-offset-2 cursor-pointer"
            >
              Política de cookies
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-[11px] text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Diseñado para pequeños negocios de Barcelona y área metropolitana.</p>
        </div>
      </footer>

      {/* Botón flotante permanente de WhatsApp en móvil */}
      <aside className="fixed bottom-5 right-5 z-40">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir por WhatsApp para web de ${config.nicheShortName}`}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </a>
      </aside>

      {/* Modal Legal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
      />

    </div>
  );
};
