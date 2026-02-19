import type { SkillId } from '../types/setup';

export interface SkillConfig {
  id: SkillId;
  name: string;
  description: string;
  icon: string;
}

export const SKILLS: SkillConfig[] = [
  { id: 'accounting', name: 'Accounting', description: 'Bookkeeping, invoicing, financial reporting', icon: '\uD83D\uDCCA' },
  { id: 'hr', name: 'HR', description: 'Employee management, payroll, benefits', icon: '\uD83D\uDC65' },
  { id: 'tax', name: 'Tax', description: 'Tax preparation, filing, compliance', icon: '\uD83D\uDCCB' },
  { id: 'scheduling', name: 'Scheduling', description: 'Appointments, calendar, resource booking', icon: '\uD83D\uDCC5' },
  { id: 'vdr', name: 'VDR', description: 'Virtual Data Room \u2014 secure doc sharing', icon: '\uD83D\uDD12' },
  { id: 'it', name: 'IT', description: 'IT support, device management, helpdesk', icon: '\uD83D\uDCBB' },
  { id: 'legal', name: 'Legal', description: 'Contract management, compliance, legal docs', icon: '\u2696\uFE0F' },
];
