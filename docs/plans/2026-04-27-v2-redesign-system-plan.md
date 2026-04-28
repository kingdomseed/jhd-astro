# V2 Redesign System Plan

## Goal

Turn the validated `/v2/` homepage direction into a reusable Astro design system, then redesign the missing v2 routes without losing the Muñoz/refined visual language, the existing site features, or Astro static-site simplicity.

The reference design is the current `/v2/` route built from:

- `src/layouts/V2RefinedLayout.astro`
- `src/components/v2/refined/*`
- `public/v2/assets/page.css`
- `public/v2/assets/tokens.css`
- `public/v2/assets/themes.css`

## Astro Reference Setup

The repo now includes project-local Codex MCP configuration in `.codex/config.toml`:

```toml
[mcp_servers.astro-docs]
command = "npx"
args = ["-y", "mcp-remote", "https://mcp.docs.astro.build/mcp"]
```

This follows Astro's Codex CLI setup for the Astro Docs MCP server and Codex's project-scoped `.codex/config.toml` shape. Codex may need the project to be trusted or the session restarted before the new MCP server is available as a live tool.

## Non-Negotiables

- Preserve the visual fidelity of `/v2/` as the design contract.
- Keep work scoped to `/v2/*` until an explicit cutover decision.
- Keep the site static: no SSR, Actions, or islands unless separately approved.
- Preserve real production capabilities: Orama site search, resource/blog collections, RSS, category filtering, support tabs, `#contact-panel`, Formspark, Turnstile, store links, external link rel attributes, and PT content as existing architecture.
- Do not introduce new content collections or schema changes without a separate approval.
- Avoid broad global CSS rewrites; use v2-specific selectors and route-local validation.
- Treat v2 as an English-only preview until cutover. Production `/pt/*` routes stay untouched, and future Portuguese v2 routing needs a separate decision.
- Keep `/rss.xml` pointed at production blog URLs until cutover. Duplicate v2 preview detail pages must be `noindex` and/or canonical-to-production unless the cutover explicitly makes v2 canonical.

## Wrongness Check

1. Visual drift: componentizing too aggressively could change spacing, image framing, or texture. Detect with desktop and mobile screenshots of `/v2/` before and after shell changes. Cheap test: compare first viewport plus scroll snapshots at 1440px and mobile width.
2. Feature regression: a redesigned page could look right while dropping existing behavior such as search, blog filters, FAQ expansion, or contact hash routing. Detect with a route checklist per page. Cheap test: keyboard shortcuts, tabs, filter buttons, FAQ buttons, and form enablement checks.
3. Route mismatch: v2 index pages could link back to non-v2 detail pages by accident, or relative asset paths could break on nested routes. Detect with link and asset scans. Cheap test: run build, `curl` key routes/assets, and click through the v2 nav in browser.

## Current State

- `/v2/` uses the new refined artifact converted into Astro components.
- `/v2/apps/`, `/v2/resources/`, `/v2/support/`, and `/v2/blog/` still use the older `V2Layout` scaffold and `public/styles/v2.css`.
- Production pages already carry important behavior and data:
  - Apps product data and store links in `src/components/pages/AppsPage.astro`.
  - Resource collection grouping and search UI in `src/pages/resources/index.astro`.
  - Blog collection, filtering, categories, RSS link, and detail pages under `src/pages/blog/*`.
  - Support tabs, FAQ accordions, Formspark, Turnstile, and `#contact-panel` handling in `src/pages/support.astro`.
  - Site-wide Orama search in `src/components/search/SearchOverlay.astro` and `astro.config.mjs`.
- The older `src/components/v2/layout/*` and `public/styles/v2/*` stack is legacy preview scaffolding. It is useful as a warning about missing routes, but it is not the design extraction source.
- `V2RefinedInteractions` is currently home-specific behavior loaded by `V2RefinedLayout`; it must be split or guarded before the refined layout is reused on non-home routes.

## Component Strategy

Keep the artifact CSS as the visual truth at first, then extract components around it. Do not immediately rewrite the CSS into a new styling model.

Before extracting primitives, inventory the visual contract in `public/v2/assets/page.css` and the refined components. The artifact CSS has broad selectors such as `button`, `img`, `.wrap`, `.brand`, and `.btn`, and some refined components carry visual details in inline styles. The first extraction pass should preserve those details, not tidy them away.

First stabilize shared v2 refined infrastructure:

