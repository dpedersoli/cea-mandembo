import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Página não encontrada</h2>
          <p className="not-found__description">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link to={ROUTES.HOME} className="not-found__button">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
