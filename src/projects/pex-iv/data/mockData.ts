import type {
  DashboardData,
  EnergySource,
  SystemComponent,
  SustainabilityMetric,
  ComparisonData,
  EnergyHistory,
  ConsumptionCategory,
  FAQ,
} from '@/types/pex-iv.types';
import { generateId } from '@/utils/helpers';

/**
 * Fontes de energia da Casa12Volts®
 */
export const energySources: EnergySource[] = [
  {
    id: generateId(),
    name: 'Energia Solar Fotovoltaica',
    type: 'solar',
    currentGeneration: 3.8, // kWh atual
    capacity: 5.2, // kWh capacidade máxima
    efficiency: 92, // % eficiência
    icon: '☀️',
    description:
      'Painéis solares fotovoltaicos captam a luz solar e convertem diretamente em eletricidade em corrente contínua, sem necessidade de conversores.',
    createdAt: new Date('2012-01-01'),
  },
  {
    id: generateId(),
    name: 'Energia Eólica',
    type: 'eolica',
    currentGeneration: 1.2, // kWh atual
    capacity: 2.5, // kWh capacidade máxima
    efficiency: 85, // % eficiência
    icon: '💨',
    description:
      'Turbina eólica de eixo vertical aproveita o vento da região para gerar energia limpa e complementar o sistema solar.',
    createdAt: new Date('2012-01-01'),
  },
  {
    id: generateId(),
    name: 'Energia por Esforço Físico (Pedal Sustentável)',
    type: 'bicicleta',
    currentGeneration: 0.15, // kWh atual
    capacity: 0.3, // kWh capacidade máxima
    efficiency: 75, // % eficiência
    icon: '🚴',
    description:
      'Bicicleta ergométrica localizada no espaço "Pedal Sustentável" converte o esforço físico humano em energia elétrica, demonstrando a relação direta entre trabalho e energia.',
    createdAt: new Date('2012-01-01'),
  },
];

/**
 * Componentes do sistema Casa12Volts®
 */
