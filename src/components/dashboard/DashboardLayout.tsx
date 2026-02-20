import { useState, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardTopBar } from './DashboardTopBar';
import { BotChat } from './BotChat';

interface DashboardLayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export function DashboardLayout({ children, activePage, onNavigate }: DashboardLayoutProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (!query.trim()) return;
    if (!chatOpen) setChatOpen(true);
    window.dispatchEvent(new CustomEvent('agilon-chat-message', { detail: query }));
    setQuery('');
  };

  return (
    <div className="flex h-screen bg-light overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopBar />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {children}

          {/* Floating AI conversation box — bottom center */}
          <div className="sticky bottom-0 left-0 right-0 flex justify-center pb-4 pt-6 pointer-events-none"
            style={{ background: 'linear-gradient(transparent, var(--color-light) 40%)' }}
          >
            <div className="relative flex items-center w-full max-w-[600px] pointer-events-auto">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg opacity-70">{'\uD83E\uDD16'}</span>
              <input
                type="text"
                placeholder="Ask Agilon anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                onFocus={() => { if (!chatOpen) setChatOpen(true); }}
                className="w-full pl-12 pr-20 py-3.5 bg-[#1a1a1a] border border-border rounded-2xl text-sm text-dark placeholder:text-gray-light focus:outline-none focus:border-primary focus:shadow-[0_2px_20px_rgba(26,86,219,0.15)] shadow-[0_2px_12px_rgba(0,0,0,0.3)] transition-all"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-white rounded-xl text-xs font-semibold cursor-pointer border-none hover:bg-primary-hover transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
      <BotChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
