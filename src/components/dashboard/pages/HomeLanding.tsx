/* ─────────────────── HomeLanding – New Card Design ─────────────────── */

/* ─── Performance Chart (AI Insights) ─── */

function InsightsChart() {
  return (
    <svg width="100%" height="140" viewBox="0 0 260 140" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      <line x1="40" y1="10" x2="40" y2="110" stroke="#333" strokeWidth="0.5" />
      <line x1="40" y1="110" x2="250" y2="110" stroke="#333" strokeWidth="0.5" />
      {/* Horizontal grid */}
      <line x1="40" y1="30" x2="250" y2="30" stroke="#252525" strokeWidth="0.5" strokeDasharray="3" />
      <line x1="40" y1="50" x2="250" y2="50" stroke="#252525" strokeWidth="0.5" strokeDasharray="3" />
      <line x1="40" y1="70" x2="250" y2="70" stroke="#252525" strokeWidth="0.5" strokeDasharray="3" />
      <line x1="40" y1="90" x2="250" y2="90" stroke="#252525" strokeWidth="0.5" strokeDasharray="3" />
      {/* Y-axis labels */}
      <text x="35" y="34" textAnchor="end" fill="#666" fontSize="9">4000</text>
      <text x="35" y="54" textAnchor="end" fill="#666" fontSize="9">3000</text>
      <text x="35" y="74" textAnchor="end" fill="#666" fontSize="9">2000</text>
      <text x="35" y="94" textAnchor="end" fill="#666" fontSize="9">1000</text>
      {/* X-axis labels */}
      <text x="60" y="125" textAnchor="middle" fill="#666" fontSize="8">N</text>
      <text x="100" y="125" textAnchor="middle" fill="#666" fontSize="8">10</text>
      <text x="140" y="125" textAnchor="middle" fill="#666" fontSize="8">18</text>
      <text x="180" y="125" textAnchor="middle" fill="#666" fontSize="8">30</text>
      <text x="220" y="125" textAnchor="middle" fill="#666" fontSize="8">300</text>
      <text x="245" y="125" textAnchor="middle" fill="#666" fontSize="8">100</text>
      {/* Area fill */}
      <path
        d="M 40 95 C 60 90, 80 80, 100 70 C 120 60, 140 45, 170 35 C 190 28, 210 25, 230 22 L 250 20 L 250 110 L 40 110 Z"
        fill="url(#chartGradient)"
        opacity="0.3"
      />
      {/* Performance curve */}
      <path
        d="M 40 95 C 60 90, 80 80, 100 70 C 120 60, 140 45, 170 35 C 190 28, 210 25, 230 22 L 250 20"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────── Component ─────────────────── */

export function HomeLanding() {
  return (
    <div className="overflow-y-auto">
      <div className="pt-2 pb-10">

        {/* ═══════════ ROW 1: To Do List ═══════════ */}
        <h2 className="text-lg font-bold text-dark mb-4">To Do List</h2>
        <div className="grid grid-cols-3 gap-5 mb-8">

          {/* ── Approvals Card ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-base font-bold text-dark mb-3">Approvals</h3>
              <span className="inline-block bg-[#22c55e] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">3 Pending</span>
              <div className="space-y-1 text-sm text-gray">
                <div>Invoice for Client X</div>
                <div>Pitch for LY Went Z</div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-[#3b82f6] text-white text-xs font-semibold px-5 py-2 rounded-lg border-none cursor-pointer hover:bg-[#2563eb] transition-colors">
                Review
              </button>
            </div>
          </div>

          {/* ── Focus Mode Card ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5 flex flex-col items-center justify-between min-h-[180px]">
            <div className="flex flex-col items-center">
              <h3 className="text-base font-bold text-dark mb-3">Focus Mode</h3>
              {/* Circular progress ring */}
              <div className="relative w-16 h-16 mb-2">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#252525" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#22c55e" strokeWidth="4"
                    strokeDasharray="132 44"
                    strokeLinecap="round"
                    transform="rotate(-90 32 32)"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-dark">2:45:18</div>
              <div className="text-xs text-gray mt-1">Deep Work Session Active</div>
            </div>
            <div className="mt-4">
              <button className="bg-[#22c55e] text-white text-xs font-semibold px-5 py-2 rounded-lg border-none cursor-pointer hover:bg-[#16a34a] transition-colors">
                End Moon
              </button>
            </div>
          </div>

          {/* ── Pipeline Card ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-base font-bold text-dark mb-3">Pipeline</h3>
              <span className="inline-block bg-[#7c3aed] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">2 Dormant Leads</span>
              <div className="space-y-1 text-sm text-gray">
                <div>Disch for UK Wiers Y</div>
                <div>Lead B, Lead (105 days)</div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-[#ef4444] text-white text-xs font-semibold px-5 py-2 rounded-lg border-none cursor-pointer hover:bg-[#dc2626] transition-colors">
                End Report
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════ ROW 2: Performance AI Insights ═══════════ */}
        <h2 className="text-lg font-bold text-dark mb-4">Performance AI Insights</h2>
        <div className="grid grid-cols-2 gap-5 mb-8">

          {/* ── AI Insights Chart ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5">
            <p className="text-sm font-semibold text-dark mb-4">
              Your Profitibility is <span className="text-[#22c55e]">UP 12%</span> Since Specialized in Technical Writing
            </p>
            <InsightsChart />
          </div>

          {/* ── Automated Project Folders ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5">
            <h3 className="text-base font-bold text-dark mb-4">Automated Project Folders</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* Project Alpha */}
              <div className="bg-[#252525] rounded-xl p-3 flex items-center gap-3">
                <span className="text-2xl">📁</span>
                <div>
                  <div className="text-sm font-semibold text-dark">Project Alpha</div>
                  <div className="text-xs text-gray">[Drive] [Notion]</div>
                </div>
              </div>
              {/* Dies A */}
              <div className="bg-[#252525] rounded-xl p-3 flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <div className="text-sm font-semibold text-dark">Dies A</div>
                  <div className="text-xs text-gray">[Slack] [Notion]</div>
                </div>
              </div>
              {/* Project Beta */}
              <div className="bg-[#252525] rounded-xl p-3 flex items-center gap-3">
                <span className="text-2xl">📁</span>
                <div>
                  <div className="text-sm font-semibold text-dark">Project Beta</div>
                  <div className="text-xs text-gray">[Slack] [Trello]</div>
                </div>
              </div>
              {/* + New Project */}
              <div className="bg-[#252525] rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-[#333] transition-colors">
                <span className="text-2xl text-[#22c55e]">+</span>
                <div className="text-sm font-semibold text-gray">New Project</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ ROW 3: Project Folders + Dynamic News ═══════════ */}
        <h2 className="text-lg font-bold text-dark mb-4">Automated Project Folders</h2>
        <div className="grid grid-cols-2 gap-5 mb-8">

          {/* ── Project Folder Quick Access ── */}
          <div className="flex gap-3">
            <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5 flex items-center gap-4 flex-1">
              <span className="text-3xl">📁</span>
              <span className="text-sm font-bold text-dark">Project Beta</span>
            </div>
            <button className="bg-[#1a1a1a] rounded-2xl border border-border w-14 flex items-center justify-center text-2xl text-gray cursor-pointer hover:border-[#444] hover:text-dark transition-colors">
              +
            </button>
          </div>

          {/* ── Dynamic News Update ── */}
          <div className="bg-[#1a1a1a] rounded-2xl border border-border p-5">
            <h3 className="text-base font-bold text-dark mb-3">Dynamic News Update</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray">
              <div>AI Powered Design Tools Disrupt Cost $ Freelancers</div>
              <div>New Tax Laws for Freelancers Work Trends</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
