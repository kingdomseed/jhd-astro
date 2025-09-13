# Repository Guidelines

See the detailed validation playbook and editing rules in [VERDENT.md](VERDENT.md).

## Project Structure & Module Organization
- `src/pages/`: Route files (`index.astro`, `about.astro`, etc.). Keep page filenames lowercase.
- `src/components/`: Reusable UI in PascalCase (e.g., `Header.astro`, `Billboard.astro`).
- `src/scripts/`: Small TypeScript utilities used by components.
- `src/assets/`: Processed assets for components (use `astro:assets`). Example: `import shot from '../assets/billboard/billboard-1.jpeg'` and render with `<Image src={shot} />`.
- `public/`: Truly static assets and global CSS (`/global.css`, favicons, robots.txt). Reference with root paths (e.g., `/global.css`). Avoid duplicating images that are imported via `astro:assets`.
- `astro.config.mjs`: Minimal Astro config; prefer defaults.
- `dist/`: Build output (generated).
- `docs/`: Project content docs (design, copy).

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
- CSS: Prefer `public/global.css` over inline styles; scope selectors narrowly.
- Client JS: Keep inline, minimal, colocated with the component; use `data-*` selectors and guard against nulls.
- Assets: Prefer `src/assets` + `astro:assets` for images used by components; keep non-processed files (favicons, txt/xml) in `public/`. Do not import unprocessed assets from `src/` outside of `astro:assets`.

## Testing Guidelines
- Current stack has no formal test runner. Before opening a PR:
  - Build/type check: `npx astro check && npm run build` — no errors or warnings introduced.
  - Manual QA (desktop + mobile):
    - Header download menu opens/closes; Escape closes if implemented.
    - Hero and billboard render; image paths resolve; no CLS on first paint.
    - Footer year correct.
  - A11y spot-check: tab through interactive elements; visible focus; color contrast not reduced.
  - Perf spot-check: Lighthouse ≥90 for Performance/Best Practices/SEO on home page locally.

## Commit & Pull Request Guidelines
- Commits: Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`). Examples exist in `git log`.
- Title: `[astro] <concise summary>`
- PR body must include: what & why, files touched, linked issues, screenshots (desktop + mobile), Lighthouse scores, `node -v`, and `npx astro check` output summary. Include rollback notes.

Bottom line: keep diffs tiny, selectors robust, and behavior accessible. Add JavaScript only when necessary and keep it local to the component.

## Security & Configuration Tips
- Node: use active LTS (≥18; prefer 20). Keep `package-lock.json` committed.
- Private registries/tokens are configured via `.npmrc`. Do not commit secrets elsewhere.
- This site is static; avoid SSR/external data unless explicitly planned and approved.
