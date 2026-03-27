# Architecture Overhaul — Implementation Plan (v2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure jhd-astro for architectural clarity — domain-based component organization, shared layout, colocated scripts, explicit data separation, proper Astro 5 APIs. Zero functionality loss.

**Architecture:** Astro processed `<script>` tags are `type="module"` (deferred, deduplicated, bundled). Scripts belong inside the components that own them. Shared pure logic lives in `src/lib/`. Static data lives in `src/data/`. Layouts provide the shared HTML shell. Content collections use Astro 5's `loader: glob(...)` API.

**Tech Stack:** Astro 5, TypeScript, CSS layers, Node 22

**Verification command (run after every task):**
```bash
npx astro check && npm run build
```
Note: `src/worker.ts:2` `Cannot find name 'Fetcher'` is pre-existing — ignore.

**Commit hygiene:** Never use `git add -A`. Always stage specific paths (`git add src/` or named files) to avoid accidentally staging `.env.*` or other sensitive untracked files.

---

## Architectural Decisions

### CSS policy
Component styles live in `public/styles/components/` and are loaded globally via CSS layers. This is the established pattern for 15 of 17 components. Astro scoped `<style>` is acceptable for self-contained leaf components (e.g., ShareBar) that define no site-wide tokens. New components (search overlay, tooltips in Workstream 3) should follow the global CSS layer pattern unless they are fully self-contained.

ShareBar's brand tint variables (`--share-facebook`, etc.) in `:root` should move to `public/styles/tokens.css` to keep all CSS variables in one place. This is noted but not a separate task — address during Task 3 when touching ShareBar.

### What NOT to copy from nimblenomicon
Nimblenomicon is Next.js + React with a fundamentally different model. Do not replicate:
- `"use client"` / `"use server"` boundaries — Astro has no equivalent; all `.astro` components are server-only
- React hooks/context patterns — each Astro component independently resolves its state
- Per-route `loading.tsx` / `error.tsx` conventions — Astro has no file-system error boundaries
- DAL with `import "server-only"` — Astro content collections are already a data access layer

### Not in scope (explicit deferrals)
- **View Transitions** — deferred to a future iteration. Colocated scripts are written to work without them; adding them later will require `astro:after-swap` event handlers.
- **Image optimization audit** — inconsistent `<Image>` vs `<img>` patterns exist but are not addressed in this structural overhaul.
- **AppSection decomposition** — the 629-line component should be broken into FeatureCard, StoreLinks, DeviceCarousel. Deferred until after the architectural foundation is solid.
- **`output: 'static'`** — the Cloudflare adapter works for static output but the config doesn't explicitly set `output: 'static'`. Noted for future cleanup.

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
│   │   ├── HeadFonts.astro
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
│   │   └── AppSection.astro
│   └── blog/                         # Blog components
│       └── ShareBar.astro
├── lib/                              # Pure logic (no DOM, no I/O)
│   ├── carousel.ts                   # Shared carousel state machine
│   ├── format-date.ts                # Date formatting utility
│   └── collections.ts               # Content collection query helpers
├── data/                             # Static data
│   └── reviews.ts                    # Review quotes
├── i18n/                             # (existing, unchanged)
├── content/                          # (existing, unchanged)
├── assets/                           # (existing, unchanged)
└── pages/                            # Route files
```

Note: `LanguagePicker.astro` is unused (zero importers) — delete it, don't move it.

---

## Task 0: Fix documentation and pre-flight checks

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Fix Node version in CLAUDE.md**

The `package.json` and `netlify.toml` specify Node 22. CLAUDE.md incorrectly says Node 20. Fix it:

Change `Node.js >=20 <21 required` to `Node.js >=22 <23 required` in CLAUDE.md.

- [ ] **Step 2: Check for frontmatter `slug:` overrides in content files**

```bash
grep -rn '^slug:' src/content/
```

Two files have frontmatter `slug:` overrides:
- `src/content/blog/2025-10-27-blog-launched-and-the-future-of-mythic-apps.md` → `slug: blog-launched-future-mythic-apps`
- `src/content/blog/2025-10-27-blog-launched-and-the-future-of-mythic-apps-pt.md` → `slug: blog-launched-future-mythic-apps-pt`

These overrides will NOT carry over when migrating to `loader: glob(...)` in Task 5. The glob loader derives `id` from the filename. To preserve these URLs, either:
- (a) Rename the files to match the desired slug, or
- (b) Use `generateId` option in the glob loader to preserve slug behavior

Document this for Task 5. Flag it now so it's not a surprise.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "fix: correct Node version requirement to 22 in CLAUDE.md"
```

