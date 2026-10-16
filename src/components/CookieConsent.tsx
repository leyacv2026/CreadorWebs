import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X, Lock, FileText, ChevronRight, Info } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'creadorwebs_cookie_consent_v1';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  // Preference states
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);

  useEffect(() => {
    // Check if consent has already been given
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Small delay so banner doesn't flash abruptly on initial load
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(stored) as CookiePreferences;
        const isGranted = parsed.analytics ?? true;
        setAnalyticsEnabled(isGranted);
        setPreferencesEnabled(parsed.preferences ?? true);
        updateGoogleConsent(isGranted);
      }
    } catch {
      setIsVisible(true);
    }

    // Listen for custom event to reopen preferences from Footer
    const handleReopen = () => {
      setShowConfigModal(true);
    };
    window.addEventListener('open-cookie-settings', handleReopen);
    return () => window.removeEventListener('open-cookie-settings', handleReopen);
  }, []);

  const updateGoogleConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
      });
    }
  };

  const saveConsent = (prefs: { analytics: boolean; preferences: boolean }) => {
    const consentData: CookiePreferences = {
      necessary: true,
      analytics: prefs.analytics,
      preferences: prefs.preferences,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    } catch (e) {
      console.warn('No se pudo guardar la configuración de cookies en localStorage', e);
    }

    updateGoogleConsent(prefs.analytics);
    setAnalyticsEnabled(prefs.analytics);
    setPreferencesEnabled(prefs.preferences);
    setIsVisible(false);
    setShowConfigModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, preferences: true });
  };

  const handleRejectNonEssential = () => {
    saveConsent({ analytics: false, preferences: false });
  };

  const handleSaveCustom = () => {
    saveConsent({ analytics: analyticsEnabled, preferences: preferencesEnabled });
  };

  return (
    <>
      {/* 1. Floating Cookie & Client Protection Banner */}
      {isVisible && !showConfigModal && !showPolicyModal && (
        <aside
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies y protección de datos"
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-6 duration-500"
        >
          <div className="bg-[#031d2c]/95 backdrop-blur-xl border border-teal-400/40 rounded-3xl p-5 md:p-6 shadow-2xl shadow-cyan-950/60 text-white relative overflow-hidden">
            {/* Ambient cyan glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-500/10 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
                <ShieldCheck className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-teal-300">
                    Protección &amp; Privacidad del Cliente
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 font-semibold">
                    RGPD / LOPD
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-0.5">
                  Tus datos y tu seguridad son nuestra prioridad
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              En <strong className="text-white">CreadorWebs</strong> protegemos la privacidad de tu negocio. Empleamos cookies técnicas esenciales para la seguridad del sitio y cookies opcionales para analizar el rendimiento y recordar tu presupuesto. Nunca vendemos ni compartimos tu información con terceros.
            </p>

            {/* Quick Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-teal-500/25 transition-all text-center cursor-pointer"
              >
                Aceptar todas
              </button>

              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors border border-slate-700 text-center cursor-pointer"
              >
                Solo necesarias
              </button>

              <button
                type="button"
                onClick={() => setShowConfigModal(true)}
                className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-teal-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer sm:ml-auto"
              >
                <Settings className="w-3.5 h-3.5 text-teal-400" />
                <span>Configurar</span>
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
              <span>Consentimiento 100% reversible</span>
              <button
                type="button"
                onClick={() => setShowPolicyModal(true)}
                className="text-teal-300 hover:underline inline-flex items-center gap-0.5 cursor-pointer"
              >
                <span>Leer Política de Protección</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Granular Configuration Modal */}
      {showConfigModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#031d2c] border border-teal-400/40 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-7 shadow-2xl text-white relative">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Configuración de Cookies
                  </h3>
                  <p className="text-xs text-slate-400">
                    Personaliza qué datos de navegación autorizas almacenar
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-6">
              
              {/* Category 1: Técnicas / Esenciales */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-400/20">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-bold text-white">
                      Cookies Técnicas &amp; Seguridad
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">
                    Obligatorias
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Garantizan la protección contra ataques CSRF/spam, mantienen la navegación estable y permiten que el cotizador funcione sin pérdida de datos en sesión.
                </p>
              </div>

              {/* Category 2: Rendimiento y Analítica */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-bold text-white">
                      Rendimiento y Métricas Anónimas
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-400"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nos ayudan a cuantificar visitas y optimizar los tiempos de carga en dispositivos móviles de forma totalmente anonimizada, sin identificar personas.
                </p>
              </div>

              {/* Category 3: Preferencias del Usuario */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-bold text-white">
                      Preferencias de Cotización
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferencesEnabled}
                      onChange={(e) => setPreferencesEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-400"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Permite recordar la moneda seleccionada (EUR o USD) y los complementos que hayas elegido en el simulador si decides volver más tarde.
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md shadow-teal-500/25 transition-all cursor-pointer"
              >
                Guardar preferencias
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 3. Comprehensive Client Data Protection & Privacy Policy Modal */}
      {showPolicyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#031d2c] border border-teal-400/40 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col p-6 md:p-8 shadow-2xl text-white relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-400/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Política de Protección de Datos de Clientes &amp; Cookies
                  </h3>
                  <span className="text-xs text-teal-300 font-medium">
                    Conforme al Reglamento General de Protección de Datos (RGPD) y LSSI-CE
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Policy Body */}
            <div className="overflow-y-auto pr-2 my-4 space-y-5 text-xs text-slate-300 leading-relaxed">
              
              <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 text-teal-100">
                <strong className="block text-sm text-teal-300 mb-1">
                  1. Compromiso de Privacidad y Confidencialidad
                </strong>
                En <strong className="text-white">CreadorWebs</strong> respetamos la intimidad de cada cliente y usuario. Toda la información enviada a través de formularios o presupuestos se utiliza exclusivamente para valorar tu encargo web y brindarte asesoramiento técnico directo.
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  2. Responsable del Tratamiento
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Identidad:</strong> CreadorWebs (Diseño Web &amp; Desarrollo).</li>
                  <li><strong>Ámbito de actividad:</strong> España y clientes internacionales.</li>
                  <li><strong>Canal de contacto de privacidad:</strong> Vía WhatsApp oficial o perfil verificado de LinkedIn.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  3. ¿Qué datos recopilamos y para qué?
                </h4>
                <p className="mb-2">
                  Solo recabamos los datos estrictamente necesarios que tú decides facilitarnos voluntariamente al configurar un presupuesto:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Nombre o Empresa:</strong> Para dirigirnos a ti con el trato profesional adecuado.</li>
                  <li><strong>Correo electrónico o Teléfono:</strong> Para responder a tu solicitud con la propuesta económica detallada.</li>
                  <li><strong>Notas del proyecto:</strong> Especificaciones técnicas y necesidades comerciales de tu futura web.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  4. Garantía de No Cesión de Datos
                </h4>
                <p>
                  <strong>Jamás vendemos, alquilamos ni cedemos tus datos a terceras empresas o anunciantes.</strong> No aplicamos técnicas de rastreo invasivo entre sitios web (*cross-site tracking*).
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  5. Seguridad y Pagos Seguros
                </h4>
                <p>
                  Toda la comunicación en este sitio web está protegida mediante cifrado SSL/HTTPS de alta seguridad. Los pagos correspondientes a los servicios se gestionan mediante contratos fraccionados protegidos (50% al pedir y 50% al entregar y validar) o pasarelas seguras (como Stripe o transferencia bancaria).
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  6. Tus Derechos (Acceso, Rectificación y Supresión)
                </h4>
                <p>
                  Conforme a la normativa europea de protección de datos, tienes derecho en cualquier momento a solicitar el borrado completo de tus datos de contacto de nuestros registros escribiéndonos por nuestros canales oficiales.
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
              <span className="text-[11px] text-slate-400">
                Última revisión: Octubre 2026
              </span>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
