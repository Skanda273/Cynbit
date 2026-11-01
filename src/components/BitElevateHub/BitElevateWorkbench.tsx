import React, { useState } from 'react';
import { 
  GitPullRequest, 
  GitMerge, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Calendar, 
  Award, 
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Track {
  id: string;
  name: string;
  icon: string;
  stack: string[];
  duration: string;
  spotsLeft: number;
  highlight: string;
}

const TRACKS: Track[] = [
  {
    id: 'fullstack',
    name: 'Full-Stack Modern Architecture',
    icon: 'Layers',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma'],
    duration: '60 Days',
    spotsLeft: 7,
    highlight: 'Build production-ready micro-frontends with optimistic caching.'
  },
  {
    id: 'agentic-ai',
    name: 'Autonomous AI Agents & Vector Intelligence',
    icon: 'Cpu',
    stack: ['FastAPI', 'LangGraph', 'Gemini API', 'ChromaDB', 'Docker'],
    duration: '60 Days',
    spotsLeft: 4,
    highlight: 'Deploy multi-agent task execution pipelines with human-in-the-loop.'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & SRE War-Room',
    icon: 'Cloud',
    stack: ['AWS ECS', 'Terraform', 'Docker', 'GitHub Actions', 'Datadog'],
    duration: '60 Days',
    spotsLeft: 9,
    highlight: 'Manage real cloud incidents, zero-downtime rolling updates.'
  },
  {
    id: 'qa-automation',
    name: 'QA & Automated Reliability Engineering',
    icon: 'CheckSquare',
    stack: ['Playwright', 'Jest', 'Supertest', 'CI/CD Pipelines'],
    duration: '45 Days',
    spotsLeft: 12,
    highlight: 'Write end-to-end regression suites and load-testing scripts.'
  }
];

export const BitElevateWorkbench: React.FC<{ onEnrollClick: (track: string) => void }> = ({ onEnrollClick }) => {
  const [activeTrack, setActiveTrack] = useState<string>('fullstack');
  const [prStatus, setPrStatus] = useState<'pending_review' | 'changes_requested' | 'approved' | 'merged'>('pending_review');

  const handleSimulateFix = () => {
    setPrStatus('approved');
  };

  const handleMergePR = () => {
    setPrStatus('merged');
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-300 dark:border-emerald-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Engineering Workflows</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            BitElevate: Remote Engineering Internship &amp; Labs
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
            Stop watching passive video tutorials. Clone real GitHub repositories, push git branches, 
            receive line-by-line PR reviews from senior architects, and ship production code.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Fee: ₹3,999 One-Time
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            100% Remote &amp; Asynchronous
          </span>
        </div>
      </div>

      {/* 4 Value Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400 mb-2" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">1.5 - 2 Hours / Day</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Asynchronous problem briefs. Work anytime around your college classes.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">14-Day Exam Freeze</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pause your sprint streak during college semester exams with zero penalty.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <GitPullRequest className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-2" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Daily Senior PR Reviews</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Line-by-line feedback on architecture, memory safety, and clean code.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">College Credit Approved</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Official internship offer letter &amp; verified QR completion certificate.
          </p>
        </div>
      </div>

      {/* Interactive PR Review Simulator Workbench */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mb-12">
        {/* Workbench Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </span>
            <div className="text-xs font-mono text-slate-300 flex items-center space-x-1.5">
              <GitPullRequest className="w-3.5 h-3.5 text-brand-400" />
              <span>BitElevate Workbench • Live PR Code Review Simulation</span>
            </div>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-900 text-brand-300 border border-brand-700">
            Sprint Day 14 / 60
          </span>
        </div>

        {/* PR Details Banner */}
        <div className="p-5 border-b border-slate-800/80 bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono flex items-center space-x-1 ${
                prStatus === 'merged'
                  ? 'bg-purple-900/60 text-purple-300 border border-purple-700'
                  : prStatus === 'approved'
                  ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                  : 'bg-amber-900/60 text-amber-300 border border-amber-700'
              }`}>
                {prStatus === 'merged' ? (
                  <>
                    <GitMerge className="w-3 h-3" />
                    <span>Merged</span>
                  </>
                ) : prStatus === 'approved' ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Approved by Architect</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-3 h-3" />
                    <span>In Review</span>
                  </>
                )}
              </span>
              <h3 className="font-mono font-bold text-sm text-white">
                PR #42: feat(auth): implement resilient token rotation &amp; optimistic fallback
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Branch: <code className="text-brand-300">feature/jwt-rotation</code> into <code className="text-emerald-400">main</code> • 4 files changed (+68, -12)
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {prStatus === 'pending_review' && (
              <button
                onClick={handleSimulateFix}
                className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-mono font-semibold transition-all shadow-sm"
              >
                Simulate Review Comment Fix
              </button>
            )}

            {prStatus === 'approved' && (
              <button
                onClick={handleMergePR}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-md flex items-center space-x-1.5"
              >
                <GitMerge className="w-3.5 h-3.5" />
                <span>Merge Pull Request</span>
              </button>
            )}

            {prStatus === 'merged' && (
              <div className="flex items-center space-x-1.5 text-xs text-purple-300 font-mono bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-800">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Sprint Task Completed (+50 XP)</span>
              </div>
            )}
          </div>
        </div>

        {/* Code Diff Preview & Senior Architect Comments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {/* Diff (7 Cols) */}
          <div className="lg:col-span-7 p-4 font-mono text-xs overflow-x-auto bg-slate-950/80">
            <div className="text-[11px] text-slate-500 mb-2 pb-1 border-b border-slate-800">
              diff --git a/src/lib/authSession.ts b/src/lib/authSession.ts
            </div>
            <pre className="text-slate-300 leading-relaxed">
              <code>
                {`@@ -18,7 +18,12 @@ export async function refreshToken(currentSession: Session) {
   try {
-    const response = await fetch('/api/auth/refresh');
-    return await response.json();
+    // Optimized token rotation with exponential jitter backoff
+    const response = await secureFetch('/api/auth/refresh', {
+      method: 'POST',
+      retryLimit: 3,
+      timeoutMs: 4000
+    });
+    return sanitizeSession(response.data);
   } catch (err) {`}
              </code>
            </pre>
            <div className="mt-3 p-2.5 rounded bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-[11px]">
              ✔ Automated CI Pipeline: 18 unit tests passed • Zero memory leaks detected
            </div>
          </div>

          {/* Mentor Review Comments (5 Cols) */}
          <div className="lg:col-span-5 p-4 bg-slate-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <MessageSquare className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-mono font-bold text-white">
                  Senior Architect Review Feedback
                </span>
              </div>

              {/* Comment Thread */}
              <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-brand-700 flex items-center justify-center text-[10px] font-bold text-white">
                      M
                    </span>
                    <span className="font-semibold text-slate-200">Mohak Saini</span>
                    <span className="text-[10px] text-brand-400 bg-brand-950 px-1.5 py-0.2 rounded border border-brand-800">
                      Director of Eng
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">24m ago</span>
                </div>
                <p className="text-slate-300 leading-normal text-[11px]">
                  "Clean implementation on the exponential backoff! When handling the refresh token edge-case, make sure to dispatch an active event to invalidate any stale tabs in localStorage."
                </p>
              </div>

              {prStatus === 'merged' && (
                <div className="mt-4 p-3 rounded-xl bg-purple-950/40 border border-purple-800/80 text-xs text-purple-200 animate-fadeIn">
                  <div className="font-bold flex items-center space-x-1.5 text-purple-300">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Verified Credential Registry</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Official Certificate Token: <code className="text-purple-300">CYN-ELEVATE-2026-SKANDA</code> with permanent cryptographic verification.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Sprint Streak: 14 Days 🔥</span>
              <span>Overall Review Grade: A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Sprint Tracks */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Available 60-Day Industry Tracks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                activeTrack === track.id
                  ? 'border-brand-600 bg-brand-50/50 dark:bg-brand-950/40 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    {track.spotsLeft} SPOTS OPEN
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {track.duration}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {track.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                  {track.highlight}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {track.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTrack(track.id);
                  onEnrollClick(track.name);
                }}
                className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold flex items-center justify-center space-x-1 hover:opacity-90 transition-opacity"
              >
                <span>Claim Sprint Spot (₹3,999)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
