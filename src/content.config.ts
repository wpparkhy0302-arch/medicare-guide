import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Jinsoo Park'),
    dateModified: z.string(),
    category: z.string().optional(),
    sources: z.array(z.string()).optional(),
  }),
});

export const collections = { guides };
