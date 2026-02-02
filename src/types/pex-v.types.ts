export type ApplianceCategory =
  | 'iluminacao'
  | 'refrigeracao'
  | 'cozinha'
  | 'eletronicos'
  | 'climatizacao'
  | 'outros';

export interface Appliance {
  id: string;
  name: string;
  description?: string;
  category: ApplianceCategory;
  consumption110V: number;
  consumption12V: number;
  icon: string;
  averageHoursPerDay?: number;
}

export interface SelectedAppliance extends Appliance {
  quantity: number;
  hoursPerDay: number;
  isSelected: boolean;
}

export interface CalculationResult {
  consumption110V: {
    daily: number;
    monthly: number;
    yearly: number;
  };
  consumption12V: {
    daily: number;
    monthly: number;
    yearly: number;
  };

  monthlyCost110V: number;
  monthlyCost12V: number;
  monthlySavings: number;
  savingsPercentage: number;

  yearlyCO2Avoided: number;

  appliances: SelectedAppliance[];
}

export interface ApplianceCategoryInfo {
  value: ApplianceCategory | 'all';
  label: string;
  icon: string;
}

export interface UsageProfile {
  id: string;
  name: string;
  description: string;
  applianceIds: string[];
}

export interface Recommendation {
  id: string;
  text: string;
  type: 'economia' | 'sustentabilidade' | 'tecnica';
  priority: 'high' | 'medium' | 'low';
}

export interface ApplianceSelectorProps {
  appliances: Appliance[];
  selectedAppliances: SelectedAppliance[];
  onToggleAppliance: (appliance: Appliance) => void;
  onUpdateQuantity: (applianceId: string, quantity: number) => void;
  onUpdateHours: (applianceId: string, hours: number) => void;
}

export interface ResultsDisplayProps {
  result: CalculationResult;
}

export interface ComparatorChartData {
  label: string;
  value110V: number;
  value12V: number;
  unit: string;
}

export const isAppliance = (obj: unknown): obj is Appliance => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'category' in obj &&
    'consumption110V' in obj &&
    'consumption12V' in obj
  );
};

export const isSelectedAppliance = (obj: unknown): obj is SelectedAppliance => {
  return isAppliance(obj) && 'quantity' in obj && 'hoursPerDay' in obj && 'isSelected' in obj;
};

export const isCalculationResult = (obj: unknown): obj is CalculationResult => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'consumption110V' in obj &&
    'consumption12V' in obj &&
    'monthlySavings' in obj &&
    'yearlyCO2Avoided' in obj
  );
};
