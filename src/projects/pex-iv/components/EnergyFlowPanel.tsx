import { useMemo } from 'react';
import type { EnergySource } from '@/types/pex-iv.types';
import { calculateCapacityUsage, getSourceStatus } from '../data/helpers';
import { formatEnergy } from '@/utils/energyCalculations';
import './EnergyFlowPanel.css';

interface EnergyFlowPanelProps {
  sources: EnergySource[];
  totalGeneration: number;
  totalConsumption: number;
}

export default function EnergyFlowPanel({
  sources,
  totalGeneration,
  totalConsumption,
}: EnergyFlowPanelProps) {
  const balance = useMemo(() => {
    return totalGeneration - totalConsumption;
  }, [totalGeneration, totalConsumption]);

  const balanceStatus = balance >= 0 ? 'positive' : 'negative';

  return (
    <section className="energy-flow-panel" aria-labelledby="energy-flow-title">
      <h2 id="energy-flow-title" className="energy-flow-panel__title">
        Fluxo de Energia em Tempo Real
      </h2>

      <div className="energy-flow-panel__content">
        {/* Fontes de Geração */}
        <div className="energy-sources">
          <h3 className="energy-sources__title">Geração</h3>
          <div className="energy-sources__list">
            {sources.map((source) => {
              const usage = calculateCapacityUsage(source);
              const status = getSourceStatus(source);

              return (
                <div key={source.id} className={`energy-source energy-source--${status}`}>
                  <div className="energy-source__header">
                    <span className="energy-source__icon" aria-hidden="true">
                      {source.icon}
                    </span>
                    <h4 className="energy-source__name">{source.name}</h4>
                  </div>

                  <div className="energy-source__stats">
                    <div className="stat">
                      <span className="stat__label">Atual</span>
                      <span className="stat__value">{formatEnergy(source.currentGeneration)}</span>
                    </div>
                    <div className="stat">
                      <span className="stat__label">Capacidade</span>
                      <span className="stat__value">{formatEnergy(source.capacity)}</span>
                    </div>
                  </div>

                  {/* Barra de Progresso */}
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={usage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar__fill"
                      style={{ width: `${usage}%` }}
                      aria-label={`${usage.toFixed(0)}% da capacidade`}
                    />
                  </div>

                  <p className="energy-source__efficiency">
                    Eficiência: <strong>{source.efficiency}%</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fluxo Central */}
        <div className="energy-flow">
          <div className="flow-arrow" aria-hidden="true">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                d="M 20 50 L 60 50 L 50 40 M 60 50 L 50 60"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          <div className="energy-balance">
            <div className={`balance balance--${balanceStatus}`}>
              <span className="balance__label">Balanço</span>
              <span className="balance__value">{formatEnergy(Math.abs(balance))}</span>
              <span className="balance__status">
                {balanceStatus === 'positive' ? '↑ Excedente' : '↓ Déficit'}
              </span>
            </div>
          </div>
        </div>

        {/* Consumo e Armazenamento */}
        <div className="energy-consumption">
          <h3 className="energy-consumption__title">Consumo e Armazenamento</h3>

          <div className="consumption-card">
            <div className="consumption-card__icon" aria-hidden="true">
              🔋
            </div>
            <div className="consumption-card__content">
              <h4 className="consumption-card__label">Consumo Total</h4>
              <p className="consumption-card__value">{formatEnergy(totalConsumption)}</p>
            </div>
          </div>

          <div className="consumption-card">
            <div className="consumption-card__icon" aria-hidden="true">
              ⚡
            </div>
            <div className="consumption-card__content">
              <h4 className="consumption-card__label">Geração Total</h4>
              <p className="consumption-card__value">{formatEnergy(totalGeneration)}</p>
            </div>
          </div>

          <div className="consumption-card">
            <div className="consumption-card__icon" aria-hidden="true">
              🔌
            </div>
            <div className="consumption-card__content">
              <h4 className="consumption-card__label">Bateria</h4>
              <p className="consumption-card__value">85% carregada</p>
              <p className="consumption-card__detail">4.08 kWh / 4.8 kWh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
