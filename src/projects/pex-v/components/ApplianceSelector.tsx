import { useState, useMemo } from 'react';
import type { Appliance, SelectedAppliance, ApplianceCategory } from '@/types/pex-v.types';
import { applianceCategories } from '../data/appliancesData';
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
  const [filterCategory, setFilterCategory] = useState<ApplianceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppliances = useMemo(() => {
    return appliances.filter((appliance) => {
      const matchesCategory = filterCategory === 'all' || appliance.category === filterCategory;
      const matchesSearch =
        appliance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appliance.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [appliances, filterCategory, searchQuery]);

  const findSelected = (applianceId: string) =>
    selectedAppliances.find((a) => a.id === applianceId);

  return (
    <div className="appliance-selector">
      <div className="selector-filters">
        <div className="selector-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar aparelhos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-tabs">
          <button
            className={`category-tab ${filterCategory === 'all' ? 'category-tab--active' : ''}`}
            onClick={() => setFilterCategory('all')}
          >
            Todos
          </button>
          {applianceCategories.map((cat) => (
            <button
              key={cat.value}
              className={`category-tab ${filterCategory === cat.value ? 'category-tab--active' : ''}`}
              onClick={() => setFilterCategory(cat.value)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="appliances-list">
        {filteredAppliances.map((appliance) => {
          const selected = findSelected(appliance.id);
          const isSelected = selected?.isSelected || false;

          return (
            <div
              key={appliance.id}
              className={`appliance-item ${isSelected ? 'appliance-item--selected' : ''}`}
              onClick={() => onToggleAppliance(appliance)}
              style={{ cursor: 'pointer' }}
            >
              <label className="appliance-checkbox" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleAppliance(appliance)}
                />
                <span className="checkbox-custom"></span>
              </label>

              <div className="appliance-info">
                <div className="appliance-header">
                  <span className="appliance-icon">{appliance.icon}</span>
                  <h3 className="appliance-name">{appliance.name}</h3>
                </div>
                {appliance.description && (
                  <p className="appliance-description">{appliance.description}</p>
                )}
                <div className="appliance-consumption">
                  <span className="consumption-item">
                    110V/220V: <strong>{appliance.consumption110V}W</strong>
                  </span>
                  <span className="consumption-item">
                    12V CC: <strong>{appliance.consumption12V}W</strong>
                  </span>
                </div>
              </div>

              {isSelected && selected && (
                <div className="appliance-controls" onClick={(e) => e.stopPropagation()}>
                  <div className="control-group">
                    <label className="control-label">Quantidade:</label>
                    <div className="number-input">
                      <button
                        className="number-btn"
                        onClick={() =>
                          onUpdateQuantity(appliance.id, Math.max(1, selected.quantity - 1))
                        }
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>
                      <input
                        type="text"
                        value={selected.quantity}
                        readOnly
                        className="number-value"
                        aria-label="Quantidade atual"
                      />
                      <button
                        className="number-btn"
                        onClick={() =>
                          onUpdateQuantity(appliance.id, Math.min(99, selected.quantity + 1))
                        }
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="control-group">
                    <label className="control-label">Horas/dia:</label>
                    <div className="number-input">
                      <button
                        className="number-btn"
                        onClick={() =>
                          onUpdateHours(appliance.id, Math.max(0.25, selected.hoursPerDay - 0.25))
                        }
                        aria-label="Diminuir horas por dia"
                      >
                        −
                      </button>
                      <input
                        type="text"
                        value={selected.hoursPerDay}
                        readOnly
                        className="number-value"
                        aria-label="Horas por dia atual"
                      />
                      <button
                        className="number-btn"
                        onClick={() =>
                          onUpdateHours(appliance.id, Math.min(24, selected.hoursPerDay + 0.25))
                        }
                        aria-label="Aumentar horas por dia"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredAppliances.length === 0 && (
        <div className="selector-empty">
          <p>Nenhum aparelho encontrado.</p>
        </div>
      )}
    </div>
  );
}
