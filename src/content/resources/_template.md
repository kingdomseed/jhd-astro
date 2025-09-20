---
# Copy this file to create a new guide in this collection.
# The filename (without .md) becomes the URL slug: /resources/<slug>/
# Required fields are enforced by src/content/config.ts
# Images referenced here should live under src/assets/resources/<your-slug>/

# Required
title: "Your Guide Title"
summary: "1–2 sentence value proposition of this guide."
category: "start-here" # one of: start-here | adventure-journals | dice-roller | custom-tables | advanced
order: 10 # integer; used to sort within a category (lower first)

# Optional UI polish
icon: "fa-slab fa-regular fa-book-open" # Font Awesome Slab class (keeps visual language consistent)
duration: "8 min read" # shown on cards and detail header
updated: "2025-09-20" # shown as "Updated <date>" if provided

# Optional hero image (optimized via astro:assets)
# hero: ../../assets/resources/your-slug/hero.png
# heroAlt: "Describe the hero image for screen readers"

# Optional structured steps (prefer this over images inside Markdown body)
# steps:
#   - title: "Step 1 title"
#     body: "Short instruction text for this step."
#     # image: ../../assets/resources/your-slug/step-1.png
#     # imageAlt: "What this step image shows"
#   - title: "Step 2 title"
#     body: "Optional details, links, or tips."
#     # image: ../../assets/resources/your-slug/step-2.png
#     # imageAlt: "Describe the image"
---

Intro paragraph. Explain what the reader will achieve and pre-reqs if any.

## Before you begin

- List any accounts, installs, or assets needed.
- Link to downloads or related resources.

## Core steps

Use the structured `steps` frontmatter above for images and concise copy. Keep the Markdown body for narrative, notes, and links.

### Tip: Images

- Place all images under `src/assets/resources/<your-slug>/`.
- Reference images in frontmatter (`hero`, `steps[n].image`) so they are optimized by `astro:assets` and rendered via `<Image />` in `resources/[slug].astro`.
- Always provide alt text when you include an image (schema enforces this for `hero` and each step image).

## Troubleshooting

- Q: Common issue here
  - A: Short resolution steps or link to support.

## Next steps

- Link to adjacent guides.
- CTA to Support or Discord if relevant.