---

## Task 1: Create BaseLayout and reorganize components (atomic)

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Move: All components into domain subdirectories
- Delete: `src/components/LanguagePicker.astro` (unused)
- Update: All import paths

Tasks 1 and 2 from the previous plan are merged into one atomic operation. BaseLayout cannot build until components are in their new locations, so both changes must land in one commit.

- [ ] **Step 1: Create directories**

```bash
mkdir -p src/layouts src/components/layout src/components/home src/components/apps src/components/blog
```

- [ ] **Step 2: Move components to domain directories**

```bash
# Layout components
git mv src/components/Header.astro src/components/layout/
git mv src/components/Footer.astro src/components/layout/
git mv src/components/HeadFonts.astro src/components/layout/
git mv src/components/UtilBar.astro src/components/layout/
git mv src/components/LanguageFab.astro src/components/layout/
git mv src/components/PageHeader.astro src/components/layout/

# Homepage components
git mv src/components/Hero.astro src/components/home/
git mv src/components/Billboard.astro src/components/home/
git mv src/components/CoreBenefits.astro src/components/home/
git mv src/components/CommunitySupport.astro src/components/home/
git mv src/components/Partners.astro src/components/home/
git mv src/components/PopularResources.astro src/components/home/
git mv src/components/MakersNote.astro src/components/home/
git mv src/components/ReviewsRotator.astro src/components/home/

# Apps components
git mv src/components/AppSection.astro src/components/apps/

# Blog components
git mv src/components/ShareBar.astro src/components/blog/

# Delete dead component
git rm src/components/LanguagePicker.astro
```

- [ ] **Step 3: Create `src/layouts/BaseLayout.astro`**

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
const altLang = lang === 'pt' ? 'en' : 'pt';
const altPath = lang === 'pt' ? canonicalPath.replace('/pt/', '/') : `/pt${canonicalPath}`;
const altUrl = new URL(altPath, siteUrl).toString();
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
    <link rel="alternate" hreflang={lang} href={canonicalUrl} />
    <link rel="alternate" hreflang={altLang} href={altUrl} />
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
    <script>
      // Skip link focus management (site-wide a11y)
      function focusTarget(target: HTMLElement) {
        const prevTabIndex = target.getAttribute('tabindex');
        const needsTabIndex = prevTabIndex === null;
        if (needsTabIndex) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: false });
        const onBlur = () => {
          if (needsTabIndex) target.removeAttribute('tabindex');
          target.removeEventListener('blur', onBlur);
        };
        target.addEventListener('blur', onBlur);
      }

      document.querySelectorAll<HTMLAnchorElement>('a.skip[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
          const id = (link.getAttribute('href') || '').slice(1);
          if (!id) return;
          const target = document.getElementById(id);
          if (!target) return;
          e.preventDefault();
          focusTarget(target);
        });
      });
    </script>
  </body>
