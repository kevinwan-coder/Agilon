import { SKILLS } from '../../../constants/skills';

interface SkillDetailPageProps {
  skillId: string;
}

const SKILL_FEATURES: Record<string, { features: string[]; stats: { label: string; value: string }[] }> = {
  accounting: {
    features: ['Invoice generation', 'Expense tracking', 'Financial reports', 'Bank reconciliation', 'Profit & Loss statements'],
    stats: [
      { label: 'Invoices Sent', value: '42' },
      { label: 'Revenue Tracked', value: '$24,350' },
      { label: 'Expenses Logged', value: '128' },
    ],
  },
  hr: {
    features: ['Employee directory', 'Payroll processing', 'Benefits management', 'Time tracking', 'Performance reviews'],
    stats: [
      { label: 'Employees', value: '8' },
      { label: 'Payrolls Run', value: '2' },
      { label: 'Hours Logged', value: '320' },
    ],
  },
  tax: {
    features: ['Tax estimation', 'Filing preparation', 'Deduction tracking', 'Compliance alerts', 'Quarterly reports'],
    stats: [
      { label: 'Next Filing', value: 'Apr 15' },
      { label: 'Estimated Tax', value: '$2,400' },
      { label: 'Deductions Found', value: '$8,200' },
    ],
  },
  scheduling: {
    features: ['Calendar management', 'Appointment booking', 'Resource allocation', 'Meeting reminders', 'Client scheduling'],
    stats: [
      { label: 'Meetings This Week', value: '12' },
      { label: 'Upcoming', value: '5' },
      { label: 'Hours Scheduled', value: '18h' },
    ],
  },
  vdr: {
    features: ['Secure document sharing', 'Access controls', 'Audit trails', 'Watermarking', 'Bulk upload'],
    stats: [
      { label: 'Documents', value: '34' },
      { label: 'Shared With', value: '6 users' },
      { label: 'Total Size', value: '450 MB' },
    ],
  },
  it: {
    features: ['Helpdesk tickets', 'Device management', 'Software tracking', 'Security alerts', 'System monitoring'],
    stats: [
      { label: 'Open Tickets', value: '3' },
      { label: 'Devices', value: '12' },
      { label: 'Uptime', value: '99.8%' },
    ],
  },
  legal: {
    features: ['Contract templates', 'E-signatures', 'Compliance tracking', 'Document storage', 'Renewal alerts'],
    stats: [
      { label: 'Active Contracts', value: '15' },
      { label: 'Pending Signatures', value: '2' },
      { label: 'Expiring Soon', value: '1' },
    ],
  },
};

export function SkillDetailPage({ skillId }: SkillDetailPageProps) {
  const skill = SKILLS.find((s) => s.id === skillId);
  const details = SKILL_FEATURES[skillId];

  if (!skill) {
    return <div className="text-gray">Skill not found.</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center text-3xl">
          {skill.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-dark">{skill.name}</h1>
          <p className="text-gray">{skill.description}</p>
        </div>
      </div>

      {/* Stats */}
      {details && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {details.stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border p-5">
              <div className="text-sm text-gray mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-dark">{stat.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Features */}
        {details && (
          <div className="bg-white rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-dark mb-4">Features</h3>
            <div className="space-y-2.5">
              {details.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-light text-green flex items-center justify-center text-xs font-bold">
                    {'\u2713'}
                  </div>
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Start */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-lg font-semibold text-dark mb-4">Quick Start</h3>
          <p className="text-sm text-gray mb-4">
            Get started with {skill.name} by trying these common actions:
          </p>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-3 bg-light border border-border rounded-lg text-sm text-dark hover:bg-primary-light hover:border-primary hover:text-primary transition-colors cursor-pointer">
              {'\uD83E\uDD16'} Ask Agilon Bot to help with {skill.name.toLowerCase()}
            </button>
            <button className="w-full text-left px-4 py-3 bg-light border border-border rounded-lg text-sm text-dark hover:bg-primary-light hover:border-primary hover:text-primary transition-colors cursor-pointer">
              {'\uD83D\uDD04'} Create a {skill.name.toLowerCase()} workflow
            </button>
            <button className="w-full text-left px-4 py-3 bg-light border border-border rounded-lg text-sm text-dark hover:bg-primary-light hover:border-primary hover:text-primary transition-colors cursor-pointer">
              {'\uD83D\uDCC4'} Browse {skill.name.toLowerCase()} templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
