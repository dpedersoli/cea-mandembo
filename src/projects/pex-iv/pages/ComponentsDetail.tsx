import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import { systemComponents } from '../data/mockData';
import { ROUTES } from '@/utils/constants';
import type { SystemComponent } from '@/types/pex-iv.types';
import './ComponentsDetail.css';

export default function ComponentsDetail() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'geracao', label: 'Geração' },
    { value: 'armazenamento', label: 'Armazenamento' },
    { value: 'consumo', label: 'Consumo' },
    { value: 'outro', label: 'Outros' },
  ];

  const filteredComponents =
    selectedCategory === 'all'
      ? systemComponents
      : systemComponents.filter((c) => c.category === selectedCategory);

  return (
    <div className="components-detail">
      {/* Header */}
      <section className="components-header">
        <div className="container">
          <Link to={ROUTES.DASHBOARD}>
            <Button variant="outline">← Voltar ao Dashboard</Button>
          </Link>

          <h1 className="components-header__title">
            Componentes do Sistema
            <span className="components-header__subtitle">Casa12Volts®®</span>
          </h1>

          <p className="components-header__description">
            Conheça em detalhes cada componente que compõe o sistema multivolts da Casa12Volts®,
            suas especificações técnicas e funcionamento.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Category Filters */}
        <div className="category-filters" role="group" aria-label="Filtrar por categoria">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`category-btn ${
                selectedCategory === cat.value ? 'category-btn--active' : ''
              }`}
              onClick={() => setSelectedCategory(cat.value)}
              aria-pressed={selectedCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="components-grid">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <p className="empty-state">Nenhum componente encontrado nesta categoria.</p>
        )}
      </div>
    </div>
  );
}

interface ComponentCardProps {
  component: SystemComponent;
}

function ComponentCard({ component }: ComponentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryLabels: Record<string, string> = {
    geracao: 'Geração de Energia',
    armazenamento: 'Armazenamento',
    consumo: 'Consumo',
    outro: 'Outros',
  };

  const categoryColors: Record<string, string> = {
    geracao: '#ffc107',
    armazenamento: '#0066cc',
    consumo: '#28a745',
    outro: '#6c757d',
  };

  return (
    <article className="component-card">
      {/* Image Placeholder */}
      <div className="component-card__image">
        {component.image ? (
          <img src={component.image.url} alt={component.image.alt} loading="lazy" />
        ) : (
          <div className="image-placeholder">
            <span className="placeholder-icon" aria-hidden="true">
              📷
            </span>
            <span className="placeholder-text">{component.name}</span>
          </div>
        )}

        <span
          className="category-badge"
          style={{ backgroundColor: categoryColors[component.category] }}
        >
          {categoryLabels[component.category]}
        </span>
      </div>

      {/* Content */}
      <div className="component-card__content">
        <h2 className="component-card__title">{component.name}</h2>

        <div className="component-card__voltage">
          <span className="voltage-label">Voltagem:</span>
          <span className="voltage-value">{component.voltage}</span>
        </div>

        <p className="component-card__description">{component.description}</p>

        {/* Technical Specs */}
        {component.technicalSpecs && (
          <div className="technical-specs">
            <h3 className="specs-title">Especificações Técnicas</h3>
            <dl className="specs-list">
              {component.technicalSpecs.power && (
                <>
                  <dt>Potência:</dt>
                  <dd>{component.technicalSpecs.power}</dd>
                </>
              )}
              {component.technicalSpecs.capacity && (
                <>
                  <dt>Capacidade:</dt>
                  <dd>{component.technicalSpecs.capacity}</dd>
                </>
              )}
              {component.technicalSpecs.lifespan && (
                <>
                  <dt>Vida Útil:</dt>
                  <dd>{component.technicalSpecs.lifespan}</dd>
                </>
              )}
              {component.technicalSpecs.efficiency && (
                <>
                  <dt>Eficiência:</dt>
                  <dd>{component.technicalSpecs.efficiency}</dd>
                </>
              )}
            </dl>
          </div>
        )}

        {/* Expand Button */}
        <button
          type="button"
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Mostrar menos' : 'Mostrar mais'}
        >
          {isExpanded ? 'Mostrar Menos ↑' : 'Mostrar Mais ↓'}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="expanded-content">
            <h3 className="expanded-title">Detalhes Adicionais</h3>
            <p className="expanded-text">
              {component.category === 'geracao' &&
                'Este componente é responsável pela captação e conversão de energia renovável em eletricidade utilizável. Funciona em corrente contínua, eliminando a necessidade de conversores AC/DC.'}
              {component.category === 'armazenamento' &&
                'Sistema de armazenamento que garante autonomia energética, permitindo o uso de energia mesmo durante períodos sem geração (noite ou dias nublados).'}
              {component.category === 'consumo' &&
                'Equipamento otimizado para operar diretamente em corrente contínua, proporcionando maior eficiência energética e maior durabilidade comparado aos equivalentes AC.'}
              {component.category === 'outro' &&
                'Componente auxiliar do sistema que contribui para a eficiência geral e segurança da instalação elétrica multivolts.'}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
