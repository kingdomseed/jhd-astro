# Sanctuary Full Site Plan

## Goal

Promote the `/v2/explore` sanctuary direction into the full English `/v2/*` preview site: shared layout, accessible contrast, Muñoz art used only where orientation and subject fit, and real production content/behaviors ported behind the new visual language.

## Astro approach (from docs MCP)

- Use a dedicated `SanctuaryLayout.astro` page shell with named slots (`head`, default main content) per Astro layouts guidance.
- Keep the site static: content collections + `getStaticPaths()` for blog/resource detail and category routes.
- Keep interactivity in local `<script>` tags (drawer, store menu, FAQ, support tabs, contact hash) — no islands unless separately approved.

## Immediate visual fixes

1. Button contrast: navy primary + white text; chartreuse only as accent shadow or high-contrast black-on-chartreuse secondary; never low-contrast green-on-green.
2. Delete wrong Fate art (`stamp-art10.png` / `art-10.png` Random Events plate) and remove all references.
3. Hero uses a single framed portrait (`art-3.png`); remove the astronaut cutout.

## Architecture

```
src/layouts/SanctuaryLayout.astro
src/components/v2/sanctuary/{Header,Footer,HomeHero,Pillars,Band,AppsStrip,Quote}.astro
public/v2/sanctuary/{tokens.css,shell.css,home.css,pages.css}
src/pages/v2/**  → SanctuaryLayout
/v2/explore/     → redirect to /v2/
```

## Route map

| Route | Content source | Notes |
|-------|----------------|-------|
| `/v2/` | Sanctuary home sections | Product CTAs, Muñoz art, apps anchors |
| `/v2/apps/` | `AppsPage` / store links / screenshots | New dedicated apps route |
| `/v2/resources/`, `[slug]` | `getResourcesByLang` | Sanctuary article shell |
| `/v2/blog/`, `[slug]`, `category` | `getBlogPostsByLang` | Filters + sample badges |
| `/v2/support/` | FAQ + Formspark/Turnstile + `#contact-panel` | Match production behavior |
| `/v2/about/` | about.md + approved maker story | Portrait `jason.jpg` |
| `/v2/privacy/`, `/v2/terms/` | `v2Legal` extractors | Sanctuary prose shell |

## Non-negotiables

- `noindex` until cutover; canonical paths under `/v2/…`
- English-only preview; production `/` and `/pt` untouched
- Store links keep `rel="noopener noreferrer"`
- Portrait art in portrait frames; landscape only in wide bands
- CONTEXT.md copy rules for player-facing text

## Wrongness check

1. **Contrast regression** — Detect with desktop/mobile screenshots of CTAs; cheap test: navy/white primary and black-on-chartreuse secondary.
2. **Wrong art reuse** — Grep for deleted filenames; cheap test: no `stamp-art10` / `art-10` in tree.
3. **Feature drop on support/resources/blog** — Checklist: tabs, FAQ, hash contact, collection pages build via `astro check` + `npm run build`.
