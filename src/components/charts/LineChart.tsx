import { useMemo } from 'react';
import './LineChart.css';

interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title?: string;
  height?: number;
  color?: string;
  ariaLabel?: string;
}

export default function LineChart({
  data,
  title,
  height = 300,
  color = '#0066cc',
  ariaLabel = 'Gráfico de linhas',
}: LineChartProps) {
  const { maxValue, minValue, points, pathD } = useMemo(() => {
    const values = data.map((d) => d.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;

    const width = 100;
    const chartHeight = 100;
    const stepX = width / (data.length - 1 || 1);

    const pts = data.map((item, index) => {
      const x = index * stepX;
      const y = chartHeight - ((item.value - min) / range) * chartHeight;
      return { x, y, value: item.value };
    });

    const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return {
      maxValue: max,
      minValue: min,
      points: pts,
      pathD: path,
    };
  }, [data]);

  return (
    <div className="line-chart" role="img" aria-label={ariaLabel}>
      {title && <h3 className="line-chart__title">{title}</h3>}

      <div className="line-chart__container" style={{ height: `${height}px` }}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="line-chart__svg"
          aria-hidden="true"
        >
          <g className="line-chart__grid">
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="0.2"
              />
            ))}
          </g>

          <path d={`${pathD} L 100 100 L 0 100 Z`} fill={color} fillOpacity="0.1" />

          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="2"
              fill={color}
              className="line-chart__point"
            />
          ))}
        </svg>

        <div className="line-chart__labels">
          {data.map((item, index) => (
            <span key={index} className="line-chart__label">
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="line-chart__values">
        <span className="line-chart__value-label">
          Mínimo: <strong>{minValue.toFixed(2)}</strong>
        </span>
        <span className="line-chart__value-label">
          Máximo: <strong>{maxValue.toFixed(2)}</strong>
        </span>
      </div>

      <table className="sr-only" aria-label={ariaLabel}>
        <thead>
          <tr>
            <th scope="col">Data</th>
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
