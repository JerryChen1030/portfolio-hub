import { defineCollection, z } from 'astro:content';

const reading = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    description: z.string().optional(),
    cover: z.string().optional(),
    private: z.boolean().default(false),
  }),
});

const digest = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    person: z.string(),
    sourceUrl: z.string().url(),
    sourceType: z.enum(['article', 'video', 'podcast', 'thread', 'paper', 'book', 'newsletter']),
    description: z.string().optional(),
    readingMinutes: z.number().int().positive().optional(),
    cover: z.string().optional(),
    private: z.boolean().default(false),
  }),
});

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    url: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    private: z.boolean().default(false),
  }),
});

export const collections = { reading, digest, project };
