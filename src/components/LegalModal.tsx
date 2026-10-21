import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'aviso' | 'privacidad' | 'cookies';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'aviso',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'aviso' | 'privacidad' | 'cookies'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#031d2c] rounded-3xl border border-teal-500/40 shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl font-bold text-white">Información Legal y Cumplimiento RGPD</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
            aria-label="Cerrar modal legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selector de pestañas */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('aviso')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'aviso'
                ? 'bg-teal-500 text-[#031d2c]'
                : 'bg-slate-800/80 text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Aviso Legal</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacidad'
                ? 'bg-teal-500 text-[#031d2c]'
                : 'bg-slate-800/80 text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Política de Privacidad</span>
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cookies'
                ? 'bg-teal-500 text-[#031d2c]'
                : 'bg-slate-800/80 text-slate-300 hover:text-white'
            }`}
          >
            <Cookie className="w-4 h-4" />
            <span>Política de Cookies</span>
          </button>
        </div>

        {/* Cuerpo con scroll */}
        <div className="overflow-y-auto pr-2 py-4 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {activeTab === 'aviso' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">1. Datos Identificativos del Titular</h4>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del responsable del sitio web:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Nombre comercial:</strong> {PERSONAL_INFO.brandName} (Yanis HP)</li>
                <li><strong>Titular responsable:</strong> [DATOS DEL TITULAR]</li>
                <li><strong>NIF / CIF:</strong> [DATOS DEL TITULAR]</li>
                <li><strong>Domicilio:</strong> Barcelona, España</li>
                <li><strong>Teléfono de contacto:</strong> +34 {PERSONAL_INFO.phone}</li>
                <li><strong>Sitio Web:</strong> {PERSONAL_INFO.websiteUrl}</li>
              </ul>

              <h4 className="text-base font-bold text-white">2. Propiedad Intelectual e Industrial</h4>
              <p>
                Todos los contenidos de este sitio web, incluyendo textos, diseños, código fuente, logotipos y elementos multimedia, están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción o distribución sin autorización previa.
              </p>

              <h4 className="text-base font-bold text-white">3. Condiciones de Uso</h4>
              <p>
                El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los servicios ofrecidos.
              </p>
            </div>
          )}

          {activeTab === 'privacidad' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Política de Privacidad y Protección de Datos (RGPD)</h4>
              <p>
                De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos sobre el tratamiento de sus datos personales:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Responsable del tratamiento:</strong> {PERSONAL_INFO.brandName} · [DATOS DEL TITULAR]</li>
                <li><strong>Finalidad:</strong> Atender consultas enviadas a través de formularios o WhatsApp, gestionar presupuestos de diseño web y coordinar proyectos contratados.</li>
                <li><strong>Legitimación:</strong> Consentimiento explícito del interesado al enviar la solicitud y aceptación de esta política.</li>
                <li><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal expresa o proveedores estrictamente necesarios para la prestación del servicio técnico.</li>
                <li><strong>Conservación:</strong> Los datos se conservarán durante el tiempo necesario para la finalidad con la que fueron recabados o según plazos legales exigibles.</li>
                <li><strong>Derechos:</strong> Tiene derecho a acceder, rectificar, suprimir, limitar u oponerse al tratamiento de sus datos contactando en el teléfono +34 {PERSONAL_INFO.phone}.</li>
              </ul>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Política de Cookies</h4>
              <p>
                Este sitio web utiliza cookies técnicas y analíticas para optimizar la experiencia de navegación y evaluar métricas anónimas de visita:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cookies técnicas:</strong> Esenciales para el correcto funcionamiento de la web, preferencias de sesión y seguridad.</li>
                <li><strong>Cookies analíticas (Google Analytics):</strong> Permiten medir de forma agregada el número de visitantes y la interacción de páginas para mejorar nuestro servicio. Se encuentran bloqueadas por defecto hasta su aceptación mediante el banner de consentimiento.</li>
              </ul>
              <p>
                El usuario puede en cualquier momento revocar su consentimiento o configurar su navegador para bloquear o eliminar las cookies instaladas.
              </p>
            </div>
          )}

        </div>

        {/* Pie del modal */}
        <div className="pt-4 border-t border-slate-700/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-[#031d2c] font-bold text-xs cursor-pointer"
          >
            Entendido y Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