export const systemComponents: SystemComponent[] = [
  // GERAÇÃO
  {
    id: generateId(),
    name: 'Painéis Solares Fotovoltaicos',
    description:
      'Módulos fotovoltaicos policristalinos de alta eficiência instalados no telhado da Casa12Volts®.',
    voltage: '12V CC',
    category: 'geracao',
    image: {
      url: '/assets/components/paineis-solares.jpg',
      alt: 'Painéis solares instalados no telhado',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '1200W',
      capacity: '5.2 kWh/dia',
      lifespan: '25 anos',
      efficiency: '92%',
    },
  },
  {
    id: generateId(),
    name: 'Turbina Eólica de Eixo Vertical',
    description:
      'Gerador eólico de eixo vertical, ideal para ventos variáveis e baixas velocidades da região.',
    voltage: '12V CC',
    category: 'geracao',
    image: {
      url: '/assets/components/turbina-eolica.jpg',
      alt: 'Turbina eólica vertical',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '500W',
      capacity: '2.5 kWh/dia',
      lifespan: '15 anos',
      efficiency: '85%',
    },
  },
  {
    id: generateId(),
    name: 'Bicicleta Geradora - Pedal Sustentável',
    description:
      'Bicicleta ergométrica adaptada com gerador elétrico instalada no espaço "Pedal Sustentável", demonstrando a conversão de energia mecânica em elétrica.',
    voltage: '12V CC',
    category: 'geracao',
    image: {
      url: '/assets/components/bicicleta-geradora.jpg',
      alt: 'Bicicleta geradora de energia no Pedal Sustentável',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '100W',
      capacity: '0.3 kWh (30 min de pedalada)',
      lifespan: '10 anos',
      efficiency: '75%',
    },
  },

  // ARMAZENAMENTO
  {
    id: generateId(),
    name: 'Banco de Baterias Estacionárias (12V/24V)',
    description:
      'Quatro baterias estacionárias de 12V (220 Ah cada) que podem operar em série ou paralelo, totalizando capacidade de armazenamento de 12V/24V para autonomia energética.',
    voltage: '12V/24V CC',
    category: 'armazenamento',
    image: {
      url: '/assets/components/baterias.jpg',
      alt: 'Banco de baterias estacionárias 12V/24V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      capacity: '4x 220 Ah (10.56 kWh total)',
      lifespan: '5-8 anos',
    },
  },

  // CONTROLE E MEDIÇÃO
  {
    id: generateId(),
    name: 'Controladores de Carga Solar MPPT (3 unidades)',
    description:
      'Três reguladores de carga MPPT que otimizam a captação de energia dos painéis solares e protegem as baterias.',
    voltage: '12V/24V CC',
    category: 'outro',
    image: {
      url: '/assets/components/controlador-solar.jpg',
      alt: 'Controladores de carga solar',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '60A MPPT (3 unidades)',
      efficiency: '98%',
    },
  },
  {
    id: generateId(),
    name: 'Controlador de Carga Eólico',
    description: 'Controlador específico para gerenciamento da energia gerada pela turbina eólica.',
    voltage: '12V/24V CC',
    category: 'outro',
    image: {
      url: '/assets/components/controlador-eolico.jpg',
      alt: 'Controlador de carga eólico',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '30A',
      efficiency: '95%',
    },
  },
  {
    id: generateId(),
    name: 'Painel de Medição Multivolts (12V/24V)',
    description:
      'Instrumento digital de medição que monitora corrente, tensão e potência das duas bases de voltagem da Casa12Volts® (12V e 24V).',
    voltage: '12V/24V CC',
    category: 'outro',
    image: {
      url: '/assets/components/painel-medicao.jpg',
      alt: 'Painel de medição de corrente, tensão e potência',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      accuracy: '±1%',
      display: 'LCD digital colorido',
    },
  },

  // CONSUMO - ILUMINAÇÃO
  {
    id: generateId(),
    name: 'Lâmpadas LED 12V',
    description:
      'Iluminação LED de alta eficiência operando diretamente em 12V CC, sem necessidade de conversores.',
    voltage: '12V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/lampadas-led.jpg',
      alt: 'Lâmpadas LED 12V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '5-9W por lâmpada',
      lifespan: '50.000 horas',
      efficiency: '95%',
    },
  },

  // CONSUMO - ELETRODOMÉSTICOS
  {
    id: generateId(),
    name: 'Geladeira Bivolt 12V/24V Elber',
    description:
      'Refrigerador compacto da empresa Elber (Santa Catarina) desenvolvido para funcionar diretamente em 12V/24V CC, com alta eficiência energética.',
    voltage: '12V/24V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/geladeira-12v.jpg',
      alt: 'Geladeira bivolt 12V/24V Elber',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '60W',
      capacity: '70 litros',
      efficiency: '90%',
    },
  },
  {
    id: generateId(),
    name: 'Liquidificador 12V (importado USA)',
    description:
      'Liquidificador profissional de 12V importado dos Estados Unidos, adaptado para uso em corrente contínua.',
    voltage: '12V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/liquidificador-12v.jpg',
      alt: 'Liquidificador 12V importado',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '300W',
      capacity: '1,5 litros',
    },
  },

  // CONSUMO - ELETRÔNICOS
  {
    id: generateId(),
    name: 'TV LED 32" 12V',
    description:
      'Televisor LED operando em 12V CC, eliminando perdas de conversão da fonte interna.',
    voltage: '12V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/tv-led-12v.jpg',
      alt: 'TV LED 32" 12V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '55W',
      lifespan: '60.000 horas',
    },
  },
  {
    id: generateId(),
    name: 'Computador All-in-One 19V',
    description:
      'Computador all-in-one operando em 19V CC, alimentado diretamente pelo sistema multivolts.',
    voltage: '19V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/computador-19v.jpg',
      alt: 'Computador all-in-one 19V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '65W',
    },
  },
  {
    id: generateId(),
    name: 'Modem Satélite e Amplificador 12V',
    description:
      'Equipamento de recepção de internet via satélite operando em 12V, com amplificador de sinal integrado.',
    voltage: '12V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/modem-satelite.jpg',
      alt: 'Modem satélite e amplificador 12V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '12W',
    },
  },
  {
    id: generateId(),
    name: 'Rádio 5V (adaptado)',
    description:
      'Rádio portátil que antes utilizava três pilhas e foi adaptado para operar com energia renovável em 5V CC.',
    voltage: '5V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/radio-5v.jpg',
      alt: 'Rádio 5V adaptado',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '3W',
    },
  },
  {
    id: generateId(),
    name: 'Relógio de Parede 1,5V (adaptado)',
    description:
      'Relógio de parede que antes utilizava uma pilha AA e foi adaptado para energia renovável em 1,5V CC.',
    voltage: '1,5V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/relogio-1-5v.jpg',
      alt: 'Relógio de parede 1,5V adaptado',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '0,5W',
    },
  },

  // CONSUMO - INSTRUMENTAÇÃO
  {
    id: generateId(),
    name: 'Balança Digital 3V (adaptada)',
    description:
      'Balança digital de cozinha que antes usava 2 pilhas e foi adaptada para operar com energia renovável em 3V CC.',
    voltage: '3V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/balanca-3v.jpg',
      alt: 'Balança digital 3V adaptada',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      capacity: '10kg',
      power: '2W',
    },
  },
  {
    id: generateId(),
    name: 'Mini Estação Meteorológica 5V',
    description:
      'Estação meteorológica compacta com sensores de temperatura, umidade e previsão do tempo, operando em 5V CC.',
    voltage: '5V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/estacao-meteorologica.jpg',
      alt: 'Mini estação meteorológica 5V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '2,5W',
    },
  },
  {
    id: generateId(),
    name: 'Pluviômetro',
    description:
      'Instrumento de medição de precipitação pluviométrica (chuva) que auxilia no monitoramento climático e planejamento de atividades agroecológicas.',
    voltage: 'N/A (mecânico)',
    category: 'outro',
    image: {
      url: '/assets/components/pluviometro.jpg',
      alt: 'Pluviômetro para medição de chuvas',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      capacity: 'Até 500mm',
    },
  },

  // DISTRIBUIÇÃO
  {
    id: generateId(),
    name: 'Tomadas Multivolts com USB',
    description:
      'Sistema de distribuição com múltiplas saídas: 1,5V, 3V, 5V, 12V, 19V e 24V em corrente contínua, incluindo tomadas USB nos cômodos.',
    voltage: 'Múltiplas (1,5V - 24V CC)',
    category: 'consumo',
    image: {
      url: '/assets/components/tomadas-multivolts.jpg',
      alt: 'Tomadas de múltiplas voltagens com USB',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: 'Até 1500W total',
    },
  },

  // AQUECIMENTO SOLAR
  {
    id: generateId(),
    name: 'Aquecedor Solar à Vácuo (CEFET-BH)',
    description:
      'Sistema de aquecimento solar desenvolvido em parceria com o CEFET-BH, onde a água atinge aproximadamente 110°C e ferve, tornando-se água esterilizada.',
    voltage: 'N/A (térmica)',
    category: 'outro',
    image: {
      url: '/assets/components/aquecedor-solar.jpg',
      alt: 'Aquecedor solar à vácuo',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      capacity: '200 litros',
      lifespan: '20 anos',
    },
  },

  // INFRAESTRUTURA INTERNET
  {
    id: generateId(),
    name: 'Estação de Recepção de Internet Solar',
    description:
      'Estação alimentada por placas solares que recebe dados de internet via satélite e distribui via cabo de fibra óptica até a Casa12Volts®.',
    voltage: '12V CC',
    category: 'outro',
    image: {
      url: '/assets/components/estacao-internet.jpg',
      alt: 'Estação de recepção de internet com energia solar',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '15W',
    },
  },
];

