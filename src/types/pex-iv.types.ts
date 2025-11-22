import type { BaseEntity, ImageAsset } from '.';

export type EnergySourceType = 'solar' | 'eolica' | 'bicicleta';

export interface EnergySource extends BaseEntity {
  name: string;
  type: EnergySourceType;
  currentGeneration: number; // kWh atual
  capacity: number; // kWh capacidade máxima
  efficiency: number; // % eficiência
  icon: string;
  description: string;
}

export interface SystemComponent extends BaseEntity {
  name: string;
  description: string;
  voltage: string;
  category: 'geracao' | 'armazenamento' | 'consumo' | 'outro';
  image?: ImageAsset;
  technicalSpecs?: {
    power?: string;
    capacity?: string;
    lifespan?: string;
    accuracy?: string;
    display?: string;
    efficiency?: string;
  };
}

export interface SustainabilityMetric {
  label: string;
  value: string | number;
  unit: string;
  icon: string;
  description: string;
  odsAlignment?: number[]; // ODS relacionados (ex: [7, 13])
}

export interface DashboardData {
  totalGeneration: number; // kWh
  totalConsumption: number; // kWh
  savings: number; // R$
  co2Avoided: number; // kg
  sources: EnergySource[];
  components: SystemComponent[];
  metrics: SustainabilityMetric[];
  lastUpdate: Date;
}

export interface ComparisonData {
  item: string;
  casa12V: number | string;
  convencional: number | string;
  unit: string;
}
