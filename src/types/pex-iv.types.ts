export type EnergySourceType = 'solar' | 'eolica' | 'bicicleta';

export type ComponentCategory = 'geracao' | 'armazenamento' | 'consumo' | 'outro';

export type FAQCategory = 'geral' | 'tecnica' | 'economia' | 'educacao' | 'replicacao';

export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface EnergySource {
  id: string;
  name: string;
  type: EnergySourceType;
  currentGeneration: number;
  capacity: number;
  efficiency: number;
  icon: string;
  description: string;
  createdAt: Date;
}

export interface TechnicalSpecs {
  power?: string;
  capacity?: string;
  lifespan?: string;
  efficiency?: string;
  accuracy?: string;
  display?: string;
}

export interface SystemComponent {
  id: string;
  name: string;
  description: string;
  voltage: string;
  category: ComponentCategory;
  image?: Image;
  technicalSpecs?: TechnicalSpecs;
}

export interface SustainabilityMetric {
  label: string;
  value: number | string;
  unit: string;
  icon: string;
  description: string;
  odsAlignment: number[];
}

export interface ComparisonData {
  item: string;
  casa12V: string;
  convencional: string;
  unit: string;
}

export interface EnergyHistory {
  date: string;
  solar: number;
  eolica: number;
  bicicleta: number;
  total: number;
}

export interface ConsumptionCategory {
  category: string;
  consumption: number;
  percentage: number;
  icon: string;
  color: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export interface DashboardData {
  totalGeneration: number;
  totalConsumption: number;
  savings: number;
  co2Avoided: number;
  sources: EnergySource[];
  components: SystemComponent[];
  metrics: SustainabilityMetric[];
  comparisonData?: ComparisonData[];
  energyHistory?: EnergyHistory[];
  consumptionByCategory?: ConsumptionCategory[];
  faqs?: FAQ[];
}

export interface LineChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface EnergyFlowPanelProps {
  sources: EnergySource[];
  totalGeneration: number;
  totalConsumption: number;
}

export interface SustainabilityHighlightsProps {
  metrics: SustainabilityMetric[];
}

export interface ComparisonTableProps {
  data: ComparisonData[];
}

export interface ComponentCardProps {
  component: SystemComponent;
}

export interface DashboardHomeProps {
  data?: DashboardData;
}
export interface ComponentFilters {
  category: ComponentCategory | 'all';
  searchQuery: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

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
