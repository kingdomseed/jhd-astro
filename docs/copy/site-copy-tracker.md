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
- The current Apps page pass is copy refinement only. Do not move, remove, or
  add sections as part of this pass.
- Work section by section in the current Apps page order.
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
| Resources index | In review | `src/pages/resources/index.astro`, `src/content/resources/*.md`, `docs/copy/resources-index-flow-inventory.md` | Review section by section in current page order. Next section: metadata and page header. |
| Support page | Pending | `src/pages/support.astro` | Needs clarity and trust. Be careful with pricing, platform, support, and legal-ish claims. |
| Header | Done | `src/components/layout/Header.astro`, `src/i18n/ui.ts` | Keep current header, CTA, mobile label, and store labels. |
| Footer | Done | `src/components/layout/Footer.astro`, `src/i18n/ui.ts` | Keep footer copy as-is. |
| SEO/social metadata beyond home | Pending | Page frontmatter/layout props outside the homepage | Review with each remaining page rather than as a separate homepage task. |

## Later Or Separate Passes

| Area | Status | Files | Notes |
| --- | --- | --- | --- |
| Portuguese copy | Later | `src/pages/pt/**`, PT entries in `src/i18n/ui.ts`, `src/content/pages/about-pt.md` | Translate/adapt after English copy direction is approved. |
| v2 copy | Later | `src/pages/v2/**`, `src/components/v2/**`, `src/lib/v2*.ts` | V2 has unrelated in-progress design work. Do not mix with the production copy pass unless Jason asks. |
| Blog post rewrites | Later | `src/content/blog/**` | Release notes may keep historical voice unless a specific post is selected. |
| Resource article rewrites | Later | `src/content/resources/**` | Detail docs should be audited after the Resources index direction is approved. |
| Legal pages | Later | `src/pages/privacy.astro`, `src/pages/terms.astro` | Only edit legal/privacy wording with explicit approval and careful fact checks. |

## Next Grill Question

With the Apps page approved, the next area is the Resources index.

Inventory the current Resources index first, then review copy section by
section without changing resource article bodies yet.
