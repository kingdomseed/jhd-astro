# Workstream 1: Desloppify-Led Codebase Cleanup

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the jhd-astro codebase to desloppify score >= 98, then fill architectural gaps (shared layout, i18n unification, carousel extraction, schema DRY-up) that the scanner can't detect.

**Architecture:** Three phases. Phase 1 runs desloppify to establish a baseline. Phase 2 iterates through desloppify's prioritized plan (mechanical fixes). Phase 3 addresses structural duplication that requires architectural decisions — shared layout component, EN/PT template unification, carousel utility extraction, and content schema consolidation.

**Tech Stack:** Astro 5, TypeScript, CSS layers, desloppify CLI

**Verification command (run after every code change):**
```bash
npx astro check && npm run build
```
Note: `src/worker.ts:2` has a pre-existing `Cannot find name 'Fetcher'` error — ignore this specific error.

---

## File Map

### Phase 3 files (architectural gap-fill)

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/layouts/BaseLayout.astro` | Shared HTML shell: html, head (meta, fonts, FA, CSS), body (skip link, bg-atmo, site wrapper, Header, slot, Footer) |
| Create | `src/scripts/carousel.ts` | Shared carousel utility: index tracking, setActive, next/prev, timer, pause/resume, reduced-motion |
| Modify | `src/pages/index.astro` | Migrate to BaseLayout |
| Modify | `src/pages/about.astro` | Migrate to BaseLayout |
| Modify | `src/pages/apps.astro` | Migrate to BaseLayout |
| Modify | `src/pages/privacy.astro` | Migrate to BaseLayout |
| Modify | `src/pages/support.astro` | Migrate to BaseLayout |
| Modify | `src/pages/terms.astro` | Migrate to BaseLayout |
| Modify | `src/pages/contact.astro` | Migrate to BaseLayout |
| Modify | `src/pages/404.astro` | Migrate to BaseLayout |
| Modify | `src/pages/blog/index.astro` | Migrate to BaseLayout |
| Modify | `src/pages/blog/[slug].astro` | Migrate to BaseLayout |
| Modify | `src/pages/blog/category/[category].astro` | Migrate to BaseLayout |
| Modify | `src/pages/resources/index.astro` | Migrate to BaseLayout |
| Modify | `src/pages/resources/[slug].astro` | Migrate to BaseLayout |
| Create | `src/components/pages/AboutPage.astro` | Shared about page component (EN/PT) |
| Create | `src/components/pages/HomePage.astro` | Shared homepage component (EN/PT) |
| Reduce | `src/pages/pt/*.astro` | Thin wrappers calling shared page components |
| Modify | `src/scripts/billboard.ts` | Refactor to use shared carousel utility |
| Modify | `src/scripts/device-carousel.ts` | Refactor to use shared carousel utility |
| Modify | `src/scripts/reviews-rotator.ts` | Refactor to use shared carousel utility |
| Modify | `src/content/config.ts` | Extract shared schema helpers, remove duplication |

---

## Phase 1: Desloppify Baseline

### Task 1: Run desloppify scan and establish baseline

**Files:** None modified — diagnostic only

- [ ] **Step 1: Run initial scan**

```bash
cd /Users/jholt/development/jhd-business/jhd-astro
desloppify scan
```

Expected: Scan completes, shows issue counts by detector. Record the output.

- [ ] **Step 2: Check score dashboard**

```bash
desloppify status
```

Expected: Shows overall score and dimension health breakdown. Record the baseline score.

- [ ] **Step 3: Generate the living plan**

```bash
desloppify plan
```

Expected: Prioritized list of issues to fix. Record the plan.

- [ ] **Step 4: Review desloppify plan against manual audit**

Compare the desloppify plan output against the known issues table from the spec (in `docs/superpowers/specs/2026-03-26-website-improvements-design.md`, section "Known Issues from Manual Audit"). Note:
- Which manual audit issues desloppify caught
- Which manual audit issues desloppify missed (these go to Phase 3)
- Any desloppify issues not in the manual audit (address in Phase 2)

Document findings as a comment or note before proceeding.

- [ ] **Step 5: Commit baseline state**

```bash
desloppify status > docs/superpowers/desloppify-baseline.txt
git add docs/superpowers/desloppify-baseline.txt
git commit -m "chore: record desloppify baseline score"
```

---

## Phase 2: Desloppify Mechanical Loop

### Task 2: Work through desloppify's prioritized plan

**Files:** Varies per issue — desloppify directs which files to touch

This task is iterative. Repeat this cycle until desloppify's plan is exhausted or score plateaus:

- [ ] **Step 1: Get next issue**

```bash
desloppify next
```

Read the issue description, affected file(s), and suggested fix.

- [ ] **Step 2: Attempt autofix (if available)**

```bash
desloppify autofix
```

If autofix handles it, skip to Step 4. If not, proceed to Step 3.

- [ ] **Step 3: Manual fix**

Apply the fix manually based on desloppify's guidance. Keep the change minimal and focused on the single issue.

- [ ] **Step 4: Verify build**

```bash
npx astro check && npm run build
```

Expected: No new errors or warnings.

- [ ] **Step 5: Re-scan and confirm improvement**

```bash
desloppify scan
desloppify status
```

Expected: Score improved or held steady. Issue count decreased.

- [ ] **Step 6: Resolve the issue in desloppify**

```bash
desloppify plan resolve <issue-id>
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "fix: <description from desloppify issue>"
```

- [ ] **Step 8: Loop back to Step 1**

Repeat until `desloppify next` shows no remaining issues, or until the score has plateaued and remaining issues are architectural (covered in Phase 3).

---

## Phase 3: Architectural Gap-Fill

### Task 3: Create shared BaseLayout component

**Files:**
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Create the layouts directory and BaseLayout file**

Create `src/layouts/BaseLayout.astro` with the shared HTML shell. This extracts the boilerplate that every page currently repeats: html tag, head (charset, viewport, fonts, title, meta description, OG tags, Twitter card, favicon, global CSS, Font Awesome, canonical URL), body shell (skip link, bg-atmo, site wrapper, Header, main slot, Footer).

```astro
---
// BaseLayout.astro — shared HTML shell for all pages
// Accepts per-page metadata as props; renders Header/Footer + slot for page content.
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import HeadFonts from '../components/HeadFonts.astro';
import defaultOg from '../assets/logo/logo.jpg?url';

interface Props {
  title: string;
  description: string;
  lang?: 'en' | 'pt';
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  /** Whether to include UtilBar (homepage only) */
  utilBar?: boolean;
  /** Class name for <main> element */
  mainClass?: string;
  /** Skip link text (for i18n) */
  skipText?: string;
}

