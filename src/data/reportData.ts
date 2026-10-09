/**
 * Data extracted comprehensively from the 24-page report:
 * "The Geopolitics of Climate Finance, Carbon Markets, and the Green Transition" (October 2026)
 */

export interface ChokepointItem {
  id: string;
  segment: string;
  concentration: string;
  dominantActors: string;
  strategicBehavior: string;
  riskLevel: 'critical' | 'high' | 'medium';
  marketShareNumber: number; // approximate % for visualization
  keyDetails: string;
}

export const SUPPLY_CHAIN_CHOKEPOINTS: ChokepointItem[] = [
  {
    id: 'rare-earth',
    segment: 'Rare-earth separation and magnets',
    concentration: '~90% of separation and magnet output; ~60-70% of mining',
    dominantActors: 'China',
    strategicBehavior: 'Export licensing (2025), partly suspended for one year after US-China leaders’ meeting',
    riskLevel: 'critical',
    marketShareNumber: 90,
    keyDetails: 'Controls on gallium and germanium (July 2023) and graphite (Dec 2023) preceded the sweeping rare-earth licensing regime of 2025.'
  },
  {
    id: 'graphite',
    segment: 'Battery-grade graphite (anode)',
    concentration: 'More than 90% of global output',
    dominantActors: 'China',
    strategicBehavior: 'Export licensing introduced December 2023',
    riskLevel: 'critical',
    marketShareNumber: 92,
    keyDetails: 'Crucial for electric vehicle battery anodes; domestic overcapacity and tight export quotas.'
  },
  {
    id: 'solar-pv',
    segment: 'Solar PV chain (polysilicon to module)',
    concentration: '80%+ at every stage; 90%+ in polysilicon and wafers',
    dominantActors: 'China',
    strategicBehavior: 'Overcapacity and low prices; Western tariffs and trade remedies',
    riskLevel: 'critical',
    marketShareNumber: 88,
    keyDetails: 'Price crash 2024-2025 enabled surge in exports to Pakistan, Africa, Middle East while triggering Western trade restrictions.'
  },
  {
    id: 'battery-cells',
    segment: 'Battery cells & chemistry',
    concentration: 'Roughly 70-80% global capacity',
    dominantActors: 'China',
    strategicBehavior: 'Technology-export restrictions on selected cathode processes; Western subsidy & tariff response',
    riskLevel: 'high',
    marketShareNumber: 75,
    keyDetails: 'Outbound FDI to Southeast Asia, Middle East, North Africa to serve local markets and bypass origin rules.'
  },
  {
    id: 'cobalt',
    segment: 'Cobalt mining and refining',
    concentration: '~70% mining (DRC); ~75% refining (China)',
    dominantActors: 'DRC / China',
    strategicBehavior: 'DRC export suspension and quota system (2025)',
    riskLevel: 'high',
    marketShareNumber: 72,
    keyDetails: 'DRC leveraging extraction dominance to force local beneficiation; China dominates chemical conversion.'
  },
  {
    id: 'lithium',
    segment: 'Lithium chemical refining',
    concentration: '~65% of chemical refining',
    dominantActors: 'China (mining: Australia, Chile)',
    strategicBehavior: 'Long-term offtake; state equity participation in Chile and Indonesia',
    riskLevel: 'high',
    marketShareNumber: 65,
    keyDetails: 'Chile national lithium strategy and Indonesian state equity mirror resource nationalism in mining.'
  },
  {
    id: 'nickel',
    segment: 'Nickel mining & processing',
    concentration: 'More than half of global mined supply',
    dominantActors: 'Indonesia',
    strategicBehavior: 'Ore export ban (2020); forced downstream smelting investment',
    riskLevel: 'medium',
    marketShareNumber: 55,
    keyDetails: 'Indonesia forced multinational battery firms to invest in domestic high-pressure acid leaching (HPAL) smelters.'
  }
];

export interface FinanceHistoryYear {
  year: number;
  reportedTotal: number; // in USD Billion
  grantPortionEstimated: number; // in USD Billion (~1/3 estimated real grant-equivalent)
  loansPortion: number; // in USD Billion (approx 2/3 loans)
  targetGoal: number; // 100
}

