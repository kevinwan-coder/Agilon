import type { SkillId } from '../types/setup';

export interface SkillConfig {
  id: SkillId;
  name: string;
  description: string;
  icon: string;
}

export const SKILLS: SkillConfig[] = [
  { id: 'accounting', name: 'Accounting', description: 'Bookkeeping, invoicing, financial reporting',     icon: '📊' },
  { id: 'hr',         name: 'HR',         description: 'Employee management, payroll, benefits',         icon: '👥' },
  { id: 'tax',        name: 'Tax',        description: 'Tax preparation, filing, compliance',             icon: '📋' },
  { id: 'scheduling', name: 'Scheduling', description: 'Appointments, calendar, resource booking',       icon: '📅' },
  { id: 'vdr',        name: 'VDR',        description: 'Virtual Data Room — secure doc sharing',         icon: '🔒' },
  { id: 'it',         name: 'IT',         description: 'IT support, device management, helpdesk',        icon: '💻' },
  { id: 'legal',      name: 'Legal',      description: 'Contract management, compliance, legal docs',    icon: '⚖️' },
];
