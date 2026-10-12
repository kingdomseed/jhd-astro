---
fullArticleAvailable: true
title: "Importing & Exporting Saved Formulas"
summary: "Import formulas from other players and back up your own."
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
  - Desktop: “Save Formula” and “Manage Formulas” buttons in the Dice Studio panel.
  - Open Dice Studio. On a phone, Save Formula and Manage Formulas are buttons under the formula field, and on a tablet or desktop they are above it.

## Import

- Tap “Manage Formulas” → Import and choose a JSON file.
- Import adds every entry in the file to the end of your list. There is no replace option and no check for duplicates.
- File names: Import does not require a particular file name. In the native apps, the file must end in .json (in any letter case). On the web, the file picker asks for .json files, but the app does not check the extension separately. A file name does not make the contents valid. If you manually place a file instead of importing, it must be named `saved_formulas.json`.

Supported shapes
- Canonical wrapped file (recommended):
```json
{
  "formulas": [
    { "formula": "2d20kh+5", "name": "Advantage +5", "description": "D&D 5e attack check" }
  ],
  "version": "1.0",
  "schemaVersion": "1"
}
```
- An exported file has "version": "1.0" and "schemaVersion": "1", both as text. Import ignores both fields.
- Compatibility: the app also accepts a top-level array of formula objects. A single formula object on its own is rejected, so wrap it in an array. Export always writes the wrapped format.

## Export

- Tap “Manage Formulas” → Export to download a JSON file you can back up or share.
- Manual placement: If you place a file by hand, name it saved_formulas.json and put it in the formulas folder inside the app's storage folder. That file is your whole list. If the app cannot read it, it may load a readable backup copy instead, when one exists, and loading that copy does not change your file.

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
- Export before a large import to keep a copy of your list. Importing that copy back into the same list adds every formula again as a separate entry, because Import only adds entries and does not skip duplicates.
- Prefer the canonical wrapped format for sharing (includes `formulas` and `schemaVersion`).

> ##### Syntax engine and docs
> The roller is powered by mythic_dice_parser 8.1.0, the app's own version derived from Adventuresmith’s dart_dice_parser. For the upstream grammar and additional examples, see: https://pub.dev/packages/dart_dice_parser (that documentation may not exactly match the app's current grammar).

## Related guides

See the Related Guides section at the bottom of this page.
- Save, load, import, export (UI walkthrough): “Saving and Managing Dice Formulas”
- File structure reference (JSON schema): “Formula Schema”
