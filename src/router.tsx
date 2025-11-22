import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SuspenseWrapper from '@/components/common/SuspenseWrapper';
import { ROUTES } from '@/utils/constants';

// Lazy loading das páginas principais
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// PEX IV - Dashboard Educativo
const DashboardHome = lazy(() => import('@/projects/pex-iv/pages/DashboardHome'));
const ComponentsDetail = lazy(() => import('@/projects/pex-iv/pages/ComponentsDetail'));

// PEX V - Comparador Educativo
const ComparatorHome = lazy(() => import('@/projects/pex-v/pages/ComparatorHome'));

/**
 * Configuração principal de rotas
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      // Página Inicial
      {
        index: true,
        element: (
          <SuspenseWrapper fallbackMessage="Carregando página inicial">
            <Home />
          </SuspenseWrapper>
        ),
      },

      // Sobre
      {
        path: 'sobre',
        element: (
          <SuspenseWrapper fallbackMessage="Carregando informações">
            <About />
          </SuspenseWrapper>
        ),
      },

      // PEX IV - Dashboard Educativo Casa12Volts®
      {
        path: 'dashboard',
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper fallbackMessage="Carregando dashboard">
                <DashboardHome />
              </SuspenseWrapper>
            ),
          },
          {
            path: 'componentes',
            element: (
              <SuspenseWrapper fallbackMessage="Carregando componentes">
                <ComponentsDetail />
              </SuspenseWrapper>
            ),
          },
        ],
      },

      // PEX V - Comparador Educativo
      {
        path: 'comparador',
        element: (
          <SuspenseWrapper fallbackMessage="Carregando comparador">
            <ComparatorHome />
          </SuspenseWrapper>
        ),
      },

      // Redirect para 404 se rota não encontrada
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
    ],
  },

  // Página 404
  {
    path: '/404',
    element: <NotFound />,
  },
]);

// Type-safe navigation helper
export const navigate = {
  home: () => ROUTES.HOME,
  about: () => ROUTES.ABOUT,
  dashboard: () => ROUTES.DASHBOARD,
  dashboardComponents: () => ROUTES.DASHBOARD_COMPONENTS,
  comparator: () => ROUTES.COMPARATOR,
} as const;
