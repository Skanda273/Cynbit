import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  FileCode2 
} from 'lucide-react';

interface HeroProps {
  onExploreStudio: () => void;
  onExploreBitElevate: () => void;
  onViewReport: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreStudio,
  onExploreBitElevate,
  onViewReport
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-brand-500/15 via-teal-500/10 to-emerald-500/15 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div className="text-center max-w-4xl mx-auto">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
          <span>The Optimistic Architect • Jaipur, India</span>
          <span className="text-slate-400">|</span>
          <span className="text-brand-600 dark:text-brand-400 font-semibold">Autonomous AI &amp; Next-Gen Systems</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Architecting the Future with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Autonomous AI Automation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Cynbit Technologies bridges the gap between high-precision technical engineering and scalable business growth. 
          Experience our interactive multi-agent configurator and real-world BitElevate workbench.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreStudio}
            className="flex items-center space-x-2 bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 border border-brand-700 text-sm"
          >
            <Sparkles className="w-4 h-4 text-brand-300" />
            <span>Launch AI Architecture Studio</span>
            <ArrowRight className="w-4 h-4 text-brand-300 ml-1" />
          </button>

          <button
            onClick={onExploreBitElevate}
            className="flex items-center space-x-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-sm"
          >
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span>Simulate BitElevate Sprint</span>
          </button>

          <button
            onClick={onViewReport}
            className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 px-3 py-2 rounded-lg"
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>View Technical Report</span>
          </button>
        </div>

        {/* Social Proof / Metrics Pill Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xl font-black text-slate-900 dark:text-white font-mono">99.9%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Cloud System Uptime</div>
          </div>
          <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xl font-black text-brand-600 dark:text-brand-400 font-mono">50k+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Concurrent Users Handled</div>
          </div>
          <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">+40%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Average Client ROI Uplift</div>
          </div>
          <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xl font-black text-purple-600 dark:text-purple-400 font-mono">100%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Asynchronous Remote Sprints</div>
          </div>
        </div>
      </div>
    </section>
  );
};
