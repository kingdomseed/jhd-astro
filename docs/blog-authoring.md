# Blog Authoring Guide

Author posts under `src/content/blog/`. The collection schema and rendering are designed to keep publishing simple and consistent.

## Frontmatter schema (required/optional)

Defined in `src/content/config.ts`:

- Required: `title`, `summary`, `category` (enum), `date` (Date), `readTime`
- Optional: `isSample` (default true), `tags` (string[]), `hero`/`heroAlt`, `socialImage`/`socialImageAlt`

Notes:
- `date` is a real Date (we use `z.coerce.date()`), so you can enter a string and it will be typed to Date.
- If you include a `hero`, provide `heroAlt` (schema enforces this).
- If you include a `socialImage`, provide `socialImageAlt` (schema enforces this).

## File naming & slugs

- The filename (without extension) becomes the slug: `/blog/<slug>/`.
- Sorting uses the `date` field, not the filename. Use accurate dates for index order and RSS.

## Images

- Place images under `src/assets/blog-images/<your-slug>/`.
- Reference images in frontmatter (e.g., `hero`), not inside Markdown body, so they are validated and optimized by `astro:assets`.

## Categories & tags

- Categories are controlled by an enum in the schema: Release Notes, Behind the Scenes, Guides, Community, Announcement.
- Category index pages are generated per unique category with human-friendly slugs.
- Tags are free-form and used for article metadata and future filters; `product:*` tags influence a compact product label on detail pages.

## Social & SEO

- OG image selection order on detail pages: `socialImage` → `hero` → default site OG.
- OG meta, Article published time, and article tags are included automatically.
- RSS: posts appear in `/rss.xml` with title, link, pubDate, categories, and `content:encoded` (summary). See `docs/rss.md`.

## Publishing checklist

1) Write Markdown under `src/content/blog/` (or copy `_template.md`).
2) Add hero/social images if needed, with alt text.
3) Validate and build:

```bash
npx astro sync && npx astro check && npm run build
```

4) Manual QA: title, summary, category, date, readTime render as expected; OG preview looks correct; RSS lists your post.

