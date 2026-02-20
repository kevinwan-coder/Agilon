import { useSetupStore } from '../../../store/useSetupStore';
import { SKILLS } from '../../../constants/skills';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

function StatCard({ label, value, change, positive, icon }: StatCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray">{label}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-2xl font-bold text-dark">{value}</div>
      <div className={`text-xs mt-1 font-medium ${positive ? 'text-green' : 'text-red'}`}>
        {change}
      </div>
    </div>
  );
}

const RECENT_ACTIVITY = [
  { id: 1, icon: '\uD83D\uDCCA', text: 'Invoice #1042 sent to Acme Corp', time: '2 min ago', type: 'accounting' },
  { id: 2, icon: '\uD83D\uDCC5', text: 'Meeting scheduled with Jane Doe', time: '15 min ago', type: 'scheduling' },
  { id: 3, icon: '\uD83E\uDD16', text: 'Agilon Bot processed 3 expense receipts', time: '1 hour ago', type: 'bot' },
  { id: 4, icon: '\uD83D\uDCCB', text: 'Q1 Tax estimate updated', time: '2 hours ago', type: 'tax' },
  { id: 5, icon: '\uD83D\uDD12', text: 'NDA uploaded to VDR', time: '3 hours ago', type: 'vdr' },
  { id: 6, icon: '\uD83D\uDC65', text: 'Payroll processed for February', time: 'Yesterday', type: 'hr' },
];

const QUICK_ACTIONS = [
  { icon: '\uD83D\uDCDD', label: 'New Invoice', color: 'bg-blue-50 text-blue-600' },
  { icon: '\uD83D\uDCC5', label: 'Schedule Meeting', color: 'bg-green-50 text-green-600' },
  { icon: '\uD83D\uDCC4', label: 'Upload Document', color: 'bg-purple-50 text-purple-600' },
  { icon: '\uD83D\uDCCA', label: 'View Reports', color: 'bg-orange-50 text-orange-600' },
  { icon: '\uD83D\uDD04', label: 'Run Workflow', color: 'bg-pink-50 text-pink-600' },
  { icon: '\uD83E\uDD16', label: 'Ask Agilon', color: 'bg-indigo-50 text-indigo-600' },
];

export function HomePage() {
  const businessInfo = useSetupStore((s) => s.businessInfo);
  const skills = useSetupStore((s) => s.skills);

  const activeSkills = SKILLS.filter((s) => skills.includes(s.id));

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">
          Welcome back, {businessInfo.name || 'there'} {'\uD83D\uDC4B'}
        </h1>
        <p className="text-gray mt-1">Here's what's happening with your business today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Revenue (MTD)" value="$8,240" change="+12.5% vs last month" positive icon={'\uD83D\uDCB0'} />
        <StatCard label="Expenses (MTD)" value="$3,150" change="-4.2% vs last month" positive icon={'\uD83D\uDCB3'} />
        <StatCard label="Active Workflows" value="7" change="+2 this week" positive icon={'\uD83D\uDD04'} />
        <StatCard label="Storage Used" value="2.4 GB" change="of 10 GB" positive icon={'\uD83D\uDCC1'} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="col-span-2 bg-[#1a1a1a] rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-dark">Recent Activity</h3>
            <button className="text-xs text-primary font-medium bg-transparent border-none cursor-pointer hover:underline">
              View all
            </button>
          </div>
          <div className="divide-y divide-border">
            {RECENT_ACTIVITY.map((activity) => (
              <div key={activity.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-light transition-colors">
                <span className="text-lg">{activity.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-dark truncate">{activity.text}</p>
                </div>
                <span className="text-xs text-gray-light flex-shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions + Active Skills */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-[#1a1a1a] rounded-xl border border-border">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-semibold text-dark">Quick Actions</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-2.5">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.label}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-lg cursor-pointer border-none transition-all hover:scale-105 ${action.color}`}
                >
                  <span className="text-xl">{action.icon}</span>
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Skills */}
          <div className="bg-[#1a1a1a] rounded-xl border border-border">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-dark">Active Skills</h3>
              <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-semibold">
                {activeSkills.length}
              </span>
            </div>
            <div className="p-3">
              {activeSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-light transition-colors cursor-pointer"
                >
                  <span className="text-base">{skill.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-dark">{skill.name}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
