import React from 'react';
import { ShieldCheck, FileText, Globe } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDossier: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenDossier }) => {
  const navItems = [
    { id: 'concept', label: 'Concept & Briefing' },
    { id: 'chokepoints', label: 'Supply Chokepoints' },
    { id: 'finance', label: 'Climate Finance & NCQG' },
    { id: 'cbam', label: 'CBAM Simulator' },
    { id: 'carbon-markets', label: 'Article 6 & Markets' },
    { id: 'matrix-scenarios', label: 'Paris Matrix & 2030' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => setActiveTab('concept')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-cyan-500/20">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white whitespace-nowrap block">
              TerraGeopolitica
            </span>
          </div>
        </button>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDossier}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors rounded-lg shadow-sm shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Dossier</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-slate-900 bg-slate-950 gap-1.5 scrollbar-none">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap ${
              activeTab === item.id
                ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/80'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
