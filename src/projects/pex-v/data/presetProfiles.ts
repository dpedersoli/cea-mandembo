import type { SelectedAppliance } from '@/types/pex-v.types';
import { appliancesDatabase } from './appliancesData';
import { toSelectedAppliance } from './helpers';

/**
 * Perfis pré-definidos de uso
 */
export interface UsageProfile {
  id: string;
  name: string;
  description: string;
  applianceIds: string[];
}

export const usageProfiles: UsageProfile[] = [
  {
    id: 'basico',
    name: 'Uso Básico',
    description: 'Iluminação, geladeira e eletrônicos essenciais',
    applianceIds: [
      'Lâmpada LED 9W',
      'Lâmpada LED 5W',
      'Geladeira Compacta 70L',
      'Notebook',
      'Roteador Wi-Fi',
      'Carregador USB (5V)',
    ],
  },
  {
    id: 'intermediario',
    name: 'Uso Intermediário',
    description: 'Adiciona ventilação, TV e mais iluminação',
    applianceIds: [
      'Lâmpada LED 9W',
      'Lâmpada LED 5W',
      'Fita LED 5m',
      'Geladeira Compacta 70L',
      'Ventilador de Mesa',
      'Notebook',
      'TV LED 32"',
      'Roteador Wi-Fi',
      'Carregador USB (5V)',
    ],
  },
  {
    id: 'completo',
    name: 'Uso Completo',
    description: 'Casa completa com todos os recursos',
    applianceIds: [
      'Lâmpada LED 9W',
      'Lâmpada LED 5W',
      'Fita LED 5m',
      'Geladeira Compacta 70L',
      'Freezer 100L',
      'Ventilador de Mesa',
      'Ventilador de Teto',
      'Liquidificador',
      "Bomba d'Água 1/4 CV",
      'Notebook',
      'TV LED 32"',
      'Roteador Wi-Fi',
      'Carregador USB (5V)',
      'Câmera de Segurança',
    ],
  },
];

/**
 * Carrega perfil pré-definido
 */
export const loadProfile = (profileId: string): SelectedAppliance[] => {
  const profile = usageProfiles.find((p) => p.id === profileId);
  if (!profile) return [];

  const selectedAppliances: SelectedAppliance[] = [];

  profile.applianceIds.forEach((name) => {
    const appliance = appliancesDatabase.find((a) => a.name === name);
    if (appliance) {
      const selected = toSelectedAppliance(appliance);
      selected.isSelected = true;
      selectedAppliances.push(selected);
    }
  });

  return selectedAppliances;
};
