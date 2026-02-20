import { useSetupStore } from '../../../store/useSetupStore';

/* ─── Feature Cards ─── */
const FEATURES = [
  {
    title: 'Finance',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dca72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 16h4" />
        <path d="M14 16h4" />
      </svg>
    ),
    description: 'Track invoices, expenses, and revenue in real-time. Auto-categorize transactions and generate financial reports instantly.',
  },
  {
    title: 'Projects',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dca72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    description: 'Manage client projects, track deliverables, and hit every deadline. Built-in workflows keep your team aligned.',
  },
  {
    title: 'Life',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dca72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M7 14h2" />
        <path d="M11 14h2" />
        <path d="M15 14h2" />
        <path d="M7 18h2" />
        <path d="M11 18h2" />
      </svg>
    ),
    description: 'Balance work and life with smart scheduling, personal goal tracking, and wellness reminders. Your business grows when you do.',
  },
];

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    text: '"Agilon replaced 5 different apps I was paying for. Now everything is in one place — invoicing, scheduling, document storage."',
    name: 'Alex Rivera',
    role: 'Freelance Designer',
  },
  {
    text: '"The AI assistant saves me hours every week. It handles my bookkeeping and sends reminders for deadlines I would have missed."',
    name: 'Priya Sharma',
    role: 'Independent Consultant',
  },
  {
    text: '"Setting it up took 2 minutes. Within a day, I had my entire business running more smoothly than ever."',
    name: 'Jordan Ellis',
    role: 'Freelance Developer',
  },
];

export function HomeLanding() {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const isJustMe = businessInfo.size === 'just-me';

  const headline = isJustMe
    ? 'Manage Your Freelance Life'
    : 'Run Your Team, Effortlessly';
  const subheadline = isJustMe
    ? 'All-in-one OS for business & personal growth'
    : 'Everything your growing team needs — finances, projects, and operations in one place';

  return (
    <div className="-m-8 overflow-y-auto">
      {/* ─── Hero Section ─── */}
      <section className="px-12 pt-16 pb-20 flex items-center gap-12">
        {/* Left — Copy */}
        <div className="flex-1 max-w-[560px]">
          <h1 className="text-4xl font-bold text-dark leading-tight mb-4">
            {headline}
          </h1>
          <p className="text-lg text-gray mb-8">
            {subheadline}
          </p>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-[#2dca72] text-white text-sm font-semibold rounded-lg cursor-pointer border-none hover:bg-[#25a85f] transition-colors">
              Get Started Free
            </button>
            <button className="px-6 py-3 bg-transparent text-gray text-sm font-semibold rounded-lg cursor-pointer border border-border hover:border-[#7ee8a8] hover:text-[#7ee8a8] transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right — Product Mockup */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[380px] h-[260px] rounded-2xl border border-border bg-[#1a1a1a] flex flex-col items-center justify-center gap-4">
            {/* Mockup illustration */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              {/* Dashboard grid */}
              <rect x="8" y="8" width="28" height="20" rx="3" stroke="#555" strokeWidth="1.5" />
              <rect x="44" y="8" width="28" height="20" rx="3" stroke="#555" strokeWidth="1.5" />
              <rect x="8" y="36" width="64" height="16" rx="3" stroke="#555" strokeWidth="1.5" />
              {/* Chart lines */}
              <polyline points="14,48 24,42 34,46 44,40 54,44 64,38" stroke="#2dca72" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Nodes */}
              <circle cx="30" cy="66" r="4" stroke="#2dca72" strokeWidth="1.5" fill="none" />
              <circle cx="50" cy="66" r="4" stroke="#555" strokeWidth="1.5" fill="none" />
              <line x1="34" y1="66" x2="46" y2="66" stroke="#555" strokeWidth="1.5" />
              {/* Calendar icon */}
              <rect x="56" y="58" width="14" height="14" rx="2" stroke="#555" strokeWidth="1.5" />
              <line x1="60" y1="56" x2="60" y2="60" stroke="#555" strokeWidth="1.5" />
              <line x1="66" y1="56" x2="66" y2="60" stroke="#555" strokeWidth="1.5" />
            </svg>
            <span className="text-xs text-gray uppercase tracking-wider font-semibold">Product Mockup</span>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-12 border-t border-border" />

      {/* ─── Key Features ─── */}
      <section className="px-12 py-16">
        <h2 className="text-xs font-bold text-gray uppercase tracking-[0.2em] mb-8">Key Features</h2>
        <div className="grid grid-cols-3 gap-6">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="bg-[#1a1a1a] rounded-xl border border-border p-6 hover:border-[#7ee8a8] transition-colors cursor-pointer"
            >
              <div className="mb-4">{feat.icon}</div>
              <h3 className="text-base font-bold text-dark uppercase tracking-wide mb-3">{feat.title}</h3>
              <p className="text-sm text-gray leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-12 border-t border-border" />

      {/* ─── Testimonials ─── */}
      <section className="px-12 py-16 text-center">
        <h2 className="text-xs font-bold text-gray uppercase tracking-[0.2em] mb-2">
          {isJustMe ? 'Trusted by Top Freelancers' : 'Trusted by Growing Teams'}
        </h2>
        <p className="text-sm text-gray mb-10">See what people are saying about Agilon</p>
        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#1a1a1a] rounded-xl border border-border p-6 text-left">
              <p className="text-sm text-dark leading-relaxed mb-4 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#252525] flex items-center justify-center text-xs font-bold text-gray">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark">{t.name}</div>
                  <div className="text-xs text-gray">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-12 border-t border-border" />

      {/* ─── CTA Section ─── */}
      <section className="px-12 py-16 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-dark mb-2">Ready to Start?</h2>
          <p className="text-sm text-gray">Join thousands of {isJustMe ? 'freelancers' : 'small teams'} running their business with Agilon.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-[#2dca72] text-white text-sm font-semibold rounded-lg cursor-pointer border-none hover:bg-[#25a85f] transition-colors">
            Get Started Free
          </button>
          <button className="px-6 py-3 bg-transparent text-gray text-sm font-semibold rounded-lg cursor-pointer border border-border hover:border-[#7ee8a8] hover:text-[#7ee8a8] transition-colors">
            View Testimonials
          </button>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-12 py-6 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-sm font-bold text-dark">Agilon.AI</span>
          <a href="#" className="text-xs text-gray hover:text-[#7ee8a8] transition-colors no-underline">About</a>
          <a href="#" className="text-xs text-gray hover:text-[#7ee8a8] transition-colors no-underline">Support</a>
          <a href="#" className="text-xs text-gray hover:text-[#7ee8a8] transition-colors no-underline">Terms</a>
          <a href="#" className="text-xs text-gray hover:text-[#7ee8a8] transition-colors no-underline">Privacy</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Twitter / X */}
          <a href="#" className="text-gray hover:text-[#7ee8a8] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray hover:text-[#7ee8a8] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
