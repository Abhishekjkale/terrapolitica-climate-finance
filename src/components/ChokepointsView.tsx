import React, { useState } from 'react';
import { SUPPLY_CHAIN_CHOKEPOINTS, ChokepointItem } from '../data/reportData.ts';
import { Shield, Zap, AlertCircle, Cpu, Filter, Layers, CheckCircle } from 'lucide-react';

export const ChokepointsView: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ChokepointItem>(SUPPLY_CHAIN_CHOKEPOINTS[0]);
  const [filterActor, setFilterActor] = useState<string>('all');

  const filteredItems = SUPPLY_CHAIN_CHOKEPOINTS.filter(item => {
    if (filterActor === 'all') return true;
    if (filterActor === 'china') return item.dominantActors.includes('China');
    if (filterActor === 'other') return !item.dominantActors.includes('China') || item.dominantActors.includes('DRC') || item.dominantActors.includes('Indonesia');
    return true;
  });

  const exportControlsTimeline = [
    {
      date: 'July–August 2023',
      elements: 'Gallium & Germanium',
      action: 'Export licensing introduced',
      impact: 'Targeted high-speed semiconductors, solar wafers, and optical systems.'
    },
    {
      date: 'December 2023',
      elements: 'Synthetic & Natural Graphite',
      action: 'National security export licensing',
      impact: 'Impacted global EV anode supply; China produces >90% of battery-grade graphite.'
    },
    {
      date: 'August 2024',
      elements: 'Antimony & Antimony Hydrides',
      action: 'Comprehensive export restrictions',
      impact: 'Constrained munitions, solar glass stabilizers, and liquid metal batteries.'
    },
    {
      date: 'April–October 2025',
      elements: 'Rare Earth Separation & Magnets',
      action: 'Sweeping licensing regime',
      impact: 'Covers NdFeB permanent magnets used in wind turbines and EV drivetrains; partially paused for 1 year following US-China summit.'
    }
  ];

  const crmaBenchmarks = [
    { label: 'Domestic Extraction', target: 10, currentEst: 3, unit: '%' },
    { label: 'Domestic Processing', target: 40, currentEst: 14, unit: '%' },
    { label: 'Recycling of Consumption', target: 25, currentEst: 8, unit: '%' },
    { label: 'Max Single-Country Cap', target: 65, currentEst: 90, unit: '% (ceiling)' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Chapter 1 Analysis</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Clean-Energy Supply Chain Chokepoints & Geopolitical Stocks
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-4xl leading-relaxed">
          The 20th-century energy order rested on hydrocarbon flows (Strait of Hormuz, Druzhba pipeline). The 21st-century order pivots to manufactured technology stocks and mineral refining. Whoever controls processing nodes commands the pace and cost of the global energy transition.
        </p>
      </div>

      {/* Main interactive grid: Chokepoints Table & Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive list & concentration bars */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Table 1.1: Principal Chokepoints in Clean Energy</span>
            </h3>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setFilterActor('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  filterActor === 'all' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Segments
              </button>
              <button
                onClick={() => setFilterActor('china')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  filterActor === 'china' ? 'bg-slate-800 text-cyan-300 shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                China-Dominated
              </button>
              <button
                onClick={() => setFilterActor('other')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  filterActor === 'other' ? 'bg-slate-800 text-amber-300 shadow-xs' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                DRC & Indonesia
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredItems.map((item) => {
              const isSelected = selectedItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-sm shadow-cyan-950'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="font-semibold text-white text-sm">{item.segment}</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Dominant Actor: <span className="text-slate-200 font-medium">{item.dominantActors}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm font-bold text-cyan-400">{item.marketShareNumber}%</span>
                      <span className="text-[10px] text-slate-400 block">approx. share</span>
                    </div>
                  </div>

                  {/* Horizontal share progress bar */}
                  <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        item.marketShareNumber >= 85
                          ? 'bg-gradient-to-r from-red-500 to-amber-500'
                          : item.marketShareNumber >= 70
                          ? 'bg-gradient-to-r from-amber-500 to-cyan-500'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                      }`}
                      style={{ width: `${item.marketShareNumber}%` }}
                    />
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-xs text-slate-400">
                    <span className="truncate max-w-[80%]">{item.strategicBehavior}</span>
                    <span className="text-cyan-400 text-[11px] font-medium shrink-0 hover:underline">Details →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Chokepoint Deep Dive */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400">Strategic Intelligence Dossier</span>
              <h4 className="text-lg font-bold text-white mt-0.5">{selectedItem.segment}</h4>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                <span>Concentration: {selectedItem.concentration}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Dominant Power & Actor</span>
                <span className="text-sm font-semibold text-cyan-300">{selectedItem.dominantActors}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Observed Strategic Behaviour</span>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedItem.strategicBehavior}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Geopolitical Mechanics</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedItem.keyDetails}</p>
              </div>
            </div>

            {/* Asymmetric leverage callout */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 text-xs text-cyan-200 leading-relaxed">
              <span className="font-bold text-cyan-300 block mb-1">Analytical Note from Report (p. 5):</span>
              No oil-exporting state, including Saudi Arabia in 1973, ever held a comparable share of downstream processing. Chokepoints are not merely used; they are bargained over as diplomatic levers.
            </div>
          </div>

          {/* EU Critical Raw Materials Act (CRMA) 2030 Targets */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                EU Critical Raw Materials Act (2024/2030 Benchmarks)
              </h4>
              <span className="text-[11px] font-mono text-cyan-400">Target vs. Reality</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {crmaBenchmarks.map((b, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <div className="text-slate-400 text-[11px] mb-1">{b.label}</div>
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-cyan-300 font-bold">{b.target}{b.unit}</span>
                    <span className="text-slate-500 text-[10px]">Now: ~{b.currentEst}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Export Licensing Timeline (Section 1.1.2) */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">Weaponization Timeline</span>
            <h3 className="text-base font-bold text-white">China's Staged Mineral Export Controls (2023–2026)</h3>
          </div>
          <span className="text-xs text-slate-400">Report Section 1.1.2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {exportControlsTimeline.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 relative space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400">{item.date}</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">Stage 0{idx + 1}</span>
              </div>
              <div className="text-sm font-bold text-white">{item.elements}</div>
              <div className="text-xs text-amber-300 font-medium">{item.action}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
