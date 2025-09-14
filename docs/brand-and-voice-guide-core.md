# JHD Website Copy & Voice — Product‑First v5 (Mythic GME Hub)

> **Why this update**
>
> We’re shifting the Jason Holt Digital website to be the **official hub for Mythic GME 2e apps** (mobile + desktop). The site should feel focused, quiet, and player‑first, with a small "maker’s note" about the developer. Any employer‑facing or portfolio content becomes secondary (About/Blog), not a co‑equal goal on the homepage.

---

## 1) Executive Direction

- **Single purpose:** Convert visitors into players and community members.
- **Primary actions:** **Download**, **Join Discord**, **Get support**, **Learn the basics**.
- **Tone:** Calm confidence, craft‑forward, community‑centred. Short sentences. Minimal jargon on the homepage.
- **Structure:** Hero → Screenshot billboard → Social proof strip → 4 benefits → Community & Support → Resources teaser → Maker’s note → Footer.
- **License clarity:** Prominent, quiet **OFFICIAL LICENSEE** bar (dismissible). Link to Word Mill Creative.

---

## 2) Brand Pillars (for copy)

1. **Official** — Licensed Mythic GME 2e companion apps.
2. **Player‑first** — Speed to story: ask, roll, move on.
3. **Craft & cadence** — Small, steady improvements; quality over noise.
4. **Community‑driven** — Features shaped with players (Discord, reviews).
5. **Clear & quiet** — Friendly voice, restrained visuals, no hype.

> **House line:** *GM‑less play at your fingertips.*

---

## 3) Voice & Tone

- **Default voice:** Helpful, direct, friendly. Avoid marketing fluff. Avoid over‑explaining.
- **Pronouns:** Use **we** on product pages; use **I** in the Maker’s Note.
- **Rhythm:** Benefit → action. Keep lines scannable. One idea per sentence.
- **Technical depth:** Keep it out of the homepage. Move deep dives to **Resources/Blog**.

**Microcopy patterns**

- Buttons: **Download Now**, **Get Mobile**, **Get Desktop**, **Join Discord**, **Support & FAQ**
- Stats: **4.7★ avg rating · 5k+ installs · 2k+ community members**
- Social proof: One‑line quotes with a source and link.

---

## 3.1) Brand Typography

**Primary fonts**

- Display: Epilogue (700/800/900) — hero headlines, punchy statements, buttons/CTAs.
- Body/UI: Plus Jakarta Sans (400/500/600/700) — body copy, small headings, navigation, UI labels.

**Usage rules**

- Keep Epilogue for short, high‑impact lines. Avoid long paragraphs in Epilogue.
- Use Plus Jakarta Sans everywhere else for readability and calm tone.
- Button labels use Epilogue (heavy weight) to match the neo‑brutalist styling.
- Page titles may stay in Plus Jakarta Sans unless a page needs extra punch.

**Implementation (CSS tokens)**

- Tokens: `--font-display` = Epilogue stack; `--font-body` = Plus Jakarta Sans stack.
- Applied: `body { font: 16px/1.65 var(--font-body) }`, `.display-title { font-family: var(--font-display) }`, `.btn { font-family: var(--font-display) }`.
- Delivery: Google Fonts with `display=swap`. Consider preconnect to fonts domains if needed.

**Do**

- Keep lines short in Epilogue, increase letter‑spacing slightly if you tighten sizes.
- Use consistent weights per context (e.g., 900 for hero title, 800 for buttons).

**Don’t**

- Don’t mix Epilogue and Plus Jakarta Sans within the same sentence.
- Don’t use Epilogue for dense or lengthy body content.

---

## 4) Information Architecture (public site)

**Global nav:** Apps · Resources · Support · Blog · About

**Homepage sections (order):**

1. **Hero (centered)** — headline + subline + primary CTA(s) + stats
2. **Billboard** — single desktop screenshot
3. **Social proof strip** — compact rotator with sources
4. **Four benefits** — cards
5. **Community & Support** — Discord + FAQ panels
6. **Resources teaser** — top 3 links
7. **Maker’s Note** — short personal message
8. **Footer** — links + legal + social

