---
title: "Importing & Exporting Custom Tables"
summary: "Prepare CSV, TXT, PSV, and JSON tables for import—range-based only for now—then export clean bundles for sharing."
category: "custom-tables"
order: 4
icon: "fa-slab fa-regular fa-exchange"
duration: "7 min read"
updated: "2025-09-21"
tags: ["custom-tables", "import", "export", "csv", "json", "foundry"]
keywords:
  - Import custom tables
  - Export custom tables
  - CSV
  - JSON
  - Foundry VTT
  - PSV
  - TXT
---

## Where to import/export

- Open the Custom Tables feature in the app (not in Settings).
- Use Import to add tables from files; use Export to save your tables for sharing/backups.
- Unlocking note: on Google Play, Amazon, and the Apple App Store, Custom Tables requires an IAP; Itch.io and Microsoft Store include it with a higher‑priced purchase.

## Quick rules (TL;DR)

- File encoding: UTF‑8 (CRLF or LF line endings are OK)
- Table types: `meaning-table` or `event-focus`
- Range coverage: Your entries must fully cover 1 → N without gaps/overlaps
- Formats:
  - CSV: requires `range_start, range_end, result` (range‑based only for now)
  - TXT: one entry per line (+ optional table_type line)
  - PSV: `endpoint|result` with endpoints that produce 1..N ranges
  - JSON v3: full‑fidelity schema, including translations and links
- Weighted tables: Not supported yet. Use explicit ranges instead

## CSV format (range‑based)

Required columns:
- `range_start`, `range_end`, `result`

Optional columns (order doesn’t matter):
- `description`, `tags` (semicolon‑separated), `entryRollOn`, `id`, `table_description`, `table_type`

Notes
- Header names are case‑insensitive
- `table_type` is optional; if used, only the first data row should contain a value
- Conflicting or invalid values are rejected with a clear error message

Samples
- Meaning Template (CSV): [Download](/downloads/meaning_table_template.csv)
- Meaning Example (CSV): [Download](/downloads/meaning_table_example.csv)
- Event Focus Template (CSV): [Download](/downloads/event_focus_template.csv)
- Event Focus Example (CSV): [Download](/downloads/event_focus_example.csv)

## TXT format (one per line)

- One entry per line. Simple and fast for short lists.
- Optional `table_type: meaning-table` (or `event-focus`) line may appear on the first or last non‑empty line.

Samples
- Meaning Template (TXT): [Download](/downloads/meaning_table_template.txt)
- Event Focus Template (TXT): [Download](/downloads/event_focus_template.txt)

## PSV format (pipe‑separated endpoints)

- Each line: `endpoint|result`
- Endpoints must ascend; first range starts at 1; last endpoint becomes the table’s rangeEnd
- Optional table_type line may appear at the beginning or end

Samples
- Meaning Template (PSV): [Download](/downloads/meaning_table_template.psv)
- Event Focus Template (PSV): [Download](/downloads/event_focus_template.psv)

## JSON (Unified Table v3)

- Full‑fidelity fields (translations, `tags`, `data`, `tableRollOn`, `entryRollOn`)
- `tableType` is part of JSON; valid values: `meaning-table` or `event-focus`
- IDs: table IDs are snake_case; category IDs are kebab‑case

Samples
- Meaning Template (JSON): [Download](/downloads/meaning_table_template.json)
- Meaning Sample (JSON): [Download](/downloads/meaning_table_sample.json)
- Event Focus Template (JSON): [Download](/downloads/event_focus_template.json)
- Event Focus Sample (JSON): [Download](/downloads/event_focus_sample.json)

## Foundry VTT JSON (auto‑mapping)

Detected automatically when a JSON includes a `results` array with entries that contain `_id`, `text`, and a `range` array.

Mapping highlights
- `name` → `displayName`
- `description` → `description`
- `results[].text` → `entries[].result`
- `results[].range` → `entries[].range` (e.g., `[min, max]`)
- Unknowns preserved under `data.foundry`
- Event Focus imports enforce `categoryId = "event-focus"`

Samples
- Foundry Meaning Sample (JSON): [Download](/downloads/foundry_meaning_sample.json)
- Foundry Event Focus Sample (JSON): [Download](/downloads/foundry_event_focus_sample.json)

## Validation & troubleshooting

- Range coverage: 1 → N with no gaps or overlaps
- Headers spelled correctly (case‑insensitive)
- No blank required fields (`result`, etc.)
- If a file is invalid, the app shows an exact error and refuses to save, so your data stays safe

## Next steps

- Get oriented and create your first tables: see “Getting Started with Custom Tables”
- Organize categories, icons, and links: see “Organizing Custom Tables”
- JSON field reference: see “Custom Table Schema” and “Categories Schema”
