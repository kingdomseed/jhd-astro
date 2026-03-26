# Architecture Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure jhd-astro for nimblenomicon-level architectural clarity — domain-based component organization, shared layout, colocated scripts, explicit data separation, and EN/PT template unification. Zero functionality loss.

**Architecture:** Astro's processed `<script>` tags are `type="module"` by default (deferred, deduplicated, bundled). Scripts belong inside the components that own them. Shared logic lives in importable modules. Data lives in `src/data/`. Layouts provide the shared HTML shell. Page components unify EN/PT routes.

**Tech Stack:** Astro 5, TypeScript, CSS layers

**Verification command (run after every task):**
```bash
npx astro check && npm run build
```
Note: `src/worker.ts:2` `Cannot find name 'Fetcher'` is pre-existing — ignore.

---

## Target Directory Structure

```
src/
├── layouts/
│   └── BaseLayout.astro              # Shared HTML shell (html/head/body/Header/Footer)
├── components/
│   ├── layout/                       # App shell components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── UtilBar.astro
│   │   ├── LanguageFab.astro
│   │   └── PageHeader.astro
│   ├── home/                         # Homepage-specific
│   │   ├── Hero.astro
│   │   ├── Billboard.astro
│   │   ├── CoreBenefits.astro
│   │   ├── CommunitySupport.astro
│   │   ├── Partners.astro
│   │   ├── PopularResources.astro
│   │   ├── MakersNote.astro
│   │   └── ReviewsRotator.astro
│   ├── apps/                         # Apps page components
│   │   ├── AppSection.astro          # Orchestrator (~150 lines)
│   │   ├── FeatureCard.astro
│   │   ├── StoreLinks.astro
│   │   └── DeviceCarousel.astro      # Owns its script
│   ├── blog/                         # Blog components
│   │   └── ShareBar.astro
│   └── pages/                        # EN/PT unified page templates
│       ├── HomePage.astro
│       ├── AboutPage.astro
│       └── (others as needed)
├── lib/                              # Pure logic (no DOM, no I/O)
│   └── carousel.ts                   # Shared carousel state machine
├── data/                             # Static data
│   └── reviews.ts                    # Review quotes
├── i18n/                             # (existing, unchanged)
│   ├── ui.ts
│   └── utils.ts
├── scripts/                          # Deprecated — only keep if truly shared
│   └── format-date.ts               # Pure utility, could move to lib/
├── content/                          # (existing, unchanged)
├── assets/                           # (existing, unchanged)
└── pages/                            # Thin route files
    ├── index.astro                   # <HomePage lang="en" />
    ├── about.astro                   # <AboutPage lang="en" />
    ├── pt/
    │   ├── index.astro              # <HomePage lang="pt" />
    │   └── about.astro              # <AboutPage lang="pt" />
    └── ...
```

---

## Task 1: Create BaseLayout

**Files:**
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Create `src/layouts/BaseLayout.astro`**

This component replaces the html/head/body boilerplate that every page currently duplicates. It accepts metadata as props and provides named slots for page-specific head content.

```astro
---
import Header from '../components/layout/Header.astro';
import Footer from '../components/layout/Footer.astro';
import HeadFonts from '../components/layout/HeadFonts.astro';
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
  mainClass?: string;
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
  mainClass,
} = Astro.props;

const siteUrl = Astro.site?.toString() ?? 'https://jasonholtdigital.com';
const ogImageUrl = ogImage ?? new URL(defaultOg, siteUrl).toString();
const canonicalUrl = new URL(canonicalPath, siteUrl).toString();
const skipText = lang === 'pt' ? 'Pular para o conteudo principal' : 'Skip to main content';
---
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <HeadFonts />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={ogTitle ?? title} />
    <meta property="og:description" content={ogDescription ?? description} />
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:site_name" content="Jason Holt Digital" />
    <meta property="og:image" content={ogImageUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ogTitle ?? title} />
    <meta name="twitter:description" content={ogDescription ?? description} />
    <meta name="twitter:image" content={ogImageUrl} />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="stylesheet" href="/global.css" />
    <script is:inline src="https://kit.fontawesome.com/9f0db3cdf4.js" crossorigin="anonymous"></script>
    <link rel="canonical" href={canonicalUrl} />
    <slot name="head" />
  </head>
  <body>
    <a class="skip" href="#main">{skipText}</a>
    <div id="bg-atmo" aria-hidden="true"></div>
    <div id="site">
      <slot name="before-header" />
      <Header />
      <main id="main" class={mainClass}>
        <slot />
      </main>
      <Footer />
    </div>
  </body>
</html>
```

