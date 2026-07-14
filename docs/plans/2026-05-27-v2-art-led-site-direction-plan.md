# V2 Art-Led Site Direction Plan

## Overview

Make the v2 site feel like an official Mythic field guide with a working app inside it.

Keep the current v2 hero direction and store banner. Redesign the rest around full Jorge Munoz art, sparse product proof, and calmer copy.

## Current Decisions

- Keep the current `/v2/` hero direction: phone screen, strong app presence, refined visual system.
- Keep the store banner pattern.
- Treat the existing Benefits, Product Rhythm, and repeated screenshot sections as replaceable.
- Use full illustrations as section structure, not small stamps.
- Use screenshots only when they prove a concrete app capability.
- Keep `/v2/apps/` as the detailed decision page.
- Keep v2 preview routes `noindex` until cutover.

## Visual Thesis

Premium solo-RPG companion site: ink, paper, bold illustrated plates, precise app UI proof, and quiet space between moments.

The visitor should feel:

- This is Mythic, not a generic productivity app.
- The app supports imagination instead of replacing it.
- The product is official, mature, useful, and made by someone who plays.

## What The Site Represents

### Primary Story

Mythic GME Apps help you ask questions, interpret answers, and keep a solo or GM-less game moving.

The site should represent the app as:

- A trusted digital companion for the Mythic GME.
- A practical table tool, not an AI narrator.
- A bridge between the book, the journal, and the flow of play.
- A living product family, currently centered on Mythic.

### Secondary Story

Jason Holt Digital builds careful digital tools for tabletop play.

This should stay quieter than Mythic on the homepage, then become clearer on About, Blog, and Support.

## What The Site Should Avoid

- Generic SaaS feature-card grids.
- Reusing the same app screenshots as every section's visual anchor.
- Heavy future-product marketing before those products are public.
- Long explanatory copy where a strong image and one sentence can do the job.
- Showing "V2" in user-facing copy.
- Making the art decorative only.

## Asset Pool

Expanded source art copied into:

`public/v2/assets/mythic-art/`

Source folder:

`/Users/jholt/development/jhd-business/mythicgme2e/assets/images`

### Strong Hero Or Poster Candidates

- `image_eye.jpg` - dramatic threat, strong vertical poster.
- `images_torch.jpg` - classic fantasy, quiet discovery.
- `image_space_heroes.jpg` - broad genre promise.
- `image_astronaut_city.jpg` - current v2 hero energy.
- `superheroart.png` - app/product branded promo image.

### Vertical Chapter Plates

- `image_eye.jpg`
- `images_torch.jpg`
- `image_sword_grip.jpg`
- `image_adventurer_statue.jpg`
- `image_space_portrait.jpg`
- `image_forest_axe.jpg`
- `image_survivalist_knife.jpg`
- `image_viking_bats.jpg`
- `image_spider_creature.jpg`

### Wide Section Resets

- `image_spiderbot_ruins.jpg`
- `image_survivor_van.jpg`
- `image_scifi_crew.jpg`
- `image_shadow_escape.jpg`
- `image_temple_hilltop.jpg`
- `image_robot_boxing.jpg`
- `image_noir_street.jpg`
- `image_bear_warrior.jpg`

### Small Accent Or Genre Notes

- `image_frog_traveler.jpg`
- `image_terror_bird.jpg`
- `image_dogman_subway.jpg`
- `image_biker_raider.jpg`
- `image_ogre_battle.jpg`
- `image_monster_battle.jpg`
- `image_creature_tank.jpg`
- `image_scientist_monitor.jpg`

### Crop / Readiness Notes

- Replace current `art-10.png` usage with `mythic-art/image_combat_grapple.jpg` if that scene is needed.
- Source assets look cleaner than the current v2 subset.
- Some source art is already intentionally cropped; classify by use rather than forcing every image into a full-bleed role.
- Before final production use, optimize large assets and decide whether to keep them in `public/` or migrate selected files to `src/assets` with `astro:assets`.

## Homepage Direction

### 1. Hero

Keep the current direction.

Job: make Mythic GME Apps unmistakable.

Visual: phone screen plus bold illustrated world.

CTA: App Store / Google Play / desktop links through current store menu.

### 2. Store Banner

Keep the current direction.

Job: convert quickly for visitors who already know what they want.

Visual: compact, confident, utilitarian.

