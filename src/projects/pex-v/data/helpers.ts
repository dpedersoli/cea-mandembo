import type { Appliance, SelectedAppliance, CalculationResult } from '@/types/pex-v.types';
import {
  calculateConsumptionBreakdown,
  calculateMonthlyCost,
  calculateYearlyCO2Emissions,
  calculateSavingsPercentage,
  calculateTreeEquivalent,
} from '@/utils/energyCalculations';

/**
 * Converte Appliance para SelectedAppliance
 */
export const toSelectedAppliance = (appliance: Appliance): SelectedAppliance => {
  return {
    ...appliance,
    quantity: 1,
    hoursPerDay: appliance.defaultHoursPerDay,
    isSelected: false,
  };
};

/**
 * Calcula consumo total de um aparelho (considerando quantidade)
 */
export const calculateApplianceTotalConsumption = (
  appliance: SelectedAppliance,
  voltage: '110V' | '12V'
): number => {
  const wattage = voltage === '110V' ? appliance.consumption110V : appliance.consumption12V;
  const breakdown = calculateConsumptionBreakdown(
    wattage * appliance.quantity,
    appliance.hoursPerDay
  );
  return breakdown.monthly;
};

/**
 * Calcula resultado completo da comparação
 */
export const calculateComparison = (selectedAppliances: SelectedAppliance[]): CalculationResult => {
  // Consumo total em 110V
  const totalConsumption110V = selectedAppliances.reduce((acc, app) => {
    return acc + calculateApplianceTotalConsumption(app, '110V');
  }, 0);

  // Consumo total em 12V
  const totalConsumption12V = selectedAppliances.reduce((acc, app) => {
    return acc + calculateApplianceTotalConsumption(app, '12V');
  }, 0);

  // Breakdowns
  const consumption110V = {
    daily: totalConsumption110V / 30,
    monthly: totalConsumption110V,
    yearly: totalConsumption110V * 12,
  };

  const consumption12V = {
    daily: totalConsumption12V / 30,
    monthly: totalConsumption12V,
    yearly: totalConsumption12V * 12,
  };

  // Custos
  const monthlyCost110V = calculateMonthlyCost(totalConsumption110V);
  const monthlyCost12V = calculateMonthlyCost(totalConsumption12V);
  const monthlySavings = monthlyCost110V - monthlyCost12V;
  const savingsPercentage = calculateSavingsPercentage(monthlyCost110V, monthlyCost12V);

  // CO2
  const yearlyCO2_110V = calculateYearlyCO2Emissions(totalConsumption110V);
  const yearlyCO2_12V = calculateYearlyCO2Emissions(totalConsumption12V);
  const yearlyCO2Avoided = yearlyCO2_110V - yearlyCO2_12V;

  return {
    appliances: selectedAppliances,
    consumption110V,
    consumption12V,
    monthlyCost110V,
    monthlyCost12V,
    monthlySavings,
    savingsPercentage,
    yearlyCO2Avoided,
    yearlyCO2Saved: yearlyCO2Avoided,
  };
};

/**
 * Filtra aparelhos por categoria
 */
export const filterAppliancesByCategory = (
  appliances: Appliance[],
  category: string
): Appliance[] => {
  if (category === 'all') return appliances;
  return appliances.filter((app) => app.category === category);
};

/**
 * Busca aparelhos por texto
 */
export const searchAppliances = (appliances: Appliance[], query: string): Appliance[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return appliances;

  return appliances.filter(
    (app) =>
      app.name.toLowerCase().includes(lowerQuery) ||
      app.description?.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Ordena aparelhos por consumo
 */
export const sortAppliancesByConsumption = (
  appliances: Appliance[],
  order: 'asc' | 'desc' = 'desc'
): Appliance[] => {
  return [...appliances].sort((a, b) => {
    const diff = a.consumption110V - b.consumption110V;
    return order === 'asc' ? diff : -diff;
  });
};

/**
 * Calcula equivalência em árvores
 */
export const calculateTreeEquivalence = (co2Kg: number): number => {
  return calculateTreeEquivalent(co2Kg);
};

/**
 * Gera recomendações personalizadas
 */
export const generateRecommendations = (result: CalculationResult): string[] => {
  const recommendations: string[] = [];

  // Economia alta
  if (result.monthlySavings > 200) {
    recommendations.push(
      'Excelente economia! Com esse perfil de consumo, um sistema Casa12Volts® se pagaria em 5-7 anos.'
    );
  }

  // Alto consumo
  if (result.consumption110V.monthly > 300) {
    recommendations.push(
      'Seu consumo é alto. Considere priorizar a conversão dos aparelhos que mais consomem para versões 12V CC.'
    );
  }

  // Iluminação
  const hasLighting = result.appliances.some((a) => a.category === 'iluminacao');
  if (hasLighting) {
    recommendations.push(
      'Iluminação LED em 12V é a conversão mais fácil e eficiente. Comece por ela!'
    );
  }

  // Eletrônicos
  const hasElectronics = result.appliances.some((a) => a.category === 'eletronicos');
  if (hasElectronics) {
    recommendations.push(
      'Eletrônicos já operam internamente em CC. Usar adaptadores 12V elimina perdas dos carregadores AC.'
    );
  }

  // CO2 significativo
  if (result.yearlyCO2Avoided > 100) {
    const trees = calculateTreeEquivalent(result.yearlyCO2Avoided);
    recommendations.push(
      `Você evitaria ${result.yearlyCO2Avoided.toFixed(0)}kg de CO₂ por ano, equivalente a plantar ${trees.toFixed(0)} árvores!`
    );
  }

  return recommendations;
};
