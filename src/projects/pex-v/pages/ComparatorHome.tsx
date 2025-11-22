import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplianceSelector from '../components/ApplianceSelector';
import ResultsDisplay from '../components/ResultsDisplay';
import Button from '@/components/common/Button';
import { appliancesDatabase } from '../data/appliancesData';
import { toSelectedAppliance, calculateComparison, generateRecommendations } from '../data/helpers';
import { loadProfile, usageProfiles } from '../data/presetProfiles';
import type { Appliance, SelectedAppliance, CalculationResult } from '@/types/pex-v.types';
import { ROUTES } from '@/utils/constants';
import './ComparatorHome.css';

export default function ComparatorHome() {
  const navigate = useNavigate();
  const [selectedAppliances, setSelectedAppliances] = useState<SelectedAppliance[]>([]);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Toggle seleção de aparelho
  const handleToggleAppliance = useCallback((appliance: Appliance) => {
    setSelectedAppliances((prev) => {
      const existingIndex = prev.findIndex((a) => a.id === appliance.id);

      if (existingIndex >= 0) {
        // Remove se já existe
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], isSelected: false };
        return updated.filter((a) => a.isSelected);
      } else {
        // Adiciona novo
        const newAppliance = toSelectedAppliance(appliance);
        newAppliance.isSelected = true;
        return [...prev, newAppliance];
      }
    });
  }, []);

  // Atualizar quantidade
  const handleUpdateQuantity = useCallback((applianceId: string, quantity: number) => {
    setSelectedAppliances((prev) =>
      prev.map((app) =>
        app.id === applianceId ? { ...app, quantity: Math.max(1, Math.min(20, quantity)) } : app
      )
    );
  }, []);

  // Atualizar horas
  const handleUpdateHours = useCallback((applianceId: string, hours: number) => {
    setSelectedAppliances((prev) =>
      prev.map((app) =>
        app.id === applianceId ? { ...app, hoursPerDay: Math.max(0, Math.min(24, hours)) } : app
      )
    );
  }, []);

  // Calcular resultados
  const handleCalculate = useCallback(() => {
    if (selectedAppliances.length === 0) {
      alert('Selecione pelo menos um aparelho para calcular.');
      return;
    }

    const calculatedResult = calculateComparison(selectedAppliances);
    setResult(calculatedResult);
    setShowResults(true);

    // Scroll suave para resultados
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  }, [selectedAppliances]);

  // Limpar seleção
  const handleClear = useCallback(() => {
    setSelectedAppliances([]);
    setResult(null);
    setShowResults(false);
  }, []);

  // Carregar perfil pré-definido
  const handleLoadProfile = useCallback((profileId: string) => {
    const profileAppliances = loadProfile(profileId);
    setSelectedAppliances(profileAppliances);
    setShowResults(false);
    setResult(null);
  }, []);

  const recommendations = result ? generateRecommendations(result) : [];

  return (
    <div className="comparator-home">
      {/* Hero Section */}
      <section className="comparator-hero">
        <div className="container">
          <h1 className="comparator-hero__title">
            Comparador Educativo
            <span className="comparator-hero__subtitle">Sistema 12V vs 110V/220V</span>
          </h1>
          <p className="comparator-hero__description">
            Compare o consumo, custo e impacto ambiental entre sistemas multivolts em corrente
            contínua (12V) e sistemas convencionais em corrente alternada (110V/220V). Descubra
            quanto você pode economizar!
          </p>
        </div>
      </section>

      <div className="container">
        {/* Perfis Pré-definidos */}
        <section className="preset-profiles">
          <h2 className="section-title">Perfis Rápidos</h2>
          <p className="section-description">
            Escolha um perfil pré-definido para começar rapidamente:
          </p>
          <div className="profiles-grid">
            {usageProfiles.map((profile) => (
              <button
                key={profile.id}
                type="button"
                className="profile-card"
                onClick={() => handleLoadProfile(profile.id)}
              >
                <h3 className="profile-card__title">{profile.name}</h3>
                <p className="profile-card__description">{profile.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Seletor de Aparelhos */}
        <ApplianceSelector
          appliances={appliancesDatabase}
          selectedAppliances={selectedAppliances}
          onToggleAppliance={handleToggleAppliance}
          onUpdateQuantity={handleUpdateQuantity}
          onUpdateHours={handleUpdateHours}
        />

        {/* Ações */}
        <div className="comparator-actions">
          <div className="actions-info">
            <span className="actions-count">
              {selectedAppliances.filter((a) => a.isSelected).length} aparelho(s) selecionado(s)
            </span>
          </div>
          <div className="actions-buttons">
            <Button
              variant="outline"
              size="large"
              onClick={handleClear}
              disabled={selectedAppliances.length === 0}
            >
              Limpar Seleção
            </Button>
            <Button
              variant="primary"
              size="large"
              onClick={handleCalculate}
              disabled={selectedAppliances.length === 0}
            >
              Calcular Economia
            </Button>
          </div>
        </div>

        {/* Resultados */}
        {showResults && result && (
          <div id="results-section">
            <ResultsDisplay result={result} />

            {/* Recomendações */}
            {recommendations.length > 0 && (
              <section className="recommendations">
                <h2 className="section-title">Recomendações Personalizadas</h2>
                <div className="recommendations-list">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="recommendation-card">
                      <span className="recommendation-icon" aria-hidden="true">
                        💡
                      </span>
                      <p className="recommendation-text">{rec}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="cta-section">
              <div className="cta-card">
                <h2 className="cta-card__title">Quer Saber Mais?</h2>
                <p className="cta-card__description">
                  Explore o Dashboard da Casa12Volts® e veja como o sistema funciona na prática.
                </p>
                <Button variant="secondary" size="large" onClick={() => navigate(ROUTES.DASHBOARD)}>
                  Ver Dashboard Casa12Volts®
                </Button>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
