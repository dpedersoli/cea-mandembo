export const wattsToKwh = (watts: number, hours: number): number => {
  return (watts * hours) / 1000;
};

export const dailyToMonthly = (dailyKwh: number, days: number = 30): number => {
  return dailyKwh * days;
};

export const dailyToYearly = (dailyKwh: number, days: number = 365): number => {
  return dailyKwh * days;
};

export const calculateACDCEfficiency = (inputWatts: number, outputWatts: number): number => {
  if (inputWatts === 0) return 0;
  return (outputWatts / inputWatts) * 100;
};

export const calculateConversionLoss = (inputWatts: number, efficiency: number): number => {
  return inputWatts * (1 - efficiency / 100);
};

export const calculateMonthlySavings = (
  consumption110V: number,
  consumption12V: number,
  energyRate: number
): number => {
  const difference = consumption110V - consumption12V;
  return difference * energyRate;
};

export const calculateCO2Emission = (
  kwhConsumed: number,
  emissionFactor: number = 0.0817
): number => {
  return kwhConsumed * emissionFactor; // kg CO2 por kWh
};

export const co2ToTrees = (co2Kg: number, absorptionPerTree: number = 22): number => {
  return Math.round(co2Kg / absorptionPerTree);
};

export const calculateSavingsPercentage = (original: number, saved: number): number => {
  if (original === 0) return 0;
  return (saved / original) * 100;
};

export const formatEnergy = (kwh: number, decimals: number = 2): string => {
  return `${kwh.toFixed(decimals)} kWh`;
};

export const formatMoney = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatPercent = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};
