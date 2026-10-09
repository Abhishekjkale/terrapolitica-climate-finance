import React, { useState } from 'react';
import { 
  PARIS_ACTORS, 
  SCENARIOS_2030, 
  POLICY_RECOMMENDATIONS, 
  ParisActor,
  PolicyRecommendation
} from '../data/reportData.ts';
import { 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Compass, 
  Sliders, 
  Filter,
  Check,
  Search
} from 'lucide-react';

export const ParisMatrixView: React.FC = () => {
  const [selectedActorId, setSelectedActorId] = useState<string>('usa');
  const [activeMatrixTab, setActiveMatrixTab] = useState<'matrix51' | 'matrix52' | 'scenarios' | 'recommendations'>('matrix51');
  const [recommendationFilter, setRecommendationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedActor = PARIS_ACTORS.find(a => a.id === selectedActorId) || PARIS_ACTORS[0];

  const filteredRecommendations = POLICY_RECOMMENDATIONS.filter(rec => {
    const matchesFilter = 
      recommendationFilter === 'all' || 
      (recommendationFilter === 'eu' && rec.category === 'EU & Likeminded') ||
      (recommendationFilter === 'south' && rec.category === 'Developing & Emerging') ||
      (recommendationFilter === 'intl' && rec.category === 'International System');

    const matchesSearch = 
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.code.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <span>Chapters 5 & 6 Analysis</span>
          <span aria-hidden="true">·</span>
          <span>Matrix 5.1 & 5.2 / Scenarios to 2030 / Action Register</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          The Paris Agreement Structured Matrix & Strategic Outlook
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-4xl leading-relaxed">
          The Paris Agreement established binding procedural obligations alongside non-binding substantive targets. Following the United States' formal second departure on 27 January 2026, the architecture is enforced not through treaty penalties, but through shadow instruments: trade measures, border levies, and financing conditionality.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveMatrixTab('matrix51')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeMatrixTab === 'matrix51'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Matrix 5.1: Geopolitical Pros & Cons
        </button>
        <button
          onClick={() => setActiveMatrixTab('matrix52')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeMatrixTab === 'matrix52'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Matrix 5.2: Three Strategic Axes
        </button>
        <button
          onClick={() => setActiveMatrixTab('scenarios')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeMatrixTab === 'scenarios'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          Table 4.1: 2030 Geopolitical Scenarios
        </button>
        <button
          onClick={() => setActiveMatrixTab('recommendations')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeMatrixTab === 'recommendations'
              ? 'bg-cyan-500 text-slate-950 shadow-xs'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          14 Strategic Policy Actions (R1–R14)
        </button>
      </div>

      {/* TAB 1: Matrix 5.1 Geopolitical Pros, Economic Cons and Strategic Positions */}
      {activeMatrixTab === 'matrix51' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PARIS_ACTORS.map((actor) => (
              <button
                key={actor.id}
                onClick={() => setSelectedActorId(actor.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedActorId === actor.id
                    ? 'bg-slate-900 border-cyan-500 shadow-sm shadow-cyan-950'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-xl mb-1">{actor.flag}</div>
                <div className="font-bold text-white text-xs truncate">{actor.name}</div>
                <div className="text-[10px] text-cyan-400 mt-0.5">Select Profile →</div>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedActor.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedActor.name}</h3>
                  <span className="text-xs text-cyan-400 font-mono">Paris Agreement Strategic Assessment (as of Oct 2026)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Geopolitical Pros</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedActor.geopoliticalPros}</p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 space-y-2">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Economic Cons</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedActor.economicCons}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Current Strategic Posture</span>
              <p className="text-xs text-slate-200 leading-relaxed">{selectedActor.strategicPosition}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Matrix 5.2 The Three Strategic Axes */}
      {activeMatrixTab === 'matrix52' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Matrix 5.2 Analytical Framework:</strong> Evaluates each power across the three non-environmental strategic axes: (1) Sovereign Energy Security, (2) Economic Competitiveness, and (3) Diplomatic Alignment.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Axis 1: Sovereign Energy Security */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-2.5">
                <span className="text-[10px] font-mono text-cyan-400 uppercase">Strategic Axis 01</span>
                <h3 className="text-base font-bold text-white">Sovereign Energy Security</h3>
              </div>
              <div className="space-y-3 text-xs">
                {PARIS_ACTORS.map(a => (
                  <div key={a.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span>{a.flag}</span>
                      <span>{a.name}</span>
                    </div>
                    <div className="text-emerald-400 text-[11px]"><strong className="text-slate-400">Pro:</strong> {a.energySecurity.pro}</div>
                    <div className="text-red-400 text-[11px]"><strong className="text-slate-400">Con:</strong> {a.energySecurity.con}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Axis 2: Economic Competitiveness */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-2.5">
                <span className="text-[10px] font-mono text-cyan-400 uppercase">Strategic Axis 02</span>
                <h3 className="text-base font-bold text-white">Economic Competitiveness</h3>
              </div>
              <div className="space-y-3 text-xs">
                {PARIS_ACTORS.map(a => (
                  <div key={a.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span>{a.flag}</span>
                      <span>{a.name}</span>
                    </div>
                    <div className="text-emerald-400 text-[11px]"><strong className="text-slate-400">Pro:</strong> {a.economicCompetitiveness.pro}</div>
                    <div className="text-red-400 text-[11px]"><strong className="text-slate-400">Con:</strong> {a.economicCompetitiveness.con}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Axis 3: Diplomatic Alignment */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-2.5">
                <span className="text-[10px] font-mono text-cyan-400 uppercase">Strategic Axis 03</span>
                <h3 className="text-base font-bold text-white">Diplomatic Alignment</h3>
              </div>
              <div className="space-y-3 text-xs">
                {PARIS_ACTORS.map(a => (
                  <div key={a.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span>{a.flag}</span>
                      <span>{a.name}</span>
                    </div>
                    <div className="text-emerald-400 text-[11px]"><strong className="text-slate-400">Pro:</strong> {a.diplomaticAlignment.pro}</div>
                    <div className="text-red-400 text-[11px]"><strong className="text-slate-400">Con:</strong> {a.diplomaticAlignment.con}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Table 4.1 Scenarios to 2030 */}
      {activeMatrixTab === 'scenarios' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <strong className="text-white">Report Section 4.5.2 Judgement:</strong> The central expectation is <strong className="text-cyan-300">Scenario A or a blend of A and B</strong>. The EU remains committed to the regime while simplifying administration; exporters have an overwhelming interest in capturing carbon revenues domestically; and no country wishes to surrender access to the 450M-consumer EU single market.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SCENARIOS_2030.map((scen) => (
              <div key={scen.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">{scen.name}</span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${
                      scen.likelihood === 'Highest'
                        ? 'text-emerald-300 bg-emerald-950/70 border-emerald-800'
                        : scen.likelihood === 'High'
                        ? 'text-cyan-300 bg-cyan-950/70 border-cyan-800'
                        : scen.likelihood === 'Moderate'
                        ? 'text-amber-300 bg-amber-950/70 border-amber-800'
                        : 'text-red-300 bg-red-950/70 border-red-800'
                    }`}>
                      {scen.likelihood} Likelihood
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{scen.description}</p>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Leading Indicators</span>
                    <ul className="space-y-1 text-slate-300 list-disc list-inside">
                      {scen.leadingIndicators.map((ind, i) => (
                        <li key={i} className="text-[11px]">{ind}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-cyan-300 font-medium">
                  <strong>Strategic Implication:</strong> {scen.geopoliticalImplication}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: 14 Strategic Policy Recommendations */}
      {activeMatrixTab === 'recommendations' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setRecommendationFilter('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  recommendationFilter === 'all' ? 'bg-slate-800 text-white border border-slate-700' : 'text-slate-400 hover:text-white'
                }`}
              >
                All 14 Actions
              </button>
              <button
                onClick={() => setRecommendationFilter('eu')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  recommendationFilter === 'eu' ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                EU & Likeminded (R1–R5)
              </button>
              <button
                onClick={() => setRecommendationFilter('south')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  recommendationFilter === 'south' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                Developing & Emerging (R6–R9)
              </button>
              <button
                onClick={() => setRecommendationFilter('intl')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  recommendationFilter === 'intl' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                International System (R10–R14)
              </button>
            </div>

            {/* Search filter */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search actions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRecommendations.map((rec) => (
              <div key={rec.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-extrabold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/80">
                      {rec.code}
                    </span>
                    <span className="font-bold text-white text-xs sm:text-sm">{rec.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    {rec.timeline}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{rec.summary}</p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">{rec.category}</span>
                  <span className="text-cyan-300">{rec.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
