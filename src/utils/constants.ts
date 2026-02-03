export const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre',
  DASHBOARD: '/dashboard',
  DASHBOARD_COMPONENTS: '/dashboard/componentes',
  COMPARATOR: '/comparador',
} as const;

export const ODS_INFO = {
  7: {
    number: 7,
    title: 'Energia Limpa e Acessível',
    description:
      'Assegurar acesso confiável, sustentável, moderno e a preço acessível à energia para todos',
    color: '#ffc107',
    icon: '⚡',
  },
  13: {
    number: 13,
    title: 'Ação Contra a Mudança Global do Clima',
    description: 'Tomar medidas urgentes para combater a mudança climática e seus impactos',
    color: '#3f7e44',
    icon: '🌍',
  },
} as const;

export const VOLTAGES = ['1,5V', '3V', '5V', '12V', '19V', '24V'] as const;

export const CEA_INFO = {
  name: 'Centro de Educação Ambiental Mandembo',
  shortName: 'CEA Mandembo',
  location: 'Rio Manso/MG',
  area: '8 hectares (80.000 m²)',
  usedArea: '6% para atividades socioambientais',
  preservedArea: '94% dedicados à preservação ambiental e nascente',
  foundedYear: 2010,
  website: 'https://www.mandembo.org',
  ongWebsite: 'https://www.ongverde.org',
  casa12VoltsWebsite: 'https://casa12volts.com',
} as const;

export const THEME_COLORS = {
  primary: '#2d8b3c', 
  secondary: '#d85a28', 
  accent: '#ffc107', 
  blue: '#0066cc', 
  green: '#3f7e44', 
  white: '#ffffff',
  black: '#1a1a1a',
  gray: '#666666',
  lightGray: '#f9f9f9',
} as const;

export const CO2_PER_KWH = 0.24; 

export const ENERGY_RATE_MG = 0.85; 

export const SYSTEM_EFFICIENCY = {
  CONVENTIONAL: 0.75, 
  CASA12VOLTS: 0.92, 
} as const;

export const CONVERSION_LOSSES = {
  AC_TO_DC: 0.2, 
  DC_DIRECT: 0.08, 
} as const;
