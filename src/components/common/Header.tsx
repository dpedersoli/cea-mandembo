import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from '@/utils/constants';
import './Header.css';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const nav = document.querySelector('.header__nav');
    const btn = document.querySelector('.mobile-menu-btn');

    if (nav?.classList.contains('header__nav--open')) {
      nav.classList.remove('header__nav--open');
      btn?.setAttribute('aria-expanded', 'false');
      btn?.setAttribute('aria-label', 'Abrir menu');
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    const nav = document.querySelector('.header__nav');
    const btn = document.querySelector('.mobile-menu-btn');
    nav?.classList.toggle('header__nav--open');
    const isOpen = nav?.classList.contains('header__nav--open');
    btn?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn?.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="header__logo">
            <img src="/logo_tab_mandembo.svg" alt="Logo CEA Mandembo" className="logo-icon" />
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
            >
              Início
            </Link>
            <Link
              to={ROUTES.DASHBOARD}
              className={`nav-link ${isActive(ROUTES.DASHBOARD) ? 'nav-link--active' : ''}`}
            >
              Dashboard
            </Link>
            <Link
              to={ROUTES.COMPARATOR}
              className={`nav-link ${isActive(ROUTES.COMPARATOR) ? 'nav-link--active' : ''}`}
            >
              Comparador
            </Link>
            <Link
              to={ROUTES.ABOUT}
              className={`nav-link ${isActive(ROUTES.ABOUT) ? 'nav-link--active' : ''}`}
            >
              Sobre
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            aria-label="Abrir menu"
            aria-expanded="false"
            onClick={toggleMenu}
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
