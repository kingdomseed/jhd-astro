import { defineCollection, z } from "astro:content";

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      "start-here",
      "adventure-journals",
      "dice-roller",
      "custom-tables",
      "advanced",
    ]),
    order: z.number().int().nonnegative(),
    icon: z.string().default("fa-slab fa-regular fa-book-open"),
    duration: z.string().optional(),
    externalUrl: z.string().url().optional(),
    updated: z.string().optional(),
  }),
});

export const collections = { resources };
