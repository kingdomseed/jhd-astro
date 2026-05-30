# Site Copy Tracker

Last updated: 2026-05-28

This tracker keeps the website copy pass on track. Update it after each
approved section so we do not reopen finished work or lose the next decision.

## Status Legend

- Done: approved and should not be reopened unless Jason explicitly asks.
- In review: actively being grilled, drafted, or revised.
- Pending: needs review.
- Later: intentionally out of the current pass.

## Current Copy Rules

- About, Homepage, Apps, Resources, Support, SEO/social, Portuguese production
  copy, and English/Portuguese Legal pages are done for the current production
  copy pass. Do not continue reworking them unless Jason explicitly asks.
- Future legal-page edits remain copy and factual-alignment work unless Jason
  explicitly starts a legal strategy or counsel-review pass. Do not treat these
  docs as legal advice.
- If a new copy pass starts, work section by section from the relevant flow
  inventory. After a section is approved, apply it, mark it done, then
  immediately show the next section's current copy and recommended refinement.
- Keep existing copy when it already does its job and matches `CONTEXT.md`.
- Use `CONTEXT.md` as the public-site voice and terminology source.
- Use the Mythic GME app context for precise product terms.
- Verify current app behavior and current official provider/store policy before
  changing legal/privacy claims.
- For Portuguese legal pages, adapt approved English legal meaning in natural
  Brazilian Portuguese and preserve the Brazil/Portugal legal framing already
  recorded in `CONTEXT.md`.
- Keep the site product-first: help players understand, trust, get, and use the
  Mythic apps.
- Prefer player outcomes before feature inventory.
- Avoid claim-colon explanation sentences.
- Avoid generic portfolio, resume, or founder-brand language.
- Prefer "Word Mill Creative" in public copy unless quoting source/legal text.
- Use "player" when the person is using Mythic in play.

