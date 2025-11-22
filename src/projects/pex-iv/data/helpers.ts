import type { EnergySource, SustainabilityMetric } from '@/types/pex-iv.types';

/**
 * Calcula porcentagem de uso de capacidade
 */
export const calculateCapacityUsage = (source: EnergySource): number => {
  return (source.currentGeneration / source.capacity) * 100;
};

/**
 * Retorna status da fonte baseado na geração
 */
export const getSourceStatus = (
  source: EnergySource
): 'excellent' | 'good' | 'low' | 'critical' => {
  const usage = calculateCapacityUsage(source);

  if (usage >= 80) return 'excellent';
  if (usage >= 50) return 'good';
  if (usage >= 20) return 'low';
  return 'critical';
};

/**
 * Filtra métricas por ODS
 */
export const filterMetricsByODS = (
  metrics: SustainabilityMetric[],
  odsNumber: number
): SustainabilityMetric[] => {
  return metrics.filter((metric) => metric.odsAlignment?.includes(odsNumber));
};

/**
 * Calcula total de geração por tipo
 */
export const getTotalByType = (
  sources: EnergySource[],
  type: 'solar' | 'eolica' | 'bicicleta'
): number => {
  return sources.filter((s) => s.type === type).reduce((acc, s) => acc + s.currentGeneration, 0);
};

/**
 * Formata última atualização
 */
export const formatLastUpdate = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return 'Agora mesmo';
  if (diffMins === 1) return 'Há 1 minuto';
  if (diffMins < 60) return `Há ${diffMins} minutos`;

  const diffHours = Math.floor(diffMins / 60);
  if (diffHours === 1) return 'Há 1 hora';
  if (diffHours < 24) return `Há ${diffHours} horas`;

  return date.toLocaleDateString('pt-BR');
};