/**
 * Métricas de sustentabilidade
 */
export const sustainabilityMetrics: SustainabilityMetric[] = [
  {
    label: 'Eficiência Energética',
    value: 92,
    unit: '%',
    icon: '⚡',
    description:
      'Sistema multivolts CC elimina perdas de conversão AC/DC, alcançando 92% de eficiência contra 75-80% dos sistemas convencionais.',
    odsAlignment: [7],
  },
  {
    label: 'Economia Mensal (CEMIG)',
    value: 'R$ 380',
    unit: '',
    icon: '💰',
    description:
      'Economia estimada na conta de luz (CEMIG) comparado a uma residência convencional de mesmo tamanho e consumo.',
    odsAlignment: [7],
  },
  {
    label: 'CO₂ Evitado',
    value: 156,
    unit: 'kg/ano',
    icon: '🌱',
    description:
      'Redução de emissões de gases de efeito estufa equivalente ao plantio de aproximadamente 7 árvores por ano.',
    odsAlignment: [13],
  },
  {
    label: 'Autonomia Energética',
    value: 100,
    unit: '%',
    icon: '🔋',
    description:
      'Sistema totalmente off-grid, independente da rede elétrica convencional (CEMIG) e de combustíveis fósseis.',
    odsAlignment: [7],
  },
  {
    label: 'Durabilidade dos Equipamentos',
    value: '+40',
    unit: '%',
    icon: '♻️',
    description:
      'Equipamentos em CC duram até 40% mais que equivalentes em CA, reduzindo desperdício e custos de reposição.',
    odsAlignment: [12],
  },
  {
    label: 'Replicabilidade',
    value: 'Alta',
    unit: '',
    icon: '🏘️',
    description:
      'Modelo pode ser replicado em comunidades rurais, zonas isoladas e contextos de vulnerabilidade energética.',
    odsAlignment: [7, 11],
  },
];