**Secondary pages:**

- **Apps** (option A: dedicated landing per SKU; option B: anchored sections on one page)
- **Resources** (guides, quick starts, import/export, dice formulas)
- **Support** (FAQ + contact)
- **Blog** (release notes, behind‑the‑scenes)
- **About** (expanded maker’s note, partnership, small timeline)
- **Legal** (Privacy, Terms, License notice)

---

## 5) Homepage Copy Frameworks (drop‑in)

### 5.1 Hero

**Headline:** GM-less play at your finger tips

**Subheadline:** GM‑less play at your fingertips. The licensed companion for oracle‑style solo RPG.

**Primary CTA:** Download Now\
**Alt CTA pair:** Get Mobile · Get Desktop

**Stats row:** 4.7★ avg rating · 5k+ installs · 2k+ community members

> **Why**: Puts the license and use‑case first. Stats establish trust. Short, scannable, zero jargon.

---

### 5.2 Billboard (desktop screenshot)

**Alt text:** *Mythic GME Digital — desktop layout showing panels and log.*

**Caption (optional):** *Built for focus. Your notes, threads, and scenes in one place.*

---

### 5.3 Social Proof Strip (rotating)

Format each item: *“Quote.” — Source* (linked)\
Examples (keep one sentence each):

- “Another order of magnitude ease of use for solo RPGs.” — App Store reviewer
- “I focus more on the unfolding story than the mechanics.” — App Store reviewer
- “It’s great, I love Mythic 2e.” — Google Play reviewer
- “Very happy with my purchase!” — itch.io player
- “The Mythic app is back—better than ever.” — r/mythic\_gme

---

### 5.4 Four Benefits (cards)

1. **Faster Solo Play** — Ask, roll, move on—no lookup delay.
2. **Official Content** — Fate Chart/Check & Meaning tables.
3. **Keep the Story** — Scenes, characters, threads, logs.
4. **Make It Yours** — Custom tables & dice formulas.

> **Guideline:** Avoid feature lists on the homepage. Use verbs. Keep lines under \~9 words where possible.

---

### 5.5 Community & Support (two panels)

**Join the Community** — Tips, support, feature requests—say hi!\
Button: **Discord**

**Get Help Fast** — Quick FAQ and a simple way to contact us.\
Button: **Support & FAQ →**

---

### 5.6 Resources Teaser

- Getting Started with Mythic
- Importing & Exporting Tables
- Dice Roller Formula Guide

> **Guideline:** Three links max on the homepage. Full index on **Resources**.

---

### 5.7 Maker’s Note (about)

**Heading:** Maker’s Note\
**Body (100–130 words):**

> Hi, I’m Jason—an indie developer focused on tools that respect and amplify tabletop creativity. I build the **official Mythic GME 2e apps** in partnership with Word Mill Creative, and I ship small, steady improvements because craft matters. When players tell me a feature cut friction from their session, that’s the win. If that sounds like your kind of software, welcome.

**Button:** Read the full story →

---

## 6) Apps Pages (content model)