Note: This file references `../components/layout/Header.astro` — it will compile after Task 2 moves components.

- [ ] **Step 2: Verify the file parses (won't build yet — component paths change in Task 2)**

```bash
ls src/layouts/BaseLayout.astro  # confirm file exists
```

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout shared HTML shell"
```

---

## Task 2: Reorganize components into domain directories

**Files:**
- Move: All components from `src/components/` into domain subdirectories
- Update: All import paths across the entire codebase

This is the biggest single change. Every import of every component across every page file changes.

- [ ] **Step 1: Create domain directories**

```bash
mkdir -p src/components/layout src/components/home src/components/apps src/components/blog src/components/pages
```

- [ ] **Step 2: Move layout components**

```bash
git mv src/components/Header.astro src/components/layout/
git mv src/components/Footer.astro src/components/layout/
git mv src/components/HeadFonts.astro src/components/layout/
git mv src/components/UtilBar.astro src/components/layout/
git mv src/components/LanguageFab.astro src/components/layout/
git mv src/components/LanguagePicker.astro src/components/layout/
git mv src/components/PageHeader.astro src/components/layout/
```

- [ ] **Step 3: Move home components**

```bash
git mv src/components/Hero.astro src/components/home/
git mv src/components/Billboard.astro src/components/home/
git mv src/components/CoreBenefits.astro src/components/home/
git mv src/components/CommunitySupport.astro src/components/home/
git mv src/components/Partners.astro src/components/home/
git mv src/components/PopularResources.astro src/components/home/
git mv src/components/MakersNote.astro src/components/home/
git mv src/components/ReviewsRotator.astro src/components/home/
```

- [ ] **Step 4: Move apps components**

```bash
git mv src/components/AppSection.astro src/components/apps/
```

- [ ] **Step 5: Move blog components**

```bash
git mv src/components/ShareBar.astro src/components/blog/
```

- [ ] **Step 6: Update ALL import paths across the codebase**

Every file that imports a component needs its path updated. Use find-and-replace across the codebase. The patterns are:

| Old import | New import |
|---|---|
| `../components/Header.astro` | `../components/layout/Header.astro` |
| `../../components/Header.astro` | `../../components/layout/Header.astro` |
| `../components/Footer.astro` | `../components/layout/Footer.astro` |
| `../../components/Footer.astro` | `../../components/layout/Footer.astro` |
| `../components/HeadFonts.astro` | `../components/layout/HeadFonts.astro` |
| `../../components/HeadFonts.astro` | `../../components/layout/HeadFonts.astro` |
| `../components/UtilBar.astro` | `../components/layout/UtilBar.astro` |
| `../../components/UtilBar.astro` | `../../components/layout/UtilBar.astro` |
| `../components/PageHeader.astro` | `../components/layout/PageHeader.astro` |
| `../../components/PageHeader.astro` | `../../components/layout/PageHeader.astro` |
| `../components/Hero.astro` | `../components/home/Hero.astro` |
| `../../components/Hero.astro` | `../../components/home/Hero.astro` |
| `../components/Billboard.astro` | `../components/home/Billboard.astro` |
| `../../components/Billboard.astro` | `../../components/home/Billboard.astro` |
| `../components/CoreBenefits.astro` | `../components/home/CoreBenefits.astro` |
| `../../components/CoreBenefits.astro` | `../../components/home/CoreBenefits.astro` |
| `../components/CommunitySupport.astro` | `../components/home/CommunitySupport.astro` |
| `../../components/CommunitySupport.astro` | `../../components/home/CommunitySupport.astro` |
| `../components/Partners.astro` | `../components/home/Partners.astro` |
| `../../components/Partners.astro` | `../../components/home/Partners.astro` |
| `../components/PopularResources.astro` | `../components/home/PopularResources.astro` |
| `../../components/PopularResources.astro` | `../../components/home/PopularResources.astro` |
| `../components/MakersNote.astro` | `../components/home/MakersNote.astro` |
| `../../components/MakersNote.astro` | `../../components/home/MakersNote.astro` |
| `../components/ReviewsRotator.astro` | `../components/home/ReviewsRotator.astro` |
| `../../components/ReviewsRotator.astro` | `../../components/home/ReviewsRotator.astro` |
| `../components/AppSection.astro` | `../components/apps/AppSection.astro` |
| `../../components/AppSection.astro` | `../../components/apps/AppSection.astro` |
| `../components/ShareBar.astro` | `../components/blog/ShareBar.astro` |
| `../../components/ShareBar.astro` | `../../components/blog/ShareBar.astro` |

Also update internal component imports (e.g., Footer imports LanguageFab — both now in `layout/`):
| Old | New |
|---|---|
| `./LanguageFab.astro` | `./LanguageFab.astro` (same — both in layout/) |

- [ ] **Step 7: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS — no functionality change, only file locations.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "refactor: organize components into domain directories (layout/, home/, apps/, blog/)"
```

---

## Task 3: Move scripts to `src/lib/` and colocate with components

**Files:**
- Move: `src/scripts/carousel.ts` → `src/lib/carousel.ts`
- Move: `src/scripts/format-date.ts` → `src/lib/format-date.ts`
- Move: `src/data/reviews-data.ts` → `src/data/reviews.ts` (rename for clarity)
- Inline: `src/scripts/billboard.ts` into `src/components/home/Billboard.astro`
- Inline: `src/scripts/device-carousel.ts` into `src/components/apps/AppSection.astro`
- Inline: `src/scripts/reviews-rotator.ts` into `src/components/home/ReviewsRotator.astro`
- Inline: `src/scripts/header-dropdown.ts` into `src/components/layout/Header.astro`
- Inline: `src/scripts/header-mobile.ts` into `src/components/layout/Header.astro`
- Inline: `src/scripts/header-sticky.ts` into `src/components/layout/Header.astro`
- Inline: `src/scripts/skip-link-focus.ts` into `src/layouts/BaseLayout.astro`
- Delete: `src/scripts/` directory (empty after moves)

- [ ] **Step 1: Create `src/lib/` and move shared modules**

```bash
mkdir -p src/lib
git mv src/scripts/carousel.ts src/lib/carousel.ts
git mv src/scripts/format-date.ts src/lib/format-date.ts
git mv src/data/reviews-data.ts src/data/reviews.ts
```

- [ ] **Step 2: Update imports of moved modules**

All files importing from `../scripts/carousel` change to `../lib/carousel`.
All files importing from `../data/reviews-data` change to `../data/reviews`.
All files importing from `../../scripts/format-date` change to `../../lib/format-date`.

Search for all references and update them.

- [ ] **Step 3: Inline billboard.ts into Billboard.astro**

In `src/components/home/Billboard.astro`, replace the existing:
```astro
<script>
  import "../scripts/billboard.ts";
</script>
```

With the full script content (without the DOMContentLoaded guard — Astro handles timing):
```astro
<script>
  import { createCarousel, type CarouselHandle } from '../../lib/carousel';

  function togglePause(carousel: CarouselHandle, btn: HTMLButtonElement) {
    if (carousel.isPaused()) {
      carousel.resume();
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Pause autoplay');
      btn.textContent = '\u23F8';
    } else {
      carousel.pause();
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', 'Play autoplay');
      btn.textContent = '\u25B6';
    }
  }

  const plate = document.querySelector<HTMLElement>('.billboard-plate');
  if (plate) {
    const stage = plate.querySelector<HTMLElement>('.bb-stage');
    const imgs = stage
      ? Array.from(stage.querySelectorAll<HTMLImageElement>('.billboard-img:not(.bb-sizer)'))
      : [];
    const statusEl = document.getElementById('bb-status');
    const btnPrev = plate.querySelector<HTMLButtonElement>('.bb-prev');
    const btnNext = plate.querySelector<HTMLButtonElement>('.bb-next');
    const btnPause = plate.querySelector<HTMLButtonElement>('.bb-pause');
    const controls = plate.querySelector<HTMLElement>('.bb-controls');

    if (stage && imgs.length && btnPrev && btnNext && btnPause && controls) {
      const carousel = createCarousel({
        itemCount: imgs.length,
        onActivate: (index) => {
          imgs.forEach((im, idx) => im.classList.toggle('is-active', idx === index));
          if (statusEl) statusEl.textContent = `Slide ${index + 1} of ${imgs.length}`;
        },
        intervalMs: 10000,
        pauseTargets: [plate],
        keyboardTarget: controls,
      });

      btnPrev.addEventListener('click', () => carousel.prev());
      btnNext.addEventListener('click', () => carousel.next());
      btnPause.addEventListener('click', () => togglePause(carousel, btnPause));
    }
  }
</script>
```

Key change: No `initBillboard` wrapper, no `DOMContentLoaded` guard. The script executes at the right time because Astro's processed `<script>` tags are `type="module"`.

- [ ] **Step 4: Inline device-carousel.ts into AppSection.astro**

Same pattern as Step 3. Replace the `<script>import '../scripts/device-carousel.ts';</script>` in AppSection.astro with the full device-carousel code (minus DOMContentLoaded guard). Import carousel from `../../lib/carousel`.

- [ ] **Step 5: Inline reviews-rotator.ts into ReviewsRotator.astro**

Same pattern. Replace the import with the full reviews-rotator code. Import carousel from `../../lib/carousel` and reviews data from `../../data/reviews`.

- [ ] **Step 6: Inline header scripts into Header.astro**

Replace the existing multi-import `<script>` block in Header.astro:
```astro
<script>
  import "../scripts/header-dropdown.ts";
  import "../scripts/header-mobile.ts";
  import "../scripts/header-sticky.ts";
  import "../scripts/skip-link-focus.ts";
</script>
```

With the actual code from header-dropdown.ts, header-mobile.ts, and header-sticky.ts inlined into a single `<script>` block. Remove all DOMContentLoaded guards.

**Move skip-link-focus.ts into BaseLayout.astro** instead — it's not header-specific, it's a site-wide accessibility feature. Place the `<script>` **inside the `<body>` tag, before `</body>`** (not after — that would be invalid HTML):
```astro
<!-- In BaseLayout.astro, just before </body> -->
    <script>
      // Skip link focus management (site-wide a11y)
      function focusTarget(target: HTMLElement) { /* ... */ }
      function handleSkipClick(e: Event, link: HTMLAnchorElement) { /* ... */ }

      const skipLinks = document.querySelectorAll<HTMLAnchorElement>('a.skip[href^="#"]');
      skipLinks.forEach((link) => {
        link.addEventListener('click', (e) => handleSkipClick(e, link));
      });
    </script>
  </body>
</html>
```

- [ ] **Step 7: Convert ShareBar.astro from `is:inline` to processed script**

The current ShareBar uses `<script type="module" is:inline>` which loses bundling/deduplication. Convert to a processed `<script>` (remove `is:inline` and `type="module"`). Use `data-*` attributes to pass server-side props to the client:

The current approach of reading `data-share-*` attributes is correct. Just remove `is:inline` and `type="module"`:
```astro
<script>
  const roots = document.querySelectorAll<HTMLElement>('[data-share-root]');
  roots.forEach((root) => {
    // existing logic, unchanged
  });
</script>
```

Using `querySelectorAll` ensures deduplication works if ShareBar appears multiple times.

**Deduplication principle (applies to ALL colocated scripts):** Astro processed `<script>` tags are deduplicated — the script runs once per page, even if the component appears N times. Any script that needs to target its component's DOM elements MUST use `querySelectorAll` and iterate, not `querySelector` (singular). Components that are guaranteed to appear only once per page (Header, Footer, Billboard) can use `querySelector`, but `querySelectorAll` is safer as a default.

- [ ] **Step 8: Delete `src/scripts/` directory**

```bash
rm -rf src/scripts/
```

All scripts are now either in `src/lib/` (shared pure logic) or colocated inside their owning components.

- [ ] **Step 9: Delete empty `src/pages/guides/` directory**

```bash
rmdir src/pages/guides/
```

- [ ] **Step 10: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "refactor: colocate scripts with components, move shared logic to src/lib/"
```

---

## Task 4: Migrate all pages to BaseLayout

**Files:**
- Modify: Every page file in `src/pages/` and `src/pages/pt/`

- [ ] **Step 1: Migrate homepage**

Replace `src/pages/index.astro` boilerplate with BaseLayout. See Task 4 in the previous plan for exact code — the page becomes ~30 lines (BaseLayout wrapper + component slots + JSON-LD in head slot + UtilBar in before-header slot).

- [ ] **Step 2: Migrate about page**

Replace boilerplate with BaseLayout. Keep the 5 section blocks in the default slot.

- [ ] **Step 3: Migrate remaining EN pages one at a time**

For each page (apps, privacy, support, terms, contact, 404, blog/index, blog/[slug], blog/category/[category], resources/index, resources/[slug]):
1. Replace html/head/body with `<BaseLayout>` wrapper
2. Pass page metadata as props
3. Move page-specific head content to `<Fragment slot="head">`
4. Keep main content in default slot
5. Set `mainClass` to match existing class

- [ ] **Step 4: Migrate PT pages**

Same pattern for all `src/pages/pt/` pages.

- [ ] **Step 5: Verify build after each page**

```bash
npx astro check && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: migrate all pages to BaseLayout"
```

---

## Task 5: Unify EN/PT page templates

**Files:**
- Create: `src/components/pages/HomePage.astro`
- Create: `src/components/pages/AboutPage.astro`
- Modify: `src/pages/index.astro` → thin wrapper
- Modify: `src/pages/pt/index.astro` → thin wrapper
- Modify: `src/pages/about.astro` → thin wrapper
- Modify: `src/pages/pt/about.astro` → thin wrapper
- Repeat for all EN/PT page pairs

- [ ] **Step 1: Create HomePage component**

`src/components/pages/HomePage.astro` accepts `lang` prop, uses BaseLayout, composes all home section components. Components like Hero, Billboard, CoreBenefits already detect language from `Astro.url` via the i18n utils.

- [ ] **Step 2: Reduce EN/PT index pages to thin wrappers**

`src/pages/index.astro`:
```astro
---
import HomePage from '../components/pages/HomePage.astro';
---
<HomePage lang="en" />
```

`src/pages/pt/index.astro`:
```astro
---
import HomePage from '../../components/pages/HomePage.astro';
---
<HomePage lang="pt" />
```

- [ ] **Step 3: Create AboutPage component and reduce wrappers**

Same pattern. AboutPage accepts `lang`, loads the correct content entry (`about` vs `about-pt`), and uses `{isPt ? 'PT text' : 'EN text'}` for hardcoded prose sections.

- [ ] **Step 4: Repeat for remaining page pairs**

Apply to: apps, blog/index, blog/[slug], resources/index, resources/[slug], support, terms, contact, 404.

- [ ] **Step 5: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: unify EN/PT pages via shared page components"
```

---

## Task 6: Migrate content collections to Astro 5 API and DRY schemas

**Files:**
- Modify: `src/content/config.ts`
- Modify: All files using `entry.slug` (changes to `entry.id` with glob loader)

The current `type: "content"` is the legacy Astro v2-v4 API. Astro 5's recommended approach uses `loader: glob(...)` from `astro/loaders`. Since we're already touching config.ts to DRY it up, this is the ideal time to migrate.

- [ ] **Step 1: Migrate from `type: "content"` to `loader: glob(...)` and DRY up schemas**

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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

function requireAltWhenImage(imageKey: string, altKey: string) {
  return (data: Record<string, unknown>) =>
    !data[imageKey] || (data[altKey] !== undefined && (data[altKey] as string).trim().length > 0);
}

// -- Collections (Astro 5 loader API) ------------------------------------------
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: ({ image }) =>
    z.object({
      // ... (same fields as before, using shared fragments)
    }).refine(requireAltWhenImage('hero', 'heroAlt'), {
      message: "Provide heroAlt when a hero image is included",
      path: ["heroAlt"],
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      // ... (same fields as before, using shared fragments)
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    // ... (same fields as before, add lang: langField)
  }),
});