const {
  title,
  description,
  lang = 'en',
  canonicalPath,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  utilBar = false,
  mainClass,
  skipText = lang === 'pt' ? 'Pular para o conteudo principal' : 'Skip to main content',
} = Astro.props;

const siteUrl = Astro.site ?? 'https://jasonholtdigital.com';
const ogImageUrl = ogImage ?? new URL(defaultOg, siteUrl).toString();
const canonicalUrl = new URL(canonicalPath, siteUrl).toString();
---
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <HeadFonts />
    <title>{title}</title>
    <meta name="description" content={description} />

    <!-- OpenGraph -->
    <meta property="og:title" content={ogTitle ?? title} />
    <meta property="og:description" content={ogDescription ?? description} />
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:site_name" content="Jason Holt Digital" />
    <meta property="og:image" content={ogImageUrl} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle ?? title} />
    <meta name="twitter:description" content={ogDescription ?? description} />
    <meta name="twitter:image" content={ogImageUrl} />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Styles -->
    <link rel="stylesheet" href="/global.css" />
    <script is:inline src="https://kit.fontawesome.com/9f0db3cdf4.js" crossorigin="anonymous"></script>
    <link rel="canonical" href={canonicalUrl} />

    <!-- Page-specific head content -->
    <slot name="head" />
  </head>
  <body>
    <a class="skip" href="#main">{skipText}</a>
    <div id="bg-atmo" aria-hidden="true"></div>
    <div id="site">
      {utilBar && <Fragment><slot name="utilbar" /></Fragment>}
      <Header />
      <main id="main" class={mainClass}>
        <slot />
      </main>
      <Footer />
    </div>
  </body>
</html>
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS — BaseLayout exists but is not consumed yet, so no regressions.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add shared BaseLayout component"
```

---

### Task 4: Migrate homepage to BaseLayout

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Rewrite index.astro to use BaseLayout**

Replace the full HTML boilerplate with BaseLayout. The homepage is unique in having UtilBar and JSON-LD structured data.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import UtilBar from '../components/UtilBar.astro';
import Hero from '../components/Hero.astro';
import Billboard from '../components/Billboard.astro';
import CoreBenefits from '../components/CoreBenefits.astro';
import CommunitySupport from '../components/CommunitySupport.astro';
import Partners from '../components/Partners.astro';
import PopularResources from '../components/PopularResources.astro';
import MakersNote from '../components/MakersNote.astro';
import ReviewsRotator from '../components/ReviewsRotator.astro';
---
<BaseLayout
  title="Official Mythic GME 2e Apps - Jason Holt Digital"
  description="GM-less play at your fingertips. Official, licensed Mythic GME 2e companion apps by Jason Holt Digital. Download for mobile and desktop."
  canonicalPath="/"
  ogDescription="GM-less play at your fingertips. Licensed companion apps for Mythic GME 2e on mobile and desktop."
  utilBar={true}
>
  <UtilBar slot="utilbar" />
  <Fragment slot="head">
    <script is:inline type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Mythic GME 2e Apps",
      "description": "Official licensed companion apps for Mythic GME 2e oracle-style solo RPG",
      "applicationCategory": "Game",
      "operatingSystem": ["iOS", "Android", "Windows", "macOS", "Linux"],
      "offers": [
        {
          "@type": "Offer",
          "price": "9.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147"
        }
      ],
      "publisher": {
        "@type": "Person",
        "name": "Jason Holt",
        "url": "https://jasonholtdigital.com"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "100"
      }
    }
    </script>
  </Fragment>

  <Hero />
  <Billboard />
  <ReviewsRotator />
  <CoreBenefits />
  <CommunitySupport />
  <Partners />
  <PopularResources />
  <MakersNote />
</BaseLayout>
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS with identical output HTML.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "refactor: migrate homepage to BaseLayout"
```

