import type { IndustryConfig } from '../types';

export const INDUSTRY_CONFIGS: Record<string, IndustryConfig> = {
  ecommerce: {
    id: 'ecommerce',
    title: 'E-Commerce & Omnichannel Retail',
    tagline: 'Autonomous order dispute resolution, inventory synchronization & dynamic catalog agents',
    baseVolume: 25000,
    avgHumanTimeMin: 18,
    hourlyRateINR: 450,
    bottlenecks: [
      'High return & refund ticket volume during peak seasons',
      'Discrepancies in inventory syncing across multi-channel marketplaces',
      'Slow response time for post-purchase tracking inquiries',
      'Inconsistent product catalog tagging and SEO descriptions'
    ],
    keyUseCases: [
      'Automated Order & Logistics Triage Agent',
      'Multi-modal Visual Defect Inspection for Returns',
      'Dynamic Pricing & Competitive Scraping Pipeline',
      'Autonomous High-Intent Lead Conversion Assistant'
    ],
    suggestedAgents: [
      {
        id: 'agent-router',
        name: 'Supervisor Intent Classifier',
        role: 'Semantic Routing & Guardrails',
        description: 'Classifies customer intent with zero-shot prompting and routes to specialized worker agents.',
        icon: 'Bot',
        model: 'Gemini 1.5 Flash',
        latency: '120ms',
        status: 'active',
        metrics: { accuracy: '99.4%', tokensPerSec: '185 t/s' }
      },
      {
        id: 'agent-inventory',
        name: 'ERP / Shopify Tool Agent',
        role: 'Live API Execution',
        description: 'Connects to Shopify API, Shiprocket & WMS to fetch real-time carrier tracking and order status.',
        icon: 'Database',
        model: 'Function Calling Engine',
        latency: '310ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      },
      {
        id: 'agent-rag',
        name: 'Store Policy RAG Agent',
        role: 'Vector Knowledge Retrieval',
        description: 'Performs cosine similarity search over warranty documents, exchange policies, and return terms.',
        icon: 'FileSearch',
        model: 'ChromaDB + Gemini Text-004',
        latency: '95ms',
        status: 'active',
        metrics: { accuracy: '98.9%', tokensPerSec: '240 t/s' }
      },
      {
        id: 'agent-audit',
        name: 'Policy Compliance Safeguard',
        role: 'Human-in-the-Loop Verifier',
        description: 'Flags transactions exceeding ₹10,000 threshold for human supervisor 1-click verification.',
        icon: 'ShieldCheck',
        model: 'Deterministic Rule Engine',
        latency: '40ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'Inf' }
      }
    ]
  },
  fintech: {
    id: 'fintech',
    title: 'FinTech, NBFC & Digital Lending',
    tagline: 'Autonomous KYC verification, loan document underwriting & fraud anomaly detection',
    baseVolume: 15000,
    avgHumanTimeMin: 35,
    hourlyRateINR: 650,
    bottlenecks: [
      'Manual verification of bank statements and ITR filings',
      'High drop-off rate during complex multi-step loan KYC onboarding',
      'Regulatory compliance checks consuming extensive analyst time',
      'Delayed anomaly detection in transactional fraud pipelines'
    ],
    keyUseCases: [
      'Multi-modal OCR & Bank Statement Parser Agent',
      'Automated Bureau & CIBIL Cross-referencing Agent',
      'Anti-Money Laundering (AML) Pattern Discovery Engine',
      'Self-Service WhatsApp Underwriting Assistant'
    ],
    suggestedAgents: [
      {
        id: 'agent-router',
        name: 'KYC Document Ingestion Gateway',
        role: 'Secure Ingestion & De-identification',
        description: 'Anonymizes PII (Aadhaar/PAN mask) according to RBI regulatory guidelines before LLM ingestion.',
        icon: 'Shield',
        model: 'PII Scrubber Engine',
        latency: '80ms',
        status: 'active',
        metrics: { accuracy: '99.9%', tokensPerSec: '210 t/s' }
      },
      {
        id: 'agent-rag',
        name: 'Financial Ledger Reasoning Agent',
        role: 'Document Intelligence & Math',
        description: 'Parses tabular PDF statements, detects salary credits, bounce charges, and net cash flow.',
        icon: 'Cpu',
        model: 'Gemini 1.5 Pro (Deep Reasoning)',
        latency: '820ms',
        status: 'active',
        metrics: { accuracy: '99.7%', tokensPerSec: '120 t/s' }
      },
      {
        id: 'agent-inventory',
        name: 'Credit Risk Scoring Agent',
        role: 'Deterministic Risk Evaluation',
        description: 'Computes debt-to-income (DTI) ratio against custom lending criteria with mathematical certitude.',
        icon: 'TrendingUp',
        model: 'Python Execution Sandbox',
        latency: '150ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      },
      {
        id: 'agent-audit',
        name: 'Underwriting Compliance Escrow',
        role: 'Audit Trail & Explainability',
        description: 'Outputs explainable rejection/approval rationales with timestamped hash for RBI audits.',
        icon: 'CheckCircle',
        model: 'Cryptographic Ledger Guard',
        latency: '50ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      }
    ]
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare & Clinical Operations',
    tagline: 'Autonomous patient triage, clinical documentation synthesis & appointment scheduling',
    baseVolume: 12000,
    avgHumanTimeMin: 25,
    hourlyRateINR: 550,
    bottlenecks: [
      'Doctors spending 35% of time on manual electronic health record (EHR) entry',
      'Patient no-show rates due to lack of automated WhatsApp reminders and follow-up',
      'Front-desk overwhelmed by routine symptom screening and triage calls',
      'Insurance pre-authorization claim paperwork bottlenecks'
    ],
    keyUseCases: [
      'Ambient Clinical Note Transcription & ICD-10 Coding',
      'Patient Symptom Pre-triage & Specialist Matching',
      'Autonomous Insurance Pre-Authorization Verifier',
      'Post-Discharge Medication Adherence Follow-up Agent'
    ],
    suggestedAgents: [
      {
        id: 'agent-router',
        name: 'Clinical Triage Protocol Router',
        role: 'Emergency Protocol Verification',
        description: 'Detects red-flag symptoms immediately and routes to emergency personnel with zero latency.',
        icon: 'Activity',
        model: 'Medical Guardrail LLM',
        latency: '90ms',
        status: 'active',
        metrics: { accuracy: '99.9%', tokensPerSec: '250 t/s' }
      },
      {
        id: 'agent-rag',
        name: 'EHR Clinical Context Agent',
        role: 'Patient History Synthesis',
        description: 'Retrieves past lab reports, allergy histories, and contraindications securely.',
        icon: 'FileText',
        model: 'HIPAA-Compliant Vector Engine',
        latency: '220ms',
        status: 'active',
        metrics: { accuracy: '99.5%', tokensPerSec: '190 t/s' }
      },
      {
        id: 'agent-inventory',
        name: 'Doctor Calendar & Slot Scheduler',
        role: 'Live Hospital Management Sync',
        description: 'Integrates with hospital EHR system to book OPD slots and dispatch instant calendar invites.',
        icon: 'Calendar',
        model: 'HL7 / FHIR API Connector',
        latency: '180ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      },
      {
        id: 'agent-audit',
        name: 'Physician Review Gate',
        role: 'Doctor Co-Sign Verification',
        description: 'Summaries are staged as drafts until the attending physician provides 1-click clinical sign-off.',
        icon: 'UserCheck',
        model: 'Human Physician Interface',
        latency: 'Instant',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      }
    ]
  },
  edtech: {
    id: 'edtech',
    title: 'EdTech & BitElevate Engineering Labs',
    tagline: 'Autonomous Pull Request reviews, real-time code sandboxing & personalized mentor feedback',
    baseVolume: 18000,
    avgHumanTimeMin: 22,
    hourlyRateINR: 500,
    bottlenecks: [
      'Engineering interns waiting 24+ hours for senior mentors to review pull requests',
      'Generic video tutorials failing to teach industry Git branching and war-room triage',
      'Difficulty in scaling 1-on-1 code reviews across hundreds of aspiring developers',
      'Manual evaluation of coding assignments leading to delayed feedback loops'
    ],
    keyUseCases: [
      'Instant PR Review Agent with AST & Complexity Analysis',
      'Automated Incident War-Room Bug Injection Simulator',
      'Interactive Resume & GitHub Architecture Portfolio Evaluator',
      'Continuous Placement Readiness & Mock Technical Interviewer'
    ],
    suggestedAgents: [
      {
        id: 'agent-router',
        name: 'Git Webhook Receiver & Diff Parser',
        role: 'Code Change Ingestion',
        description: 'Listens for GitHub PR events, parses unified diffs, and identifies altered abstract syntax trees.',
        icon: 'GitPullRequest',
        model: 'GitHub API Webhook Router',
        latency: '60ms',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'Inf' }
      },
      {
        id: 'agent-rag',
        name: 'Senior Architect Code Reviewer',
        role: 'Code Quality & Security Analysis',
        description: 'Analyzes code for memory leaks, SQL injection, async race conditions, and clean architecture principles.',
        icon: 'Code',
        model: 'Gemini 1.5 Pro (Code Reasoning)',
        latency: '680ms',
        status: 'active',
        metrics: { accuracy: '98.8%', tokensPerSec: '160 t/s' }
      },
      {
        id: 'agent-inventory',
        name: 'Automated Test Runner & CI Bot',
        role: 'Isolated Sandbox Execution',
        description: 'Spins up ephemeral Docker container, executes Jest/Pytest test suites, and benchmarks runtime.',
        icon: 'Terminal',
        model: 'Ephemeral Runner Engine',
        latency: '1.2s',
        status: 'active',
        metrics: { accuracy: '100%', tokensPerSec: 'N/A' }
      },
      {
        id: 'agent-audit',
        name: 'Mentor Verification & Stamp',
        role: 'BitElevate Quality Certification',
        description: 'Synthesizes pedagogical feedback, generates helpful inline PR comments, and updates sprint streak.',
        icon: 'Award',
        model: 'BitElevate Pedagogical Agent',
        latency: '110ms',
        status: 'active',
        metrics: { accuracy: '99.4%', tokensPerSec: '220 t/s' }
      }
    ]
  }
};
