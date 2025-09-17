# Repository Guidelines

This file is the canonical, detailed playbook for this repository. The previous VERDENT.md has been merged here and will be removed.

## Scope & assumptions

- This repository folder is `astro_project/`.
- Site is a static Astro v5 site (no SSR, no Actions, no Content Layer, no islands) unless a PLAN explicitly introduces them.
- Goal: small, safe, incremental changes that preserve semantics, a11y, and visual intent.

## Project Structure & Module Organization

- `src/pages/`: Route files (`index.astro`, `about.astro`, etc.). Keep page filenames lowercase.
- `src/components/`: Reusable UI in PascalCase (e.g., `Header.astro`, `Billboard.astro`).
- `src/scripts/`: Small TypeScript utilities used by components.
- `src/assets/`: Processed assets for components (use `astro:assets`). Example: `import shot from '../assets/billboard/billboard-1.jpeg'` and render with `<Image src={shot} />`. Move author photos and other component images here (e.g., `src/assets/people/jason-school.jpg`).
- `public/`: Truly static assets and global CSS (`/global.css`, favicons, robots.txt). Reference with root paths (e.g., `/global.css`). Avoid duplicating images that are imported via `astro:assets`.
- `astro.config.mjs`: Minimal Astro config; prefer defaults.
- `dist/`: Build output (generated).
- `docs/`: Project content docs (design, copy).

## Quality Benchmark

- Treat `src/pages/index.astro` as the gold-standard reference for component composition, voice, accessibility, performance, and responsive behavior. Mirror its polish when introducing or updating other pages.

## Build, Test, and Development Commands

- `npm install`: Install dependencies.
- `npm run dev`: Start Astro dev server.
- `npm run build`: Create production build in `dist/`.
- `npm run preview`: Serve the build locally.
- `npx astro check`: Type/diagnostics and config validation. Run before PRs.

## Coding Style & Naming Conventions

- Indentation: 2 spaces; use semantically correct HTML in `.astro` files.
- Components: PascalCase in `src/components/`; one concern per file.
- Pages: lowercase in `src/pages/` (e.g., `privacy.astro`).
- CSS: Prefer `public/global.css` (and files under `/styles`) over inline styles; scope selectors narrowly.
- Client JS: Keep inline, minimal, colocated with the component; use `data-*` selectors and guard against nulls.
- Assets: Prefer `src/assets` + `astro:assets` for images used by components; keep non-processed files (favicons, txt/xml) in `public/`. Do not import unprocessed assets from `src/` outside of `astro:assets`.
- Font Awesome Kit (v7) loads via CDN in `src/pages/index.astro`; keep icon usage consistent with the existing Slab icon pattern.
- Product and store links live in `Header.astro` and `Footer.astro`; when they open in a new tab, keep `rel="noopener noreferrer"` intact.

## Recent UI Patterns & Decisions (shared learnings)

- Spacing system:
  - `.container` provides width + horizontal gutters only (no block padding).
  - Use `.section` for vertical rhythm (default: 4rem desktop, 2rem ≤768px).
  - Header container padding: 0.5rem desktop, 1rem mobile.
- Icons:
  - Use Font Awesome Kit script (v7) with Slab icons site‑wide. Brands stay as brand icons.
  - Avoid “box in a box”: if a control already has a box, place icons inline (no extra icon tiles).
- Hero:
  - Eyebrow label (aria-hidden) + strong H1; compact CTAs; stats rendered as icon chips (no bullets).
  - CTA set: Primary "Learn More" → `/apps`; Tertiary "Get Resources" → `/resources`.
- Billboard:
  - Inner images: no box shadow, `border-radius: 15px`.
  - Carousel controls use lighter borders, pointer cursor, and anchored shadow lift on hover/active.
  - Images lazy‑loaded (including sizer) to remove below‑the‑fold eager warnings.
- Sections & strips:
  - Reusable small header row: `.section-head` (accent line + badge text, aria-hidden) + `.section-title`.
  - Banded separators via `.section-band` with optional `.no-grid` to suppress grid texture.
  - Reviews & Partners presented as `strip` sections with subtle gradient; Partners links use tertiary buttons.
- Community & Support:
  - Discord button uses brand color variant `.btn--discord`; Support & FAQ is tertiary with Slab arrow.
- Footer:
  - Footer logo matches header badge (48×48, accent background, thick border, lift hover).
  - Footer nav links include Slab icons. Contact routes to `/support#contact-panel` and auto-opens the contact tab.
  - Optional half‑grid background applied to footer for subtle structure.
- Buttons:
  - Global “anchored shadow” lift on hover/active; colored‑shadow variants available (`btn--shadow-primary`, `btn--shadow-accent`, `btn--shadow-discord`, `btn--shadow-github`, etc.).
- A11y & semantics:
  - Eyebrow labels are visual only (`aria-hidden`); keep unique H2 per section.
  - Use semantic lists instead of `role=list/listitem` on anchors; avoid non‑interactive roles on interactive elements.
- Performance:
  - Prefer `<Image />` from `astro:assets` for local images (e.g., headshot). Lazy-load non-critical images.
  - Reserve `fetchpriority="high"` for true LCP imagery so other assets can defer correctly.

## New Shared Learnings (2025-09)

- Fonts loading
  - Do not `@import` Google Fonts inside `public/global.css` (can break layer ordering and cascade). Use head `<link>` tags.
  - Centralize in `src/components/HeadFonts.astro` and include in each page (or a base layout).
