import type { ComparisonTableProps } from '@/types/pex-iv.types';
import './ComparisonTable.css';

export default function ComparisonTable({ data }: ComparisonTableProps) {
  if (!data || data.length === 0) {
    return (
      <div className="comparison-table-empty">
        <p>Nenhum dado de comparação disponível.</p>
      </div>
    );
  }

  return (
    <div className="comparison-table-wrapper">
      <div className="comparison-table-scroll">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="table-header">Item</th>
              <th className="table-header table-header--casa12v">Casa12Volts® (CC)</th>
              <th className="table-header table-header--convencional">Convencional (CA)</th>
              <th className="table-header">Diferença</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const difference = calculateDifference(row.casa12V, row.convencional);

              return (
                <tr key={index} className="table-row">
                  <td className="table-cell table-cell--item">{row.item}</td>
                  <td className="table-cell table-cell--casa12v">
                    <span className="value-highlight value-highlight--green">{row.casa12V}</span>
                  </td>
                  <td className="table-cell table-cell--convencional">
                    <span className="value-highlight">{row.convencional}</span>
                  </td>
                  <td className="table-cell table-cell--difference">
                    {difference ? (
                      <span className={`difference-badge ${difference.type}`}>
                        {difference.icon} {difference.value}
                      </span>
                    ) : (
                      <span className="difference-badge difference-badge--neutral">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="comparison-legend">
        <div className="legend-item">
          <span className="legend-icon legend-icon--positive">✓</span>
          <span className="legend-text">Melhor desempenho Casa12Volts®</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon legend-icon--info">ℹ</span>
          <span className="legend-text">Sistema em CC elimina perdas de conversão AC/DC</span>
        </div>
      </div>
    </div>
  );
}

function calculateDifference(
  casa12V: string,
  convencional: string
): {
  value: string;
  type: string;
  icon: string;
} | null {
  const casa12VNum = parseFloat(casa12V.replace(/[^\d.-]/g, ''));
  const convencionalNum = parseFloat(convencional.replace(/[^\d.-]/g, ''));

  if (isNaN(casa12VNum) || isNaN(convencionalNum)) {
    return null;
  }

  const diff = convencionalNum - casa12VNum;
  const diffPercentage = convencionalNum !== 0 ? (diff / convencionalNum) * 100 : 0;

  if (Math.abs(diffPercentage) < 1) {
    return {
      value: 'Similar',
      type: 'difference-badge--neutral',
      icon: '≈',
    };
  }

  if (diff > 0) {
    return {
      value: `${diffPercentage.toFixed(0)}% menor`,
      type: 'difference-badge--positive',
      icon: '↓',
    };
  }

  return {
    value: `${Math.abs(diffPercentage).toFixed(0)}% maior`,
    type: 'difference-badge--negative',
    icon: '↑',
  };
}
