# jhd-astro Website Improvements — Design Spec

**Date:** 2026-03-26
**Status:** Approved
**Scope:** Three sequential workstreams — codebase cleanup, changelog updates, resources enhancement

---

## Overview

Three workstreams to improve the jhd-astro website, executed sequentially so each builds on the previous:

1. **Desloppify-led codebase cleanup** — mechanical and architectural quality improvements
2. **Changelog updates** — backfill missing release notes blog posts from mythicgme2e CHANGELOG
3. **Resources enhancement** — port search and tooltip features from nimblenomicon

---

## Workstream 1: Desloppify-led Codebase Cleanup

### Approach

Desloppify drives the process end-to-end. Its scan establishes a mechanical baseline (dead code, duplication, complexity). Its living plan prioritizes fixes. Manual audit findings fill architectural gaps that a language-level scanner can't detect.

### Phase 1 — Baseline

- Run `desloppify scan` for mechanical findings
- Run `desloppify status` for score dashboard and dimension health
- Run `desloppify plan` to generate prioritized living plan
- Review plan output against manual audit findings; note gaps in either direction

### Phase 2 — Mechanical Loop

- Work through `desloppify next` one issue at a time
- Use `desloppify autofix` for anything it can handle mechanically
- Manual fixes where autofix can't reach (e.g., carousel extraction, component decomposition)
- Re-scan after each fix to confirm score improvement

### Phase 3 — Architectural Gap-Fill

Once desloppify's plan is exhausted or score plateaus, address issues it can't detect:

- **Layout extraction:** Shared `BaseLayout.astro` to eliminate EN/PT boilerplate duplication across all 12+ page files
- **i18n template unification:** Single page template per route with language-aware content loading, replacing full PT page copies
- **AppSection decomposition:** Break 629-line component into 4-5 focused components (if not already caught by desloppify)
- **Schema helper extraction:** Shared schema utilities in `src/content/config.ts` for downloads, image+alt validation, language enum

### Known Issues from Manual Audit

These inform what to look for in the desloppify plan and what to cover in Phase 3:

| Category | Description | Severity |
|----------|-------------|----------|
| Layout duplication | Every page re-declares html/head/meta/header/footer independently | Critical |
| EN/PT page copies | PT pages are full structural copies with only content slug changed | Critical |
| AppSection.astro | 629 lines — combines carousel, features, store links, disclaimers | Critical |
| Triple carousel | billboard.ts, device-carousel.ts, reviews-rotator.ts share ~50 identical lines each | Critical |
| Hardcoded data | CoreBenefits, Partners, PopularResources, CommunitySupport bake content into HTML | High |
| Inline scripts | ShareBar (33 lines), LanguageFab (79 lines) have extractable inline scripts | High |
| CSS token drift | ShareBar and LanguagePicker define own variables instead of using site-wide tokens | High |
| Schema duplication | Downloads array, image+alt, language enum copy-pasted across collections | High |
| Focus utility duplication | header-dropdown.ts and header-mobile.ts duplicate focus/keyboard patterns | Medium |

### Exit Criteria

- Desloppify score ≥ 98
- All architectural gap-fill items resolved
- `npx astro check && npm run build` passes clean
- No visual regressions (manual QA: header, hero, billboard, footer)

---

## Workstream 2: Changelog Updates

### Scope

The blog has release notes through v1.5.9. The mythicgme2e CHANGELOG covers through v1.6.0 (released 2026-03-25). v1.5.12 was skipped.

### New Posts to Create (EN)

| Version | Date | Key Content |
|---------|------|-------------|
| v1.5.10 | 2026-02-16 | Game Services toggle, import improvements, Android fixes |
| v1.5.11 | TBD (from CHANGELOG) | TBD — pull from CHANGELOG |
| v1.5.13 | 2026-03-23 | Submodule removal, OnePub migration, dice parser v8, performance, security hardening |
| v1.6.0 | 2026-03-25 | Progress Tracks, Discovery Checks, Keyed Scenes, Game Panel tabs — preview angle |

### PT Translation Backfill

- v1.5.8 PT (already missing)
- v1.5.9 PT (already missing)
- Plus PT versions of all four new EN posts above

