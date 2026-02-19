export type CompanySize = 'just-me' | '2-50' | '50-plus';

export type TemplateName =
  | 'modern'
  | 'classic'
  | 'bold'
  | 'minimal'
  | 'corporate'
  | 'creative'
  | 'elegant'
  | 'startup'
  | 'nature'
  | 'tech'
  | 'warm'
  | 'ocean';

export type SkillId = 'accounting' | 'hr' | 'tax' | 'scheduling' | 'vdr' | 'it' | 'legal';

export interface BusinessInfo {
  name: string;
  industry: string;
  state: string;
  size: CompanySize | '';
  description: string;
}

export interface Branding {
  template: TemplateName | '';
  logoFile: File | null;
  logoName: string;
  color: string;
}

export interface SetupData {
  businessInfo: BusinessInfo;
  branding: Branding;
  skills: SkillId[];
}

export type ProvisioningStep = 'bot' | 'storage' | 'skills' | 'branding' | 'finalizing' | 'complete';

export interface ProvisioningStatus {
  step: ProvisioningStep;
  progress: number;
  error?: string;
}
