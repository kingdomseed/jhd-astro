# Apps Page Flow Inventory

Last updated: 2026-05-27

This is an inventory of the current production English Apps page. It records the
page flow before rewriting so we can decide what each section is supposed to do.

Scope note: this pass is copy refinement only. Section order, section removal,
new sections, and v2 page strategy belong to the v2 website work or a later
structural pass. Portuguese copy should be adapted after the English direction
is approved.

## Source Files

- Route: `src/pages/apps.astro`
- Page assembly, page metadata, and English/PT copy: `src/components/pages/AppsPage.astro`
- App product sections: `src/components/apps/AppSection.astro`
- Product feature card: `src/components/apps/FeatureCard.astro`
- Official content card: `src/components/apps/OfficialContent.astro`
- Store link card: `src/components/apps/StoreLinks.astro`
- Shared layout/header/footer: `src/layouts/BaseLayout.astro`,
  `src/components/layout/Header.astro`, `src/components/layout/Footer.astro`

## Current Page Order

| Order | Surface | Current copy / content | Current job | Flow notes |
| --- | --- | --- | --- | --- |
| 0 | Metadata | Title: "Apps - Mythic GME 2e Companions | Jason Holt Digital"; description: "Compare the official Mythic GME 2e apps for mobile and desktop, see what each version includes, and download on your platform."; OG description: "Official Mythic GME 2e apps for mobile and desktop, built to keep your tools close while you play." | Search/social first impression. | Approved. Keeps SEO utility while reducing repetition and adding a light player-outcome line. |
| 1 | Page header | Title: "Mythic GME Apps"; subtitle: "Mobile & Desktop, with you wherever you play."; description: "Official Mythic GME 2e apps for keeping the tools of play close at hand." | Orient visitors to the Apps page and establish official status. | Approved. Keeps the practical title/subtitle and sharpens the description. |
| 2 | Mobile app section | Badge: "Mobile App"; title: "Mythic GME Mobile"; lead: "Solo role-players who want less lookup and more story wherever they play."; detail headings: "What it does", "Official content", "Download now". | Present the mobile app as the portable play surface. | Approved. The lead keeps the existing idea and smooths the ending. |
| 3 | Mobile features | Fate Questions with Fate Chart/Fate Check, Fate Question-first flow, Characters/Threads/Features/Scenes, Adventure Log, Custom Tables, saved dice formulas, accessibility modes. | Explain the mobile feature set. | Approved. Uses canonical casing and shifts bullets toward player actions. Keep `Scenes` here unless a later precision pass chooses `Scene Summary`. |
| 4 | Mobile official content and unlocks | 50 core Mythic GME 2e tables, 160+ Expanded Features tables, Random Event and Prepared Adventure Event Focus tables, major-release content updates, and permanent paid unlocks. | Build trust around official content and pricing. | Approved. Uses clearer table language and explains paid unlocks directly without `IAP`, `pro features`, or the Working Copy comparison. |
| 5 | Adventure Crafter divider | Badge: "Coming Soon"; title: "Adventure Crafter"; lead: "A future companion app for creating adventures with guided prompts, hooks, and twists." | Tease the next app/product. | Approved. Keeps the teaser concrete without overpromising dates or launch details. |
| 6 | Desktop app section | Badge: "Desktop App"; title: "Mythic GME Digital"; lead: "Windows, macOS, and Linux players who want more room for longer Mythic sessions."; detail headings: "What it does", "Official content", "Availability". | Present desktop as the long-session play surface. | Approved. Keeps platform clarity and makes the desktop reason more player-facing than `layout`. |
| 7 | Desktop features | All Mythic GME Mobile features and systems on desktop, arrange Panels, undo many actions, search Help Center, keep multiple tools visible, everything included up front. | Explain the desktop feature set and pricing. | Approved. Keeps practical benefits, uses `Panels`, and avoids overclaiming with `any action`. |
| 8 | Desktop official content and disclaimer | Official Mythic content for desktop play, tables and features unlocked up front, no subscriptions, and a Mac App Store bundle note. | Clarify content scope and purchase model. | Approved. Uses plain official-content language instead of `Mythic-verse` in this spot and avoids a direct no-IAP claim that would conflict with the Mac App Store note. |
| 9 | Books section | Badge: "Source Books"; title: "Get the Original Books"; lead: "The apps are companions to the official Mythic books by Tana Pigeon."; cards for Mythic GME 2e and Adventure Crafter. | Send players to the source books. | Approved. Makes the section about source books rather than only physical books and clarifies that the apps are companions, not replacements. |
| 10 | Additional Info cards | Privacy & Permissions, Updates & Roadmap, Support & Community, Community-Driven; last updated May 27, 2026. | Answer trust, roadmap, support, and feedback questions near the bottom. | Approved. Removes the unsupported 60% claim, clarifies support/feedback paths, and updates the English last-updated date for this copy pass. |
| 11 | Open Source section | Badge: "Open Source"; title: "Open source tools behind the apps"; short intro; cards for `icloud_storage_plus` and `mythic_dice_parser`. | Show concrete engineering work and invite technical contribution. | Approved. Keeps the proof concrete while making the language plainer and less abstract. |
| 12 | Footer | Standard footer with feature request, site links, community links, and legal links. | Final navigation and support paths. | Already reviewed in the homepage pass and should not be reopened unless page-specific wording breaks. |