export const CLIMATE_FINANCE_DATA: FinanceHistoryYear[] = [
  { year: 2016, reportedTotal: 58.5, grantPortionEstimated: 19.5, loansPortion: 39.0, targetGoal: 100 },
  { year: 2018, reportedTotal: 78.9, grantPortionEstimated: 26.3, loansPortion: 52.6, targetGoal: 100 },
  { year: 2020, reportedTotal: 83.3, grantPortionEstimated: 27.8, loansPortion: 55.5, targetGoal: 100 },
  { year: 2021, reportedTotal: 89.6, grantPortionEstimated: 29.9, loansPortion: 59.7, targetGoal: 100 },
  { year: 2022, reportedTotal: 115.9, grantPortionEstimated: 38.6, loansPortion: 77.3, targetGoal: 100 }
];

export interface JETPProgram {
  country: string;
  pledgedUSD: number; // in Billions
  yearAnnounced: number;
  status: string;
  donorLead: string;
  obstacles: string;
}

export const JETP_PROGRAMS: JETPProgram[] = [
  {
    country: 'South Africa',
    pledgedUSD: 8.5,
    yearAnnounced: 2021,
    status: 'Delayed implementation',
    donorLead: 'G7 / EU / UK',
    obstacles: 'Overwhelmingly loans rather than grants; political resistance to Eskom coal plant closures; US withdrawal in 2025.'
  },
  {
    country: 'Indonesia',
    pledgedUSD: 20.0,
    yearAnnounced: 2022,
    status: 'Stalled negotiations',
    donorLead: 'US & Japan',
    obstacles: 'Disagreements on captive coal plant phase-outs for industrial smelters; high commercial debt ratio; US exit.'
  },
  {
    country: 'Vietnam',
    pledgedUSD: 15.5,
    yearAnnounced: 2022,
    status: 'Slow disbursement',
    donorLead: 'EU & UK',
    obstacles: 'Regulatory barriers for foreign renewables offtake; coal fleet dependency; conditional governance milestones.'
  },
  {
    country: 'Senegal',
    pledgedUSD: 2.7,
    yearAnnounced: 2023,
    status: 'Initial project pipeline',
    donorLead: 'EU / France / Germany',
    obstacles: 'Focus on 40% renewable target while developing domestic offshore natural gas reserves.'
  }
];

export interface CBAMFactorYear {
  year: number;
  factorPercentage: number;
  freeAllocationRetained: number;
}

export const CBAM_SCHEDULE: CBAMFactorYear[] = [
  { year: 2026, factorPercentage: 2.5, freeAllocationRetained: 97.5 },
  { year: 2027, factorPercentage: 5.0, freeAllocationRetained: 95.0 },
  { year: 2028, factorPercentage: 10.0, freeAllocationRetained: 90.0 },
  { year: 2029, factorPercentage: 22.5, freeAllocationRetained: 77.5 },
  { year: 2030, factorPercentage: 48.5, freeAllocationRetained: 51.5 },
  { year: 2031, factorPercentage: 61.0, freeAllocationRetained: 39.0 },
  { year: 2032, factorPercentage: 73.5, freeAllocationRetained: 26.5 },
  { year: 2033, factorPercentage: 86.0, freeAllocationRetained: 14.0 },
  { year: 2034, factorPercentage: 100.0, freeAllocationRetained: 0.0 }
];

export interface CBAMSector {
  id: string;
  name: string;
  directIntensityRange: [number, number]; // t CO2e / tonne of product
  typicalEmissions: number;
  unit: string;
  highRiskCountries: string[];
  notes: string;
}

