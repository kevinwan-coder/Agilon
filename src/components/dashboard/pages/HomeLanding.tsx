import { useState } from 'react';

/* ─────────────────── To-Do Cards ─────────────────── */

const TODO_ITEMS = [
  { label: 'Company Setup', value: 'Unfinished', isAlert: true },
  { label: 'Payment', value: 'Approval', isAlert: false },
  { label: 'Next Appoint', value: '3:30 PM', isAlert: false },
  { label: 'Replies', value: '2, 8', isAlert: true },
];

/* ─────────────────── News / Events ─────────────────── */

const NEWS_ITEMS = [
  { label: 'Financial Updates', checked: false },
  { label: 'News', checked: false },
  { label: 'Sports', checked: false },
];

const EVENT_ITEMS = [
  { label: "Dad's Birthday", checked: false },
  { label: 'Golf with Dr. Wan', checked: false },
  { label: 'Illini Game', checked: false },
];

/* ─────────────────── Quick Access ─────────────────── */

const QUICK_LINKS = [
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'financial', label: 'Financial' },
];

/* ─────────────────── Calendar Helper ─────────────────── */

function MiniCalendar() {
  const now = new Date();
  const year = 2026;
  const month = 1; // February (0-indexed)
  const today = now.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-based: Mon=0, Tue=1, ..., Sun=6
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
  const [newsChecked, setNewsChecked] = useState<boolean[]>(NEWS_ITEMS.map(() => false));
  const [eventsChecked, setEventsChecked] = useState<boolean[]>(EVENT_ITEMS.map(() => false));

  return (
    <div className="-m-8 overflow-y-auto">
      <div className="px-10 pt-8 pb-10">

        {/* ─── Row 1: To Do List + Financial Summary ─── */}
        <div className="flex gap-6 mb-8">
          {/* Left — To Do List */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-dark mb-4">To Do List</h2>
            <div className="flex gap-4">
              {TODO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex-1 bg-[#1a1a1a] rounded-xl border border-border p-4 text-center cursor-pointer hover:border-[#444] transition-colors"
                >
                  <div className="text-xs text-gray mb-2">{item.label}</div>
                  <div className={`text-sm font-bold ${item.isAlert ? 'text-[#ef4444]' : 'text-dark'}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Financial Summary */}
          <div className="w-[260px] flex-shrink-0">
            <div className="bg-[#1a1a1a] rounded-xl border border-border p-5 h-full">
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
                <div className="space-y-2.5">
                  {NEWS_ITEMS.map((item, i) => (
                    <label key={item.label} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={newsChecked[i]}
                        onChange={() => {
                          const next = [...newsChecked];
                          next[i] = !next[i];
                          setNewsChecked(next);
                        }}
                        className="w-4 h-4 rounded border-2 border-border bg-[#252525] accent-[#3b82f6] cursor-pointer"
                      />
                      <span className="text-sm text-gray group-hover:text-dark transition-colors">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* My Events */}
              <div>
                <h3 className="text-sm font-bold text-dark mb-3">My Events</h3>
                <div className="space-y-2.5">
                  {EVENT_ITEMS.map((item, i) => (
                    <label key={item.label} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={eventsChecked[i]}
                        onChange={() => {
                          const next = [...eventsChecked];
                          next[i] = !next[i];
                          setEventsChecked(next);
                        }}
                        className="w-4 h-4 rounded border-2 border-border bg-[#252525] accent-[#3b82f6] cursor-pointer"
                      />
                      <span className="text-sm text-gray group-hover:text-dark transition-colors">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* My Performance */}
              <div>
                <h3 className="text-sm font-bold text-dark mb-3">My Performance</h3>
                <div className="bg-[#1a1a1a] rounded-lg border border-border p-4 h-[80px] flex items-center justify-center">
                  <span className="text-xs text-gray">Coming soon</span>
                </div>
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