---

### Task 5: Migrate about page to BaseLayout

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Rewrite about.astro to use BaseLayout**

Replace the html/head/body boilerplate. Keep all 5 section blocks (about-overview through about-connect) exactly as they are in the default slot.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHeader from '../components/PageHeader.astro';
import { Image } from 'astro:assets';
import headshotMain from '../assets/people/jason-school.jpg';
import { getEntry } from 'astro:content';

const aboutEntry = await getEntry('pages', 'about');
if (!aboutEntry) throw new Error('Could not find about entry in pages collection');

const { title, subtitle, description, pageHeader, backgroundHighlights = [], mythicHighlights = [] } = aboutEntry.data;
---
<BaseLayout
  title={`About - ${title} & Official Partnership`}
  description={description}
  canonicalPath="/about/"
  mainClass="about-main"
>
  <PageHeader
    title={title}
    subtitle={subtitle}
    description={description}
    accent={pageHeader.accent}
    layout={pageHeader.layout}
    icon={pageHeader.icon}
    visualElement={pageHeader.visualElement}
    colorScheme={pageHeader.colorScheme}
  />

  <!-- Paste the 5 <section> blocks from current about.astro lines 68-319 here -->
  <!-- about-overview, about-license, about-mythic, about-background, about-connect -->
  <!-- They use: headshotMain, Image, backgroundHighlights, mythicHighlights -->
  <!-- All of these variables are available from the frontmatter above -->
</BaseLayout>
```

Note to implementer: Copy the 5 `<section>` blocks from the current `src/pages/about.astro` (lines 68-319) directly into the default slot between `</PageHeader>` and `</BaseLayout>`. They reference `headshotMain`, `Image`, `backgroundHighlights`, and `mythicHighlights` — all imported/destructured in the frontmatter.

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "refactor: migrate about page to BaseLayout"
```

---

### Task 6: Migrate remaining EN pages to BaseLayout

**Files:**
- Modify: `src/pages/apps.astro`
- Modify: `src/pages/privacy.astro`
- Modify: `src/pages/support.astro`
- Modify: `src/pages/terms.astro`
- Modify: `src/pages/contact.astro`
- Modify: `src/pages/404.astro`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/blog/[slug].astro`
- Modify: `src/pages/blog/category/[category].astro`
- Modify: `src/pages/resources/index.astro`
- Modify: `src/pages/resources/[slug].astro`

- [ ] **Step 1: Migrate each page**

For each page, apply the same pattern as Tasks 4-5:
1. Replace `<html>`, `<head>`, and `<body>` boilerplate with `<BaseLayout>` wrapper
2. Pass page-specific metadata as props (title, description, canonicalPath, lang)
3. Move page-specific `<head>` content (like Turnstile script on support.astro) to the `head` slot
4. Keep the `<main>` content exactly as-is in the default slot
5. Set `mainClass` prop to match existing class on `<main>` (e.g., `"legal-main"`, `"support-main"`)

The support page needs its Turnstile script in the head slot:
```astro
<Fragment slot="head">
  <script is:inline src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</Fragment>
