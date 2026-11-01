import React from 'react';
import { 
  Bot, 
  Code2, 
  Cloud, 
  TrendingUp, 
  CheckCircle, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents & Automation',
    tagline: 'Cognitive operations with zero-shot reasoning',
    desc: 'We engineer multi-agent systems that autonomously research, execute APIs, summarize documents, and resolve customer workflows with human-in-the-loop safeguards.',
    features: [
      'Multi-modal LLM Integration (Gemini, Claude, Llama 3)',
      'Vector Databases & Semantic Retrieval (RAG)',
      'Deterministic Safeguards & RBI/HIPAA Compliance',
      'Autonomous CRM & ERP Tool-Calling Connectors'
    ],
    metric: '92% Faster Turnaround'
  },
  {
    icon: Code2,
    title: 'Full-Stack Software Engineering',
    tagline: 'Enterprise-grade speed and reliability',
    desc: 'From initial prototype blueprint to production release, we engineer high-performance web applications, responsive customer portals, and distributed microservices.',
    features: [
      'Next.js 15, React 19, TypeScript Ecosystem',
      'Optimistic UI State & WebSocket Telemetry',
      'PostgreSQL, Redis Caching & Event Sinks',
      'Zero Technical Debt Architecture'
    ],
    metric: '99.9% Crash-Free Users'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & Zero-Trust',
    tagline: 'Cloud-native foundations built to scale',
    desc: 'We design cloud infrastructure across AWS and Azure that ensures your applications sustain high concurrency surges without latency degradation or security risks.',
    features: [
      'Terraform Infrastructure as Code (IaC)',
      'Docker Containerization & Kubernetes Orchestration',
      'Zero-Trust IAM & Granular Audit Trails',
      'Automated Disaster Recovery & Multi-region Failover'
    ],
    metric: '99.99% Guaranteed SLA'
  },
  {
    icon: TrendingUp,
    title: 'Technical SEO & Digital Optimization',
    tagline: 'Data-driven technical visibility engines',
    desc: 'We optimize the fundamental digital architecture of your web platforms to ensure search crawlers, LLMs, and customers discover your brand organically.',
    features: [
      'Sub-second Core Web Vitals (LCP, INP, CLS)',
      'Semantic Schema.org Structured Data',
      'Dynamic OpenGraph & Indexing Automation',
      'High-Intent Conversion Rate Optimization'
    ],
    metric: '+40% Organic Lead Uplift'
  }
];

export const ServicesSection: React.FC<{ onSelectService: (serviceName: string) => void }> = ({ onSelectService }) => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-300 dark:border-cyan-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Architectural Domain Mastery</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Comprehensive Services Ecosystem
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          We combine the rapid agility of an elite startup with the architectural discipline of an enterprise engineering team.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {srv.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-brand-700 dark:text-brand-400 font-mono mt-0.5">
                  {srv.tagline}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(srv.title)}
                className="mt-6 w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Request Architectural Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
