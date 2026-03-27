# Site-Wide Search with Orama — Design Spec

**Date:** 2026-03-27
**Status:** Approved
**Scope:** Full-text search across resources and blog using Orama, with context-aware result ranking

---

## Overview

Add site-wide search powered by Orama. Two indexes (resources, blog) built at build time via `@orama/plugin-astro`. A search overlay accessible from any page, with results grouped and ranked based on the current page context. Search term highlighting via `@orama/plugin-match-highlight`.

---

## Indexing

Two Orama databases built at build time:

| DB | Path matcher | Content selectors | Scope |
|----|-------------|-------------------|-------|
| `resources` | `/resources/.+` | `["main"]` | EN resource guides |
| `blog` | `/blog/.+` | `["main"]` | EN blog posts |

PT pages are excluded from search for now (PT users can search EN content). Both DBs are serialized by the plugin and loaded on demand client-side.

---

## Search Triggers

Three ways to open the search overlay, all available on every page:

1. **Search button** in the header nav (magnifying glass icon + "Cmd+K" hint text)
2. **Cmd/Ctrl+K** keyboard shortcut
3. **`/` key** (forward slash) — only when focus is NOT in a text input, textarea, or contenteditable element

All three open the same overlay. Escape closes it.

---

## Search Overlay UI

Modal overlay rendered once in BaseLayout (site-wide).

**Layout:**
- Backdrop overlay (semi-transparent, click to dismiss)
- Centered panel with search input at top
- Results below, grouped into two sections with headers
- Primary group shows first (context-aware), secondary group below

**Context-aware ranking:**
- On `/resources/*` pages → resources results first, blog in "Also in Blog" section
- On `/blog/*` pages → blog results first, resources in "Also in Resources" section
- On any other page → resources first by default, blog second

**Result items show:**
- Title (linked to the page)
- Highlighted excerpt with search terms marked
- Category badge (resource category or blog post category)

**Accessibility:**
- Focus trapped in overlay while open
- Arrow keys navigate results, Enter follows link
- Escape closes overlay, restores focus to trigger element
- `aria-modal="true"`, screen reader announcements for result count
- Body scroll locked while overlay is open

---

## Components

| File | Responsibility |
|------|----------------|
| `src/components/search/SearchOverlay.astro` | Modal UI: backdrop, panel, input, result groups. Owns the `<script>` for search logic (loads both DBs, merges results, handles keyboard nav). |
| `src/components/search/SearchTrigger.astro` | Header button: magnifying glass icon + "Cmd+K" hint. Dispatches `open-search` custom event on click. |

**Search logic** (inside SearchOverlay's `<script>`):
- Import `getOramaDB`, `search` from `@orama/plugin-astro/client`
- Load both DBs on first open (lazy — not at page load)
- On input: search both DBs, merge results into primary/secondary groups based on current `location.pathname`
- Debounce input (150ms)
- Render results with highlighted excerpts via `@orama/plugin-match-highlight`

---

## Integration Points

- `SearchTrigger` added to `Header.astro` nav bar (before the download CTA button)
- `SearchOverlay` rendered in `BaseLayout.astro` (before `</body>`, after Footer)
- `Cmd/Ctrl+K` and `/` listeners in the SearchOverlay script (site-wide since it's in BaseLayout)
- CSS added as `public/styles/components/search.css` in the components layer

---

## Dependencies

- `@orama/plugin-astro` — Astro integration for build-time indexing
- `@orama/plugin-match-highlight` — search term highlighting in results

No other dependencies. No React, no external search services.

---

## Exit Criteria

- Search returns relevant results across all resources and blog posts
- Context-aware grouping works (resources-first on resource pages, blog-first on blog pages)
- Search terms highlighted in result excerpts
- All three triggers work (button, Cmd/Ctrl+K, /)
- Works on mobile (touch to open, tap results)
- Keyboard accessible (arrow nav, Enter, Escape)
- `npx astro check && npm run build` passes clean
- Lighthouse >= 90 (search assets loaded lazily, no impact on initial page load)