```

- [ ] **Step 2: Verify build after each page**

```bash
npx astro check && npm run build
```

Expected: PASS after each migration.

- [ ] **Step 3: Commit after each page (or batch if confident)**

```bash
git add src/pages/<modified-file>
git commit -m "refactor: migrate <page-name> to BaseLayout"
```

---

### Task 7: Unify EN/PT page templates

**Files:**
- Create: `src/components/pages/AboutPage.astro`
- Create: `src/components/pages/HomePage.astro`
- Modify: `src/pages/about.astro` (thin wrapper)
- Modify: `src/pages/pt/about.astro` (thin wrapper)
- Modify: `src/pages/index.astro` (thin wrapper)
- Modify: `src/pages/pt/index.astro` (thin wrapper)
- Repeat for all other PT page pairs

- [ ] **Step 1: Create AboutPage component**

Create `src/components/pages/AboutPage.astro` that accepts a `lang` prop and loads the appropriate content entry:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageHeader from '../PageHeader.astro';
import { Image } from 'astro:assets';
import headshotMain from '../../assets/people/jason-school.jpg';
import { getEntry } from 'astro:content';

interface Props {
  lang?: 'en' | 'pt';
}

const { lang = 'en' } = Astro.props;
const isPt = lang === 'pt';

const contentKey = isPt ? 'about-pt' : 'about';
const aboutEntry = await getEntry('pages', contentKey);
if (!aboutEntry) throw new Error(`Could not find ${contentKey} in pages collection`);

const { title, subtitle, description, pageHeader, backgroundHighlights = [], mythicHighlights = [] } = aboutEntry.data;

const pageTitle = isPt
  ? `Sobre - ${title} & Parceria Oficial`
  : `About - ${title} & Official Partnership`;
const canonicalPath = isPt ? '/pt/about/' : '/about/';
---
<BaseLayout
  title={pageTitle}
  description={description}
  lang={lang}
  canonicalPath={canonicalPath}
  mainClass="about-main"
>
  <PageHeader
    title={title}
    subtitle={subtitle}
    description={description}
    accent={pageHeader.accent}
    layout={pageHeader.layout}
    icon={pageHeader.icon}
    visualElement={pageHeader.visualElement}
    colorScheme={pageHeader.colorScheme}
  />

  <!-- about-overview section -->
  <section class="section" id="about-overview" aria-labelledby="about-overview-title">
    <div class="container">
      <div class="about-overview">
        <figure class="about-portrait">
          <Image
            src={headshotMain}
            alt="Jason Holt"
            class="about-portrait__image"
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
          />
          <figcaption class="about-portrait__caption">
            <strong>Jason Holt</strong>
            {isPt ? 'Desenvolvedor Indie & Fundador' : 'Indie developer & founder'}
          </figcaption>
        </figure>
        <div class="about-intro">
          <header class="section-head section-head--left" aria-hidden="true">
            <span class="accent-line" aria-hidden="true"></span>
            <span class="badge-text">{isPt ? 'Perfil' : 'Profile'}</span>
          </header>
          <h2 id="about-overview-title" class="section-title section-title--left">
            {isPt ? 'Ola, eu sou o Jason' : "Hi, I'm Jason"}
          </h2>
          {isPt ? (
            <Fragment>
              <p>Escrevi meu primeiro programa aos doze anos - uma aventura-solo de Redwall em Basic. Depois vieram nove anos ensinando ciencia da computacao, alguns experimentos com Flutter e, finalmente (depois de sonhar com isso desde que fiz a Hora do Codigo com meus alunos em 2013), criar um app de verdade. O que nao mudou em tudo isso foram as pessoas: eu sempre acabava onde alguem precisava de algo construido.</p>
              <p>Mantenho dois produtos sob licenca da Word Mill Games: <strong>Mythic GME Mobile</strong> (iOS, Android) e <strong>Mythic GME Digital</strong> (Windows, macOS, Linux).</p>
              <p>Tambem estou cursando um Mestrado em Linguistica Computacional. Em parte curiosidade sobre como linguagem e software podem trabalhar juntos para jogos solo, e em parte (sendo honesto) o mesmo padrao que impulsionou cada recomeco na minha carreira - alguem tinha uma necessidade, e eu queria ajudar a atende-la.</p>
            </Fragment>
          ) : (
            <Fragment>
              <p>I wrote my first program at twelve - a Redwall choose-your-own-adventure in Basic. Then nine years of teaching computer science, some Flutter experiments, and finally (after dreaming about it since I ran Hour of Code with my students in 2013) building a real app. What stayed the same across all of it was the people: I kept ending up where someone needed something built.</p>
              <p>I maintain two products under licence from Word Mill Games: <strong>Mythic GME Mobile</strong> (iOS, Android) and <strong>Mythic GME Digital</strong> (Windows, macOS, Linux).</p>
              <p>I'm also pursuing an M.Sc. in Computational Linguistics. Part curiosity about how language and software can work together for solo play, and part (if I'm honest) the same pattern that's driven every fresh start in my career - someone had a need, and I wanted to help meet it.</p>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  </section>

  <!-- Remaining sections (about-license, about-mythic, about-background, about-connect) -->
  <!-- Follow the same isPt conditional pattern for hardcoded strings -->
  <!-- Data-driven sections (mythicHighlights, backgroundHighlights) are already -->
  <!-- language-aware via the content entry key and render identically -->

  <!-- NOTE TO IMPLEMENTER: Copy the remaining 4 sections from the current -->
  <!-- about.astro and pt/about.astro, using {isPt ? 'PT' : 'EN'} for each -->
  <!-- hardcoded string. The about-mythic and about-background sections use -->
  <!-- mythicHighlights.map() and backgroundHighlights.map() which already -->
  <!-- contain the correct language content from the frontmatter entry. -->
  <!-- The about-connect section needs isPt for: badge text, heading, summary, -->
  <!-- aria-labels, and the support link href (/support vs /pt/support). -->
</BaseLayout>
```

- [ ] **Step 2: Replace EN and PT about pages with thin wrappers**

`src/pages/about.astro`:
```astro
---
import AboutPage from '../components/pages/AboutPage.astro';
---
<AboutPage lang="en" />
```

`src/pages/pt/about.astro`:
```astro
---
import AboutPage from '../../components/pages/AboutPage.astro';
---
<AboutPage lang="pt" />
```

