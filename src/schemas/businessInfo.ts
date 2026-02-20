import { z } from 'zod';

export const businessInfoSchema = z.object({
  name: z.string().min(2, 'Business name is required (min 2 characters)'),
  industry: z.string().min(1, 'Please select your industry'),
  state: z.string().min(1, 'Please select your state'),
  size: z.enum(['just-me', '2-10', '11-50', '50-plus'], {
    error: 'Please select your company size',
  }),
  description: z.string().optional(),
});

export type BusinessInfoFormData = z.infer<typeof businessInfoSchema>;
