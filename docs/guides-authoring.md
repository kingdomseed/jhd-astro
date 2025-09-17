# [Deprecated] Guides Authoring Guide

> This document is deprecated. Guides and Resources have been consolidated into a single `resources` collection. Please use the up-to-date guide here:
>
> `docs/resources-authoring.md`

Below is the previous guidance for the standalone `guides` collection, preserved for historical context only.

This repo uses an Astro Content Collection `guides` with typed images via `image()` to ensure optimized, accessible output.

## Folder structure

Place each guide in its own folder, using `index.md` and colocated images:

```text
src/content/guides/
  setup/
    index.md
    hero.png
    step-1.png
    step-2.png
```

- The folder name becomes the slug: `/guides/setup/`.
- Images must live beside `index.md` and be referenced with relative paths (e.g., `./hero.png`).

## Frontmatter schema (required fields)

```yaml
---
title: "Project Setup"
description: "Set up your Astro project with content collections and typed images."
publishDate: "2025-09-15"
updatedDate: "2025-09-17"
author: "Your Name"
tags: ["astro", "content", "images"]
draft: false

hero: ./hero.png
heroAlt: "Screenshot of the project folder structure"

steps:
  - title: "Create content collection"
    body: "Define your collection in `src/content/config.ts` with typed image fields."
    image: ./step-1.png
    imageAlt: "Code snippet showing image() in a content schema"
  - title: "Colocate assets"
    body: "Place images next to the guide to keep references stable."
---
```

Notes:

- `hero` is optional but recommended when a visual helps.
- If you include a hero image, provide `heroAlt`.
- `steps[].image` is optional, but when present, include `imageAlt`.
- Use ISO date strings (YYYY-MM-DD) for dates.
- Set `draft: true` to exclude a guide from build output.


## Rendering

- Route file: `src/pages/guides/[...slug].astro` statically renders guides, excluding drafts.
- Layout: `src/layouts/GuideLayout.astro` handles hero, body, and optional steps using `<Image />` from `astro:assets` for responsive, optimized images.

## Accessibility

- Alt text is required for the hero image, and for any step image used meaningfully.
- Layout uses landmarks and correct heading order; keep unique H2s per section.

## Performance

- Hero is treated as likely LCP; it uses multiple responsive widths and appropriate `sizes`.
- Non-critical images are lazy-loaded.

## Validation & build checks

- Run type/content checks and build:

```bash
npx astro check && npm run build
```

- The build will fail if:
  - A frontmatter image path is invalid.
  - Required alt text is missing.

## Authoring tips

- Keep image files reasonably sized; Astro will optimize but source bloat still costs.
- Prefer PNG for crisp UI captures; AVIF/WebP will be generated automatically when beneficial.
- If replacing an image and transforms don’t update, clear caches as noted in `AGENTS.md`.
