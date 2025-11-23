/**
 * Tipos e interfaces para o PEX IV - Dashboard Educativo Casa12Volts®
 */

/**
 * Tipo de fonte de energia
 */
export type EnergySourceType = 'solar' | 'eolica' | 'bicicleta';

/**
 * Categoria de componente do sistema
 */
export type ComponentCategory = 'geracao' | 'armazenamento' | 'consumo' | 'outro';

/**
 * Categoria de FAQ
 */
export type FAQCategory = 'geral' | 'tecnica' | 'economia' | 'educacao' | 'replicacao';

/**
 * Interface para imagem
 */
export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Interface para fonte de energia
 */
export interface EnergySource {
  id: string;
  name: string;
  type: EnergySourceType;
  currentGeneration: number; // kWh atual
  capacity: number; // kWh capacidade máxima
  efficiency: number; // % eficiência
  icon: string;
  description: string;
  createdAt: Date;
}

/**
 * Interface para especificações técnicas
 */
export interface TechnicalSpecs {
  power?: string;
  capacity?: string;
  lifespan?: string;
  efficiency?: string;
  accuracy?: string;
  display?: string;
}

/**
 * Interface para componente do sistema
 */
export interface SystemComponent {
  id: string;
  name: string;
  description: string;
  voltage: string;
  category: ComponentCategory;
  image?: Image;
  technicalSpecs?: TechnicalSpecs;
}

/**
 * Interface para métrica de sustentabilidade
 */
export interface SustainabilityMetric {
  label: string;
  value: number | string;
  unit: string;
  icon: string;
  description: string;
  odsAlignment: number[]; // Array de números ODS (7, 13, etc.)
}

/**
 * Interface para dados comparativos
 */
export interface ComparisonData {
  item: string;
  casa12V: string;
  convencional: string;
  unit: string;
}

/**
 * Interface para histórico de energia
 */
export interface EnergyHistory {
  date: string;
  solar: number;
  eolica: number;
  bicicleta: number;
  total: number;
}

/**
 * Interface para categoria de consumo
 */
export interface ConsumptionCategory {
  category: string;
  consumption: number; // kWh
  percentage: number; // %
  icon: string;
  color: string;
}

/**
 * Interface para FAQ (Perguntas Frequentes)
 */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

/**
 * Interface principal do Dashboard
 */
export interface DashboardData {
  totalGeneration: number; // kWh total gerado
  totalConsumption: number; // kWh total consumido
  savings: number; // R$ economia mensal
  co2Avoided: number; // kg CO2 evitado anualmente
  sources: EnergySource[];
  components: SystemComponent[];
  metrics: SustainabilityMetric[];
  comparisonData?: ComparisonData[]; // Dados comparativos (opcional)
  energyHistory?: EnergyHistory[]; // Histórico de energia (opcional)
  consumptionByCategory?: ConsumptionCategory[]; // Consumo por categoria (opcional)
  faqs?: FAQ[]; // FAQs (opcional)
}

/**
 * Interface para dados de gráfico de linha
 */
export interface LineChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

/**
 * Interface para dados de gráfico de barras
 */
export interface BarChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

/**
 * Props para componente EnergyFlowPanel
 */
export interface EnergyFlowPanelProps {
  sources: EnergySource[];
  totalGeneration: number;
  totalConsumption: number;
}

/**
 * Props para componente SustainabilityHighlights
 */
export interface SustainabilityHighlightsProps {
  metrics: SustainabilityMetric[];
}

/**
 * Props para componente ComparisonTable
 */
export interface ComparisonTableProps {
  data: ComparisonData[];
}

/**
 * Props para componente ComponentCard
 */
export interface ComponentCardProps {
  component: SystemComponent;
}

/**
 * Props para página DashboardHome
 */
export interface DashboardHomeProps {
  data?: DashboardData;
}

/**
 * Interface para filtros de componentes
 */
export interface ComponentFilters {
  category: ComponentCategory | 'all';
  searchQuery: string;
}

/**
 * Interface para estado de loading
 */
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

/**
 * Type guard para verificar se é EnergySource
 */
export const isEnergySource = (obj: unknown): obj is EnergySource => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'type' in obj &&
    'currentGeneration' in obj
  );
};

/**
 * Type guard para verificar se é SystemComponent
 */
export const isSystemComponent = (obj: unknown): obj is SystemComponent => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'voltage' in obj &&
    'category' in obj
  );
};
