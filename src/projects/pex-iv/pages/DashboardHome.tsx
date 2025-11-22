import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnergyFlowPanel from '../components/EnergyFlowPanel';
import SustainabilityHighlights from '../components/SustainabilityHighlights';
import ComparisonTable from '../components/ComparisonTable';
import Loading from '@/components/common/Loading';
import Button from '@/components/common/Button';
import { dashboardData, comparisonData, energyHistoryWeek } from '../data/mockData';
import { formatLastUpdate } from '../data/helpers';
import { ROUTES } from '@/utils/constants';
import './DashboardHome.css';

export default function DashboardHome() {
  const [data, setData] = useState<typeof dashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setData(dashboardData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading message="Carregando dashboard" size="large" />;
  }

  if (!data) {
    return (
      <div className="error-state">
        <p>Erro ao carregar dados do dashboard.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="container">
          <div className="dashboard-hero__content">
            <h1 className="dashboard-hero__title">
              Dashboard Educativo
              <span className="dashboard-hero__subtitle">Casa12Volts®®</span>
            </h1>
            <p className="dashboard-hero__description">
              Primeira residência multivolts do Brasil operando em corrente contínua (CC). Explore o
              funcionamento, componentes e benefícios deste sistema inovador de energia limpa e
              sustentável.
            </p>
            <div className="dashboard-hero__badges">
              <span className="hero-badge hero-badge--ods7">ODS 7</span>
              <span className="hero-badge hero-badge--ods13">ODS 13</span>
              <span className="hero-badge hero-badge--offgrid">100% Off-Grid</span>
            </div>
          </div>

          <div className="dashboard-hero__stats">
            <div className="stat-card">
              <span className="stat-card__value">{data.totalGeneration.toFixed(2)} kWh</span>
              <span className="stat-card__label">Geração Atual</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">R$ {data.savings}</span>
              <span className="stat-card__label">Economia/mês</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{data.co2Avoided} kg</span>
              <span className="stat-card__label">CO₂ Evitado/ano</span>
            </div>
          </div>

          <p className="dashboard-hero__update">
            Última atualização: {formatLastUpdate(data.lastUpdate)}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* Energy Flow */}
        <EnergyFlowPanel
          sources={data.sources}
          totalGeneration={data.totalGeneration}
          totalConsumption={data.totalConsumption}
        />

        {/* Sustainability Metrics */}
        <SustainabilityHighlights metrics={data.metrics} />

        {/* Comparison Table */}
        <ComparisonTable data={comparisonData} />

        {/* Energy History Preview */}
        <section className="energy-history-preview">
          <h2 className="section-title">Geração dos Últimos 7 Dias</h2>
          <div className="history-cards">
            {energyHistoryWeek.slice(-3).map((day, index) => (
              <div key={index} className="history-card">
                <span className="history-card__date">{day.date}</span>
                <span className="history-card__value">{day.total.toFixed(2)} kWh</span>
                <div className="history-card__breakdown">
                  <span className="breakdown-item">☀️ {day.solar.toFixed(1)}</span>
                  <span className="breakdown-item">💨 {day.eolica.toFixed(1)}</span>
                  <span className="breakdown-item">🚴 {day.bicicleta.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-card__title">Explore os Componentes</h2>
            <p className="cta-card__description">
              Conheça em detalhes cada componente do sistema Casa12Volts®, suas especificações
              técnicas e funcionamento.
            </p>
            <Link to={ROUTES.DASHBOARD_COMPONENTS}>
              <Button variant="primary" size="large">
                Ver Componentes Detalhados
              </Button>
            </Link>
          </div>

          <div className="cta-card">
            <h2 className="cta-card__title">Faça uma Comparação</h2>
            <p className="cta-card__description">
              Use nosso comparador interativo e descubra quanto você economizaria com um sistema
              multivolts.
            </p>
            <Link to={ROUTES.COMPARATOR}>
              <Button variant="secondary" size="large">
                Ir para o Comparador
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">Sobre a Casa12Volts®</h2>
          <div className="about-content">
            <p>
              A Casa12Volts® é um projeto pioneiro desenvolvido pela CEA Mandembo no Centro de
              Educação Ambiental Mandembo, em Rio Manso/MG. Inaugurado em 2012, representa a
              primeira residência no Brasil a operar integralmente com sistema multivolts em
              corrente contínua (1,5V, 5V, 12V, 19V e 24V).
            </p>
            <p>
              O diferencial está na eliminação de conversores AC/DC, reduzindo perdas energéticas de
              20-25% (sistemas convencionais) para apenas 8%. Isso significa maior eficiência, menor
              custo e maior durabilidade dos equipamentos.
            </p>
            <p>
              Além de demonstrar viabilidade técnica, a Casa12Volts® serve como espaço educativo,
              recebendo escolas, universidades e interessados em soluções sustentáveis de energia.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
