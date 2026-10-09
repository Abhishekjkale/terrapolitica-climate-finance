import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  AlertTriangle, 
  Scale, 
  Cpu, 
  TrendingUp, 
  FileCheck2, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

interface Props {
  onNavigate: (tabId: string) => void;
}

export const ConceptArchitectureView: React.FC<Props> = ({ onNavigate }) => {
  const [activeFriction, setActiveFriction] = useState<number>(0);

  const frictionPoints = [
    {
      id: 1,
      title: 'Historical Responsibility vs. Current Capability',
      principle: 'CBDR-RC (UNFCCC Art 3.1 & Paris Art 2.2)',
      northView: 'Decarbonization is a universal urgency; uniform carbon pricing across all imported products prevents carbon leakage and unfair competitive advantages.',
      southView: 'Uniform border levies penalize developing countries that did not cause historical atmospheric warming and face higher capital costs and grid carbon intensity.',
      implication: 'Invoked by BASIC (Brazil, South Africa, India, China) as the core doctrinal barrier against unilateral European border adjustments.'
    },
    {
      id: 2,
      title: 'Finance Quantity and Quality: The NCQG Rift',
      principle: 'New Collective Quantified Goal (COP29 Baku)',
      northView: 'The $300B/yr by 2035 target triples the Copenhagen $100B baseline and mobilizes private institutional capital alongside emerging donor contributions.',
      southView: 'Denounced by India and LDCs as a "paltry sum" deferred by a decade, compared against real annual transition needs exceeding $1.3T to $2T.',
      implication: 'Southern negotiators explicitly link climate finance delivery to border tax stringency; absent grants, compliance is contested.'
    },
    {
      id: 3,
      title: 'Debt-Creating Finance vs. Concessional Grants',
      principle: 'Fiscal Space & Sovereign Debt Traps',
      northView: 'Multilateral Development Bank (MDB) loans and blended finance vehicles mobilize capital while preserving Western fiscal prudence.',
      southView: 'Roughly two-thirds of reported climate finance arrives as non-concessional loans, compounding debt crises in states already paying more on debt service than healthcare.',
      implication: 'Independent audits (e.g. Oxfam) reveal true grant-equivalent support is less than one-third of headline OECD reporting ($115.9B in 2022).'
    },
    {
      id: 4,
      title: 'Unilateral Trade Measures vs. Multilateral Rules',
      principle: 'UNFCCC Article 3.5 & GATT Article XX',
      northView: 'CBAM is a non-discriminatory border tax adjustment mirroring domestic EU ETS costs, legally grounded in environmental protection.',
      southView: 'Article 3.5 prohibits arbitrary discrimination or disguised trade restrictions. The measure transfers regulatory extraterritoriality to Brussels.',
      implication: 'Formal WTO consultation requested by Russia (2025); India reservation of safeguard retaliation rights under GATT Article 8.'
    },
    {
      id: 5,
      title: 'Critical Minerals & Technology Value Chains',
      principle: 'Resource Sovereignty & In-Country Beneficiation',
      northView: 'Western states view export curbs as supply-security threats, launching the Critical Raw Materials Act and Minerals Security Partnership.',
      southView: 'Raw material producers (DRC, Indonesia, Chile, Zimbabwe) demand downstream refining and battery cathode value capture, ending raw extraction dependency.',
      implication: 'Concentration of refining in China (~90% rare earths, 65% lithium, 75% cobalt) turns mineral processing into a geopolitical lever.'
    },
    {
      id: 6,
      title: 'Carbon Market Integrity vs. Natural Capital Access',
      principle: 'Paris Agreement Article 6 & Integrity Floors',
      northView: 'Stringent additionality, conservative baselines, and avoidance of phantom credits (ICVCM, VCMI) are essential to prevent greenwashing.',
      southView: 'Strict Northern integrity thresholds and shift to expensive technological removals (DAC, biochar) act as non-tariff barriers excluding Southern forestry credits.',
      implication: 'Emerging economies build parallel domestic and regional carbon platforms (China ETS, India CCTS, Brazil SBCE, Gulf RVCMC, Africa ACMI).'
    }
  ];

  const reportArchitecture = [
    {
      ch: 'Executive & Chapter 1',
      title: 'The Macro Geopolitics of the Green Transition',
      tab: 'chokepoints',
      focus: 'Shift from hydrocarbon flows (Hormuz, Druzhba) to technology & mineral stocks; China supply chain dominance; failure of the $100B pledge.',
      metrics: 'China 60-90% mineral refining, OECD $115.9B (2022) with 2/3 loans, Africa receives only 2% clean energy capex.'
    },
    {
      ch: 'Chapter 2',
      title: 'Weaponization of Carbon Pricing & Green Protectionism',
      tab: 'cbam',
      focus: 'Domestic price signals transformed into border instruments; Brussels Effect; mechanics of CBAM Regulation (EU) 2023/956 and 2025 Omnibus simplification.',
      metrics: 'Jan 1, 2026 definitive phase; EUR 75.36/t Q1 2026 certificate price; 50-tonne de minimis threshold; back-loaded phase-in (2.5% in 2026 to 100% in 2034).'
    },
    {
      ch: 'Chapter 3',
      title: 'Fragmentation of Global Carbon Markets & Article 6',
      tab: 'carbon-markets',
      focus: 'Article 6.2, 6.4, 6.8 rulebook delays; phantom credits scandal (REDD+, cookstoves); rise of parallel systems (China ETS/CCER, India CCTS, Brazil SBCE, Gulf RVCMC).',
      metrics: 'Voluntary market drop from $2B+ peak (2021-22); China ETS covering 5B+ tonnes CO2 at CNY 60-100/t; Singapore bilateral ITMO corridors.'
    },
    {
      ch: 'Chapter 4',
      title: 'Case Study: CBAM vs. Global South "Climate Justice" Backlash',
      tab: 'cbam',
      focus: 'BASIC ministerial pushback; COP30 Belém showdown; India WTO safeguard warnings & FTA negotiation; paralysis of the WTO Appellate Body ("void appeals").',
      metrics: 'India steel/aluminium EU export share 20-25%; Mozambique aluminium exposure; G7 Climate Club; 2030 Scenarios A, B, C, D.'
    },
    {
      ch: 'Chapter 5',
      title: 'Paris Agreement 5-Actor Structured Matrix',
      tab: 'matrix-scenarios',
      focus: 'Comprehensive 5-actor analysis (USA second exit Jan 27 2026, EU, China, India, LDCs) across 3 strategic axes: Energy Security, Competitiveness, Diplomatic Alignment.',
      metrics: 'US second exit impact; EU 90% 2040 net reduction; India 500 GW 2030 non-fossil capacity; LDC 44-nation vulnerability.'
    },
    {
      ch: 'Chapter 6',
      title: 'Strategic Outlook & 14 Policy Recommendations',
      tab: 'matrix-scenarios',
      focus: 'Five structural trends to 2035; actionable recommendations R1-R14 spanning EU, Developing Economies, and the International System (Paris Club for Carbon).',
      metrics: 'CBAM Transition Facility; rules-based Article 9 mutual recognition; Common MRV Protocol; Bridgetown & MDB risk guarantee platforms.'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            <span>Strategic & Economic Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>Based on 24-Page Report (October 2026)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The Geopolitics of Climate Finance, Carbon Markets, and the Green Transition
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Climate policy has evolved from a cooperative, consensus-seeking environmental regime into a high-stakes arena of structural great-power competition. Instruments of decarbonization—concessional finance, border levies, carbon-credit integrity standards, and critical-mineral refining—now function as primary instruments of statecraft.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Central Analytical Thesis</span>
              <span className="text-sm font-semibold text-white">The Green Transition Is Being Weaponized</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Key Operational Milestone</span>
              <span className="text-sm font-semibold text-cyan-300">CBAM Definitive Phase (Jan 1, 2026)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Geopolitical Seismic Shift</span>
              <span className="text-sm font-semibold text-amber-300">US Paris Exit & Emerging Blocs</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Architecture & Technical Foundations (User Brief Section 1) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">System Architecture</span>
            <h2 className="text-xl font-bold text-white tracking-tight">1. Application Concept & Technical Foundations</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Core Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transform dense strategic, legal, and economic report findings into an intuitive decision-support intelligence platform. Synthesize the shift from hydrocarbon chokepoints to clean-energy monopolies, track financing conditionalities, simulate border carbon levies, and model 2030 diplomatic equilibrium scenarios.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Target Audience</h3>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li><strong className="text-slate-100">Trade & Foreign Ministry Negotiators:</strong> Calibrating WTO positions, CBAM Article 9 recognitions, and COP agenda strategy.</li>
              <li><strong className="text-slate-100">Industrial Exporters & Energy Planners:</strong> Assessing tariff liabilities on steel, aluminium, and fertilizers.</li>
              <li><strong className="text-slate-100">Multilateral Finance & Risk Analysts:</strong> Evaluating MDB reform, JETP disbursements, and cost-of-capital risk premia.</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Production Tech Stack</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              Architected for high-density analytical speed, zero layout jitter, and rigorous data modeling:
            </p>
            <div className="text-xs text-slate-300 space-y-1 font-mono">
              <div>· React 19 + TypeScript (Strict Type Safety)</div>
              <div>· Tailwind CSS v4 (Subdued dark canvas)</div>
              <div>· Responsive SVG Analytics (Zero external lag)</div>
              <div>· Real-time Tariffs & Factor Formula Engines</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 Key Friction Points Between North and South */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Doctrinal Matrix</span>
            <h2 className="text-xl font-bold text-white tracking-tight">The 6 Core Friction Points: North vs. South</h2>
          </div>
          <span className="text-xs text-slate-400">Select any dynamic to inspect arguments</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Selector list */}
          <div className="lg:col-span-5 space-y-2">
            {frictionPoints.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveFriction(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs font-medium cursor-pointer ${
                  activeFriction === idx
                    ? 'bg-slate-800 border-cyan-500/80 text-white shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-cyan-400 text-[11px]">0{item.id}.</span>
                  <span className="text-[10px] text-slate-400 truncate max-w-[200px]">{item.principle}</span>
                </div>
                <div className="font-semibold text-slate-100 text-sm leading-snug">{item.title}</div>
              </button>
            ))}
          </div>

          {/* Details pane */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400">Friction Dimension #{frictionPoints[activeFriction].id}</span>
                <h3 className="text-lg font-bold text-white">{frictionPoints[activeFriction].title}</h3>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                {frictionPoints[activeFriction].principle}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">Global North Rationale</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {frictionPoints[activeFriction].northView}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Global South Critique</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {frictionPoints[activeFriction].southView}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Operational Implication for Statecraft</span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {frictionPoints[activeFriction].implication}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Content Architecture & Page Breakdown */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Module Navigation</span>
            <h2 className="text-xl font-bold text-white tracking-tight">2. Report Content Architecture & Functional Modules</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reportArchitecture.map((item, index) => (
            <div 
              key={index} 
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-2.5 mb-4">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>{item.ch}</span>
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.focus}</p>
                <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/80 font-mono">
                  <span className="text-slate-400">Key metrics:</span> {item.metrics}
                </div>
              </div>

              <button
                onClick={() => onNavigate(item.tab)}
                className="w-full mt-auto flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-800 border border-slate-700/60 rounded-lg transition-colors cursor-pointer"
              >
                <span>Launch Interactive Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Timeline: 2009 to 2035 Horizon */}
      <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Chronology of Climate Statecraft (2009–2035)</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">Milestone Log</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono text-cyan-400">2009–2022</span>
            <div className="text-xs font-semibold text-white">$100B Pledge & Delivery Gap</div>
            <p className="text-[11px] text-slate-400">Pledged at Copenhagen; reported met only in 2022 ($115.9B), largely via commercial debt and contested additionality.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono text-cyan-400">Oct 2023 – Dec 2025</span>
            <div className="text-xs font-semibold text-white">CBAM Transitional Phase</div>
            <p className="text-[11px] text-slate-400">Importers file quarterly embedded emissions. BASIC group ministers denounce unilateral green trade barriers.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono text-cyan-400">Jan 1, 2026 – Present</span>
            <div className="text-xs font-semibold text-white">CBAM Definitive Phase & US Exit</div>
            <p className="text-[11px] text-slate-400">Financial liabilities accrue. First Q1 benchmark price set at EUR 75.36/t. US formally withdraws from Paris Agreement.</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
            <span className="text-xs font-mono text-cyan-400">2027 – 2035</span>
            <div className="text-xs font-semibold text-white">Surrender & Full Phase-In</div>
            <p className="text-[11px] text-slate-400">Feb 2027 certificate sales open; CBAM factor steepens from 2.5% to 100% by 2034; NCQG $300B target horizon.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
