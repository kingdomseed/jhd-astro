# ShareBar Component

Component to render compact share controls for blog posts and resources.

## Location

- File: `src/components/ShareBar.astro`
- Included in:
  - Blog detail: `src/pages/blog/[slug].astro`
  - Resources detail: `src/pages/resources/[slug].astro`

## Props

- `url: string` — absolute canonical URL
- `title: string`
- `summary?: string`

## Behavior

- Neutral icons by default; brand tints on hover (Reddit/Facebook/Bluesky/RSS) and primary tint for first‑party (Share/Copy/Email).
- Web Share API button hides if unsupported; falls back to platform links.
- Copy uses `navigator.clipboard`; a polite status message confirms copy.
- RSS link directs to `/rss.xml` for blog feed subscription.

## Accessibility

- Each icon has an `aria-label` and an `sr-only` text label.
- Focus styles use the site primary color; hover tint does not override focus.

## Extending platforms

- URLs defined at top of component. Add new platforms by appending to the actions list with `data-platform="<name>"`.
- Keep icons compact to avoid visual noise.

