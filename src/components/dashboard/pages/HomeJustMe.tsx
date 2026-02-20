import { useSetupStore } from '../../../store/useSetupStore';

const TASKS = [
  { id: 1, text: 'Send invoice to Acme Corp', done: true },
  { id: 2, text: 'Review Q1 tax estimates', done: false },
  { id: 3, text: 'Upload expense receipts', done: false },
  { id: 4, text: 'Schedule client call — Friday 2 PM', done: true },
  { id: 5, text: 'Update business insurance', done: false },
];

const TIPS = [
  { icon: '📊', title: 'Track your invoices', desc: 'Create and send professional invoices in seconds.' },
  { icon: '🤖', title: 'Ask Agilon Bot', desc: 'Get help with accounting, scheduling, and more.' },
  { icon: '📁', title: 'Store documents', desc: 'Keep all your business files organized in one place.' },
];

export function HomeJustMe() {
  const businessInfo = useSetupStore((s) => s.businessInfo);

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">
          Welcome back, {businessInfo.name || 'there'} 👋
        </h1>
        <p className="text-gray mt-1">Here's your business at a glance.</p>
      </div>

      {/* Simple Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a1a1a] rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray">Revenue (MTD)</span>
            <span className="text-xl">💰</span>
          </div>
          <div className="text-2xl font-bold text-dark">$8,240</div>
          <div className="text-xs mt-1 font-medium text-green">+12.5% vs last month</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray">Expenses (MTD)</span>
            <span className="text-xl">💳</span>
          </div>
          <div className="text-2xl font-bold text-dark">$3,150</div>
          <div className="text-xs mt-1 font-medium text-red">-4.2% vs last month</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray">Net Profit</span>
            <span className="text-xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-dark">$5,090</div>
          <div className="text-xs mt-1 font-medium text-green">+28.3% vs last month</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* To-Do List */}
        <div className="bg-[#1a1a1a] rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-dark">To-Do</h3>
            <span className="text-xs text-gray">{TASKS.filter((t) => t.done).length}/{TASKS.length} done</span>
          </div>
          <div className="divide-y divide-border">
            {TASKS.map((task) => (
              <div key={task.id} className="px-5 py-3.5 flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 ${
                  task.done
                    ? 'bg-[#2dca72] border-[#2dca72] text-white'
                    : 'border-border bg-transparent'
                }`}>
                  {task.done && <span className="text-xs">✓</span>}
                </div>
                <span className={`text-sm ${task.done ? 'text-gray line-through' : 'text-dark'}`}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Tips */}
        <div className="space-y-4">
          <h3 className="font-semibold text-dark">Getting Started</h3>
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="bg-[#1a1a1a] rounded-xl border border-border p-5 flex items-start gap-4 hover:border-[#7ee8a8] transition-colors cursor-pointer"
            >
              <span className="text-2xl flex-shrink-0">{tip.icon}</span>
              <div>
                <div className="text-sm font-semibold text-dark mb-1">{tip.title}</div>
                <p className="text-xs text-gray">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
