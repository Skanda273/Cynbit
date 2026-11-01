import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-brand-900 text-brand-300 font-bold flex items-center justify-center font-mono text-xs border border-brand-700">
                ♾️
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm">
                CYNBIT TECHNOLOGIES
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Architecting the digital future with autonomous AI agents, enterprise full-stack systems, 
              and real-world engineering careers.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              CIN: U62011RJ2024PTC093652
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('studio')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  AI Architecture Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bitelevate')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  BitElevate Engineering Labs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Enterprise Services Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About &amp; Social Impact (Manav Seva)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('report')} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Assessment Technical Report
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">
              Corporate Headquarters
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>32/115 RHB, Pratap Nagar, Jaipur, Rajasthan 302033</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>+91 89479 62667 / +91 78912 09777</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:opportunities@cynbit.in" className="hover:underline">
                  opportunities@cynbit.in
                </a>
              </li>
            </ul>
          </div>

          {/* Assessment & Candidate Verification */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
              <span>Candidate Submission</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-[11px] text-slate-500">
              Built for <strong>Cynbit Technologies Full Stack Developer Intern Challenge</strong> (Phase 2 Practical Evaluation).
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 font-mono text-[10px] text-slate-500 space-y-0.5">
              <div>Candidate: <strong>Skanda273</strong></div>
              <div>Git: Clean commits &amp; architecture</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} Cynbit Technologies Private Limited. Engineered for Optimism.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://cynbit.in" target="_blank" rel="noreferrer" className="hover:text-slate-600 dark:hover:text-slate-200">
              Official Website
            </a>
            <a href="https://cynbit.in/bitelevate" target="_blank" rel="noreferrer" className="hover:text-slate-600 dark:hover:text-slate-200">
              BitElevate
            </a>
            <a href="https://linkedin.com/company/cynbit-in" target="_blank" rel="noreferrer" className="hover:text-slate-600 dark:hover:text-slate-200">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
