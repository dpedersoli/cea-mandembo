import { Link } from 'react-router-dom';
import { ROUTES, ODS_INFO } from '@/utils/constants';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* About Section */}
        <div className="footer__section footer__section--about">
          <h2 className="footer__title">Centro de Educação Ambiental Mandembo</h2>
          <p className="footer__description">
            Promovendo autonomia energética e educação ambiental através da inovação tecnológica
            sustentável da Casa12Volts®.
          </p>

          {/* ODS Badges */}
          <div className="footer__ods">
            <h3 className="footer__subtitle">Alinhado com os ODS:</h3>
            <div className="ods-badges">
              <div
                className="ods-badge"
                style={{ backgroundColor: ODS_INFO[7].color }}
                title={`ODS ${ODS_INFO[7].number}: ${ODS_INFO[7].title}`}
              >
                <span className="ods-badge__icon" aria-hidden="true">
                  {ODS_INFO[7].icon}
                </span>
                <span className="ods-badge__number">7</span>
              </div>
              <div
                className="ods-badge"
                style={{ backgroundColor: ODS_INFO[13].color }}
                title={`ODS ${ODS_INFO[13].number}: ${ODS_INFO[13].title}`}
              >
                <span className="ods-badge__icon" aria-hidden="true">
                  {ODS_INFO[13].icon}
                </span>
                <span className="ods-badge__number">13</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h2 className="footer__title">Links Rápidos</h2>
          <nav aria-label="Links do rodapé">
            <ul className="footer__links" role="list">
              <li>
                <Link to={ROUTES.HOME} className="footer__link">
                  Início
                </Link>
              </li>
              <li>
                <Link to={ROUTES.DASHBOARD} className="footer__link">
                  Dashboard Casa12Volts®
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COMPARATOR} className="footer__link">
                  Comparador
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="footer__link">
                  Sobre o Projeto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer__section">
          <h2 className="footer__title">Contato</h2>
          <address className="footer__contact">
            <p>
              <strong>CEA Mandembo</strong>
            </p>
            <p>Rio Manso - MG</p>
            <p>
              Website:{' '}
              <a
                href="https://www.ongverde.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                ongverde.org
              </a>
            </p>
            <p>
              Casa12Volts:{' '}
              <a
                href="https://casa12volts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                casa12volts.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copyright">
            © {currentYear} Centro de Educação Ambiental Mandembo. Todos os direitos reservados.
          </p>
          <p className="footer__credits">
            Projeto desenvolvido por <strong>Daniel Pedersoli Moreira Santos</strong> como parte do
            Projeto de Extensão Universitária - Análise e Desenvolvimento de Sistemas.
          </p>
        </div>
      </div>
    </footer>
  );
}
