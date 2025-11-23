import type { Appliance, ApplianceCategoryInfo, UsageProfile } from '@/types/pex-v.types';
import { generateId } from '@/utils/helpers';

/**
 * Categorias de aparelhos para filtro
 */
export const applianceCategories: ApplianceCategoryInfo[] = [
  { value: 'iluminacao', label: 'Iluminação', icon: '💡' },
  { value: 'refrigeracao', label: 'Refrigeração', icon: '🧊' },
  { value: 'cozinha', label: 'Cozinha', icon: '🍳' },
  { value: 'eletronicos', label: 'Eletrônicos', icon: '📱' },
  { value: 'climatizacao', label: 'Climatização', icon: '❄️' },
  { value: 'outros', label: 'Outros', icon: '🔌' },
];

/**
 * Base de dados de aparelhos eletroeletrônicos
 */
export const appliancesDatabase: Appliance[] = [
  // ILUMINAÇÃO
  {
    id: generateId(),
    name: 'Lâmpada LED 9W (equivalente 60W)',
    description: 'Lâmpada LED de alta eficiência, comum em residências',
    category: 'iluminacao',
    consumption110V: 9,
    consumption12V: 5,
    icon: '💡',
    averageHoursPerDay: 5,
  },
  {
    id: generateId(),
    name: 'Lâmpada LED 15W (equivalente 100W)',
    description: 'Lâmpada LED mais potente para ambientes maiores',
    category: 'iluminacao',
    consumption110V: 15,
    consumption12V: 9,
    icon: '💡',
    averageHoursPerDay: 4,
  },
  {
    id: generateId(),
    name: 'Lâmpada Fluorescente Compacta 20W',
    description: 'Lâmpada fluorescente tradicional',
    category: 'iluminacao',
    consumption110V: 20,
    consumption12V: 12,
    icon: '💡',
    averageHoursPerDay: 5,
  },

  // REFRIGERAÇÃO
  {
    id: generateId(),
    name: 'Geladeira 1 Porta (250L)',
    description: 'Geladeira convencional de 1 porta, uso residencial',
    category: 'refrigeracao',
    consumption110V: 130,
    consumption12V: 60,
    icon: '🧊',
    averageHoursPerDay: 24,
  },
  {
    id: generateId(),
    name: 'Geladeira 2 Portas (400L)',
    description: 'Geladeira duplex frost-free',
    category: 'refrigeracao',
    consumption110V: 180,
    consumption12V: 85,
    icon: '🧊',
    averageHoursPerDay: 24,
  },
  {
    id: generateId(),
    name: 'Freezer Horizontal (300L)',
    description: 'Freezer horizontal para congelamento',
    category: 'refrigeracao',
    consumption110V: 150,
    consumption12V: 70,
    icon: '🧊',
    averageHoursPerDay: 24,
  },

  // COZINHA
  {
    id: generateId(),
    name: 'Liquidificador',
    description: 'Liquidificador comum de 600W',
    category: 'cozinha',
    consumption110V: 600,
    consumption12V: 300,
    icon: '🍹',
    averageHoursPerDay: 0.25,
  },
  {
    id: generateId(),
    name: 'Micro-ondas',
    description: 'Forno micro-ondas 1200W',
    category: 'cozinha',
    consumption110V: 1200,
    consumption12V: 800,
    icon: '📦',
    averageHoursPerDay: 0.5,
  },
  {
    id: generateId(),
    name: 'Cafeteira Elétrica',
    description: 'Cafeteira elétrica padrão',
    category: 'cozinha',
    consumption110V: 800,
    consumption12V: 450,
    icon: '☕',
    averageHoursPerDay: 0.5,
  },
  {
    id: generateId(),
    name: 'Torradeira',
    description: 'Torradeira elétrica 2 fatias',
    category: 'cozinha',
    consumption110V: 850,
    consumption12V: 500,
    icon: '🍞',
    averageHoursPerDay: 0.25,
  },
  {
    id: generateId(),
    name: 'Batedeira',
    description: 'Batedeira planetária',
    category: 'cozinha',
    consumption110V: 400,
    consumption12V: 200,
    icon: '🍰',
    averageHoursPerDay: 0.5,
  },

  // ELETRÔNICOS
  {
    id: generateId(),
    name: 'TV LED 32"',
    description: 'Televisor LED 32 polegadas',
    category: 'eletronicos',
    consumption110V: 65,
    consumption12V: 55,
    icon: '📺',
    averageHoursPerDay: 5,
  },
  {
    id: generateId(),
    name: 'TV LED 50"',
    description: 'Televisor LED 50 polegadas',
    category: 'eletronicos',
    consumption110V: 100,
    consumption12V: 80,
    icon: '📺',
    averageHoursPerDay: 4,
  },
  {
    id: generateId(),
    name: 'Computador Desktop',
    description: 'PC desktop uso doméstico',
    category: 'eletronicos',
    consumption110V: 250,
    consumption12V: 150,
    icon: '🖥️',
    averageHoursPerDay: 6,
  },
  {
    id: generateId(),
    name: 'Notebook',
    description: 'Notebook padrão',
    category: 'eletronicos',
    consumption110V: 65,
    consumption12V: 45,
    icon: '💻',
    averageHoursPerDay: 5,
  },
  {
    id: generateId(),
    name: 'Roteador Wi-Fi',
    description: 'Roteador wireless sempre ligado',
    category: 'eletronicos',
    consumption110V: 10,
    consumption12V: 5,
    icon: '📡',
    averageHoursPerDay: 24,
  },
  {
    id: generateId(),
    name: 'Carregador de Celular',
    description: 'Carregador USB comum (em uso)',
    category: 'eletronicos',
    consumption110V: 10,
    consumption12V: 5,
    icon: '📱',
    averageHoursPerDay: 3,
  },
  {
    id: generateId(),
    name: 'Videogame Console',
    description: 'Console de videogame moderno',
    category: 'eletronicos',
    consumption110V: 150,
    consumption12V: 100,
    icon: '🎮',
    averageHoursPerDay: 3,
  },

  // CLIMATIZAÇÃO
  {
    id: generateId(),
    name: 'Ventilador de Mesa',
    description: 'Ventilador de mesa 40cm',
    category: 'climatizacao',
    consumption110V: 65,
    consumption12V: 35,
    icon: '🌀',
    averageHoursPerDay: 8,
  },
  {
    id: generateId(),
    name: 'Ventilador de Teto',
    description: 'Ventilador de teto residencial',
    category: 'climatizacao',
    consumption110V: 80,
    consumption12V: 45,
    icon: '🌀',
    averageHoursPerDay: 10,
  },
  {
    id: generateId(),
    name: 'Ar Condicionado 9000 BTU',
    description: 'Ar condicionado split 9000 BTUs',
    category: 'climatizacao',
    consumption110V: 900,
    consumption12V: 650,
    icon: '❄️',
    averageHoursPerDay: 8,
  },

  // OUTROS
  {
    id: generateId(),
    name: 'Ferro de Passar',
    description: 'Ferro de passar roupa elétrico',
    category: 'outros',
    consumption110V: 1200,
    consumption12V: 800,
    icon: '👔',
    averageHoursPerDay: 1,
  },
  {
    id: generateId(),
    name: 'Aspirador de Pó',
    description: 'Aspirador de pó residencial',
    category: 'outros',
    consumption110V: 1400,
    consumption12V: 900,
    icon: '🧹',
    averageHoursPerDay: 0.5,
  },
  {
    id: generateId(),
    name: 'Chuveiro Elétrico',
    description: 'Chuveiro elétrico 5500W (banho morno)',
    category: 'outros',
    consumption110V: 5500,
    consumption12V: 3500,
    icon: '🚿',
    averageHoursPerDay: 0.5,
  },
  {
    id: generateId(),
    name: "Bomba d'Água",
    description: "Bomba d'água residencial 1/2 CV",
    category: 'outros',
    consumption110V: 400,
    consumption12V: 250,
    icon: '💧',
    averageHoursPerDay: 1,
  },
  {
    id: generateId(),
    name: 'Câmera de Segurança',
    description: 'Câmera IP de vigilância',
    category: 'outros',
    consumption110V: 8,
    consumption12V: 3,
    icon: '📹',
    averageHoursPerDay: 24,
  },
];

/**
 * Perfis de uso pré-definidos
 */
export const usageProfiles: UsageProfile[] = [
  {
    id: 'basico',
    name: 'Uso Básico',
    description: 'Iluminação, geladeira e alguns eletrônicos essenciais',
    applianceIds: [], // Será preenchido dinamicamente
  },
  {
    id: 'padrao',
    name: 'Uso Padrão',
    description: 'Casa média com aparelhos comuns do dia a dia',
    applianceIds: [], // Será preenchido dinamicamente
  },
  {
    id: 'completo',
    name: 'Uso Completo',
    description: 'Casa com diversos aparelhos e eletrodomésticos',
    applianceIds: [], // Será preenchido dinamicamente
  },
];
