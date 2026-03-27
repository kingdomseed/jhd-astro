# Orama Site-Wide Search — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add site-wide full-text search across resources and blog content using Orama, with context-aware result grouping, highlighted excerpts, and keyboard navigation.

**Architecture:** `@orama/plugin-astro` builds two search indexes at build time (resources, blog). A SearchOverlay component in BaseLayout provides the UI — triggered by header button, Cmd/Ctrl+K, or `/`. Results are grouped by content type with the primary group determined by the current page context.

**Tech Stack:** Orama (`@orama/plugin-astro`, `@orama/plugin-match-highlight`), Astro 6, TypeScript, CSS layers

**Verification command (run after every task):**
```bash
npx astro check && npm run build
```

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `astro.config.mjs` | Add Orama plugin with two DB configs |
| Modify | `package.json` | Add Orama dependencies |
| Create | `src/components/search/SearchTrigger.astro` | Header search button (icon + shortcut hint) |
| Create | `src/components/search/SearchOverlay.astro` | Modal overlay with search input, grouped results, keyboard nav |
| Create | `public/styles/components/search.css` | Search overlay and trigger styles |
| Modify | `public/global.css` | Add search.css import to components layer |
| Modify | `src/components/layout/Header.astro` | Add SearchTrigger to nav |
| Modify | `src/layouts/BaseLayout.astro` | Add SearchOverlay before closing body |

---

## Task 1: Install Orama dependencies and configure indexing

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Install Orama packages**

```bash
npm install @orama/plugin-astro @orama/plugin-match-highlight
```

- [ ] **Step 2: Add Orama integration to astro.config.mjs**

Replace the full file with:

```javascript
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import orama from "@orama/plugin-astro";

export default defineConfig({
  site: 'https://jasonholtdigital.com',

  integrations: [
    sitemap(),
    orama({
      resources: {
        pathMatcher: /^\/resources\/.+/,
        contentSelectors: ["main"],
      },
      blog: {
        pathMatcher: /^\/blog\/(?!category|index).+/,
        contentSelectors: ["main"],
      },
    }),
  ],

  redirects: {
    '/privacy-policy': '/privacy',
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        mode: "compile"
      }
    }
  },

  adapter: cloudflare({
    imageService: 'compile',
  }),
});
```

The `blog` pathMatcher excludes `/blog/category/*` and `/blog/index` to avoid indexing listing pages.

- [ ] **Step 3: Verify build**

```bash
npx astro check && npm run build
```

Expected: Build passes. Look for Orama output in build logs confirming indexes were created.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json astro.config.mjs
git commit -m "feat: add Orama search indexing for resources and blog"
```

---

## Task 2: Create SearchTrigger component

**Files:**
- Create: `src/components/search/SearchTrigger.astro`

- [ ] **Step 1: Create the search trigger button**

```bash
mkdir -p src/components/search
```

Create `src/components/search/SearchTrigger.astro`:

```astro
---
// Search trigger button for the header nav.
// Dispatches 'open-search' custom event when clicked.
---
<button
  class="search-trigger"
  type="button"
  aria-label="Search (Cmd+K or /)"
  data-search-trigger
>
  <i class="fa-slab fa-regular fa-magnifying-glass" aria-hidden="true"></i>
  <span class="search-trigger__hint">
    <kbd>/</kbd>
  </span>
</button>

<script>
  document.querySelectorAll<HTMLButtonElement>('[data-search-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('open-search'));
    });
  });
</script>
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/search/SearchTrigger.astro
git commit -m "feat: add SearchTrigger component"
```

---

## Task 3: Create SearchOverlay component

**Files:**
- Create: `src/components/search/SearchOverlay.astro`

- [ ] **Step 1: Create the search overlay**

Create `src/components/search/SearchOverlay.astro`. This component uses DOM methods (createElement, textContent, appendChild) for rendering search results to avoid innerHTML XSS concerns:

```astro
---
// Site-wide search overlay.
// Loads Orama DBs lazily on first open, searches both resources and blog,
// groups results by context (current page determines primary group).
---
<div
  id="search-overlay"
  class="search-overlay"
  role="dialog"
  aria-modal="true"
  aria-label="Site search"
  hidden
