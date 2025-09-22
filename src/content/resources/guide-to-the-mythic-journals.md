---
title: "A Guide to the Mythic Journals"
summary: "Create, import, and export journals; understand how Chaos Factor, Scenes, Lists, and Log Entries map to Mythic."
category: "adventure-journals"
order: 0
icon: "fa-slab fa-regular fa-book-open"
duration: "6 min read"
updated: "2025-09-21"
tags: ["journals", "getting-started", "import", "export"]
keywords:
  - Journals
  - Getting started
  - Import
  - Export
  - Mythic
downloads:
  - label: "Empty Template"
    href: "/downloads/journal_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/journal_sample.json"
    format: "JSON"
  - label: "JSON Schema"
    href: "/downloads/journal.schema.json"
    format: "JSON"
related:
  - writing-and-organizing-scenes
  - sharing-adventure-journals
  - saving-and-managing-dice-formulas
---

## What you’ll use

- Empty template, filled sample, and JSON schema (find them in the Downloads section below)

### No programming required

- If words like “JSON” or “schema” sound technical—don’t worry. You do not need to learn programming to use journals.
- JSON is simply a structured text file. The app creates, opens, and exports it for you. Think of it like a neatly formatted document the app understands.
- A “schema” is just a rulebook that helps tools check “does this file look right?”. It’s optional and aimed at power users or third‑party tools. You can ignore it.

## Manage journals in the app

- Create, import, and export journals from the Settings → Journals section.
- Each journal is self-contained: it maintains its own Chaos Factor, Scenes, Adventure Lists (Characters/Threads/Features), List Notes, and Log Entries.
- Use multiple journals to keep different campaigns/sessions separate; switching journals does not mix their lists or logs.

## How it maps to Mythic

- Journal: Your campaign/session container. Holds the Chaos Factor, Scenes, Adventure Lists (Characters/Threads/Features), and the game Log.
- Chaos Factor (CF): Core Mythic dial (1–9) controlling unpredictability. Updated over time (typically scene-to-scene) and affects Scene Checks and oracles.
- Scenes: Narrative segments. Scene type (Expected/Altered/Interrupt) is captured as a Log Entry from a Scene Check, not stored on the scene itself.
- Adventure Lists: The three lists used by Mythic for inspiration and events:
  - Characters: NPCs, factions, personas that can appear in events.
  - Threads: Plotlines/objectives that can be advanced/closed or referenced by events.
  - Features: Places, objects, or concepts that color events and context.
- Log Entries: Time-ordered record of oracles and checks: Fate Chart/Check answers, Scene Checks, Random Events (Event Focus + Meanings), etc.

## Basic workflow

1) Start with the empty template linked above. Make a copy and rename it from `journal_template.json` to something meaningful (for example: `my-adventure-2025.json`).
   - Keep the `.json` extension—this helps the app and your system recognize the file.
   - Tip: Add a date or campaign name to avoid overwriting old backups.
2) Fill in `JournalName`, keep `ChaosFactor` in 1–9, and add Scenes/Lists as you play.
3) Add Log Entries as you make Fate Chart/Check rolls, Scene Checks, and Random Events.
4) When a scene begins, snapshot the current CF into `SceneChaosFactor`. Record scene type outcomes (Expected/Altered/Interrupt) via a Scene Check log entry.
5) Export your current journal from Settings → Journals (JSON for round‑trip, Markdown for sharing/readability).

## Tips

- Random Events: Include `eventFocus`, meanings, and optional ties (character/thread/feature) in the log entry.
- Keep Lists current: Adventure Lists drive inspiration and event connections; expand available items by increasing the active sections.
- Keep separate journals per campaign: It keeps lists, scenes, and logs cleanly isolated.

### Reassurance for non‑tech folks

- You won’t break anything by trying. If a file doesn’t look right, the app will tell you before importing.
- You never need to edit JSON by hand—use the app to create and export.
- If you do peek inside a JSON file, it’s just readable text. Close it without saving if you’re unsure.
