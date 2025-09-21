---
title: "Getting Started with Custom Tables"
summary: "Create Meaning and Event Focus tables, add translations and links, and import ready-made starters—no programming required."
category: "custom-tables"
order: 1
icon: "fa-slab fa-regular fa-newspaper"
duration: "9 min read"
updated: "2025-09-21"
---

## Where to find Custom Tables

- Open the Custom Tables feature in the app (not in Settings).
- Unlocking:
  - Google Play, Amazon, and Apple App Store: requires an in‑app purchase to unlock Custom Tables.
  - Itch.io and Microsoft Store (Windows): included with the higher‑priced purchase.

## Make your first Meaning table

1) Open Custom Tables → New → Meaning Table
2) Name it and pick (or create) a category
3) Set the range (for a first table, try 1–10 or 1–20)
4) Add entries so the full range is covered without gaps or overlaps
5) Optional polish: description, tags, translations, icon
6) Save and test by rolling

Tips
- Start small (1d6/1d10) and expand later to 1d100
- Keep ranges continuous (no gaps/overlaps). The app validates this for you
- Use entryRollOn to chain results to other tables or to Adventure Lists (Characters/Threads/Features)

## Make an Event Focus table

1) Open Custom Tables → New → Event Focus
2) Range is typically 1–100 (percentile) but smaller ranges work too
3) Add entries that describe what kind of event happens (e.g., NPC Action, Thread Event)
4) Optional: for each entry, set an `entryRollOn` target to immediately roll on another table or list
5) Save and try a few test rolls

## Translations & metadata

- You can add per‑table and per‑entry translations as you go. Default language is `en`.
- Add tags to help search and grouping.
- Icons are configured via categories; you can pick an icon per category once and reuse it.

## Starter downloads

Use these templates and samples as starting points. Import them from Custom Tables → Import.

- Meaning template (JSON): [/downloads/meaning_table_template.json](/downloads/meaning_table_template.json)
- Meaning sample (JSON): [/downloads/meaning_table_sample.json](/downloads/meaning_table_sample.json)
- Meaning template (CSV): [/downloads/meaning_table_template.csv](/downloads/meaning_table_template.csv)
- Meaning example (CSV): [/downloads/meaning_table_example.csv](/downloads/meaning_table_example.csv)
- Meaning template (TXT): [/downloads/meaning_table_template.txt](/downloads/meaning_table_template.txt)
- Meaning template (PSV): [/downloads/meaning_table_template.psv](/downloads/meaning_table_template.psv)

- Event Focus template (JSON): [/downloads/event_focus_template.json](/downloads/event_focus_template.json)
- Event Focus sample (JSON): [/downloads/event_focus_sample.json](/downloads/event_focus_sample.json)
- Event Focus template (CSV): [/downloads/event_focus_template.csv](/downloads/event_focus_template.csv)
- Event Focus example (CSV): [/downloads/event_focus_example.csv](/downloads/event_focus_example.csv)
- Event Focus template (TXT): [/downloads/event_focus_template.txt](/downloads/event_focus_template.txt)
- Event Focus template (PSV): [/downloads/event_focus_template.psv](/downloads/event_focus_template.psv)

- Categories template (JSON): [/downloads/categories_template.json](/downloads/categories_template.json)
- Categories sample (JSON): [/downloads/categories_sample.json](/downloads/categories_sample.json)

Note: Files live in `public/downloads/` in the project and are served from `/downloads/` on the site.

## What’s not supported yet

- Weighted tables are not supported yet in the app. Build range‑based tables (1..N) instead.
- No command‑line validator is required; the app validates ranges and shapes during import/save and shows clear messages if something’s off.

## Next steps

- Import & Export details: see “Importing & Exporting Custom Tables”
- Organize categories and icons: see “Organizing Custom Tables”
- Full JSON fields: see “Custom Table Schema” and “Categories Schema”
