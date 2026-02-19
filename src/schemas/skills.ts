import { z } from 'zod';

export const skillsSchema = z.object({
  skills: z
    .array(z.enum(['accounting', 'hr', 'tax', 'scheduling', 'vdr', 'it', 'legal']))
    .min(1, 'Please select at least one skill'),
});

export type SkillsFormData = z.infer<typeof skillsSchema>;
