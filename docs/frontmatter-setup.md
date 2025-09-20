# Front Matter (VS Code Extension) Setup

The repository includes a `frontmatter.json` configuration that makes authoring blog posts and resources easy from VS Code using Front Matter.

## Content types and folders

- Blog: `src/content/blog/`
- Resources: `src/content/resources/`

Each content type defines fields that match our Astro collection schemas.

## Blog fields

- `title` (string, required)
- `summary` (string, required)
- `category` (choice: Release Notes, Behind the Scenes, Guides, Community, Announcement)
- `date` (date, required)
- `readTime` (string, required)
- `isSample` (boolean, default true)
- `tags` (tags)
- `hero`, `heroAlt` (optional)
- `socialImage`, `socialImageAlt` (optional)

Preview path: `/blog/{{slug}}`

## Resources fields

- `title`, `summary` (required)
- `category` (choice: start-here, adventure-journals, dice-roller, custom-tables, advanced)
- `order` (number, required)
- Optional: `icon`, `duration`, `externalUrl`, `updated` (date)
- Optional images: `hero`, `heroAlt`
- Steps list: `steps[].title`, `steps[].body`, `steps[].image`, `steps[].imageAlt`

Preview path: `/resources/{{slug}}`

## i18n (placeholders)

`frontmatter.json` defines i18n locales but multilingual content is not currently enabled for these collections. The Italian locale entry has been corrected to `locale: it` and `path: it` for accuracy if enabled later.

## Tips

- Use relative image paths in frontmatter (e.g., `./hero.png`) to leverage `image()` validation and automatic optimization.
- Use the `_template.md` files under each collection as a starting point.
- After editing schemas/fields, run `npx astro sync` to refresh types.

