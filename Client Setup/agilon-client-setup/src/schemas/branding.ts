import { z } from 'zod';

export const brandingSchema = z.object({
  template: z.enum(['modern', 'classic', 'bold', 'minimal', 'corporate', 'creative', 'elegant', 'startup', 'nature', 'tech', 'warm', 'ocean'], {
    error: 'Please select a template',
  }),
  color: z.string().min(1, 'Please select a brand color'),
});

export type BrandingFormData = z.infer<typeof brandingSchema>;
