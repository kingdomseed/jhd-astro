# Support Page Flow Inventory

Last updated: 2026-05-28

This is an inventory of the current production English Support page. It records
the page flow before rewriting so we can decide what each section is supposed
to do.

Scope note: this pass is copy refinement only. It should not change support
systems, contact form behavior, FAQ structure, pricing facts, or legal/privacy
meaning without explicit approval. Portuguese copy and v2 support pages belong
to later passes unless Jason explicitly selects them.

## Source Files

- Route, metadata, support tabs, FAQ, contact cards, form copy, and scripts:
  `src/pages/support.astro`
- Redirect-only contact route: `src/pages/contact.astro`
- Out of scope for this pass: `src/pages/pt/support.astro`,
  `src/pages/v2/support/index.astro`

## Current Page Order

| Order | Surface | Current copy / content | Current job | Flow notes |
| --- | --- | --- | --- | --- |
| 0 | Metadata | Title: "Support & Contact | Mythic GME Apps"; description: "Find support, Discord, FAQ, and contact options for Mythic GME Mobile and Mythic GME Digital." | Search/social first impression. | Approved. Keeps search/support clarity without promising fast answers. |
| 1 | Page header | Title: "Support & Contact"; subtitle: "Get help, ask questions, or send a message"; description: "Find app support, community help, FAQ answers, and direct contact options in one place." | Orient visitors to support and contact paths. | Approved. Names the actual support paths and keeps the page clear. |
| 2 | Support intro and tabs | Badge: "Support"; title: "Find the right help path"; summary: "Use Discord for community questions, email for detailed support, or browse the FAQ for common answers."; tabs: "Support & FAQ", "Contact". | Explain the page interaction and route users to support or contact. | Approved. Removes speed promise and overly casual email language. |
| 3 | How to Get Help | Discord: "Ask questions, share feedback, and talk with other Mythic players."; Email Support: "Send detailed issues, account questions, or private support requests by email." | Give immediate support paths before the FAQ. | Approved. Distinguishes community discussion from detailed/private support. |
| 4 | FAQ: General & Platforms | What are Mythic GME Mobile and Mythic GME Digital? Who makes them? Where can I get them? Worldwide? Cross-platform purchases? Need book? | Answer basic product, maker, platform, and source-book questions. | Approved. Keeps the facts but uses clearer app names, partner wording, store labels, cross-platform purchase language, and companion-to-the-book framing. |
| 5 | FAQ: Features & Data | Core features, Accessibility, Languages. | Explain main feature/data/localization scope. | Approved. Removes internal unlock labels, tightens feature terms, clarifies accessibility copy, and distinguishes official Portuguese from machine-translated Meaning Table/Event Focus localizations. |
| 6 | FAQ: Purchases, Pricing & Upgrades | Last reviewed May 27, 2026; new app listing; pricing and purchases by store; subscription; Expanded Features unlock; included today; roadmap; old app questions; cross-platform purchases. | Explain purchase model and prevent confusion. | Approved. Removes stale exact prices, uses repo-verified shipped Expanded Features, and moves remaining premium roadmap items to a subject-to-change roadmap list. |
| 7 | FAQ: Getting Help | "How do I report a bug?" answer names in-app feedback from Settings, email Support, or Discord bug reports, and asks for platform/app version/what happened. | Tell players how to report bugs. | Approved. Adds what to include and avoids relying on exact Discord channel formatting. |
| 8 | Support note | "Check Release Notes for recent fixes and known issues." | Route players to known issues/release notes. | Approved. Keeps the bridge but makes it broader and clearer. |
| 9 | Contact tab info | Get in Touch; Email Contacts; Discord Community: ask questions, share feedback, and talk with other Mythic players; Freelance / Consulting: development or consulting work outside the Mythic apps through Upwork. | Provide private contact, community, and business contact paths. | Approved. Removes the late-night bug-triage promise and makes the consulting path more clearly separate from app support. |
| 10 | Contact form | Send a Message; labels for name/email/phone/message; placeholder asks what the visitor needs help with and tells app-support requests to include platform and app version; submit: "Send Message"; success says Jason will reply as soon as he can; error says to try again or email Jason directly. | Let visitors send a message. | Approved. Removes the 2-business-day promise, makes the form work better for app support, and cuts the overly cute error tone. |

## Current Flow In Plain English

The Support page currently says:

1. This is where players get help or contact Jason.
2. Use Discord for community support or email for detailed issues.
3. The FAQ explains what the apps are, who makes them, where to get them, and
   how purchases work.
4. The FAQ also explains features, accessibility, localization, pricing,
   upgrades, bug reporting, and known issues.
5. The Contact tab gives email addresses, Discord, Upwork, and a contact form.

## What Already Works

- The page has clear support and contact routes.
- The tab structure separates support/FAQ from direct contact.
- FAQ categories are practical and answer real player concerns.
- Pricing and cross-platform purchase questions are present, which supports
  trust.
- The form has basic success/error states and a security challenge.

## Resolved Copy Tensions

- Removed speed-first support promises such as `Get help fast`.
- Replaced casual support language with clearer Discord, email, FAQ, and contact
  paths.
- Kept app support, community discussion, and consulting contact paths distinct
  without moving sections.
- Avoided stale exact prices and kept date-sensitive purchase copy framed by
  store model instead.
- Reframed the book FAQ as a companion-to-the-book answer rather than a
  defensive requirement.
- Removed internal or rough terms such as `IAP REQUIRED`, `and a lot more`,
  `Pre-made`, `we include`, and `entire Mythic timeline`.
- Distinguished official Brazilian Portuguese from machine-translated Meaning
  Table and Event Focus table localizations.
- Removed the two-business-day form promise and replaced it with a sustainable
  reply promise.

## Suggested Review Order

1. Metadata and page header.
2. Support intro, tabs, and immediate help cards.
3. General & Platforms FAQ.
4. Features & Data FAQ.
5. Purchases, Pricing & Upgrades FAQ.
6. Getting Help FAQ and release-notes note.
7. Contact tab info cards.
8. Contact form labels, placeholders, success, and error copy.

## Section Review Decisions

| Section | Status | Decision |
| --- | --- | --- |
| Metadata and page header | Done | Keep `Support & Contact`, remove speed promises, and name support, Discord, FAQ, and contact paths clearly. |
| Support intro and help cards | Done | Clarify Discord vs email support, remove speed promises, and make support paths more sustainable. |
| General & Platforms FAQ | Done | Clarify official app description, maker/partner wording, platform list, cross-platform purchases, and companion-to-the-book language. |
| Features & Data FAQ | Done | Tighten feature terms, remove `IAP REQUIRED` from feature lists, clarify accessibility copy, and update localization wording. |
| Purchases, Pricing & Upgrades FAQ | Done | Remove stale exact prices, explain store purchase models, clarify the 12-month unlock window, list shipped Expanded Features, and update roadmap items from the app repo. |
| Getting Help FAQ and support note | Done | Add what to include in bug reports and polish the release-notes bridge. |
| Contact tab info cards | Done | Separate app support/community/business contact tone without moving sections. |
| Contact form copy | Done | Clarify placeholder and response-time promise. |

## Current Status

Support page copy refinement is complete for the production English pass. Do
not reopen this page unless Jason explicitly asks. Use
`docs/copy/site-copy-tracker.md` for the current outstanding copy list.
