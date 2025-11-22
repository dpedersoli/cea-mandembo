import type { Appliance, EducationalTip } from '@/types/pex-v.types';
import { generateId } from '@/utils/helpers';

/**
 * Base de dados de aparelhos eletroeletrônicos
 * Valores baseados em especificações reais e perdas de conversão
 */
export const appliancesDatabase: Appliance[] = [
  // ILUMINAÇÃO
  {
    id: generateId(),
    name: 'Lâmpada LED 9W',
    category: 'iluminacao',
    consumption110V: 12, // Watts (9W + perdas de conversão ~33%)
    consumption12V: 9, // Watts (direto em CC)
    defaultHoursPerDay: 6,
    icon: '💡',
    description: 'Lâmpada LED de alta eficiência. Em 12V funciona diretamente sem conversores.',
    conversionLoss: 0.33,
  },
  {
    id: generateId(),
    name: 'Lâmpada LED 5W',
    category: 'iluminacao',
    consumption110V: 7, // Watts
    consumption12V: 5, // Watts
    defaultHoursPerDay: 8,
    icon: '💡',
    description: 'Lâmpada LED para ambientes menores.',
    conversionLoss: 0.4,
  },
  {
    id: generateId(),
    name: 'Fita LED 5m',
    category: 'iluminacao',
    consumption110V: 20, // Watts
    consumption12V: 15, // Watts
    defaultHoursPerDay: 4,
    icon: '✨',
    description: 'Fita LED decorativa. Naturalmente opera em 12V CC.',
    conversionLoss: 0.33,
  },

  // REFRIGERAÇÃO
  {
    id: generateId(),
    name: 'Geladeira Compacta 70L',
    category: 'refrigeracao',
    consumption110V: 80, // Watts
    consumption12V: 60, // Watts
    defaultHoursPerDay: 24,
    icon: '🧊',
    description: 'Geladeira compacta. Modelos 12V CC são até 25% mais eficientes.',
    conversionLoss: 0.33,
  },
  {
    id: generateId(),
    name: 'Freezer 100L',
    category: 'refrigeracao',
    consumption110V: 120, // Watts
    consumption12V: 90, // Watts
    defaultHoursPerDay: 24,
    icon: '❄️',
    description: 'Freezer horizontal. Versão CC elimina perdas do inversor.',
    conversionLoss: 0.33,
  },

  // ELETROPORTÁTEIS
  {
    id: generateId(),
    name: 'Ventilador de Mesa',
    category: 'eletroportateis',
    consumption110V: 65, // Watts
    consumption12V: 50, // Watts
    defaultHoursPerDay: 8,
    icon: '🌀',
    description: 'Ventilador de 30cm. Motores CC são mais silenciosos e eficientes.',
    conversionLoss: 0.3,
  },
  {
    id: generateId(),
    name: 'Liquidificador',
    category: 'eletroportateis',
    consumption110V: 400, // Watts
    consumption12V: 300, // Watts (alta potência, necessita adaptação)
    defaultHoursPerDay: 0.5,
    icon: '🍹',
    description: 'Uso intermitente. Modelos CC de alta potência estão em desenvolvimento.',
    conversionLoss: 0.33,
  },
  {
    id: generateId(),
    name: "Bomba d'Água 1/4 CV",
    category: 'eletroportateis',
    consumption110V: 250, // Watts
    consumption12V: 200, // Watts
    defaultHoursPerDay: 2,
    icon: '💧',
    description: "Bomba para caixa d'água. Bombas CC são ideais para sistemas solares.",
    conversionLoss: 0.25,
  },

  // ELETRÔNICOS
  {
    id: generateId(),
    name: 'Notebook',
    category: 'eletronicos',
    consumption110V: 80, // Watts (inclui perdas do carregador)
    consumption12V: 65, // Watts (direto via USB-C PD ou adaptador)
    defaultHoursPerDay: 6,
    icon: '💻',
    description:
      'Notebooks já operam internamente em CC. Eliminar o carregador AC economiza energia.',
    conversionLoss: 0.23,
  },
  {
    id: generateId(),
    name: 'TV LED 32"',
    category: 'eletronicos',
    consumption110V: 70, // Watts
    consumption12V: 55, // Watts
    defaultHoursPerDay: 5,
    icon: '📺',
    description: 'TV LED. Modelos CC evitam fonte interna, reduzindo calor e consumo.',
    conversionLoss: 0.27,
  },
  {
    id: generateId(),
    name: 'Roteador Wi-Fi',
    category: 'eletronicos',
    consumption110V: 15, // Watts
    consumption12V: 12, // Watts
    defaultHoursPerDay: 24,
    icon: '📡',
    description: 'Roteadores operam nativamente em CC (geralmente 12V).',
    conversionLoss: 0.25,
  },
  {
    id: generateId(),
    name: 'Carregador USB (5V)',
    category: 'eletronicos',
    consumption110V: 12, // Watts (inclui perdas)
    consumption12V: 10, // Watts (conversão direta 12V para 5V)
    defaultHoursPerDay: 4,
    icon: '🔌',
    description: 'Carregadores USB. Conversão 12V→5V é mais eficiente que 110V→5V.',
    conversionLoss: 0.2,
  },
  {
    id: generateId(),
    name: 'Câmera de Segurança',
    category: 'eletronicos',
    consumption110V: 8, // Watts
    consumption12V: 6, // Watts
    defaultHoursPerDay: 24,
    icon: '📹',
    description: 'Câmeras IP geralmente operam em 12V CC ou PoE.',
    conversionLoss: 0.33,
  },

  // CLIMATIZAÇÃO
  {
    id: generateId(),
    name: 'Ventilador de Teto',
    category: 'climatizacao',
    consumption110V: 80, // Watts
    consumption12V: 65, // Watts
    defaultHoursPerDay: 10,
    icon: '🌊',
    description: 'Ventilador de teto. Motores CC são mais silenciosos e duráveis.',
    conversionLoss: 0.23,
  },
  {
    id: generateId(),
    name: 'Ar Condicionado Portátil 7000 BTU',
    category: 'climatizacao',
    consumption110V: 900, // Watts
    consumption12V: 750, // Watts (alta potência, requer inversor robusto em CC)
    defaultHoursPerDay: 4,
    icon: '❄️',
    description: 'Alta potência. Sistemas CC ainda são raros e caros para esta aplicação.',
    conversionLoss: 0.2,
  },

  // OUTROS
  {
    id: generateId(),
    name: 'Ferro de Passar (baixa potência)',
    category: 'outros',
    consumption110V: 1000, // Watts
    consumption12V: 850, // Watts (adaptação necessária)
    defaultHoursPerDay: 1,
    icon: '👕',
    description: 'Alto consumo. Uso em CC requer sistema robusto.',
    conversionLoss: 0.18,
  },
  {
    id: generateId(),
    name: 'Aquecedor de Água 12V (Chuveiro)',
    category: 'outros',
    consumption110V: 5500, // Watts (padrão 110V)
    consumption12V: 4800, // Watts (necessita adaptação e bateria robusta)
    defaultHoursPerDay: 0.5,
    icon: '🚿',
    description: 'Altíssimo consumo. Casa12Volts® geralmente usa aquecimento solar.',
    conversionLoss: 0.15,
  },
];

