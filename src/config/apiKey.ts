/**
 * Configuración centralizada de API Keys
 * 
 * Lee directamente GEMINI_API_KEY tal como está configurado en Vercel y en .env
 */

export const API_CONFIG = {
  getGeminiApiKey: (): string => {
    if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
      return process.env.GEMINI_API_KEY;
    }
    return '';
  },

  hasApiKey: (): boolean => {
    const key = API_CONFIG.getGeminiApiKey();
    return Boolean(key && key.trim() !== '');
  }
};