- `V2RefinedLayout`: add description/canonical/head slots, skip link, `<main id="main">` ownership, root-relative `/v2/assets/*` paths, and an explicit search overlay decision.
- `V2RefinedHeader`: make nav and store links real, active-route aware, and reusable across nested `/v2/*` routes.
- `V2RefinedFooter`: make footer links real and remove placeholder `#` destinations.
- `V2RefinedInteractions`: split homepage-only carousel, billboard, marquee, and tweaks-panel behavior into owning components, or guard every DOM query before layout reuse.
- `V2RefinedShell` primitives:
  - page header
  - section header
  - section band
  - card/list card
  - button/link variants
  - store menu
  - split feature panel
  - article shell
  - search prompt / search trigger
- Keep interactive scripts small, local, and `data-*` driven.
- Choose one v2 icon/font loading strategy. The refined layout currently uses Font Awesome CDN 6.5.2 and Google font links, while production uses the Font Awesome kit/Slab pattern; verify icons render before porting Apps or Support content.
- Search policy for preview: global Orama search may keep returning canonical production `/resources/*` and `/blog/*` paths until cutover. If we want v2 search destinations before cutover, update `astro.config.mjs` with v2-specific indexing and add a duplicate-content SEO policy in the same slice.

Only after the shared shell holds should we consider moving `public/v2/assets/page.css` into organized v2 CSS files. The first pass can keep CSS in place and add narrowly scoped selectors for missing pages.

## Route Plan

### Phase 1: Harden the Refined Shell

- Replace relative asset references like `assets/logo-munoz.svg` with root-relative `/v2/assets/logo-munoz.svg` so nested routes do not break.
- Move placeholder header/footer links to real v2 routes.
- Pull store/download links into shared data or a small component so Header, Footer, Apps, and Support stay aligned.
- Add metadata, canonical/noindex support, head slot, skip link, and main-region support to `V2RefinedLayout`.
- Split or guard refined homepage interactions before using `V2RefinedLayout` anywhere except `/v2/`.
- Add a v2 contact-link rule: all v2 Contact CTAs point to `/v2/support/#contact-panel`; only add `/v2/contact` if the v2 nav exposes that path.
- Decide and document whether `SearchOverlay` is included directly in the refined layout or added after the Resources route is ported.

Validation:

- `/v2/` still matches the approved visual direction.
- Header download menu opens/closes.
- Mobile drawer opens/closes; `aria-expanded`, overlay click, Escape, focus return, body scroll lock, and no tabbing behind the drawer are verified.
- All `/v2/assets/*` references return 200.
- Browser console has no errors on every changed v2 route.
- Run `rg -n '(["(])assets/' src/layouts/V2RefinedLayout.astro src/components/v2/refined` and resolve every nested-route-breaking relative asset reference.
- Run a placeholder-link scan and resolve every accidental `href="#"` in refined navigation/content.

### Phase 2: Apps Route Vertical Slice

Use `/v2/apps/` as the first full missing-page conversion because it exercises most reusable patterns: store links, product cards, screenshots, compare content, future product states, and CTAs.

Build from existing production content in `AppsPage.astro`, not from placeholder preview copy.

Required sections:

- Product-family page header.
- Mobile app feature/story block.
- Desktop app feature/story block.
- Store/download matrix with real external links.
- Adventure Crafter coming-soon placement.
- Physical books / Word Mill handoff.
- Screenshot gallery using `astro:assets` where practical.

Source refs:

- Product data and app content: `src/components/pages/AppsPage.astro`.

Validation:

- Store links are real and keep `target="_blank"` plus `rel="noopener noreferrer"`.
- Images render on desktop and mobile.
- The route feels like the same site as `/v2/`, not the older scaffold.

### Phase 3: Resources Index and Detail Pages

Port `/v2/resources/` from preview into a real docs hub powered by `getResourcesByLang("en")`.

Required sections:

- Search-first docs header using the refined visual language.
- Category sections matching the current production grouping.
- Resource cards with category, duration, updated date, and icons.
- Support handoff to `/v2/support/#contact-panel` and Discord.

Add `/v2/resources/[slug].astro` before changing index card links to `/v2/resources/${id}/`.

Dynamic route requirements:

- Export `getStaticPaths()`.
- Filter to English entries for the v2 preview.
- Render existing markdown through a refined article shell.
- Apply preview SEO policy: noindex/canonical-to-production until cutover.

Source refs:

- Grouping/order/search data: `src/pages/resources/index.astro`.
- Detail rendering/share behavior: `src/pages/resources/[slug].astro`.

Validation:

- All resource entries build.
- Search interaction still works or is replaced by the site-wide Orama overlay with equivalent keyboard access and an explicit destination policy.
- Existing markdown content renders cleanly in the refined article shell.
- Post-build link scan catches v2 pages linking back to production `/resources/*` once v2 detail routes exist, except documented canonical/search exceptions.

### Phase 4: Support Hub

