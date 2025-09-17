import { defineCollection, z, image } from "astro:content";

const resources = defineCollection({
  type: "content",
  schema: z
    .object({
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

      // Optional images for hero and steps
      hero: image().optional(),
      heroAlt: z.string().optional(),
      steps: z
        .array(
          z.object({
            title: z.string().min(3),
            body: z.string().optional(),
            image: image().optional(),
            imageAlt: z
              .string()
              .optional()
              .refine((v) => v === undefined || v.trim().length > 0, {
                message: "If step image provided, include alt text",
              }),
          })
        )
        .default([]),
    })
    .refine((data) => !data.hero || (data.heroAlt !== undefined && data.heroAlt.trim().length > 0), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      "Release Notes",
      "Behind the Scenes",
      "Guides",
      "Community",
    ]),
    date: z.string(),
    readTime: z.string(),
    isSample: z.boolean().default(true),
    // Optional hero image for blog posts (for future use)
    hero: image().optional(),
    heroAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Guides collection with typed images and enforced alt text
const guides = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string().min(3),
      description: z.string().min(30).max(160),
      publishDate: z.string(), // ISO date string; can migrate to z.date() if desired
      updatedDate: z.string().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),

      // Images are optional for ease of authoring
      hero: image().optional(),
      heroAlt: z.string().optional(),

      steps: z
        .array(
          z.object({
            title: z.string().min(3),
            body: z.string().optional(),
            image: image().optional(),
            imageAlt: z
              .string()
              .optional()
              .refine((v) => v === undefined || v.trim().length > 0, {
                message: "If step image provided, include alt text",
              }),
          })
        )
        .default([]),
    })
    .refine((data) => !data.hero || (data.heroAlt !== undefined && data.heroAlt.trim().length > 0), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

export const collections = { resources, blog, guides };