Use either separate pages (**/mobile**, **/desktop**) or anchors (**#mobile**, **#desktop**). Keep copy light; link out to resources for depth.

**Section order:**

1. **Who it’s for** — one sentence.
2. **What it does (benefits)** — 4 bullets max.
3. **What’s official** — licensed content, where it applies.
4. **Where to get it** — App Store / Google Play / Amazon / Microsoft / itch.io.
5. **Privacy & Permissions** — plain‑language summary + link to policy.
6. **Changelog & Roadmap** — link to blog / release notes / Trello‑style public board (optional).

**Example (Mobile):**

- *Who it’s for:* Solo role‑players who want less lookup and more story.
- *Benefits:* Quick Fate checks, Meaning prompts, smooth notes and logs, custom tables.
- *Official:* Built with the Mythic GME 2e license.
- *Stores:* Apple App Store · Google Play · Amazon Appstore.

---

## 7) Resources (documentation patterns)

**Article structure:**

- **Goal up top** — one‑line summary of the outcome.
- **Steps** — numbered, copyable steps.
- **Notes** — pitfalls, platform differences.
- **Examples** — short, tested examples.
- **Related** — two links max.

**Starter index:**

- Getting Started with Mythic
- Importing & Exporting Tables (with entry descriptions)
- Dice Roller Formula Guide (syntax + examples)
- Custom Tables 101 (categories, weights, linking)
- Troubleshooting (common warns/errors; links to Support)

---

## 8) Support (FAQ + contact)

**Top FAQ blocks:**

- Install & purchases (mobile/desktop)
- Sync/backup basics (if applicable)
- Custom tables & imports
- Known issues / Workarounds (link to current release notes)

**Contact:** Simple form or mailto with prefilled subject.

---

## 9) Blog (release notes + craft)

**Content lanes:**

- Release notes (plain‑language; highlights first; link to full changelog)
- Behind‑the‑scenes (design decisions, UX notes, community spotlights)
- Guides that didn’t fit Resources (longer reads)

> **Style:** Same quiet tone. Screenshots, short headings, tight paragraphs.

---

## 10) SEO & Metadata (practical)

**Titles**

- Home: *Jason Holt Digital — Official Mythic GME 2e Apps*
- Mobile: *Mythic GME Mobile — Official Companion App*
- Desktop: *Mythic GME Digital — Official Companion App*

**Meta description (home)**

> Official, licensed Mythic GME 2e companion apps by Jason Holt Digital. Download for mobile and desktop. Resources, support, and the story behind the craft.

**Open Graph basics**

- `og:title`: *Official Mythic GME 2e Apps — Jason Holt Digital*
- `og:description`: *GM‑less play at your fingertips. Licensed companion apps for Mythic GME 2e on mobile & desktop.*

**JSON‑LD (SoftwareApplication)**

- Name, category, supported OS, publisher. Optionally price (per store page).

**Copy hygiene**

- One H1 per page. Descriptive alt text. Avoid duplicated meta across pages.

---

## 11) Legal & License Notices

- Dismissible **OFFICIAL LICENSEE** utility bar (link to Word Mill Creative). Persist dismissal in `localStorage`.
- Footer links: Privacy · Terms · Contact. Keep short.
- License mention on About page (one sentence + link).

---

## 12) House Style Cheatsheet

- **Case:** Sentence case for headings where possible; Title Case for product names and the main H1.
- **Numbers:** Prefer numerals (e.g., 4.7★, 50k+). Keep consistent.
- **Dates:** ISO or “Aug 2025” style in release notes.
- **Links:** Underline on hover or use dotted underline in rotator.
- **Length targets:**
  - Hero headline: ≤ 5 words
  - Subheadline: ≤ 14 words
  - Benefit lines: ≤ 9 words
  - Maker’s Note: 90–130 words

---

## 13) Copy Blocks (ready to paste)

**Hero**

> **Official Mythic GME 2e Apps**\
> GM‑less play at your fingertips. The licensed companion for oracle‑style solo RPG.

**Stats**

> 4.7★ avg rating · 5k+ installs · 2k+ community members

**Benefits**

> Faster Solo Play — Ask, roll, move on—no lookup delay.\
> Official Content — Fate Chart/Check & Meaning tables.\
> Keep the Story — Scenes, characters, threads, logs.\
> Make It Yours — Custom tables & dice formulas.

**Community & Support**

> Join the Community — Tips, support, feature requests—say hi!\
> Get Help Fast — Quick FAQ and a simple way to contact us.

**Maker’s Note**

> Hi, I’m Jason—an indie developer focused on tools that respect and amplify tabletop creativity. I build the **official Mythic GME 2e apps** in partnership with Word Mill Creative, and I ship small, steady improvements because craft matters. When players tell me a feature cut friction from their session, that’s the win. If that sounds like your kind of software, welcome.

---

## 14) What Changed vs. Old Document

- **Removed the dual‑purpose positioning** on the homepage (employer messaging now lives in **About/Blog**).
- **Narrowed voice guidance** to player‑first outcomes; technical depth moves to **Resources/Blog**.
- **Simplified CTAs** to download + community + support.
- **Codified license visibility** (utility bar) and social proof patterns.
- **Introduced homepage copy blocks** that match the new layout.

---

## 15) Content QA Checklist (ship-ready)

**Global (all pages)**

- **One H1 per page**; title & meta description are unique and match page intent.
- **OFFICIAL LICENSEE** bar is present, quiet, and dismissible; dismissal persists via `localStorage`.
- Global nav = **Apps · Resources · Support · Blog · About** (order, labels, targets).
- Footer links work (Privacy, Terms, Contact); copyright year auto-updates.
- All images have **descriptive alt text**; purely decorative images use empty `alt=""`.
- **Color contrast ≥ 4.5:1** for text; focus states visible; tab order logical.
- Mobile breakpoints verified (hero not clipped; CTAs visible above the fold).
- **Performance:** compress images, lazy-load below the fold, preload key font, `font-display: swap`; LCP < 2.5s, CLS < 0.1 (spot-check).
- **No broken links/404s**; custom 404 page and a basic 500 fallback exist.
- Open Graph/Twitter Card set (title, description, image) and **JSON-LD (SoftwareApplication)** validates.
- Canonical tag present; `robots.txt` and `sitemap.xml` available; staging is **noindex**.
- **Spelling & style** follow House Style (sentence case headings, numerals like 50k+, consistent hyphenation).

**Homepage**

- **Hero headline ≤ 5 words**; subheadline ≤ 14 words; matches *official Mythic GME 2e apps* positioning.
- Primary CTA = **Download Now**; secondary pair = **Get Mobile · Get Desktop**; both visible on mobile/desktop.
- **Stats row** accurate (4.7★ avg, 5k+ installs, 2k+ community members).
- **Billboard** uses a desktop screenshot; clear alt text; optional caption OK.
- **Social proof**: 3–5 one-line quotes; each has a linked source.
- **Four benefits**: verbs first; ≤ 9 words each; no feature sprawl.
- **Resources teaser** shows exactly **3 links**.
- **Maker’s Note** is 90–130 words, first-person, and links to About.

**Apps pages (Mobile/Desktop)**

- “Who it’s for” is one sentence; benefits ≤ 4 bullets.
- License clarity: “Official Mythic GME 2e companion” appears once, naturally.
- Store buttons deep-link correctly (Apple, Google, Amazon, Microsoft, itch.io) and use proper **store badge guidelines**.
- Privacy & permissions summary present with link to full policy.
- Changelog/Roadmap link works (Blog/Release Notes).
- Screenshots per platform with accurate alt text; last updated date shown.

**Resources**

- Each article follows **Goal → Steps → Notes → Examples → Related**.
- Steps are copy-pasteable (no curly quotes; tested snippets).
- Platform differences called out; links to Support for edge cases.

**Support**

- Top FAQs: installs/purchases, sync/backup (if applicable), custom tables/imports, known issues.
- **Discord** and **Support contact** (mailto or form) work; mailto has prefilled subject.
- Known issues link to the latest release notes.

**Blog**

- Release notes: highlights first; date format “Aug 2025” or ISO; internal links to Apps/Support/Resources.
- Screenshots with alt text; tags/categories applied.

**Legal & Compliance**

- Privacy & Terms pages updated; “last updated” date present.
- License attribution to **Word Mill Creative** included where specified.
- Cookie/consent banner only if non-essential trackers are used; copy is plain-language and GDPR-aware.

**Analytics & Observability**

- Events for **primary CTAs**, store outbound clicks, and Support/Discord clicks.
- Error tracking (e.g., Sentry) initialized on all pages; sourcemaps configured if applicable.
- UTM parameters preserved through store links (where useful).

**i18n & Formatting (future-proofing)**

- Dates and numbers do not assume a single locale; no hard-coded timezone text.
- Strings not duplicated across pages (ready for extraction/localization).

**Security & Headers**

- HTTPS forced; HSTS enabled.
- Reasonable **CSP**, `referrer-policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`.
- External embeds reviewed; iframes sandboxed where possible.

**Brand & Voice**

- Buttons, labels, and tone match **player-first, quiet confidence**.
- No employer/portfolio pitch on the homepage; that lives in **About/Blog**.
- License bar, social proof, and benefits align with **Brand Pillars**
