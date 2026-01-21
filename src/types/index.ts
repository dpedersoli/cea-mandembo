export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export type Theme = 'light' | 'dark' | 'auto';

export interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
}
