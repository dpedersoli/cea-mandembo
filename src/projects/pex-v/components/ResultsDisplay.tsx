import type { CalculationResult } from '@/types/pex-v.types';
import { formatCurrency, formatEnergy, formatCO2 } from '@/utils/energyCalculations';
import { calculateTreeEquivalent } from '@/utils/energyCalculations';
import BarChart from '@/components/charts/BarChart';
import type { ChartData } from '@/types';
import './ResultsDisplay.css';

interface ResultsDisplayProps {
  result: CalculationResult;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const treeEquivalent = calculateTreeEquivalent(result.yearlyCO2Avoided);

  // Dados para o gráfico de comparação
  const comparisonChartData: ChartData[] = [
    {
      label: '110V/220V',
      value: parseFloat(result.monthlyCost110V.toFixed(2)),
      color: '#dc3545',
    },
    {
      label: '12V CC',
      value: parseFloat(result.monthlyCost12V.toFixed(2)),
      color: '#28a745',
    },
  ];

  // Dados para o gráfico de consumo
  const consumptionChartData: ChartData[] = [
    {
      label: '110V/220V',
      value: parseFloat(result.consumption110V.monthly.toFixed(2)),
      color: '#dc3545',
    },
    {
      label: '12V CC',
      value: parseFloat(result.consumption12V.monthly.toFixed(2)),
      color: '#28a745',
    },
  ];

  return (
    <section className="results-display" aria-labelledby="results-title">
      <h2 id="results-title" className="results-display__title">
        Resultados da Comparação
      </h2>

      {/* Destaques */}
      <div className="results-highlights">
        <div className="highlight-card highlight-card--savings">
          <span className="highlight-card__icon" aria-hidden="true">
            💰
          </span>
          <div className="highlight-card__content">
            <span className="highlight-card__label">Economia Mensal</span>
            <span className="highlight-card__value">{formatCurrency(result.monthlySavings)}</span>
            <span className="highlight-card__detail">
              {result.savingsPercentage.toFixed(1)}% de economia
            </span>
          </div>
        </div>

        <div className="highlight-card highlight-card--energy">
          <span className="highlight-card__icon" aria-hidden="true">
            ⚡
          </span>
          <div className="highlight-card__content">
            <span className="highlight-card__label">Redução de Consumo</span>
            <span className="highlight-card__value">
              {formatEnergy(result.consumption110V.monthly - result.consumption12V.monthly)}
            </span>
            <span className="highlight-card__detail">por mês</span>
          </div>
        </div>

        <div className="highlight-card highlight-card--co2">
          <span className="highlight-card__icon" aria-hidden="true">
            🌱
          </span>
          <div className="highlight-card__content">
            <span className="highlight-card__label">CO₂ Evitado por Ano</span>
            <span className="highlight-card__value">{formatCO2(result.yearlyCO2Avoided)}</span>
            <span className="highlight-card__detail">
              ≈ {treeEquivalent.toFixed(1)} árvores plantadas
            </span>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="results-charts">
        <BarChart
          data={comparisonChartData}
          title="Comparação de Custo Mensal (R$)"
          height={250}
          ariaLabel="Gráfico comparando custo mensal entre 110V e 12V"
        />

        <BarChart
          data={consumptionChartData}
          title="Comparação de Consumo Mensal (kWh)"
          height={250}
          ariaLabel="Gráfico comparando consumo mensal entre 110V e 12V"
        />
      </div>

      {/* Tabela Detalhada */}
      <div className="results-table-wrapper">
        <h3 className="results-subtitle">Detalhamento Completo</h3>
        <table className="results-table" aria-label="Detalhamento completo dos resultados">
          <thead>
            <tr>
              <th scope="col">Métrica</th>
              <th scope="col">Sistema 110V/220V</th>
              <th scope="col">Sistema 12V CC</th>
              <th scope="col">Diferença</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Consumo Diário</th>
              <td>{formatEnergy(result.consumption110V.daily)}</td>
              <td className="value-positive">{formatEnergy(result.consumption12V.daily)}</td>
              <td>-{formatEnergy(result.consumption110V.daily - result.consumption12V.daily)}</td>
            </tr>
            <tr>
              <th scope="row">Consumo Mensal</th>
              <td>{formatEnergy(result.consumption110V.monthly)}</td>
              <td className="value-positive">{formatEnergy(result.consumption12V.monthly)}</td>
              <td>
                -{formatEnergy(result.consumption110V.monthly - result.consumption12V.monthly)}
              </td>
            </tr>
            <tr>
              <th scope="row">Consumo Anual</th>
              <td>{formatEnergy(result.consumption110V.yearly)}</td>
              <td className="value-positive">{formatEnergy(result.consumption12V.yearly)}</td>
              <td>-{formatEnergy(result.consumption110V.yearly - result.consumption12V.yearly)}</td>
            </tr>
            <tr className="table-divider">
              <th scope="row">Custo Mensal</th>
              <td>{formatCurrency(result.monthlyCost110V)}</td>
              <td className="value-positive">{formatCurrency(result.monthlyCost12V)}</td>
              <td className="value-savings">{formatCurrency(result.monthlySavings)}</td>
            </tr>
            <tr>
              <th scope="row">Custo Anual</th>
              <td>{formatCurrency(result.monthlyCost110V * 12)}</td>
              <td className="value-positive">{formatCurrency(result.monthlyCost12V * 12)}</td>
              <td className="value-savings">{formatCurrency(result.monthlySavings * 12)}</td>
            </tr>
            <tr className="table-divider">
              <th scope="row">CO₂ Anual</th>
              <td>{result.yearlyCO2Avoided.toFixed(2)} kg</td>
              <td className="value-positive">0 kg (energia limpa)</td>
              <td className="value-savings">-{result.yearlyCO2Avoided.toFixed(2)} kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Impacto a Longo Prazo */}
      <div className="long-term-impact">
        <h3 className="results-subtitle">Impacto em 10 Anos</h3>
        <div className="impact-cards">
          <div className="impact-card">
            <span className="impact-card__icon" aria-hidden="true">
              💵
            </span>
            <span className="impact-card__label">Economia Total</span>
            <span className="impact-card__value">
              {formatCurrency(result.monthlySavings * 12 * 10)}
            </span>
          </div>

          <div className="impact-card">
            <span className="impact-card__icon" aria-hidden="true">
              ⚡
            </span>
            <span className="impact-card__label">Energia Economizada</span>
            <span className="impact-card__value">
              {formatEnergy((result.consumption110V.yearly - result.consumption12V.yearly) * 10)}
            </span>
          </div>

          <div className="impact-card">
            <span className="impact-card__icon" aria-hidden="true">
              🌳
            </span>
            <span className="impact-card__label">Árvores Equivalentes</span>
            <span className="impact-card__value">{(treeEquivalent * 10).toFixed(0)} árvores</span>
          </div>
        </div>
      </div>
    </section>
  );
}
