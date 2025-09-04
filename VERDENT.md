**Scope & assumptions**

For a concise contributor-facing overview (structure, commands, PR checklist), see [AGENTS.md](AGENTS.md). This file remains the canonical, detailed playbook.

* This repository folder is `astro_project/`.
* Site is a **static** Astro v5 site (no SSR, no Actions, no Content Layer, no islands) unless a PLAN explicitly introduces them.
* Goal: small, safe, incremental changes that preserve semantics, a11y, and visual intent.

---

## Quick start

* Install: `npm install`
* Dev: `npm run dev`
* Build: `npm run build` → outputs to `dist/`
* Preview: `npm run preview`
* Health checks before PR: `npx astro check && npm run build`

**Environment**

* Node: use active LTS (≥18, prefer 20). Record version in PR body (from `node -v`).
* Package manager: npm. Keep `package-lock.json` committed.

---

## Project layout (expected)

```
astro_project/
  package.json            # scripts: dev, build, preview (Astro 5.x)
  astro.config.mjs        # minimal config – keep defaults unless PLAN says otherwise
  public/                 # static assets (e.g., /billboard.png)
    global.css            # single global stylesheet used across components
  src/
    pages/
      index.astro         # main page composing components
    components/
      Header.astro        # small inline JS toggles download menu
      Hero.astro
      Billboard.astro
      Footer.astro        # dynamic year via new Date().getFullYear()
```

**Rules**

* Keep the component boundaries as they are; prefer CSS tweaks and micro‑copy edits over structural rewrites.
* Do **not** add SSR or dynamic data access without an approved PLAN.

---

## Editing rules

1. **Small diffs only.** One concern per PR; announce files you’ll touch before editing.
2. **Semantics & a11y.** Preserve landmarks (`header`, `main`, `footer`), headings order, ARIA labels, and focus order. Add `aria-*` only when necessary.
3. **Global CSS policy.** Prefer adding classes/selectors in `public/global.css` over inline styles. Keep selectors specific to avoid regressions.
4. **Assets.** Add images/fonts to `public/` and reference by root path (`/image.png`). Do not import unprocessed assets from `src/`.
5. **Client JS pattern.** Inline, minimal vanilla JS inside the same `.astro` file as the markup it controls (see `Header.astro`).

   * Use **data‑attributes** for selectors (e.g., `data-cta="download"`, `data-menu="downloads"`).
   * Guard against nulls and duplicates; support multiple component instances on a page.
   * Keep to **\~20 lines** per component. Anything bigger → propose `client:*` directive + small module via PLAN.
6. **Fonts & icons.** Font Awesome via CDN in `<head>` of `index.astro`; don’t change CDN without PLAN.
7. **External links.** Product/store links live in `Header.astro`/`Footer.astro`. Treat as content edits; keep `rel="noopener noreferrer"` for `target="_blank"`.

---

## Validation playbook (must do before PR)

* **Build/type check:** `npx astro check && npm run build` (no errors or warnings introduced).
* **Manual QA (desktop + mobile viewport):**

  * Header download menu opens/closes, trap not required; escape key closes if implemented.
  * Hero and billboard render; image paths resolve; no CLS on first paint.
  * Footer year correct.
* **A11y spot‑check:** Tab through interactive elements; visible focus; color contrast not reduced.
* **Perf spot‑check:** Lighthouse ≥90 for Performance/Best Practices/SEO on home page locally.

---

## SEO & meta

* Keep existing `<title>`, meta description, canonical, and OG/Twitter tags. If adding a new image, export at appropriate dimensions and update `og:image` path (absolute or root‑relative).
* Don’t add analytics or trackers without a PLAN.

---

## Pre‑mortem (Wrongness Check — mandatory)

Before implementation, list **three ways your change could be wrong**, how you’d detect them early, and a cheap test:

1. **Selector fragility** — Query breaks if markup shifts. *Signal:* menu stops toggling. *Test:* run page, click cta, verify open/close; then rename a class locally to simulate and ensure data‑selectors isolate behavior.
2. **CSS regression** — New selector leaks styles to other components. *Signal:* unintended color/spacing changes elsewhere. *Test:* scan critical sections (header, hero, footer) before/after; constrain selector to the component root.
3. **Accessibility regression** — Focus lost on toggle; screen reader label mismatch. *Signal:* keyboard can’t reach menu items; VoiceOver/NVDA announces wrong label. *Test:* tab‑order run and quick SR readout on macOS.

If any cheap test fails: stop, revise the PLAN, seek re‑approval.

---

## If you need to extend

* For behavior > \~20 lines or reused across components, propose a `client:*` directive approach with a tiny module (e.g., `src/components/header-menu.ts`) and hydration mode (`client:idle` preferred for non‑critical).
* If you introduce content collections or loaders, you **must** add: `content.config.ts`, schemas, and `npx astro sync` to the validation playbook — this requires explicit PLAN approval.

---

## Files to review before changing behavior

* `src/components/Header.astro` — inline toggle script + related markup.
* `src/pages/index.astro` — page assembly and head tags.
* `public/global.css` — global styles; ensure additions don’t cascade unexpectedly.
* `public/` assets — verify referenced paths exist after your edits.

---

## PR requirements

* Title: `[astro] <concise summary>`
* Body: what & why, files touched, linked issues, screenshots (desktop + mobile), Lighthouse scores, `node -v`, and `npx astro check` output summary. Include rollback notes.

---

**Bottom line:** keep diffs tiny, selectors robust, and behavior accessible. Add JavaScript only when absolutely necessary and keep it local to the component.