### Content Approach

- Source from mythicgme2e CHANGELOG entries
- Adapt to blog voice per `Jason_Holt_Voice_Evolution.md` — 8 fingerprint markers
- Follow existing blog post structure (frontmatter schema, category "Release Notes", readTime estimate)
- v1.6.0 gets a "preview" angle highlighting three flagship features

### Exit Criteria

- All posts pass `npx astro check && npm run build`
- Voice audit against the 8 fingerprints — no polished marketing tone
- Blog index and category pages render correctly with new posts

---

## Workstream 3: Resources Enhancement (Search + Tooltips)

### Scope

Enhance the existing `/resources` section with search and tooltips. No new routes or structural changes to the resources collection.

### 3A — Search System

**Build time:**
- Postbuild script walks `src/content/resources/` and `src/content/blog/`
- Generates a full-text search index using a lightweight library (MiniSearch or Lunr)
- Index serialized to a content-hashed JSON file (e.g., `search-index.a1b2c3d4.json`)
- Manifest file (`search-manifest.json`) written for client discovery

**Client side:**
- Search overlay triggered by button and keyboard shortcut (Cmd/Ctrl+K)
- Fuzzy matching with highlighted excerpts
- Prefetch via `<link rel="preload">` for instant load
- Accessible: keyboard navigable, focus management, screen reader announcements

**Reference implementation:** nimblenomicon's `scripts/postbuild.mjs` and `src/components/search/`

### 3B — Tooltip System

**Registry:**
- `src/content/tooltip-library.yaml` — Mythic GME terms (Fate Chart, Chaos Factor, Scene Adjustment, Random Event, etc.)
- Each term: name, slug, definition, triggers (with case sensitivity flag), optional link, enabled flag
- Validated at build time via zod schema

**Detection engine:**
- Pure function adapted from nimblenomicon's `src/lib/tooltip-detection.ts`
- Builds regex from registry, finds matches, resolves overlaps (longest first), first occurrence per block
- Framework-agnostic — works at build time or runtime

**Integration:**
- Remark plugin processes resource markdown at build time
- Injects `data-tooltip` attributes on detected term occurrences
- First occurrence per content block only (not every instance)

**Presentation:**
- Client-side vanilla JS + CSS (no React dependency)
- Hover on desktop, tap on mobile
- Viewport clamping for edge positioning
- Depth limiting to prevent nested tooltips
- Graceful degradation: terms render as styled spans even without JS

**Reference implementation:** nimblenomicon's `src/content/tooltip-library.yaml`, `src/lib/tooltip-detection.ts`, `src/components/tooltips/`

### 3C — Resources Enhancement (Integration)

- Search overlay accessible from `/resources` index page (and optionally site-wide via header)
- Tooltips active on resource detail pages (`/resources/[slug]`) where markdown body renders
- Tooltip registry seeded with Mythic GME terms, not nimblenomicon's rulebook terms
- No changes to resources collection schema or routing

### Exit Criteria

- Search returns relevant results across all resources and blog posts
- Tooltips render on first occurrence of registered terms in resource detail pages
- Both features work on mobile (touch interactions)
- `npx astro check && npm run build` passes clean
- Lighthouse ≥ 90 for Performance/Best Practices/SEO
- Keyboard accessible (search overlay, tooltip dismissal)

---

## Dependencies Between Workstreams

```
Workstream 1 (Cleanup) → Workstream 2 (Changelogs) → Workstream 3 (Resources Enhancement)
```

- Workstream 2 can start once Workstream 1 has stabilized the codebase (no need to wait for score 98 — just clean enough that new content doesn't fight dirty templates)
- Workstream 3 depends on Workstream 1 completing fully, since it touches resources pages and adds build-time processing

## Source Codebases

- **jhd-astro** (`/Users/jholt/development/jhd-business/jhd-astro`) — this project
- **nimblenomicon** (`/Users/jholt/development/jhd-business/nimblenomicon`) — search and tooltip reference implementations
- **mythicgme2e** (`/Users/jholt/development/jhd-business/mythicgme2e`) — CHANGELOG source for blog posts
