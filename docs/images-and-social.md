# Images & Social Previews

How we handle images in content and component code, plus Open Graph/Twitter behavior.

## Content images

- Use `image()` in collection schemas to validate local file references.
- Render with `<Image />` from `astro:assets` for responsive, optimized outputs.
- Blog: place images under `src/assets/blog-images/<slug>/`.
- Resources: use folder-per-resource and reference `./hero.png` and `./step-1.png` in frontmatter.

## Component images

- Component-level assets live under `src/assets/` and import via `astro:assets` where possible.
- Truly static assets (favicons, css, robots.txt) live under `public/` and are referenced with absolute paths.

## Social images (OG/Twitter)

- Default site OG fallback: `src/assets/logo/logo.jpg` is used on site pages.
- Blog detail fallback order: `socialImage` → `hero` → default OG.
- Resources detail fallback order: `hero` → default OG.
- Blog index + site pages include default OG and Twitter Card tags.

Recommended size: 1200×630 (1.91:1). Keep under ~1MB.

## Cache tips

- If an image replacement doesn’t show up, clear cached transforms and rebuild:
  - Remove `.astro/`, `dist/`, `node_modules/.astro/`, `node_modules/.vite/`.
  - Then `npm run build`.
- Consider renaming changed assets (e.g., `logo-v2.jpg`) to force new transforms.

