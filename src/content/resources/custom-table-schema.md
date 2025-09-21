---
title: "Custom Table Schema"
summary: "Unified Table v3 reference for Meaning and Event Focus tables, with minimal examples and downloads."
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
---

## Plain English

No programming needed. This page lists field names used by imports/exports and by power users who maintain JSON directly.

## Meaning Table (v3)

Required keys
- `id` (snake_case string)
- `schemaVersion` = 3
- `tableType` = "meaning-table"
- `rangeStart` (int), `rangeEnd` (int)
- `categoryId` (kebab‑case string)
- `displayName` (string)
- `entries` (array)

Optional table fields
- `description`, `descriptionTranslations`, `displayNameTranslations`
- `defaultLanguage` (string, e.g., `"en"`)
- `isBuiltIn`, `isUserCreated` (booleans)
- `source` (string), `tags` (array of strings)
- `tableRollOn` (array of table/list targets)
- `data` (object for extensions)
- `dice` (legacy; ignored by current app)

Entry fields
- `range` [start, end] (required)
- `result` (string, required)
- Optional: `description`, translations, `tags`, `entryRollOn`, `disabled`, `data`, `weight` (present in schema, not used by the app yet)

Validation rules
- Entries must cover `[rangeStart..rangeEnd]` exactly once; no gaps/overlaps
- Disabled entries (or entries with `[0,0]`) are ignored for coverage

Minimal JSON
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
- `id`, `schemaVersion` = 3
- `tableType` = "event-focus"
- `rangeStart`, `rangeEnd`
- `categoryId` = "event-focus"
- `displayName`, `entries`

Optional table fields
- `displayNameTranslations`, `description`, `descriptionTranslations`
- `defaultLanguage`, `isBuiltIn`, `isUserCreated`, `source`, `tags`, `tableRollOn`, `data`

Entry fields
- `range` [start, end], `result`
- Optional: `description`, translations, `tags`, `entryRollOn`, `action`, `additionalRolls`, `disabled`, `data`, `weight` (present in schema, not used yet)

Minimal JSON
```json
{
  "id": "event_focus_core",
  "schemaVersion": 3,
  "tableType": "event-focus",
  "rangeStart": 1,
  "rangeEnd": 100,
  "categoryId": "event-focus",
  "displayName": "Event Focus",
  "entries": [
    { "range": [1, 10], "result": "Remote Event" },
    { "range": [11, 20], "result": "NPC Action" }
  ]
}
```

## Downloads

- Meaning Schema: [Download](/downloads/meaning_table.schema.json)
- Event Focus Schema: [Download](/downloads/event_focus_table.schema.json)
- Meaning Templates/Samples: JSON, CSV, TXT, PSV (see Getting Started)
- Event Focus Templates/Samples: JSON, CSV, TXT, PSV (see Getting Started)

Note: Weighted tables appear in schema for future compatibility, but the app does not use weights yet.

## Related

- Getting started and best practices: “Getting Started with Custom Tables”, “Organizing Custom Tables”
- File formats and Foundry mapping: “Importing & Exporting Custom Tables”
