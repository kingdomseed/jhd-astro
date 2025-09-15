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

* `src/pages/index.astro` sets the quality bar for composition, copy, accessibility, performance, and responsiveness—treat it as the reference pattern for other pages.

**Rules**

* Keep the component boundaries as they are; prefer CSS tweaks and micro‑copy edits over structural rewrites.
* Do **not** add SSR or dynamic data access without an approved PLAN.
* Blog and Resources pages read from Astro content collections (`src/content/`). When adding entries, update frontmatter to include `isSample` only for placeholder content.
* All contact/support links should point to `/support#contact-panel`; the page script will auto-open the contact tab based on the hash.

---

## Editing rules

1. **Small diffs only.** One concern per PR; announce files you’ll touch before editing.
2. **Semantics & a11y.** Preserve landmarks (`header`, `main`, `footer`), headings order, ARIA labels, and focus order. Add `aria-*` only when necessary.
3. **Global CSS policy.** Prefer adding classes/selectors in `public/global.css` and files under `/styles` over inline styles. Keep selectors specific to avoid regressions.
4. **Assets.** Use `src/assets` + `astro:assets` `<Image />` for component images (e.g., headshots, billboard). Keep true static files (favicons, robots.txt, svg masks) in `public/`.
5. **Client JS pattern.** Inline, minimal vanilla JS inside the same `.astro` file as the markup it controls (see `Header.astro`).

   * Use **data‑attributes** for selectors (e.g., `data-cta="download"`, `data-menu="downloads"`).
   * Guard against nulls and duplicates; support multiple component instances on a page.
   * Keep to **\~20 lines** per component. Anything bigger → propose `client:*` directive + small module via PLAN.
6. **Fonts & icons.** Use the Font Awesome Kit (v7) with Slab icons for UI; keep brand icons for social. Avoid placing icons inside extra boxed tiles when the control is already a box. The kit loads via CDN in `src/pages/index.astro`; keep it centralized there.
7. **External links.** Product/store links live in `Header.astro`/`Footer.astro`. Treat as content edits; keep `rel="noopener noreferrer"` for `target="_blank"`.
8. **Guardrails.** Skip analytics/tracking scripts unless approved, avoid touching Webflow-generated files without a requirement, and favor incremental diffs over sweeping rewrites.

---

## Validation playbook (must do before PR)

* **Build/type check:** `npx astro check && npm run build` (no errors or warnings introduced).
* **Manual QA (desktop + mobile viewport):**

  * Header download menu opens/closes, trap not required; escape key closes if implemented.
  * Hero and billboard render; image paths resolve; no CLS on first paint.
  * Footer year correct.
* **A11y spot‑check:** Tab through interactive elements; visible focus; color contrast not reduced.
* **Perf spot‑check:** Lighthouse ≥90 for Performance/Best Practices/SEO on home page locally.
  * Lazy‑load billboard slides and sizer; keep only true LCP candidates eager.

### New performance/layout learnings
- Fonts
  - Don’t `@import` remote Google Fonts inside `public/global.css`. Use `<link rel="preconnect">` + `<link rel="stylesheet">` in the head (via a small `HeadFonts.astro` component) to avoid layer/import pitfalls and improve paint.
- Full‑bleed sections
  - `100vw` can include scrollbar width and cause horizontal scroll. Prefer `100dvw` + `calc(-50dvw + 50%)` when available.
  - Add `overflow-x: clip` (fallback `hidden`) on `html, body`, and clip on `#site` to prevent accidental horizontal scrolling.
- Off‑canvas mobile nav
  - Closed: fully off‑screen (`translateX(calc(100% + borderWidth))`), no border/shadow, `pointer-events: none`.
  - Open: restore border/shadow, `pointer-events: auto`, append a body‑level overlay to capture outside clicks, and set `body.has-nav-open { overflow: hidden; }`.
  - Consider `touch-action: pan-y` at mobile widths to reduce unintended horizontal gestures.
  - If classes are toggled externally, a MutationObserver can normalize overlay/aria/scroll‑lock.
