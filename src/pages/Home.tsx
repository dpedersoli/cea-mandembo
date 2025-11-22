import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { ROUTES, ODS_INFO, CEA_INFO } from '@/utils/constants';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Centro de Educação Ambiental
              <span className="hero__subtitle">Mandembo</span>
            </h1>
            <p className="hero__description">
              Explore a inovação da <strong>Casa12Volts®</strong>, primeira residência multivolts
              do Brasil operando 100% em corrente contínua (1,5V, 3V, 5V, 12V, 19V e 24V). Descubra
              como a tecnologia pode transformar o acesso à energia limpa e sustentável.
            </p>
            <div className="hero__badges">
              <span className="hero-badge">100% Off-Grid</span>
              <span className="hero-badge">92% Eficiência</span>
              <span className="hero-badge">Energia Limpa</span>
            </div>
            <div className="hero__buttons">
              <Link to={ROUTES.DASHBOARD}>
                <Button variant="primary" size="large">
                  Explorar Dashboard
                </Button>
              </Link>
              <Link to={ROUTES.COMPARATOR}>
                <Button variant="secondary" size="large">
                  Fazer Comparação
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-placeholder">
              <span className="placeholder-icon" aria-hidden="true">
                🏡⚡
              </span>
              <span className="placeholder-text">Casa12Volts®</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Projetos Interativos</h2>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-card__icon">📊</div>
              <h3 className="feature-card__title">Dashboard Educativo</h3>
              <p className="feature-card__description">
                Visualize em tempo real o funcionamento da Casa12Volts®: geração de energia solar,
                eólica e por esforço físico (Pedal Sustentável), além de métricas de
                sustentabilidade.
              </p>
              <Link to={ROUTES.DASHBOARD} className="feature-card__link">
                Acessar Dashboard →
              </Link>
            </article>

            <article className="feature-card">
              <div className="feature-card__icon">⚖️</div>
              <h3 className="feature-card__title">Comparador Interativo</h3>
              <p className="feature-card__description">
                Compare sistemas de 12V CC com 110V/220V CA. Descubra quanto você economizaria em
                energia, custos (CEMIG) e redução de CO₂.
              </p>
              <Link to={ROUTES.COMPARATOR} className="feature-card__link">
                Fazer Comparação →
              </Link>
            </article>

            <article className="feature-card">
              <div className="feature-card__icon">🌱</div>
              <h3 className="feature-card__title">Educação Ambiental</h3>
              <p className="feature-card__description">
                Aprenda sobre energias renováveis, eficiência energética e como a tecnologia pode
                contribuir para um futuro sustentável.
              </p>
              <Link to={ROUTES.ABOUT} className="feature-card__link">
                Saiba Mais →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section className="ods-section">
        <div className="container">
          <h2 className="section-title">
            Alinhado com os Objetivos de Desenvolvimento Sustentável
          </h2>
          <div className="ods-cards">
            <div className="ods-card" style={{ borderColor: ODS_INFO[7].color }}>
              <div className="ods-card__icon" style={{ backgroundColor: ODS_INFO[7].color }}>
                <span aria-hidden="true">{ODS_INFO[7].icon}</span>
                <span className="ods-number">{ODS_INFO[7].number}</span>
              </div>
              <div className="ods-card__content">
                <h3 className="ods-card__title">{ODS_INFO[7].title}</h3>
                <p className="ods-card__description">{ODS_INFO[7].description}</p>
              </div>
            </div>

            <div className="ods-card" style={{ borderColor: ODS_INFO[13].color }}>
              <div className="ods-card__icon" style={{ backgroundColor: ODS_INFO[13].color }}>
                <span aria-hidden="true">{ODS_INFO[13].icon}</span>
                <span className="ods-number">{ODS_INFO[13].number}</span>
              </div>
              <div className="ods-card__content">
                <h3 className="ods-card__title">{ODS_INFO[13].title}</h3>
                <p className="ods-card__description">{ODS_INFO[13].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-box__value">92%</span>
              <span className="stat-box__label">Eficiência Energética</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__value">100%</span>
              <span className="stat-box__label">Off-Grid</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__value">156kg</span>
              <span className="stat-box__label">CO₂ Evitado/ano</span>
            </div>
            <div className="stat-box">
              <span className="stat-box__value">2012</span>
              <span className="stat-box__label">Ano de Criação</span>
            </div>
          </div>
        </div>
      </section>

      {/* CEA Info */}
      <section className="cea-info">
        <div className="container">
          <h2 className="section-title">Sobre o CEA Mandembo</h2>
          <div className="cea-info__content">
            <p className="cea-info__text">
              O <strong>{CEA_INFO.name}</strong>, localizado em {CEA_INFO.location}, possui uma área
              de <strong>{CEA_INFO.area}</strong>. Apenas cerca de{' '}
              <strong>{CEA_INFO.usedArea}</strong> são dedicados às atividades socioambientais,
              enquanto <strong>{CEA_INFO.preservedArea}</strong> abrigam uma nascente e são
              destinados à preservação ambiental.
            </p>
            <p className="cea-info__text">
              Desde {CEA_INFO.foundedYear}, o centro se dedica à educação ambiental, agroecologia e
              desenvolvimento de tecnologias sustentáveis, recebendo escolas, universidades e
              interessados em soluções de energia limpa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
