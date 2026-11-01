import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X
} from 'lucide-react';
import type { ChatMessage } from '../../types';

interface CopilotProps {
  onOpenStudio: () => void;
  onBookCall: () => void;
}

export const CynbitCopilot: React.FC<CopilotProps> = ({ onOpenStudio, onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'agent',
      text: "Hello! I'm Cynbit's Autonomous Architecture Copilot. How can I assist you today? You can ask about our enterprise AI agents, BitElevate 60-day sprints, or simulate an architecture blueprint.",
      timestamp: 'Just now'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Contextual response generator based on Cynbit's actual capabilities
    setTimeout(() => {
      let reply = "";
      const lower = text.toLowerCase();

      if (lower.includes('bitelevate') || lower.includes('intern') || lower.includes('course') || lower.includes('training')) {
        reply = "BitElevate is our flagship 100% remote software engineering internship program (₹3,999 one-time). You work on production GitHub repositories with daily line-by-line PR reviews from senior architects. It includes a 14-day semester exam freeze and is accepted for university industrial training credits!";
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('roi') || lower.includes('estimate') || lower.includes('fee')) {
        reply = "We offer two models: BitElevate for learners (₹3,999 flat), and Enterprise Custom AI Engineering. You can use our newly built 'AI Architecture Studio' directly on this page to simulate your exact monthly token usage, workload volume, and annual savings!";
      } else if (lower.includes('service') || lower.includes('product') || lower.includes('tech stack')) {
        reply = "Cynbit specializes in four key pillars: 1) Autonomous AI Agents & LLM Fine-tuning, 2) Custom Full-Stack Next.js/React & Cloud Systems (AWS/Azure), 3) Technical SEO & Growth Engineering, and 4) BitElevate engineering labs. Our SaaS products also include TenantEase and Revio.";
      } else if (lower.includes('contact') || lower.includes('book') || lower.includes('call') || lower.includes('office') || lower.includes('jaipur')) {
        reply = "Our corporate headquarters are located at 32/115 RHB, Pratap Nagar, Jaipur, Rajasthan (302033). You can reach our architectural directors directly at opportunities@cynbit.in or +91 89479 62667. Would you like to schedule a discovery session?";
      } else {
        reply = `Thank you for sharing! Cynbit builds high-precision, optimistic software systems. Whether you're an enterprise looking to automate complex workflows or an engineer aiming for BitElevate, our team can architect a tailored solution.`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2.5 bg-brand-900 hover:bg-brand-800 text-brand-100 px-4 py-3 rounded-full shadow-2xl border border-brand-700/80 transition-all hover:scale-105 active:scale-95 group"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-brand-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-brand-900 animate-pulse"></span>
          </div>
          <span className="text-sm font-semibold">Cynbit Copilot</span>
          <span className="text-[10px] bg-brand-800 text-brand-300 px-1.5 py-0.5 rounded-full font-mono">
            AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-4 py-3.5 bg-brand-950 text-white flex items-center justify-between border-b border-brand-900">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-brand-800 text-brand-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm flex items-center space-x-1.5">
                  <span>Cynbit Copilot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-brand-300 font-mono">
                  Autonomous Consultation Agent
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-brand-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{m.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1 font-mono">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 text-slate-400 p-2 text-xs">
                <Bot className="w-3.5 h-3.5 text-brand-500 animate-bounce" />
                <span>Cynbit Copilot is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-1.5 overflow-x-auto text-[11px] whitespace-nowrap scrollbar-none">
            <button
              onClick={() => {
                handleSend("Tell me about BitElevate tracks");
              }}
              className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              🎓 BitElevate Tracks
            </button>
            <button
              onClick={() => {
                handleSend("How can I estimate AI ROI?");
                onOpenStudio();
              }}
              className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              ⚡ Open AI Studio
            </button>
            <button
              onClick={() => {
                handleSend("I would like to book a consultation call");
                onBookCall();
              }}
              className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              📞 Book Discovery Call
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Cynbit Copilot anything..."
              className="flex-1 text-xs bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-brand-900 hover:bg-brand-800 disabled:opacity-40 text-brand-100 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
