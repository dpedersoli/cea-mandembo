import { useMemo } from 'react';
import type { ChartData } from '@/types';
import './BarChart.css';

interface BarChartProps {
  data: ChartData[];
  title?: string;
  height?: number;
  showValues?: boolean;
  ariaLabel?: string;
}

export default function BarChart({
  data,
  title,
  height = 300,
  showValues = true,
  ariaLabel = 'Gráfico de barras',
}: BarChartProps) {
  const maxValue = useMemo(() => {
    return Math.max(...data.map((d) => d.value));
  }, [data]);

  return (
    <div className="bar-chart" role="img" aria-label={ariaLabel}>
      {title && <h3 className="bar-chart__title">{title}</h3>}

      <div className="bar-chart__container" style={{ height: `${height}px` }}>
        <div className="bar-chart__bars">
          {data.map((item, index) => {
            const percentage = (item.value / maxValue) * 100;

            return (
              <div key={index} className="bar-chart__bar-wrapper">
                <div className="bar-chart__bar-container">
                  <div
                    className="bar-chart__bar"
                    style={{
                      height: `${percentage}%`,
                      backgroundColor: item.color || '#0066cc',
                    }}
                    role="presentation"
                    aria-hidden="true"
                  >
                    {showValues && <span className="bar-chart__value">{item.value}</span>}
                  </div>
                </div>
                <span className="bar-chart__label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <table className="sr-only" aria-label={ariaLabel}>
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
