import type { TemplateName } from '../types/setup';

export interface TemplateConfig {
  id: TemplateName;
  name: string;
  description: string;
  sidebar: string;
  topbar: string;
  accent: string;
  bg: string;
  cardBg: string;
  textLight: string;
}

export const TEMPLATES: TemplateConfig[] = [
  { id: 'modern', name: 'Modern', description: 'Clean, minimal look', sidebar: '#1e293b', topbar: '#ffffff', accent: '#1a56db', bg: '#f8fafc', cardBg: '#ffffff', textLight: '#94a3b8' },
  { id: 'classic', name: 'Classic', description: 'Professional, traditional', sidebar: '#1e3a5f', topbar: '#ffffff', accent: '#2d5a87', bg: '#f5f7fa', cardBg: '#ffffff', textLight: '#8da4bf' },
  { id: 'bold', name: 'Bold', description: 'Vibrant, eye-catching', sidebar: '#7f1d1d', topbar: '#ffffff', accent: '#dc2626', bg: '#fef2f2', cardBg: '#ffffff', textLight: '#fca5a5' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and focused', sidebar: '#f9fafb', topbar: '#ffffff', accent: '#374151', bg: '#ffffff', cardBg: '#f3f4f6', textLight: '#9ca3af' },
  { id: 'corporate', name: 'Corporate', description: 'Trusted and polished', sidebar: '#0f172a', topbar: '#1e293b', accent: '#3b82f6', bg: '#f1f5f9', cardBg: '#ffffff', textLight: '#64748b' },
  { id: 'creative', name: 'Creative', description: 'Artistic and unique', sidebar: '#3b0764', topbar: '#ffffff', accent: '#a855f7', bg: '#faf5ff', cardBg: '#ffffff', textLight: '#c084fc' },
  { id: 'elegant', name: 'Elegant', description: 'Refined and luxurious', sidebar: '#1c1917', topbar: '#292524', accent: '#b45309', bg: '#fafaf9', cardBg: '#ffffff', textLight: '#a8a29e' },
  { id: 'startup', name: 'Startup', description: 'Fresh and energetic', sidebar: '#064e3b', topbar: '#ffffff', accent: '#059669', bg: '#ecfdf5', cardBg: '#ffffff', textLight: '#6ee7b7' },
  { id: 'nature', name: 'Nature', description: 'Organic and earthy', sidebar: '#14532d', topbar: '#f0fdf4', accent: '#16a34a', bg: '#f0fdf4', cardBg: '#ffffff', textLight: '#86efac' },
  { id: 'tech', name: 'Tech', description: 'Futuristic and sharp', sidebar: '#0c0a09', topbar: '#18181b', accent: '#0ea5e9', bg: '#0f172a', cardBg: '#1e293b', textLight: '#475569' },
  { id: 'warm', name: 'Warm', description: 'Friendly and inviting', sidebar: '#451a03', topbar: '#ffffff', accent: '#f59e0b', bg: '#fffbeb', cardBg: '#ffffff', textLight: '#fcd34d' },
  { id: 'ocean', name: 'Ocean', description: 'Calm and trustworthy', sidebar: '#0c4a6e', topbar: '#ffffff', accent: '#0284c7', bg: '#f0f9ff', cardBg: '#ffffff', textLight: '#7dd3fc' },
  { id: 'midnight', name: 'Midnight', description: 'Dark and mysterious', sidebar: '#0f0f23', topbar: '#1a1a2e', accent: '#6366f1', bg: '#0f172a', cardBg: '#1e293b', textLight: '#818cf8' },
  { id: 'sunset', name: 'Sunset', description: 'Warm gradient feel', sidebar: '#7c2d12', topbar: '#ffffff', accent: '#ea580c', bg: '#fff7ed', cardBg: '#ffffff', textLight: '#fdba74' },
  { id: 'forest', name: 'Forest', description: 'Deep and grounding', sidebar: '#1a2e1a', topbar: '#f0fdf4', accent: '#22c55e', bg: '#f0fdf4', cardBg: '#ffffff', textLight: '#4ade80' },
  { id: 'royal', name: 'Royal', description: 'Regal and commanding', sidebar: '#1e1b4b', topbar: '#ffffff', accent: '#7c3aed', bg: '#f5f3ff', cardBg: '#ffffff', textLight: '#a78bfa' },
  { id: 'pastel', name: 'Pastel', description: 'Soft and gentle', sidebar: '#fdf2f8', topbar: '#ffffff', accent: '#ec4899', bg: '#fdf2f8', cardBg: '#ffffff', textLight: '#f9a8d4' },
  { id: 'neon', name: 'Neon', description: 'Electric and bold', sidebar: '#0a0a0a', topbar: '#171717', accent: '#22d3ee', bg: '#0a0a0a', cardBg: '#1a1a1a', textLight: '#67e8f9' },
  { id: 'slate', name: 'Slate', description: 'Neutral and balanced', sidebar: '#334155', topbar: '#f8fafc', accent: '#475569', bg: '#f1f5f9', cardBg: '#ffffff', textLight: '#94a3b8' },
  { id: 'ruby', name: 'Ruby', description: 'Rich and passionate', sidebar: '#4c0519', topbar: '#ffffff', accent: '#e11d48', bg: '#fff1f2', cardBg: '#ffffff', textLight: '#fb7185' },
  { id: 'arctic', name: 'Arctic', description: 'Cool and crisp', sidebar: '#e0f2fe', topbar: '#ffffff', accent: '#0369a1', bg: '#f0f9ff', cardBg: '#ffffff', textLight: '#38bdf8' },
  { id: 'sand', name: 'Sand', description: 'Warm and natural', sidebar: '#292524', topbar: '#fafaf9', accent: '#a16207', bg: '#fefce8', cardBg: '#ffffff', textLight: '#d4a574' },
  { id: 'lavender', name: 'Lavender', description: 'Calm and creative', sidebar: '#2e1065', topbar: '#ffffff', accent: '#8b5cf6', bg: '#faf5ff', cardBg: '#ffffff', textLight: '#c4b5fd' },
  { id: 'carbon', name: 'Carbon', description: 'Sleek and modern', sidebar: '#171717', topbar: '#262626', accent: '#525252', bg: '#fafafa', cardBg: '#ffffff', textLight: '#a3a3a3' },
];