/**
 * Dados comparativos: Casa12Volts® vs Convencional (CEMIG)
 */
export const comparisonData: ComparisonData[] = [
  {
    item: 'Consumo Diário',
    casa12V: '5.2 kWh',
    convencional: '8.5 kWh',
    unit: 'kWh',
  },
  {
    item: 'Custo Mensal (CEMIG)',
    casa12V: 'R$ 0',
    convencional: 'R$ 380',
    unit: 'R$',
  },
  {
    item: 'Perdas de Conversão',
    casa12V: '8%',
    convencional: '20-25%',
    unit: '%',
  },
  {
    item: 'Eficiência do Sistema',
    casa12V: '92%',
    convencional: '75-80%',
    unit: '%',
  },
  {
    item: 'Emissões de CO₂',
    casa12V: '0 kg/mês',
    convencional: '13 kg/mês',
    unit: 'kg',
  },
  {
    item: 'Dependência de Combustível Fóssil',
    casa12V: 'Nenhuma',
    convencional: 'Total',
    unit: '',
  },
  {
    item: 'Vida Útil dos Equipamentos',
    casa12V: '15-25 anos',
    convencional: '8-15 anos',
    unit: 'anos',
  },
  {
    item: 'Autonomia Energética',
    casa12V: '100% (Off-Grid)',
    convencional: '0% (Dependente)',
    unit: '',
  },
];

/**
 * Histórico de geração de energia (últimos 7 dias)
 */
export const energyHistoryWeek: EnergyHistory[] = [
  {
    date: '14/11',
    solar: 4.8,
    eolica: 1.5,
    bicicleta: 0.18,
    total: 6.48,
  },
  {
    date: '15/11',
    solar: 5.1,
    eolica: 1.2,
    bicicleta: 0.15,
    total: 6.45,
  },
  {
    date: '16/11',
    solar: 4.2,
    eolica: 1.8,
    bicicleta: 0.12,
    total: 6.12,
  },
  {
    date: '17/11',
    solar: 5.2,
    eolica: 0.9,
    bicicleta: 0.2,
    total: 6.3,
  },
  {
    date: '18/11',
    solar: 4.9,
    eolica: 1.4,
    bicicleta: 0.16,
    total: 6.46,
  },
  {
    date: '19/11',
    solar: 5.0,
    eolica: 1.3,
    bicicleta: 0.19,
    total: 6.49,
  },
  {
    date: '20/11',
    solar: 3.8,
    eolica: 1.2,
    bicicleta: 0.15,
    total: 5.15,
  },
];

/**
 * Consumo por categoria
 */
export const consumptionByCategory: ConsumptionCategory[] = [
  {
    category: 'Iluminação',
    consumption: 1.2,
    percentage: 25,
    icon: '💡',
    color: '#ffc107',
  },
  {
    category: 'Refrigeração',
    consumption: 1.44,
    percentage: 30,
    icon: '🧊',
    color: '#0066cc',
  },
  {
    category: 'Eletrônicos',
    consumption: 1.44,
    percentage: 30,
    icon: '📱',
    color: '#2d8b3c',
  },
  {
    category: 'Outros',
    consumption: 0.72,
    percentage: 15,
    icon: '🔌',
    color: '#d85a28',
  },
];

/**
 * Perguntas Frequentes (FAQs)
 */
