/**
 * Constantes globais da aplicação
 */

// Rotas da aplicação
export const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre',
  DASHBOARD: '/dashboard',
  DASHBOARD_COMPONENTS: '/dashboard/componentes',
  COMPARATOR: '/comparador',
} as const;

// Informações dos ODS
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

// Voltagens suportadas pela Casa12Volts®
export const VOLTAGES = ['1,5V', '3V', '5V', '12V', '19V', '24V'] as const;

// Informações do CEA Mandembo
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

// Cores do tema (baseado na identidade visual)
export const THEME_COLORS = {
  primary: '#2d8b3c', // Verde principal
  secondary: '#d85a28', // Laranja/Terracota
  accent: '#ffc107', // Amarelo (ODS 7)
  blue: '#0066cc', // Azul tecnologia
  green: '#3f7e44', // Verde escuro (ODS 13)
  white: '#ffffff',
  black: '#1a1a1a',
  gray: '#666666',
  lightGray: '#f9f9f9',
} as const;

// Taxa de conversão de CO₂ (kg CO₂ por kWh) - Média Brasil
export const CO2_PER_KWH = 0.24; // kg

// Tarifa média de energia elétrica em MG (CEMIG) - R$/kWh
export const ENERGY_RATE_MG = 0.85; // R$ por kWh (valor aproximado 2025)

// Eficiência dos sistemas
export const SYSTEM_EFFICIENCY = {
  CONVENTIONAL: 0.75, // 75-80% (sistemas AC convencionais)
  CASA12VOLTS: 0.92, // 92% (sistema multivolts CC)
} as const;

// Perdas de conversão
export const CONVERSION_LOSSES = {
  AC_TO_DC: 0.2, // 20% de perda média em conversores AC/DC
  DC_DIRECT: 0.08, // 8% de perda no sistema direto CC
} as const;
