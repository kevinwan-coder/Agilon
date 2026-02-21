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
  { id: 'projects', label: 'Projects', icon: '📁' },
  { id: 'clients', label: 'Clients', icon: '👥' },
  { id: 'marketing', label: 'Marketing', icon: '📢' },
  { id: 'financial', label: 'Financial', icon: '💰' },
];

/* ─────────────────── Performance Chart ─────────────────── */

function PerformanceChart() {
  return (
    <div>
      <h3 className="text-sm font-bold text-dark mb-3">My Performance</h3>
      <div className="bg-[#1a1a1a] rounded-xl border border-border p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-dark">Performance</span>
          <button className="text-gray text-xs cursor-pointer bg-transparent border-none hover:text-dark">⋮</button>
        </div>
        <svg width="100%" height="78" viewBox="0 0 200 78" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="30" y1="5" x2="30" y2="65" stroke="#333" strokeWidth="0.5" />
          <line x1="30" y1="65" x2="190" y2="65" stroke="#333" strokeWidth="0.5" />
          {/* Horizontal grid */}
          <line x1="30" y1="15" x2="190" y2="15" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="30" y1="30" x2="190" y2="30" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="30" y1="45" x2="190" y2="45" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="30" y1="55" x2="190" y2="55" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          {/* Vertical grid */}
          <line x1="70" y1="5" x2="70" y2="65" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="110" y1="5" x2="110" y2="65" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="150" y1="5" x2="150" y2="65" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          <line x1="190" y1="5" x2="190" y2="65" stroke="#252525" strokeWidth="0.5" strokeDasharray="2" />
          {/* Y-axis labels */}
          <text x="25" y="18" textAnchor="end" fill="#666" fontSize="7">800</text>
          <text x="25" y="33" textAnchor="end" fill="#666" fontSize="7">600</text>
          <text x="25" y="48" textAnchor="end" fill="#666" fontSize="7">400</text>
          <text x="25" y="58" textAnchor="end" fill="#666" fontSize="7">200</text>
          <text x="25" y="68" textAnchor="end" fill="#666" fontSize="7">0</text>
          {/* X-axis labels */}
          <text x="50" y="75" textAnchor="middle" fill="#3b82f6" fontSize="7">A</text>
          <text x="90" y="75" textAnchor="middle" fill="#3b82f6" fontSize="7">B</text>
          <text x="130" y="75" textAnchor="middle" fill="#3b82f6" fontSize="7">C</text>
          <text x="170" y="75" textAnchor="middle" fill="#3b82f6" fontSize="7">D</text>
          <text x="190" y="75" textAnchor="middle" fill="#3b82f6" fontSize="7">E</text>
          {/* Performance curve */}
          <path
            d="M 30 40 C 50 38, 60 32, 80 27 C 100 22, 120 18, 140 17 C 155 16, 165 17, 175 20 C 182 22, 188 25, 190 28"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
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

          {/* Right — Financial Summary */}
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
        <div className="flex gap-6 mb-6 mt-[-130px]">
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

          {/* Right — Calendar (60px gap from Balance above) */}
          <div className="w-[260px] flex-shrink-0 mt-[60px]">
            <MiniCalendar />
          </div>
        </div>

        {/* ─── Row 3: Quick Access Buttons ─── */}
        <div className="mb-4">
          <div className="flex gap-4">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.id}
                className="w-[200px] h-[80px] bg-[#1a1a1a] rounded-xl border border-border flex items-center justify-center gap-3 text-sm font-semibold text-dark cursor-pointer hover:border-[#444] hover:bg-[#1e1e1e] transition-colors"
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* + Button on new line */}
        <div className="mb-8">
          <button className="w-[200px] h-[80px] bg-[#1a1a1a] rounded-xl border border-border text-2xl text-gray cursor-pointer hover:border-[#444] hover:text-dark transition-colors flex items-center justify-center">
            +
          </button>
        </div>

      </div>
    </div>
  );
}
