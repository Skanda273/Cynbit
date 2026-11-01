import React from 'react';
import { 
  Building2, 
  Users, 
  HeartHandshake, 
  MapPin, 
  Target
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-300 dark:border-amber-800">
          <Building2 className="w-3.5 h-3.5" />
          <span>Company &amp; Architectural Heritage</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          About Cynbit Technologies Private Limited
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Engineered for optimism. We bridge the critical divide between aggressive startup agility 
          and rock-solid enterprise precision. Headquartered in Jaipur, Rajasthan, Cynbit architects 
          autonomous AI agents, custom digital ecosystems, and real-world engineering careers.
        </p>
      </div>

      {/* Corporate Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <MapPin className="w-6 h-6 text-brand-600 dark:text-brand-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white text-base">Corporate Headquarters</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            32/115, RHB, Pratap Nagar, Jaipur, Rajasthan, 302033, India.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500">
            CIN: U62011RJ2024PTC093652 • Inc. April 2024
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white text-base">Executive Leadership</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Founded and directed by senior software architects:
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <strong>Ashutosh Upadhyay</strong> — Co-Founder &amp; Director
            </li>
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <strong>Mohak Saini</strong> — Co-Founder &amp; Director
            </li>
            <li className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <strong>Dhawan Kumar Nama</strong> — Director
            </li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <Target className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
          <h4 className="font-bold text-slate-900 dark:text-white text-base">Proprietary Software Suite</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Ecosystem of targeted products built for enterprise and individual excellence:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-200 dark:border-brand-800">
              BitElevate
            </span>
            <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
              TenantEase
            </span>
            <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
              Revio AI
            </span>
            <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
              Cynbit Studio
            </span>
          </div>
        </div>
      </div>

      {/* Social Impact Showcase: Manav Seva Trust Partnership */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-brand-950 rounded-2xl p-6 sm:p-8 text-white border border-emerald-800/60 shadow-xl">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Human-Centric Impact • Beyond Code</span>
          </div>
          <h3 className="text-2xl font-bold">
            Bridging the Digital Divide with Manav Seva Trust
          </h3>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Technology is only as powerful as the humans it uplifts. Cynbit partners directly with 
            <strong> Manav Seva Trust</strong> to sponsor computer labs and teach computer literacy 
            to underserved students across rural Rajasthan and government schools.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800">
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">1,200+</div>
              <div className="text-xs text-slate-400 mt-0.5">Students Trained</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">14</div>
              <div className="text-xs text-slate-400 mt-0.5">Rural Labs Equipped</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Committed Social Mission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
