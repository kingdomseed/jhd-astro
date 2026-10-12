---
fullArticleAvailable: true
title: "Custom Table Schema"
summary: "Reference for Table v3 Custom Tables, including Meaning Tables, Event Focus tables, examples, and downloads."
category: "advanced"
order: 3
icon: "fa-slab fa-regular fa-layer-group"
duration: "Reference"
updated: "2025-09-21"
tags: ["schema", "custom-tables", "meaning-tables", "event-focus", "reference"]
keywords:
  - Meaning Table schema
  - Event Focus schema
  - Unified Table v3
  - JSON
downloads:
  - label: "Meaning Schema"
    href: "/downloads/meaning_table.schema.json"
    format: "JSON"
  - label: "Event Focus Schema"
    href: "/downloads/event_focus_table.schema.json"
    format: "JSON"
related:
  - getting-started-with-custom-tables
  - importing-and-exporting-custom-tables
  - linking-and-nesting-tables
---

## Plain English

No programming needed. This page lists field names used by imports/exports and by power users who maintain JSON directly.

## Meaning Table (v3)

Required keys: id, categoryId, displayName, and entries. These have no defaults. If you leave out the optional keys, schemaVersion defaults to 3, tableType to meaning-table, rangeStart to 1, and rangeEnd to 100.

Key details
- `id` (snake_case string)
- `categoryId` (kebab‑case string)
- `displayName` (string)
- `entries` (array)
- `schemaVersion` (int), `tableType` (string)
- `rangeStart` (int), `rangeEnd` (int)

Optional table fields
- `description`, `descriptionTranslations`, `displayNameTranslations`
- `defaultLanguage` (string, e.g., `"en"`)
- isBuiltIn, isUserCreated (booleans). On import the app sets isBuiltIn to false and isUserCreated to true, whatever the file says.
- `source` (string), `tags` (array of strings)
- tableRollOn (array of Meaning Table ids). Any other id or a list name is skipped.
- `data` (object for extensions)
- `dice` (legacy; ignored by current app)

Entry fields
- `range` [start, end] (required)
- `result` (string, required)
- Optional: `description`, translations, `tags`, `entryRollOn`, `disabled`, `data`
- weight (optional integer). If any entry in a Meaning Table has a weight above 1, the app picks results by weight instead of by range, and the table's tableRollOn links are not rolled. Event Focus tables ignore weight.

Validation rules
- Entries must cover `[rangeStart..rangeEnd]` exactly once; no gaps/overlaps
- Disabled entries (or entries with `[0,0]`) are ignored for coverage

Minimal JSON

Use a category id that exists in your app, for example "categoryId": "custom".

```json
{
  "id": "action_basics",
  "schemaVersion": 3,
  "tableType": "meaning-table",
  "rangeStart": 1,
  "rangeEnd": 10,
  "categoryId": "actions",
  "displayName": "Action Basics",
  "entries": [
    { "range": [1, 5], "result": "Common" },
    { "range": [6, 10], "result": "Uncommon" }
  ]
}
```

## Event Focus Table (v3)

Required keys
- `id`, `categoryId`, `displayName` (non-empty strings). On import, `categoryId` is set to "event-focus".
- `entries` (a list; each entry needs `range` and `result`)

Optional keys and defaults
- `schemaVersion` (default 3), `rangeStart` (default 1), `rangeEnd` (default 100)
- `tableType`: a single-file import uses the selected Event Focus card and sets the type afterward. In a `tables` wrapper, set `tableType` = "event-focus" so the table identifies itself. If it is omitted, the selected card decides; an unknown value fails.

Optional table fields
- `displayNameTranslations`, `description`, `descriptionTranslations`
- `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data`

Entry fields
- `range` [start, end], `result`
- Optional: `description`, translations, `tags`, `entryRollOn`, `disabled`, `data`, `weight` (ignored for Event Focus tables)
- action, additionalRolls (stored and exported, not used when rolling)

Minimal JSON

This is a shortened sample, not the built-in Event Focus table.

```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 20,
  "categoryId": "event-focus",
  "displayName": "Event Focus",
  "entries": [
    { "range": [1, 10], "result": "Remote Event" },
    { "range": [11, 20], "result": "NPC Action" }
  ]
}
```

## Downloads

See the Downloads section at the bottom of this page for schema files. Templates/Samples are listed on “Getting Started with Custom Tables”.

Note: a Meaning Table with any entry weight above 1 is rolled by weight. Leave weight out, or set it to 1 on every entry, to roll by range.

## Related

- Getting started and best practices: “Getting Started with Custom Tables”, “Organizing Custom Tables”
- File formats and Foundry mapping: “Importing & Exporting Custom Tables”