export const CBAM_SECTORS: CBAMSector[] = [
  {
    id: 'steel-bf',
    name: 'Iron & Steel (Blast Furnace route)',
    directIntensityRange: [2.0, 2.4],
    typicalEmissions: 2.2,
    unit: 't CO2e / tonne steel',
    highRiskCountries: ['India', 'China', 'Ukraine', 'Turkey'],
    notes: 'Coal-heavy blast furnace route faces EUR 150-180/t full tariff penalty by 2034 without decarbonization.'
  },
  {
    id: 'steel-eaf',
    name: 'Iron & Steel (Electric Arc Furnace route)',
    directIntensityRange: [0.4, 0.8],
    typicalEmissions: 0.6,
    unit: 't CO2e / tonne steel',
    highRiskCountries: ['Turkey', 'United States', 'South Korea'],
    notes: 'Significantly lower direct emissions, but indirect electricity factor applies if grid is coal-fired.'
  },
  {
    id: 'aluminium',
    name: 'Aluminium (Smelting & Products)',
    directIntensityRange: [4.0, 16.0],
    typicalEmissions: 8.5,
    unit: 't CO2e / tonne Al',
    highRiskCountries: ['Mozambique', 'India', 'South Africa', 'China'],
    notes: 'Disparity between hydro-powered smelters (4 t CO2e) and coal-powered smelters (up to 16 t CO2e). Mozal represents >50% of Mozambican exports.'
  },
  {
    id: 'fertilisers',
    name: 'Fertilisers (Ammonia / Nitric Acid)',
    directIntensityRange: [1.8, 2.8],
    typicalEmissions: 2.3,
    unit: 't CO2e / tonne ammonia',
    highRiskCountries: ['Egypt', 'Algeria', 'India', 'Trinidad & Tobago'],
    notes: 'Critical for agricultural yields; acute vulnerability for North African producers exporting to Mediterranean.'
  },
  {
    id: 'cement',
    name: 'Cement & Clinker',
    directIntensityRange: [0.65, 0.95],
    typicalEmissions: 0.8,
    unit: 't CO2e / tonne clinker',
    highRiskCountries: ['Turkey', 'Ukraine', 'Morocco'],
    notes: 'Heavy process emissions from calcination CaCO3 -> CaO. High freight-to-value ratio makes border tax decisive.'
  },
  {
    id: 'hydrogen',
    name: 'Hydrogen (Grey SMR vs Green)',
    directIntensityRange: [0.1, 10.5],
    typicalEmissions: 9.0,
    unit: 't CO2e / tonne H2',
    highRiskCountries: ['Gulf States', 'Egypt', 'Chile'],
    notes: 'Unabated steam methane reforming faces prohibitive penalties; EU actively subsidizing green corridor offtake.'
  }
];

export interface GreenProtectionismTaxonomy {
  instrument: string;
  examples: string;
  mechanism: string;
  geopoliticalEffect: string;
}

export const GREEN_PROTECTIONISM_TAXONOMY: GreenProtectionismTaxonomy[] = [
  {
    instrument: 'Border carbon adjustment',
    examples: 'EU CBAM; UK CBAM (planned 2027)',
    mechanism: 'Carbon cost levied on embedded emissions of imports',
    geopoliticalEffect: 'Exports the regulator’s measurement and pricing standards; extraterritoriality'
  },
  {
    instrument: 'Clean-technology subsidies & local content',
    examples: 'US tax credits (IRA / 2025 reconcile); EU Net-Zero Industry Act',
    mechanism: 'Tax credits, procurement preferences, domestic-content tests',
    geopoliticalEffect: 'Industrial reshoring; discrimination claims by exporters at WTO'
  },
  {
    instrument: 'Trade remedies on clean technology',
    examples: 'Anti-dumping & countervailing duties on solar, EVs (EU, US, India)',
    mechanism: 'Duties on Chinese-origin manufactured goods',
    geopoliticalEffect: 'Diversification; supply-chain re-routing through Southeast Asia'
  },
  {
    instrument: 'Export controls on inputs',
    examples: 'China (rare earths, graphite, antimony); Indonesia (nickel); DRC (cobalt)',
    mechanism: 'Licensing regimes, quotas, outright raw export bans',
    geopoliticalEffect: 'Leverage over downstream Western manufacturers; forced in-country value capture'
  },
  {
    instrument: 'Product-footprint and due-diligence rules',
    examples: 'EU Deforestation Regulation (EUDR); EU Batteries Regulation',
    mechanism: 'Mandatory geolocation disclosure, footprint thresholds, chain of custody',
    geopoliticalEffect: 'Standard-setting authority over global agricultural and mineral value chains'
  },
  {
    instrument: 'Credit-eligibility rules',
    examples: 'EU 2040 international-credit rules; ICAO CORSIA scheme',
    mechanism: 'Strict quality criteria, additionality rules, host-country authorization',
    geopoliticalEffect: 'Gatekeeping of Southern credit supply; penalizing nature-based offsets'
  }
];

