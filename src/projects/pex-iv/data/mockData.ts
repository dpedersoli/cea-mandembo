import type {
  DashboardData,
  EnergySource,
  SystemComponent,
  SustainabilityMetric,
  ComparisonData,
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
      'Turbinas eólicas de pequeno porte aproveitam o vento da região para gerar energia limpa e complementar o sistema solar.',
    createdAt: new Date('2012-01-01'),
  },
  {
    id: generateId(),
    name: 'Energia por Esforço Físico',
    type: 'bicicleta',
    currentGeneration: 0.15, // kWh atual
    capacity: 0.3, // kWh capacidade máxima
    efficiency: 75, // % eficiência
    icon: '🚴',
    description:
      'Bicicleta ergométrica converte o esforço físico humano em energia elétrica, demonstrando a relação direta entre trabalho e energia.',
    createdAt: new Date('2012-01-01'),
  },
];

/**
 * Componentes do sistema Casa12Volts®
 */
export const systemComponents: SystemComponent[] = [
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
    },
  },
  {
    id: generateId(),
    name: 'Turbina Eólica Vertical',
    description:
      'Gerador eólico de eixo vertical, ideal para ventos variáveis e baixas velocidades.',
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
    },
  },
  {
    id: generateId(),
    name: 'Bicicleta Geradora',
    description:
      'Bicicleta ergométrica adaptada com gerador elétrico para conversão de energia mecânica em elétrica.',
    voltage: '12V CC',
    category: 'geracao',
    image: {
      url: '/assets/components/bicicleta-geradora.jpg',
      alt: 'Bicicleta geradora de energia',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '100W',
      capacity: '0.3 kWh (30 min de pedalada)',
      lifespan: '10 anos',
    },
  },
  {
    id: generateId(),
    name: 'Banco de Baterias Estacionárias',
    description:
      'Conjunto de baterias estacionárias de 12V para armazenamento de energia em corrente contínua.',
    voltage: '12V CC',
    category: 'armazenamento',
    image: {
      url: '/assets/components/baterias.jpg',
      alt: 'Banco de baterias estacionárias',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      capacity: '400 Ah (4.8 kWh)',
      lifespan: '5-8 anos',
    },
  },
  {
    id: generateId(),
    name: 'Controlador de Carga Solar',
    description:
      'Regulador de carga MPPT que otimiza a captação de energia dos painéis solares e protege as baterias.',
    voltage: '12V/24V CC',
    category: 'outro',
    image: {
      url: '/assets/components/controlador.jpg',
      alt: 'Controlador de carga solar',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '60A MPPT',
      efficiency: '98%',
    },
  },
  {
    id: generateId(),
    name: 'Tomadas Multivolts',
    description:
      'Sistema de distribuição com múltiplas saídas: 1.5V, 5V, 12V, 19V e 24V em corrente contínua.',
    voltage: 'Múltiplas (1.5V - 24V CC)',
    category: 'consumo',
    image: {
      url: '/assets/components/tomadas-multivolts.jpg',
      alt: 'Tomadas de múltiplas voltagens',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: 'Até 1500W total',
    },
  },
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
      power: '5W por lâmpada',
      lifespan: '50.000 horas',
    },
  },
  {
    id: generateId(),
    name: 'Geladeira 12V',
    description:
      'Refrigerador compacto desenvolvido para funcionar diretamente em 12V CC, com alta eficiência energética.',
    voltage: '12V CC',
    category: 'consumo',
    image: {
      url: '/assets/components/geladeira-12v.jpg',
      alt: 'Geladeira 12V',
      width: 800,
      height: 600,
    },
    technicalSpecs: {
      power: '60W',
      capacity: '70 litros',
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
    label: 'Economia Mensal',
    value: 'R$ 380',
    unit: '',
    icon: '💰',
    description:
      'Economia estimada na conta de luz comparado a uma residência convencional de mesmo tamanho.',
    odsAlignment: [7],
  },
  {
    label: 'CO₂ Evitado',
    value: 156,
    unit: 'kg/ano',
    icon: '🌱',
    description:
      'Redução de emissões de gases de efeito estufa equivalente ao plantio de 7 árvores por ano.',
    odsAlignment: [13],
  },
  {
    label: 'Autonomia Energética',
    value: 100,
    unit: '%',
    icon: '🔋',
    description:
      'Sistema totalmente off-grid, independente da rede elétrica convencional e de combustíveis fósseis.',
    odsAlignment: [7],
  },
  {
    label: 'Durabilidade dos Equipamentos',
    value: '+40',
    unit: '%',
    icon: '♻️',
    description:
      'Equipamentos em CC duram até 40% mais que equivalentes em CA, reduzindo desperdício e custos.',
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
 * Dados comparativos: Casa12Volts® vs Convencional
 */
export const comparisonData: ComparisonData[] = [
  {
    item: 'Consumo Diário',
    casa12V: '5.2 kWh',
    convencional: '8.5 kWh',
    unit: 'kWh',
  },
  {
    item: 'Custo Mensal',
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
];

/**
 * Dados consolidados do Dashboard
 */
export const dashboardData: DashboardData = {
  totalGeneration: 5.15, // kWh (soma das fontes)
  totalConsumption: 4.8, // kWh
  savings: 380, // R$ economia mensal
  co2Avoided: 156, // kg CO2 evitado anualmente
  sources: energySources,
  components: systemComponents,
  metrics: sustainabilityMetrics,
  lastUpdate: new Date(),
};

/**
 * Histórico de geração de energia (últimos 7 dias)
 */
export interface EnergyHistory {
  date: string;
  solar: number;
  eolica: number;
  bicicleta: number;
  total: number;
}

export const energyHistoryWeek: EnergyHistory[] = [
  {
    date: '15/11',
    solar: 4.2,
    eolica: 1.5,
    bicicleta: 0.2,
    total: 5.9,
  },
  {
    date: '16/11',
    solar: 3.8,
    eolica: 1.8,
    bicicleta: 0.15,
    total: 5.75,
  },
  {
    date: '17/11',
    solar: 4.5,
    eolica: 1.2,
    bicicleta: 0.1,
    total: 5.8,
  },
  {
    date: '18/11',
    solar: 3.5,
    eolica: 2.0,
    bicicleta: 0.25,
    total: 5.75,
  },
  {
    date: '19/11',
    solar: 4.0,
    eolica: 1.3,
    bicicleta: 0.2,
    total: 5.5,
  },
  {
    date: '20/11',
    solar: 3.9,
    eolica: 1.6,
    bicicleta: 0.15,
    total: 5.65,
  },
  {
    date: '21/11',
    solar: 3.8,
    eolica: 1.2,
    bicicleta: 0.15,
    total: 5.15,
  },
];

/**
 * Distribuição de consumo por categoria
 */
export interface ConsumptionByCategory {
  category: string;
  percentage: number;
  color: string;
}

export const consumptionByCategory: ConsumptionByCategory[] = [
  {
    category: 'Iluminação',
    percentage: 25,
    color: '#FCC30B',
  },
  {
    category: 'Refrigeração',
    percentage: 35,
    color: '#0066cc',
  },
  {
    category: 'Eletrônicos',
    percentage: 20,
    color: '#28a745',
  },
  {
    category: 'Bombeamento de Água',
    percentage: 15,
    color: '#17a2b8',
  },
  {
    category: 'Outros',
    percentage: 5,
    color: '#6c757d',
  },
];

/**
 * FAQs sobre o sistema
 */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'tecnico' | 'financeiro' | 'ambiental' | 'pratico';
}

export const faqs: FAQ[] = [
  {
    id: generateId(),
    question: 'Por que usar 12V ao invés de 110V/220V?',
    answer:
      'O sistema 12V em corrente contínua (CC) elimina perdas de conversão AC/DC presentes em sistemas convencionais. Equipamentos funcionam diretamente com a energia gerada pelos painéis solares, sem desperdício em inversores e transformadores.',
    category: 'tecnico',
  },
  {
    id: generateId(),
    question: 'Quanto custa implementar um sistema Casa12Volts®?',
    answer:
      'O investimento inicial varia entre R$ 15.000 a R$ 25.000 dependendo do tamanho e necessidades. O retorno do investimento ocorre em 5-7 anos através da economia na conta de luz.',
    category: 'financeiro',
  },
  {
    id: generateId(),
    question: 'Qual o impacto ambiental real?',
    answer:
      'Uma Casa12Volts® evita a emissão de aproximadamente 156kg de CO₂ por ano, equivalente ao plantio de 7 árvores. Além disso, reduz a demanda por energia de fontes não renováveis.',
    category: 'ambiental',
  },
  {
    id: generateId(),
    question: 'É possível adaptar uma casa existente?',
    answer:
      'Sim! É possível fazer a adaptação gradual, começando por circuitos específicos (iluminação, por exemplo) e expandindo conforme viabilidade. Não é necessário reformar toda a instalação elétrica de uma vez.',
    category: 'pratico',
  },
  {
    id: generateId(),
    question: 'O sistema funciona à noite ou em dias nublados?',
    answer:
      'Sim. O banco de baterias armazena energia para uso noturno e em períodos sem sol. A combinação com energia eólica também garante geração complementar.',
    category: 'tecnico',
  },
  {
    id: generateId(),
    question: 'Quais aparelhos podem funcionar em 12V?',
    answer:
      "Lâmpadas LED, notebooks, carregadores USB, geladeiras especiais, ventiladores, TVs, roteadores, bombas d'água e muitos outros. A tendência é que cada vez mais equipamentos sejam desenvolvidos para CC.",
    category: 'pratico',
  },
];