## Current Flow In Plain English

The Apps page currently says:

1. These are licensed Mythic companion apps for mobile and desktop.
2. Mythic GME Mobile helps solo role-players keep story moving anywhere.
3. The mobile app includes core Mythic tools, official content, custom tools,
   accessibility options, and permanent unlocks.
4. Adventure Crafter is coming later.
5. Mythic GME Digital is the desktop version for longer sessions.
6. The desktop app includes desktop layout controls, undo, help, official
   content, and a different purchase model depending on store.
7. Players can buy the original books from DriveThruRPG.
8. Players can find privacy, roadmap, support, feedback, and open source links.

## What Already Works

- The page is product-first and practical.
- Mobile and desktop are clearly separated.
- Store links are close to the relevant product copy.
- The page already establishes that the apps are official/licensed.
- The page includes the source books, which supports the broader Mythic
  ecosystem without making Jason the center of the page.
- The page gives concrete support, feedback, and open source paths.

## Copy Tensions To Resolve Before Rewriting

- The page header is clear but does not yet express the player outcome as
  strongly as the homepage: keep Mythic ready to play in one place without
  pulling attention away from the story.
- Some feature bullets need canonical term casing or wording: `Adventure Log`,
  `Custom Tables`, `Meaning Tables`, `Fate Question`, `Fate Chart`, and
  `Fate Check`.
- The mobile section is strong enough that we may only need small sharpening.
  The desktop section may need a slightly clearer player reason beyond
  "layout."
- The official-content lists are valuable but dense. We should decide how much
  exact table-count detail belongs in top-level marketing copy.
- The mobile unlock paragraph sounds internal because it uses `IAP`, `pro
  features`, and a comparison to Working Copy.
- `Mythic-verse` is now a glossary term for Mythic Magazines, Mythic
  Variations, and other Mythic books, but it may still be less clear than naming
  official Mythic content directly in top-level app copy.
- The "More than 60%" community claim is precise enough to need evidence. If we
  cannot back it cleanly, replace it with a qualitative line about Discord,
  email, and the feedback board.
- The "Last updated" date is old for a page we are actively changing. Either
  update it as part of the final Apps copy pass or decide whether this date
  should remain on the page.

## Suggested Review Order

1. Metadata and page header.
2. Mobile app lead and feature bullets.
3. Mobile official content, unlocks, and store labels.
4. Adventure Crafter divider.
5. Desktop app lead and feature bullets.
6. Desktop official content, disclaimer, and store labels.
7. Books section.
8. Additional Info cards and last-updated line.
9. Open Source section.

## Section Review Decisions

| Section | Status | Decision |
| --- | --- | --- |
| Metadata and page header | Done | Keep title, subtitle, and OG title. Refine metadata and header descriptions to keep SEO continuity while adding a light player-outcome line. |
| Mobile app lead and features | Done | Keep title. Smooth the lead and revise feature bullets around player actions, canonical term casing, and clearer accessibility wording. |
| Mobile official content and unlocks | Done | Keep heading and store labels. Refine official-content details for readability and replace internal pricing language with plain permanent-unlock wording. |
| Adventure Crafter divider | Done | Keep badge and title. Replace generic `Stay tuned` language with a concrete future companion-app description. |
| Desktop app lead and features | Done | Keep title. Rewrite lead around room for longer Mythic sessions and revise feature bullets around Panels, guidance, visible tools, and no subscriptions. |
| Desktop official content and disclaimer | Done | Use plain official-content wording, keep purchase-model clarity, and preserve the Mac App Store bundle note. |
| Books section | Done | Use `Source Books`, keep the title and DriveThruRPG buttons, and make the lead/card descriptions more specific without overselling the books. |
| Additional Info cards | Done | Remove the 60% claim, keep privacy/support/roadmap paths clear, and update the English last-updated date to May 27, 2026. |
| Open Source section | Done | Keep badge and project links. Make heading/intro plainer and tighten the repository descriptions. |

## Current Apps Page Pass Result

Apps page copy refinement is complete for the production English pass.

No sections were moved, removed, or added. The approved changes refined metadata
descriptions, page header description, mobile and desktop product copy, official
content language, purchase-model notes, Adventure Crafter teaser copy, source
book copy, additional info cards, the last-updated date, and the Open Source
section.

## Next Step

Move to the Resources index inventory and review its copy section by section.

## Next Grill Question

Start with the Apps page metadata and header:

Should this page header stay mostly practical and comparison-oriented, or should
it more directly echo the homepage promise that the apps make Mythic ready to
play across mobile and desktop?
