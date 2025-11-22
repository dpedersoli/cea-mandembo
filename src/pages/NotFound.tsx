import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { ROUTES } from '@/utils/constants';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <div className="not-found__icon">🔍</div>
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Página não encontrada</h2>
          <p className="not-found__description">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <div className="not-found__actions">
            <Link to={ROUTES.HOME}>
              <Button variant="primary" size="large">
                Voltar para Início
              </Button>
            </Link>
            <Link to={ROUTES.DASHBOARD}>
              <Button variant="secondary" size="large">
                Ir para Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