/**
 * Dicas educativas sobre economia de energia
 */
export const educationalTips: EducationalTip[] = [
  {
    id: generateId(),
    title: 'Eliminação de Perdas de Conversão',
    description:
      'Sistemas convencionais perdem 15-25% de energia nas conversões AC/DC. O sistema multivolts elimina essas perdas, operando direto em corrente contínua.',
    category: 'eficiencia',
    icon: '⚡',
  },
  {
    id: generateId(),
    title: 'Maior Durabilidade dos Equipamentos',
    description:
      'Equipamentos em CC duram até 40% mais que equivalentes em CA, pois não sofrem com picos de tensão e variações da rede elétrica.',
    category: 'economia',
    icon: '♻️',
  },
  {
    id: generateId(),
    title: 'Redução de Emissões de CO₂',
    description:
      'Cada kWh economizado evita a emissão de 0,24kg de CO₂ na atmosfera. Ao longo de um ano, essa economia equivale ao plantio de árvores.',
    category: 'sustentabilidade',
    icon: '🌱',
  },
  {
    id: generateId(),
    title: 'Compatibilidade com Energia Solar',
    description:
      'Painéis solares geram energia em CC. Usar diretamente em 12V elimina a necessidade de inversores caros e com perdas de 10-15%.',
    category: 'eficiencia',
    icon: '☀️',
  },
  {
    id: generateId(),
    title: 'Iluminação LED em 12V',
    description:
      'LEDs operam nativamente em corrente contínua. Usar em 12V direto é mais eficiente que converter de 110V.',
    category: 'economia',
    icon: '💡',
  },
  {
    id: generateId(),
    title: 'Menor Risco Elétrico',
    description:
      '12V CC é considerado extra-baixa tensão, oferecendo muito mais segurança que 110V ou 220V, especialmente em ambientes úmidos.',
    category: 'curiosidade',
    icon: '🛡️',
  },
  {
    id: generateId(),
    title: 'Baterias Estacionárias',
    description:
      'Sistemas 12V permitem armazenamento direto em baterias sem conversões, ideal para autonomia energética total (off-grid).',
    category: 'eficiencia',
    icon: '🔋',
  },
  {
    id: generateId(),
    title: 'Replicabilidade em Áreas Rurais',
    description:
      'Sistema multivolts é perfeito para comunidades sem acesso à rede elétrica, sendo replicável e de baixo custo de manutenção.',
    category: 'sustentabilidade',
    icon: '🏘️',
  },
];

/**
 * Categorias de aparelhos com ícones
 */
export const applianceCategories = [
  { value: 'iluminacao', label: 'Iluminação', icon: '💡' },
  { value: 'refrigeracao', label: 'Refrigeração', icon: '🧊' },
  { value: 'eletroportateis', label: 'Eletroportáteis', icon: '🔌' },
  { value: 'eletronicos', label: 'Eletrônicos', icon: '📱' },
  { value: 'climatizacao', label: 'Climatização', icon: '🌀' },
  { value: 'outros', label: 'Outros', icon: '🏠' },
] as const;