>
  <div class="search-overlay__backdrop" data-search-close></div>
  <div class="search-overlay__panel">
    <div class="search-overlay__header">
      <div class="search-overlay__input-wrap">
        <i class="fa-slab fa-regular fa-magnifying-glass search-overlay__icon" aria-hidden="true"></i>
        <input
          id="search-input"
          class="search-overlay__input"
          type="search"
          placeholder="Search resources and blog..."
          autocomplete="off"
        />
        <kbd class="search-overlay__esc">Esc</kbd>
      </div>
    </div>
    <div class="search-overlay__body" id="search-results">
      <p class="search-overlay__empty">Type to search across resources and blog posts.</p>
    </div>
  </div>
</div>

<script>
  import { getOramaDB, search } from '@orama/plugin-astro/client';

  const overlay = document.getElementById('search-overlay')!;
  const input = document.getElementById('search-input') as HTMLInputElement;
  const resultsContainer = document.getElementById('search-results')!;
  const backdrop = overlay.querySelector('[data-search-close]')!;

  type OramaDB = Awaited<ReturnType<typeof getOramaDB>>;
  let resourcesDB: OramaDB | null = null;
  let blogDB: OramaDB | null = null;
  let debounceTimer: ReturnType<typeof setTimeout>;
  let lastFocused: HTMLElement | null = null;

  async function ensureDBs() {
    if (!resourcesDB) resourcesDB = await getOramaDB('resources');
    if (!blogDB) blogDB = await getOramaDB('blog');
  }

  function openOverlay() {
    lastFocused = document.activeElement as HTMLElement;
    overlay.hidden = false;
    document.body.classList.add('search-open');
    input.value = '';
    clearResults();
    showEmpty('Type to search across resources and blog posts.');
    requestAnimationFrame(() => input.focus());
    ensureDBs();
  }

  function closeOverlay() {
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    if (lastFocused) lastFocused.focus();
  }

  function clearResults() {
    resultsContainer.textContent = '';
  }

  function showEmpty(message: string) {
    clearResults();
    const p = document.createElement('p');
    p.className = 'search-overlay__empty';
    p.textContent = message;
    resultsContainer.appendChild(p);
  }

  interface SearchHit {
    id: string;
    score: number;
    document: Record<string, unknown>;
  }

  function highlightTerm(text: string, term: string): DocumentFragment {
    const frag = document.createDocumentFragment();
    if (!term.trim()) {
      frag.appendChild(document.createTextNode(text));
      return frag;
    }
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    for (const part of parts) {
      if (regex.test(part)) {
        const mark = document.createElement('mark');
        mark.textContent = part;
        frag.appendChild(mark);
        regex.lastIndex = 0;
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    }
    return frag;
  }

  function truncateExcerpt(text: string, maxLen = 160): string {
    if (text.length <= maxLen) return text;
    return text.slice(0, maxLen).replace(/\s\S*$/, '') + '\u2026';
  }

  function renderResultLink(hit: SearchHit, term: string): HTMLAnchorElement {
    const doc = hit.document as { path?: string; title?: string; content?: string };
    const link = document.createElement('a');
    link.className = 'search-result';
    link.href = String(doc.path ?? '#');

    const titleSpan = document.createElement('span');
    titleSpan.className = 'search-result__title';
    titleSpan.textContent = String(doc.title ?? 'Untitled');
    link.appendChild(titleSpan);

    const excerptSpan = document.createElement('span');
    excerptSpan.className = 'search-result__excerpt';
    const excerpt = truncateExcerpt(String(doc.content ?? ''));
    excerptSpan.appendChild(highlightTerm(excerpt, term));
    link.appendChild(excerptSpan);

    return link;
  }

  function renderGroup(title: string, hits: SearchHit[], term: string): HTMLDivElement | null {
    if (!hits.length) return null;
    const group = document.createElement('div');
    group.className = 'search-group';

    const heading = document.createElement('h3');
    heading.className = 'search-group__title';
    heading.textContent = title;
    group.appendChild(heading);

    for (const hit of hits.slice(0, 5)) {
      group.appendChild(renderResultLink(hit, term));
    }
    return group;
  }

  async function doSearch(term: string) {
    if (!term.trim()) {
      showEmpty('Type to search across resources and blog posts.');
      return;
    }

    await ensureDBs();
    if (!resourcesDB || !blogDB) return;

    const [resResults, blogResults] = await Promise.all([
      search(resourcesDB, { term, limit: 5 }),
      search(blogDB, { term, limit: 5 }),
    ]);

    const resHits = (resResults?.hits ?? []) as SearchHit[];
    const blogHits = (blogResults?.hits ?? []) as SearchHit[];

    if (!resHits.length && !blogHits.length) {
      showEmpty(`No results for \u201c${term}\u201d`);
      return;
    }

    clearResults();

    const onBlog = location.pathname.startsWith('/blog/');
    const primaryTitle = onBlog ? 'Blog' : 'Resources';
    const secondaryTitle = onBlog ? 'Also in Resources' : 'Also in Blog';
    const primaryHits = onBlog ? blogHits : resHits;
    const secondaryHits = onBlog ? resHits : blogHits;

    const primaryGroup = renderGroup(primaryTitle, primaryHits, term);
    const secondaryGroup = renderGroup(secondaryTitle, secondaryHits, term);

    if (primaryGroup) resultsContainer.appendChild(primaryGroup);
    if (secondaryGroup) resultsContainer.appendChild(secondaryGroup);

    const count = resHits.length + blogHits.length;
    resultsContainer.setAttribute('aria-label', `${count} result${count === 1 ? '' : 's'} found`);
  }

  // Input handler with debounce
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => doSearch(input.value), 150);
  });

  // Close on backdrop click
  backdrop.addEventListener('click', closeOverlay);

  // Keyboard: Escape to close, arrow keys to navigate results
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeOverlay();
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const links = Array.from(resultsContainer.querySelectorAll<HTMLAnchorElement>('.search-result'));
      if (!links.length) return;
      const current = document.activeElement as HTMLElement;
      const idx = links.indexOf(current as HTMLAnchorElement);
      let next: number;
      if (e.key === 'ArrowDown') {
        next = idx < 0 ? 0 : Math.min(idx + 1, links.length - 1);
      } else {
        next = idx <= 0 ? -1 : idx - 1;
      }
      if (next < 0) {
        input.focus();
      } else {
        links[next].focus();
      }
    }
  });

  // Global keyboard shortcuts: Cmd/Ctrl+K, /
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.hidden) openOverlay(); else closeOverlay();
      return;
    }
    if (e.key === '/' && overlay.hidden) {
      const tag = (document.activeElement?.tagName ?? '').toLowerCase();
      const editable = document.activeElement?.getAttribute('contenteditable');
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || editable) return;
      e.preventDefault();
      openOverlay();
    }
  });

  // Listen for custom event from SearchTrigger
  document.addEventListener('open-search', () => {
    if (overlay.hidden) openOverlay(); else closeOverlay();
  });
