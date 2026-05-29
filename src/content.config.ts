import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projecten = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projecten" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    category: z.string(),
    excerpt: z.string(),
    problem: z.string(),
    solution: z.string(),
    coverImage: z.string(),
    coverAlt: z.string().optional(),
    stack: z.array(z.string()).default([]),
    client: z.string().optional(),
    role: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
    publishedAt: z.coerce.date().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
    reviews: z
      .array(
        z.object({
          quote: z.string(),
          author: z.string(),
          role: z.string().optional(),
          avatar: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projecten };
