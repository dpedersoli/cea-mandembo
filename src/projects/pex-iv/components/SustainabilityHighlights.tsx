import type { SustainabilityHighlightsProps } from '@/types/pex-iv.types';
import './SustainabilityHighlights.css';

export default function SustainabilityHighlights({ metrics }: SustainabilityHighlightsProps) {
  return (
    <div className="sustainability-highlights">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-card__icon">{metric.icon}</div>
            <div className="metric-card__content">
              <h3 className="metric-card__label">{metric.label}</h3>
              <p className="metric-card__value">
                {metric.value}
                {metric.unit && <span className="metric-card__unit"> {metric.unit}</span>}
              </p>
              <p className="metric-card__description">{metric.description}</p>

              {metric.odsAlignment && metric.odsAlignment.length > 0 && (
                <div className="metric-card__ods">
                  <span className="ods-label">Alinhado com ODS:</span>
                  <div className="ods-badges">
                    {metric.odsAlignment.map((odsNumber) => (
                      <span key={odsNumber} className="ods-badge" title={`ODS ${odsNumber}`}>
                        {odsNumber}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