- [ ] **Step 3: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS. Both `/about` and `/pt/about` render correctly.

- [ ] **Step 4: Commit**

```bash
git add src/components/pages/AboutPage.astro src/pages/about.astro src/pages/pt/about.astro
git commit -m "refactor: unify EN/PT about page via shared AboutPage component"
```

- [ ] **Step 5: Create HomePage component and unify**

Same pattern as Steps 1-4: create `src/components/pages/HomePage.astro` with `lang` prop. Components like Hero, Billboard, ReviewsRotator already detect language internally from `Astro.url` — verify by checking each component for path-based language detection before extracting.

- [ ] **Step 6: Repeat for remaining PT page pairs**

Apply the same pattern to each page that has an EN/PT pair: `apps`, `blog/index`, `blog/[slug]`, `resources/index`, `resources/[slug]`, `support`, `terms`, `contact`, `404`.

For simple pages (privacy, terms) where the only difference is `lang` and content: the shared page component may just need `lang` to select content and set canonical path.

- [ ] **Step 7: Verify full build**

```bash
npx astro check && npm run build
```

Expected: PASS. All EN and PT routes render correctly.

- [ ] **Step 8: Commit all remaining unifications**

```bash
git add src/components/pages/ src/pages/ src/pages/pt/
git commit -m "refactor: unify all EN/PT page pairs via shared page components"
```

---

### Task 8: Extract shared carousel utility

**Files:**
- Create: `src/scripts/carousel.ts`
- Modify: `src/scripts/billboard.ts`
- Modify: `src/scripts/device-carousel.ts`
- Modify: `src/scripts/reviews-rotator.ts`

- [ ] **Step 1: Create the shared carousel utility**

Create `src/scripts/carousel.ts`:

```typescript
// Shared carousel logic: index tracking, navigation, auto-advance, pause/resume, a11y.
// Each consumer configures behavior via CarouselConfig; the returned handle
// exposes imperative controls for consumer-specific features (swipe, crossfade, lightbox).

export interface CarouselConfig {
  /** Total number of items in the carousel */
  itemCount: number;
  /** Called when active index changes -- consumer updates DOM here */
  onActivate: (index: number) => void;
  /** Auto-advance interval in ms (0 to disable) */
  intervalMs?: number;
  /** Element(s) whose hover/focus pauses auto-advance */
  pauseTargets?: HTMLElement[];
  /** Element to attach keyboard listeners to */
  keyboardTarget?: HTMLElement;
  /** Start index (default 0) */
  startIndex?: number;
}

export interface CarouselHandle {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
  isPaused: () => boolean;
  currentIndex: () => number;
  destroy: () => void;
}

export function createCarousel(config: CarouselConfig): CarouselHandle {
  const {
    itemCount,
    onActivate,
    intervalMs = 0,
    pauseTargets = [],
    keyboardTarget,
    startIndex = 0,
  } = config;

  let index = startIndex;
  let paused = false;
  let hoverPaused = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer: number | null = null;

  function stopTimer() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    if (prefersReduced || paused || hoverPaused || intervalMs <= 0) return;
    stopTimer();
    timer = window.setInterval(next, intervalMs);
  }

  function goTo(newIndex: number) {
    index = ((newIndex % itemCount) + itemCount) % itemCount;
    onActivate(index);
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function pause() { paused = true; stopTimer(); }
  function resume() { paused = false; startTimer(); }

  // Hover/focus pause handlers
  const onHoverPause = () => { hoverPaused = true; stopTimer(); };
  const onHoverResume = () => { hoverPaused = false; startTimer(); };

  for (const el of pauseTargets) {
    el.addEventListener('mouseenter', onHoverPause);
    el.addEventListener('mouseleave', onHoverResume);
    el.addEventListener('focusin', onHoverPause);
    el.addEventListener('focusout', onHoverResume);
  }

  // Keyboard navigation
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };
  if (keyboardTarget) {
    keyboardTarget.addEventListener('keydown', onKeydown);
  }

  // Initial activation
  onActivate(index);
  startTimer();

  function destroy() {
    stopTimer();
    for (const el of pauseTargets) {
      el.removeEventListener('mouseenter', onHoverPause);
      el.removeEventListener('mouseleave', onHoverResume);
      el.removeEventListener('focusin', onHoverPause);
      el.removeEventListener('focusout', onHoverResume);
    }
    if (keyboardTarget) {
      keyboardTarget.removeEventListener('keydown', onKeydown);
    }
  }

  return {
    next, prev, goTo, pause, resume, destroy,
    isPaused: () => paused,
    currentIndex: () => index,
  };
}
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS -- new file, no consumers yet.

- [ ] **Step 3: Commit**

```bash
git add src/scripts/carousel.ts
git commit -m "feat: add shared carousel utility"
```

- [ ] **Step 4: Refactor billboard.ts to use shared carousel**

Replace `src/scripts/billboard.ts`:

```typescript
import { createCarousel } from './carousel';

