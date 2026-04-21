# Jason Holt Digital

This repository powers [jasonholtdigital.com](https://jasonholtdigital.com), my business website and documentation hub.

It is the place where I publish the pages around the work itself: app overviews, support content, resources, blog posts, and the core business pages that explain what I build and why. The voice here should sound like the website — direct, personal, and useful.

## What this site covers

- My business website for Jason Holt Digital
- Documentation and support for the Mythic GME apps
- Resources for players learning the apps and the workflow around them
- Blog and update content
- About, contact, and other company pages

## What this repository is

This is a static Astro site. There is no SSR layer and no heavy backend hiding behind it. Content is written in Astro components and content collections, then deployed as a fast, mostly straightforward website.

The homepage is the public front door, but the repo also carries a lot of the documentation structure that supports the business once someone is already using the apps.

## Tech stack

- Astro 6
- TypeScript
- Vitest
- Cloudflare deployment target

## Local development

Use Node 22.

```bash
npm install
npm run dev
```

Useful commands:

- `npm run dev` — start the local dev server
- `npx astro check` — run Astro diagnostics
- `npm test` — run the test suite
- `npm run build` — build the site into `dist/`
- `npm run preview` — preview the production build locally

## Project structure

```text
src/
├── components/      Reusable Astro components
├── content/         Blog, resource, and page content collections
├── layouts/         Shared page layouts
├── lib/             Small client-side and utility modules
├── pages/           Route entrypoints
public/
├── styles/          Global CSS layers and component styles
└── ...              Static assets served as-is
docs/                Internal project and authoring documentation
```

## Documentation

Start with [docs/README.md](docs/README.md).

That index points to the authoring, SEO, RSS, deployment, and development notes that support this site.

## Content notes

- Blog entries live in `src/content/blog/`
- Resource docs live in `src/content/resources/`
- Page content lives in `src/content/pages/`
- Shared site UI lives in `src/components/`

If you are updating copy, the website itself is the best voice reference — especially the homepage and About page.

## Why this repo exists

I am not using this repository as a generic portfolio shell. It exists to support a real business and the documentation that goes with it. The code matters, but the point is the website: helping people understand the apps, find what they need, and keep moving.
