# Development & Build

## Requirements

- Node.js 20.x (see `package.json` engines)

## Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Type/diagnostics check: `npx astro check`

## Validation before PRs

Run:

```bash
npx astro check && npm run build
```

## Manual QA (spot checks)

- Header menus open/close; Escape closes dropdowns (if implemented).
- Hero/Billboard render; images resolve; no obvious CLS.
- Blog detail hero/social image shows; OG preview is sensible.
- Resources detail renders steps and images; share icons present.
- Footer year correct.
- Basic a11y: tab order, visible focus, no color contrast regressions.
- Perf: local Lighthouse ≥90 on home for Performance/Best Practices/SEO.

