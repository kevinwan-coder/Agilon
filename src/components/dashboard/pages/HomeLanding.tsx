import { useState, type ReactNode } from 'react';
import { useSetupStore } from '../../../store/useSetupStore';

/* ─────────────────── Section Data ─────────────────── */

interface SubItem {
  name: string;
  desc: string;
}

interface Section {
  id: string;
  title: string;
  icon: ReactNode;
  color: string;
  items: SubItem[];
}

const SECTIONS: Section[] = [
  {
    id: 'crm',
    title: 'Simplified CRM',
    color: '#2dca72',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      { name: 'Customer Reaching Channels', desc: 'Agilon Bot, Phone Call, Text Message, Emails & more' },
      { name: 'Time Scheduler', desc: 'Schedule meetings, set reminders, and manage availability' },
      { name: 'Task Management', desc: 'Track tasks, set priorities, and manage deadlines' },
    ],
  },
  {
    id: 'finance',
    title: 'Financial Manager',
    color: '#3b82f6',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    items: [
      { name: 'Transaction Recording', desc: 'Log and categorize all business transactions automatically' },
      { name: 'Time-to-Invoice Pipeline', desc: 'One-click conversion from tracked hours to branded invoices' },
      { name: 'Payments & Payrolls', desc: 'Send/receive payments and manage payroll processing' },
      { name: 'Tax & Withholding', desc: 'Tax calculations, filing prep, and withholding payments' },
      { name: 'Planning & Reports', desc: 'Financial planning, forecasting, and detailed reports' },
    ],
  },
  {
    id: 'onboarding',
    title: 'Client Onboarding Engine',
    color: '#a855f7',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    items: [
      { name: 'Automated Contract-to-Project', desc: 'Signed contract auto-creates project folder, Slack channel & task board' },
      { name: 'Smart Intake Forms', desc: 'AI-powered forms that auto-populate Project Briefs from client answers' },
      { name: 'Self-Scheduling', desc: 'Clients book during "Onboarding" windows while protecting your Deep Work time' },
    ],
  },
  {
    id: 'sales',
    title: 'Sales & Outreach Pipeline',
    color: '#f59e0b',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    items: [
      { name: 'Lead Enrichment', desc: 'Auto-find LinkedIn, company news & revenue, then draft personalized intro emails' },
      { name: 'Dormant Lead Re-engagement', desc: 'Nudge alerts for high-value past clients you haven\'t contacted in 90 days' },
    ],
  },
  {
    id: 'ai-agent',
    title: 'AI Agent Workflow',
    color: '#22d3ee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
      </svg>
    ),
    items: [
      { name: 'Custom AI Agents', desc: 'Build automated workflows powered by AI to handle repetitive tasks' },
      { name: 'Smart Automation', desc: 'Connect your tools and let AI agents manage processes end-to-end' },
    ],
  },
];

/* ─────────────────── Channel Icons ─────────────────── */

const CHANNELS = [
  { name: 'Agilon Bot', icon: '🤖', color: '#2dca72' },
  { name: 'Phone Call', icon: '📞', color: '#3b82f6' },
  { name: 'Text Message', icon: '💬', color: '#a855f7' },
  { name: 'Emails', icon: '📧', color: '#f59e0b' },
  { name: 'Others', icon: '🔗', color: '#64748b' },
];

/* ─────────────────── Quick Stats (mock) ─────────────────── */

const QUICK_STATS = [
  { label: 'Active Clients', value: '0', icon: '👥' },
  { label: 'Open Tasks', value: '0', icon: '📋' },
  { label: 'Invoices Due', value: '$0', icon: '💰' },
  { label: 'Meetings Today', value: '0', icon: '📅' },
];

/* ─────────────────── Component ─────────────────── */

export function HomeLanding() {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const isJustMe = businessInfo.size === 'just-me';

  return (
    <div className="-m-8 overflow-y-auto">
      {/* ─── Welcome Header ─── */}
      <section className="px-10 pt-10 pb-6">
        <h1 className="text-3xl font-bold text-dark mb-2">
          Welcome{businessInfo.name ? `, ${businessInfo.name}` : ''}
        </h1>
        <p className="text-gray text-base">
          {isJustMe
            ? 'Your all-in-one workspace for managing clients, finances, and growth.'
            : 'Your team workspace — CRM, finances, onboarding, and sales in one place.'}
        </p>
      </section>

      {/* ─── Quick Stats ─── */}
      <section className="px-10 pb-8">
        <div className="grid grid-cols-4 gap-4">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1a1a1a] rounded-xl border border-border p-5 flex items-center gap-4 hover:border-[#333] transition-colors"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <div className="text-xl font-bold text-dark">{stat.value}</div>
                <div className="text-xs text-gray">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Customer Reaching Channels ─── */}
      <section className="px-10 pb-8">
        <h2 className="text-xs font-bold text-gray uppercase tracking-[0.2em] mb-4">Customer Channels</h2>
        <div className="flex gap-3">
          {CHANNELS.map((ch) => (
            <button
              key={ch.name}
              className="flex-1 bg-[#1a1a1a] rounded-xl border border-border p-4 flex flex-col items-center gap-2 hover:border-[#7ee8a8] transition-colors cursor-pointer"
            >
              <span className="text-2xl">{ch.icon}</span>
              <span className="text-xs text-gray font-medium">{ch.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ─── Main Sections ─── */}
      <section className="px-10 pb-8">
        <h2 className="text-xs font-bold text-gray uppercase tracking-[0.2em] mb-4">Your Modules</h2>
        <div className="grid grid-cols-1 gap-4">
          {SECTIONS.map((section) => {
            const isExpanded = expandedSection === section.id;

            return (
              <div
                key={section.id}
                className="bg-[#1a1a1a] rounded-xl border border-border overflow-hidden hover:border-[#333] transition-colors"
              >
                {/* Section Header */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 bg-transparent border-none cursor-pointer text-left transition-colors hover:bg-[#1e1e1e]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${section.color}15`, color: section.color }}
                  >
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-dark">{section.title}</div>
                    <div className="text-xs text-gray mt-0.5">{section.items.length} features</div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-5 border-t border-border">
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-[#252525] rounded-lg p-4 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                        >
                          <div className="text-sm font-semibold text-dark mb-1">{item.name}</div>
                          <div className="text-xs text-gray leading-relaxed">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-10 py-6 border-t border-border flex items-center justify-between">
        <span className="text-sm font-bold text-dark">Agilon.AI</span>
        <span className="text-xs text-gray">Powered by AI — Built for {isJustMe ? 'freelancers' : 'small teams'}</span>
      </footer>
    </div>
  );
}
