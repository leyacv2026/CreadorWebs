import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  HelpCircle, 
  Phone, 
  ExternalLink,
  Bot,
  BadgeCheck,
  CheckCheck,
  ArrowRight,
  Hammer,
  Zap,
  Paintbrush,
  Wrench,
  Calculator,
  Volume2,
  VolumeX,
  ChevronRight,
  Layers,
  ShoppingBag,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getChatBotResponse } from '../data/chatbotKnowledge';

// Tipos de tarjetas interactivas de alto impacto visual
interface PricingItem {
  id: string;
  name: string;
  price: number;
  delivery: string;
  payment: string;
  popular?: boolean;
  highlight: string;
  includes: string[];
  waMessage: string;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: { label: string; action: string }[];
  isAppointmentCard?: boolean;
  showPricingCards?: boolean;
  showNicheDemos?: boolean;
  showEstimatorWizard?: boolean;
}

interface LiveChatWidgetProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  standaloneToggle?: boolean;
}

// Reproductor de sonido sutil mediante Web Audio API (sin dependencias externas)
const playSoftChime = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch {
    // Silencio seguro si el navegador no permite audio
  }
};

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ 
  isOpen: controlledIsOpen, 
  onOpen: controlledOnOpen,
  onClose: controlledOnClose,
  standaloneToggle = true 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Sincronizar con la prop controlada cuando cambia externamente
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setInternalIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  // isWidgetOpen es true si cualquiera de las fuentes es true
  const isWidgetOpen = controlledIsOpen !== undefined ? (controlledIsOpen || internalIsOpen) : internalIsOpen;

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  // Formulario de cita de llamada
  const [apptName, setApptName] = useState('');
  const [apptPhone, setApptPhone] = useState('');
  const [apptService, setApptService] = useState('Landing Page Express (250€)');
  const [apptDate, setApptDate] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialBotMessages: Message[] = [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `👋 ¡Hola! Soy el asistente interactivo de **Yanis HP (Creador-Webs)**.

Como desarrollador freelance especializado en webs para autónomos y pymes de Barcelona y toda España, sé que tu negocio necesita **resultados rápidos y presupuestos claros sin rodeos**.`,
      timestamp: 'Ahora'
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: `¿Qué te gustaría ver ahora mismo?`,
      timestamp: 'Ahora',
      quickReplies: [
        { label: '💰 Ver tarifas cerradas (desde 250 €)', action: 'ver_tarifas_cards' },
        { label: '🔨 Demos para reformas y oficios', action: 'ver_demos_nichos' },
        { label: '⚡ Calcular presupuesto en 30s', action: 'iniciar_cotizador' },
        { label: '⏱️ ¿Cómo entregas en 5 días?', action: 'faq_plazos' },
        { label: '📅 Agendar llamada 15 min', action: 'agendar_cita' },
        { label: '💬 Hablar con Yanis por WhatsApp', action: 'ir_whatsapp' }
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialBotMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isWidgetOpen) {
      scrollToBottom();
    }
  }, [messages, isWidgetOpen, isTyping]);

  const handleOpen = () => {
    setInternalIsOpen(true);
    if (controlledOnOpen) {
      controlledOnOpen();
    }
    if (soundEnabled) {
      playSoftChime();
    }
  };

  const handleClose = () => {
    setInternalIsOpen(false);
    if (controlledOnClose) {
      controlledOnClose();
    }
  };

  const handleQuickAction = (action: string) => {
    if (soundEnabled) playSoftChime();

    if (action.startsWith('direct_wa:')) {
      const url = action.replace('direct_wa:', '');
      window.open(url, '_blank');
      return;
    }

    if (action === 'ir_whatsapp') {
      window.open(PERSONAL_INFO.whatsappUrl, '_blank');
      return;
    }

    if (action === 'ver_tarifas_cards') {
      addRichConversation(
        'Quiero ver las tarifas oficiales y qué incluye cada plan',
        'Aquí tienes nuestras tarifas oficiales con **precio cerrado y sin letra pequeña**. En todas el pago es **50% al empezar y 50% únicamente a la entrega**:',
        {
          showPricingCards: true,
          quickReplies: [
            { label: '🔨 Ver demos para reformas', action: 'ver_demos_nichos' },
            { label: '📅 Agendar llamada de 15 min', action: 'agendar_cita' },
            { label: '💬 Consultar dudas por WhatsApp', action: 'ir_whatsapp' }
          ]
        }
      );
      return;
    }

    if (action === 'ver_demos_nichos') {
      addRichConversation(
        'Quiero ver ejemplos y demos de webs para reformas y oficios',
        'Hemos creado demos en vivo para cada sector de obras y reformas en Barcelona. Pulsa en cualquiera para ver cómo se vería tu web:',
        {
          showNicheDemos: true,
          quickReplies: [
            { label: '💰 Ver tarifas de estas webs', action: 'ver_tarifas_cards' },
            { label: '📅 Agendar llamada 15 min', action: 'agendar_cita' },
            { label: '💬 Hablar por WhatsApp', action: 'ir_whatsapp' }
          ]
        }
      );
      return;
    }

    if (action === 'iniciar_cotizador') {
      addRichConversation(
        'Quiero calcular el presupuesto estimado de mi página web',
        'Selecciona el tipo de proyecto para ver su desglose oficial en 1 clic:',
        {
          showEstimatorWizard: true,
          quickReplies: [
            { label: '1️⃣ Landing Page Express (250 €)', action: 'estimar_landing' },
            { label: '2️⃣ Web Corporativa Pro (550 €)', action: 'estimar_corporativa' },
            { label: '3️⃣ Tienda Online E-Commerce (950 €)', action: 'estimar_tienda' },
            { label: '4️⃣ Desarrollo a Medida (1.200 €)', action: 'estimar_medida' }
          ]
        }
      );
      return;
    }

    if (action === 'estimar_landing') {
      const waUrl = `https://wa.me/34608180231?text=${encodeURIComponent('Hola Yanis, he calculado mi presupuesto en el chat para una Landing Page Express de 250 € (entrega en 5 días). Quiero empezar.')}`;
      addRichConversation(
        'He seleccionado: Landing Page Express (250 €)',
        `🎯 **Resumen de tu proyecto:**\n\n• **Inversión cerrada:** 250 € (125 € al inicio + 125 € a la entrega)\n• **Plazo:** 5 días laborables\n• **Enfoque:** 100% optimizado para que los clientes te escriban por WhatsApp desde el móvil\n• **Incluye:** Diseño responsive, botón WhatsApp, SEO técnico básico y 2 rondas de revisiones.\n\n¿Quieres que la empecemos esta misma semana?`,
        {
          quickReplies: [
            { label: '📲 Iniciar proyecto por WhatsApp', action: `direct_wa:${waUrl}` },
            { label: '📅 Agendar llamada previa de 15 min', action: 'agendar_cita' },
            { label: '💰 Ver otros planes', action: 'ver_tarifas_cards' }
          ]
        }
      );
      return;
    }

    if (action === 'estimar_corporativa') {
      const waUrl = `https://wa.me/34608180231?text=${encodeURIComponent('Hola Yanis, he calculado mi presupuesto en el chat para una Web Corporativa Pro de 550 € (hasta 5 páginas). Quiero más información.')}`;
      addRichConversation(
        'He seleccionado: Web Corporativa Pro (550 €)',
        `🏢 **Resumen de tu proyecto:**\n\n• **Inversión cerrada:** 550 € (275 € al inicio + 275 € a la entrega)\n• **Plazo:** 10 días laborables\n• **Alcance:** Hasta 5 páginas completas (Inicio, Servicios, Sobre mí, Casos de éxito y Contacto)\n• **Incluye:** Formulario de presupuesto validado, galería interactiva con filtros, integración con Google Maps y 30 días de soporte post-entrega.`,
        {
          quickReplies: [
            { label: '📲 Solicitar propuesta por WhatsApp', action: `direct_wa:${waUrl}` },
            { label: '📅 Agendar llamada 15 min', action: 'agendar_cita' }
          ]
        }
      );
      return;
    }

    if (action === 'estimar_tienda') {
      const waUrl = `https://wa.me/34608180231?text=${encodeURIComponent('Hola Yanis, quiero abrir una Tienda Online (950 €). Me gustaría agendar una llamada o comentarlo por WhatsApp.')}`;
      addRichConversation(
        'He seleccionado: Tienda Online E-Commerce (950 €)',
        `🛒 **Resumen de tu proyecto:**\n\n• **Inversión cerrada:** 950 € (475 € al inicio + 475 € a la entrega)\n• **Plazo:** 18 días laborables\n• **Alcance:** Catálogo completo de productos con filtros, pasarela Bizum/Tarjetas/Stripe, panel autogestionable sencillo y formación en vídeo.`,
        {
          quickReplies: [
            { label: '📲 Hablar con Yanis por WhatsApp', action: `direct_wa:${waUrl}` },
            { label: '📅 Agendar llamada 15 min', action: 'agendar_cita' }
          ]
        }
      );
      return;
    }

    if (action === 'estimar_medida') {
      const waUrl = `https://wa.me/34608180231?text=${encodeURIComponent('Hola Yanis, tengo un proyecto que requiere Desarrollo a Medida (1.200 €). Me gustaría explicarte los requerimientos.')}`;
      addRichConversation(
        'He seleccionado: Desarrollo a Medida (1.200 €)',
        `⚙️ **Desarrollo a Medida (1.200 €):**\n\nIdeal para proyectos con requerimientos especiales, integraciones personalizadas o plataformas con flujos avanzados. Siempre con alcance cerrado y pago 50% al empezar y 50% a la entrega.`,
        {
          quickReplies: [
            { label: '📲 Explicar mi proyecto por WhatsApp', action: `direct_wa:${waUrl}` },
            { label: '📅 Agendar llamada técnica 15 min', action: 'agendar_cita' }
          ]
        }
      );
      return;
    }

    if (action === 'agendar_cita') {
      setShowAppointmentForm(true);
      addRichConversation(
        'Quiero agendar una llamada de 15 minutos sin compromiso',
        '¡Genial! Deja tus datos en el formulario a continuación y te contactaremos en menos de 24 horas para confirmar la hora:'
      );
      return;
    }

    // Redirecciones directas a demos interactivas de nichos
    if (action === 'demo_reformistas') {
      window.location.hash = '#demo-reformistas';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (action === 'demo_electricistas') {
      window.location.hash = '#demo-electricistas';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (action === 'demo_pintores') {
      window.location.hash = '#demo-pintores';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (action === 'demo_fontaneros') {
      window.location.hash = '#demo-fontaneros';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Consultas predefinidas estándar
    let queryText = 'tarifas y precios';
    if (action === 'faq_plazos') queryText = 'cuanto tardas en entregar la web';
    else if (action === 'faq_landing') queryText = 'landing page express 250';
    else if (action === 'faq_corporativa') queryText = 'web corporativa 550';
    else if (action === 'faq_rgpd') queryText = 'cumplimiento rgpd y privacidad';
    else queryText = action;

    const botResponse = getChatBotResponse(queryText);
    if (botResponse.triggerAppointment) {
      setShowAppointmentForm(true);
    }
    addRichConversation(
      action === 'faq_plazos' ? '¿Cuánto tardas en entregar la web?' :
      action === 'faq_landing' ? '¿Qué incluye la Landing de 250 €?' :
      action === 'faq_corporativa' ? '¿Qué incluye la Web Corporativa de 550 €?' :
      action === 'faq_rgpd' ? '¿Cómo se garantiza el cumplimiento del RGPD?' : action,
      botResponse.text,
      { quickReplies: botResponse.quickReplies }
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const query = inputMessage.trim();
    setInputMessage('');
    if (soundEnabled) playSoftChime();

    // Consultar la base de conocimiento oficial
    const botResponse = getChatBotResponse(query);
    if (botResponse.triggerAppointment) {
      setShowAppointmentForm(true);
    }

    addRichConversation(query, botResponse.text, { quickReplies: botResponse.quickReplies });
  };

  const addRichConversation = (
    userText: string, 
    botReply: string, 
    extras?: { 
      quickReplies?: { label: string; action: string }[];
      showPricingCards?: boolean;
      showNicheDemos?: boolean;
      showEstimatorWizard?: boolean;
    }
  ) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: 'Ahora'
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: 'Ahora',
        quickReplies: extras?.quickReplies,
        showPricingCards: extras?.showPricingCards,
        showNicheDemos: extras?.showNicheDemos,
        showEstimatorWizard: extras?.showEstimatorWizard
      };
      setMessages(prev => [...prev, botMsg]);
      if (soundEnabled) playSoftChime();
    }, 450);
  };

  const handleApptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apptName || !apptPhone) return;

    setShowAppointmentForm(false);

    const confirmationText = `✅ ¡Solicitud recibida correctamente!\n\n• **Nombre:** ${apptName}\n• **Teléfono / WhatsApp:** ${apptPhone}\n• **Servicio:** ${apptService}\n• **Horario preferido:** ${apptDate || 'Lo antes posible'}\n\nYanis revisará tu solicitud y te contactará en menos de 24 horas laborables para confirmar la llamada de 15 minutos.`;

    const apptDetailsMsg = `Hola Yanis, he solicitado una llamada desde el chat de Creador-Webs:\n• Nombre: ${apptName}\n• Teléfono: ${apptPhone}\n• Servicio: ${apptService}\n• Preferencia: ${apptDate || 'Lo antes posible'}`;
    const directWhatsappUrl = `https://wa.me/34608180231?text=${encodeURIComponent(apptDetailsMsg)}`;

    const botMsg: Message = {
      id: `bot-appt-${Date.now()}`,
      sender: 'bot',
      text: confirmationText,
      timestamp: 'Ahora',
      isAppointmentCard: true,
      quickReplies: [
        { label: '💬 Enviar datos directamente a WhatsApp', action: `direct_wa:${directWhatsappUrl}` },
        { label: '💰 Ver tarifas de nuevo', action: 'ver_tarifas_cards' },
        { label: '🔨 Ver demos para reformas', action: 'ver_demos_nichos' }
      ]
    };

    setMessages(prev => [...prev, botMsg]);
    setApptName('');
    setApptPhone('');
    setApptDate('');
  };

  // Datos oficiales de las tarjetas de precios dentro del chat
  const pricingCardsData: PricingItem[] = [
    {
      id: 'landing',
      name: 'Landing Page Express',
      price: 250,
      delivery: '5 días',
      payment: '50% inicio (125€) + 50% entrega (125€)',
      popular: true,
      highlight: 'La más demandada para reformas y oficios',
      includes: [
        'Diseño 100% móvil y responsive',
        'Botón directo a tu WhatsApp',
        'Velocidad de carga < 1s',
        'SEO técnico básico en Google',
        '2 rondas de revisiones'
      ],
      waMessage: 'Hola Yanis, me interesa la Landing Page Express de 250 € (5 días). Quiero consultar disponibilidad.'
    },
    {
      id: 'corporativa',
      name: 'Web Corporativa Pro',
      price: 550,
      delivery: '10 días',
      payment: '50% inicio (275€) + 50% entrega (275€)',
      highlight: 'Hasta 5 páginas completas para pymes',
      includes: [
        'Hasta 5 páginas completas',
        'Formulario de contacto validado',
        'Galería interactiva con filtros',
        'Google Maps y redes sociales',
        '30 días de soporte post-entrega'
      ],
      waMessage: 'Hola Yanis, me interesa la Web Corporativa Pro de 550 € (hasta 5 páginas). ¿Podemos hablar?'
    },
    {
      id: 'ecommerce',
      name: 'Tienda Online E-Commerce',
      price: 950,
      delivery: '18 días',
      payment: '50% inicio (475€) + 50% entrega (475€)',
      highlight: 'Venta 24/7 de productos con pasarela',
      includes: [
        'Catálogo autogestionable de productos',
        'Pasarela segura Bizum/Stripe/Tarjetas',
        'Recuperación de carritos y envíos',
        'Formación en vídeo personalizada'
      ],
      waMessage: 'Hola Yanis, quiero abrir una Tienda Online de 950 €. Me gustaría comentar los detalles.'
    }
  ];

  return (
    <>
      {/* Botón flotante VIP con la foto de Yanis HP */}
      {standaloneToggle && !isWidgetOpen && (
        <aside 
          aria-label="Asistente de diseño web con Yanis HP"
          className="fixed bottom-24 sm:bottom-28 right-5 z-50 flex items-center group select-none pointer-events-auto"
        >
          {/* Tag flotante con presencia humana */}
          <div 
            onClick={handleOpen}
            className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-[#031d2c]/95 border border-teal-400/40 text-white text-xs font-bold shadow-xl shadow-teal-950/40 cursor-pointer hover:border-teal-300 transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-slate-200">
              ¿Dudas con tu web? <strong className="text-teal-300 font-extrabold">Pregúntale a Yanis</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            aria-label="Abrir asistente de diseño web con Yanis HP"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#062b40] via-[#083852] to-teal-500 p-0.5 shadow-[0_10px_25px_rgba(20,184,166,0.45)] hover:shadow-[0_14px_30px_rgba(20,184,166,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer ring-2 ring-teal-400/60"
          >
            {/* Foto real de Yanis HP como avatar */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#031d2c]">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt="Yanis HP - Diseñador Web"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Badge de estado en línea */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#031d2c]"></span>
            </span>
          </button>
        </aside>
      )}

      {/* Ventana flotante de Chat VIP de Creador-Webs */}
      {isWidgetOpen && (
        <div className="fixed inset-x-2 bottom-2 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[440px] max-h-[88vh] h-[640px] z-50 flex flex-col bg-[#031d2c] border border-teal-500/40 rounded-3xl shadow-2xl shadow-cyan-950/80 overflow-hidden font-sans text-white animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Cabecera del chat con foto de Yanis HP y verificación oficial */}
          <div className="bg-gradient-to-r from-[#031d2c] via-[#062b40] to-[#083852] p-4 border-b border-teal-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-teal-400 shadow-md shrink-0 bg-[#021622]">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Yanis HP"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#031d2c]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-white">Yanis HP</h3>
                  <BadgeCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Creador-Webs
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <p className="text-[11px] text-slate-300 font-medium truncate">
                    Freelance Barcelona · En línea ahora
                  </p>
                </div>
              </div>
            </div>

            {/* Controles de cabecera */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
                aria-label="Silenciar o activar sonido"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir chat en WhatsApp"
                aria-label="Abrir WhatsApp directo"
                className="w-8 h-8 rounded-full bg-emerald-950/80 hover:bg-emerald-800/80 text-emerald-400 hover:text-white border border-emerald-500/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Cerrar ventana de chat"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Micro-banner de garantía y transparencia */}
          <div className="bg-[#021826] border-b border-teal-500/20 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-teal-300/90 shrink-0">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Precio cerrado · 50% al inicio y 50% a la entrega</span>
            </div>
            <span className="text-[10px] text-slate-400">Sin comerciales</span>
          </div>

          {/* Área principal de mensajes */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-4 bg-[#021622]/95 text-xs">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Burbuja del mensaje */}
                <div
                  className={`max-w-[92%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line text-xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-[#031d2c] font-medium rounded-br-none shadow-md'
                      : msg.isAppointmentCard
                      ? 'bg-emerald-950/90 text-emerald-100 border border-emerald-500/40 rounded-bl-none shadow-lg'
                      : 'bg-[#062b40]/90 text-slate-100 border border-slate-700/80 rounded-bl-none shadow'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Tarjetas interactivas de precios integradas dentro del chat */}
                {msg.showPricingCards && (
                  <div className="w-full mt-3 space-y-2.5">
                    {pricingCardsData.map((plan) => {
                      const waUrl = `https://wa.me/34608180231?text=${encodeURIComponent(plan.waMessage)}`;
                      return (
                        <div 
                          key={plan.id}
                          className="p-3.5 rounded-2xl bg-[#031d2c] border border-teal-500/40 hover:border-teal-300 transition-all shadow-md group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-extrabold text-white group-hover:text-teal-300 transition-colors">
                              {plan.name}
                            </span>
                            <span className="text-sm font-black text-teal-400">
                              {plan.price} €
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[10px] text-slate-300 mb-2 font-medium">
                            <span className="px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300">
                              ⏱️ {plan.delivery}
                            </span>
                            <span className="text-slate-400">
                              {plan.payment}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-300 mb-2.5">
                            {plan.highlight}
                          </p>

                          <div className="space-y-1 mb-3 pt-2 border-t border-slate-700/60">
                            {plan.includes.map((inc, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                                <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                                <span>{inc}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-[11px] text-center flex items-center justify-center gap-1.5 shadow transition-all"
                            >
                              <Phone className="w-3 h-3" />
                              <span>Pedir este plan por WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-3 rounded-xl bg-[#062b40]/80 border border-slate-700 text-[11px] text-slate-300 flex items-center justify-between">
                      <div>
                        <strong className="text-white block font-bold">Mantenimiento Web Profesional</strong>
                        <span className="text-slate-400 text-[10px]">Copias, seguridad y actualizaciones · Sin permanencia</span>
                      </div>
                      <span className="font-extrabold text-teal-300 shrink-0">+100€/mes</span>
                    </div>
                  </div>
                )}

                {/* Tarjetas interactivas de demos para reformas y oficios */}
                {msg.showNicheDemos && (
                  <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickAction('demo_reformistas')}
                      className="p-3 rounded-2xl bg-[#031d2c] border border-teal-500/40 hover:border-teal-300 hover:bg-[#062b40] text-left transition-all cursor-pointer group shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Hammer className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span className="font-black text-xs text-white">Reformistas</span>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-snug">
                        Web con fotos antes/después de reformas integrales y presupuesto por WhatsApp.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-300 mt-2">
                        Abrir Demo <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAction('demo_electricistas')}
                      className="p-3 rounded-2xl bg-[#031d2c] border border-teal-500/40 hover:border-teal-300 hover:bg-[#062b40] text-left transition-all cursor-pointer group shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span className="font-black text-xs text-white">Electricistas</span>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-snug">
                        Averías urgentes 24h, boletines y llamada rápida con botón flotante.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-300 mt-2">
                        Abrir Demo <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAction('demo_pintores')}
                      className="p-3 rounded-2xl bg-[#031d2c] border border-teal-500/40 hover:border-teal-300 hover:bg-[#062b40] text-left transition-all cursor-pointer group shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Paintbrush className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span className="font-black text-xs text-white">Pintores</span>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-snug">
                        Catálogo visual de acabados, alisado y presupuesto por m² en 2 clics.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-300 mt-2">
                        Abrir Demo <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAction('demo_fontaneros')}
                      className="p-3 rounded-2xl bg-[#031d2c] border border-teal-500/40 hover:border-teal-300 hover:bg-[#062b40] text-left transition-all cursor-pointer group shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Wrench className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                        <span className="font-black text-xs text-white">Fontaneros</span>
                      </div>
                      <p className="text-[10px] text-slate-300 leading-snug">
                        Desatascos urgentes, fugas y presupuestos claros sin rodeos.
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-300 mt-2">
                        Abrir Demo <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                )}

                {/* Pie de mensaje con hora y checks de lectura */}
                <div className="flex items-center gap-1 mt-1 px-1">
                  <span className="text-[10px] text-slate-400">
                    {msg.timestamp}
                  </span>
                  {msg.sender === 'bot' && (
                    <CheckCheck className="w-3.5 h-3.5 text-teal-400/80 inline" />
                  )}
                </div>

                {/* Botones de respuesta rápida */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[98%]">
                    {msg.quickReplies.map((reply, rIdx) => (
                      <button
                        key={rIdx}
                        type="button"
                        onClick={() => handleQuickAction(reply.action)}
                        className="text-[11px] font-bold px-3 py-1.5 rounded-xl bg-[#062b40] hover:bg-teal-500 hover:text-[#031d2c] text-teal-300 border border-teal-500/30 hover:border-teal-400 transition-all cursor-pointer shadow-sm text-left flex items-center gap-1.5"
                      >
                        <span>{reply.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Animación de escribiendo con avatar de Yanis */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 animate-in fade-in duration-150">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-teal-400/40 bg-[#031d2c] shrink-0">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Yanis"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="bg-[#062b40] border border-slate-700/80 rounded-2xl rounded-bl-none px-3.5 py-2 flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.15s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.3s]"></span>
                </div>
              </div>
            )}

            {/* Formulario integrado de solicitud de llamada de 15 minutos */}
            {showAppointmentForm && (
              <div className="p-4 rounded-2xl bg-[#062b40] border border-teal-500/50 shadow-xl space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <h4 className="text-xs font-black text-white">Agendar llamada de 15 min con Yanis</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAppointmentForm(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <form onSubmit={handleApptSubmit} className="space-y-2.5">
                  <div>
                    <label className="text-[10px] font-bold text-slate-300 block mb-0.5">
                      Tu nombre o nombre de empresa:
                    </label>
                    <input
                      type="text"
                      required
                      value={apptName}
                      onChange={(e) => setApptName(e.target.value)}
                      placeholder="Ej. Juan de Reformas Barcelona"
                      className="w-full px-3 py-2 rounded-lg bg-[#031d2c] border border-slate-600 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-300 block mb-0.5">
                      Teléfono o WhatsApp de contacto:
                    </label>
                    <input
                      type="tel"
                      required
                      value={apptPhone}
                      onChange={(e) => setApptPhone(e.target.value)}
                      placeholder="Ej. 608 000 000"
                      className="w-full px-3 py-2 rounded-lg bg-[#031d2c] border border-slate-600 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-300 block mb-0.5">
                      Proyecto o paquete de interés:
                    </label>
                    <select
                      value={apptService}
                      onChange={(e) => setApptService(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#031d2c] border border-slate-600 text-white text-xs focus:outline-none focus:border-teal-400"
                    >
                      <option value="Landing Page Express (250€)">Landing Page Express (250€ - 5 días)</option>
                      <option value="Web Corporativa Pro (550€)">Web Corporativa Pro (550€ - 10 días)</option>
                      <option value="Tienda Online (950€)">Tienda Online (950€ - 18 días)</option>
                      <option value="Desarrollo a Medida (1.200€)">Desarrollo a Medida (1.200€)</option>
                      <option value="Mantenimiento Web (+100€/mes)">Mantenimiento Web (+100€/mes)</option>
                      <option value="Consulta General">Consulta General / Presupuesto</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-300 block mb-0.5">
                      Preferencia de horario (opcional):
                    </label>
                    <input
                      type="text"
                      value={apptDate}
                      onChange={(e) => setApptDate(e.target.value)}
                      placeholder="Ej. Mañana por la tarde / A partir de las 16h"
                      className="w-full px-3 py-2 rounded-lg bg-[#031d2c] border border-slate-600 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-black text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Confirmar solicitud de llamada</span>
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de entrada de texto inferior */}
          <div className="p-3 bg-[#031d2c] border-t border-slate-700/80 shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu consulta o pide presupuesto..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#083852] border border-slate-700 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-teal-400"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                aria-label="Enviar mensaje"
                className="w-10 h-10 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 disabled:hover:bg-teal-500 text-[#031d2c] flex items-center justify-center transition-all cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4 fill-current" />
              </button>
            </form>

            <div className="flex items-center justify-between mt-2 pt-1 px-1 text-[10px] text-slate-400">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <Phone className="w-3 h-3" />
                <span>WhatsApp directo: {PERSONAL_INFO.phone}</span>
              </a>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-teal-400" />
                <span>100% RGPD Europeo</span>
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
