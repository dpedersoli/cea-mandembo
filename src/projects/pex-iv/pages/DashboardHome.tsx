import { Link } from 'react-router-dom';
import EnergyFlowPanel from '../components/EnergyFlowPanel';
import SustainabilityHighlights from '../components/SustainabilityHighlights';
import ComparisonTable from '../components/ComparisonTable';
import Button from '@/components/common/Button';
import { dashboardData } from '../data/mockData';
import { ROUTES } from '@/utils/constants';
import './DashboardHome.css';

export default function DashboardHome() {
  const { sources, totalGeneration, totalConsumption, metrics, lastUpdate } = dashboardData;

  return (
    <div className="dashboard-home">
      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="container">
          <h1 className="dashboard-hero__title">
            Dashboard Casa12Volts®
            <span className="dashboard-hero__subtitle">Monitoramento em Tempo Real</span>
          </h1>
          <p className="dashboard-hero__description">
            Acompanhe a geração de energia renovável (solar, eólica e por esforço físico), consumo e
            métricas de sustentabilidade do sistema multivolts em corrente contínua.
          </p>
          <p className="dashboard-hero__update">
            Última atualização: {lastUpdate.toLocaleString('pt-BR')}
          </p>
        </div>
      </section>

      <div className="container">
        {/* Energy Flow Panel */}
        <section className="dashboard-section">
          <h2 className="section-title">Fluxo de Energia</h2>
          <EnergyFlowPanel
            sources={sources}
            totalGeneration={totalGeneration}
            totalConsumption={totalConsumption}
          />
        </section>

        {/* Sustainability Highlights */}
        <section className="dashboard-section">
          <h2 className="section-title">Métricas de Sustentabilidade</h2>
          <SustainabilityHighlights metrics={metrics} />
        </section>

        {/* Comparison Table */}
        <section className="dashboard-section">
          <h2 className="section-title">
            Comparação: Casa12Volts® vs Sistema Convencional (CEMIG)
          </h2>
          <ComparisonTable data={dashboardData.comparisonData || []} />
        </section>

        {/* CTA to Components */}
        <section className="dashboard-cta">
          <div className="cta-card">
            <div className="cta-card__icon">🔧</div>
            <div className="cta-card__content">
              <h3 className="cta-card__title">Explore os Componentes</h3>
              <p className="cta-card__description">
                Conheça em detalhes cada componente do sistema Casa12Volts®: painéis solares,
                turbina eólica, bicicleta geradora, baterias e muito mais.
              </p>
              <Link to={ROUTES.DASHBOARD_COMPONENTS} style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="large">
                  Ver Todos os Componentes
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="dashboard-info">
          <div className="info-cards">
            <div className="info-card info-card--green">
              <div className="info-card__icon">⚡</div>
              <h3 className="info-card__title">92% de Eficiência</h3>
              <p className="info-card__text">
                Sistemas multivolts em CC eliminam perdas de conversão AC/DC, alcançando 92% de
                eficiência contra 75-80% dos sistemas convencionais.
              </p>
            </div>

            <div className="info-card info-card--orange">
              <div className="info-card__icon">🔋</div>
              <h3 className="info-card__title">100% Off-Grid</h3>
              <p className="info-card__text">
                Totalmente independente da rede elétrica (CEMIG), gerando energia através de fontes
                renováveis: solar, eólica e esforço físico humano.
              </p>
            </div>

            <div className="info-card info-card--yellow">
              <div className="info-card__icon">🌱</div>
              <h3 className="info-card__title">156kg CO₂ Evitados/Ano</h3>
              <p className="info-card__text">
                Ao não depender de combustíveis fósseis, o sistema evita a emissão de 156kg de CO₂
                por ano, equivalente a plantar aproximadamente 7 árvores.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
