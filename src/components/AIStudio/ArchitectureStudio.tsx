import React, { useState, useMemo } from 'react';
import { 
  INDUSTRY_CONFIGS 
} from '../../data/industryData';
import type { 
  IndustryType, 
  AgentNode 
} from '../../types';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Download, 
  Check, 
  Zap, 
  Sliders, 
  Activity, 
  Database, 
  FileText, 
  Code, 
  Award,
  Calendar,
  Terminal,
  FileSearch,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

const iconMap: Record<string, React.ElementType> = {
  Bot,
  Cpu,
  Database,
  FileSearch,
  ShieldCheck,
  TrendingUp,
  Activity,
  FileText,
  Calendar,
  UserCheck,
  Code,
  Terminal,
  Award
};

export const ArchitectureStudio: React.FC<{ onBookCall: (notes: string) => void }> = ({ onBookCall }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('ecommerce');
  const [volume, setVolume] = useState<number>(25000);
  const [humanTimeMin, setHumanTimeMin] = useState<number>(18);
  const [hourlyRate, setHourlyRate] = useState<number>(450);
  const [autonomyRate, setAutonomyRate] = useState<number>(85);
  const [selectedNode, setSelectedNode] = useState<AgentNode | null>(null);
  const [copiedBlueprint, setCopiedBlueprint] = useState<boolean>(false);

  const config = INDUSTRY_CONFIGS[selectedIndustry];

  // Set default node when industry changes
  React.useEffect(() => {
    setVolume(config.baseVolume);
    setHumanTimeMin(config.avgHumanTimeMin);
    setHourlyRate(config.hourlyRateINR);
    setSelectedNode(config.suggestedAgents[0]);
  }, [selectedIndustry]);

  // Dynamic ROI calculation
  const roi = useMemo(() => {
    // Current cost calculation
    const totalHumanMinutesMonthly = volume * humanTimeMin;
    const totalHumanHoursMonthly = totalHumanMinutesMonthly / 60;
    void totalHumanHoursMonthly;

    // AI Automation cost (approx 8% of human cost for infra, tokens, hosting)
    const automatedTasks = volume * (autonomyRate / 100);
    const savedHoursMonthly = (automatedTasks * humanTimeMin) / 60;
    const monthlyGrossSavingsINR = savedHoursMonthly * hourlyRate;
    const estimatedAITokenCostINR = automatedTasks * 1.85; // avg token cost per interaction
    const netMonthlySavingsINR = Math.max(0, monthlyGrossSavingsINR - estimatedAITokenCostINR);
    const netAnnualSavingsINR = netMonthlySavingsINR * 12;

    const speedupMultiplier = Math.round((humanTimeMin * 60) / 12); // compared to 12s AI execution

    return {
      monthlySavingsINR: Math.round(netMonthlySavingsINR),
      annualSavingsINR: Math.round(netAnnualSavingsINR),
      savedHoursMonthly: Math.round(savedHoursMonthly),
      speedupMultiplier,
      efficiencyPct: autonomyRate
    };
  }, [volume, humanTimeMin, hourlyRate, autonomyRate]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleExportBlueprint = () => {
    const blueprintData = {
      generator: "Cynbit Autonomous Architecture Engine v2.0",
      timestamp: new Date().toISOString(),
      industry: config.title,
      parameters: {
        monthlyVolume: volume,
        avgHandlingTimeMinutes: humanTimeMin,
        autonomyTargetPercent: autonomyRate,
        hourlyLaborRateINR: hourlyRate
      },
      projectedImpact: {
        annualSavingsINR: `₹${(roi.annualSavingsINR / 100000).toFixed(2)} Lakhs`,
        hoursReclaimedMonthly: roi.savedHoursMonthly,
        speedupMultiplier: `${roi.speedupMultiplier}x`
      },
      orchestrationPipeline: config.suggestedAgents.map(a => ({
        agent: a.name,
        role: a.role,
        model: a.model,
        latency: a.latency,
        accuracy: a.metrics.accuracy
      }))
    };

    const textToCopy = JSON.stringify(blueprintData, null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopiedBlueprint(true);
    triggerConfetti();
    setTimeout(() => setCopiedBlueprint(false), 3000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-brand-300 dark:border-brand-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Value Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Cynbit Autonomous AI Architecture Studio
        </h2>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          Configure an enterprise-grade multi-agent autonomous system for your workflow. 
          Simulate real-time task routing, token latency, and projected annual financial returns.
        </p>
      </div>

      {/* Step 1: Industry Preset Selector */}
      <div className="mb-8">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          1. Select Business Domain / Workload Ecosystem
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.values(INDUSTRY_CONFIGS).map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                selectedIndustry === ind.id
                  ? 'border-brand-600 bg-brand-50/80 dark:bg-brand-950/60 dark:border-brand-500 shadow-md ring-2 ring-brand-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-mono font-bold text-brand-700 dark:text-brand-400 uppercase">
                {ind.id}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-1">
                {ind.title.split('&')[0]}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {ind.tagline}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Grid: Pipeline Visualizer + Control Sliders + Impact Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Multi-Agent Orchestration Flow (7 Cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Multi-Agent Orchestration Architecture</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Click any agent node to inspect underlying model reasoning, sandbox tools, and latency SLA.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono border border-emerald-300 dark:border-emerald-800 flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>4 Active Agents</span>
            </span>
          </div>

          {/* Interactive Agent Pipeline Nodes */}
          <div className="space-y-3 relative">
            {/* Visual connector line in background */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-400 via-brand-600 to-emerald-500 z-0 hidden sm:block opacity-40"></div>

            {config.suggestedAgents.map((agent, idx) => {
              const IconComponent = iconMap[agent.icon] || Bot;
              const isSelected = selectedNode?.id === agent.id;

              return (
                <div
                  key={agent.id}
                  onClick={() => setSelectedNode(agent)}
                  className={`relative z-10 p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-brand-500 bg-brand-50/90 dark:bg-brand-950/70 shadow-md ring-2 ring-brand-400/30'
                      : 'border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className={`p-2.5 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                          {agent.name}
                        </h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {agent.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                        {agent.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto text-right text-xs shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200 dark:border-slate-800">
                    <span className="font-mono text-brand-700 dark:text-brand-300 font-semibold">
                      {agent.latency}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {agent.model}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Node Inspector */}
          {selectedNode && (
            <div className="mt-5 p-4 rounded-xl bg-slate-900 text-slate-100 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-brand-400 font-mono font-semibold flex items-center space-x-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Agent Telemetry &amp; Execution Spec</span>
                </span>
                <span className="text-slate-400 font-mono">{selectedNode.model}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mt-3">
                <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">AVG LATENCY</div>
                  <div className="text-brand-300 font-bold mt-0.5">{selectedNode.latency}</div>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">ACCURACY BENCHMARK</div>
                  <div className="text-emerald-400 font-bold mt-0.5">{selectedNode.metrics.accuracy}</div>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">THROUGHPUT RATE</div>
                  <div className="text-cyan-300 font-bold mt-0.5">{selectedNode.metrics.tokensPerSec}</div>
                </div>
                <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
                  <div className="text-slate-400 text-[10px]">SAFEGUARD LEVEL</div>
                  <div className="text-amber-300 font-bold mt-0.5">Zero-Leak Guard</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Parameters & Dynamic ROI Dashboard (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Workload Sliders Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-sm">
              <Sliders className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Operational Sliders &amp; Cost Inputs</span>
            </h3>

            <div className="space-y-4">
              {/* Monthly Volume Slider */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Monthly Task / Ticket Volume</span>
                  <span className="font-mono font-bold text-brand-700 dark:text-brand-400">
                    {volume.toLocaleString()} ops
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
              </div>

              {/* Handling Time Slider */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Manual Human Handling Time</span>
                  <span className="font-mono font-bold text-brand-700 dark:text-brand-400">
                    {humanTimeMin} mins / task
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={humanTimeMin}
                  onChange={(e) => setHumanTimeMin(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
              </div>

              {/* Hourly Rate Slider */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Hourly Staff Labor Cost (INR)</span>
                  <span className="font-mono font-bold text-brand-700 dark:text-brand-400">
                    ₹{hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
              </div>

              {/* Autonomy Target */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Target Autonomous Resolution</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {autonomyRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="95"
                  step="5"
                  value={autonomyRate}
                  onChange={(e) => setAutonomyRate(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Real-Time Impact & Financial ROI Card */}
          <div className="bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white rounded-2xl p-6 shadow-xl border border-brand-800/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-800/80">
              <span className="text-xs uppercase font-mono tracking-wider text-brand-300 font-semibold flex items-center space-x-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
                <span>Projected Business Impact</span>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-brand-800/60 text-brand-200 font-mono">
                Formula v2.1
              </span>
            </div>

            {/* Savings Big Number */}
            <div className="mb-4">
              <div className="text-xs text-brand-200">Estimated Net Annual Savings</div>
              <div className="text-3xl font-extrabold text-white font-mono mt-1 flex items-baseline space-x-1">
                <span>₹{(roi.annualSavingsINR / 100000).toFixed(2)}</span>
                <span className="text-base font-normal text-brand-300">Lakhs / year</span>
              </div>
              <p className="text-[11px] text-brand-300/80 mt-1">
                Net of cloud GPU inference tokens &amp; infrastructure overhead.
              </p>
            </div>

            {/* Sub Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-800/60 font-mono text-xs">
              <div className="bg-brand-900/60 p-2.5 rounded-lg border border-brand-700/40">
                <div className="text-[10px] text-brand-300 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>HOURS SAVED</span>
                </div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {roi.savedHoursMonthly.toLocaleString()} <span className="text-[11px] font-normal">hrs/mo</span>
                </div>
              </div>

              <div className="bg-brand-900/60 p-2.5 rounded-lg border border-brand-700/40">
                <div className="text-[10px] text-brand-300 flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>SPEED MULTIPLIER</span>
                </div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {roi.speedupMultiplier}x <span className="text-[11px] font-normal">faster</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 space-y-2">
              <button
                onClick={handleExportBlueprint}
                className="w-full flex items-center justify-center space-x-2 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-95 text-xs"
              >
                {copiedBlueprint ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-900" />
                    <span>Architecture Blueprint Copied!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-900" />
                    <span>Copy Architecture Spec (JSON)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onBookCall(`Industry: ${config.title}, Projected Volume: ${volume}/mo, Est. Savings: ₹${(roi.annualSavingsINR / 100000).toFixed(2)}L`)}
                className="w-full flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 transition-all text-xs"
              >
                <span>Book Blueprint Review with Architects</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
