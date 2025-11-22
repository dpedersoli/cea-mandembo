import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES, ARIA_LABELS } from '@/utils/constants';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to={ROUTES.HOME} className="logo-link" onClick={closeMobileMenu}>
            <img
              src="/assets/logo-cea-mandembo.svg"
              alt="Centro de Educação Ambiental Mandembo"
              className="logo-image"
              width="180"
              height="60"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`}
          aria-label={ARIA_LABELS.MAIN_NAV}
        >
          <ul className="nav__list" role="list">
            <li className="nav__item">
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                onClick={closeMobileMenu}
              >
                Início
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={ROUTES.DASHBOARD}
                className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                onClick={closeMobileMenu}
              >
                Dashboard Casa12Volts®
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={ROUTES.COMPARATOR}
                className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                onClick={closeMobileMenu}
              >
                Comparador
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={ROUTES.ABOUT}
                className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                onClick={closeMobileMenu}
              >
                Sobre
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} aria-hidden="true" />
      )}
    </header>
  );
}