export interface ParisActor {
  id: string;
  name: string;
  flag: string;
  geopoliticalPros: string;
  economicCons: string;
  strategicPosition: string;
  energySecurity: { pro: string; con: string };
  economicCompetitiveness: { pro: string; con: string };
  diplomaticAlignment: { pro: string; con: string };
}

export const PARIS_ACTORS: ParisActor[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    geopoliticalPros: 'Historic architect of the bottom-up NDC design and a leading voice in global standards; convening power through bilateral finance and technology alliances.',
    economicCons: 'Perceived external constraint on domestic energy exploitation; domestic costs of decarbonization without reciprocal guarantees from rivals; politically contested climate finance.',
    strategicPosition: 'Formally withdrawn since 27 January 2026 (second exit); pursues energy-export dominance (LNG), tariffs and bilateral deals; risks ceding clean-tech markets and international rule-setting to EU and China.',
    energySecurity: {
      pro: 'Shale and LNG surplus supports total domestic energy autonomy.',
      con: 'Exit forgoes rapid modernization and domestic electrification gains.'
    },
    economicCompetitiveness: {
      pro: 'Lower domestic regulatory burden in fossil and hydrocarbon sectors.',
      con: 'Risks losing trillion-dollar clean-tech export markets to Chinese state firms.'
    },
    diplomaticAlignment: {
      pro: 'Unfettered unilateral bargaining freedom.',
      con: 'Severe diplomatic isolation; total loss of soft-power credibility on global climate finance.'
    }
  },
  {
    id: 'eu',
    name: 'European Union',
    flag: '🇪🇺',
    geopoliticalPros: 'Global platform for regulatory leadership; validates EU legislative model; exports ETS and CBAM standards globally via Brussels Effect; reduced fossil import exposure after 2022.',
    economicCons: 'Highest domestic carbon and industrial power costs among major economies; acute leakage and de-industrialization pressure against China and US; heavy clean-tech import reliance.',
    strategicPosition: 'Committed to preserving the Paris architecture: 2035 NDC range of 66-72.5% cut, 90% net reduction by 2040; Climate Clubs, CBAM enforcement, and Global Gateway partnerships; under fiscal strain.',
    energySecurity: {
      pro: 'Massive wind/solar buildout reduces hydrocarbon import vulnerability.',
      con: 'Creates acute new critical-mineral and battery dependence on China.'
    },
    economicCompetitiveness: {
      pro: 'First-mover in circular and clean industrial processes; substantial ETS auction revenues.',
      con: 'Sustained energy and carbon cost handicap against subsidizing foreign rivals.'
    },
    diplomaticAlignment: {
      pro: 'Unequaled global norm-setting authority and multilateral standing.',
      con: 'Severe legitimacy deficit across the Global South over CBAM unilateralism and loan finance.'
    }
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    geopoliticalPros: 'Claims responsible-power leadership without binding international caps; fills vacuum left by US withdrawal; massive global monopoly over clean-energy technology exports.',
    economicCons: 'Coal power dependence and rising absolute emissions until peak; global overcapacity backlash and anti-subsidy duties; large CBAM exposure in gross export volume.',
    strategicPosition: 'Emissions peak before 2030, carbon neutrality before 2060; 2035 NDC target of 7-10% below peak; retains developing-country status in UNFCCC; expanding national ETS to steel/cement to claim CBAM Article 9 deductions.',
    energySecurity: {
      pro: 'Aggressive electrification and domestic supply chains curtail oil-import vulnerability.',
      con: 'Persistent coal fleet reliance for industrial power and grid stability.'
    },
    economicCompetitiveness: {
      pro: 'Unbeatable manufacturing scale and cost leadership in solar, batteries, and EVs.',
      con: 'Excess capacity leads to price deflation, trade remedy friction, and factory pushback abroad.'
    },
    diplomaticAlignment: {
      pro: 'Self-styled champion and financier of the Global South and BRICS alternative.',
      con: 'Mounting pressure from island states and West to accept Annex-II-like contributor obligations.'
    }
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    geopoliticalPros: 'Codifies equity (CBDR-RC) and historical responsibility; establishes Global South leadership; clean-energy manufacturing incentives and lower oil import bill; leads International Solar Alliance.',
    economicCons: 'Coal-dependent power grid; heavy CBAM exposure on export-oriented steel, aluminium, and fertilisers; high domestic cost of capital (2-3x developed world); constrained fiscal space.',
    strategicPosition: 'Net zero 2070 target; 500 GW non-fossil capacity by 2030; Carbon Credit Trading Scheme (CCTS) in implementation; resists binding sectoral phase-outs; hedges between EU FTA, BRICS, and Quad.',
    energySecurity: {
      pro: 'Gigawatt-scale domestic solar expansion curtails oil and coal import exposure.',
      con: 'Coal generation remains indispensable for base-load and seasonal industrial surges.'
    },
    economicCompetitiveness: {
      pro: 'World-class cost competitiveness in solar generation and digital grid infrastructure.',
      con: 'CBAM tariffs and high financing risk premia penalize domestic heavy manufacturing.'
    },
    diplomaticAlignment: {
      pro: 'Influential multi-aligned broker speaking for emerging developing nations.',
      con: 'Vulnerable to being squeezed between rival Western standards and Chinese supply dominance.'
    }
  },
  {
    id: 'ldcs',
    name: 'Least Developed Countries (LDCs)',
    flag: '🌐',
    geopoliticalPros: 'Equal formal vote and parity in UNFCCC plenary; direct moral standing as most climate-vulnerable states; access to Loss and Damage Fund and specialized adaptation windows.',
    economicCons: 'Climate finance received is overwhelmingly debt-creating loans; weak institutional absorptive capacity; acute CBAM export vulnerability for key commodity exporters (e.g. Mozambique aluminium).',
    strategicPosition: 'LDC Group of 44 nations negotiates as a cohesive bloc; top priority is 100% grant-based adaptation finance and unconditioned technical transfers; highly exposed to Northern donor fatigue.',
    energySecurity: {
      pro: 'Decentralized mini-grids and off-grid solar offer potential to leapfrog traditional utilities.',
      con: 'Total reliance on foreign capital, concessional grants, and imported equipment.'
    },
    economicCompetitiveness: {
      pro: 'Minimal direct carbon-trade exposure due to non-industrial baseline economy.',
      con: 'Mounting annual climate loss costs and crippling foreign sovereign debt service burdens.'
    },
    diplomaticAlignment: {
      pro: 'High moral authority in international climate jurisprudence and COP plenaries.',
      con: 'Almost zero retaliatory or unilateral economic leverage against great powers.'
    }
  }
];

