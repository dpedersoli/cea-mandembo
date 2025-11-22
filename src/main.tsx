import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/accessibility.css';

// Verificar se o elemento root existe
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Criar e renderizar a aplicação
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
