import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import './Header.css';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {/* Logo e Nome */}
          <Link to={ROUTES.HOME} className="header__logo" style={{ textDecoration: 'none' }}>
            <div className="logo-icon">🏡⚡</div>
            <div className="logo-text">
              <span className="logo-title">CEA Mandembo</span>
              <span className="logo-subtitle">Casa12Volts®</span>
            </div>
          </Link>

          {/* Navegação */}
          <nav className="header__nav" aria-label="Navegação principal">
            <Link
              to={ROUTES.HOME}
              className={`nav-link ${isActive(ROUTES.HOME) ? 'nav-link--active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              Início
            </Link>
            <Link
              to={ROUTES.DASHBOARD}
              className={`nav-link ${isActive(ROUTES.DASHBOARD) ? 'nav-link--active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              Dashboard
            </Link>
            <Link
              to={ROUTES.COMPARATOR}
              className={`nav-link ${isActive(ROUTES.COMPARATOR) ? 'nav-link--active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              Comparador
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className={`nav-link ${isActive(ROUTES.ABOUT) ? 'nav-link--active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              Sobre
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            aria-label="Abrir menu"
            aria-expanded="false"
            onClick={(e) => {
              const nav = document.querySelector('.header__nav');
              const btn = e.currentTarget;
              nav?.classList.toggle('header__nav--open');
              const isOpen = nav?.classList.contains('header__nav--open');
              btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
              btn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
