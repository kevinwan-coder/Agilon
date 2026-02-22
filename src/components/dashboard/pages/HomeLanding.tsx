/* ─────────────────── HomeLanding ─────────────────── */

/* ─── Mini Calendar ─── */

function MiniCalendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    [null, null, null, null, null, null, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, null],
  ];
  const today = 21;

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-dark">February 2026</span>
        <div className="flex gap-2">
          <button className="text-gray text-xs bg-transparent border-none cursor-pointer hover:text-dark">◀</button>
          <button className="text-gray text-xs bg-transparent border-none cursor-pointer hover:text-dark">▶</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((d) => (
          <div key={d} className="text-gray py-1 font-medium">{d}</div>
        ))}
        {dates.flat().map((d, i) => (
          <div
            key={i}
            className={`py-1 rounded-lg ${
              d === today
                ? 'bg-[#3b82f6] text-white font-bold'
                : d
                  ? 'text-dark hover:bg-[#252525] cursor-pointer'
                  : ''
            }`}
          >
            {d || ''}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Performance Chart ─── */

function PerformanceChart() {
  return (
    <div>
      <h3 className="text-sm font-bold text-dark mb-3">My Performance</h3>
      <div className="bg-[#1a1a1a] rounded-2xl border border-border p-4">
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
          {/* Y-axis labels */}
          <text x="25" y="18" textAnchor="end" fill="#666" fontSize="7">800</text>
          <text x="25" y="33" textAnchor="end" fill="#666" fontSize="7">600</text>
          <text x="25" y="48" textAnchor="end" fill="#666" fontSize="7">400</text>
          <text x="25" y="58" textAnchor="end" fill="#666" fontSize="7">200</text>
          <text x="25" y="68" textAnchor="end" fill="#666" fontSize="7">0</text>
          {/* X-axis labels */}
          <text x="50" y="75" textAnchor="middle" fill="#666" fontSize="7">A</text>
          <text x="90" y="75" textAnchor="middle" fill="#666" fontSize="7">B</text>
          <text x="130" y="75" textAnchor="middle" fill="#666" fontSize="7">C</text>
          <text x="170" y="75" textAnchor="middle" fill="#666" fontSize="7">D</text>
          <text x="190" y="75" textAnchor="middle" fill="#666" fontSize="7">E</text>
          {/* Area fill */}
          <path d="M 30 60 C 50 55, 70 45, 90 35 C 110 25, 130 18, 150 12 C 165 8, 175 6, 190 5 L 190 65 L 30 65 Z"
            fill="url(#perfGrad)" opacity="0.3" />
          {/* Curve */}
          <path d="M 30 60 C 50 55, 70 45, 90 35 C 110 25, 130 18, 150 12 C 165 8, 175 6, 190 5"
            fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/* ─── Data ─── */

const TODO_ITEMS = [
  { label: 'Company Setup', value: 'Unfinished', isAlert: true },
  { label: 'Payment', value: 'Approval', isAlert: false },
  { label: 'Next Appoint', value: '3:30 PM', isAlert: false },
  { label: 'Replies', value: '2, 8', isAlert: true, splitValues: { urgent: '2', normal: '8' } },
];

const NEWS_ITEMS = ['Financial Updates', 'News', 'Sports'];
const EVENT_ITEMS = ["Dad's Birthday", 'Golf with Dr. Wan', 'Illini Game'];

/* ─── Component ─── */

export function HomeLanding() {
  return (
    <div className="overflow-y-auto">
      <div className="pt-2 pb-10">

        {/* ═══════════ ROW 1: To Do List + Financial Summary ═══════════ */}
        <div className="flex gap-6 mb-8 items-start">
          {/* Left — To Do List */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-dark mb-4">To Do List</h2>
            <div className="flex gap-4 justify-start">
              {TODO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="w-[160px] flex-shrink-0 bg-[#1a1a1a] rounded-2xl border border-border px-4 py-4 text-center cursor-pointer hover:border-[#444] transition-colors"
                >
                  <div className="text-xs text-gray mb-2">{item.label}</div>
                  <div className="text-sm font-bold">
                    {item.splitValues ? (
                      <><span className="text-[#ef4444]">{item.splitValues.urgent}</span><span className="text-dark">, {item.splitValues.normal}</span></>
                    ) : (
                      <span className={item.isAlert ? 'text-[#ef4444]' : 'text-dark'}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Financial Summary */}
          <div className="w-[260px] flex-shrink-0 mt-[36px]">
            <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5">
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

        {/* ═══════════ ROW 2: What's New Today + Calendar ═══════════ */}
        <div className="flex gap-6 mb-6 mt-[-5px]">
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
              {/* Upcoming Events */}
              <div>
                <h3 className="text-sm font-bold text-dark mb-3">Upcoming Events</h3>
                <div className="space-y-2">
                  {EVENT_ITEMS.map((item) => (
                    <div key={item} className="text-sm text-gray">• {item}</div>
                  ))}
                </div>
              </div>
              {/* Performance */}
              <PerformanceChart />
            </div>
          </div>

          {/* Right — Calendar */}
          <div className="w-[260px] flex-shrink-0 mt-[60px]">
            <MiniCalendar />
          </div>
        </div>

        {/* ═══════════ ROW 3: Quick Access ═══════════ */}
        <div className="mb-8">
          <div className="flex gap-4">
            <button className="w-[200px] h-[80px] bg-[#1a1a1a] rounded-2xl border border-border flex items-center justify-center gap-3 text-sm font-semibold text-dark cursor-pointer hover:border-[#444] hover:bg-[#1e1e1e] transition-colors">
              <span className="text-xl">📁</span>
              Projects
            </button>
            <button className="w-[200px] h-[80px] bg-[#1a1a1a] rounded-2xl border border-border text-2xl text-gray cursor-pointer hover:border-[#444] hover:text-dark transition-colors flex items-center justify-center">
              +
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
