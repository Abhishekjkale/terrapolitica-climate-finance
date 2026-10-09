import React from 'react';
import { X, Download, Copy, Check, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategicBriefModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const briefText = `EXECUTIVE DOSSIER: THE GEOPOLITICS OF CLIMATE FINANCE, CARBON MARKETS, AND THE GREEN TRANSITION (October 2026)

1. CORE THESIS
The green transition is being weaponized. The 20th-century order rested on hydrocarbon chokepoints (Hormuz, Druzhba). The 21st-century order forms around manufactured technology and refining nodes: refined lithium (65% China), battery-grade graphite (>90% China), cobalt (70% mining DRC, 75% refining China), and solar PV chains (80-90%+ China). Whoever controls these nodes acquires leverage over the pace, cost, and distribution of global decarbonization.

2. CLIMATE FINANCE AS CURRENCY OF LEVERAGE
- $100B Pledge: Formalized at Cancún 2010, reached two years late in 2022 at $115.9B. Over two-thirds consisted of debt-creating loans; Oxfam estimates true grant-equivalents at only ~$38B.
- NCQG at COP29 (Baku): $300B/yr by 2035 adopted against estimated Southern requirements of $1.3T+.
- Cost of Capital: Emerging economies face WACCs 2-3x higher than advanced economies, raising levelized solar power costs by 30-50% despite equal solar resources. Africa receives only ~2% of global clean-energy investment.
- Bilateral Fragility: South Africa ($8.5B) and Indonesia ($20B) JETPs crippled by loan burdens and US exit in 2025.

3. THE WEAPONIZATION OF CARBON PRICING (EU CBAM)
- Definitive phase started 1 January 2026; Q1 2026 benchmark certificate price EUR 75.36/tonne CO2e.
- 50-tonne de minimis threshold excludes 90% of importers while capturing 99% of emissions.
- CBAM Factor Phase-In: 2.5% in 2026, 5% in 2027, 10% in 2028, 22.5% in 2029, steepening to 48.5% in 2030 and 100% in 2034.
- Legal & Strategic Risk: Extraterritorial regulatory export under the "Brussels Effect"; WTO Appellate Body paralyzed ("appealing into the void"); India reservations on Article 8 safeguard retaliation.

4. CARBON MARKETS & ARTICLE 6
- Delayed rulebook operationalized 2025; phantom credit investigations collapsed voluntary market confidence.
- Emergence of parallel non-interoperable compliance platforms: China ETS (>5B t CO2), India CCTS, Brazil SBCE.
- Bilateral carbon corridors (Singapore, Japan JCM, Switzerland) and African "carbon nationalism".

5. PARIS AGREEMENT MATRIX & 2030 OUTLOOK
- US second withdrawal (27 Jan 2026) removes largest historical emitter, ceding rule-setting to EU and China.
- Most probable trajectory: Scenario A (Managed Accommodation) or blend with Scenario B (Grudging Compliance).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Executive Strategic Dossier</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300 font-mono leading-relaxed bg-slate-950/40">
          <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-200">
            {briefText}
          </pre>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-sans">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Source Pedigree & Verification Status</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Directly grounded in European Commission Regulation (EU) 2023/956, 2025 Omnibus simplification, OECD Climate Finance series, UNFCCC COP decisions (Cancún, Glasgow, Baku, Belém), WTO GATT jurisprudence, and IEA critical minerals data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