Port `/v2/support/` from preview into the real support hub.

Required sections:

- Quick help cards: Discord, email, resources/search.
- Full FAQ accordions from the current support page.
- Contact tab with Formspark and Turnstile.
- Hash behavior: `/v2/support/#contact-panel` opens the contact panel.

Source refs:

- Tabs, contact form, Turnstile, FAQ behavior: `src/pages/support.astro`.

Validation:

- Tabs update `aria-selected` and visible panel state.
- FAQ section and question accordions work.
- Contact submit button behavior remains equivalent to production.
- Keyboard tab order is coherent.
- Direct load to `/v2/support/#contact-panel` opens the Contact tab.
- Same-page contact hash links work.
- `window.onTurnstileSuccess("test")` enables the submit path in a local smoke test.
- If `role="tablist"` is preserved, keyboard behavior is tested; otherwise use simpler semantics intentionally.

### Phase 5: Blog Index, Category, and Article Pages

Port `/v2/blog/` from preview into a real editorial surface.

Required sections:

- Latest post feature.
- Recent posts list/grid.
- Category filters and category route support.
- RSS link.
- Sample badges where `isSample` is true.

Add:

- `/v2/blog/[slug].astro`
- `/v2/blog/category/[category].astro`

Dynamic route requirements:

- Export `getStaticPaths()` for detail and category routes.
- Filter to English entries for the v2 preview.
- Avoid copying production category logic without language filtering.
- Apply preview SEO policy: noindex/canonical-to-production until cutover.

Source refs:

- RSS/filtering/category data: `src/pages/blog/index.astro`.
- Detail rendering/share behavior: `src/pages/blog/[slug].astro`.
- Category route shape: `src/pages/blog/category/[category].astro`.

Validation:

- All blog entries build.
- Category URLs work.
- Filter controls preserve `aria-pressed` behavior.
- Article pages keep share/RSS affordances or a refined equivalent.
- `?category=` initialization works if preserved.
- RSS remains production-canonical until cutover.
- Sample badge rendering is preserved.

### Phase 6: Secondary Pages

After the main workflow pages land, decide whether v2 needs equivalents for:

- `/v2/about/`
- `/v2/privacy/`
- `/v2/terms/`
- `/v2/404/`
- Portuguese v2 routes

These should be handled after the core English v2 experience is coherent.

## QA Matrix

Run after each phase:

```bash
npx astro check
npm run test
npm run build
```

Manual/browser checks:

- Desktop screenshots: `/v2/`, the changed route, and at least one nested detail page when available.
- Mobile screenshots: same route set at a narrow viewport.
- No browser console errors or page errors on every changed v2 route.
- Single `<main>`, one H1, and skip-link/focus smoke check where the refined layout owns the shell.
- Header nav, download menu, mobile drawer, Escape behavior.
- Search: Cmd/Ctrl+K, `/`, Escape, ArrowUp/ArrowDown, Enter on a result, empty state, and result destination policy.
- Resources: search/filter links and resource detail rendering.
- Support: tabs, hash contact open, FAQ accordions, contact form state.
- Blog: filters, `aria-pressed`, `?category=` initialization if preserved, category links, RSS link, article detail, ShareBar copy/share status, sample badges.
- Link scan: no placeholder `href="#"` except intentional non-navigation controls.
- Asset scan: no nested-route `assets/...` paths that should be `/v2/assets/...`.

Recommended route smoke set:

- `/v2/`
- `/v2/apps/`
- `/v2/resources/`
- one `/v2/resources/[slug]/`
- `/v2/support/#contact-panel`
- `/v2/blog/`
- one `/v2/blog/[slug]/`
- one `/v2/blog/category/[category]/`

Post-build scans:

```bash
rg -n 'href="#"|src="assets/|href="assets/|href="/(blog|resources)/' dist/v2
rg -n '(["(])assets/' src/layouts/V2RefinedLayout.astro src/components/v2/refined
```

Document any exceptions inline in the implementation notes for that phase.

## First Implementation Slice

Start with Phase 1 plus the Apps vertical slice:

1. Harden `V2RefinedLayout`, `V2RefinedHeader`, and `V2RefinedFooter`.
2. Split or guard `V2RefinedInteractions` so the refined layout is safe outside the homepage.
3. Declare the old `V2Layout` stack legacy and avoid extracting from it.
4. Create the first refined primitives needed by Apps.
5. Replace `/v2/apps/` with the refined shell and real production app content.
6. Validate with `npx astro check`, `npm run test`, `npm run build`, browser console checks, and screenshots for `/v2/` and `/v2/apps/`.

This is the smallest slice that proves the design system can carry a full non-home route without risking the whole site.