export interface Scenario2030 {
  id: string;
  name: string;
  likelihood: 'Highest' | 'High' | 'Low-Moderate (Tail Risk)' | 'Moderate';
  description: string;
  leadingIndicators: string[];
  geopoliticalImplication: string;
}

export const SCENARIOS_2030: Scenario2030[] = [
  {
    id: 'scenario-a',
    name: 'Scenario A: Managed Accommodation',
    likelihood: 'Highest',
    description: 'CBAM stays intact; rules-based recognition of foreign carbon prices (Article 9); a dedicated support facility for LDCs and lower-middle-income exporters; WTO disputes remain symbolic or paused in consultations.',
    leadingIndicators: [
      'EU Commission issues Article 9 recognition guidelines for India CCTS and Brazil SBCE',
      'Portion of CBAM certificate revenue earmarked for developing-country decarbonization facility',
      'US-EU flexibilities negotiated for small and medium enterprises'
    ],
    geopoliticalImplication: 'Preserves the multilateral trade order through hub-and-spoke bilateral accommodations, preventing an all-out trade war.'
  },
  {
    id: 'scenario-b',
    name: 'Scenario B: Grudging Compliance',
    likelihood: 'High',
    description: 'Exporters comply and rush domestic ETS creation to retain revenues; high-level Southern rhetoric persists; the international finance gap remains largely unresolved; WTO litigation is limited.',
    leadingIndicators: [
      'Spread of intensity-based carbon markets across Turkey, Brazil, India, Indonesia, and Vietnam',
      'Continued procedural stalemate at COP subsidiary bodies over trade measures',
      'Corporates absorb compliance and verification costs as a standard cost of European market access'
    ],
    geopoliticalImplication: 'The "Brussels Effect" triumphs de facto, but deepens diplomatic resentment across the Global South.'
  },
  {
    id: 'scenario-c',
    name: 'Scenario C: Escalation & Retaliation',
    likelihood: 'Low-Moderate (Tail Risk)',
    description: 'Formal WTO panel rulings appealed into the void; tit-for-tat trade retaliation notices; spillover into critical-mineral export bans and raw material embargoes.',
    leadingIndicators: [
      'India invokes Article 8 safeguard retaliation against EU imports',
      'China expands export licensing to refined lithium or permanent magnet manufacturing equipment',
      'BRICS bloc declares mutual recognition and excludes Western certified commodities'
    ],
    geopoliticalImplication: 'Bifurcation of global trade into rival green blocs, spiking clean-tech capital expenditure globally by 30-50%.'
  },
  {
    id: 'scenario-d',
    name: 'Scenario D: Dilution & Postponement',
    likelihood: 'Moderate',
    description: 'European Commission narrows CBAM scope or extends grace periods under intense industrial lobbying and bilateral trade pressure; price signal credibility degrades.',
    leadingIndicators: [
      'Definitive financial surrender phase postponed beyond 2027',
      'Broad sectoral exemptions inserted into bilateral FTAs (e.g., EU-India, EU-Mercosur)',
      'ETS carbon prices slump below EUR 60/tonne due to political pushback'
    ],
    geopoliticalImplication: 'Europe loses standard-setting hegemony and fails to halt domestic industrial relocation.'
  }
];

