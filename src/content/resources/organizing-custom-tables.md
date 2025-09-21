---
title: "Organizing Custom Tables"
summary: "Use categories, icons, tags, and links to keep your Meaning and Event Focus tables tidy and powerful."
category: "custom-tables"
order: 2
icon: "fa-slab fa-regular fa-list-squares"
duration: "7 min read"
updated: "2025-09-21"
tags: ["custom-tables", "categories", "icons", "tags", "linking"]
keywords:
  - Categories
  - Icons
  - Tags
  - Linking tables
  - Custom tables
---

## Where to organize

- Open the Custom Tables feature in the app (not in Settings).
- Categories, icons, and translations are managed alongside your tables.
- Unlocking note: on Google Play, Amazon, and the Apple App Store, Custom Tables is an IAP; Itch.io and Microsoft Store include it with a higher‑priced purchase.

## Meaning vs Event Focus

- Meaning Tables: produce results like “Attack” or “Distant Location” and often chain to other tables
- Event Focus Tables: decide what kind of event happens (e.g., NPC Action), often the first roll in an event workflow

## Categories & icons

- Categories define icon, label, and sort behavior for table groups
- The app seeds built‑in categories from an asset file; you can reset to defaults if needed
- User categories live alongside the defaults; keep built‑ins untouched and add your own under the user categories area

Best practices
- Clear IDs: table IDs are snake_case; category IDs are kebab‑case
- Short display names; add detail in descriptions
- Use translations where helpful; default language is `en`

## Tags and search

- Add tags to tables and entries to improve search and grouping
- Use consistent tags for adventure arcs, biomes, factions, tones, etc.

## Linking tables

- `entryRollOn`: from a specific result, immediately roll another table (or an Adventure List)
- `tableRollOn`: after producing a result, roll one or more follow‑ups
- Chain carefully to avoid loops; start small and test

## Starter files

- Meaning templates/samples: JSON, CSV, TXT, PSV
- Event Focus templates/samples: JSON, CSV, TXT, PSV
- Categories template/sample
- Find them under the “Getting Started with Custom Tables” guide’s Starter downloads

## Not supported yet

- Weighted tables are not yet supported—use explicit ranges (1..N)

## Next steps

- Get oriented and create your first tables: see “Getting Started with Custom Tables”
- Import/Export details: see “Importing & Exporting Custom Tables”
- JSON field reference: see “Custom Table Schema” and “Categories Schema”
