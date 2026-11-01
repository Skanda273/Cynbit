export type IndustryType = 'ecommerce' | 'fintech' | 'healthcare' | 'logistics' | 'edtech';

export interface AgentNode {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  model: string;
  latency: string;
  status: 'active' | 'standby' | 'processing';
  metrics: {
    accuracy: string;
    tokensPerSec: string;
  };
}

export interface IndustryConfig {
  id: IndustryType;
  title: string;
  tagline: string;
  baseVolume: number;
  avgHumanTimeMin: number;
  hourlyRateINR: number;
  suggestedAgents: AgentNode[];
  bottlenecks: string[];
  keyUseCases: string[];
}

export interface ROIResult {
  monthlySavingsINR: number;
  annualSavingsINR: number;
  timeSavedHours: number;
  speedupMultiplier: number;
  automationRatePercent: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  actionPayload?: {
    type: 'suggest_preset' | 'open_studio' | 'book_call';
    label: string;
  };
}
