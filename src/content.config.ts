import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// -- Shared schema fragments ---------------------------------------------------
const langField = z.enum(['en', 'pt']).default('en');
const tagsField = z.array(z.string()).default([]);
const keywordsField = z.array(z.string()).default([]);

const downloadsField = z.array(z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  format: z.string().optional(),
  size: z.string().optional(),
})).default([]);

function requireAltWhenImage(imageKey: string, altKey: string) {
  return (data: Record<string, unknown>) =>
    !data[imageKey] || (data[altKey] !== undefined && (data[altKey] as string).trim().length > 0);
}

// -- Collections (Astro 5 loader API) ------------------------------------------
const resources = defineCollection({
  loader: glob({ pattern: "**/[!_]*.md", base: "./src/content/resources" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["start-here", "adventure-journals", "dice-roller", "custom-tables", "advanced"]),
      order: z.number().int().nonnegative(),
      icon: z.string().default("fa-slab fa-regular fa-book-open"),
      duration: z.string().optional(),
      externalUrl: z.url().optional(),
      updated: z.coerce.date().optional(),
      keywords: keywordsField,
      tags: tagsField,
      hero: image().optional(),
      heroAlt: z.string().optional(),
      steps: z.array(z.object({
        title: z.string().min(3),
        body: z.string().optional(),
        image: image().optional(),
        imageAlt: z.string().optional().refine(
          (v) => v === undefined || v.trim().length > 0,
          { message: "If step image provided, include alt text" },
        ),
      })).default([]),
      related: z.array(z.string()).default([]),
      downloads: downloadsField,
      lang: langField,
    }).refine(requireAltWhenImage('hero', 'heroAlt'), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[!_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["Release Notes", "Behind the Scenes", "Guides", "Community", "Announcement"]),
      date: z.coerce.date(),
      readTime: z.string(),
      isSample: z.boolean().default(true),
      tags: tagsField,
      keywords: keywordsField,
      lang: langField,
      hero: image().optional(),
      heroAlt: z.string().optional(),
      socialImage: image().optional(),
      socialImageAlt: z.string().optional(),
      downloads: downloadsField,
    })
    .refine(requireAltWhenImage('hero', 'heroAlt'), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    })
    .refine(requireAltWhenImage('socialImage', 'socialImageAlt'), {
      message: "Provide socialImageAlt when a socialImage is included",
      path: ["socialImageAlt"],
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pageHeader: z.object({
      accent: z.string(),
      icon: z.string(),
      layout: z.enum(["left", "right", "center"]),
      visualElement: z.enum(["shapes", "grid", "particles"]),
      colorScheme: z.enum(["primary", "secondary", "accent"]),
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
    lang: langField,
  }),
});

export const collections = { resources, blog, pages };
