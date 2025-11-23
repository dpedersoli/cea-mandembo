import { useState, useMemo } from 'react';
import { systemComponents } from '../data/mockData';
import type { ComponentCategory } from '@/types/pex-iv.types';
import './ComponentsDetail.css';

export default function ComponentsDetail() {
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar componentes
  const filteredComponents = useMemo(() => {
    return systemComponents.filter((component) => {
      const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
      const matchesSearch =
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Categorias para filtro
  const categories: Array<{ value: ComponentCategory | 'all'; label: string; icon: string }> = [
    { value: 'all', label: 'Todos', icon: '🔧' },
    { value: 'geracao', label: 'Geração', icon: '⚡' },
    { value: 'armazenamento', label: 'Armazenamento', icon: '🔋' },
    { value: 'consumo', label: 'Consumo', icon: '💡' },
    { value: 'outro', label: 'Outros', icon: '🔌' },
  ];

  return (
    <div className="components-detail">
      {/* Hero */}
      <section className="components-hero">
        <div className="container">
          <h1 className="components-hero__title">
            Componentes da Casa12Volts®
            <span className="components-hero__subtitle">Sistema Multivolts Completo</span>
          </h1>
          <p className="components-hero__description">
            Explore todos os {systemComponents.length} componentes do sistema: geração,
            armazenamento, distribuição e consumo de energia renovável em corrente contínua.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Filters */}
        <section className="components-filters">
          {/* Search */}
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar componentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar componentes"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`category-btn ${
                  selectedCategory === category.value ? 'category-btn--active' : ''
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                <span className="category-btn__icon">{category.icon}</span>
                <span className="category-btn__label">{category.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results Count */}
        <div className="results-count">
          <p>
            {filteredComponents.length}{' '}
            {filteredComponents.length === 1 ? 'componente encontrado' : 'componentes encontrados'}
          </p>
        </div>

        {/* Components Grid */}
        {filteredComponents.length > 0 ? (
          <section className="components-grid">
            {filteredComponents.map((component) => (
              <article key={component.id} className="component-card">
                {/* Image Placeholder */}
                <div className="component-card__image">
                  <span className="image-placeholder">{getCategoryIcon(component.category)}</span>
                </div>

                {/* Content */}
                <div className="component-card__content">
                  <div className="component-card__header">
                    <span className={`category-badge category-badge--${component.category}`}>
                      {getCategoryLabel(component.category)}
                    </span>
                    <span className="voltage-badge">{component.voltage}</span>
                  </div>

                  <h3 className="component-card__title">{component.name}</h3>
                  <p className="component-card__description">{component.description}</p>

                  {/* Technical Specs */}
                  {component.technicalSpecs && (
                    <div className="component-card__specs">
                      <h4 className="specs-title">Especificações Técnicas:</h4>
                      <ul className="specs-list">
                        {component.technicalSpecs.power && (
                          <li className="spec-item">
                            <strong>Potência:</strong> {component.technicalSpecs.power}
                          </li>
                        )}
                        {component.technicalSpecs.capacity && (
                          <li className="spec-item">
                            <strong>Capacidade:</strong> {component.technicalSpecs.capacity}
                          </li>
                        )}
                        {component.technicalSpecs.efficiency && (
                          <li className="spec-item">
                            <strong>Eficiência:</strong> {component.technicalSpecs.efficiency}
                          </li>
                        )}
                        {component.technicalSpecs.lifespan && (
                          <li className="spec-item">
                            <strong>Vida Útil:</strong> {component.technicalSpecs.lifespan}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="components-empty">
            <span className="empty-icon">🔍</span>
            <p className="empty-text">Nenhum componente encontrado com os filtros selecionados.</p>
            <button
              className="empty-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Retorna ícone baseado na categoria
 */
function getCategoryIcon(category: ComponentCategory): string {
  const icons: Record<ComponentCategory, string> = {
    geracao: '⚡',
    armazenamento: '🔋',
    consumo: '💡',
    outro: '🔌',
  };
  return icons[category];
}

/**
 * Retorna label baseado na categoria
 */
function getCategoryLabel(category: ComponentCategory): string {
  const labels: Record<ComponentCategory, string> = {
    geracao: 'Geração',
    armazenamento: 'Armazenamento',
    consumo: 'Consumo',
    outro: 'Outros',
  };
  return labels[category];
}