export const collections = { resources, blog, pages };
```

- [ ] **Step 2: Update all `entry.slug` references to `entry.id`**

With the glob loader, entries use `id` (the filename without extension) instead of `slug`. Search the codebase for `.slug` usage in content collection contexts and update:

```bash
# Find all slug references in page files
grep -rn '\.slug' src/pages/ --include="*.astro" --include="*.ts"
```

Common patterns to update:
- `post.slug` → `post.id` in blog listing/detail pages
- `entry.slug` → `entry.id` in resource listing/detail pages
- `getStaticPaths` functions that return `{ params: { slug: entry.slug } }`

- [ ] **Step 3: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS. All content should render identically.

- [ ] **Step 4: Commit**

```bash
git add src/content/config.ts src/pages/
git commit -m "refactor: migrate to Astro 5 content loader API, DRY up schemas"
```

---

## Task 7: Final verification and desloppify fresh scan

**Files:** None modified

- [ ] **Step 1: Full build**

```bash
npx astro check && npm run build
```

- [ ] **Step 2: Manual QA**

- [ ] Homepage renders (header, hero, billboard carousel, reviews, footer)
- [ ] About page renders in EN and PT
- [ ] Blog index and posts render
- [ ] Resources index and guides render
- [ ] Apps page carousel works (prev/next, swipe, lightbox)
- [ ] Support page Turnstile form renders
- [ ] Mobile viewport responsive, no overflow
- [ ] Keyboard nav works (tab, skip link, dropdown)

- [ ] **Step 3: Fresh desloppify scan**

```bash
desloppify scan
desloppify status
```

Record the new baseline. The architectural fixes should significantly improve:
- Abstraction fitness (BaseLayout, carousel utility)
- Design coherence (domain grouping, thin pages)
- AI generated debt (no more EN/PT duplication)
- Convention drift (consistent script pattern)
- Mid/high level elegance (clear ownership)

- [ ] **Step 4: Commit scorecard**

```bash
git add scorecard.png
git commit -m "chore: record post-architecture desloppify score"
```

---

## Summary

| Task | Description | Impact |
|------|-------------|--------|
| 1 | Create BaseLayout | Eliminates head/body duplication across 12+ pages |
| 2 | Reorganize components by domain | Clear ownership, navigable structure |
| 3 | Colocate scripts, create src/lib/ | Proper Astro script pattern, no DOMContentLoaded guards |
| 4 | Migrate all pages to BaseLayout | Every page becomes thin metadata + content |
| 5 | Unify EN/PT templates | Eliminates structural duplication between languages |
| 6 | DRY content schemas | Single definitions for shared patterns |
| 7 | Final verification + fresh desloppify | Score the clean architecture |