export const faqs: FAQ[] = [
  {
    id: generateId(),
    question: 'O que é a Casa12Volts®?',
    answer:
      'A Casa12Volts® é a primeira residência multivolts do Brasil, inaugurada em 2012 no Centro de Educação Ambiental Mandembo (Rio Manso/MG). Opera integralmente em corrente contínua (1,5V, 3V, 5V, 12V, 19V e 24V), sem conversão para 110V/220V, demonstrando alta eficiência energética (92%) e autonomia total (100% off-grid).',
    category: 'geral',
  },
  {
    id: generateId(),
    question: 'Por que usar corrente contínua (CC) ao invés de alternada (CA)?',
    answer:
      'Sistemas convencionais em CA (110V/220V) perdem 20-25% de energia nas conversões AC/DC dos aparelhos eletrônicos. A Casa12Volts® elimina essas perdas operando diretamente em CC, alcançando 92% de eficiência contra 75-80% dos sistemas convencionais. Além disso, equipamentos em CC duram até 40% mais.',
    category: 'tecnica',
  },
  {
    id: generateId(),
    question: 'Quanto economizo com esse sistema?',
    answer:
      'Uma residência equivalente com sistema convencional (CEMIG) gastaria aproximadamente R$ 380/mês. A Casa12Volts®, sendo 100% off-grid com energia renovável, tem custo zero de energia elétrica, além de evitar 156kg de CO₂ por ano.',
    category: 'economia',
  },
  {
    id: generateId(),
    question: 'Quais aparelhos funcionam em 12V?',
    answer:
      'Diversos: lâmpadas LED, geladeira bivolt (12V/24V) da Elber, TV LED, liquidificador importado, computador (19V), modem de internet, rádio (5V), balança digital (3V), relógio de parede (1,5V), mini estação meteorológica (5V), e muito mais. A maioria dos eletrônicos já opera internamente em CC.',
    category: 'tecnica',
  },
  {
    id: generateId(),
    question: 'Como funciona o Pedal Sustentável?',
    answer:
      'É uma bicicleta ergométrica adaptada com gerador elétrico instalada em um espaço dedicado. Ao pedalar por 30 minutos, uma pessoa pode gerar até 0,3 kWh de energia, demonstrando de forma didática a relação direta entre trabalho físico e energia elétrica.',
    category: 'educacao',
  },
  {
    id: generateId(),
    question: 'O sistema é replicável em outros locais?',
    answer:
      'Sim! O modelo Casa12Volts® é modular, escalável e especialmente adequado para comunidades rurais, zonas isoladas sem acesso à rede elétrica, e contextos de vulnerabilidade energética. Já recebeu visitas técnicas de empresas como Omexon e Vince (França).',
    category: 'replicacao',
  },
  {
    id: generateId(),
    question: 'Como é feito o armazenamento de energia?',
    answer:
      'Utilizamos quatro baterias estacionárias de 12V (220 Ah cada), totalizando 10,56 kWh de capacidade. Elas podem operar em série (24V) ou paralelo (12V), gerenciadas por três controladores de carga solar MPPT e um controlador eólico, garantindo autonomia mesmo em dias nublados ou à noite.',
    category: 'tecnica',
  },
  {
    id: generateId(),
    question: 'Qual a área do CEA Mandembo?',
    answer:
      'O Centro de Educação Ambiental Mandembo possui 8 hectares (80.000 m²). Apenas cerca de 6% são usados para atividades socioambientais, enquanto 94% abrigam uma nascente e são dedicados à preservação ambiental.',
    category: 'geral',
  },
];

/**
 * Dados consolidados do Dashboard
 */
export const dashboardData: DashboardData = {
  totalGeneration: 5.15, // kWh (soma das fontes atuais)
  totalConsumption: 4.8, // kWh
  savings: 380, // R$ economia mensal (CEMIG)
  co2Avoided: 156, // kg CO2 evitado anualmente
  sources: energySources,
  components: systemComponents,
  metrics: sustainabilityMetrics,
  comparisonData: comparisonData, // ✅ CORRIGIDO - Adicionado
  energyHistory: energyHistoryWeek, // ✅ CORRIGIDO - Adicionado
  consumptionByCategory: consumptionByCategory, // ✅ CORRIGIDO - Adicionado
  faqs: faqs, // ✅ CORRIGIDO - Adicionado
  lastUpdate: new Date(),
};
