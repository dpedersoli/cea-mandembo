/**
 * Tipos e interfaces para o PEX V - Comparador Educativo
 */

/**
 * Categoria de aparelho
 */
export type ApplianceCategory =
  | 'iluminacao'
  | 'refrigeracao'
  | 'cozinha'
  | 'eletronicos'
  | 'climatizacao'
  | 'outros';

/**
 * Interface para aparelho eletroeletrônico
 */
export interface Appliance {
  id: string;
  name: string;
  description?: string;
  category: ApplianceCategory;
  consumption110V: number; // Watts em 110V/220V
  consumption12V: number; // Watts em 12V CC
  icon: string;
  averageHoursPerDay?: number; // Horas médias de uso por dia
}

/**
 * Interface para aparelho selecionado pelo usuário
 */
export interface SelectedAppliance extends Appliance {
  quantity: number; // Quantidade de aparelhos
  hoursPerDay: number; // Horas de uso por dia
  isSelected: boolean; // Se está selecionado
}

/**
 * Interface para resultado do cálculo
 */
export interface CalculationResult {
  // Consumo em kWh
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

  // Custos em R$ (CEMIG)
  monthlyCost110V: number;
  monthlyCost12V: number;
  monthlySavings: number;
  savingsPercentage: number;

  // Impacto ambiental
  yearlyCO2Avoided: number; // kg CO2 evitado por ano

  // Aparelhos utilizados no cálculo
  appliances: SelectedAppliance[];
}

/**
 * Interface para categoria de aparelhos (filtro)
 */
export interface ApplianceCategoryInfo {
  value: ApplianceCategory | 'all';
  label: string;
  icon: string;
}

/**
 * Interface para perfil de uso pré-definido
 */
export interface UsageProfile {
  id: string;
  name: string;
  description: string;
  applianceIds: string[]; // IDs dos aparelhos incluídos
}

/**
 * Interface para recomendação gerada
 */
export interface Recommendation {
  id: string;
  text: string;
  type: 'economia' | 'sustentabilidade' | 'tecnica';
  priority: 'high' | 'medium' | 'low';
}

/**
 * Props para componente ApplianceSelector
 */
export interface ApplianceSelectorProps {
  appliances: Appliance[];
  selectedAppliances: SelectedAppliance[];
  onToggleAppliance: (appliance: Appliance) => void;
  onUpdateQuantity: (applianceId: string, quantity: number) => void;
  onUpdateHours: (applianceId: string, hours: number) => void;
}

/**
 * Props para componente ResultsDisplay
 */
export interface ResultsDisplayProps {
  result: CalculationResult;
}

/**
 * Interface para dados de gráfico do comparador
 */
export interface ComparatorChartData {
  label: string;
  value110V: number;
  value12V: number;
  unit: string;
}

/**
 * Type guard para verificar se é Appliance
 */
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

/**
 * Type guard para verificar se é SelectedAppliance
 */
export const isSelectedAppliance = (obj: unknown): obj is SelectedAppliance => {
  return isAppliance(obj) && 'quantity' in obj && 'hoursPerDay' in obj && 'isSelected' in obj;
};

/**
 * Type guard para verificar se é CalculationResult
 */
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