### 3. Ask, Interpret, Record

Replace Benefits.

Job: explain the core play loop in one memorable section.

Visual: three full-height chapter plates, each tied to one app action:

- Ask Fate Questions.
- Interpret Meaning Tables.
- Record scenes and threads.

Copy: one short sentence per action.

### 4. The App Stays Close To Play

Replace repeated screenshot grids.

Job: prove the product is real and useful.

Visual: one mobile screenshot and one desktop screenshot, placed against a calmer illustrated field.

Copy: practical, not promotional.

### 5. Many Genres, One Emulator

New section.

Job: show Mythic's genre range without explaining it in paragraphs.

Visual: art wall or controlled editorial grid using sci-fi, fantasy, horror, noir, survival, and weird adventure images.

Copy: short bridge to resources or apps.

### 6. Learn The Rhythm

Replace Product Rhythm if needed.

Job: guide new players from curiosity to first session.

Visual: quieter wide image plus resource links.

Links:

- Getting started.
- Meaning Tables.
- Adventure Journals.
- Support.

### 7. Final CTA

Job: convert without noise.

Visual: one strong illustration, one app device, direct store buttons.

Copy: one confident sentence.

## Apps Page Direction

Purpose: decision page, not a second homepage.

Sections:

- Available now: Mythic GME Mobile and Mythic GME Digital.
- Which one should I get?
- Mobile detail: phone-first, table-side use.
- Desktop detail: workspace, journaling, prepared sessions.
- Official books and source material.
- Support, release notes, and roadmap restraint.

Visual rule: screenshots can be more frequent here because this page is for product comparison.

## Resources Direction

Purpose: docs hub.

Sections:

- Search and featured guides.
- Start playing.
- Use the app better.
- Manage journals and adventures.
- Troubleshooting and support handoff.

Visual rule: calmer art, more whitespace, less spectacle.

## Blog Direction

Purpose: product journal and maker notes.

Sections:

- Latest post feature.
- Categories.
- Release notes.
- Design notes.

Visual rule: editorial layouts, fewer app screenshots, stronger typography.

## About Direction

Purpose: trust and authorship.

Sections:

- Jason Holt Digital and why these tools exist.
- Official partnership / licensing context.
- Word Mill Creative relationship.
- What is being built next, lightly.

Visual rule: human, restrained, less product-sales energy.

## Interaction Thesis

- Hero: subtle image drift and confident app entrance.
- Section plates: slow reveal or depth on scroll, no busy carousel.
- Art vocabulary: hover/focus zoom only when it clarifies the image.
- Navigation and store interactions stay fast and practical.

## Implementation Plan

### Phase 1: Asset Readiness

- Keep expanded images in `public/v2/assets/mythic-art/` during exploration.
- Create an asset manifest with intended use, crop notes, and alt guidance.
- Optimize selected production images before final homepage integration.
- Remove unused exploratory assets before cutover if bundle/public size becomes an issue.

### Phase 2: Homepage Redesign

- Preserve current hero and store banner.
- Replace Benefits with the "Ask, Interpret, Record" chapter-plate section.
- Replace Product Rhythm with one calmer learning/resources section.
- Add genre-range art wall.
- Reduce screenshot reuse to one proof section.

### Phase 3: Apps Page Tightening

- Keep Apps in nav.
- Let Apps carry product comparison and screenshots.
- Use art as pacing and atmosphere, not as a second homepage.
- Keep future products restrained until public.

### Phase 4: Hidden / Detail Page Pass

- About, Privacy, Terms: match refined visual system without over-arting legal copy.
- Blog detail and category: editorial styling.
- Resource detail: docs-first, readable, art as opener or small cadence.

### Phase 5: QA

- `npx astro check`
- `npm run build`
- Browser QA desktop and mobile:
  - `/v2/`
  - `/v2/art-lab/`
  - `/v2/apps/`
  - `/v2/resources/`
  - `/v2/blog/`
  - `/v2/support/`
- Check contrast on every text-over-image section.
- Check image focal points at mobile and desktop widths.
- Check no repeated screenshot fatigue on the homepage.

## Open Questions

- Should the homepage use one dominant genre, or should it deliberately show Mythic's genre range?
- How much of the source art can ship before final optimization?
- Do we want an explicit art credit section, or keep credits in footer/About?
- Should future products remain absent from the homepage until they have art/product proof?

