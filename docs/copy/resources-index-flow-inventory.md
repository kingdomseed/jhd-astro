# Resources Index Flow Inventory

Last updated: 2026-05-28

This is an inventory of the current production English Resources index. It
records the page flow before rewriting so we can decide what each section is
supposed to do.

Scope note: this pass is copy refinement for the Resources index only. Resource
article bodies, Portuguese copy, and v2 resources pages belong to later passes
unless Jason explicitly selects them. Resource article body rewrites are
procedural documentation, not ordinary prose polishing; before rewriting them,
use Patrol or equivalent app navigation to verify the real in-app workflow.

## Source Files

- Route, metadata, section copy, search copy, and support CTA:
  `src/pages/resources/index.astro`
- Resource card titles and summaries: `src/content/resources/*.md`
- Resource detail route, not in scope for this index pass:
  `src/pages/resources/[slug].astro`

## Current Page Order

| Order | Surface | Current copy / content | Current job | Flow notes |
| --- | --- | --- | --- | --- |
| 0 | Metadata | Title: "Resources - Guides for Mythic GME 2e Apps"; description: "Guides for Mythic GME 2e apps: getting started, Journals, dice formulas, Custom Tables, schema references, and troubleshooting." | Search/social first impression. | Approved. Keeps practical guide/docs framing while tightening app-specific SEO language and canonical casing. |
| 1 | Page header | Title: "Guides & Documentation"; subtitle: "Learn the apps, customize your tools, and troubleshoot"; description: "Task-focused guides for Mythic GME Mobile and Mythic GME Digital: onboarding, Journals, dice formulas, Custom Tables, and schema references." | Tell players what kind of help lives here. | Approved. Keeps the practical docs framing and avoids overstating the scope as every Mythic tool. |
| 2 | Search | Placeholder: "Search guides..."; hint: "Press / to focus"; result label: "Search results"; empty state: "No matching guides"; status: "matching guides" or "No matching guides". | Help players find a specific guide quickly. | Approved. Keeps search utilitarian and aligns the microcopy with the page's guide framing. |
| 3 | Start Here | Badge: "Start Here"; title: "Get Started With the Apps"; description: "Install the apps, learn the main tools, and get comfortable using Mythic in play." | Onboard new players into app basics. | Approved. Replaces `workspace` and vague `Mythic flow` language with plain app/play wording. |
| 4 | Start Here cards | Getting Started with the Mythic Apps; Setting Up and Using Lists; Writing and Organizing Scenes; Using Meaning Tables for Inspiration; Setting Up a Prepared Adventure in Mythic GME Digital. | Offer the first learning path. | Approved. Summaries now avoid `flow through`, spell out Chaos Factor, use canonical casing, and keep the Prepared Adventure line direct. |
| 5 | Adventure Journals | Badge: "Journals"; title: "Manage Your Journals"; description: "Keep your play record clear, export your data, and find help when something goes wrong." | Explain Journal-related guides. | Approved. Keeps the section practical and less dramatic than `safeguard`. |
| 6 | Adventure Journals cards | A Guide to the Mythic Journals; Sharing Adventure Journals; Troubleshooting. | Help players understand, export, and troubleshoot Journals. | Approved. Summaries now use clearer Journal casing, less slash shorthand, and a more useful troubleshooting promise. |
| 7 | Dice Roller | Badge: "Dice"; title: "Use the Dice Roller"; description: "Create, save, import, and reuse the dice formulas you need for play." | Group dice-roller guides. | Approved. Replaces tutorial-marketing language with direct player actions. |
| 8 | Dice Roller cards | Getting Started with the Dice Roller; Saving and Managing Dice Formulas; Dice Formulas & Customization; Importing & Exporting Saved Formulas. | Help players roll, save, customize, import, and export formulas. | Approved. Summaries are more direct and preserve the useful mechanics without overexplaining. |
| 9 | Custom Tables | Badge: "Tables"; title: "Build Custom Tables"; description: "Create, organize, import, export, and share tables that fit your play." | Group Custom Table guides. | Approved. Removes repeated `powerful`, fixes spelling consistency, and keeps the section practical. |
| 10 | Custom Tables cards | Getting Started with Custom Tables; Organizing Custom Tables; Linking & Nesting Tables; Importing & Exporting Custom Tables. | Help players create, organize, link, import, export, and share Custom Tables. | Approved. Summaries now use clearer Custom Tables language and softer wording for linked/nested table functionality. |
| 11 | Schemas & Deep Dives | Badge: "Deep Dives"; title: "Schemas & Reference Docs"; description: "Technical references for the JSON formats behind Journals, Saved Formulas, Custom Tables, and categories." | Separate technical/reference docs from player guides. | Approved. Keeps the section technical while making the scope clearer and more concrete. |
| 12 | Schema cards | Journal Schema; Formula Schema; Custom Table Schema; Categories Schema. | Give technical reference paths. | Approved. Summaries are tighter and name the actual JSON/reference surfaces. |
| 13 | Support CTA | Badge: "Need Help?"; title: "Can't find what you're looking for?"; summary: "Send a support note or ask in Discord, and I'll get back to you as soon as I can."; buttons: "Contact Support", "Join Discord". | Give a path when docs do not answer the question. | Approved. Keeps the personal support signal while making the public promise more sustainable. |

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
| Metadata and page header | Done | Keep `Guides & Documentation`. Tighten metadata and header copy around the Mythic GME apps, canonical casing, and practical guide scope. |
| Search copy | Done | Use `guides` in the placeholder, accessible label, empty state, and status text. Keep the keyboard hint and dropdown label unchanged. |
| Start Here section | Done | Keep badge. Use beginner-friendly app/play wording and avoid `workspace`. |
| Start Here cards | Done | Keep titles. Refine visible summaries only for clearer terms, punctuation, and more direct player actions. |
| Adventure Journals section and cards | Done | Use a practical Journal management frame and refine visible card summaries for clearer casing, export wording, and troubleshooting value. |
| Dice Roller section and cards | Done | Use a practical Dice Roller frame and refine visible card summaries around creating, saving, importing, exporting, and reusing formulas. |
| Custom Tables section and cards | Done | Use a practical Custom Tables frame, remove repeated `powerful`, fix spelling consistency, and refine visible card summaries. |
| Schemas & Deep Dives section and cards | Done | Rename to `Schemas & Reference Docs` and tighten visible summaries around JSON/reference surfaces. |
| Support CTA | Done | Keep badge, title, and buttons. Replace `I read every message` with a sustainable response promise. |

## Current Resources Index Pass Result

Resources index copy refinement is complete for the production English pass.

No sections were moved, removed, or added. The approved changes refined
metadata, page header copy, search microcopy, section headings, section
descriptions, visible resource-card summaries, schema/reference wording, and
the support CTA.

## Current Status

Resources index copy refinement is complete for the production English pass.
Do not reopen this page unless Jason explicitly asks. Use
`docs/copy/site-copy-tracker.md` for the current outstanding copy list.

Full Resource article body rewrites should be planned separately from the Blog
rewrite pass. They need an app-grounded workflow inventory first: navigate the
current app, confirm the steps, note platform differences, then rewrite the
article from verified behavior rather than inferred product knowledge.
