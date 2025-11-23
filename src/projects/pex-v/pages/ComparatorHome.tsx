import { useState, useCallback } from 'react';
import ApplianceSelector from '../components/ApplianceSelector';
import ResultsDisplay from '../components/ResultsDisplay';
import { appliancesDatabase } from '../data/appliancesData';
import { toSelectedAppliance } from '../data/helpers';
import { calculateComparison } from '../data/helpers';
import { loadProfile } from '../data/presetProfiles';
import type { Appliance, SelectedAppliance } from '@/types/pex-v.types';
import './ComparatorHome.css';

export default function ComparatorHome() {
  const [selectedAppliances, setSelectedAppliances] = useState<SelectedAppliance[]>(
    appliancesDatabase.map(toSelectedAppliance)
  );

  const [showResults, setShowResults] = useState(false);

  // Toggle seleção de aparelho
  const handleToggleAppliance = useCallback((appliance: Appliance) => {
    setSelectedAppliances((prev) =>
      prev.map((item) =>
        item.id === appliance.id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
    setShowResults(false); // ✅ Reseta resultados ao mudar seleção
  }, []);

  // Atualizar quantidade
  const handleUpdateQuantity = useCallback((applianceId: string, quantity: number) => {
    setSelectedAppliances((prev) =>
      prev.map((item) => (item.id === applianceId ? { ...item, quantity } : item))
    );
    setShowResults(false); // ✅ Reseta resultados ao mudar quantidade
  }, []);

  // Atualizar horas de uso
  const handleUpdateHours = useCallback((applianceId: string, hours: number) => {
    setSelectedAppliances((prev) =>
      prev.map((item) => (item.id === applianceId ? { ...item, hoursPerDay: hours } : item))
    );
    setShowResults(false); // ✅ Reseta resultados ao mudar horas
  }, []);

  // Carregar perfil pré-definido
  const handleLoadProfile = (profileId: string) => {
    const profileAppliances = loadProfile(profileId);

    setSelectedAppliances((prev) =>
      prev.map((item) => {
        const profileItem = profileAppliances.find((p) => p.id === item.id);
        return profileItem || { ...item, isSelected: false };
      })
    );

    setShowResults(false);
  };

  // Limpar seleção
  const handleClearSelection = () => {
    setSelectedAppliances((prev) =>
      prev.map((item) => ({
        ...item,
        isSelected: false,
        quantity: 1,
        hoursPerDay: item.averageHoursPerDay || 1,
      }))
    );
    setShowResults(false);
  };

  // Calcular comparação
  const handleCalculate = () => {
    setShowResults(true);
  };

  // Calcular resultado
  const result = showResults ? calculateComparison(selectedAppliances) : null;
  const hasSelection = selectedAppliances.some((a) => a.isSelected);

  return (
    <div className="comparator-home">
      {/* Hero */}
      <section className="comparator-hero">
        <div className="container">
          <h1 className="comparator-hero__title">
            Comparador Energético
            <span className="comparator-hero__subtitle">12V CC vs 110V/220V CA</span>
          </h1>
          <p className="comparator-hero__description">
            Compare o consumo, custos (CEMIG) e impacto ambiental entre sistemas de 12V em corrente
            contínua e sistemas convencionais de 110V/220V em corrente alternada.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Profile Presets */}
        <section className="profile-presets">
          <h2 className="section-title">Perfis Pré-Definidos</h2>
          <div className="presets-grid">
            <button className="preset-card" onClick={() => handleLoadProfile('basico')}>
              <span className="preset-icon">🏠</span>
              <h3 className="preset-title">Básico</h3>
              <p className="preset-description">Iluminação e aparelhos essenciais</p>
            </button>
            <button className="preset-card" onClick={() => handleLoadProfile('padrao')}>
              <span className="preset-icon">🏡</span>
              <h3 className="preset-title">Padrão</h3>
              <p className="preset-description">Casa média com aparelhos comuns</p>
            </button>
            <button className="preset-card" onClick={() => handleLoadProfile('completo')}>
              <span className="preset-icon">🏘️</span>
              <h3 className="preset-title">Completo</h3>
              <p className="preset-description">Casa com diversos aparelhos</p>
            </button>
          </div>
        </section>

        {/* Appliance Selector */}
        <section className="comparator-section">
          <div className="section-header">
            <h2 className="section-title">Selecione os Aparelhos</h2>
            {hasSelection && (
              <button className="clear-btn" onClick={handleClearSelection}>
                Limpar Seleção
              </button>
            )}
          </div>
          <ApplianceSelector
            appliances={appliancesDatabase}
            selectedAppliances={selectedAppliances}
            onToggleAppliance={handleToggleAppliance}
            onUpdateQuantity={handleUpdateQuantity}
            onUpdateHours={handleUpdateHours}
          />
        </section>

        {/* Calculate Button */}
        <section className="comparator-actions">
          <button className="calculate-btn" onClick={handleCalculate} disabled={!hasSelection}>
            Calcular Comparação
          </button>
          {!hasSelection && (
            <p className="action-hint">Selecione ao menos um aparelho para começar</p>
          )}
        </section>

        {/* Results */}
        {showResults && result && (
          <section className="comparator-results">
            <ResultsDisplay result={result} />
          </section>
        )}
      </div>
    </div>
  );
}
