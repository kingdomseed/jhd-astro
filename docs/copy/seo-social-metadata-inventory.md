# SEO And Social Metadata Inventory

This inventory covers the production English SEO/social surfaces after the
approved About, Home, Apps, Resources, and Support copy passes. It is not a v2
or Portuguese copy pass, except where hreflang behavior depends on Portuguese
routes.

## Sources Checked

- Shared production layout: `src/layouts/BaseLayout.astro`
- Hidden v2 layout: `src/layouts/V2RefinedLayout.astro`
- Production English pages under `src/pages/`
- Content collections for About, Blog, and Resources
- Site config and sitemap behavior in `astro.config.mjs`

## Shared Metadata Behavior

| Surface | Current behavior | Notes |
| --- | --- | --- |
| Base title | Required per page through `title`. | Good. Page-level titles are explicit. |
| Meta description | Required per page through `description`. | Good. Most production English pages now have page-specific descriptions. |
| OG title/description | Defaults to page title/description, with optional overrides. | Good. Home, Apps, and Blog detail pages use overrides where useful. |
| OG type | Defaults to `website`; Blog detail pages pass `article`. | Good. Resource detail pages remain `website`, which is acceptable unless we want article-like resource sharing. |
| OG image | Defaults to `/social/og-default.jpg`; detail pages can pass `ogImage`. | Done. The default is a 1200x630 galaxy-style card generated from the recent Mythic art assets. |
| OG image alt | BaseLayout supports `ogImageAlt` and falls back to default site art alt text. | Done. Detail pages pass their post/resource alt text through the layout instead of adding manual duplicate meta tags. |
| Twitter card | Always `summary_large_image`. | Done. This now matches the default 1200x630 image shape. |
| Canonical | Built from `canonicalPath` and `Astro.site`. | Good. Site is configured as `https://jasonholtdigital.com`. |
| Hreflang | BaseLayout emits self alternate and only emits a cross-language alternate when the page passes an explicit `alternatePath`. | Done. Top-level pages pass exact counterparts; dynamic Blog/Resource detail pages use collection-verified EN/PT slug mapping. |
| Apple touch icon | BaseLayout links `/apple-touch-icon.png`. | Done. The missing icon has been copied into `public/`. |
| v2 routes | V2 layout defaults to `noindex, nofollow`; sitemap filters `/v2/`. | Good. Leave v2 out of this pass unless explicitly requested. |

## Production English Page Inventory

| Page | Current title | Current description | Current notes |
| --- | --- | --- | --- |
| Home `/` | `Official Mythic GME 2e Apps — Jason Holt Digital` | `GM-less play at your fingertips. Official, licensed Mythic GME 2e companion apps by Jason Holt Digital. Download for mobile and desktop.` | Done. Home metadata stayed mostly unchanged, and stale JSON-LD price/rating fields were removed. |
| About `/about/` | `About Jason Holt | Mythic GME Apps` | Pulled from About content: Jason builds and maintains the officially licensed Mythic GME 2e apps in partnership with Word Mill Creative. | Done. Removes the duplicated `About` wording. |
| Apps `/apps/` | `Apps — Mythic GME 2e Companions | Jason Holt Digital` | Compare the official Mythic GME 2e apps for mobile and desktop, see what each version includes, and download on your platform. | Good candidate for light SEO sharpening only. |
| Resources `/resources/` | `Resources — Guides for Mythic GME 2e Apps` | Guides for Mythic GME 2e apps: getting started, Journals, dice formulas, Custom Tables, schema references, and troubleshooting. | Recently approved. Good. |
| Support `/support/` | `Support & Contact | Mythic GME Apps` | Find support, Discord, FAQ, and contact options for Mythic GME Mobile and Mythic GME Digital. | Recently approved. Good. |
| Blog `/blog/` | `Mythic GME Apps Blog | Release Notes & Updates` | Release notes, app updates, guides, and behind-the-scenes notes for Mythic GME Mobile and Mythic GME Digital. | Done. Sharpened around app updates and release notes. |
| Blog categories `/blog/category/[category]/` | `${Category} — Mythic GME Apps Blog` | Category-specific descriptions. | Done. Uses `noAlternate`; acceptable. |
| Blog detail `/blog/[slug]/` | `${post.title} — Mythic GME Apps Blog` | Post summary. | Done. Uses article OG type, article publish time, tags, social/hero image fallback, and explicit EN/PT `hreflang` mapping when the translated entry exists. |
| Resource detail `/resources/[slug]/` | `${resource.title} — Mythic GME Apps Guide` | Resource summary. | Done. Uses resource hero/default OG image and explicit EN/PT `hreflang` mapping when the translated entry exists. |
| Privacy `/privacy/` | `Privacy Policy | Mythic GME Apps` | Learn how Mythic GME Apps handles privacy: minimal data collection, local-first storage, optional analytics, and clear controls. | Legal page. Only edit with care. |
| Terms `/terms/` | `Terms of Service | Mythic GME Apps` | Terms of Service for Mythic GME Apps: license, purchases and refunds, acceptable use, disclaimers, and limitations of liability. | Legal page. Only edit with care. |
| 404 `/404/` | `404 — Page Not Found | Mythic GME Apps` | Sorry, we can't find that page. Try the homepage, Apps, Support, or Contact. | Fine for current pass. |
| Contact `/contact/` | Redirects to `/support#contact-panel`. | No metadata; redirect only. | Fine. |

## Current SEO/Social Tensions

1. Portuguese top-level metadata remains a separate pass, except for removing
   stale shared homepage JSON-LD price/rating fields.
2. Blog category pages still use `noAlternate` because there are no Portuguese
   category index routes today.
3. Legal metadata remains a separate pass and should only change with explicit
   approval.

## Suggested Review Order

1. Sitewide metadata mechanics: done.
2. Top-level production English titles/descriptions: done for About and Blog;
   Apps, Resources, and Support were already acceptable after the copy pass.
3. Dynamic Blog and Resource detail metadata patterns: done for English titles,
   OG image fallback, and image alt handling.
4. Hreflang strategy: done for top-level pages, Blog details, and Resource
   details. Category pages intentionally suppress alternates because matching
   Portuguese category routes do not exist today.
5. Portuguese metadata in a separate pass.
6. Legal metadata only with explicit approval.

## First Recommended Question

The sitewide metadata mechanics and translated detail-page `hreflang` mapping
are implemented. The next SEO/social decision is whether to do a Portuguese
metadata pass or leave Portuguese metadata for the broader Portuguese copy pass.
