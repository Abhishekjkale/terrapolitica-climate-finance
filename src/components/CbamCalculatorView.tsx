import React, { useState } from 'react';
import { 
  CBAM_SCHEDULE, 
  CBAM_SECTORS, 
  GREEN_PROTECTIONISM_TAXONOMY,
  CBAMSector 
} from '../data/reportData.ts';
import { 
  Calculator, 
  Scale, 
  AlertTriangle, 
  TrendingUp, 
  ShieldAlert, 
  HelpCircle, 
  FileCheck,
  Globe2,
  ChevronRight
} from 'lucide-react';

export const CbamCalculatorView: React.FC = () => {
  // Calculator state
  const [selectedSectorId, setSelectedSectorId] = useState<string>('steel-bf');
  const [shipmentTonnes, setShipmentTonnes] = useState<number>(1000);
  const [targetYear, setTargetYear] = useState<number>(2026);
  const [etsPrice, setEtsPrice] = useState<number>(75.36); // Q1 2026 official benchmark price: EUR 75.36
  const [foreignCarbonPrice, setForeignCarbonPrice] = useState<number>(0);
  const [customIntensity, setCustomIntensity] = useState<number>(2.2);

  const selectedSector = CBAM_SECTORS.find(s => s.id === selectedSectorId) || CBAM_SECTORS[0];
  const scheduleData = CBAM_SCHEDULE.find(s => s.year === targetYear) || CBAM_SCHEDULE[0];
  const cbamFactor = scheduleData.factorPercentage / 100; // e.g. 0.025 in 2026

  // Calculation parameters based on Chapter 2.2.3:
  // Liability per tonne = [ (Embedded Emissions - Free Allocation Benchmark * (1 - CBAM Factor)) * ETS Price ] - Foreign Price Deduction
  // In official CBAM formula: Free allocation given to EU producers is scaled by (1 - CBAM Factor).
  // Net chargeable emissions per tonne = Embedded Emissions - (EU Benchmark * (1 - CBAM Factor))
  // When free allocation is fully phased out (2034), benchmark adjustment is 0, so full embedded emissions are charged.
  const euBenchmark = selectedSector.id === 'steel-bf' ? 1.4 : selectedSector.id === 'steel-eaf' ? 0.3 : selectedSector.id === 'aluminium' ? 1.5 : selectedSector.id === 'cement' ? 0.6 : 1.2;

  // Chargeable emissions per tonne of imported good
  const chargeableEmissionsPerTonne = Math.max(0, customIntensity - (euBenchmark * (1 - cbamFactor)));
  
  // Total gross CBAM price before foreign deduction
  const grossCostPerTonne = chargeableEmissionsPerTonne * etsPrice;
  // Foreign deduction (if country of origin paid carbon price under Article 9)
  const foreignDeductionPerTonne = Math.min(grossCostPerTonne, customIntensity * foreignCarbonPrice);
  const netCbamPerTonne = Math.max(0, grossCostPerTonne - foreignDeductionPerTonne);
  const totalConsignmentLiability = netCbamPerTonne * shipmentTonnes;

  // 2034 comparison (100% CBAM factor)
  const full2034Chargeable = customIntensity;
  const full2034NetPerTonne = Math.max(0, (full2034Chargeable * etsPrice) - (customIntensity * foreignCarbonPrice));
  const full2034Consignment = full2034NetPerTonne * shipmentTonnes;

  const handleSectorChange = (id: string) => {
    setSelectedSectorId(id);
    const sec = CBAM_SECTORS.find(s => s.id === id);
    if (sec) {
      setCustomIntensity(sec.typicalEmissions);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <span>Chapters 2 & 4 Case Study</span>
          <span aria-hidden="true">·</span>
          <span>Definitive Phase Enacted 1 Jan 2026</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          EU CBAM Financial Liability & Tariff Simulator
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-4xl leading-relaxed">
          The European Union's Carbon Border Adjustment Mechanism (CBAM) converts the domestic EU ETS carbon price into a condition of access to roughly 450 million consumers. While certificates are surrendered starting in 2027, financial obligations accrue on 2026 shipments.
        </p>
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Import Configuration</h3>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
              Q1 2026 Ref: €75.36 / t
            </span>
          </div>

          {/* Sector selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Covered Commodity / Sector:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CBAM_SECTORS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => handleSectorChange(sector.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                    selectedSectorId === sector.id
                      ? 'bg-cyan-950/70 border-cyan-500 text-white shadow-xs'
                      : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="font-medium truncate">{sector.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{sector.typicalEmissions} {sector.unit.split('/')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Target Import Year & CBAM Factor */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Phase-In Compliance Year:</span>
              <span className="font-mono text-cyan-300 font-bold">
                {targetYear} (CBAM Factor: {scheduleData.factorPercentage}%)
              </span>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-1">
              {CBAM_SCHEDULE.map((s) => (
                <button
                  key={s.year}
                  onClick={() => setTargetYear(s.year)}
                  className={`py-1.5 px-1 rounded text-center text-[11px] font-mono transition-colors ${
                    targetYear === s.year
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <div>{s.year.toString().slice(2)}</div>
                  <div className="text-[9px] opacity-80">{s.factorPercentage}%</div>
                </button>
              ))}
            </div>
          </div>

          {/* Consignment tonnage */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300">Consignment Volume (Tonnes):</span>
              <span className="font-mono font-bold text-white">{shipmentTonnes.toLocaleString()} tonnes</span>
            </div>
            <input
              type="range"
              min="50"
              max="50000"
              step="50"
              value={shipmentTonnes}
              onChange={(e) => setShipmentTonnes(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>50t (De minimis threshold)</span>
              <span>10,000t</span>
              <span>50,000t (Capesize cargo)</span>
            </div>
          </div>

          {/* Carbon price parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">EU ETS Auction Price:</span>
                <span className="font-mono font-bold text-cyan-300">€{etsPrice.toFixed(2)}/t</span>
              </div>
              <input
                type="range"
                min="50"
                max="140"
                step="1"
                value={etsPrice}
                onChange={(e) => setEtsPrice(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Art 9 Foreign Carbon Deduction:</span>
                <span className="font-mono font-bold text-emerald-400">€{foreignCarbonPrice.toFixed(2)}/t</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={foreignCarbonPrice}
                onChange={(e) => setForeignCarbonPrice(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <span className="text-[10px] text-slate-400 block">e.g. China ETS ~€12, India CCTS ~€8</span>
            </div>
          </div>

          {/* Custom intensity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300">Embedded Emissions Intensity:</span>
              <span className="font-mono font-bold text-white">{customIntensity.toFixed(2)} {selectedSector.unit}</span>
            </div>
            <input
              type="range"
              min={selectedSector.directIntensityRange[0]}
              max={selectedSector.directIntensityRange[1]}
              step="0.05"
              value={customIntensity}
              onChange={(e) => setCustomIntensity(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>

        {/* Results & Analysis Column */}
        <div className="lg:col-span-6 space-y-5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">Financial Liability Output</span>
                <h3 className="text-lg font-bold text-white">Consignment Tariff Burden</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                Year {targetYear}
              </span>
            </div>

            {/* Metric hero cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Effective CBAM Charge / Tonne</span>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-cyan-300">
                  €{netCbamPerTonne.toFixed(2)}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">per {selectedSector.unit.split('/')[1] || 'tonne'}</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Total Consignment Liability</span>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-300">
                  €{Math.round(totalConsignmentLiability).toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">accrues on {targetYear} import</span>
              </div>
            </div>

            {/* Breakdown explanation */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Gross embedded carbon value:</span>
                <span className="font-mono font-semibold">€{(customIntensity * etsPrice).toFixed(2)} / t</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>EU free allocation benchmark relief ({scheduleData.freeAllocationRetained}%):</span>
                <span className="font-mono font-semibold">-€{((customIntensity - chargeableEmissionsPerTonne) * etsPrice).toFixed(2)} / t</span>
              </div>
              {foreignCarbonPrice > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Article 9 foreign price deduction:</span>
                  <span className="font-mono font-semibold">-€{foreignDeductionPerTonne.toFixed(2)} / t</span>
                </div>
              )}
              <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800">
                <span>Net CBAM certificate payment:</span>
                <span className="font-mono text-cyan-300">€{netCbamPerTonne.toFixed(2)} / t</span>
              </div>
            </div>

            {/* Comparison with 2034 Cliff */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-xs text-red-200 space-y-2">
              <div className="flex items-center justify-between font-bold text-red-300">
                <span>2034 Full Phase-In Exposure Cliff</span>
                <span className="font-mono">€{full2034NetPerTonne.toFixed(2)} / t</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                By 2034 (100% CBAM factor), free allocation will be completely withdrawn. The identical consignment will face a staggering{' '}
                <strong className="text-white font-mono">€{Math.round(full2034Consignment).toLocaleString()}</strong> liability (+{Math.round((full2034Consignment / (totalConsignmentLiability || 1) - 1) * 100)}% increase). Exporters who delay low-carbon capital investments face acute margin compression.
              </p>
            </div>
          </div>

          {/* Exposed jurisdictions */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-slate-300 block">Exposed Exporters for {selectedSector.name}:</span>
            <div className="flex flex-wrap gap-1.5">
              {selectedSector.highRiskCountries.map((c) => (
                <span key={c} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
              {selectedSector.notes}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Chart 2: Figure 2.1 The CBAM Factor Schedule & Back-Loaded Curve */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">Figure 2.1 Grounded Profile</span>
            <h3 className="text-base font-bold text-white">CBAM Factor Phase-In Schedule (2026–2034)</h3>
          </div>
          <span className="text-xs text-slate-400">Share of obligation charged as EU free allocation is phased out</span>
        </div>

        {/* Responsive SVG Curve */}
        <div className="pt-4 px-2">
          <div className="relative h-44 w-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 160" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="140" x2="800" y2="140" stroke="#1e293b" strokeWidth="1" />
              <line x1="0" y1="90" x2="800" y2="90" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="40" x2="800" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="10" x2="800" y2="10" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

              {/* Curve area */}
              <defs>
                <linearGradient id="factorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area path */}
              <path
                d="M 50,136.5 L 137,133 L 225,126 L 312,108.5 L 400,72.1 L 487,54.6 L 575,37.1 L 662,19.6 L 750,0 L 750,140 L 50,140 Z"
                fill="url(#factorGrad)"
              />

              {/* Stepping line */}
              <path
                d="M 50,136.5 L 137,133 L 225,126 L 312,108.5 L 400,72.1 L 487,54.6 L 575,37.1 L 662,19.6 L 750,0"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Point Markers */}
              {CBAM_SCHEDULE.map((pt, i) => {
                const cx = 50 + i * 87.5;
                const cy = 140 - (pt.factorPercentage / 100) * 140;
                const isCurYear = pt.year === targetYear;
                return (
                  <g key={pt.year} className="cursor-pointer" onClick={() => setTargetYear(pt.year)}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isCurYear ? 6 : 4}
                      fill={isCurYear ? '#ffffff' : '#0891b2'}
                      stroke={isCurYear ? '#06b6d4' : '#ffffff'}
                      strokeWidth="2"
                    />
                    <text
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      fill="#e2e8f0"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {pt.factorPercentage}%
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex justify-between text-xs font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800">
            {CBAM_SCHEDULE.map(s => (
              <span key={s.year} className={s.year === targetYear ? 'text-cyan-400 font-bold' : ''}>
                {s.year}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
          <strong className="text-white">Strategic Takeaway (Report p. 10):</strong> The schedule is deliberately back-loaded. The financial bite remains muted from 2026 to 2028 (2.5% to 10%), providing a brief adaptation runway. After 2029, the curve steepens radically toward 100% by 2034, giving unprepared exporters a compressed and brutal adjustment window.
        </div>
      </div>

      {/* Table 2.1: Taxonomy of Green Protectionism */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">Section 2.4.2 Taxonomy</span>
            <h3 className="text-base font-bold text-white">Table 2.1: A Taxonomy of Green Protectionism</h3>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="py-2.5 px-3">Instrument</th>
                <th className="py-2.5 px-3">Primary Examples</th>
                <th className="py-2.5 px-3">Economic Mechanism</th>
                <th className="py-2.5 px-3">Primary Geopolitical Effect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {GREEN_PROTECTIONISM_TAXONOMY.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-white">{row.instrument}</td>
                  <td className="py-3 px-3 font-mono text-cyan-300">{row.examples}</td>
                  <td className="py-3 px-3 text-slate-400">{row.mechanism}</td>
                  <td className="py-3 px-3 text-slate-200">{row.geopoliticalEffect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* WTO Legal Framework & Dispute Dynamics */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">The WTO Legal Landscape & "Appealing Into the Void"</h3>
          </div>
          <span className="text-xs text-slate-400">Section 2.4.3 & 4.3.1</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="font-bold text-cyan-400">GATT Articles I & III vs. XX</span>
            <p className="text-slate-300 leading-relaxed">
              Article III:2 requires national treatment. Article I (MFN) is triggered by discriminating between countries based on their carbon price. The EU justifies CBAM under Article XX(b) and XX(g) (health and natural resources).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="font-bold text-amber-400">Appellate Body Paralysis</span>
            <p className="text-slate-300 leading-relaxed">
              Since the US blocked Appellate Body appointments in December 2019, any panel report can be appealed "into the void," rendering legal victories unenforceable. WTO litigation functions as political signalling rather than binding adjudication.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
            <span className="font-bold text-red-400">India Safeguard Retaliation</span>
            <p className="text-slate-300 leading-relaxed">
              India notified the WTO that it reserves the right to suspend concessions under Article 8 of the Agreement on Safeguards against unilateral green border levies, treating CBAM as a disguised protectionist safeguard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
