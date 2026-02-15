# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Important: `AGENTS.md` is the canonical repository playbook. This file tailors those rules for Claude-specific workflows.

## Commands

**Development:**
- `npm install` - Install dependencies (Node.js >=20 <21 required)
- `npm run dev` - Start development server (runs `astro dev`)
- `npm run build` - Build static site to `dist/`
- `npm run preview` - Preview the built site

**Health checks before commits:**
- `npx astro check` - Type checking and linting
- `npm run build` - Ensure build passes
- Combined: `npx astro check && npm run build`

## Architecture

This is a **static Astro v5 site** with no SSR, no server actions, and no complex data fetching. Key architectural principles:

**🏆 GOLD STANDARD:** The homepage (`src/pages/index.astro`) represents our gold standard for design quality, voice, user experience, and component implementation. Reference it for:
- Component composition and structure
- Visual design patterns and spacing
- Voice and content approach
- Accessibility implementation
- Performance optimization
- Mobile responsiveness

All other pages should match or aspire to this level of polish.

### Core Structure
- **Component-driven:** Pages compose small, single-purpose components from `src/components/`
- **Content collections:** Blog and Resources pull from `src/content/` with schemas defined in `src/content/config.ts`
- **Static assets:** Served from `public/` (referenced as `/filename.ext`)
- **Layered CSS:** `public/global.css` imports layer files: tokens → base → utilities → components → overrides
- **Minimal JS:** TypeScript modules in `src/scripts/` for interactions, hoisted in Astro components

### CSS Layer Architecture
```css
@layer tokens, base, utilities, components, overrides;
```
- `tokens.css`: CSS variables, color palette, sizing scales
- `base.css`: Element defaults, typography
- `utilities.css`: Layout helpers (.container, .row, .section)
- `components/*.css`: Component-specific styles
- `overrides.css`: Small one-off fixes

## Key Files & Patterns

- **`src/pages/index.astro`**: Gold standard page assembly and global head tags
- **`src/components/Header.astro`**: Navigation with accessible dropdown menu
- **`src/scripts/header-dropdown.ts`**: TypeScript module for dropdown behavior
- **`public/global.css`**: CSS entrypoint with layer imports
- **`src/content/config.ts`**: Content collection schemas with validation
- **`astro.config.mjs`**: Minimal config with Cloudflare adapter

## Editing Guidelines

**Safety & scope:**
- Make single, targeted changes preserving existing boundaries
- Keep diffs minimal and focused
- Preserve ARIA attributes and accessibility features
- Reference AGENTS.md for detailed standards

**Client-side TypeScript conventions:**
- Use hoisted script modules in `.astro` components
- Import from `src/scripts/` for reusable behaviors
- Use data attributes for selectors (`data-dropdown`, `data-menu`)
- Guard against nulls and support multiple instances
- Add proper TypeScript types

**Styling:**
- Add component styles to appropriate layer file in `public/styles/`
- Keep selectors scoped to avoid regressions
- Follow neo-brutalist design system (thick borders, flat design, high contrast)
- Use existing CSS variables from tokens.css

**Content Management:**
- Blog posts in `src/content/blog/` with required frontmatter
- Resources in `src/content/resources/` with category organization
- Page data in `src/content/pages/` — frontmatter drives feature lists (mythicHighlights, backgroundHighlights); markdown body is documentation-only, not rendered
- PT pages use separate `-pt.md` content files (e.g., `about-pt.md`), not the EN versions
- Use `isSample: true` for placeholder content
- Images require alt text for accessibility

## Before Committing

**Required checks:**
1. Run `npx astro check && npm run build` (no errors/warnings)
   Note: `src/worker.ts:2` has a pre-existing `Cannot find name 'Fetcher'` error — this is a known issue, not a regression.
2. Manual QA per AGENTS.md checklist:
   - Header dropdown functionality
   - Image paths resolve without 404s
   - No console errors
   - Mobile viewport renders correctly
3. Accessibility: Keyboard navigation works, focus visible
4. Performance: Lighthouse ≥90 for Performance/Best Practices/SEO

## Design System

**Neo-Brutalist Aesthetic:**
- Primary: #0066ff (blue)
- Accent: #ffd700 (yellow)
- Structure: #000000 (black)
- Background: #f9f9f9 (off-white)
- Typography: Epilogue (display), Plus Jakarta Sans (body)
- Borders: 1-4px based on hierarchy
- Shadows: Anchored offset (4px, 4px)

**Component Conventions:**
- `.container`: Width constraints and gutters
- `.section`: Vertical spacing (4rem desktop, 2rem mobile)
- `.section-head`: Visual badge (aria-hidden)
- `.section-title`: Actual heading for screen readers

## Performance Notes

- Use `astro:assets` `<Image />` for local images
- Set `fetchpriority="high"` only for LCP images
- Lazy load below-the-fold content
- Keep JavaScript minimal - prefer CSS solutions
- Cache static assets aggressively (`_astro/*` for 1 year)

## What NOT to do

- Do not add SSR, server actions, or dynamic data fetching
- Do not introduce new build tools or frameworks
- Do not create files unless absolutely necessary
- Do not add analytics without explicit approval
- Do not make large structural changes - prefer incremental updates

## Content Collections

**Blog Schema (`src/content/blog/`):**
- Required: title, summary, date, category, readTime, tags
- Optional: heroImage (with required alt), isSample
- Categories: Release Notes, Behind the Scenes, Guides, Community, Announcement

**Resources Schema (`src/content/resources/`):**
- Required: title, summary, category, order, icon, duration
- Optional: steps array with images
- Categories: start-here, adventure-journals, dice-roller, custom-tables, advanced

## Deployment

- **Production**: Cloudflare (uses Cloudflare adapter in `astro.config.mjs`)
- **Preview**: Netlify (configured in `netlify.toml`)
- Build output: Static files to `dist/`
- Node version: 20 (strict requirement)
- Environment: Production builds with Sentry monitoring

## Voice & Copy Guidelines

- **Voice reference:** `~/Jason_Holt_Voice_Evolution.md` — 8 fingerprint markers for Jason's authentic voice. Read Part III before any copy work.
- **Negative constraint:** `docs/brand-and-voice-guide-core.md` — if a sentence could have appeared here, rewrite it. The Brand Voice Guide describes marketing persona, not Jason's natural voice.
- **First person throughout:** Use "I" on all pages. Do not use "we" or "our" (except where brand guide explicitly requires "we" on product pages).
- **No false claims:** Jason has not played a Mythic session himself. He is the builder, not a TTRPG veteran. Do not write copy implying player identity.
- **Key bio facts for copy accuracy:** Started coding at 12 (Redwall CYOA in Basic). Nine years teaching CS. Brother connected him to Tana Pigeon at Word Mill Games. App dream since 2013 (Hour of Code). Studying M.Sc. Computational Linguistics at Stuttgart.
- **Audit process:** Compare prose against the 8 fingerprints (#1 Fresh Renewal, #2 Enumeration, #3 Transparency, #4 Replace "incredible"/"privilege", #5 People-First, #6 Active Voice, #7 Bridge Sentence, #8 Parenthetical). Flag anything that reads like polished marketing.