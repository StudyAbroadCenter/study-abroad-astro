import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    dates: z.string(),
    duration: z.string(),
    location: z.string(),
    academicFocus: z.array(z.string()).min(1),
    fee: z.string(),
    applicationDeadline: z.string(),
    accommodation: z.string(),
    status: z.enum(['Applications open', 'Coming soon', 'Waitlist']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { programs };
