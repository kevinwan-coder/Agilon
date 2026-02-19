import { useState } from 'react';

interface Workflow {
  id: number;
  name: string;
  steps: { label: string; type: 'ai' | 'human' | 'hybrid' }[];
  status: 'active' | 'draft' | 'paused';
  runs: number;
}

const SAMPLE_WORKFLOWS: Workflow[] = [
  {
    id: 1,
    name: 'Invoice Processing',
    steps: [
      { label: 'Receive Invoice', type: 'ai' },
      { label: 'Extract Data', type: 'ai' },
      { label: 'Review & Approve', type: 'human' },
      { label: 'Book Entry', type: 'ai' },
      { label: 'Notify Client', type: 'ai' },
    ],
    status: 'active',
    runs: 24,
  },
  {
    id: 2,
    name: 'Employee Onboarding',
    steps: [
      { label: 'Generate Offer Letter', type: 'ai' },
      { label: 'Sign Documents', type: 'human' },
      { label: 'Setup Accounts', type: 'ai' },
      { label: 'Welcome Email', type: 'ai' },
    ],
    status: 'active',
    runs: 5,
  },
  {
    id: 3,
    name: 'Monthly Tax Report',
    steps: [
      { label: 'Gather Transactions', type: 'ai' },
      { label: 'Classify Expenses', type: 'hybrid' },
      { label: 'Generate Report', type: 'ai' },
      { label: 'Review & File', type: 'human' },
    ],
    status: 'draft',
    runs: 0,
  },
];

const TYPE_STYLES = {
  ai: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'AI' },
  human: { bg: 'bg-pink-50', text: 'text-pink-600', label: 'Human' },
  hybrid: { bg: 'bg-purple-50', text: 'text-purple-600', label: 'Hybrid' },
};

const STATUS_STYLES = {
  active: { bg: 'bg-green-light', text: 'text-green', label: 'Active' },
  draft: { bg: 'bg-light', text: 'text-gray', label: 'Draft' },
  paused: { bg: 'bg-orange-50', text: 'text-orange-600', label: 'Paused' },
};

export function WorkflowsPage() {
  const [workflows] = useState<Workflow[]>(SAMPLE_WORKFLOWS);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-dark">Workflows</h1>
          <p className="text-gray mt-1">Create and manage your automated business processes.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold cursor-pointer border-none hover:bg-primary-hover transition-colors">
          + New Workflow
        </button>
      </div>

      {/* Workflow Cards */}
      <div className="space-y-4">
        {workflows.map((wf) => {
          const status = STATUS_STYLES[wf.status];
          return (
            <div key={wf.id} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-dark">{wf.name}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}>
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray">{wf.runs} runs</span>
                  <button className="text-gray hover:text-dark bg-transparent border-none cursor-pointer text-lg">{'\u22EF'}</button>
                </div>
              </div>

              {/* Steps Flow */}
              <div className="flex items-center gap-1 flex-wrap">
                {wf.steps.map((step, i) => {
                  const style = TYPE_STYLES[step.type];
                  return (
                    <div key={i} className="flex items-center gap-1">
                      <div className={`px-3 py-1.5 rounded-md text-xs font-semibold ${style.bg} ${style.text}`}>
                        {step.label}
                        <span className="ml-1.5 opacity-60">({style.label})</span>
                      </div>
                      {i < wf.steps.length - 1 && (
                        <span className="text-gray-light text-sm mx-0.5">{'\u2192'}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <button className="px-4 py-2 bg-primary-light text-primary rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-primary hover:text-white transition-colors">
                  {wf.status === 'draft' ? 'Edit' : 'View'}
                </button>
                {wf.status === 'active' && (
                  <button className="px-4 py-2 bg-green-light text-green rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-green hover:text-white transition-colors">
                    Run Now
                  </button>
                )}
                {wf.status === 'draft' && (
                  <button className="px-4 py-2 bg-green-light text-green rounded-lg text-sm font-medium cursor-pointer border-none hover:bg-green hover:text-white transition-colors">
                    Activate
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
