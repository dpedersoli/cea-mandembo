import { useState, useMemo } from 'react';
import type { Appliance, SelectedAppliance } from '@/types/pex-v.types';
import { applianceCategories } from '../data/appliancesData';
import { filterAppliancesByCategory, searchAppliances } from '../data/helpers';
import './ApplianceSelector.css';

interface ApplianceSelectorProps {
  appliances: Appliance[];
  selectedAppliances: SelectedAppliance[];
  onToggleAppliance: (appliance: Appliance) => void;
  onUpdateQuantity: (applianceId: string, quantity: number) => void;
  onUpdateHours: (applianceId: string, hours: number) => void;
}

export default function ApplianceSelector({
  appliances,
  selectedAppliances,
  onToggleAppliance,
  onUpdateQuantity,
  onUpdateHours,
}: ApplianceSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppliances = useMemo(() => {
    let filtered = appliances;

    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      filtered = filterAppliancesByCategory(filtered, selectedCategory);
    }

    // Filtrar por busca
    if (searchQuery) {
      filtered = searchAppliances(filtered, searchQuery);
    }

    return filtered;
  }, [appliances, selectedCategory, searchQuery]);

  const isSelected = (applianceId: string) => {
    return selectedAppliances.some((a) => a.id === applianceId && a.isSelected);
  };

  const getSelectedAppliance = (applianceId: string): SelectedAppliance | undefined => {
    return selectedAppliances.find((a) => a.id === applianceId);
  };

  return (
    <section className="appliance-selector" aria-labelledby="selector-title">
      <h2 id="selector-title" className="appliance-selector__title">
        Selecione os Aparelhos
      </h2>

      <p className="appliance-selector__description">
        Escolha os aparelhos que você usa em sua casa e ajuste a quantidade e horas de uso diário.
      </p>

      {/* Filtros */}
      <div className="selector-filters">
        {/* Busca */}
        <div className="search-box">
          <label htmlFor="search-input" className="sr-only">
            Buscar aparelhos
          </label>
          <input
            id="search-input"
            type="search"
            className="search-input"
            placeholder="Buscar aparelhos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar aparelhos por nome"
          />
          <span className="search-icon" aria-hidden="true">
            🔍
          </span>
        </div>

        {/* Categorias */}
        <div className="category-filters" role="group" aria-label="Filtrar por categoria">
          <button
            type="button"
            className={`category-btn ${selectedCategory === 'all' ? 'category-btn--active' : ''}`}
            onClick={() => setSelectedCategory('all')}
            aria-pressed={selectedCategory === 'all'}
          >
            Todos
          </button>
          {applianceCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`category-btn ${
                selectedCategory === cat.value ? 'category-btn--active' : ''
              }`}
              onClick={() => setSelectedCategory(cat.value)}
              aria-pressed={selectedCategory === cat.value}
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Aparelhos */}
      <div className="appliances-list">
        {filteredAppliances.length === 0 ? (
          <p className="empty-state">Nenhum aparelho encontrado.</p>
        ) : (
          filteredAppliances.map((appliance) => {
            const selected = isSelected(appliance.id);
            const selectedApp = getSelectedAppliance(appliance.id);

            return (
              <article
                key={appliance.id}
                className={`appliance-card ${selected ? 'appliance-card--selected' : ''}`}
              >
                <div className="appliance-card__header">
                  <input
                    type="checkbox"
                    id={`appliance-${appliance.id}`}
                    className="appliance-checkbox"
                    checked={selected}
                    onChange={() => onToggleAppliance(appliance)}
                    aria-label={`Selecionar ${appliance.name}`}
                  />
                  <label htmlFor={`appliance-${appliance.id}`} className="appliance-label">
                    <span className="appliance-icon" aria-hidden="true">
                      {appliance.icon}
                    </span>
                    <span className="appliance-name">{appliance.name}</span>
                  </label>
                </div>

                {appliance.description && (
                  <p className="appliance-description">{appliance.description}</p>
                )}

                <div className="appliance-specs">
                  <div className="spec">
                    <span className="spec-label">110V/220V:</span>
                    <span className="spec-value">{appliance.consumption110V}W</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">12V CC:</span>
                    <span className="spec-value spec-value--highlight">
                      {appliance.consumption12V}W
                    </span>
                  </div>
                  <div className="spec spec--savings">
                    <span className="spec-label">Economia:</span>
                    <span className="spec-value spec-value--positive">
                      {(
                        ((appliance.consumption110V - appliance.consumption12V) /
                          appliance.consumption110V) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </div>
                </div>

                {/* Controles (só aparecem se selecionado) */}
                {selected && selectedApp && (
                  <div className="appliance-controls">
                    <div className="control-group">
                      <label htmlFor={`quantity-${appliance.id}`} className="control-label">
                        Quantidade:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${appliance.id}`}
                        className="control-input"
                        min="1"
                        max="20"
                        value={selectedApp.quantity}
                        onChange={(e) =>
                          onUpdateQuantity(appliance.id, parseInt(e.target.value) || 1)
                        }
                        aria-label={`Quantidade de ${appliance.name}`}
                      />
                    </div>

                    <div className="control-group">
                      <label htmlFor={`hours-${appliance.id}`} className="control-label">
                        Horas/dia:
                      </label>
                      <input
                        type="number"
                        id={`hours-${appliance.id}`}
                        className="control-input"
                        min="0.5"
                        max="24"
                        step="0.5"
                        value={selectedApp.hoursPerDay}
                        onChange={(e) =>
                          onUpdateHours(appliance.id, parseFloat(e.target.value) || 0)
                        }
                        aria-label={`Horas por dia de uso de ${appliance.name}`}
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
