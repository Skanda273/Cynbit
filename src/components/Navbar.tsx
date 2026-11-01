import React from 'react';
import { 
  Sparkles, 
  Moon, 
  Sun, 
  ExternalLink, 
  Layers, 
  GraduationCap, 
  Building2, 
  MessageSquareCode, 
  Send 
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  onOpenConsultation
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      {/* Top Banner indicating assessment deliverable */}
      <div className="bg-brand-900 text-brand-100 text-xs px-4 py-1.5 flex items-center justify-between font-mono">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span>CYNBIT ASSESSMENT PROTOTYPE: AI Architecture Studio &amp; Platform Enhancement</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] opacity-90 hidden sm:flex">
          <span>Candidate: <strong>Skanda273</strong></span>
          <span>•</span>
          <span>Role: <strong>Full Stack Developer Intern</strong></span>
          <span>•</span>
          <a 
            href="https://cynbit.in" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-1 hover:text-white underline underline-offset-2"
          >
            <span>Live Cynbit.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Cynbit Brand Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveSection('hero')}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-900 text-brand-300 font-bold border border-brand-700/60 shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-sm tracking-tight font-mono font-extrabold flex items-center">
              YN<span className="text-brand-400 mx-0.5 text-base">♾️</span>BIT
            </span>
          </div>
          <div>
            <div className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-white flex items-center space-x-1.5">
              <span>CYNBIT</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 border border-brand-300 dark:border-brand-700">
                STUDIO v2.0
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium -mt-0.5">
              Architecting Digital Optimism
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          <button
            onClick={() => setActiveSection('studio')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-all ${
              activeSection === 'studio'
                ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>AI Architecture Studio</span>
            <span className="text-[10px] bg-brand-600 text-white px-1.5 py-0.2 rounded font-mono">NEW</span>
          </button>

          <button
            onClick={() => setActiveSection('bitelevate')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-all ${
              activeSection === 'bitelevate'
                ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>BitElevate Hub</span>
          </button>

          <button
            onClick={() => setActiveSection('services')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-all ${
              activeSection === 'services'
                ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Services &amp; Stack</span>
          </button>

          <button
            onClick={() => setActiveSection('about')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-all ${
              activeSection === 'about'
                ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>About &amp; Mission</span>
            <span className="text-[9px] bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 py-0.2 rounded border border-amber-500/30">FIXED 404</span>
          </button>

          <button
            onClick={() => setActiveSection('report')}
            className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-all ${
              activeSection === 'report'
                ? 'bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <MessageSquareCode className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Technical Report</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Book / CTA Button */}
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center space-x-2 bg-brand-900 hover:bg-brand-800 text-brand-100 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all active:scale-95 border border-brand-700"
          >
            <Send className="w-3.5 h-3.5 text-brand-300" />
            <span>Start Discovery</span>
          </button>
        </div>
      </div>
    </header>
  );
};
