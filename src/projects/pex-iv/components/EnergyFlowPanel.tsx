import type { EnergyFlowPanelProps } from '@/types/pex-iv.types';
import './EnergyFlowPanel.css';

export default function EnergyFlowPanel({
  sources,
  totalGeneration,
  totalConsumption,
}: EnergyFlowPanelProps) {
  const energyBalance = totalGeneration - totalConsumption;
  const balancePercentage = totalGeneration > 0 ? (energyBalance / totalGeneration) * 100 : 0;

  return (
    <div className="energy-flow-panel">
      <div className="sources-grid">
        {sources.map((source) => {
          const utilizationPercentage = (source.currentGeneration / source.capacity) * 100;

          return (
            <div key={source.id} className="source-card">
              <div className="source-card__header">
                <span className="source-card__icon">{source.icon}</span>
                <h3 className="source-card__title">{source.name}</h3>
              </div>

              <div className="source-card__metrics">
                <div className="metric">
                  <span className="metric__label">Geração Atual</span>
                  <span className="metric__value">{source.currentGeneration.toFixed(2)} kWh</span>
                </div>
                <div className="metric">
                  <span className="metric__label">Capacidade</span>
                  <span className="metric__value">{source.capacity.toFixed(2)} kWh</span>
                </div>
                <div className="metric">
                  <span className="metric__label">Eficiência</span>
                  <span className="metric__value">{source.efficiency}%</span>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-bar__fill"
                  style={{
                    width: `${utilizationPercentage}%`,
                    backgroundColor: getColorByType(source.type),
                  }}
                  role="progressbar"
                  aria-valuenow={utilizationPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Utilização de ${source.name}: ${utilizationPercentage.toFixed(0)}%`}
                ></div>
              </div>
              <p className="progress-label">{utilizationPercentage.toFixed(0)}% da capacidade</p>

              <p className="source-card__description">{source.description}</p>
            </div>
          );
        })}
      </div>

      <div className="energy-summary">
        <div className="summary-card summary-card--generation">
          <div className="summary-card__icon">⚡</div>
          <div className="summary-card__content">
            <span className="summary-card__label">Geração Total</span>
            <span className="summary-card__value">{totalGeneration.toFixed(2)} kWh</span>
          </div>
        </div>

        <div className="summary-card summary-card--consumption">
          <div className="summary-card__icon">🔌</div>
          <div className="summary-card__content">
            <span className="summary-card__label">Consumo Total</span>
            <span className="summary-card__value">{totalConsumption.toFixed(2)} kWh</span>
          </div>
        </div>

        <div
          className={`summary-card ${
            energyBalance >= 0 ? 'summary-card--positive' : 'summary-card--negative'
          }`}
        >
          <div className="summary-card__icon">{energyBalance >= 0 ? '✅' : '⚠️'}</div>
          <div className="summary-card__content">
            <span className="summary-card__label">Balanço Energético</span>
            <span className="summary-card__value">
              {energyBalance >= 0 ? '+' : ''}
              {energyBalance.toFixed(2)} kWh
            </span>
            <span className="summary-card__percentage">
              ({balancePercentage >= 0 ? '+' : ''}
              {balancePercentage.toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>

      <div className="energy-status">
        {energyBalance >= 0 ? (
          <p className="status-message status-message--success">
            ✓ Sistema operando com superávit energético. Excedente pode ser armazenado nas baterias.
          </p>
        ) : (
          <p className="status-message status-message--warning">
            ⚠ Consumo superior à geração atual. Sistema utilizando energia armazenada nas baterias.
          </p>
        )}
      </div>
    </div>
  );
}

function getColorByType(type: string): string {
  const colors: Record<string, string> = {
    solar: '#ffc107',
    eolica: '#0066cc',
    bicicleta: '#2d8b3c',
  };
  return colors[type] || '#667';
}
