# Resources Authoring Guide (Single System)

This site consolidates Guides and Resources into a single collection: `resources`.

Author all documentation, walkthroughs, schemas, and downloadable items under `src/content/resources/`.

## Collection schema

The `resources` collection is defined in `src/content/config.ts`.

Required fields:

- `title: string`
- `summary: string`
- `category: 'start-here' | 'adventure-journals' | 'dice-roller' | 'custom-tables' | 'advanced'`
- `order: number` (nonnegative integer)

Optional fields:

- `icon: string` (Font Awesome class)
- `duration: string`
- `externalUrl: string` (valid URL)
- `updated: string`
- `hero: image()` (optional local image)
- `heroAlt: string` (required only if `hero` is provided)
- `steps: { title: string; body?: string; image?: image(); imageAlt?: string }[]`
  - If a step `image` is provided, include `imageAlt`.
 - `downloads: { label: string; href: string; format?: string; size?: string }[]` (optional)
 - `related: string[]` — slugs of related resources to display in a Related Guides section (optional)

Images use `astro:content`'s `image()` type, which enforces valid local image paths and feeds the `astro:assets` `<Image />` pipeline for responsive optimization.

## Folder structure

You can author resources in two ways.

1) Flat file (no images)

- Use when the article has no images or steps.
- Place a single markdown file directly under `src/content/resources/`.

```text
src/content/resources/
  getting-started-with-the-dice-roller.md
  writing-and-organizing-scenes.md
```

2) Folder-per-resource (recommended when using images or steps)

- Use when you want a hero image and/or step images.
- Create a folder named after the slug. Put `index.md` and local images inside.

```text
src/content/resources/
  getting-started-with-the-mythic-apps/
    index.md
    hero.png
    step-1.png
    step-2.png
```

- The folder name becomes the route slug, e.g., `/resources/getting-started-with-the-mythic-apps/`.
- Reference images with relative paths in frontmatter: `hero: ./hero.png`, `steps[].image: ./step-1.png`.

## Frontmatter examples

Text-only (flat file):

```yaml
---
title: "Getting Started with the Dice Roller"
summary: "Roll faster with presets, queues, and in-line oracle prompts."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-dice-d20"
duration: "5 min read"
updated: "2025-02-01"
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---
```

With optional images (folder-per-resource):

```yaml
---
title: "Getting Started with the Mythic Apps"
summary: "Install the builds, sync your account, and tour the unified workspace."
category: "start-here"
order: 1
icon: "fa-slab fa-regular fa-book-open"
duration: "10 min read"
updated: "2025-02-01"

hero: ./hero.png
heroAlt: "Screenshot of the Mythic workspace showing panels and log"

steps:
  - title: "Install the apps"
    body: "Download from your store and complete first launch."
    image: ./step-1.png
    imageAlt: "Install screen with highlighted button"
  - title: "Sign in"
    body: "Connect your Mythic account to sync settings."
related:
  - getting-started-with-the-dice-roller
  - setting-up-and-using-lists
  - using-meaning-tables-for-inspiration
---
```

## Rendering behavior

- Detail page: `src/pages/resources/[slug].astro` renders Resources.
  - If `hero` is provided, it is rendered via `<Image />` responsively.
  - If `steps` are provided, each step renders with an optional `<Image />` and caption.
- ShareBar: a compact share bar is automatically rendered beneath the header (Copy, Share, Email, Reddit, Facebook, Bluesky). Icons are neutral by default with brand tints on hover.
- Downloads: if `downloads` are provided, a grouped Downloads section appears at the bottom.
- Related Guides: if `related` contains slugs, those items are rendered; otherwise up to three suggestions are shown from the same category (and then by tag overlap).
- Index page: `src/pages/resources/index.astro` groups entries by category and uses `order` for sorting.

## Accessibility & performance

- Provide `heroAlt` when `hero` exists; provide `imageAlt` when a step image exists.
- Non-critical images are lazy-loaded; hero is treated as likely LCP.
- Keep images reasonably sized; Astro will generate optimized variants automatically.
- Store hero and step images alongside the Markdown file (folder‑per‑resource). Use relative paths in frontmatter so images are validated and optimized.

## Validation & build

- Run:

```bash
npx astro sync && npx astro check && npm run build
```

- Build fails if image paths are invalid or required alt text is missing.

## Migration notes

- Guides have been consolidated into Resources. Use the patterns above for any former guides.
- You can gradually convert flat files to folder-per-resource when you add images.
