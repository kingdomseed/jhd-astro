# Blog And Release Notes Flow Inventory

Last updated: 2026-05-28

This inventory starts the full Blog and release-note copy pass. It is separate
from the completed top-level page copy pass and from Resource article rewrites.

## Scope

- Blog collection source: `src/content/blog/*.md`
- English blog index/detail routes: `src/pages/blog/index.astro` and
  `src/pages/blog/[slug].astro`
- Portuguese blog index/detail routes: `src/pages/pt/blog/index.astro` and
  `src/pages/pt/blog/[slug].astro`
- Current app source checks: `/Users/jholt/development/jhd-business/mythicgme2e`

Resource article body rewrites are out of scope for this pass. They require
Patrol or equivalent app navigation before rewriting because they document real
workflows.

## Inventory Summary

- Total published Markdown posts: 56
- English posts: 28
- Portuguese posts: 28
- EN/PT pairing: complete; no unpaired posts found
- Release Notes: 46 files, 23 EN and 23 PT
- Non-release posts: 10 files, 5 EN and 5 PT
- Categories present: Release Notes, Announcement, Community, Guides

The English route treats posts with `lang: "en"` or no `lang` as English.
Several older English posts rely on the default `lang` behavior rather than an
explicit `lang: "en"`. That works today, but it is less tidy than the newer
posts.

## Current Blog Page Flow

| Surface | Current job | Copy notes |
| --- | --- | --- |
| Blog index metadata | Positions the blog as release notes, updates, guides, and behind-the-scenes notes. | Recently improved during SEO/social pass. No need to reopen unless the post pass changes the blog's role. |
| Page header | Says: release notes first, occasional design/development/community notes. | This matches the current collection: mostly release notes with a few supporting posts. |
| Featured post | Shows newest English post by date. | Any bad frontmatter date can affect the featured post. |
| Recent posts | Lists all English posts with category filters. | Release-note summaries and titles are very visible here. |
| Detail page | Uses the post title/summary as page header, metadata, OG title/description, and share text. | Frontmatter copy matters as much as body copy. |
| PT routes | Mirror the EN collection via paired `-pt` entries. | Adapt PT after English decisions, not before. |

## App Source Checks

- Current app version in `mythicgme2e/pubspec.yaml`: `1.6.4+1117`.
- App changelog says v1.6.0 shipped in April 2026, followed by 1.6.1, 1.6.2,
  1.6.3, and 1.6.4 notes.
- Current app/changelog language treats Progress Tracks, Hybrid Play, Discovery
  Checks, Keyed Scenes, bundled table translations, Custom Table editing polish,
  Focus Mode, chronological order, and reliability fixes as shipped.
- Current legal/privacy copy says analytics is PostHog-only and Firebase/GA4 is
  not an active provider.
- Current public site copy prefers `Expanded Features` and `one-time unlock`
  rather than `Premium`, `Pro`, or raw `IAP`.

## Rewrite Rules For This Pass

- Treat release notes as historical records, not marketing pages. Preserve what
  actually shipped in that version.
- Approved archival rule: release notes should stay historically honest, but
  they are not frozen in old terminology. Preserve what shipped in each version,
  and rewrite confusing current-facing terms when they conflict with today's
  public language.
- If a historical implementation detail matters, add a short `At the time...`
  note rather than letting stale wording look current.
- Rewrite English first. Portuguese posts should be adapted from the approved
  English result, with natural Brazilian Portuguese and the existing PT glossary.
- Keep release notes practical: what changed, what it means for players, and
  what to know before updating.
- Use approved public terms: player, Mythic GME Mobile, Mythic GME Digital,
  Adventure Log, Journals, Custom Tables, Meaning Tables, Event Focus, Expanded
  Features, one-time unlock.
- Avoid internal wording in public posts unless it is genuinely useful:
  implementation class names, raw architecture notes, CI internals, Sentry issue
  codes, Firebase as current provider, `IAP`, `Premium`, `Pro`, and vague
  promises such as `coming soon` after the feature has shipped.
- Keep technical details when the post is intentionally technical, but translate
  them into player-facing impact first.

## English Post Inventory

