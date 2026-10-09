import React, { useState } from 'react';
import { CLIMATE_FINANCE_DATA, JETP_PROGRAMS } from '../data/reportData.ts';
import { DollarSign, PieChart, TrendingUp, AlertTriangle, ArrowUpRight, Scale, Globe, Building } from 'lucide-react';

export const ClimateFinanceView: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2022);
  const [waccRate, setWaccRate] = useState<number>(10.5); // % cost of capital

  const selectedData = CLIMATE_FINANCE_DATA.find(d => d.year === selectedYear) || CLIMATE_FINANCE_DATA[4];

  // LCOE relative impact calculation: baseline capital recovery factor vs high cost of capital
  // Formula: Utility solar levelized cost index (approximate relative markup)
  const lcoeImpactFactor = Math.round(((waccRate - 3.5) * 4.2) + 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Chapter 1.2 & 1.3 Analysis</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Climate Finance: The $100B Legacy, NCQG Rift & The Strategic Vacuum
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-4xl leading-relaxed">
          The Global North's USD 100 billion pledge was conceived as a down-payment on trust. Reached only in 2022 (two years late) and composed primarily of non-concessional loans, it depreciated Northern soft power and created a strategic vacuum now contested by China and the BRICS New Development Bank.
        </p>
      </div>

      {/* Visual Chart 1: OECD Series Delivery & The Grant-Loan Disparity (Interactive) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-cyan-400">Figure 1.1 Grounded Data</span>
              <h3 className="text-base font-bold text-white">Developed-Country Climate Finance (2016–2022)</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500 inline-block" />
                <span>Headline Reported (OECD)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" />
                <span>Est. Grant-Equivalent (~33%)</span>
              </span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="space-y-4 pt-2">
            <div className="relative h-60 flex items-end justify-between gap-4 sm:gap-8 px-4 border-b border-slate-800 pb-4">
              {/* $100B Target Line */}
              <div 
                className="absolute left-0 right-0 border-t-2 border-dashed border-red-400/80 z-10 flex items-center justify-end pr-2"
                style={{ bottom: `${(100 / 130) * 100}%` }}
              >
                <span className="text-[10px] font-mono font-bold text-red-300 bg-slate-950/90 px-1.5 py-0.5 rounded border border-red-500/40">
                  USD 100B Target (2020 Goal)
                </span>
              </div>

              {CLIMATE_FINANCE_DATA.map((item) => {
                const heightPercent = (item.reportedTotal / 130) * 100;
                const grantHeightPercent = (item.grantPortionEstimated / 130) * 100;
                const isSelected = selectedYear === item.year;

                return (
                  <button
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer focus:outline-none"
                  >
                    <div className="w-full max-w-[64px] flex flex-col justify-end items-center h-full relative">
                      {/* Tooltip on hover/active */}
                      <div className="absolute -top-7 text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                        ${item.reportedTotal}B
                      </div>

                      {/* Full bar: loans + grants */}
                      <div
                        className={`w-full rounded-t-md transition-all relative overflow-hidden ${
                          isSelected ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900' : ''
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Upper portion: Loans */}
                        <div className="w-full h-full bg-cyan-600/80 group-hover:bg-cyan-500/90 transition-colors flex items-center justify-center">
                          <span className="text-[9px] font-mono text-cyan-100 hidden sm:inline">Loans</span>
                        </div>

                        {/* Lower portion: Grant equivalent */}
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-emerald-500/90 border-t border-emerald-400/40 flex items-center justify-center"
                          style={{ height: `${(grantHeightPercent / heightPercent) * 100}%` }}
                        >
                          <span className="text-[9px] font-mono text-white hidden sm:inline">Grant</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-xs font-mono mt-2 transition-colors ${
                      isSelected ? 'text-cyan-400 font-bold' : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {item.year}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanatory callout */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <Scale className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Selected Year ({selectedYear}):</strong> Headline public delivery reached{' '}
                <span className="font-mono text-cyan-300 font-bold">${selectedData.reportedTotal}B</span>. However, approximately{' '}
                <span className="font-mono text-cyan-300 font-bold">${selectedData.loansPortion}B</span> was dispersed as loans (much non-concessional), with grant-equivalents estimated at only{' '}
                <span className="font-mono text-emerald-400 font-bold">${selectedData.grantPortionEstimated}B</span>.
              </div>
            </div>
          </div>
        </div>

        {/* Right: The 5 Structural Accounting Disputes */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-amber-400">Section 1.2.2</span>
            <h3 className="text-base font-bold text-white">The 5 Accounting Fault Lines</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <span className="font-bold text-slate-200">1. Instrument Asymmetry</span>
              <p className="text-slate-400 leading-relaxed">
                ~2/3 delivered as loans, compounding sovereign debt in states paying more for debt service than health.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <span className="font-bold text-slate-200">2. Thematic Imbalance</span>
              <p className="text-slate-400 leading-relaxed">
                Mitigation projects in middle-income states dominate; adaptation needed by vulnerable states is severely unfunded.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <span className="font-bold text-slate-200">3. Non-Additionality</span>
              <p className="text-slate-400 leading-relaxed">
                Routine official development assistance (ODA) relabeled as climate finance without new fiscal allocations.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <span className="font-bold text-slate-200">4. Geographic Concentration</span>
              <p className="text-slate-400 leading-relaxed">
                Flows gravitate to bankable commercial markets; Africa receives just ~2% of global clean-energy investment.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <span className="font-bold text-slate-200">5. Attributed Private Capital</span>
              <p className="text-slate-400 leading-relaxed">
                Heavily contested attribution models claimed for "mobilized" private investments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tool: Cost of Capital / Risk Premia Simulator (Section 1.2.4) */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400">Interactive Macro Simulation</span>
            <h3 className="text-lg font-bold text-white">Cost of Capital & Renewable Energy Penalty</h3>
          </div>
          <span className="text-xs text-slate-400">Source: IEA & Report Section 1.2.4</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              In advanced economies, utility solar weighted average cost of capital (WACC) sits around <strong className="text-white">3.5%–4.5%</strong>. In developing economies, perceived country risk and currency volatility inflate WACC to <strong className="text-amber-300">10%–14%</strong>, raising the levelized cost of solar power by 30% to 60% despite identical or superior solar irradiance.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Target Economy Cost of Capital (WACC):</span>
                <span className="font-mono font-bold text-cyan-300">{waccRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="3.5"
                max="14.0"
                step="0.5"
                value={waccRate}
                onChange={(e) => setWaccRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>3.5% (Germany / EU)</span>
                <span>7.5% (Middle-Income)</span>
                <span>14.0% (High-Debt Frontier)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-3 text-center">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Normalized LCOE Index</span>
              <span className="text-2xl font-mono font-bold text-cyan-300">
                {lcoeImpactFactor}
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">(Base 100 = Advanced Economy)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Capital Cost Penalty</span>
              <span className={`text-2xl font-mono font-bold ${
                lcoeImpactFactor > 125 ? 'text-red-400' : 'text-emerald-400'
              }`}>
                +{lcoeImpactFactor - 100}%
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">Excess generation tariff</span>
            </div>
          </div>
        </div>
      </div>

      {/* Just Energy Transition Partnerships (JETPs) & The Strategic Vacuum */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* JETPs status table */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-cyan-400">Bilateral Implementation</span>
              <h3 className="text-base font-bold text-white">Just Energy Transition Partnerships (JETPs)</h3>
            </div>
            <span className="text-xs text-slate-400">Report Section 1.2.4</span>
          </div>

          <div className="space-y-3">
            {JETP_PROGRAMS.map((prog) => (
              <div key={prog.country} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{prog.country}</span>
                    <span className="text-xs font-mono text-cyan-300 font-semibold">${prog.pledgedUSD}B</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-900/60 px-2 py-0.5 rounded">
                    {prog.status}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-300 font-medium">Lead Donors:</span> {prog.donorLead}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{prog.obstacles}</p>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs text-red-300">
            <strong>Key Vulnerability:</strong> The withdrawal of the United States in 2025 removed a cornerstone donor, proving how Western pledges are hostage to domestic electoral cycles.
          </div>
        </div>

        {/* The Strategic Vacuum: China's BRI & BRICS NDB */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-purple-400">Institutional Alternatives</span>
              <h3 className="text-base font-bold text-white">China's Green BRI & The BRICS NDB</h3>
            </div>
            <span className="text-xs text-slate-400">Section 1.3</span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>China's "Green Development" Belt & Road</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Vertical integration: Chinese firms serve as financiers, equipment suppliers, and engineering contractors. Outbound FDI to Southeast Asia, Middle East, and Latin America circumvents Western tariffs. Positioned under "South-South cooperation" outside Annex II legal obligations.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-cyan-400" />
                <span>BRICS New Development Bank (NDB)</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Operating from Shanghai with equal voting shares among founders. Expanded to UAE, Egypt, Bangladesh, Algeria. Emphasizes local-currency lending to shield members from US dollar exchange shocks and avoids Western governance conditionality.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="font-bold text-white">Strategic Equilibrium: "Competition for the Middle"</div>
              <p className="text-slate-400 leading-relaxed">
                The contest is not for the poorest states, but for swing middle powers (India, Indonesia, Brazil, South Africa, Vietnam, Saudi Arabia, Turkey, Mexico). They leverage competing offers to extract concessional finance, technology transfer, and domestic processing deals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
