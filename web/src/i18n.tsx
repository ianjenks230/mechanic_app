import React, { createContext, useContext, useMemo, useState } from 'react';
import { storage } from './utils/storage';

const LANGUAGE_KEY = 'mm_language';

type Language = 'en' | 'es';

type Dictionary = typeof strings.en;

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Dictionary) => string;
};

const strings = {
  en: {
    home: 'Home',
    requests: 'My Requests',
    messages: 'Messages',
    profile: 'Profile',
    searchPlaceholder: 'Search by name or specialty',
    mechanicsNearYou: 'Mechanics near you',
    requestQuote: 'Request quote',
    requestCreated: 'Request created. Check My Requests for updates.',
    offlineBanner: 'Offline mode: showing cached mechanics and queueing requests.',
    vehicleType: 'Vehicle type',
    symptoms: 'Symptoms',
    address: 'Service address',
    notes: 'Notes for mechanic',
    submitRequest: 'Send request',
    cancel: 'Cancel',
    invoice: 'Invoice',
    downloadPdf: 'Download PDF',
    payDirectly: 'Pay mechanic directly. No in-app payments.',
    noRequests: 'No requests yet. Start from the Home screen.',
    noMessages: 'No messages yet. Updates will appear after you request a quote.',
    portfolio: 'Portfolio',
    certifications: 'Certifications',
    reviews: 'Reviews',
    requestFormTitle: 'Request a quote',
    queueOffline: 'Queued offline',
    support: 'Support',
    language: 'Language',
    mapPlaceholder: 'Service map',
    status: 'Status',
    loadingMechanics: 'Loading mechanics...',
    backToHome: 'Back to Home',
    backToRequests: 'Back to My Requests',
    advanceStatus: 'Advance status',
    total: 'Total',
    invoiceNotFound: 'Invoice not found.',
    mapHint: 'Tap a mechanic to request help in minutes.',
    mechanicNotFound: 'Mechanic not found.',
    messagesHintTitle: 'Mechanic updates will land here',
    messagesHintBody:
      'When you request a quote, you will see acceptance, arrival, and completion notifications in this inbox.',
    demoRider: 'Demo rider',
    demoProfileText: 'Early access profile for testing the marketplace experience.',
    savedLocations: '2 saved locations',
    instantQuotes: 'Instant quotes enabled',
    supportTitle: 'Support'
  },
  es: {
    home: 'Inicio',
    requests: 'Mis solicitudes',
    messages: 'Mensajes',
    profile: 'Perfil',
    searchPlaceholder: 'Buscar por nombre o especialidad',
    mechanicsNearYou: 'Mecanicos cerca de ti',
    requestQuote: 'Solicitar cotizacion',
    requestCreated: 'Solicitud creada. Revisa Mis solicitudes para ver actualizaciones.',
    offlineBanner: 'Modo sin conexion: mostrando mecanicos guardados y encolando solicitudes.',
    vehicleType: 'Tipo de vehiculo',
    symptoms: 'Sintomas',
    address: 'Direccion del servicio',
    notes: 'Notas para el mecanico',
    submitRequest: 'Enviar solicitud',
    cancel: 'Cancelar',
    invoice: 'Factura',
    downloadPdf: 'Descargar PDF',
    payDirectly: 'Paga directamente al mecanico. Sin pagos en la app.',
    noRequests: 'No hay solicitudes. Comienza en Inicio.',
    noMessages: 'Aun no hay mensajes. Las actualizaciones apareceran despues de solicitar.',
    portfolio: 'Portafolio',
    certifications: 'Certificaciones',
    reviews: 'Resenas',
    requestFormTitle: 'Solicitar cotizacion',
    queueOffline: 'En cola sin conexion',
    support: 'Soporte',
    language: 'Idioma',
    mapPlaceholder: 'Mapa de servicio',
    status: 'Estado',
    loadingMechanics: 'Cargando mecanicos...',
    backToHome: 'Volver a Inicio',
    backToRequests: 'Volver a Mis solicitudes',
    advanceStatus: 'Avanzar estado',
    total: 'Total',
    invoiceNotFound: 'Factura no encontrada.',
    mapHint: 'Toca un mecanico para pedir ayuda en minutos.',
    mechanicNotFound: 'Mecanico no encontrado.',
    messagesHintTitle: 'Las actualizaciones llegan aqui',
    messagesHintBody:
      'Cuando solicites una cotizacion, veras aceptacion, llegada y finalizacion en esta bandeja.',
    demoRider: 'Usuario demo',
    demoProfileText: 'Perfil de acceso temprano para probar la experiencia.',
    savedLocations: '2 ubicaciones guardadas',
    instantQuotes: 'Cotizaciones instantaneas activas',
    supportTitle: 'Soporte'
  }
};

const LanguageContext = createContext<I18nContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: (key) => key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const stored = storage.read<Language>(LANGUAGE_KEY, 'en');
  const [language, setLanguageState] = useState<Language>(stored);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    storage.write(LANGUAGE_KEY, next);
  };

  const t = useMemo(() => {
    return (key: keyof Dictionary) => strings[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}
