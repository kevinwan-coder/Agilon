/* ─────────────────── To-Do Cards ─────────────────── */

const TODO_ITEMS = [
  { label: 'Company Setup', value: 'Unfinished', isAlert: true },
  { label: 'Payment', value: 'Approval', isAlert: false },
  { label: 'Next Appoint', value: '3:30 PM', isAlert: false },
  { label: 'Replies', value: '2, 8', isAlert: true },
];

/* ─────────────────── News / Events ─────────────────── */

const NEWS_ITEMS = ['Financial Updates', 'News', 'Sports'];

const EVENT_ITEMS = ["Dad's Birthday", 'Golf with Dr. Wan', 'Illini Game'];

/* ─────────────────── Quick Access ─────────────────── */

const QUICK_LINKS = [
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'financial', label: 'Financial' },
];

/* ─────────────────── Performance Chart ─────────────────── */

function PerformanceChart() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-dark">Performance</h3>
        <button className="text-gray text-xs cursor-pointer bg-transparent border-none hover:text-dark">⋮</button>
      </div>
      <svg width="100%" height="120" viewBox="0 0 200 120" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="30" y1="10" x2="30" y2="100" stroke="#333" strokeWidth="0.5" />
        <line x1="30" y1="100" x2="190" y2="100" stroke="#333" strokeWidth="0.5" />
        {/* Horizontal grid */}
        <line x1="30" y1="25" x2="190" y2="25" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="30" y1="45" x2="190" y2="45" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="30" y1="65" x2="190" y2="65" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="30" y1="85" x2="190" y2="85" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        {/* Vertical grid */}
        <line x1="70" y1="10" x2="70" y2="100" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="110" y1="10" x2="110" y2="100" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="150" y1="10" x2="150" y2="100" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        <line x1="190" y1="10" x2="190" y2="100" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
        {/* Y-axis labels */}
        <text x="25" y="28" textAnchor="end" fill="#666" fontSize="8">800</text>
        <text x="25" y="48" textAnchor="end" fill="#666" fontSize="8">600</text>
        <text x="25" y="68" textAnchor="end" fill="#666" fontSize="8">400</text>
        <text x="25" y="88" textAnchor="end" fill="#666" fontSize="8">200</text>
        <text x="25" y="103" textAnchor="end" fill="#666" fontSize="8">0</text>
        {/* X-axis labels */}
        <text x="50" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8">A</text>
        <text x="90" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8">B</text>
        <text x="130" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8">C</text>
        <text x="170" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8">D</text>
        <text x="190" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8">E</text>
        {/* Performance curve */}
        <path
          d="M 30 60 C 50 58, 60 50, 80 42 C 100 34, 120 28, 140 26 C 155 25, 165 26, 175 30 C 182 33, 188 38, 190 42"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ─────────────────── Calendar Helper ─────────────────── */

function MiniCalendar() {
  const now = new Date();
  const year = 2026;
  const month = 1; // February (0-indexed)
  const today = now.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const dayNames = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button className="w-7 h-7 rounded-md bg-[#252525] border border-border text-gray text-xs flex items-center justify-center cursor-pointer hover:text-dark">
          &larr;
        </button>
        <span className="text-sm font-semibold text-dark">February 2026</span>
        <button className="w-7 h-7 rounded-md bg-[#252525] border border-border text-gray text-xs flex items-center justify-center cursor-pointer hover:text-dark">
          &rarr;
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {dayNames.map((d) => (
          <div key={d} className="text-[10px] text-gray text-center font-medium py-1">{d}</div>
        ))}
      </div>

      {/* Day Numbers */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => (
          <div
            key={i}
            className={`text-xs text-center py-1.5 rounded-md cursor-pointer transition-colors ${
              day === null
                ? ''
                : day === today
                  ? 'bg-[#3b82f6] text-white font-bold'
                  : 'text-gray hover:bg-[#252525] hover:text-dark'
            }`}
          >
            {day ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── Component ─────────────────── */

export function HomeLanding() {
  return (
    <div className="overflow-y-auto">
      <div className="pt-2 pb-10">

        {/* ─── Row 1: To Do List + Financial Summary ─── */}
        <div className="flex gap-6 mb-8 items-start">
          {/* Left — To Do List */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-dark mb-4">To Do List</h2>
            <div className="flex gap-4 justify-start">
              {TODO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="w-[160px] flex-shrink-0 bg-[#1a1a1a] rounded-xl border border-border px-3 py-3 text-center cursor-pointer hover:border-[#444] transition-colors"
                >
                  <div className="text-xs text-gray mb-1.5">{item.label}</div>
                  <div className={`text-sm font-bold ${item.isAlert ? 'text-[#ef4444]' : 'text-dark'}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Financial Summary (top-aligned with cards via mt to skip "To Do List" heading) */}
          <div className="w-[260px] flex-shrink-0 mt-[36px]">
            <div className="bg-[#1a1a1a] rounded-xl border border-border p-5">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray">Balance:</span>
                  <span className="text-dark font-semibold">$12,715.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Payments:</span>
                  <span className="text-dark font-semibold">$2,700.50</span>
                </div>
                <div className="text-[10px] text-gray text-right">(EOM)</div>
                <div className="flex justify-between">
                  <span className="text-gray">Exp. Receiving:</span>
                  <span className="text-dark font-semibold">$3,758.25</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="text-gray">Balance:</span>
                  <span className="text-dark font-bold">—</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Row 2: What's New Today + Calendar ─── */}
        <div className="flex gap-6 mb-8">
          {/* Left — What's New Today */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-dark mb-4">What's New Today ?</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Subscribed News */}
              <div>
                <h3 className="text-sm font-bold text-dark mb-3">Subscribed News Update</h3>
                <div className="space-y-2">
                  {NEWS_ITEMS.map((item) => (
                    <div key={item} className="text-sm text-gray">• {item}</div>
                  ))}
                </div>
              </div>

              {/* My Events */}
              <div>
                <h3 className="text-sm font-bold text-dark mb-3">My Events</h3>
                <div className="space-y-2">
                  {EVENT_ITEMS.map((item) => (
                    <div key={item} className="text-sm text-gray">• {item}</div>
                  ))}
                </div>
              </div>

              {/* My Performance */}
              <div>
                <PerformanceChart />
              </div>
            </div>
          </div>

          {/* Right — Calendar */}
          <div className="w-[260px] flex-shrink-0">
            <MiniCalendar />
          </div>
        </div>

        {/* ─── Row 3: Quick Access Buttons ─── */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.id}
                className="px-8 py-4 bg-[#1a1a1a] rounded-xl border border-border text-sm font-semibold text-dark cursor-pointer hover:border-[#444] hover:bg-[#1e1e1e] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="w-[60px] py-4 bg-[#1a1a1a] rounded-xl border border-border text-2xl text-gray cursor-pointer hover:border-[#444] hover:text-dark transition-colors">
              +
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
