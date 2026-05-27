# Site Copy Tracker

Last updated: 2026-05-27

This tracker keeps the website copy pass on track. Update it after each
approved section so we do not reopen finished work or lose the next decision.

## Status Legend

- Done: approved and should not be reopened unless Jason explicitly asks.
- In review: actively being grilled, drafted, or revised.
- Pending: needs review.
- Later: intentionally out of the current pass.

## Current Copy Rules

- About and the homepage are done. Do not continue reworking them in this pass
  unless Jason explicitly asks.
- The current Support page pass is copy refinement only. Do not move, remove, or
  add sections as part of this pass.
- Work section by section in the current Support page order.
- After a section is approved, apply it, mark it done, then immediately show the
  next section's current copy and recommended refinement.
- Keep existing copy when it already does its job and matches `CONTEXT.md`.
- Use `CONTEXT.md` as the public-site voice and terminology source.
- Use the Mythic GME app context for precise product terms.
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
| Copy context sync | Done | `CONTEXT.md`, `docs/copy/*flow-inventory.md` | Approved copy directions, resume-derived voice rules, and the full Mythic GME app glossary are captured for future site copy work. |
| SEO/social metadata inventory | Done | `docs/copy/seo-social-metadata-inventory.md` | Current metadata behavior, page titles/descriptions, OG/social gaps, JSON-LD drift risk, and hreflang constraints are captured. |
| SEO/social metadata mechanics | Done | `src/layouts/BaseLayout.astro`, top-level EN/PT pages, `public/social/og-default.jpg`, `public/apple-touch-icon.png` | Uses a 1200x630 galaxy social card, adds OG/Twitter image alt support, restores the Apple touch icon, removes stale structured-data price/rating fields, and uses explicit EN/PT alternate paths instead of guessed routes. |
| SEO/social title patterns | Done | `src/pages/about.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/pages/blog/category/[category].astro`, `src/pages/resources/[slug].astro` | Removes duplicated About title wording and strengthens Blog/Resource title suffixes around Mythic GME Apps. |
| SEO/social detail-page hreflang | Done | `src/layouts/BaseLayout.astro`, `src/pages/blog/[slug].astro`, `src/pages/pt/blog/[slug].astro`, `src/pages/resources/[slug].astro`, `src/pages/pt/resources/[slug].astro` | Uses explicit EN/PT slug mapping for Blog and Resource detail pages, verified against content collection entries before emitting translated alternates. |
| Header | Done | `src/components/layout/Header.astro`, `src/i18n/ui.ts` | Keep current header, CTA, mobile label, and store labels. |
| Footer | Done | `src/components/layout/Footer.astro`, `src/i18n/ui.ts` | Keep footer copy as-is. |
| SEO/social metadata beyond home | Done | `docs/copy/seo-social-metadata-inventory.md`, page frontmatter/layout props | Sitewide mechanics, title-pattern cleanup, and translated detail-page hreflang mapping are implemented. Portuguese metadata remains a separate pass. |

## Later Or Separate Passes

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| Portuguese copy | Later | `src/pages/pt/**`, PT entries in `src/i18n/ui.ts`, `src/content/pages/about-pt.md` | Translate/adapt after English copy direction is approved. |
| v2 copy | Later | `src/pages/v2/**`, `src/components/v2/**`, `src/lib/v2*.ts` | V2 has unrelated in-progress design work. Do not mix with the production copy pass unless Jason asks. |
| Blog post rewrites | Later | `src/content/blog/**` | Release notes may keep historical voice unless a specific post is selected. |
| Resource article rewrites | Later | `src/content/resources/**` | Detail docs should be audited after the Resources index direction is approved. |
| Legal pages | Later | `src/pages/privacy.astro`, `src/pages/terms.astro` | Only edit legal/privacy wording with explicit approval and careful fact checks. |

## Next Grill Question

SEO/social metadata mechanics, title-pattern cleanup, and detail-page hreflang
mapping are implemented. Next decision: whether to do a Portuguese metadata
pass now or leave it for the broader Portuguese copy pass.