- Off‑canvas mobile nav
  - Keep closed panel fully off‑canvas: `transform: translateX(calc(100% + borderWidth))`, remove border/shadow when closed, and `pointer-events: none`.
  - When open: restore border/shadow and `pointer-events: auto`.
  - Add a body‑level overlay to capture outside clicks and add `body.has-nav-open { overflow: hidden; }` to prevent background scroll.
  - Optionally add `touch-action: pan-y` at mobile widths to reduce unintended horizontal gestures.
  - If external code toggles classes, a small MutationObserver can normalize overlay/aria/scroll‑lock.
- Full‑bleed sections and horizontal overflow
  - `100vw` includes scrollbar width and can trigger horizontal scroll. Prefer `100dvw` + `margin-left: calc(-50dvw + 50%)` when supported.
  - Guard with `html, body { overflow-x: clip; }` (fallback `hidden`) and `#site { overflow-x: clip; }`.
- Images & caching
  - Replacing a file with the same name doesn’t always invalidate astro:assets cache.
  - For a clean re‑opt: remove `.astro/`, `dist/`, `node_modules/.astro/`, and `node_modules/.vite/`, then rebuild.
  - Consider renaming changed assets (e.g., `logo-v2.jpg`) to force new transforms.
- SVG vs raster
  - Use `logo.svg?url` for crisp, cache‑safe logos (avoid raster transforms). Use `<Image />` for raster assets to leverage optimization.
- Lazy‑loading
  - Lazy‑load below‑the‑fold images. Keep likely LCP imagery eager (e.g., hero, header logo) unless measurements show otherwise.
- Page headers
  - Default header text alignment is left. Vary right‑side visuals per page (shapes/grid/particles) for balanced contrast.
  - Section badges can align left via `.section-head--left`; pair with `.section-title--left` to keep eyebrow/title on the same column.

- Content collections
  - Blog uses an Astro content collection (`src/content/blog/`). Markdown entries include `isSample` to mark placeholder posts. Index and `[slug].astro` should read from the collection and surface “Sample” badges when relevant.
  - Resources page also pulls from a collection; detail pages rely on `getStaticPaths()` exports.

- Single support hub
  - `contact.astro` redirects to `/support#contact-panel`. All CTAs should link there rather than a standalone contact page.
- Minor a11y/UX polish
  - Footer legal links use `inline-flex` + `white-space: nowrap` to keep icon+label together.
  - Reviews rotator includes bottom margin so quotes don’t collide with strip borders.
  - Very narrow screens (<560px): switch 2‑col card grids to a single column to avoid asymmetric widths.

## Testing Guidelines

- Current stack has no formal test runner. Before opening a PR:
  - Build/type check: `npx astro check && npm run build` — no errors or warnings introduced.
  - Manual QA (desktop + mobile):
    - Header download menu opens/closes; Escape closes if implemented.
    - Hero and billboard render; image paths resolve; no CLS on first paint.
    - Footer year correct.
  - A11y spot-check: tab through interactive elements; visible focus; color contrast not reduced.
  - Perf spot-check: Lighthouse ≥90 for Performance/Best Practices/SEO on home page locally.

## SEO & meta

- Keep existing `<title>`, meta description, canonical, and OG/Twitter tags. If adding a new image, export at appropriate dimensions and update `og:image` path (absolute or root‑relative).
- Don’t add analytics or trackers without a PLAN.

## Pre‑mortem (Wrongness Check — mandatory)

Before implementation, list three ways your change could be wrong, how you’d detect them early, and a cheap test:

1. **Selector fragility** — Query breaks if markup shifts. *Signal:* menu stops toggling. *Test:* run page, click cta, verify open/close; then rename a class locally to simulate and ensure data‑selectors isolate behavior.
2. **CSS regression** — New selector leaks styles to other components. *Signal:* unintended color/spacing changes elsewhere. *Test:* scan critical sections (header, hero, footer) before/after; constrain selector to the component root.
3. **Accessibility regression** — Focus lost on toggle; screen reader label mismatch. *Signal:* keyboard can’t reach menu items; VoiceOver/NVDA announces wrong label. *Test:* tab‑order run and quick SR readout on macOS.

If any cheap test fails: stop, revise the PLAN, seek re‑approval.

## If you need to extend

- For behavior > ~20 lines or reused across components, propose a `client:*` directive approach with a tiny module (e.g., `src/components/header-menu.ts`) and hydration mode (`client:idle` preferred for non‑critical).
- If you introduce content collections or loaders, you must add: `content.config.ts`, schemas, and `npx astro sync` to the validation playbook — this requires explicit PLAN approval.

## Files to review before changing behavior

- `src/components/Header.astro` — inline toggle script + related markup.
- `src/pages/index.astro` — page assembly and head tags.
- `public/global.css` — global styles; ensure additions don’t cascade unexpectedly.
- `public/` assets — verify referenced paths exist after your edits.

## Commit & Pull Request Guidelines

- Commits: Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`). Examples exist in `git log`.
- Title: `[astro] <concise summary>`
- PR body must include: what & why, files touched, linked issues, screenshots (desktop + mobile), Lighthouse scores, `node -v`, and `npx astro check` output summary. Include rollback notes.

Bottom line: keep diffs tiny, selectors robust, and behavior accessible. Add JavaScript only when necessary and keep it local to the component.

## Security & Configuration Tips

- Node: use active LTS (≥18; prefer 20). Keep `package-lock.json` committed.
- Private registries/tokens are configured via `.npmrc`. Do not commit secrets elsewhere.
- This site is static; avoid SSR/external data unless explicitly planned and approved.

## Guardrails

- Do not add analytics or tracking scripts unless explicitly approved.
- Avoid editing Webflow-generated files unless there is a clear requirement.
- Favor incremental, small diffs over large structural rewrites.
