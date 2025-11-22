export const ENERGY_CONSTANTS = {
  // Custos médios (2025)
  ELECTRICITY_COST_PER_KWH: 0.85, // R$ por kWh (média Brasil)

  // Emissões
  CO2_PER_KWH: 0.24, // kg de CO2 por kWh (matriz elétrica brasileira)

  // Perdas de conversão
  CONVERSION_LOSS_AC: 0.15, // 15% perda em conversores AC/DC
  INVERTER_LOSS: 0.1, // 10% perda em inversores
  TRANSFORMER_LOSS: 0.05, // 5% perda em transformadores

  // Eficiência multivolts (Casa12V)
  MULTIVOLTS_EFFICIENCY: 0.92, // 92% eficiência (menos perdas)

  // Voltagens
  VOLTAGES: {
    MULTIVOLTS: ['1.5V', '5V', '12V', '19V', '24V'],
    CONVENTIONAL: ['110V', '220V'],
  },

  // Fatores de conversão
  DAYS_PER_MONTH: 30,
  MONTHS_PER_YEAR: 12,
} as const;

export const ODS_INFO = {
  7: {
    number: 7,
    title: 'Energia Limpa e Acessível',
    description:
      'Garantir acesso à energia confiável, sustentável, moderna e acessível para todos.',
    color: '#FCC30B',
    icon: '⚡',
  },
  13: {
    number: 13,
    title: 'Ação contra a Mudança Global do Clima',
    description: 'Tomar medidas urgentes para combater a mudança do clima e seus impactos.',
    color: '#3F7E44',
    icon: '🌍',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre',
  DASHBOARD: '/dashboard',
  DASHBOARD_COMPONENTS: '/dashboard/componentes',
  COMPARATOR: '/comparador',
  COMPARATOR_RESULTS: '/comparador/resultados',
} as const;

export const ARIA_LABELS = {
  // Navegação
  MAIN_NAV: 'Navegação principal',
  SKIP_LINK: 'Pular para o conteúdo principal',

  // Dashboard
  ENERGY_FLOW: 'Fluxo de energia da Casa12Volts®',
  METRICS: 'Métricas de sustentabilidade',
  COMPARISON: 'Comparação com sistemas convencionais',

  // Comparador
  APPLIANCE_SELECTOR: 'Seletor de aparelhos',
  RESULTS: 'Resultados da comparação',
  SAVINGS_CHART: 'Gráfico de economia',
} as const;

export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1440,
} as const;
