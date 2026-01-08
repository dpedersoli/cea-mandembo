import type { EnergySource, SystemComponent, ComparisonData } from '@/types/pex-iv.types';

export const filterComponentsByCategory = (
  components: SystemComponent[],
  category: string
): SystemComponent[] => {
  if (category === 'all') return components;
  return components.filter((c) => c.category === category);
};

export const searchComponents = (
  components: SystemComponent[],
  query: string
): SystemComponent[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return components;

  return components.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.voltage.toLowerCase().includes(lowerQuery)
  );
};

export const calculateTotalGeneration = (sources: EnergySource[]): number => {
  return sources.reduce((total, source) => total + source.currentGeneration, 0);
};

export const calculateTotalCapacity = (sources: EnergySource[]): number => {
  return sources.reduce((total, source) => total + source.capacity, 0);
};

export const calculateAverageEfficiency = (sources: EnergySource[]): number => {
  if (sources.length === 0) return 0;

  const totalCapacity = calculateTotalCapacity(sources);
  if (totalCapacity === 0) return 0;

  const weightedSum = sources.reduce((sum, source) => sum + source.efficiency * source.capacity, 0);

  return weightedSum / totalCapacity;
};

export const sortComponentsByName = (components: SystemComponent[]): SystemComponent[] => {
  return [...components].sort((a, b) => a.name.localeCompare(b.name));
};

export const groupComponentsByCategory = (
  components: SystemComponent[]
): Record<string, SystemComponent[]> => {
  return components.reduce(
    (groups, component) => {
      const category = component.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(component);
      return groups;
    },
    {} as Record<string, SystemComponent[]>
  );
};

export const calculatePercentageDifference = (value1: number, value2: number): number => {
  if (value2 === 0) return 0;
  return ((value1 - value2) / value2) * 100;
};

export const formatVoltage = (voltage: string): string => {
  return voltage.replace('CC', 'CC').replace('CA', 'CA');
};

export const extractNumericValue = (value: string): number => {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

export const generateComparisonDescription = (data: ComparisonData): string => {
  const value12V = extractNumericValue(data.casa12V);
  const valueConv = extractNumericValue(data.convencional);

  if (value12V < valueConv) {
    const diff = valueConv - value12V;
    const percent = ((diff / valueConv) * 100).toFixed(0);
    return `${percent}% melhor`;
  } else if (value12V > valueConv) {
    const diff = value12V - valueConv;
    const percent = ((diff / value12V) * 100).toFixed(0);
    return `${percent}% pior`;
  }

  return 'Similar';
};
