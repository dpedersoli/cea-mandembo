import type { SelectedAppliance } from '@/types/pex-v.types';
import { appliancesDatabase } from './appliancesData';
import { toSelectedAppliance } from './helpers';

export const loadProfile = (profileId: string): SelectedAppliance[] => {
  const profiles: Record<string, () => SelectedAppliance[]> = {
    basico: loadBasicProfile,
    padrao: loadStandardProfile,
    completo: loadCompleteProfile,
  };

  const profileLoader = profiles[profileId];
  return profileLoader ? profileLoader() : [];
};

const loadBasicProfile = (): SelectedAppliance[] => {
  const selectedNames = [
    'Lâmpada LED 9W (equivalente 60W)',
    'Geladeira 1 Porta (250L)',
    'TV LED 32"',
    'Roteador Wi-Fi',
    'Ventilador de Mesa',
  ];

  return appliancesDatabase
    .filter((a) => selectedNames.includes(a.name))
    .map((appliance) => {
      const selected = toSelectedAppliance(appliance);
      selected.isSelected = true;

      if (appliance.name.includes('Lâmpada')) {
        selected.quantity = 5;
      } else if (appliance.name.includes('Ventilador')) {
        selected.quantity = 2;
      }

      return selected;
    });
};

const loadStandardProfile = (): SelectedAppliance[] => {
  const selectedNames = [
    'Lâmpada LED 9W (equivalente 60W)',
    'Lâmpada LED 15W (equivalente 100W)',
    'Geladeira 2 Portas (400L)',
    'Liquidificador',
    'Micro-ondas',
    'TV LED 32"',
    'TV LED 50"',
    'Notebook',
    'Roteador Wi-Fi',
    'Carregador de Celular',
    'Ventilador de Teto',
    'Ferro de Passar',
  ];

  return appliancesDatabase
    .filter((a) => selectedNames.includes(a.name))
    .map((appliance) => {
      const selected = toSelectedAppliance(appliance);
      selected.isSelected = true;

      if (appliance.name.includes('Lâmpada LED 9W')) {
        selected.quantity = 6;
      } else if (appliance.name.includes('Lâmpada LED 15W')) {
        selected.quantity = 3;
      } else if (appliance.name.includes('TV LED 32"')) {
        selected.quantity = 2;
      } else if (appliance.name.includes('Carregador')) {
        selected.quantity = 3;
      } else if (appliance.name.includes('Ventilador de Teto')) {
        selected.quantity = 2;
      }

      return selected;
    });
};

const loadCompleteProfile = (): SelectedAppliance[] => {
  const selectedNames = [
    'Lâmpada LED 9W (equivalente 60W)',
    'Lâmpada LED 15W (equivalente 100W)',
    'Geladeira 2 Portas (400L)',
    'Freezer Horizontal (300L)',
    'Liquidificador',
    'Micro-ondas',
    'Cafeteira Elétrica',
    'Torradeira',
    'TV LED 32"',
    'TV LED 50"',
    'Computador Desktop',
    'Notebook',
    'Roteador Wi-Fi',
    'Carregador de Celular',
    'Videogame Console',
    'Ventilador de Teto',
    'Ar Condicionado 9000 BTU',
    'Ferro de Passar',
    'Aspirador de Pó',
    "Bomba d'Água",
    'Câmera de Segurança',
  ];

  return appliancesDatabase
    .filter((a) => selectedNames.includes(a.name))
    .map((appliance) => {
      const selected = toSelectedAppliance(appliance);
      selected.isSelected = true;

      if (appliance.name.includes('Lâmpada LED 9W')) {
        selected.quantity = 8;
      } else if (appliance.name.includes('Lâmpada LED 15W')) {
        selected.quantity = 4;
      } else if (appliance.name.includes('TV LED 32"')) {
        selected.quantity = 2;
      } else if (appliance.name.includes('Carregador')) {
        selected.quantity = 4;
      } else if (appliance.name.includes('Ventilador de Teto')) {
        selected.quantity = 3;
      } else if (appliance.name.includes('Ar Condicionado')) {
        selected.quantity = 2;
      } else if (appliance.name.includes('Câmera')) {
        selected.quantity = 4;
      }

      return selected;
    });
};