function initBillboard() {
  const plate = document.querySelector<HTMLElement>('.billboard-plate');
  if (!plate) return;
  const stage = plate.querySelector<HTMLElement>('.bb-stage');
  const imgs = stage
    ? Array.from(stage.querySelectorAll<HTMLImageElement>('.billboard-img:not(.bb-sizer)'))
    : [];
  const statusEl = document.getElementById('bb-status');
  const btnPrev = plate.querySelector<HTMLButtonElement>('.bb-prev');
  const btnNext = plate.querySelector<HTMLButtonElement>('.bb-next');
  const btnPause = plate.querySelector<HTMLButtonElement>('.bb-pause');
  const controls = plate.querySelector<HTMLElement>('.bb-controls');

  if (!stage || !imgs.length || !btnPrev || !btnNext || !btnPause || !controls) return;

  const carousel = createCarousel({
    itemCount: imgs.length,
    onActivate: (index) => {
      imgs.forEach((im, idx) => {
        if (idx === index) im.classList.add('is-active');
        else im.classList.remove('is-active');
      });
      if (statusEl) statusEl.textContent = `Slide ${index + 1} of ${imgs.length}`;
    },
    intervalMs: 10000,
    pauseTargets: [plate],
    keyboardTarget: controls,
  });

  btnPrev.addEventListener('click', () => carousel.prev());
  btnNext.addEventListener('click', () => carousel.next());
  btnPause.addEventListener('click', () => {
    if (carousel.isPaused()) {
      carousel.resume();
      btnPause.setAttribute('aria-pressed', 'false');
      btnPause.setAttribute('aria-label', 'Pause autoplay');
      btnPause.textContent = '\u23F8';
    } else {
      carousel.pause();
      btnPause.setAttribute('aria-pressed', 'true');
      btnPause.setAttribute('aria-label', 'Play autoplay');
      btnPause.textContent = '\u25B6';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBillboard);
} else {
  initBillboard();
}
```

- [ ] **Step 5: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/scripts/billboard.ts
git commit -m "refactor: billboard uses shared carousel utility"
```

- [ ] **Step 7: Refactor device-carousel.ts to use shared carousel**

Replace `src/scripts/device-carousel.ts`. Keep device-specific features (height adaptation, swipe, lightbox) and delegate core carousel logic:

```typescript
import { createCarousel } from './carousel';

function initDeviceCarousel(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.device-stage');
  const frames = stage
    ? Array.from(stage.querySelectorAll<HTMLElement>('.device-frame'))
    : [];
  const status = root.querySelector<HTMLElement>('.device-status');
  if (!stage || frames.length === 0) return;

  const stageEl = stage as HTMLElement;
  const setStageHeight = () => {
    const active = stageEl.querySelector<HTMLElement>(
      '.device-frame.is-active .device-shot',
    );
    if (active) {
      const h = active.clientHeight;
      if (h > 0) stageEl.style.height = h + 'px';
    }
  };

  const carousel = createCarousel({
    itemCount: frames.length,
    onActivate: (index) => {
      frames.forEach((f, j) => f.classList.toggle('is-active', j === index));
      if (status) status.textContent = `Slide ${index + 1} of ${frames.length}`;
      setTimeout(setStageHeight, 0);
    },
    intervalMs: 6000,
    pauseTargets: [root],
    keyboardTarget: root,
  });

  const btnPrev = root.querySelector<HTMLButtonElement>('.dc-prev');
  const btnNext = root.querySelector<HTMLButtonElement>('.dc-next');
  if (btnPrev) btnPrev.addEventListener('click', () => carousel.prev());
  if (btnNext) btnNext.addEventListener('click', () => carousel.next());

  // Swipe support -- device-specific
  let startX = 0;
  let startY = 0;
  let dragging = false;
  const threshold = 30;
  const onStart = (x: number, y: number) => {
    startX = x;
    startY = y;
    dragging = true;
  };
  const onMove = (x: number, y: number, e: Event) => {
    if (!dragging) return;
    const dx = x - startX;
    const dy = y - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) e.preventDefault();
  };
  const onEnd = (x: number, y: number) => {
    if (!dragging) return;
    const dx = x - startX;
    const dy = y - startY;
    dragging = false;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
      if (dx < 0) carousel.next();
      else carousel.prev();
    }
  };

  root.addEventListener(
    'touchstart',
    (e) => {
      const t = e.changedTouches[0];
      if (t) onStart(t.clientX, t.clientY);
    },
    { passive: true },
  );
  root.addEventListener(
    'touchmove',
    (e) => {
      const t = e.changedTouches[0];
      if (t) onMove(t.clientX, t.clientY, e);
    },
    { passive: false },
  );
  root.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    if (t) onEnd(t.clientX, t.clientY);
  });
  root.addEventListener('pointerdown', (e) => onStart(e.clientX, e.clientY));
  root.addEventListener('pointermove', (e) => onMove(e.clientX, e.clientY, e));
  root.addEventListener('pointerup', (e) => onEnd(e.clientX, e.clientY));
  root.addEventListener('pointercancel', () => {
    dragging = false;
  });

  // Lightbox -- device-specific
  const openLightbox = (src: string, alt: string) => {
    const ov = document.createElement('div');
    ov.className = 'lightbox';

    const inner = document.createElement('div');
    inner.className = 'lb-inner';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    inner.appendChild(img);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lb-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '\u00d7';
    inner.appendChild(closeBtn);

    ov.appendChild(inner);

    const closeLb = () => {
      document.body.classList.remove('lb-open');
      ov.remove();
    };
    ov.addEventListener('click', (e) => {
      if (e.target === ov) closeLb();
    });
    closeBtn.addEventListener('click', closeLb);
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') {
        closeLb();
        document.removeEventListener('keydown', onKey);
      }
    });
    document.body.appendChild(ov);
    document.body.classList.add('lb-open');
  };

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    if (t && t.classList.contains('device-shot')) {
      const imgEl = t as HTMLImageElement;
      openLightbox(imgEl.currentSrc || imgEl.src, imgEl.alt || '');
    }
  });

  window.addEventListener('resize', () => setStageHeight());
}

function initAll() {
  document
    .querySelectorAll<HTMLElement>('.device-carousel')
    .forEach(initDeviceCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
```

- [ ] **Step 8: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add src/scripts/device-carousel.ts
git commit -m "refactor: device-carousel uses shared carousel utility"
```

- [ ] **Step 10: Refactor reviews-rotator.ts to use shared carousel**

Replace `src/scripts/reviews-rotator.ts`. Keep shuffle, crossfade, and dual-buffer logic:

```typescript
import { createCarousel } from './carousel';
import quotesData from './reviews-data.ts';

function initReviewsRotator() {
  const container = document.querySelector<HTMLElement>('.reviews-rotator');
  if (!container) return;

  const stage = container.querySelector<HTMLElement>('.rev-stage');
  const statusEl = document.getElementById('rev-status');
  if (!stage) return;

  let qA = stage.querySelector<HTMLParagraphElement>('#quote');
  if (!qA) {
    qA = document.createElement('p');
    qA.id = 'quote';
    stage.appendChild(qA);
  }
  qA.classList.add('rev-quote');
  const qB = document.createElement('p');
  qB.className = 'rev-quote';
  stage.appendChild(qB);

  type Quote = { text: string; src: string; href: string; icon: string };

  function shuffle<T>(arr: T[]): T[] {
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    return arr;
  }

  const MAX_QUOTES = 20;
  const quotes: Quote[] = shuffle([...(quotesData as Quote[])]).slice(
    0,
    Math.min(MAX_QUOTES, (quotesData as Quote[]).length),
  );
  if (!quotes.length) return;

  function renderQuote(q: Quote, target: HTMLParagraphElement) {
    target.textContent = '';

    const icon = document.createElement('i');
    icon.className = `fa-brands ${q.icon}`;
    icon.setAttribute('aria-hidden', 'true');
    target.appendChild(icon);

    target.appendChild(document.createTextNode(' \u201c'));

    const link = document.createElement('a');
    link.href = q.href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.style.color = 'inherit';
    link.style.textDecoration = 'underline dotted';
    link.textContent = q.text;
    target.appendChild(link);

    target.appendChild(document.createTextNode('\u201d \u2014 '));

    const src = document.createElement('span');
    src.style.opacity = '.8';
    src.textContent = q.src;
    target.appendChild(src);
  }

  function crossFade(toIndex: number) {
    const active = qA!.classList.contains('is-active') ? qA! : qB;
    const other = active === qA ? qB : qA!;
    renderQuote(quotes[toIndex], other);
    requestAnimationFrame(() => {
      active.classList.remove('is-active');
      other.classList.add('is-active');
    });
  }

  const startIdx = Math.floor(Math.random() * quotes.length);

  // Initial render before carousel starts
  renderQuote(quotes[startIdx], qA);
  qA.classList.add('is-active');

  createCarousel({
    itemCount: quotes.length,
    onActivate: (index) => {
      crossFade(index);
      if (statusEl) statusEl.textContent = `Quote ${index + 1} of ${quotes.length}`;
    },
    intervalMs: 8000,
    pauseTargets: [container],
    startIndex: startIdx,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsRotator);
} else {
  initReviewsRotator();
}
```

Note: The `renderQuote` function replaces the previous `renderHTML` string concatenation with safe DOM methods, addressing the XSS surface flagged in the audit.

- [ ] **Step 11: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 12: Commit**

```bash
git add src/scripts/reviews-rotator.ts
git commit -m "refactor: reviews-rotator uses shared carousel utility, replace innerHTML with DOM methods"
```

---

### Task 9: Extract shared content schema helpers

**Files:**
- Modify: `src/content/config.ts`

- [ ] **Step 1: Refactor config.ts with shared fragments**

Define shared schema fragments at the top of `config.ts` and reference them in each collection:

```typescript
import { defineCollection, z } from "astro:content";

// -- Shared schema fragments ---------------------------------------------------
const langField = z.enum(['en', 'pt']).default('en');
const tagsField = z.array(z.string()).default([]);
const keywordsField = z.array(z.string()).default([]);

const downloadsField = z.array(z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  format: z.string().optional(),
  size: z.string().optional(),
})).default([]);

/** Refine helper: require alt text when an image is provided */
function requireAltWhenImage(imageKey: string, altKey: string) {
  return (data: Record<string, unknown>) =>
    !data[imageKey] || (data[altKey] !== undefined && (data[altKey] as string).trim().length > 0);
}

// -- Collections ---------------------------------------------------------------
const resources = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["start-here", "adventure-journals", "dice-roller", "custom-tables", "advanced"]),
      order: z.number().int().nonnegative(),
      icon: z.string().default("fa-slab fa-regular fa-book-open"),
      duration: z.string().optional(),
      externalUrl: z.string().url().optional(),
      updated: z.coerce.date().optional(),
      keywords: keywordsField,
      tags: tagsField,
      hero: image().optional(),
      heroAlt: z.string().optional(),
      steps: z.array(z.object({
        title: z.string().min(3),
        body: z.string().optional(),
        image: image().optional(),
        imageAlt: z.string().optional().refine(
          (v) => v === undefined || v.trim().length > 0,
          { message: "If step image provided, include alt text" },
        ),
      })).default([]),
      related: z.array(z.string()).default([]),
      downloads: downloadsField,
      lang: langField,
    }).refine(requireAltWhenImage('hero', 'heroAlt'), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(["Release Notes", "Behind the Scenes", "Guides", "Community", "Announcement"]),
      date: z.coerce.date(),
      readTime: z.string(),
      isSample: z.boolean().default(true),
      tags: tagsField,
      keywords: keywordsField,
      lang: langField,
      hero: image().optional(),
      heroAlt: z.string().optional(),
      socialImage: image().optional(),
      socialImageAlt: z.string().optional(),
      downloads: downloadsField,
    })
    .refine(requireAltWhenImage('hero', 'heroAlt'), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    })
    .refine(requireAltWhenImage('socialImage', 'socialImageAlt'), {
      message: "Provide socialImageAlt when a socialImage is included",
      path: ["socialImageAlt"],
    }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pageHeader: z.object({
      accent: z.string(),
      icon: z.string(),
      layout: z.enum(["left", "right", "center"]),
      visualElement: z.enum(["shapes", "grid", "particles"]),
      colorScheme: z.enum(["primary", "secondary", "accent"]),
    }),
    backgroundHighlights: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    socialLinks: z.array(z.object({
      href: z.string(),
      label: z.string(),
      icon: z.string(),
      className: z.string(),
      external: z.boolean().optional(),
    })).optional(),
    mythicHighlights: z.array(z.object({
      label: z.string(),
      description: z.string(),
    })).optional(),
    lang: langField,
  }),
});

