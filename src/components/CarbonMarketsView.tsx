import React, { useState } from 'react';
import { 
  GitMerge, 
  Layers, 
  AlertOctagon, 
  CheckCircle2, 
  FileText, 
  Compass, 
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const CarbonMarketsView: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('art62');
  const [phantomDiscount, setPhantomDiscount] = useState<number>(65); // % estimated baseline overcrediting

  const marketLayers = [
    {
      id: 'art62',
      name: 'Article 6.2 Bilateral ITMO Corridors',
      tier: 'Compliance Bilateral',
      mechanics: 'Decentralized government-to-government transfers of Internationally Transferred Mitigation Outcomes (ITMOs). Requires mandatory Corresponding Adjustments (CA) on national accounts.',
      pioneers: 'Singapore (5% tax offset allowance), Switzerland, Japan (JCM with 20+ states), Sweden.',
      geopoliticalRisk: 'Creates bilateral spheres of influence; buyers export their technology standards while host states lock up low-cost mitigation potential.'
    },
    {
      id: 'art64',
      name: 'Article 6.4 Paris Crediting Mechanism (PACM)',
      tier: 'Centralized Multilateral',
      mechanics: 'Successor to Kyoto Protocol CDM. Supervised by UN Supervisory Body. Common methodology standards finalized at COP29 in Baku (2024).',
      pioneers: 'Global UN architecture open to all UNFCCC Parties.',
      geopoliticalRisk: 'Six-year operational delay allowed national and voluntary systems to entrench. Legacy CDM transition credits remain deeply controversial.'
    },
    {
      id: 'national',
      name: 'National Compliance Systems (ETS & CCTS)',
      tier: 'Domestic Mandatory',
      mechanics: 'Domestic cap-and-trade or intensity-based markets designed to incentivize domestic abatement and capture carbon tax revenues before CBAM extraction.',
      pioneers: 'China ETS (>5B t CO2, expanding to steel/cement), India CCTS, Brazil SBCE, Turkey ETS, Indonesia IDX.',
      geopoliticalRisk: 'Fragmented prices (EU €75/t vs China ~€12/t). Different baseline metrics (intensity vs absolute caps) complicate mutual Article 9 recognition.'
    },
    {
      id: 'voluntary',
      name: 'Voluntary & Southern Regional Platforms',
      tier: 'Voluntary & Carbon Nationalism',
      mechanics: 'Corporate offsetting markets transitioning through ICVCM Core Carbon Principles. Host states asserting sovereignty over natural capital rents.',
      pioneers: 'Saudi Arabia RVCMC, Abu Dhabi ADGM, African Carbon Markets Initiative (ACMI), Zimbabwe, Kenya.',
      geopoliticalRisk: 'Collapsing confidence following phantom credit investigations (REDD+). Host countries demanding up to 50% revenue shares (Carbon Nationalism).'
    }
  ];

  const carbonCorridors = [
    {
      buyer: 'Singapore',
      hosts: ['Ghana', 'Papua New Guinea', 'Paraguay', 'Bhutan'],
      quotaRule: 'Allows domestic high emitters to offset up to 5% of taxable emissions using accredited ITMOs.',
      focus: 'High-integrity nature and clean energy with strict host-country letter of authorization.'
    },
    {
      buyer: 'Japan (JCM)',
      hosts: ['Vietnam', 'Indonesia', 'Thailand', 'Mongolia', 'Kenya +16 others'],
      quotaRule: 'Tied to Japanese low-carbon industrial exports and bilateral technology subsidies.',
      focus: 'Industrial energy efficiency, geothermal power, and smart grid equipment.'
    },
    {
      buyer: 'Switzerland',
      hosts: ['Peru', 'Ghana', 'Senegal', 'Georgia', 'Vanuatu', 'Chile'],
      quotaRule: 'Directly surrendered toward Swiss domestic NDC under Federal CO2 Act.',
      focus: 'Biogas, rural solar electrification, and municipal methane capture.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Chapter 3 Analysis</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Global Carbon Market Fragmentation & Article 6 Corridors
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-4xl leading-relaxed">
          Article 6 promised a universal, integrity-assured multilateral architecture. In practice, double-counting disputes, baseline integrity scandals ("phantom credits"), and unequal bargaining power have produced asymmetric fragmentation: compliance corridors, regional standards, and resource-nationalist rent capture.
        </p>
      </div>

      {/* Layer Architecture Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Layer Selector */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>The Four Coexisting Carbon Regimes</span>
          </h3>

          <div className="space-y-2">
            {marketLayers.map((layer) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-sm shadow-cyan-950'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{layer.tier}</span>
                    <span className="text-slate-400 text-xs">→</span>
                  </div>
                  <div className="font-semibold text-white text-sm">{layer.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Layer Analysis */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
          {(() => {
            const cur = marketLayers.find(l => l.id === selectedLayer) || marketLayers[0];
            return (
              <>
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-cyan-400">{cur.tier}</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{cur.name}</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-bold text-slate-300 uppercase tracking-wider block text-[11px]">Operational Mechanics</span>
                    <p className="text-slate-300 leading-relaxed">{cur.mechanics}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-bold text-cyan-400 uppercase tracking-wider block text-[11px]">Frontrunner Jurisdictions</span>
                    <p className="text-slate-200 font-mono leading-relaxed">{cur.pioneers}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-bold text-amber-400 uppercase tracking-wider block text-[11px]">Structural Geopolitical Tension</span>
                    <p className="text-slate-300 leading-relaxed">{cur.geopoliticalRisk}</p>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>

      {/* Interactive Tool: Phantom Credits & Baseline Discount Simulator */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-red-400">Section 3.2.2 Integrity Crisis</span>
            <h3 className="text-lg font-bold text-white">The "Phantom Credit" Reality Check & Market Devaluation</h3>
          </div>
          <span className="text-xs text-slate-400">REDD+ & Cookstoves counterfactual decay</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Academic and journalistic investigations in 2023–2024 revealed that a large fraction of voluntary forestry (REDD+) and cookstove credits suffered from exaggerated baseline assumptions, producing phantom offsets without real counterfactual emission cuts. This caused voluntary market transactions to contract sharply from over <strong className="text-white">$2 Billion in 2021–2022</strong>.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Audited Baseline Inflation / Over-crediting Rate:</span>
                <span className="font-mono font-bold text-red-400">{phantomDiscount}% Phantom Tonnes</span>
              </div>
              <input
                type="range"
                min="20"
                max="90"
                step="5"
                value={phantomDiscount}
                onChange={(e) => setPhantomDiscount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-red-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>20% (Conservative Tech)</span>
                <span>65% (Typical REDD+ Investigation)</span>
                <span>90% (Worst-case Baselines)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-3 text-center">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Real Verified Abatement</span>
              <span className="text-2xl font-mono font-bold text-emerald-400">
                {100 - phantomDiscount}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">per 100 claimed credits</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Corporate Offset Value</span>
              <span className="text-2xl font-mono font-bold text-red-400">
                -${phantomDiscount}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">litigation / greenwash discount</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
          <strong className="text-amber-300">Distributive Side-Effect (Report p. 14):</strong> The integrity crackdown pivots corporate demand away from cheap nature-based Southern forestry towards expensive technological removals (direct air capture, biochar) located in developed countries. Southern governments view this as disguised market foreclosure.
        </div>
      </div>

      {/* Bilateral Carbon Corridors Table (Section 3.3.5) */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">Geopolitical Carbon Corridors</span>
            <h3 className="text-base font-bold text-white">Active Article 6.2 Bilateral Partnerships</h3>
          </div>
          <span className="text-xs text-slate-400">Section 3.3.5</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {carbonCorridors.map((c, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">{c.buyer}</span>
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  Bilateral Buyer
                </span>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block mb-1">Key Host Partner Countries:</span>
                <div className="flex flex-wrap gap-1">
                  {c.hosts.map(h => (
                    <span key={h} className="bg-slate-900 text-slate-200 px-1.5 py-0.5 rounded text-[11px] font-mono">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1 text-slate-300">
                <p><strong className="text-slate-200">Regulatory Model:</strong> {c.quotaRule}</p>
                <p><strong className="text-slate-200">Strategic Focus:</strong> {c.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
