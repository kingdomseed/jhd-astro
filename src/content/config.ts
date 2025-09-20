import { defineCollection, z } from "astro:content";

// Content collections schema
// - Use z.coerce.date() so authors can enter dates as strings and still get typed Date objects
// - Use ({ image }) helper to validate local images referenced from frontmatter (works with astro:assets)

const resources = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
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
      updated: z.coerce.date().optional(),

      // Optional images for hero and steps (validated as local images)
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
    }).refine((data) => !data.hero || (data.heroAlt !== undefined && data.heroAlt.trim().length > 0), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        category: z.enum([
          "Release Notes",
          "Behind the Scenes",
          "Guides",
          "Community",
          "Announcement",
        ]),
        date: z.coerce.date(),
        readTime: z.string(),
        isSample: z.boolean().default(true),
      tags: z.array(z.string()).default([]),

        // Optional hero image for blog posts (validated as a local image)
        hero: image().optional(),
        heroAlt: z.string().optional(),

        // Optional social image for link previews (Open Graph)
        socialImage: image().optional(),
        socialImageAlt: z.string().optional(),
      })
      .refine(
        (data) => !data.hero || (data.heroAlt !== undefined && data.heroAlt.trim().length > 0),
        {
          message: "Provide heroAlt when a hero image is included",
          path: ["heroAlt"],
        }
      )
      .refine(
        (data) => !data.socialImage || (data.socialImageAlt !== undefined && data.socialImageAlt.trim().length > 0),
        {
          message: "Provide socialImageAlt when a socialImage is included",
          path: ["socialImageAlt"],
        }
      ),
});

export const collections = { resources, blog };