export const collections = { resources, blog, pages };
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS -- schema is functionally equivalent.

- [ ] **Step 3: Commit**

```bash
git add src/content/config.ts
git commit -m "refactor: extract shared schema fragments in content config"
```

---

### Task 10: Final verification and desloppify re-scan

**Files:** None modified

- [ ] **Step 1: Full build verification**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 2: Re-run desloppify**

```bash
desloppify scan
desloppify status
```

Expected: Score >= 98. If not, review remaining issues and address.

- [ ] **Step 3: Record final state**

```bash
desloppify status > docs/superpowers/desloppify-final.txt
git add docs/superpowers/desloppify-final.txt
git commit -m "chore: record final desloppify score after cleanup"
```

- [ ] **Step 4: Manual QA checklist**

Verify in the browser (dev server):
- [ ] Homepage renders correctly (header, hero, billboard carousel, reviews, footer)
- [ ] About page renders in EN and PT
- [ ] Blog index and individual posts render
- [ ] Resources index and individual guides render
- [ ] Apps page device carousel works (prev/next, swipe, lightbox)
- [ ] Support page contact form renders with Turnstile
- [ ] Mobile viewport: all pages responsive, no horizontal overflow
- [ ] Keyboard navigation: tab through header, skip link works

---

## Summary

| Task | Description | Phase |
|------|-------------|-------|
| 1 | Desloppify baseline scan | Phase 1 |
| 2 | Desloppify mechanical fix loop | Phase 2 |
| 3 | Create BaseLayout component | Phase 3 |
| 4 | Migrate homepage to BaseLayout | Phase 3 |
| 5 | Migrate about page to BaseLayout | Phase 3 |
| 6 | Migrate remaining EN pages to BaseLayout | Phase 3 |
| 7 | Unify EN/PT page templates | Phase 3 |
| 8 | Extract shared carousel utility | Phase 3 |
| 9 | Extract shared content schema helpers | Phase 3 |
| 10 | Final verification and desloppify re-scan | Phase 3 |
