# SEO & Metadata

Guidelines and implementation notes for titles, descriptions, canonical URLs, and social meta.

## Titles & descriptions

- Each page sets a clear, unique `<title>` and `meta description`.
- Keep descriptions under ~160 chars; front-load value.

## Canonical URLs

- Each page includes a canonical `<link>` pointing to its production URL.

## Open Graph & Twitter

- Site pages and blog index use a default OG image with a Twitter Card (summary_large_image).
- Blog detail picks `socialImage` → `hero` → default OG.
- Resources detail picks `hero` → default OG.

## RSS

- Blog index and blog detail link to `/rss.xml` for feed discovery.

## LCP images

- Use `fetchpriority="high"` sparingly (hero/primary LCP only) to avoid deprioritizing other assets.

