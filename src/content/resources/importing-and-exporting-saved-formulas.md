---
title: "Importing & Exporting Saved Formulas"
summary: "Bring in favorites from friends and back up your own — no coding needed."
category: "dice-roller"
order: 3
icon: "fa-slab fa-regular fa-exchange"
duration: "5 min read"
updated: "2025-09-21"
tags: ["dice", "formulas", "import", "export"]
keywords:
  - Saved Formulas
  - Import
  - Export
  - JSON
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---
This page collects the essentials for bringing Saved Formulas into the app and exporting yours for safekeeping or sharing. If you want to learn how to build formulas or manage the list, see the related guides below.

## Where to find it

- Open the Dice Roller.
- Use the on‑screen controls:
  - Desktop: “Save Formulas” and “Manage Formulas” buttons in the Dice Roller panel.
  - Mobile: “Save Formulas” and “Manage Formulas” buttons below the roller.

## Import

- Tap “Manage Formulas” → Import and choose a JSON file.
- Import merges entries into your existing list (if a replace option is offered, choose carefully; merge is safer).
- File names: Import accepts any filename. If you manually place a file instead of importing, it must be named `saved_formulas.json`.

Supported shapes
- Canonical wrapped file (recommended):
```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "schemaVersion": 1
}
```
- Compatibility: The app accepts a top‑level array or a single formula object on import and normalizes to the wrapped format when exporting.

## Export

- Tap “Manage Formulas” → Export to download a JSON file you can back up or share.
- Manual placement: If you don’t use Import/Export and drop a file by hand, keep the exact filename `saved_formulas.json` so the app can find it.

## Starter downloads

Ready‑to‑import formula sets for popular systems (merge‑friendly):

- D&D 5e: [Download](/downloads/formulas_dnd5e.json)
- Pathfinder 2e: [Download](/downloads/formulas_pf2.json)
- Shadowrun: [Download](/downloads/formulas_shadowrun.json)
- Blades in the Dark: [Download](/downloads/formulas_blades.json)
- Savage Worlds: [Download](/downloads/formulas_savage_worlds.json)
- Year Zero Engine (partial): [Download](/downloads/formulas_year_zero.json)
- Vampire V5: [Download](/downloads/formulas_vampire_v5.json)
- PbtA: [Download](/downloads/formulas_pbta.json)
- Fate Core: [Download](/downloads/formulas_fate.json)
- Call of Cthulhu 7e: [Download](/downloads/formulas_coc7e.json)
- Cypher: [Download](/downloads/formulas_cypher.json)
- Warhammer (d6 pools): [Download](/downloads/formulas_warhammer_d6.json)
- Lancer: [Download](/downloads/formulas_lancer.json)
- Ironsworn: [Download](/downloads/formulas_ironsworn.json)
- Starforged: [Download](/downloads/formulas_starforged.json)
- Dungeon Crawl Classics: [Download](/downloads/formulas_dcc.json)
- The One Ring (approximation): [Download](/downloads/formulas_one_ring.json)

Tip: Use Import to merge these into your current list. Manual placement requires the filename `saved_formulas.json`.

## Best practices

- Keep names short and descriptive; add context in descriptions.
- Back up before large imports so you can roll back easily.
- Prefer the canonical wrapped format for sharing (includes `formulas` and `schemaVersion`).

## Related guides

See the Related Guides section at the bottom of this page.
- Save, load, import, export (UI walkthrough): “Saving and Managing Dice Formulas”
- File structure reference (JSON schema): “Formula Schema”
