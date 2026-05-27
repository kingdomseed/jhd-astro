# Home Page Flow Inventory

Last updated: 2026-05-27

This is an inventory of the current production English homepage. It records the
page flow before rewriting so we can decide what each section is supposed to do.

Scope note: this pass is copy refinement only. Section order, section removal,
and new section strategy belong to the v2 website work or a later structural
pass.

## Source Files

- Route and metadata: `src/pages/index.astro`
- Shared layout: `src/layouts/BaseLayout.astro`
- Header and footer: `src/components/layout/Header.astro`,
  `src/components/layout/Footer.astro`
- Official notice: `src/components/layout/UtilBar.astro`
- Home sections: `src/components/home/Hero.astro`,
  `src/components/home/Billboard.astro`,
  `src/components/home/ReviewsRotator.astro`,
  `src/components/home/CoreBenefits.astro`,
  `src/components/home/CommunitySupport.astro`,
  `src/components/home/Partners.astro`,
  `src/components/home/PopularResources.astro`,
  `src/components/home/MakersNote.astro`
- English home copy strings: `src/i18n/ui.ts`
- Review quotes: `src/data/reviews.json`

## Current Page Order

| Order | Surface | Current copy / content | Current job | Flow notes |
| --- | --- | --- | --- | --- |
| 0 | Metadata | Title: "Official Mythic GME 2e Apps — Jason Holt Digital"; description: "GM-less play at your fingertips. Official, licensed Mythic GME 2e companion apps by Jason Holt Digital. Download for mobile and desktop." | Search/social first impression. | Establishes official status and device availability. Uses the old house line before any clearer player outcome. |
| 1 | Utility bar | "OFFICIAL PARTNER" with link text "Word Mill Creative". | Immediate license/trust signal. | Good trust signal, but "partner" is less precise than licensed app language. |
| 2 | Header | Brand, Home, Apps, Resources, Blog, "Get the App" dropdown with store links. | Orientation and direct conversion path. | Strongest direct app CTA is in the header, not the hero. No Support nav item on desktop. |
| 3 | Hero | Eyebrow: "Official Mythic GME 2e Apps"; H1: "GM-less Play At Your Fingertips"; lead: "Ask Fate Questions, roll on Meaning Tables, track your scenes, and stay close to the story."; CTAs: "See the Apps", "Get Resources"; proof chips: 4.8 App Store rating, Mobile + desktop, No subscriptions. | Main positioning and first decision point. | H1 keeps the no-GM doorway for visitors who do not know Mythic. Lead and chips now give more concrete player and trust cues without fuzzy reach metrics. |
| 4 | Billboard | Screenshot carousel, alt text: "Mythic GME Digital — desktop layout showing panels and log". | Show the product exists and has real app surfaces. | Strong concrete proof. Copy is mostly hidden in labels/alt text, so it does not currently explain the product experience. |
| 5 | Reviews strip | Badge: "What players say"; title: "Player reviews"; rotating quotes from app stores, itch.io, Reddit, and Google Play. | Social proof and trust. | Good trust evidence. Quote selection is randomized, so the first quote may be weak, typo-heavy, or less strategic. |
| 6 | Benefits | Title: "Why players choose Mythic GME Apps"; cards: "Ask & Roll Fast", "Trust Official Content", "Track Your Stories", "Customize Tools". | Explain core reasons to use the apps. | Clear structure, but descriptions are mostly feature fragments. Needs stronger player outcome language. |
| 7 | Community and support | Title: "Join the community"; panels for Discord and Support & FAQ. | Move players into community/help paths. | Useful section. Current wording is generic and does not explain that Jason listens and responds there. |
| 8 | Partners | Badge: "Licensing & publishing"; title: "Get the Books"; buttons for Word Mill Creative and Retropunk. | Connect players to source books/publishers. | Helpful, but its placement interrupts the flow between support, resources, and learning. It also mixes license trust with book-buying. |
| 9 | Popular resources | Badge: "Resources"; title: "Guides for play"; four guide links. | Send players to learning material. | Good follow-up path. Heading is now less vague and more player-facing. |
| 10 | Maker's Note | Starts with "Hi, I'm Jason. I build and maintain the official Mythic GME 2e apps in partnership with Word Mill Creative..." CTA: "Read the full story". | Humanize the product and point to About. | Now focuses on Jason's active product loop and the goal of making Mythic ready to play in one place without distracting from the story. |
| 11 | Footer | Brand, feature request link, site links, social links, legal links, language switcher. | Final navigation and support paths. | Feature request link is valuable. Footer brand line repeats official status. |

## Current Flow In Plain English

The homepage currently says:

1. These are official Mythic apps.
2. You can get the app from the header.
3. The app supports GM-less play.
4. Here is a real screenshot.
5. Other players like it.
6. The apps are fast, official, organized, and customizable.
7. Join Discord or get support.
8. Buy the books from the publishing partners.
9. Read guides.
10. Jason makes the apps and listens to the community.