</script>
```

- [ ] **Step 2: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/search/SearchOverlay.astro
git commit -m "feat: add SearchOverlay component with Orama integration"
```

---

## Task 4: Create search CSS

**Files:**
- Create: `public/styles/components/search.css`
- Modify: `public/global.css`

- [ ] **Step 1: Create search styles**

Create `public/styles/components/search.css`:

```css
/* Search trigger button in header */
.search-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.6rem;
  border: var(--border-subtle);
  background: var(--color-surface);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: border-color 0.12s ease, color 0.12s ease;
}

.search-trigger:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

.search-trigger:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.search-trigger i {
  font-size: 0.9rem;
}

.search-trigger__hint {
  font-size: 0.75rem;
}

.search-trigger__hint kbd {
  padding: 0.1rem 0.35rem;
  border: var(--border-subtle);
  background: var(--color-surface-2);
  font-family: inherit;
  font-size: 0.7rem;
}

/* Overlay */
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
}

.search-overlay[hidden] {
  display: none;
}

.search-overlay__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.search-overlay__panel {
  position: relative;
  width: min(600px, 90vw);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: var(--border-thick);
  box-shadow: var(--shadow-lift);
  overflow: hidden;
}

.search-overlay__header {
  padding: 1rem;
  border-bottom: var(--border-subtle);
}

.search-overlay__input-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-overlay__icon {
  color: var(--color-text-muted);
  font-size: 1rem;
  flex-shrink: 0;
}

.search-overlay__input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  background: transparent;
  color: var(--color-text);
}

.search-overlay__input::placeholder {
  color: var(--color-text-muted);
}

.search-overlay__esc {
  padding: 0.15rem 0.4rem;
  border: var(--border-subtle);
  background: var(--color-surface-2);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.search-overlay__body {
  padding: 0.5rem;
  overflow-y: auto;
  flex: 1;
}

.search-overlay__empty {
  padding: 2rem 1rem;
  text-align: center;
  color: var(--color-text-muted);
}

/* Result groups */
.search-group {
  margin-bottom: 0.5rem;
}

.search-group__title {
  padding: 0.5rem 0.75rem 0.25rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  font-weight: 600;
}

/* Individual results */
.search-result {
  display: block;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  color: var(--color-text);
  border-bottom: var(--border-subtle);
  transition: background 0.1s ease;
}

.search-result:last-child {
  border-bottom: none;
}

.search-result:hover,
.search-result:focus {
  background: var(--color-surface-2);
  outline: none;
}

.search-result__title {
  display: block;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.search-result__excerpt {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.search-result__excerpt mark {
  background: var(--color-accent);
  color: var(--color-text);
  padding: 0 0.1rem;
}

/* Body scroll lock when search is open */
body.search-open {
  overflow: hidden;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .search-overlay {
    padding-top: 0;
    align-items: stretch;
  }

  .search-overlay__panel {
    width: 100%;
    max-height: 100vh;
    border: none;
    box-shadow: none;
  }

  .search-trigger__hint {
    display: none;
  }
}
```

