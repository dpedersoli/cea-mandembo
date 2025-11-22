import { Link } from 'react-router-dom';
import { ROUTES, CEA_INFO, ODS_INFO } from '@/utils/constants';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Sobre */}
          <div className="footer__section">
            <h3 className="footer__title">CEA Mandembo</h3>
            <p className="footer__text">
              Centro de Educação Ambiental dedicado à sustentabilidade e tecnologias de energia
              limpa através da Casa12Volts®, primeira residência multivolts do Brasil.
            </p>
            <div className="footer__social">
              <a
                href="https://www.ongverde.org"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="CEA Mandembo"
              >
                🌿 CEA Mandembo
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer__section">
            <h3 className="footer__title">Links Rápidos</h3>
            <nav className="footer__links" aria-label="Links do rodapé">
              <Link to={ROUTES.HOME} className="footer__link">
                Início
              </Link>
              <Link to={ROUTES.DASHBOARD} className="footer__link">
                Dashboard
              </Link>
              <Link to={ROUTES.COMPARATOR} className="footer__link">
                Comparador
              </Link>
              <Link to={ROUTES.ABOUT} className="footer__link">
                Sobre o Projeto
              </Link>
              <Link to={ROUTES.DASHBOARD_COMPONENTS} className="footer__link">
                Componentes
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="footer__section">
            <h3 className="footer__title">Contato</h3>
            <div className="footer__contact">
              <p className="footer__contact-item">📍 {CEA_INFO.location}</p>
              <p className="footer__contact-item">
                🌐{' '}
                <a
                  href={CEA_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {CEA_INFO.website.replace('https://www.', '')}
                </a>
              </p>
              <p className="footer__contact-item">
                ⚡{' '}
                <a
                  href={CEA_INFO.casa12VoltsWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Casa12Volts®
                </a>
              </p>
            </div>
          </div>

          {/* ODS */}
          <div className="footer__section">
            <h3 className="footer__title">ODS Alinhados</h3>
            <div className="footer__ods">
              <div className="ods-badge-small" style={{ backgroundColor: ODS_INFO[7].color }}>
                {ODS_INFO[7].icon} {ODS_INFO[7].number}
              </div>
              <div className="ods-badge-small" style={{ backgroundColor: ODS_INFO[13].color }}>
                {ODS_INFO[13].icon} {ODS_INFO[13].number}
              </div>
            </div>
            <p className="footer__text footer__text--small">
              Alinhado com os Objetivos de Desenvolvimento Sustentável da ONU
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {CEA_INFO.shortName} - Todos os direitos reservados
          </p>
          <p className="footer__developer">
            Desenvolvido por <strong>Daniel Pedersoli Moreira Santos</strong> | Projeto de Extensão
            - Análise e Desenvolvimento de Sistemas
          </p>
        </div>
      </div>
    </footer>
  );
}
