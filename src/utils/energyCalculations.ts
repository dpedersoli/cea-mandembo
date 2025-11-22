import { ENERGY_CONSTANTS } from './constants';
import type { ConsumptionBreakdown } from '@/types/pex-v.types';

/**
 * Calcula consumo diário em kWh
 */
export const calculateDailyConsumption = (wattage: number, hoursPerDay: number): number => {
  return (wattage * hoursPerDay) / 1000; // Converte Wh para kWh
};

/**
 * Calcula consumo mensal em kWh
 */
export const calculateMonthlyConsumption = (wattage: number, hoursPerDay: number): number => {
  const dailyConsumption = calculateDailyConsumption(wattage, hoursPerDay);
  return dailyConsumption * ENERGY_CONSTANTS.DAYS_PER_MONTH;
};

/**
 * Calcula consumo anual em kWh
 */
export const calculateYearlyConsumption = (wattage: number, hoursPerDay: number): number => {
  const monthlyConsumption = calculateMonthlyConsumption(wattage, hoursPerDay);
  return monthlyConsumption * ENERGY_CONSTANTS.MONTHS_PER_YEAR;
};

/**
 * Calcula breakdown completo de consumo
 */
export const calculateConsumptionBreakdown = (
  wattage: number,
  hoursPerDay: number
): ConsumptionBreakdown => {
  return {
    daily: calculateDailyConsumption(wattage, hoursPerDay),
    monthly: calculateMonthlyConsumption(wattage, hoursPerDay),
    yearly: calculateYearlyConsumption(wattage, hoursPerDay),
  };
};

/**
 * Calcula custo mensal em R$
 */
export const calculateMonthlyCost = (consumptionKWh: number): number => {
  return consumptionKWh * ENERGY_CONSTANTS.ELECTRICITY_COST_PER_KWH;
};

/**
 * Calcula emissões de CO2 anuais em kg
 */
export const calculateYearlyCO2Emissions = (consumptionKWh: number): number => {
  return consumptionKWh * ENERGY_CONSTANTS.CO2_PER_KWH * ENERGY_CONSTANTS.MONTHS_PER_YEAR;
};

/**
 * Calcula percentual de economia
 */
export const calculateSavingsPercentage = (value110V: number, value12V: number): number => {
  if (value110V === 0) return 0;
  return ((value110V - value12V) / value110V) * 100;
};

/**
 * Aplica perdas de conversão para sistemas convencionais
 */
export const applyConversionLosses = (wattage: number): number => {
  return wattage * (1 + ENERGY_CONSTANTS.CONVERSION_LOSS_AC);
};

/**
 * Calcula eficiência do sistema multivolts
 */
export const calculateMultivoltsEfficiency = (wattage: number): number => {
  return wattage * ENERGY_CONSTANTS.MULTIVOLTS_EFFICIENCY;
};

/**
 * Formata valores monetários para exibição
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Formata valores de energia para exibição
 */
export const formatEnergy = (value: number, unit: 'W' | 'kWh' = 'kWh'): string => {
  return `${value.toFixed(2)} ${unit}`;
};

/**
 * Formata valores de CO2 para exibição
 */
export const formatCO2 = (value: number): string => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(2)} toneladas`;
  }
  return `${value.toFixed(2)} kg`;
};

/**
 * Calcula equivalência em árvores plantadas
 */
export const calculateTreeEquivalent = (co2Kg: number): number => {
  // Uma árvore absorve aproximadamente 22kg de CO2 por ano
  const CO2_PER_TREE_YEAR = 22;
  return co2Kg / CO2_PER_TREE_YEAR;
};