- [ ] **Step 2: Add search CSS to global.css**

Add this line to `public/global.css` after the `apps.css` import (line 34) and before the `overrides.css` import:

```css
@import url("/styles/components/search.css") layer(components);
```

- [ ] **Step 3: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add public/styles/components/search.css public/global.css
git commit -m "feat: add search overlay and trigger CSS"
```

---

## Task 5: Integrate search into Header and BaseLayout

**Files:**
- Modify: `src/components/layout/Header.astro`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add SearchTrigger to Header**

In `src/components/layout/Header.astro`, add the import in the frontmatter:
```astro
import SearchTrigger from '../search/SearchTrigger.astro';
```

Insert `<SearchTrigger />` in the desktop nav, just before the `<!-- Download call to action -->` comment (around line 55):

```astro
      <SearchTrigger />

      <!-- Download call to action: dropdown menu with platform links -->
```

- [ ] **Step 2: Add SearchOverlay to BaseLayout**

In `src/layouts/BaseLayout.astro`, add the import in the frontmatter:
```astro
import SearchOverlay from '../components/search/SearchOverlay.astro';
```

Insert `<SearchOverlay />` just before the skip-link `<script>` tag (around line 80):

```astro
      <Footer />
    </div>
    <SearchOverlay />
    <script>
```

- [ ] **Step 3: Verify build**

```bash
npx astro check && npm run build
```

- [ ] **Step 4: Manual QA**

Start the dev server:
```bash
npm run dev
```

Verify:
- [ ] Search button appears in header nav
- [ ] Clicking the button opens the overlay
- [ ] Cmd/Ctrl+K opens the overlay
- [ ] `/` key opens the overlay (not when in a text field)
- [ ] Typing returns results from both resources and blog
- [ ] Results grouped correctly (resources first on resource pages, blog first on blog pages)
- [ ] Arrow keys navigate results, Enter follows link
- [ ] Escape closes overlay
- [ ] Backdrop click closes overlay
- [ ] Search terms highlighted in excerpts
- [ ] Mobile: overlay is full-width, shortcut hint hidden

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.astro src/layouts/BaseLayout.astro
git commit -m "feat: integrate search into Header and BaseLayout"
```

---

## Task 6: Final verification and push

**Files:** None modified

- [ ] **Step 1: Full build**

```bash
npx astro check && npm run build
```

- [ ] **Step 2: Run tests**

```bash
npm test
```

- [ ] **Step 3: Push**

```bash
git push
```

---

## Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Install Orama, configure indexing | astro.config.mjs, package.json |
| 2 | Create SearchTrigger component | src/components/search/SearchTrigger.astro |
| 3 | Create SearchOverlay component | src/components/search/SearchOverlay.astro |
| 4 | Create search CSS | public/styles/components/search.css, global.css |
| 5 | Integrate into Header + BaseLayout | Header.astro, BaseLayout.astro |
| 6 | Final verification and push | -- |
