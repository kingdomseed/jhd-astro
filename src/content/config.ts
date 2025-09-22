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
      keywords: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),

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
      downloads: z
        .array(
          z.object({
            label: z.string().min(1),
            href: z.string().min(1), // allow root-relative like /downloads/foo
            format: z.string().optional(), // e.g., JSON, CSV, TXT
            size: z.string().optional(), // optional display size, e.g., "12 KB"
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
      keywords: z.array(z.string()).default([]),

        // Optional hero image for blog posts (validated as a local image)
        hero: image().optional(),
        heroAlt: z.string().optional(),

        // Optional social image for link previews (Open Graph)
        socialImage: image().optional(),
        socialImageAlt: z.string().optional(),
        // Optional downloads list rendered at the bottom of the post
        downloads: z
          .array(
            z.object({
              label: z.string().min(1),
              href: z.string().min(1),
              format: z.string().optional(),
              size: z.string().optional(),
            })
          )
          .default([]),
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

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pageHeader: z.object({
      accent: z.string(),
      icon: z.string(),
      layout: z.string(),
      visualElement: z.string(),
      colorScheme: z.string(),
    }),
    backgroundHighlights: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    socialLinks: z.array(z.object({
      href: z.string(),
      label: z.string(),
      icon: z.string(),
      className: z.string(),
      external: z.boolean().optional(),
    })).optional(),
    mythicHighlights: z.array(z.object({
      label: z.string(),
      description: z.string(),
    })).optional(),
  }),
});

export const collections = { resources, blog, pages };
