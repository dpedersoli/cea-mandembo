/**
 * Funções de cálculo energético
 */

/**
 * Converte Watts para kWh
 */
export const wattsToKwh = (watts: number, hours: number): number => {
  return (watts * hours) / 1000;
};

/**
 * Calcula consumo mensal baseado no diário
 */
export const dailyToMonthly = (dailyKwh: number, days: number = 30): number => {
  return dailyKwh * days;
};

/**
 * Calcula consumo anual baseado no diário
 */
export const dailyToYearly = (dailyKwh: number, days: number = 365): number => {
  return dailyKwh * days;
};

/**
 * Calcula eficiência de conversão AC/DC
 */
export const calculateACDCEfficiency = (inputWatts: number, outputWatts: number): number => {
  if (inputWatts === 0) return 0;
  return (outputWatts / inputWatts) * 100;
};

/**
 * Calcula perdas de conversão
 */
export const calculateConversionLoss = (inputWatts: number, efficiency: number): number => {
  return inputWatts * (1 - efficiency / 100);
};

/**
 * Estima economia mensal em reais
 */
export const calculateMonthlySavings = (
  consumption110V: number,
  consumption12V: number,
  energyRate: number
): number => {
  const difference = consumption110V - consumption12V;
  return difference * energyRate;
};

/**
 * Calcula emissão de CO2 baseado no consumo
 */
export const calculateCO2Emission = (
  kwhConsumed: number,
  emissionFactor: number = 0.0817
): number => {
  return kwhConsumed * emissionFactor; // kg CO2 por kWh
};

/**
 * Converte kg de CO2 para número equivalente de árvores
 */
export const co2ToTrees = (co2Kg: number, absorptionPerTree: number = 22): number => {
  return Math.round(co2Kg / absorptionPerTree);
};

/**
 * Calcula percentual de economia
 */
export const calculateSavingsPercentage = (original: number, saved: number): number => {
  if (original === 0) return 0;
  return (saved / original) * 100;
};

/**
 * Formata valor de energia para exibição
 */
export const formatEnergy = (kwh: number, decimals: number = 2): string => {
  return `${kwh.toFixed(decimals)} kWh`;
};

/**
 * Formata valor monetário para exibição
 */
export const formatMoney = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Formata percentual para exibição
 */
export const formatPercent = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};