## What Already Works

- The page is product-first rather than portfolio-first.
- The official/license trust signal appears immediately.
- The header has a real conversion path through the app store dropdown.
- The screenshot carousel gives concrete product evidence early.
- Player reviews support trust through real third-party voices.
- Resources and support paths are easy to find.
- The maker story is present but secondary, which matches the current About
  direction.

## Flow Tensions To Resolve Before Rewriting

- The hero does not yet choose a clear first promise. It mixes official trust,
  GM-less play, resources, and stats without saying what changes for the player
  in play.
- The primary hero CTA is "Learn More" rather than a stronger product action.
- License language appears in several places. Some repetition is useful on the
  homepage, but it should not crowd out the player outcome.
- The benefit cards name features more than outcomes.
- The Maker's Note has been revised to use `Word Mill Creative` and avoid the
  less precise `shaped by what players ask for` framing.
- The Partners section may be doing two copy jobs at once: license trust and
  "get the books." For this pass, refine the wording only if it feels unclear.
- The review rotator may surface weaker quotes first because it randomizes from
  the full quote pool.
- The homepage has little explicit language about the app protecting the flow of
  play, even though that is one of the strongest context-backed product ideas.

## Suggested Rewrite Order

1. Decide the homepage's first promise.
2. Rewrite hero, metadata, and CTAs around that promise.
3. Rewrite benefits as player outcomes.
4. Refine community/support, partners, and resources teasers without changing
   their placement.
5. Rewrite Maker's Note to point to the finished About page without reopening
   About.
6. Check footer/header microcopy after the main flow is stable.

## Section Review Decisions

| Section | Status | Decision |
| --- | --- | --- |
| Utility bar | Done | Keep `OFFICIAL PARTNER`. It is less legally precise than `OFFICIALLY LICENSED`, but the partnership implication is the preferred public signal. Keep link text as `Word Mill Creative`. |
| Header | Done | Keep current copy: `Jason Holt Digital`, `Home`, `Apps`, `Resources`, `Blog`, `Get the App`, `Download Apps`, and existing store labels. The header is clear and product-first enough for this pass. |
| Hero H1 and lead | Done | Keep H1 as `GM-less Play At Your Fingertips` because it helps visitors who do not know Mythic understand the no-GM role. Change the lead to `Ask Fate Questions, roll on Meaning Tables, track your scenes, and stay close to the story.` Record `Keep Mythic play moving` in `CONTEXT.md` as a useful alternate product language direction, but do not use it as the current H1. |
| Hero CTAs | Done | Change `Learn More` to `See the Apps` because the link goes to the apps page and the label should name the action more clearly. Keep `Get Resources`. |
| Hero proof chips | Done | Replace fuzzy reach metrics with cleaner trust cues: `4.8 App Store rating`, `Mobile + desktop`, and `No subscriptions`. Avoid MAU/session/install claims in the hero unless the data is clean and the privacy posture still feels right. |
| Home metadata | Done | Keep metadata almost the same for search continuity. Only consider changing `by Jason Holt Digital` if there is a clear keyword reason. |
| Billboard | Done | Keep visible copy and controls unchanged. Refine alt text to `Mythic GME Digital — desktop layout showing panels and the Adventure Log` to use the canonical app term. |
| Reviews strip | Done | Keep `What players say` and `Player reviews`. Quote selection/randomization is outside this copy-only pass unless revisited explicitly. |
| Benefits | Done | Keep heading and card titles. Refine descriptions to emphasize player outcomes and canonical Mythic terms: Fate Questions, Fate Chart, Meaning Tables, Characters, Threads, and Adventure Log. |
| Community & Support | Done | Keep heading and titles. Refine descriptions to name the real paths: talk with Mythic players, share feedback, ask questions, find answers, report issues, or send a message. |
| Partners | Done | Keep `Licensing & publishing`, `Get the Books`, `Word Mill Creative`, and `Retropunk` as-is. The section is short, practical, and already uses the preferred public partner name. |
| Resources teaser | Done | Change heading from `Basics & Beyond` to `Guides for play`. Keep badge and guide links unchanged. |
| Maker's Note | Done | Replace the old mini-bio with a note focused on Jason's active product loop and the goal of making Mythic feel ready to play in one place without pulling attention away from the story. |
| Footer | Done | Keep footer copy as-is: `Official Mythic GME 2e Apps`, `Submit a feature request`, site links, legal links, and `Top`. It is clear and utilitarian. |

## Current Homepage Pass Result

Homepage copy refinement is complete for the production English pass.

No sections were moved, removed, or added. The approved changes refined the hero
lead, CTA label, proof chips, billboard alt text, benefits descriptions,
community/support descriptions, resources heading, and Maker's Note. Header,
utility bar, reviews strip, partners, footer, and metadata were reviewed and
kept mostly or fully unchanged.

## Next Grill Question

Move to the Apps page and review copy section by section, keeping the same
constraint: copy refinement only, no section strategy or v2 redesign decisions.