export interface PolicyRecommendation {
  id: string;
  category: 'EU & Likeminded' | 'Developing & Emerging' | 'International System';
  code: string;
  title: string;
  summary: string;
  timeline: string;
  priority: 'Immediate (2026-2028)' | 'Medium-term (2028-2030)' | 'Strategic Architecture';
}

export const POLICY_RECOMMENDATIONS: PolicyRecommendation[] = [
  {
    id: 'r1',
    category: 'EU & Likeminded',
    code: 'R1',
    title: 'Sequence CBAM Obligations with Finance Delivery',
    summary: 'Establish a transparent link between the CBAM factor schedule and delivery of support to exporting countries. Capitalize a "CBAM Transition Facility" from a defined proportion of CBAM revenue with priority for LDCs and lower-middle-income exporters.',
    timeline: '2026-2028',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r2',
    category: 'EU & Likeminded',
    code: 'R2',
    title: 'Institutionalise Rules-Based Mutual Recognition',
    summary: 'Publish transparent, objective criteria for recognizing foreign carbon prices and MRV protocols under Article 9, with clear decision timetables and an appeal procedure, sequencing decisions for India, Brazil, Indonesia, and Turkey.',
    timeline: '2026-2027',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r3',
    category: 'EU & Likeminded',
    code: 'R3',
    title: 'Calibrate Default Values with Verification Capacity Support',
    summary: 'Set default values to encourage accurate measurement without arbitrarily punishing producers who lack accredited verifiers. Finance accreditation capacity and accept accredited local bodies under common standards.',
    timeline: '2026-2028',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r4',
    category: 'EU & Likeminded',
    code: 'R4',
    title: 'Defend CBAM via a WTO Interpretive Understanding',
    summary: 'Rather than risking appeals into the void, negotiate a plurilateral ministerial declaration clarifying the application of GATT Article XX to non-discriminatory border carbon adjustments.',
    timeline: '2027-2029',
    priority: 'Medium-term (2028-2030)'
  },
  {
    id: 'r5',
    category: 'EU & Likeminded',
    code: 'R5',
    title: 'Treat Downstream Scope Expansion with Caution',
    summary: 'Ensure initial raw/semi-finished CBAM implementation is administratively robust and support commitments are met before extending scope to complex finished downstream articles.',
    timeline: '2027-2030',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r6',
    category: 'Developing & Emerging',
    code: 'R6',
    title: 'Design Domestic Carbon Pricing for Article 9 Compatibility',
    summary: 'Develop national compliance carbon markets (such as India CCTS and Brazil SBCE) with clear coverage, verifiable data, and effective pricing so that revenues are retained domestically rather than paid to Brussels.',
    timeline: '2026-2028',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r7',
    category: 'Developing & Emerging',
    code: 'R7',
    title: 'Coordinate on Technical Positions Rather than Pure Rhetoric',
    summary: 'Strengthen Global South leverage by formulating a joint technical proposal on default values, MRV capacity, and revenue earmarking, including a minimum-viable "Common MRV Protocol".',
    timeline: '2026-2027',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r8',
    category: 'Developing & Emerging',
    code: 'R8',
    title: 'Preserve Clean-Tech Market Diversification',
    summary: 'Avoid exclusive reliance on any single supplier or bloc; diversify across Chinese, European, Japanese, Korean, and domestic clean-energy technology sources to preserve bargaining leverage.',
    timeline: 'Continuous',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r9',
    category: 'Developing & Emerging',
    code: 'R9',
    title: 'Capture In-Country Processing Value in Critical Minerals',
    summary: 'Develop downstream refining and battery manufacturing capacity through multi-investor joint ventures while avoiding abrupt export bans that provoke investor retreat and retaliatory tariffs.',
    timeline: '2026-2030',
    priority: 'Medium-term (2028-2030)'
  },
  {
    id: 'r10',
    category: 'International System',
    code: 'R10',
    title: 'Establish a "Paris Club for Carbon"',
    summary: 'Create a multilateral mutual-recognition framework under or alongside Article 6 with minimum integrity floors (baselines, additionality, registries, corresponding adjustments) open to all qualifying systems.',
    timeline: '2027-2030',
    priority: 'Strategic Architecture'
  },
  {
    id: 'r11',
    category: 'International System',
    code: 'R11',
    title: 'Reform Multilateral Climate Finance Accounting',
    summary: 'Adopt standardized definitions of "climate-specific" finance, publish audited grant-equivalent values, and report real country-level disbursements to safeguard NCQG credibility.',
    timeline: '2026-2028',
    priority: 'Immediate (2026-2028)'
  },
  {
    id: 'r12',
    category: 'International System',
    code: 'R12',
    title: 'Scale Bridgetown & MDB Capital Adequacy Reforms',
    summary: 'Lower developing-country cost of capital (currently 2-3x higher) through expanded MDB balance-sheet leverage, foreign exchange risk guarantee platforms, and climate-resilient debt clauses.',
    timeline: '2026-2030',
    priority: 'Strategic Architecture'
  },
  {
    id: 'r13',
    category: 'International System',
    code: 'R13',
    title: 'Create a Joint UNFCCC-WTO Standing Trade-Climate Forum',
    summary: 'Institutionalize a standing joint mechanism between the WTO and UNFCCC secretariats with a legal mandate to review trade measures and recommend accommodations rather than waiting for litigated impasse.',
    timeline: '2026-2028',
    priority: 'Strategic Architecture'
  },
  {
    id: 'r14',
    category: 'International System',
    code: 'R14',
    title: 'De-escalate Mineral Export Controls via Notification & Offtake',
    summary: 'Establish transparency norms and advance-notification periods for critical-mineral export restrictions, paired with Western commitments to long-term offtake agreements and floor-price guarantees.',
    timeline: '2027-2030',
    priority: 'Strategic Architecture'
  }
];
