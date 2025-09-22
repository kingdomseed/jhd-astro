---
title: "Categories Schema"
summary: "Define and extend the category registry for Custom Tables (icons, labels, order)."
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
- `iconKey` (string; app icon registry key)
- `sortOrder` (integer)
- `isBuiltIn` (boolean)
- Optional: `description` (string), `displayNameTranslations` (object)

## Lifecycle in the app

- First run: the app copies a baseline `categories.json` into your Documents (meaning_tables/categories.json)
- Built‑ins live in `defaultCategories` and can be restored with “Reset to defaults”
- Add your own categories only to the `categories` array

## Downloads

See the Downloads section at the bottom of this page for files.

## Related

- Getting started and organizing tips: “Getting Started with Custom Tables”, “Organizing Custom Tables”
- Table schemas: “Custom Table Schema”