</html>
```

Key additions vs previous plan:
- `hreflang` alternate links for i18n SEO
- `Astro.site?.toString()` for type-safe URL handling
- Skip-link script placed before `</body>` (valid HTML)
- Uses `querySelectorAll` for deduplication safety

- [ ] **Step 4: Update ALL import paths across the codebase**

Update every file that imports a component. The patterns:

**Layout components** (`Header`, `Footer`, `HeadFonts`, `UtilBar`, `PageHeader`):
- `../components/X.astro` → `../components/layout/X.astro`
- `../../components/X.astro` → `../../components/layout/X.astro`

**Home components** (`Hero`, `Billboard`, `CoreBenefits`, `CommunitySupport`, `Partners`, `PopularResources`, `MakersNote`, `ReviewsRotator`):
- `../components/X.astro` → `../components/home/X.astro`
- `../../components/X.astro` → `../../components/home/X.astro`

**Apps components** (`AppSection`):
- `../components/AppSection.astro` → `../components/apps/AppSection.astro`
- `../../components/AppSection.astro` → `../../components/apps/AppSection.astro`

**Blog components** (`ShareBar`):
- `../components/ShareBar.astro` → `../components/blog/ShareBar.astro`
- `../../components/ShareBar.astro` → `../../components/blog/ShareBar.astro`

**Internal component imports** (Footer imports LanguageFab — both now in `layout/`):
- `./LanguageFab.astro` stays as `./LanguageFab.astro` (same directory)

**Script imports inside components** (Billboard imports billboard.ts, etc.):
- Update relative paths from new component locations to `src/scripts/`
- These will change again in Task 2 when scripts get colocated, but they must be correct here for the build to pass

- [ ] **Step 5: Verify build**

```bash
npx astro check && npm run build
```

Expected: PASS — no functionality change, only file locations and BaseLayout (not yet consumed).

- [ ] **Step 6: Commit**

```bash
git add src/layouts/ src/components/ src/pages/ src/pages/pt/
git commit -m "refactor: add BaseLayout, organize components by domain, delete unused LanguagePicker"
```

---

## Task 2: Colocate scripts with components, create src/lib/

**Files:**
- Create: `src/lib/carousel.ts` (move from scripts)
- Create: `src/lib/format-date.ts` (move from scripts)
- Create: `src/lib/collections.ts` (new — query helpers)
- Rename: `src/data/reviews-data.ts` → `src/data/reviews.ts`
- Inline: billboard.ts → Billboard.astro
- Inline: device-carousel.ts → AppSection.astro
- Inline: reviews-rotator.ts → ReviewsRotator.astro
- Inline: header-dropdown.ts + header-mobile.ts + header-sticky.ts → Header.astro
- Remove: skip-link-focus.ts (now in BaseLayout from Task 1)
- Delete: `src/scripts/` directory

- [ ] **Step 1: Create `src/lib/` and move shared modules**

```bash
mkdir -p src/lib
git mv src/scripts/carousel.ts src/lib/carousel.ts
git mv src/scripts/format-date.ts src/lib/format-date.ts
git mv src/data/reviews-data.ts src/data/reviews.ts
```

- [ ] **Step 2: Create `src/lib/collections.ts` — content collection query helpers**

This reduces duplicated collection-querying logic across blog and resource pages:

```typescript
import { getCollection, type CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;
type ResourceEntry = CollectionEntry<'resources'>;

export async function getBlogPostsByLang(lang: 'en' | 'pt' = 'en'): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', ({ data }) => data.lang === lang || data.lang === undefined);
  return posts.slice().sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getResourcesByLang(lang: 'en' | 'pt' = 'en'): Promise<ResourceEntry[]> {
  const resources = await getCollection('resources', ({ data }) => data.lang === lang);
  return resources.slice().sort((a, b) => a.data.order - b.data.order);
}
```

- [ ] **Step 3: Update imports of moved modules**

All files importing from `../scripts/carousel` → `../lib/carousel` (adjust relative path for new component locations).
All files importing from `../data/reviews-data` → `../data/reviews`.
All files importing from `../../scripts/format-date` → `../../lib/format-date`.

- [ ] **Step 4: Inline billboard.ts into Billboard.astro**

In `src/components/home/Billboard.astro`, replace:
```astro
<script>
  import "../scripts/billboard.ts";
</script>
```

With the full billboard script content. Remove the `DOMContentLoaded` guard and `initBillboard` wrapper — Astro processed scripts are `type="module"` (deferred). Import carousel from `../../lib/carousel`.

After inlining, verify in dev tools that the script's DOM queries find their targets. Check browser console for null reference errors.

- [ ] **Step 5: Inline device-carousel.ts into AppSection.astro**

Same pattern. Replace the import with full device-carousel code (minus DOMContentLoaded guard). Import carousel from `../../lib/carousel`.

After inlining, verify DOM targeting works.

- [ ] **Step 6: Inline reviews-rotator.ts into ReviewsRotator.astro**

Same pattern. Import carousel from `../../lib/carousel` and reviews data from `../../data/reviews`.

After inlining, verify DOM targeting works.

- [ ] **Step 7: Inline header scripts into Header.astro**

Replace the multi-import `<script>` block with actual code from header-dropdown.ts, header-mobile.ts, and header-sticky.ts. Remove all DOMContentLoaded guards.

Remove the `skip-link-focus.ts` import — it's now in BaseLayout.

After inlining, verify DOM targeting works for: dropdown toggle, mobile nav, sticky scroll behavior.

- [ ] **Step 8: Convert ShareBar.astro from `is:inline` to processed script**

Remove `is:inline` and `type="module"` from the `<script>` tag. Switch from `querySelector` to `querySelectorAll` and iterate, since processed scripts are deduplicated.

Also move ShareBar's brand tint CSS variables (`--share-facebook`, `--share-reddit`, `--share-bluesky`, `--share-rss`) from the component's `<style>` `:root` block to `public/styles/tokens.css`.

**Deduplication principle:** Astro processed `<script>` tags run once per page even if the component appears N times. Scripts MUST use `querySelectorAll` and iterate for any component that could appear multiple times. Components guaranteed to appear once (Header, Billboard) can use `querySelector`, but `querySelectorAll` is safer as default.

- [ ] **Step 9: Delete `src/scripts/` and empty `src/pages/guides/`**

```bash
rm -rf src/scripts/
rmdir src/pages/guides/ 2>/dev/null
```

- [ ] **Step 10: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 11: Commit**

```bash
git add src/lib/ src/data/ src/components/ src/layouts/ src/pages/
git commit -m "refactor: colocate scripts with components, create src/lib/ with shared utilities"
```

---

## Task 3: Migrate all pages to BaseLayout

**Files:**
- Modify: Every page file in `src/pages/` and `src/pages/pt/`

- [ ] **Step 1: Migrate homepage**

Replace `src/pages/index.astro` boilerplate with BaseLayout wrapper (~30 lines). Pass JSON-LD via `<Fragment slot="head">`, UtilBar via `<slot name="before-header">`.

- [ ] **Step 2: Migrate about page**

Replace boilerplate with BaseLayout. Keep the 5 section blocks in the default slot. Set `mainClass="about-main"`.

- [ ] **Step 3: Migrate remaining EN pages one at a time**

For each page (apps, privacy, support, terms, contact, 404, blog/index, blog/[slug], blog/category/[category], resources/index, resources/[slug]):
1. Replace html/head/body with `<BaseLayout>` wrapper
2. Pass page metadata as props (title, description, canonicalPath)
3. Move page-specific head content to `<Fragment slot="head">` (e.g., Turnstile on support)
4. Keep main content in default slot
5. Set `mainClass` to match existing class

Use `src/lib/collections.ts` helpers in blog/index and resources/index to replace inline collection querying.

- [ ] **Step 4: Migrate PT pages**

Same pattern. **Fix the PT homepage canonical URL bug:** current `pt/index.astro` has `canonical` pointing to `/` (EN homepage) instead of `/pt/`. BaseLayout computes canonical from `canonicalPath` prop — ensure each PT page passes its own PT path.

- [ ] **Step 5: Verify build after each page**

```bash
npx astro check && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/pages/ src/layouts/
git commit -m "refactor: migrate all pages to BaseLayout, fix PT canonical URLs"
```

---

## Task 4: Migrate content collections to Astro 5 API and DRY schemas

**Files:**
- Modify: `src/content/config.ts`
- Modify: All files using `entry.slug` (changes to `entry.id` with glob loader)
- Possibly rename: 2 blog posts with frontmatter `slug:` overrides

The current `type: "content"` is the legacy Astro v2-v4 API running through a compatibility shim. Astro 5 uses `loader: glob(...)`. Since we're already touching config.ts, this is the right time to migrate.

**Pre-flight:** Two blog posts have frontmatter `slug:` overrides that won't carry over:
- `2025-10-27-blog-launched-and-the-future-of-mythic-apps.md` → `slug: blog-launched-future-mythic-apps`
- `2025-10-27-blog-launched-and-the-future-of-mythic-apps-pt.md` → `slug: blog-launched-future-mythic-apps-pt`

Either rename these files to match their slug values, or use `generateId` in the glob loader config. Renaming is simpler.

- [ ] **Step 1: Rename files with slug overrides**

```bash
git mv src/content/blog/2025-10-27-blog-launched-and-the-future-of-mythic-apps.md src/content/blog/blog-launched-future-mythic-apps.md
git mv src/content/blog/2025-10-27-blog-launched-and-the-future-of-mythic-apps-pt.md src/content/blog/blog-launched-future-mythic-apps-pt.md
```

Remove the `slug:` frontmatter field from both files since the filename now IS the slug/id.

- [ ] **Step 2: Migrate config.ts — glob loader + shared schema fragments**

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
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
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

- [ ] **Step 3: Update all `entry.slug` → `entry.id` (43 occurrences across 10 files)**

With the glob loader, entries use `id` (filename without extension) instead of `slug`. The URL parameter in routes stays named `slug` for URL aesthetics, but the value comes from `entry.id`.

Files to update:
- `src/pages/blog/index.astro` — 4 occurrences
- `src/pages/blog/[slug].astro` — 2 occurrences
- `src/pages/blog/category/[category].astro` — 2 occurrences
- `src/pages/resources/index.astro` — 4 occurrences
- `src/pages/resources/[slug].astro` — 10 occurrences
- `src/pages/rss.xml.ts` — 1 occurrence
- `src/pages/pt/blog/index.astro` — 4 occurrences
- `src/pages/pt/blog/[slug].astro` — 2 occurrences
- `src/pages/pt/resources/index.astro` — 4 occurrences
- `src/pages/pt/resources/[slug].astro` — 10 occurrences

Also update `src/lib/collections.ts` if it references `.slug`.

- [ ] **Step 4: Verify routes are unchanged**

```bash
npx astro check && npm run build
```

After build, diff the `dist/` directory structure to verify no routes changed:

```bash
# Before Task 4, save route list:
find dist -name "*.html" | sort > /tmp/routes-before.txt
# After Task 4:
find dist -name "*.html" | sort > /tmp/routes-after.txt
diff /tmp/routes-before.txt /tmp/routes-after.txt
```

Expected: Only the 2 renamed blog post routes should differ (if filenames changed). All other routes identical.

- [ ] **Step 5: Commit**

```bash
git add src/content/ src/pages/ src/lib/
git commit -m "refactor: migrate to Astro 5 content loader API, DRY up schemas"
```

---

## Task 5: Final verification, cleanup, and desloppify fresh scan

**Files:** None modified (verification only)

- [ ] **Step 1: Full build**

```bash
npx astro check && npm run build
```

- [ ] **Step 2: Manual QA**

- [ ] Homepage renders (header, hero, billboard carousel, reviews, footer)
- [ ] About page renders in EN and PT
- [ ] Blog index and posts render (including the renamed blog-launched posts)
- [ ] Resources index and guides render
- [ ] Apps page carousel works (prev/next, swipe, lightbox)
- [ ] Support page Turnstile form renders
- [ ] Mobile viewport responsive, no overflow
- [ ] Keyboard nav works (tab, skip link, dropdown)
- [ ] `_redirects` file still valid (no route changes except renamed blog posts)
- [ ] View page source: hreflang tags present on all pages

- [ ] **Step 3: Fresh desloppify scan**

```bash
desloppify scan
desloppify status
```

Record the new baseline. The architectural fixes should significantly improve:
- Abstraction fitness (BaseLayout, carousel utility)
- Design coherence (domain grouping, thin pages)
- Convention drift (consistent script pattern, CSS policy stated)
- Mid/high level elegance (clear ownership, navigable structure)
- Structure navigation (src/lib/, src/data/, domain components)

- [ ] **Step 4: Commit**

```bash
git add scorecard.png
git commit -m "chore: record post-architecture desloppify score"
```

---

## Task 6 (deferred): Evaluate EN/PT page template unification

After Tasks 1-5 are complete, assess whether further EN/PT unification is needed. BaseLayout (Task 3) already eliminates the html/head/body duplication. Collection query helpers (Task 2) reduce data logic duplication. Components derive language from `Astro.url`.

**Remaining duplication to evaluate:**
- Page-level metadata (titles, descriptions) — could be data-driven
- Page-specific prose (about page sections) — may justify page components
- Number of pages that are truly identical between EN/PT after BaseLayout

If the remaining duplication is small, this task can be skipped. If substantial, create `src/components/pages/` with shared page components as originally planned.

---

## Summary

| Task | Description | Impact |
|------|-------------|--------|
| 0 | Fix Node docs, pre-flight checks | Prevents confusion, surfaces slug override risk |
| 1 | BaseLayout + component reorg (atomic) | Shared shell, domain grouping, hreflang, dead code removal |
| 2 | Colocate scripts, create src/lib/ | Proper Astro patterns, collection helpers, no DOMContentLoaded |
| 3 | Migrate all pages to BaseLayout | Thin pages, fix PT canonical bug, use collection helpers |
| 4 | Content collections → Astro 5 API + DRY | Future-proof, single schema definitions, route verification |
| 5 | Final verification + desloppify | Score the clean architecture |
| 6 | (Deferred) EN/PT template evaluation | Decide based on remaining duplication after Tasks 1-5 |
