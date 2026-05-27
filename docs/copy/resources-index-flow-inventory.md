# Resources Index Flow Inventory

Last updated: 2026-05-27

This is an inventory of the current production English Resources index. It
records the page flow before rewriting so we can decide what each section is
supposed to do.

Scope note: this pass is copy refinement for the Resources index only. Resource
article bodies, Portuguese copy, and v2 resources pages belong to later passes
unless Jason explicitly selects them.

## Source Files

- Route, metadata, section copy, search copy, and support CTA:
  `src/pages/resources/index.astro`
- Resource card titles and summaries: `src/content/resources/*.md`
- Resource detail route, not in scope for this index pass:
  `src/pages/resources/[slug].astro`

## Current Page Order

| Order | Surface | Current copy / content | Current job | Flow notes |
| --- | --- | --- | --- | --- |
| 0 | Metadata | Title: "Resources - Guides & Docs for Mythic GME 2e Apps"; description: "Guides for Mythic Apps: onboarding, dice formulas, custom tables, schema references, and troubleshooting." | Search/social first impression. | Clear and practical. Could be slightly more consistent with the site's `Mythic GME 2e apps` phrasing. |
| 1 | Page header | Title: "Guides & Documentation"; subtitle: "Learn, create, and troubleshoot"; description: "Task-focused guides for every Mythic tool: onboarding, journals, dice, custom tables, and schema references." | Tell players what kind of help lives here. | Useful, but `every Mythic tool` is too broad because this page is about the apps and their docs, not every Mythic tool in the broader ecosystem. |
| 2 | Search | Placeholder: "Search resources..."; hint: "Press / to focus"; result label: "Search results"; empty state: "No matches found"; status: "results found" or "No results found". | Help players find a specific guide quickly. | Mostly fine. Search copy is utilitarian and should not be overworked. |
| 3 | Start Here | Badge: "Start Here"; title: "Get Up and Running Quickly"; description: "Install the apps, learn the workspace, and get comfortable with the Mythic flow." | Onboard new players into app basics. | `workspace` conflicts with the glossary preference for `Playspace` or more direct app language. `Mythic flow` may be okay but can be clearer as actual play. |
| 4 | Start Here cards | Getting Started with the Mythic Apps; Setting Up and Using Lists; Writing and Organizing Scenes; Using Meaning Tables for Inspiration; Setting Up a Prepared Adventure in Mythic GME Digital. | Offer the first learning path. | Several summaries use good canonical terms. `Scenes` may need a precision check against `Scene Summary`, but public guide titles may stay broad. |
| 5 | Adventure Journals | Badge: "Journals"; title: "Share and Safeguard Your Journals"; description: "Capture stories, share exports, and fix issues fast when something feels off." | Explain Journal-related guides. | Strong section job. `Capture stories` is a little softer than the app's actual record/export/support work. |
| 6 | Adventure Journals cards | A Guide to the Mythic Journals; Sharing Adventure Journals; Troubleshooting. | Help players understand, export, and troubleshoot Journals. | `Mythic Journals` is probably acceptable in titles. Summaries should distinguish Journal, Adventure Log, and Log Entries when precision matters. |
| 7 | Dice Roller | Badge: "Dice"; title: "Master the Dice Roller Toolkit"; description: "Roll smarter with presets, custom formulas, and portable collections." | Group dice-roller guides. | "Master" and "smarter" have a marketing/tutorial tone. The content is useful but could be more plainspoken. |
| 8 | Dice Roller cards | Getting Started with the Dice Roller; Saving and Managing Dice Formulas; Dice Formulas & Customization; Importing & Exporting Saved Formulas. | Help players roll, save, customize, import, and export formulas. | The visible card summaries are mostly clear. `system-agnostic dice roller` is true but less player-facing than the homepage wording. |
| 9 | Custom Tables | Badge: "Tables"; title: "Build Powerful Custom Tables"; description: "Build, organise, and share powerful tables for improvising on the fly." | Group Custom Table guides. | Uses British `organise` while the rest of the site generally uses American spelling. `powerful` repeats and feels generic. |
| 10 | Custom Tables cards | Getting Started with Custom Tables; Organizing Custom Tables; Linking & Nesting Tables; Importing & Exporting Custom Tables. | Help players create, organize, link, import, export, and share Custom Tables. | Strong category. `coming soon` in one summary may need a truth check before publishing changes. |
| 11 | Schemas & Deep Dives | Badge: "Deep Dives"; title: "Schemas & Deep Dives"; description: "Reference docs, JSON exports, and schema notes for tooling and integrations." | Separate technical/reference docs from player guides. | Clear enough. Could better connect schemas to Portable Player Data and imports/exports without making this too technical. |
| 12 | Schema cards | Journal Schema; Formula Schema; Custom Table Schema; Categories Schema. | Give technical reference paths. | Titles are plain and useful. Summaries are technical by design. |
| 13 | Support CTA | Badge: "Need Help?"; title: "Can't find what you're looking for?"; summary: "Send me a note or hop into Discord - I read every message."; buttons: "Contact Support", "Join Discord". | Give a path when docs do not answer the question. | Good human support signal. The exact "I read every message" promise is strong; keep only if it still feels accurate with current capacity. |

