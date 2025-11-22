import type { BaseEntity } from '.';

export type ApplianceCategory =
  | 'iluminacao'
  | 'refrigeracao'
  | 'eletroportateis'
  | 'eletronicos'
  | 'climatizacao'
  | 'outros';

export interface Appliance extends BaseEntity {
  name: string;
  category: ApplianceCategory;
  consumption110V: number; // Watts
  consumption12V: number; // Watts
  defaultHoursPerDay: number;
  icon: string;
  description?: string;
  conversionLoss?: number; // % perda adicional em conversores
}

export interface SelectedAppliance extends Appliance {
  quantity: number;
  hoursPerDay: number;
  isSelected: boolean;
}

export interface ConsumptionBreakdown {
  daily: number; // kWh
  monthly: number; // kWh
  yearly: number; // kWh
}

export interface CalculationResult {
  appliances: SelectedAppliance[];
  consumption110V: ConsumptionBreakdown;
  consumption12V: ConsumptionBreakdown;
  monthlyCost110V: number;
  monthlyCost12V: number;
  monthlySavings: number;
  savingsPercentage: number;
  yearlyCO2Avoided: number;
  yearlyCO2Saved: number;
}

export interface EducationalTip {
  id: string;
  title: string;
  description: string;
  category: 'economia' | 'sustentabilidade' | 'eficiencia' | 'curiosidade';
  icon: string;
}