- Images & caching
  - astro:assets caches transforms. To force re‑optimization: delete `.astro/`, `dist/`, `node_modules/.astro/`, and `node_modules/.vite/`, then rebuild.
  - Renaming an asset also guarantees fresh transforms.
- Lazy‑loading guidance
  - Lazy‑load below‑the‑fold images; keep above‑the‑fold/LCP images eager unless data shows otherwise.

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

## Patterns reference (shared learnings)

### Spacing & layout
- `.container` provides width and horizontal gutters only (no block padding).
- `.section` applies vertical spacing (default 4rem desktop, 2rem ≤768px).
- Header container padding-block: 0.5rem desktop, 1rem mobile.

### Section headers
- `.section-head` (accent line + badge text) is visual only; mark with `aria-hidden="true"`.
- Keep a unique H2 per section via `.section-title`.
- Use `.section-head--left` and `.section-title--left` when the badge/title need to align with column content (e.g., About profile section).

### Hero
- Eyebrow + H1; CTAs: Primary "Learn More" → `/apps`, Tertiary "Get Resources" → `/resources`.
- Stats are icon chips (star, download, users); no bullet separators; slightly larger type on chips.
- Right-side faint grid layer on desktop; hidden on mobile.

### Billboard
- Inner images: no inner box shadow; `border-radius: 15px`.
- Controls: lighter borders, pointer cursor, anchored shadow lift on hover/active.
- Images: lazy-load sizer and non-active slides to avoid below-the-fold warnings.

### Community & Partners
- Community: Discord button uses `.btn--discord`; Support & FAQ is tertiary with Slab arrow.
- Partners strip styled like reviews; tertiary buttons, brand-blue icons (no icon shadow).
- Footer “Contact” links route to `/support#contact-panel` so the contact tab opens automatically.

### Resources
- Guide bars: inline Slab icon + label + arrow; avoid icon tiles inside the bar.

### Footer
- Footer logo matches header badge (48×48, accent background, thick border, lift hover).
- Footer nav links include Slab icons; legal row includes a Back-to-Top link.
- Optional half-grid background for subtle separation.

### Buttons
- Global anchored-shadow hover/active for `.btn`; colored-shadow variants available:
  - `btn--shadow-primary`, `btn--shadow-accent`, `btn--shadow-discord`.

### Icons
- Prefer Slab icons for UI (`fa-slab fa-regular ...`); keep brand icons for social.
- Mobile nav shows icons; hide nav icons on desktop for a cleaner look.

### A11y & semantics
- Eyebrow labels are `aria-hidden`; ensure unique H2 per section.
- Use semantic `ul/li` for lists; never assign `role=list/listitem` to anchors or buttons.

### Performance
- Use `astro:assets` `<Image />` for local images (e.g., headshot in Maker’s Note and About).
- Set `fetchpriority="high"` only for true LCP images.
 - Use `logo.svg?url` for vector brand marks to avoid raster pipelines and caching complexity.
 - Beware `100vw` overflow; prefer `100dvw` where available and clip overflow.

### Page headers
- Left‑align header text by default across pages; vary right‑side visuals (shapes/grid/particles) for balanced visual interest.

### Minor UX polish
- Footer legal links should keep icon + text together (`inline-flex`, `white-space: nowrap`).
- Reviews rotator needs bottom spacing to avoid colliding with strip border.
- On very narrow screens (<560px), reduce card grids to a single column to avoid uneven widths.

## PR requirements

* Title: `[astro] <concise summary>`
* Body: what & why, files touched, linked issues, screenshots (desktop + mobile), Lighthouse scores, `node -v`, and `npx astro check` output summary. Include rollback notes.

---

**Bottom line:** keep diffs tiny, selectors robust, and behavior accessible. Add JavaScript only when absolutely necessary and keep it local to the component.
