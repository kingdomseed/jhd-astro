# GitHub Copilot instructions — Astro static site (Astro v5)

# Purpose

- Help AI coding agents make small, safe, incremental changes to this Astro 5 static site. Keep edits minimal, preserve markup semantics and accessibility, and prefer CSS or small behaviour tweaks over large structural rewrites.

## Quick start (commands)

- Install: `npm install` (this project uses `astro` v5.13.3 from `package.json`).
- Local dev: `npm run dev` (runs `astro dev`).
- Build: `npm run build` → static output in `dist/`.
- Preview a build: `npm run preview`.

## Big-picture architecture

- Static, component-driven site built with Astro. The main page is `src/pages/index.astro` which composes independently small, single-purpose components from `src/components/` (e.g. `Header.astro`, `Hero.astro`, `Footer.astro`, `Billboard.astro`).
- No SSR/data fetching patterns are present — pages render static HTML and assets are served from `public/`.

## Key files and patterns (concrete examples)

- `package.json`: contains scripts (`dev`, `build`, `preview`) and dependency `astro` 5.x.
- `astro.config.mjs`: minimal/empty — safe to leave default settings.
- `src/pages/index.astro`: page composition pattern — import components and render static HTML.
- `src/components/Header.astro`: contains an inline, small vanilla JS snippet that toggles the download menu (`.cta-download`, `#downloadMenu`). If you change markup, update that script accordingly.
- `src/components/Footer.astro`: computes the copyright year dynamically with `new Date().getFullYear()`.
- `public/global.css`: single global stylesheet used across components; prefer adding component-specific classes here rather than injecting many inline styles.
- `public/`: static assets (e.g. `billboard.png`) are referenced from templates as `/billboard.png`.

## Client-side JS conventions

- Small interactive behavior is implemented with inline vanilla JS inside `.astro` components (see `Header.astro`). These scripts run in the browser — they will not execute during build/SSR. For larger client code consider migrating to Astro client directives (`client:load`, `client:idle`, etc.), but for now preserve the inline pattern and keep scripts minimal and accessible.

## Integration & external dependencies

- Font Awesome is loaded via CDN in `index.astro` head.
- External product/store links live in `Header.astro` and `Footer.astro`; treat them as content changes rather than logic changes.

### Brand & design references

- [Brand & Voice guide](../docs/brand-and-voice-guide-core.md)
- [Design system](../docs/design-system.md)

## Editing guidance / safety checklist

- Make single, small changes that keep the existing component boundaries.
- When altering interactive markup (menus, buttons), update the small inline scripts in the same `.astro` file.
- When adding assets, put them in `public/` and reference them with root paths (e.g. `/image.png`).
- Preserve ARIA attributes and semantic tags found in components (aria-label, role, headings) — accessibility is used intentionally.

### What this repo does NOT contain

- No server-side API routes, no tests, and no heavy build customization. Expect simple static output.

### If you need to extend

- For any client-side feature larger than a dozen lines, prefer creating a small module and loading it with an Astro client directive.
- Keep changes incremental: edit one component at a time, run `npm run dev`, visually verify, then open a PR with a short description.

### Files to inspect before changing behavior

- `src/components/Header.astro` (download menu script and markup)
- `src/pages/index.astro` (page assembly and global head tags)
- `public/global.css` (site styling)
- `public/` (static assets like `billboard.png`)

### Merge note

- No existing `.github/copilot-instructions.md` was found; this file is intended to be short, actionable and specific to this codebase.

### Questions

- If anything about the build environment (node version, package manager preference, CI) is missing or you want tests added, ask and we'll iterate.

---
Update requested by: automated assistant — please review and tell me if any section is unclear or missing concrete examples you want included.
