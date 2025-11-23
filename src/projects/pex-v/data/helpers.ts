import type {
  Appliance,
  SelectedAppliance,
  CalculationResult,
  ApplianceCategory,
} from '@/types/pex-v.types';
import { CO2_PER_KWH, ENERGY_RATE_MG } from '@/utils/constants';

/**
 * Converte Appliance para SelectedAppliance com valores padrão
 */
export const toSelectedAppliance = (appliance: Appliance): SelectedAppliance => {
  return {
    ...appliance,
    quantity: 1,
    hoursPerDay: appliance.averageHoursPerDay || 1,
    isSelected: false,
  };
};

/**
 * Calcula consumo diário de um aparelho em kWh
 */
export const calculateDailyConsumption = (
  powerWatts: number,
  hoursPerDay: number,
  quantity: number = 1
): number => {
  return (powerWatts * hoursPerDay * quantity) / 1000; // Converte W para kWh
};

/**
 * Calcula consumo mensal em kWh
 */
export const calculateMonthlyConsumption = (dailyKwh: number): number => {
  return dailyKwh * 30;
};

/**
 * Calcula consumo anual em kWh
 */
export const calculateYearlyConsumption = (dailyKwh: number): number => {
  return dailyKwh * 365;
};

/**
 * Calcula custo mensal baseado no consumo (CEMIG)
 */
export const calculateMonthlyCost = (monthlyKwh: number): number => {
  return monthlyKwh * ENERGY_RATE_MG;
};

/**
 * Calcula CO₂ evitado anualmente em kg
 */
export const calculateCO2Avoided = (yearlyKwh: number): number => {
  return yearlyKwh * CO2_PER_KWH;
};

/**
 * Calcula a comparação completa entre sistemas 110V e 12V
 */
export const calculateComparison = (selectedAppliances: SelectedAppliance[]): CalculationResult => {
  // Filtra apenas aparelhos selecionados
  const activeAppliances = selectedAppliances.filter((a) => a.isSelected);

  // Calcula consumo total diário em 110V
  const dailyConsumption110V = activeAppliances.reduce((total, appliance) => {
    return (
      total +
      calculateDailyConsumption(
        appliance.consumption110V,
        appliance.hoursPerDay,
        appliance.quantity
      )
    );
  }, 0);

  // Calcula consumo total diário em 12V
  const dailyConsumption12V = activeAppliances.reduce((total, appliance) => {
    return (
      total +
      calculateDailyConsumption(appliance.consumption12V, appliance.hoursPerDay, appliance.quantity)
    );
  }, 0);

  // Calcula consumos mensais e anuais
  const monthlyConsumption110V = calculateMonthlyConsumption(dailyConsumption110V);
  const yearlyConsumption110V = calculateYearlyConsumption(dailyConsumption110V);

  const monthlyConsumption12V = calculateMonthlyConsumption(dailyConsumption12V);
  const yearlyConsumption12V = calculateYearlyConsumption(dailyConsumption12V);

  // Calcula custos mensais (CEMIG)
  const monthlyCost110V = calculateMonthlyCost(monthlyConsumption110V);
  const monthlyCost12V = calculateMonthlyCost(monthlyConsumption12V);

  // Calcula economia
  const monthlySavings = monthlyCost110V - monthlyCost12V;
  const savingsPercentage = monthlyCost110V > 0 ? (monthlySavings / monthlyCost110V) * 100 : 0;

  // Calcula CO₂ evitado (diferença anual)
  const co2_110V = calculateCO2Avoided(yearlyConsumption110V);
  const co2_12V = calculateCO2Avoided(yearlyConsumption12V);
  const yearlyCO2Avoided = co2_110V - co2_12V;

  return {
    consumption110V: {
      daily: dailyConsumption110V,
      monthly: monthlyConsumption110V,
      yearly: yearlyConsumption110V,
    },
    consumption12V: {
      daily: dailyConsumption12V,
      monthly: monthlyConsumption12V,
      yearly: yearlyConsumption12V,
    },
    monthlyCost110V,
    monthlyCost12V,
    monthlySavings,
    savingsPercentage,
    yearlyCO2Avoided,
    appliances: activeAppliances,
  };
};

/**
 * Filtra aparelhos por categoria
 */
export const filterAppliancesByCategory = (
  appliances: Appliance[],
  category: ApplianceCategory
): Appliance[] => {
  return appliances.filter((a) => a.category === category);
};

/**
 * Busca aparelhos por texto
 */
export const searchAppliances = (appliances: Appliance[], query: string): Appliance[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return appliances;

  return appliances.filter(
    (a) =>
      a.name.toLowerCase().includes(lowerQuery) || a.description?.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Gera recomendações baseadas nos resultados
 */
export const generateRecommendations = (result: CalculationResult): string[] => {
  const recommendations: string[] = [];

  // Recomendação de economia
  if (result.savingsPercentage > 30) {
    recommendations.push(
      `Você pode economizar ${result.savingsPercentage.toFixed(0)}% na conta de luz (CEMIG) usando sistema 12V CC!`
    );
  }

  // Recomendação de sustentabilidade
  if (result.yearlyCO2Avoided > 50) {
    recommendations.push(
      `Ao adotar o sistema 12V, você evitaria ${result.yearlyCO2Avoided.toFixed(0)}kg de CO₂ por ano, equivalente a plantar aproximadamente ${Math.round(result.yearlyCO2Avoided / 22)} árvores.`
    );
  }

  // Recomendação técnica
  const hasHighPowerAppliances = result.appliances.some((a) => a.consumption110V > 1000);
  if (hasHighPowerAppliances) {
    recommendations.push(
      'Aparelhos de alta potência (como chuveiro e micro-ondas) têm maior economia em sistemas 12V devido à eliminação de perdas de conversão.'
    );
  }

  // Recomendação de economia mensal
  if (result.monthlySavings > 100) {
    recommendations.push(
      `Com uma economia mensal de R$ ${result.monthlySavings.toFixed(2)}, o investimento em sistema 12V pode se pagar em poucos anos.`
    );
  }

  return recommendations;
};

/**
 * Formata número de consumo para exibição
 */
export const formatConsumption = (kwh: number): string => {
  return `${kwh.toFixed(2)} kWh`;
};

/**
 * Formata valor monetário para exibição
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Formata porcentagem para exibição
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
