# Portuguese Page Flow Inventory

Last updated: 2026-05-27

This inventory tracks the Portuguese copy pass for the production site. Jason
does not validate Portuguese nuance, so Portuguese copy should be adapted from
the approved English direction, checked against `CONTEXT.md`, and reviewed for
Brazilian Portuguese localization issues before publishing.

## Global Rules

- Use Brazilian Portuguese output signals: `pt-BR` HTML/hreflang/date formatting
  and `pt_BR` Open Graph locale.
- Do not guess translated URLs. Portuguese Blog and Resource entries currently
  use `-pt` slugs, so language alternates and teaser links must point to
  verified translated entries.
- Keep product names in English: Mythic GME Mobile, Mythic GME Digital, Mythic
  GME 2e, Word Mill Creative.
- Use natural PT-BR product terms: jogadores, sessões, sem mestre, rolar,
  dados, Cenas, Diários, Tabela de Destino, Verificação de Destino, Tabelas de
  Significado, Foco de Evento, Diário de Aventura, Tabelas Personalizadas,
  Recursos Expandidos, desbloqueio único.
- Avoid raw internal or store jargon such as `IAP`, `recursos Pro`, stale exact
  prices, guessed install/community counts, and unsupported reply-time promises.

## Expert Findings Applied

- PT metadata needed to be Brazilian Portuguese, not generic `pt`.
- The language switcher needed explicit alternate paths rather than inferred
  routes.
- Homepage resource teaser links needed to point at `-pt` Resource slugs.
- English blog category routes needed to stop mixing in Portuguese entries.
- Portuguese Resources and Blog dates needed `pt-BR` formatting.
- Portuguese detail pages needed translated share-button labels and status
  messages.
- Old Portuguese Support/App copy had stale `IAP`, exact-price, speed-promise,
  and Word Mill Games phrasing.
- Shared Apps components needed localized badges, headings, details, store-link,
  lightbox, and carousel labels on `/pt/apps/`.
- Portuguese search needed separate Orama indexes, not just translated search UI
  labels.
- Redirect-only contact routes and 404 pages should not be advertised in the
  sitemap; 404 pages should be noindexed.
- Historical Portuguese blog posts needed stale `IAP`, `Premium`, placeholder
  price, and Word Mill Games language cleaned when those terms are live on the
  production PT site.

## Pages Updated

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| Shared PT metadata and alternates | Done | `src/layouts/BaseLayout.astro`, `src/components/layout/Footer.astro`, `src/components/layout/LanguageFab.astro` | Emits `pt-BR`/`pt_BR`, passes explicit alternate paths, localizes default social image alt text, and stops guessing language-switch routes. |
| Shared PT search and chrome | Done | `src/components/search/SearchOverlay.astro`, `astro.config.mjs`, `src/components/home/Billboard.astro`, `src/components/home/ReviewsRotator.astro` | Uses PT search UI labels, PT-specific Orama indexes, localized carousel/review screen-reader status text, and excludes redirect/error routes from the sitemap. |
| Homepage PT | Done | `src/pages/pt/index.astro`, `src/i18n/ui.ts`, `src/components/home/PopularResources.astro` | Adapted H1/lead/stats/benefits/community/resources/maker note and fixed PT resource teaser slugs. |
| Apps PT | Done | `src/components/pages/AppsPage.astro`, `src/components/apps/**` | Reworked mobile/desktop copy, purchase language, books, support cards, roadmap/current Expanded Features, and shared Apps UI labels. |
| Support PT | Done | `src/pages/pt/support.astro` | Removed stale prices, raw `IAP`, speed promises, old partner name, and outdated Expanded Features lists. Updated language/localization and bug-report copy. |
| About PT | Done | `src/pages/pt/about.astro`, `src/content/pages/about-pt.md` | Rebuilt from approved English About story and removed the old career/license-heavy structure. |
| Resources PT index | Done | `src/pages/pt/resources/index.astro` | Tightened metadata, page header, section headings, search UI copy, reference section, support CTA, and dates. |
| Resource PT cards/details | Done | `src/content/resources/*-pt.md`, `src/pages/pt/resources/[slug].astro` | Updated visible summaries, fixed stale purchase language, PT links, download labels, and share labels. Full long-form article rewrites remain a separate editorial pass. |
| Blog PT index/detail shell and stale terms | Done | `src/pages/pt/blog/index.astro`, `src/pages/pt/blog/[slug].astro`, `src/pages/blog/category/[category].astro`, `src/content/blog/*-pt.md` | Updated metadata/header shell, PT dates, category links, sample placeholders, share labels, English category filtering, and live stale `IAP`/`Premium`/partner wording in PT posts. |
| 404 PT | Done | `src/pages/pt/404.astro`, `src/pages/404.astro` | Lightened the page-not-found copy, removed the overly cute `Ops!` phrase, and noindexed 404 pages. |

## Later Or Separate Passes

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| Legal PT pages | Later | `src/pages/pt/privacy.astro`, `src/pages/pt/terms.astro` | Legal/privacy wording should only be changed with explicit approval and careful fact checks. |
| Full historical PT blog rewrites | Later | `src/content/blog/*-pt.md` | This pass fixed live stale terminology and risky claims; deeper post-by-post rewrites remain separate. |
| Full PT resource article rewrites | Later | `src/content/resources/*-pt.md` | This pass fixed visible summaries and stale claims; a deeper article-by-article rewrite can happen separately. |