## Production English Copy

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| About | Done | `src/pages/about.astro`, `src/content/pages/about.md`, `docs/copy/about-page-draft.md` | Approved. Header, profile, process, and connect sections are complete for this pass. |
| Homepage | Done | `src/pages/index.astro`, `src/i18n/ui.ts`, `src/components/home/**`, `docs/copy/home-page-flow-inventory.md` | Production English homepage copy pass is complete and published. Do not reopen unless explicitly requested. |
| Home inventory | Done | `docs/copy/home-page-flow-inventory.md` | Current homepage order, copy jobs, and flow tensions are captured. Use this before drafting home copy. |
| Home hero H1 and lead | Done | `src/i18n/ui.ts`, `src/components/home/Hero.astro`, `CONTEXT.md` | Keep original H1. Use the Mythic-specific lead. Both approved hero language directions are recorded in `CONTEXT.md`. |
| Home hero CTAs | Done | `src/i18n/ui.ts`, `src/components/home/Hero.astro` | Use `See the Apps` and `Get Resources`. |
| Home hero proof chips | Done | `src/i18n/ui.ts`, `src/components/home/Hero.astro`, `CONTEXT.md` | Use `4.8 App Store rating`, `Mobile + desktop`, and `No subscriptions`. Avoid fuzzy install, community, MAU, or session claims. |
| Home metadata | Done | `src/pages/index.astro` | Keep mostly unchanged for search continuity. Only revisit `by Jason Holt Digital` if there is a clear keyword reason. |
| Home billboard | Done | `src/i18n/ui.ts`, `src/components/home/Billboard.astro` | Keep visible/control copy unchanged. Alt text now uses `Adventure Log`. |
| Home reviews strip | Done | `src/i18n/ui.ts`, `src/components/home/ReviewsRotator.astro` | Keep `What players say` and `Player reviews`. Quote selection is not part of this copy-only pass. |
| Home utility bar | Done | `src/components/layout/UtilBar.astro`, `src/i18n/ui.ts` | Keep `OFFICIAL PARTNER` and `Word Mill Creative`. Do not change to `OFFICIALLY LICENSED` in this pass. |
| Home benefits | Done | `src/i18n/ui.ts`, `src/components/home/CoreBenefits.astro` | Keep heading/titles. Descriptions now use stronger player outcomes and canonical Mythic terms. |
| Home community/support | Done | `src/i18n/ui.ts`, `src/components/home/CommunitySupport.astro` | Keep heading/titles. Descriptions now name the real community and support paths. |
| Home partners | Done | `src/i18n/ui.ts`, `src/components/home/Partners.astro` | Keep current copy as-is. |
| Home resources teaser | Done | `src/i18n/ui.ts`, `src/components/home/PopularResources.astro` | Use `Guides for play`. Keep badge and guide links unchanged. |
| Home maker note | Done | `src/i18n/ui.ts`, `src/components/home/MakersNote.astro`, `CONTEXT.md` | Approved note focuses on Jason's active product loop and making Mythic ready to play in one place without distracting from the story. |
| Apps inventory | Done | `docs/copy/apps-page-flow-inventory.md` | Current Apps page order, copy jobs, and copy tensions are captured. Use this before drafting Apps copy. |
| Apps metadata and page header | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps title/subtitle/OG title and refines descriptions around official apps, platform comparison, and keeping tools close during play. |
| Apps mobile lead and features | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps the title, smooths the lead, and revises feature bullets around player actions and canonical Mythic terms. |
| Apps mobile official content and unlocks | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps heading/store labels, sharpens official-content details, and replaces internal IAP wording with plain permanent-unlock language. |
| Apps Adventure Crafter divider | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps badge/title and replaces generic coming-soon language with a concrete future companion-app description. |
| Apps desktop lead and features | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps title, shifts lead from layout to longer sessions, and revises features around Panels, guidance, visible tools, and many undoable actions. |
| Apps desktop official content and disclaimer | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md`, `CONTEXT.md` | Approved. Adds `Mythic-verse` to glossary while using plainer content/purchase wording on the page. |
| Apps books section | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Uses `Source Books`, keeps the original-books path, and clarifies that the apps are companions to Tana Pigeon's books. |
| Apps additional info cards | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Removes the unsupported 60% claim, clarifies support/feedback paths, and updates the English last-updated date. |
| Apps open source section | Done | `src/components/pages/AppsPage.astro`, `docs/copy/apps-page-flow-inventory.md` | Approved. Keeps badge/project links and makes the engineering proof plainer. |
| Apps page | Done | `src/pages/apps.astro`, `src/components/pages/AppsPage.astro`, `src/components/apps/**`, `docs/copy/apps-page-flow-inventory.md` | Production English Apps page copy pass is complete. Do not reopen unless explicitly requested. |
| Resources inventory | Done | `docs/copy/resources-index-flow-inventory.md` | Current Resources index order, copy jobs, and copy tensions are captured. Use this before drafting Resources index copy. |
| Resources metadata and page header | Done | `src/pages/resources/index.astro`, `docs/copy/resources-index-flow-inventory.md` | Approved. Keeps the practical docs framing while tightening scope around Mythic GME Mobile, Mythic GME Digital, and app-specific guides. |
| Resources search copy | Done | `src/pages/resources/index.astro`, `docs/copy/resources-index-flow-inventory.md` | Approved. Uses `guides` in search placeholder, accessible label, empty state, and status text while keeping the keyboard hint. |
| Resources Start Here section | Done | `src/pages/resources/index.astro`, `docs/copy/resources-index-flow-inventory.md` | Approved. Replaces `workspace` and vague `Mythic flow` language with plain app/play wording. |
| Resources Start Here cards | Done | `src/content/resources/getting-started-with-the-mythic-apps.md`, `src/content/resources/setting-up-and-using-lists.md`, `src/content/resources/writing-and-organizing-scenes.md`, `src/content/resources/using-meaning-tables-for-inspiration.md`, `src/content/resources/setting-up-a-prepared-adventure.md` | Approved. Keeps titles and refines visible summaries only. |
| Resources Adventure Journals | Done | `src/pages/resources/index.astro`, `src/content/resources/guide-to-the-mythic-journals.md`, `src/content/resources/sharing-adventure-journals.md`, `src/content/resources/troubleshooting.md` | Approved. Uses a practical Journal management frame and refines visible summaries for clearer export/support wording. |
| Resources Dice Roller | Done | `src/pages/resources/index.astro`, `src/content/resources/getting-started-with-the-dice-roller.md`, `src/content/resources/saving-and-managing-dice-formulas.md`, `src/content/resources/dice-formulas-and-customization.md`, `src/content/resources/importing-and-exporting-saved-formulas.md` | Approved. Replaces tutorial-marketing language with practical dice-formula actions and cleaner visible summaries. |
| Resources Custom Tables | Done | `src/pages/resources/index.astro`, `src/content/resources/getting-started-with-custom-tables.md`, `src/content/resources/organizing-custom-tables.md`, `src/content/resources/linking-and-nesting-tables.md`, `src/content/resources/importing-and-exporting-custom-tables.md` | Approved. Uses a practical Custom Tables frame, removes repeated `powerful`, fixes spelling consistency, and refines visible summaries. |
| Resources Schemas & Reference Docs | Done | `src/pages/resources/index.astro`, `src/content/resources/journal-schema.md`, `src/content/resources/formula-schema.md`, `src/content/resources/custom-table-schema.md`, `src/content/resources/categories-schema.md` | Approved. Keeps technical scope while tightening JSON/reference language. |
| Resources Support CTA | Done | `src/pages/resources/index.astro`, `docs/copy/resources-index-flow-inventory.md` | Approved. Keeps the support path clear and uses a sustainable public response promise. |
| Resources index | Done | `src/pages/resources/index.astro`, `src/content/resources/*.md`, `docs/copy/resources-index-flow-inventory.md` | Production English Resources index copy pass is complete. Do not reopen unless explicitly requested. |
| Support inventory | Done | `docs/copy/support-page-flow-inventory.md` | Current Support page order, copy jobs, and high-risk copy tensions are captured. Use this before drafting Support copy. |
| Support metadata and page header | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Removes speed promises and names support, Discord, FAQ, and contact paths clearly. |
| Support intro and help cards | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Clarifies Discord vs email support and removes overly casual/speed-promise language. |
| Support General & Platforms FAQ | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Clarifies official app description, partner wording, store labels, cross-platform purchases, and source-book framing. |
| Support Features & Data FAQ | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Tightens feature terms, removes internal unlock labels from feature lists, clarifies accessibility copy, and updates localization wording. |
| Support Purchases, Pricing & Upgrades FAQ | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Removes stale exact prices, explains store purchase models, clarifies the unlock window, and uses repo-verified shipped/roadmap Expanded Features. |
| Support Getting Help FAQ | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Adds what to include in bug reports and polishes the release-notes bridge. |
| Support contact tab info cards | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Separates community and consulting paths, removes the late-night bug-triage promise, and avoids implying consulting availability. |
| Support contact form copy | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Approved. Removes the 2-business-day promise, makes app-support submissions more useful, and cuts the overly cute error tone. |
| Support page | Done | `src/pages/support.astro`, `docs/copy/support-page-flow-inventory.md` | Production English Support page copy pass is complete. Do not reopen unless explicitly requested. |
| Copy context sync | Done | `CONTEXT.md`, `docs/copy/*flow-inventory.md` | Approved copy directions, resume-derived voice rules, the full Mythic GME app glossary, SEO/social metadata rules, Brazilian Portuguese localization rules, and Portuguese-copy ownership expectations are captured for future site copy work. |
| SEO/social metadata inventory | Done | `docs/copy/seo-social-metadata-inventory.md` | Current metadata behavior, page titles/descriptions, OG/social gaps, JSON-LD drift risk, and hreflang constraints are captured. |
| SEO/social metadata mechanics | Done | `src/layouts/BaseLayout.astro`, top-level EN/PT pages, `public/social/og-default.jpg`, `public/apple-touch-icon.png` | Uses a 1200x630 galaxy social card, adds OG/Twitter image alt support, restores the Apple touch icon, removes stale structured-data price/rating fields, and uses explicit EN/PT alternate paths instead of guessed routes. |
| SEO/social title patterns | Done | `src/pages/about.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/pages/blog/category/[category].astro`, `src/pages/resources/[slug].astro` | Removes duplicated About title wording and strengthens Blog/Resource title suffixes around Mythic GME Apps. |
| SEO/social detail-page hreflang | Done | `src/layouts/BaseLayout.astro`, `src/pages/blog/[slug].astro`, `src/pages/pt/blog/[slug].astro`, `src/pages/resources/[slug].astro`, `src/pages/pt/resources/[slug].astro` | Uses explicit EN/PT slug mapping for Blog and Resource detail pages, verified against content collection entries before emitting translated alternates. |
| Header | Done | `src/components/layout/Header.astro`, `src/i18n/ui.ts` | Keep current header, CTA, mobile label, and store labels. |
| Footer | Done | `src/components/layout/Footer.astro`, `src/i18n/ui.ts` | Keep footer copy as-is. |
| SEO/social metadata beyond home | Done | `docs/copy/seo-social-metadata-inventory.md`, page frontmatter/layout props | Sitewide mechanics, title-pattern cleanup, translated detail-page hreflang mapping, and PT-BR locale metadata are implemented. |
| Portuguese inventory | Done | `docs/copy/portuguese-page-flow-inventory.md` | PT production surfaces, expert localization findings, and later/non-goal areas are captured. |
| Portuguese homepage | Done | `src/pages/pt/index.astro`, `src/i18n/ui.ts`, `src/components/home/PopularResources.astro` | Adapted homepage copy to approved English direction, fixed stats/support/resources wording, and mapped resource teaser links to PT slugs. |
| Portuguese Apps page | Done | `src/components/pages/AppsPage.astro`, `src/components/apps/**` | Reworked product, purchase, support, roadmap, book copy, and shared Apps UI labels around natural PT-BR terms and current Expanded Features. |
| Portuguese Support page | Done | `src/pages/pt/support.astro` | Removed stale prices, raw `IAP`, speed promises, old partner naming, and outdated Expanded Features lists. |
| Portuguese About page | Done | `src/pages/pt/about.astro`, `src/content/pages/about-pt.md` | Rebuilt from the approved About story and removed the old career/license-heavy structure. |
| Portuguese Resources pages | Done | `src/pages/pt/resources/index.astro`, `src/pages/pt/resources/[slug].astro`, `src/content/resources/*-pt.md` | Updated index shell, visible card summaries, stale purchase language, PT links, detail labels, and share labels. |
| Portuguese Blog and 404 shell | Done | `src/pages/pt/blog/index.astro`, `src/pages/pt/blog/[slug].astro`, `src/pages/blog/category/[category].astro`, `src/content/blog/*-pt.md`, `src/pages/pt/404.astro`, `src/pages/404.astro` | Updated PT shell metadata/copy/date formatting/category behavior, cleaned stale PT blog terminology, and noindexed 404 pages. |
| Portuguese globalization mechanics | Done | `astro.config.mjs`, `src/layouts/BaseLayout.astro`, `src/components/search/SearchOverlay.astro`, `src/components/home/Billboard.astro`, `src/components/home/ReviewsRotator.astro` | Uses PT-specific search indexes, localized shared labels/status text, PT social image alt text, explicit alternates, and sitemap exclusions for redirect/error routes. |
| Legal inventory | Done | `docs/copy/legal-page-flow-inventory.md` | Current legal page structure, local app behavior checks, official provider/store source checks, and legal-copy risk areas are captured. |
| Legal pages | Done | `src/pages/privacy.astro`, `src/pages/terms.astro`, `src/pages/pt/privacy.astro`, `src/pages/pt/terms.astro`, `docs/copy/legal-page-flow-inventory.md` | Production English and Portuguese Privacy/Terms pages are complete for this pass. Future edits require explicit approval and fresh fact checks. |
| Privacy factual core | Done | `src/pages/privacy.astro`, `docs/copy/legal-page-flow-inventory.md` | Approved. Removes Firebase as an active provider, aligns analytics with the current minimal PostHog daily ping, clarifies Sentry error reporting and optional Session Replay, avoids minor-identification claims, and updates app-store compliance summaries. |
| Privacy rights/contact/children cleanup | Done | `src/pages/privacy.astro`, `docs/copy/legal-page-flow-inventory.md` | Approved. Replaces the incomplete US state-law list with broad applicable-rights wording, removes response-speed promises, avoids age-knowledge claims, generalizes device controls, softens future-feature promises, and removes absolute upload/sale phrasing. |
| Terms intro/products/license | Done | `src/pages/terms.astro`, `docs/copy/legal-page-flow-inventory.md` | Approved. Updates last-updated date, current product platforms, Word Mill Creative legal attribution, and user-content/local-first license wording. |
| Terms purchases/refunds | Done | `src/pages/terms.astro`, `docs/copy/legal-page-flow-inventory.md` | Approved. Removes subscription wording, covers current mobile and desktop purchase surfaces, uses freshly checked official refund paths, and avoids refund-eligibility promises. |
| Terms third-party/store requirements | Done | `src/pages/terms.astro`, `docs/copy/legal-page-flow-inventory.md` | Approved. Covers store distribution, purchases, optional analytics, diagnostics, support paths, and all current store terms without overpromising announcements or store-provider support duties. |
| Portuguese legal pages | Done | `src/pages/pt/privacy.astro`, `src/pages/pt/terms.astro`, `CONTEXT.md`, `docs/copy/legal-page-flow-inventory.md` | Approved. Rewrites Portuguese Privacy and Terms from the approved English legal pages, with Brazilian Portuguese copy and explicit Brazil/Portugal legal framing for LGPD/ANPD, RGPD/CNPD, and mandatory consumer-rights safeguards. |
| Blog and release-note inventory | Done | `docs/copy/blog-release-notes-flow-inventory.md`, `src/content/blog/**` | Captures all 56 EN/PT posts, pairings, categories, route behavior, app source checks, stale-risk buckets, and recommended rewrite order. |
| Blog writing guide | Done | `docs/copy/blog-writing-guide.md`, `CONTEXT.md` | Starts the reusable Blog/release-note workflow and language rules so future posts can be written consistently with Codex. |
| Blog and release-note rewrites | Done | `src/content/blog/**`, `docs/copy/blog-release-notes-flow-inventory.md` | Release notes and announcements are cleaned for current terminology, historical framing, purchase/privacy language, mixed EN/PT bodies, Linux packaging facts, and date metadata. Procedural guide rewrites move to the app-verified Resources pass. |
| v1.6.0-1.6.4 release note rewrite | Done | `src/content/blog/rn-1-6-0-2026-03-25.md`, `src/content/blog/rn-1-6-0-2026-03-25-pt.md` | Rewrites the stale preview/coming-soon post into shipped release-line notes based on the Mythic app repo's 1.6.0-1.6.4 changelog and in-app release notes. |
| Blog stale-term cleanup | Done | `src/content/blog/**`, `docs/copy/blog-release-notes-flow-inventory.md` | Cleans current-facing stale terms in release notes and announcements: purchase language, Firebase/analytics drift, mixed EN/PT bodies, old partner naming, shipped roadmap claims, and ambiguous date metadata. Older beta notes keep a concise archive feel. |

## Later Or Separate Passes

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| v2 copy | Later | `src/pages/v2/**`, `src/components/v2/**`, `src/lib/v2*.ts` | V2 has unrelated in-progress design work. Do not mix with the production copy pass unless Jason asks. |
| Full resource article rewrites | Later, app-verified | `src/content/resources/**`, `src/content/resources/*-pt.md` | Visible summaries and stale claims were updated. Body rewrites should be planned only after using Patrol or equivalent app navigation to verify how each workflow actually works in the app. |

## Outstanding Copy Work

No production top-level copy page is outstanding in the current grill/docs pass.
The completed surfaces are About, Homepage, Apps, Resources index, Support,
SEO/social metadata mechanics, Portuguese production pages, and
English/Portuguese Legal pages.

Remaining work is intentionally separate:

- v2 copy: wait until the v2 design direction settles.
- Blog and release-note rewrites: this is the best next grill/docs copy pass.
  Start with an inventory of all posts, especially release notes, before
  rewriting.
- Full Resource article rewrites: visible summaries are done; long-form article
  bodies need a separate app-verified documentation pass using Patrol or
  equivalent navigation through the app.
- Future legal review: use counsel if the business needs legal sufficiency, or
  re-check facts when app behavior, providers, stores, or laws change.

Next grill target, if continuing copy now: inventory Blog and release-note
posts, decide which historical details must remain as historical record, and
then rewrite section by section without reopening completed top-level pages.