## Current Flow In Plain English

The Resources index currently says:

1. These are guides and documentation for the Mythic apps.
2. Search if you know what you need.
3. Start with onboarding, Lists, Scenes, Meaning Tables, and prepared
   adventures.
4. Use Journal guides to understand, export, share, and troubleshoot play data.
5. Use dice guides for formulas and saved formula files.
6. Use Custom Table guides for creating, organizing, linking, importing, and
   exporting tables.
7. Use schema references for JSON and integration work.
8. Contact support or Discord if the docs do not answer your question.

## What Already Works

- The page is practical and help-first.
- The section structure is easy to scan.
- Search is prominent.
- Resource card summaries expose useful concrete tasks.
- The Support CTA gives an obvious next path when docs are not enough.

## Copy Tensions To Resolve Before Rewriting

- `workspace` conflicts with the glossary and should probably be replaced.
- `every Mythic tool` overstates the scope; this page documents the apps and
  app-adjacent formats.
- Some headings lean generic/tutorial-marketing: "Master", "powerful",
  "smarter."
- `organise` should likely become `organize` for spelling consistency.
- Some summaries may need canonical casing or precision: `Custom Tables`,
  `Meaning Tables`, `Scene Summary`, `Adventure Log`, `Log Entries`, and
  `Saved Formulas`.
- `I read every message` is a strong support promise and should be kept only if
  it still matches the intended public commitment.

## Suggested Review Order

1. Metadata and page header.
2. Search copy.
3. Start Here section heading and description.
4. Start Here card titles/summaries.
5. Adventure Journals section and cards.
6. Dice Roller section and cards.
7. Custom Tables section and cards.
8. Schemas & Deep Dives section and cards.
9. Support CTA.

## Section Review Decisions

| Section | Status | Decision |
| --- | --- | --- |
| Metadata and page header | Pending | Start here. Keep the practical guide/docs framing, but tighten scope around the Mythic GME apps. |
| Search copy | Pending | Likely keep mostly unchanged. |
| Start Here section | Pending | Needs `workspace` replacement and possible clearer app/play language. |
| Start Here cards | Pending | Review visible card summaries only; article bodies are out of scope. |
| Adventure Journals section and cards | Pending | Review Journal/Adventure Log precision and support tone. |
| Dice Roller section and cards | Pending | Reduce generic tutorial language if needed. |
| Custom Tables section and cards | Pending | Remove repeated `powerful`, fix spelling, and check `coming soon`. |
| Schemas & Deep Dives section and cards | Pending | Keep technical clarity while linking to player-owned exports/imports where helpful. |
| Support CTA | Pending | Decide whether `I read every message` is still the right public promise. |

## Next Section

Start with Resources metadata and page header. Show the current copy, then
compare it against a recommended refinement that keeps the page practical while
scoping it to the Mythic GME apps.