| Date | Type | File | Current job | Rewrite treatment |
| --- | --- | --- | --- | --- |
| 2024-10-05 | Beta RN | `beta-build-07-release-notes-2024-10-05.md` | Early beta foundations: stability, theming, core UX. | Done for narrow archive pass. Preserves beta context and removes timeline drift. |
| 2024-10-15 | Beta RN | `beta-build-08-release-notes-2024-10-15.md` | Fate view redesign, Lists/Journals, Create/Load. | Done for narrow archive pass. Preserves beta context and removes future-facing placeholder wording. |
| 2024-10-24 | Beta RN | `beta-build-18-release-notes-2024-10-24.md` | Create/Load consolidation, Fate fixes, Lists/Scenes. | Done for narrow archive pass. Fresh-install and pending-work notes are framed as beta history. |
| 2024-11-01 | Beta RN | `beta-build-22-release-notes-2024-11-01.md` | Final beta, Chaos Factor, Dice Roller, Journal Manager. | Done. Uses generic release crash-reporting language and keeps the final-beta note concise. |
| 2024-11-04 | RC RN | `rc-1-2024-11-04-accessibility-dice.md` | Release candidate accessibility, dice core, storage hardening. | Done for narrow archive pass. Release-candidate timing and known-issue wording are historical. |
| 2024-11-05 | Beta RN | `beta-build-34-release-notes-2024-11-05.md` | Privacy, stability, dice roller, known issues. | Done for narrow archive pass. Rollout and known-issue timing are historical. |
| 2024-11-07 | Beta RN | `beta-build-36-release-notes-2024-11-07.md` | Accessibility/readability, saves, UI polish. | Done for narrow archive pass. Posting schedule is historical. |
| 2024-11-08 | Beta RN | `beta-build-38-release-notes-2024-11-08.md` | Navigation refresh, faster scenes, text scaling. | Done for narrow archive pass. No stale current-facing issue found. |
| 2024-11-09 | Beta RN | `beta-build-39-release-notes-2024-11-09.md` | Gameplay logging, Fate UI, accessible controls. | Done for narrow archive pass. Preserved archive style; no stale current-facing issue found. |
| 2024-11-10 | Beta RN | `beta-build-40-release-notes-2024-11-10.md` | Cleanup update before release. | Done for narrow archive pass. No stale current-facing issue found. |
| 2024-11-12 | Release RN | `rn-1-2-5-2024-11-12-dice-validation.md` | App relaunch, dice validation, Journal safety, support. | Done for narrow archive pass. Pre-launch wording is historical. |
| 2024-12-19 | Release RN | `rn-1-4-0-2024-12-19-premium-qol.md` | Expanded Features launch, table additions, QoL. | Done. Uses current public purchase terminology while preserving the historical 12-month unlock model. |
| 2025-03-10 | Guide | `guides-2025-03-10-advanced-dice-roller.md` | Dice notation reference adapted from Dart Dice Parser docs. | Later, app-verified. Treat with the resource/procedural article pass rather than the release-note cleanup pass. |
| 2025-03-20 | Release RN | `rn-1-4-5-2025-03-03-portuguese-icloud.md` | Portuguese, iCloud rebuild, MM49, platform fixes. | Done. Date aligned with the Mythic app repo changelog; release line and PT date normalized. |
| 2025-03-24 | Release RN | `rn-1-4-6-2025-03-24-nav-localization.md` | Navigation, localization, launcher URL, stability. | Done. English and Portuguese bodies are split into paired posts. |
| 2025-03-26 | Announcement | `announce-2025-03-26-drm-free-desktop.md` | Mythic GME Digital DRM-free desktop release. | Done. Uses current Word Mill Creative attribution and avoids stale roadmap/purchase promises. |
| 2025-08-11 | Release RN | `rn-1-5-0-2025-08-11-dice-roller.md` | Random Events, Dice Roller 2.0, Custom Tables, localization. | Done. Uses current purchase/platform wording and historical Linux timing. |
| 2025-08-22 | Announcement | `announce-2025-08-22-linux-packaging-flatpak.md` | Flatpak and portable Linux builds; AppImage/DEB/RPM discontinued. | Done. Verified current app repo still publishes portable Linux and Flatpak artifacts; copy now reflects both. |
| 2025-08-27 | Release RN | `rn-1-5-3-2025-08-27-markdown-descriptions.md` | Markdown/descriptions, Custom Tables, localization, storage. | Done. English and Portuguese bodies are split, shortened, and aligned with current privacy language. |
| 2025-09-01 | Release RN | `rn-1-5-4-2025-09-01-localization-pinned-scenes.md` | Localization, pinned scenes, backup protection. | Done. Date style normalized and broad analytics wording softened. |
| 2025-09-12 | Release RN | `rn-1-5-5-2025-09-12-speed-copy.md` | Faster Fate Chart, copy log entries, UI polish. | Done. Date style normalized and public copy uses `Adventure Log`. |
| 2025-09-16 | Community | `announce-2025-09-16-feature-requests-roadmap.md` | Feature request board and roadmap. | Done. Time-specific request counts and roadmap timing are historical. |
| 2025-11-03 | Announcement | `blog-launched-future-mythic-apps.md` | Blog launch and future direction. | Done. Git history confirms the date; frontmatter now uses ISO `2025-11-03` and copy is framed as a historical snapshot. |
| 2026-01-07 | Release RN | `rn-1-5-8-2026-01-07.md` | 60+ tables, Fate Chart, docs, Prepared Adventure, layouts, Undo. | Done. Uses current Expanded Features language. |
| 2026-02-15 | Release RN | `rn-1-5-9-2026-02-15.md` | Narrative Log Entries, Crafter table packs, achievements, backups. | Done. Purchase countdown language uses current Expanded Features terms. |
| 2026-02-16 | Release RN | `rn-1-5-10-2026-02-16.md` | Game services and Android fixes. | Done. Date style normalized and public copy uses `Adventure Log`. |
| 2026-03-23 | Release RN | `rn-1-5-13-2026-03-23.md` | Performance, Dice Parser v8, iCloud hardening. | Done. Uses current Expanded Features wording and historical v1.6 timing. |
| 2026-03-25 | Release RN | `rn-1-6-0-2026-03-25.md` | Progress Tracks, Hybrid Play, Discovery Checks, Keyed Scenes, and 1.6.1-1.6.4 patch improvements. | Done. Converted from preview language to shipped 1.6.0-1.6.4 release-line notes using the Mythic app repo changelog and in-app release notes. |

