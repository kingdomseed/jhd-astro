# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Important: `AGENTS.md` is the canonical repository playbook. The former VERDENT.md content has been merged there. This file tailors those rules for Claude-specific workflows.

## Commands

**Development:**

- `npm install` - Install dependencies
- `npm run dev` - Start development server (runs `astro dev`)
- `npm run build` - Build static site to `dist/`
- `npm run preview` - Preview the built site

**Health checks before commits:**

- `npx astro check` - Type checking and linting
- `npm run build` - Ensure build passes
- Combined: `npx astro check && npm run build`

## Architecture

This is a **static Astro v5 site** with no SSR, no server actions, and no complex data fetching. Key architectural principles:

**🏆 GOLD STANDARD:** The homepage (`src/pages/index.astro`) represents our gold standard for design quality, voice, user experience, and component implementation. Reference it for:

- Component composition and structure
- Visual design patterns and spacing
- Voice and content approach
- Accessibility implementation
- Performance optimization
- Mobile responsiveness
All other pages should match or aspire to this level of polish.

- **Component-driven:** Main page `src/pages/index.astro` composes small, single-purpose components from `src/components/`
- **Content collections:** Blog and Resources pull from `src/content/`. Each Markdown entry includes metadata (e.g., `isSample`). Pages use `getCollection()` and `getStaticPaths()`.
- **Static assets:** All assets served from `public/` (referenced as `/filename.ext`)
- **Single stylesheet:** `public/global.css` plus component layer files under `public/styles/components/` contain all styles - prefer adding classes there over inline styles
- **Minimal JS:** Small vanilla JS snippets inline within `.astro` components (see `Header.astro` download menu toggle)

## Key Files & Patterns

- **`src/pages/index.astro`**: Main page assembly and global head tags
- **`src/components/Header.astro`**: Contains inline JS for download menu toggle (`.cta-download`, `#downloadMenu`)
- **`src/components/Footer.astro`**: Dynamic copyright year via `new Date().getFullYear()`
- **`public/global.css`**: Global stylesheet - add component-specific classes here
- **`astro.config.mjs`**: Minimal config - keep defaults unless explicitly required

## Editing Guidelines

**Safety & scope:**

- Make single, small changes preserving existing component boundaries
- Keep diffs minimal and targeted
- Preserve ARIA attributes, semantic tags, and accessibility features

**Client-side JS conventions:**

- Use inline vanilla JS within `.astro` components (keep ≤20 lines)
- Use data-attributes for selectors (`data-cta="download"`, `data-menu="downloads"`)
- Guard against nulls and support multiple component instances
- For larger client code, use Astro client directives (`client:load`, `client:idle`)

**Styling:**

- Prefer adding to `public/global.css` or `public/styles/components/*.css` over inline styles
- Keep selectors specific to avoid regressions
- Use `astro:assets` `<Image />` for component images
- Keep static files (favicons, robots.txt) in `public/`

**External dependencies:**

- Font Awesome loaded via CDN in `index.astro` head
- External product/store links in `Header.astro` and `Footer.astro`
- Contact/support routing consolidates on `/support#contact-panel`; links should point there so the contact tab opens automatically.

## Before Committing

**Required checks:**

1. Run `npx astro check && npm run build` (no errors/warnings)
2. Manual QA: Header menu toggles, images render, footer year correct
3. Accessibility: Tab through interactive elements, check focus visibility
4. Performance: Lighthouse ≥90 for Performance/Best Practices/SEO

**Validation checklist:**

- Header download menu opens/closes correctly
- All image paths resolve without 404s
- No console errors in browser
- Mobile viewport renders correctly

## Content & Design Patterns

**Component conventions:**

- `.container`: width and horizontal gutters only
- `.section`: vertical spacing (4rem desktop, 2rem mobile)
- Section headers use `.section-head` (visual only, `aria-hidden="true"`) + unique H2 with `.section-title`; use `.section-head--left` + `.section-title--left` when badge/title align with column content (e.g., About profile).

**Interactive elements:**

- Use semantic HTML (`ul/li` for lists, proper button/anchor elements)
- Preserve existing ARIA labels and focus management
- Keep external links with `rel="noopener noreferrer"` for `target="_blank"`

## Performance Notes

- Use `astro:assets` `<Image />` for local images with proper lazy loading
- Set `fetchpriority="high"` only for LCP images
- Avoid `100vw` (use `100dvw` + `calc(-50dvw + 50%)` for full-bleed)
- Add `overflow-x: clip` on html/body to prevent horizontal scroll

## What NOT to do

- Do not add SSR, server actions, or dynamic data access without explicit approval
- Do not introduce build tooling, frameworks, or package managers beyond what exists
- Do not edit Webflow-generated files unless absolutely necessary
- Do not add analytics or trackers
- Do not create large structural rewrites - prefer incremental changes

## SEO & meta

- Keep existing `<title>`, meta description, canonical, and OG/Twitter tags. If adding a new image, export at appropriate dimensions and update `og:image` path (absolute or root‑relative).
- Don’t add analytics or trackers without a PLAN.

## Pre‑mortem (Wrongness Check — mandatory)

Before implementation, list three ways your change could be wrong, how you’d detect them early, and a cheap test:

1. **Selector fragility** — Query breaks if markup shifts. Signal: menu stops toggling. Test: run page, click CTA, verify open/close; then rename a class locally to ensure data‑selectors isolate behavior.
2. **CSS regression** — New selector leaks to other components. Signal: unintended color/spacing changes elsewhere. Test: scan header, hero, footer before/after; scope selectors to component root.
3. **Accessibility regression** — Focus lost or label mismatch. Signal: keyboard can’t reach items; SR announces wrong label. Test: tab‑order run and quick VoiceOver/NVDA readout.

If any cheap test fails: stop, revise the PLAN, seek re‑approval.

## If you need to extend

- For behavior > ~20 lines or reused across components, propose a `client:*` directive + tiny module (e.g., `src/components/header-menu.ts`) with `client:idle` for non‑critical features.
- If you introduce content collections or loaders, add `content.config.ts`, schemas, and run `npx astro sync`. Update the validation playbook accordingly (requires explicit PLAN approval).

## Files to review before changing behavior

- `src/components/Header.astro` — inline toggle script + related markup.
- `src/pages/index.astro` — page assembly and head tags.
- `public/global.css` — global styles; ensure additions don’t cascade unexpectedly.
- `public/` assets — verify referenced paths exist after your edits.

## Images & caching tips

- astro:assets caches transforms. For a clean re‑opt: delete `.astro/`, `dist/`, `node_modules/.astro/`, and `node_modules/.vite/`, then rebuild.
- Consider renaming changed assets (e.g., `logo-v2.jpg`) to force fresh transforms.
- Prefer `logo.svg?url` for crisp, cache‑safe logos; use `<Image />` for raster assets to leverage optimization.
- Lazy‑load below‑the‑fold images; keep only true LCP imagery eager.
- Avoid `100vw` overflow; prefer `100dvw` and clip horizontal overflow on `html, body, #site`.
