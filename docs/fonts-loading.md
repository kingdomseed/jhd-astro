# Fonts Loading

Centralize font loading in `src/components/HeadFonts.astro` and include the component in each page `<head>`.

## Do

- Use `<link>` tags in the head for Google Fonts or self-hosted font CSS.
- Keep font loading declarative and centralized via `HeadFonts`.

## Don’t

- Don’t `@import` Google Fonts inside CSS files (can affect cascade ordering and performance).

## Notes

- This site includes `HeadFonts` in all primary pages to keep font setup consistent.