## Risk And Cleanup Buckets

| Bucket | Files | Recommended handling |
| --- | --- | --- |
| Shipped-but-written-as-future | `rn-1-6-0-2026-03-25.md`, `rn-1-6-0-2026-03-25-pt.md` | Done. Converted from preview language to shipped-release language using app changelog facts through 1.6.4. |
| Purchase terminology drift | `rn-1-4-0-*`, `rn-1-5-0-*`, `rn-1-5-8-*`, `rn-1-5-9-*`, `rn-1-5-13-*` | Done. Uses `Expanded Features`, `one-time unlock`, and store-specific purchase wording. Preserves old 12-month unlock details where historically relevant. Tags in edited posts were updated to current public terms. |
| Provider/privacy drift | `beta-build-22-*`, `rn-1-5-3-*` | Done. Removes Firebase as current-facing copy and uses generic crash reporting / analytics consent language. |
| Mixed-language body content | `rn-1-4-6-2025-03-24-nav-localization.md`, `rn-1-5-3-2025-08-27-markdown-descriptions.md` | Done. English posts are English-only; PT content belongs in paired PT posts. |
| Ambiguous date | `blog-launched-future-mythic-apps.md`, `blog-launched-future-mythic-apps-pt.md` | Done. Git history confirms November 3, 2025; both posts now use ISO `2025-11-03`. |
| Old partner naming | `announce-2025-03-26-drm-free-desktop.md` | Done. Uses `Word Mill Creative LLC` in the attribution line. |
| Time-sensitive roadmap/community claims | `blog-launched-future-mythic-apps*`, `announce-2025-03-26-drm-free-desktop*`, `announce-2025-09-16-feature-requests-roadmap*` | Done. Reframed stale roadmap/future claims as historical snapshot language and points readers to current feedback paths. |

## Suggested Rewrite Order

1. Fix the currently most misleading release note: v1.6.0 EN/PT. Status: Done.
2. Clean purchase terminology across v1.4.0, v1.5.0, v1.5.8, v1.5.9, and
   v1.5.13. Status: Done.
3. Clean provider/privacy drift in Build 22 and v1.5.2-v1.5.3. Status: Done.
4. Split/clean mixed-language English posts now that paired PT posts exist.
   Status: Done for the known mixed-language posts.
5. Update announcement/community posts with stale timeline or partner wording.
   Status: Done for current known stale claims.
6. Do the older beta/RC archive cleanup as a batch. Status: Done for the narrow
   archive pass. Remaining beta/RC notes keep their archive feel, with only
   timeline, metadata, and current-facing terminology cleaned up.
7. Adapt approved English changes into PT. Status: Done for edited posts.

## Approved Decision

How archival should release notes be?

Approved answer: keep release notes historically honest, but not frozen in old
terminology. Preserve what shipped in each version, but rewrite confusing
current-facing terms (`Premium`, `IAP`, `Firebase`, `coming soon`) when they now
conflict with the site's public language. If a historical implementation detail
matters, add a short `At the time...` note rather than letting stale wording
look current.

## Approved Decision

Should Blog/release-note rewrites use one reusable structure for every release
note, or should older beta/RC notes stay shorter while major public releases get
the fuller structure?

Approved answer: use a shared structure everywhere. Older beta/RC notes may be
concise because many were compiled from Discord threads, but they should still
use the same backbone: frontmatter, release/date context, a short opening
paragraph, player-facing highlights, and added/changed/fixed sections when
useful.

## Next Grill Question

Should the dice-notation guide stay in Blog as a dated post, move to Resources,
or become both a Blog announcement and a Resource reference?

Recommended answer: move the durable dice-notation reference into Resources
during the app-verified resource article pass, then leave a short Blog post only
if there is a dated announcement or story worth preserving.
