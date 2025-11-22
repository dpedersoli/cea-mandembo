import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { router } from './router';
import { getAccessibilityPreferences } from '@/utils/helpers';
import './App.css';

function App() {
  useEffect(() => {
    // Detectar preferências de acessibilidade do sistema
    const preferences = getAccessibilityPreferences();

    // Aplicar classe no documento para acessibilidade
    if (preferences.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }

    if (preferences.highContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    if (preferences.darkMode) {
      document.documentElement.classList.add('dark-mode');
    }

    // Listener para mudanças de preferências
    const mediaQueries = {
      motion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      contrast: window.matchMedia('(prefers-contrast: high)'),
      theme: window.matchMedia('(prefers-color-scheme: dark)'),
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('reduce-motion', e.matches);
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('high-contrast', e.matches);
    };

    const handleThemeChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark-mode', e.matches);
    };

    mediaQueries.motion.addEventListener('change', handleMotionChange);
    mediaQueries.contrast.addEventListener('change', handleContrastChange);
    mediaQueries.theme.addEventListener('change', handleThemeChange);

    // Cleanup
    return () => {
      mediaQueries.motion.removeEventListener('change', handleMotionChange);
      mediaQueries.contrast.removeEventListener('change', handleContrastChange);
      mediaQueries.theme.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
