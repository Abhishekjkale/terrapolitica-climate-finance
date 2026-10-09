import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { ConceptArchitectureView } from './components/ConceptArchitectureView.tsx';
import { ChokepointsView } from './components/ChokepointsView.tsx';
import { ClimateFinanceView } from './components/ClimateFinanceView.tsx';
import { CbamCalculatorView } from './components/CbamCalculatorView.tsx';
import { CarbonMarketsView } from './components/CarbonMarketsView.tsx';
import { ParisMatrixView } from './components/ParisMatrixView.tsx';
import { StrategicBriefModal } from './components/StrategicBriefModal.tsx';
import { Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('concept');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Top Bar Contract compliant Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'concept' && (
          <ConceptArchitectureView onNavigate={(tab) => setActiveTab(tab)} />
        )}
        {activeTab === 'chokepoints' && <ChokepointsView />}
        {activeTab === 'finance' && <ClimateFinanceView />}
        {activeTab === 'cbam' && <CbamCalculatorView />}
        {activeTab === 'carbon-markets' && <CarbonMarketsView />}
        {activeTab === 'matrix-scenarios' && <ParisMatrixView />}
      </main>

      {/* Strategic Dossier Modal */}
      <StrategicBriefModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Quiet, Professional Institutional Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-300">TerraGeopolitica</span>
            <span aria-hidden="true">·</span>
            <span>Strategic, Legal and Economic Analysis Platform</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>UNFCCC / WTO / IEA / EU ETS Grounded Data</span>
            <span aria-hidden="true">·</span>
            <span>October 2026 Edition</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
