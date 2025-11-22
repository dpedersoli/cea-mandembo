import type { ComparisonData } from '@/types/pex-iv.types';
import './ComparisonTable.css';

interface ComparisonTableProps {
  data: ComparisonData[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <section className="comparison-section" aria-labelledby="comparison-title">
      <h2 id="comparison-title" className="comparison-section__title">
        Casa12Volts® vs Sistema Convencional
      </h2>

      <p className="comparison-section__description">
        Comparação detalhada entre o sistema multivolts em corrente contínua e sistemas residenciais
        convencionais em corrente alternada.
      </p>

      <div className="comparison-table-wrapper">
        <table className="comparison-table" aria-label="Comparação de sistemas energéticos">
          <thead>
            <tr>
              <th scope="col">Característica</th>
              <th scope="col" className="comparison-table__col--casa12v">
                <span className="badge badge--primary">Casa12Volts®</span>
              </th>
              <th scope="col" className="comparison-table__col--convencional">
                Sistema Convencional
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <th scope="row">{row.item}</th>
                <td className="comparison-table__cell--casa12v">
                  <strong>{row.casa12V}</strong>
                </td>
                <td className="comparison-table__cell--convencional">{row.convencional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison-legend">
        <div className="legend-item">
          <span className="legend-dot legend-dot--positive" aria-hidden="true"></span>
          <span>Valores em verde indicam vantagens da Casa12Volts®</span>
        </div>
      </div>
    </section>
  );
}
