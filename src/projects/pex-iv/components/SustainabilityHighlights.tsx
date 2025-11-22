import type { SustainabilityMetric } from '@/types/pex-iv.types';
import { ODS_INFO } from '@/utils/constants';
import './SustainabilityHighlights.css';

interface SustainabilityHighlightsProps {
  metrics: SustainabilityMetric[];
}

export default function SustainabilityHighlights({ metrics }: SustainabilityHighlightsProps) {
  return (
    <section className="sustainability-highlights" aria-labelledby="sustainability-title">
      <h2 id="sustainability-title" className="sustainability-highlights__title">
        Impacto em Sustentabilidade
      </h2>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <article key={index} className="metric-card" aria-labelledby={`metric-${index}-label`}>
            <div className="metric-card__icon" aria-hidden="true">
              {metric.icon}
            </div>

            <div className="metric-card__content">
              <h3 id={`metric-${index}-label`} className="metric-card__label">
                {metric.label}
              </h3>

              <p className="metric-card__value">
                {metric.value}{' '}
                {metric.unit && <span className="metric-card__unit">{metric.unit}</span>}
              </p>

              <p className="metric-card__description">{metric.description}</p>

              {metric.odsAlignment && metric.odsAlignment.length > 0 && (
                <div className="metric-card__ods">
                  <span className="metric-card__ods-label">Alinhado com:</span>
                  <div className="ods-badges-small">
                    {metric.odsAlignment.map((odsNum) => {
                      const ods = ODS_INFO[odsNum as keyof typeof ODS_INFO];
                      return (
                        <span
                          key={odsNum}
                          className="ods-badge-small"
                          style={{ backgroundColor: ods.color }}
                          title={`ODS ${ods.number}: ${ods.title}`}
                        >
                          {ods.number}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
