import { useState, useMemo } from 'react';

interface CalendarEvent {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  duration: string;
  type: 'meeting' | 'task' | 'reminder' | 'deadline';
  description?: string;
}

const EVENT_TYPES = {
  meeting: { dot: 'bg-blue-400', label: 'Meeting' },
  task: { dot: 'bg-emerald-400', label: 'Task' },
  reminder: { dot: 'bg-amber-400', label: 'Reminder' },
  deadline: { dot: 'bg-rose-400', label: 'Deadline' },
};

const SAMPLE_EVENTS: CalendarEvent[] = [
  { id: 1, title: 'Team Standup', date: '2026-02-18', time: '9:00 AM', duration: '30 min', type: 'meeting', description: 'Daily sync with the team' },
  { id: 2, title: 'Client Call — Acme Corp', date: '2026-02-18', time: '2:00 PM', duration: '1 hour', type: 'meeting', description: 'Quarterly review with Acme Corp' },
  { id: 3, title: 'Send Invoice #1043', date: '2026-02-19', time: '10:00 AM', duration: '15 min', type: 'task' },
  { id: 4, title: 'Tax Filing Deadline', date: '2026-02-20', time: 'All Day', duration: '', type: 'deadline', description: 'Monthly sales tax filing due' },
  { id: 5, title: 'Review Payroll', date: '2026-02-21', time: '11:00 AM', duration: '45 min', type: 'task', description: 'Review and approve February payroll' },
  { id: 6, title: 'Lunch with Sarah', date: '2026-02-22', time: '12:30 PM', duration: '1 hour', type: 'meeting' },
  { id: 7, title: 'Contract Renewal — ClientX', date: '2026-02-25', time: 'All Day', duration: '', type: 'reminder', description: 'NDA renewal due for ClientX' },
  { id: 8, title: 'Quarterly Planning', date: '2026-02-26', time: '3:00 PM', duration: '2 hours', type: 'meeting', description: 'Q2 strategy and planning session' },
  { id: 9, title: 'Submit Expense Report', date: '2026-02-27', time: '5:00 PM', duration: '', type: 'deadline' },
  { id: 10, title: 'Website Redesign Kickoff', date: '2026-03-02', time: '10:00 AM', duration: '1.5 hours', type: 'meeting' },
  { id: 11, title: 'Insurance Renewal', date: '2026-03-05', time: 'All Day', duration: '', type: 'reminder', description: 'Business insurance policy renewal' },
  { id: 12, title: 'Board Meeting', date: '2026-03-10', time: '2:00 PM', duration: '2 hours', type: 'meeting' },
];

// Monday-first day labels
const DAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Returns 0=Mon, 1=Tue, ..., 6=Sun
function getFirstDayOfMonthMondayStart(year: number, month: number) {
  const day = new Date(year, month, 1).getDay(); // 0=Sun
  return day === 0 ? 6 : day - 1;
}

function formatDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function CalendarPage() {
  const today = new Date(2026, 1, 18); // Feb 18, 2026
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string>(formatDateKey(today.getFullYear(), today.getMonth(), today.getDate()));

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonthMondayStart(currentYear, currentMonth);

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    SAMPLE_EVENTS.forEach((e) => {
      if (!map[e.date]) map[e.date] = [];
      map[e.date].push(e);
    });
    return map;
  }, []);

  const selectedEvents = eventsByDate[selectedDate] || [];
  const todayKey = formatDateKey(today.getFullYear(), today.getMonth(), today.getDate());

  // Upcoming events
  const upcomingEvents = SAMPLE_EVENTS
    .filter((e) => e.date >= todayKey)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
    .slice(0, 6);

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
  };

  // Build calendar grid (Monday-first)
  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);
  while (calendarCells.length % 7 !== 0) calendarCells.push(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Calendar</h1>
          <p className="text-gray mt-1">Manage your schedule and appointments.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold cursor-pointer border-none hover:bg-primary-hover transition-colors">
          + New Event
        </button>
      </div>

      <div className="grid grid-cols-[340px_1fr] gap-6">
        {/* Dark Calendar Widget */}
        <div className="space-y-6">
          <div className="bg-[#1e1e2e] rounded-2xl p-6 select-none">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 cursor-pointer border-none bg-transparent transition-colors text-lg"
              >
                {'\u2039'}
              </button>
              <h2 className="text-white font-semibold text-base tracking-wide">
                {MONTHS[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={nextMonth}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 cursor-pointer border-none bg-transparent transition-colors text-lg"
              >
                {'\u203A'}
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-[11px] font-medium text-white/40 tracking-wider">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-y-1">
              {calendarCells.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="w-10 h-10 mx-auto" />;
                }

                const dateKey = formatDateKey(currentYear, currentMonth, day);
                const hasEvents = !!eventsByDate[dateKey];
                const isToday = dateKey === todayKey;
                const isSelected = dateKey === selectedDate && !isToday;

                return (
                  <button
                    key={dateKey}
                    onClick={() => setSelectedDate(dateKey)}
                    className={`w-10 h-10 mx-auto flex flex-col items-center justify-center rounded-full cursor-pointer border-none transition-all text-sm ${
                      isToday
                        ? 'bg-primary text-white font-bold'
                        : isSelected
                          ? 'bg-white/15 text-white font-medium'
                          : 'bg-transparent text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {day}
                    {hasEvents && !isToday && (
                      <div className="w-1 h-1 rounded-full bg-primary mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl border border-border p-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(EVENT_TYPES).map(([key, style]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
                  <span className="text-xs text-gray">{style.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — Events */}
        <div className="space-y-6">
          {/* Selected date events */}
          <div className="bg-white rounded-xl border border-border">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-dark">
                {selectedDate === todayKey
                  ? "Today's Schedule"
                  : new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h3>
              <span className="text-xs text-gray bg-light px-2.5 py-1 rounded-full">
                {selectedEvents.length} event{selectedEvents.length !== 1 ? 's' : ''}
              </span>
            </div>
            {selectedEvents.length > 0 ? (
              <div className="divide-y divide-border">
                {selectedEvents.map((ev) => {
                  const style = EVENT_TYPES[ev.type];
                  return (
                    <div key={ev.id} className="px-5 py-4 hover:bg-light/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${style.dot}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-dark">{ev.title}</span>
                            <span className="text-[11px] text-gray-light flex-shrink-0">{ev.duration}</span>
                          </div>
                          <div className="text-xs text-gray mt-0.5">{ev.time}</div>
                          {ev.description && (
                            <p className="text-xs text-gray-light mt-1">{ev.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="px-5 py-10 text-center">
                <div className="text-3xl mb-3 opacity-40">{'\uD83D\uDCC5'}</div>
                <p className="text-sm text-gray mb-1">No events scheduled</p>
                <p className="text-xs text-gray-light">Click "+ New Event" to add one</p>
              </div>
            )}
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-xl border border-border">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-semibold text-dark">Upcoming</h3>
            </div>
            <div className="divide-y divide-border">
              {upcomingEvents.map((ev) => {
                const style = EVENT_TYPES[ev.type];
                const evDate = new Date(ev.date + 'T12:00:00');
                const dayLabel = ev.date === todayKey
                  ? 'Today'
                  : evDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                return (
                  <div
                    key={ev.id}
                    onClick={() => setSelectedDate(ev.date)}
                    className="px-5 py-3.5 hover:bg-light/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-dark font-medium truncate">{ev.title}</span>
                          <span className="text-[11px] text-gray-light flex-shrink-0 ml-2">{ev.time}</span>
                        </div>
                        <div className="text-xs text-gray-light mt-0.5">{dayLabel}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
