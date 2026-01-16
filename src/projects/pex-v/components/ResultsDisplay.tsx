import type { ResultsDisplayProps } from '@/types/pex-v.types';
import {
  formatCurrency,
  formatConsumption,
  formatPercentage,
  generateRecommendations,
} from '../data/helpers';
import './ResultsDisplay.css';

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const recommendations = generateRecommendations(result);

  return (
    <div className="results-display">
      <h2 className="results-title">Resultados da Comparação</h2>

      <div className="results-summary">
        <div className="summary-card summary-card--savings">
          <div className="summary-icon">💰</div>
          <div className="summary-content">
            <span className="summary-label">Economia Mensal</span>
            <span className="summary-value">{formatCurrency(result.monthlySavings)}</span>
            <span className="summary-detail">
              {formatPercentage(result.savingsPercentage)} mais barato
            </span>
          </div>
        </div>

        <div className="summary-card summary-card--co2">
          <div className="summary-icon">🌱</div>
          <div className="summary-content">
            <span className="summary-label">CO₂ Evitado/Ano</span>
            <span className="summary-value">{result.yearlyCO2Avoided.toFixed(0)} kg</span>
            <span className="summary-detail">
              ≈ {Math.round(result.yearlyCO2Avoided / 22)} árvores
            </span>
          </div>
        </div>

        <div className="summary-card summary-card--consumption">
          <div className="summary-icon">⚡</div>
          <div className="summary-content">
            <span className="summary-label">Consumo Diário (12V)</span>
            <span className="summary-value">{formatConsumption(result.consumption12V.daily)}</span>
            <span className="summary-detail">
              vs {formatConsumption(result.consumption110V.daily)} (110V)
            </span>
          </div>
        </div>
      </div>

      <div className="results-comparison">
        <h3 className="comparison-title">Comparação Detalhada</h3>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Período</th>
                <th>Sistema 12V CC</th>
                <th>Sistema 110V/220V CA</th>
                <th>Diferença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consumo Diário</td>
                <td className="value-12v">{formatConsumption(result.consumption12V.daily)}</td>
                <td className="value-110v">{formatConsumption(result.consumption110V.daily)}</td>
                <td className="value-diff">
                  {formatConsumption(result.consumption110V.daily - result.consumption12V.daily)}{' '}
                  menos
                </td>
              </tr>
              <tr>
                <td>Consumo Mensal</td>
                <td className="value-12v">{formatConsumption(result.consumption12V.monthly)}</td>
                <td className="value-110v">{formatConsumption(result.consumption110V.monthly)}</td>
                <td className="value-diff">
                  {formatConsumption(
                    result.consumption110V.monthly - result.consumption12V.monthly
                  )}{' '}
                  menos
                </td>
              </tr>
              <tr>
                <td>Consumo Anual</td>
                <td className="value-12v">{formatConsumption(result.consumption12V.yearly)}</td>
                <td className="value-110v">{formatConsumption(result.consumption110V.yearly)}</td>
                <td className="value-diff">
                  {formatConsumption(result.consumption110V.yearly - result.consumption12V.yearly)}{' '}
                  menos
                </td>
              </tr>
              <tr>
                <td>Custo Mensal (CEMIG)</td>
                <td className="value-12v">{formatCurrency(result.monthlyCost12V)}</td>
                <td className="value-110v">{formatCurrency(result.monthlyCost110V)}</td>
                <td className="value-diff">{formatCurrency(result.monthlySavings)} economia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="results-appliances">
        <h3 className="appliances-title">Aparelhos Selecionados ({result.appliances.length})</h3>
        <div className="appliances-grid">
          {result.appliances.map((appliance) => (
            <div key={appliance.id} className="appliance-badge">
              <span className="badge-icon">{appliance.icon}</span>
              <span className="badge-text">
                {appliance.name}
                {appliance.quantity > 1 && ` (×${appliance.quantity})`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="results-recommendations">
          <h3 className="recommendations-title">💡 Recomendações</h3>
          <ul className="recommendations-list">
            {recommendations.map((rec, index) => (
              <li key={index} className="recommendation-item">
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="results-info">
        <p className="info-text">
          <strong>💡 Como interpretar:</strong> O sistema 12V CC elimina perdas de conversão AC/DC,
          resultando em maior eficiência energética (92% vs 75-80%). Os valores consideram tarifa
          média CEMIG e emissões de CO₂ típicas da matriz energética brasileira.
        </p>
      </div>
    </div>
  );
}
