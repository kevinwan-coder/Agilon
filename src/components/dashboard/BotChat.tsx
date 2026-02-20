import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSetupStore } from '../../store/useSetupStore';

interface BotChatProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

export function BotChat({ open, onClose }: BotChatProps) {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      text: `Hi! I'm your Agilon Bot for ${businessInfo.name || 'your business'}. I can help you with accounting, scheduling, and all your back-office needs. What would you like to do?`,
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Simulated bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: getBotResponse(input),
      };
      setMessages((m) => [...m, botMsg]);
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-0 w-[380px] h-full bg-[#1a1a1a] border-l border-border flex flex-col z-50 shadow-[-4px_0_30px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <div className="text-sm font-semibold text-dark">Agilon Bot</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green" />
                  <span className="text-xs text-gray">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-transparent border-none text-gray hover:text-dark cursor-pointer text-lg p-1"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-light text-dark border border-border rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {['Create invoice', 'Schedule meeting', 'Check balance'].map((action) => (
              <button
                key={action}
                onClick={() => {
                  setInput(action);
                }}
                className="px-3 py-1 bg-light border border-border rounded-full text-xs text-gray hover:bg-primary-light hover:text-primary hover:border-primary cursor-pointer transition-colors"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2 flex-shrink-0">
            <input
              type="text"
              placeholder="Ask Agilon anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 bg-light border border-border rounded-lg text-sm text-dark placeholder:text-gray-light focus:outline-none focus:border-primary transition-colors"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary-hover transition-colors"
            >
              ↑
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('invoice') || lower.includes('bill')) {
    return 'I can help you create an invoice. Please provide the client name, amount, and due date, or I can start with a template from your recent invoices.';
  }
  if (lower.includes('schedule') || lower.includes('meeting') || lower.includes('appointment')) {
    return 'Sure! I can set up a meeting for you. What date and time works best? I\'ll check your calendar for availability.';
  }
  if (lower.includes('balance') || lower.includes('money') || lower.includes('revenue')) {
    return 'Based on your accounting records, your current balance is $24,350. Revenue this month is $8,200 with $3,150 in expenses. Would you like a detailed breakdown?';
  }
  if (lower.includes('tax') || lower.includes('filing')) {
    return 'Your Q1 tax estimates are due April 15th. Based on your current income, I estimate approximately $2,400 in quarterly taxes. Want me to prepare the filing?';
  }
  if (lower.includes('help') || lower.includes('what can')) {
    return 'I can help you with:\n• Accounting — invoices, expenses, reports\n• Scheduling — meetings, appointments\n• Tax — estimates, filing\n• HR — payroll, employee records\n• And much more! Just ask.';
  }
  return `I understand you need help with "${input}". Let me look into that for you. In the full version, I'll connect to your data and provide a detailed response. Is there anything specific you'd like to know?`;
}
