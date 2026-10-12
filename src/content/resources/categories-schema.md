---
fullArticleAvailable: true
title: "Categories Schema"
summary: "Reference for the table categories JSON file format."
category: "advanced"
order: 4
icon: "fa-slab fa-regular fa-sort"
duration: "Reference"
updated: "2025-09-21"
tags: ["schema", "categories", "custom-tables", "reference"]
keywords:
  - Categories schema
  - JSON
  - Custom tables
downloads:
  - label: "Categories Schema"
    href: "/downloads/categories.schema.json"
    format: "JSON"
  - label: "Categories Template"
    href: "/downloads/categories_template.json"
    format: "JSON"
  - label: "Categories Sample"
    href: "/downloads/categories_sample.json"
    format: "JSON"
related:
  - organizing-custom-tables
  - getting-started-with-custom-tables
---

## Plain English

Categories provide names and icons for table groups. The app ships with built‑ins; you add your own alongside them.

## Root structure

```json
{
  "defaultCategories": [ /* built‑ins */ ],
  "categories": [ /* your custom categories */ ]
}
```

- `defaultCategories`: built‑in list bundled with the app; you typically do not edit these
- `categories`: your custom additions; add, rename, or remove here without touching built‑ins

## TableCategoryInfo fields

- `id` (kebab‑case string)
- `displayName` (string)
- iconKey (string). The bundled file uses keys such as dice, user, map, book, and question. A key the app does not know shows a question-mark icon.
- sortOrder (integer, lower numbers first). Categories made in the app get 900, and you can change the order only by editing this file.
- `isBuiltIn` (boolean)
- Optional: `description` (string), `displayNameTranslations` (object)

Every entry needs id, displayName, iconKey, sortOrder, and isBuiltIn. If one is missing or has the wrong type, the app cannot load any categories from the file and tries to save a copy named invalidated-categories with a timestamp.

## Lifecycle in the app

- Baseline copy: with premium, the app can copy a baseline `categories.json` into your current storage location (meaning_tables/categories.json), which may be the app's own folder, a custom folder, or iCloud. It normally keeps an existing file instead of overwriting it.
- Built-ins can be restored with Reset Categories to Defaults in Table Settings. Categories whose isBuiltIn is false are kept.
- Set isBuiltIn to false on your own categories. The app goes by that flag, not by the array, and moves each entry to the matching array the next time it saves.

## Downloads

See the Downloads section at the bottom of this page for files.

## Related

- Getting started and organizing tips: “Getting Started with Custom Tables”, “Organizing Custom Tables”
- Table schemas: “Custom Table Schema”
