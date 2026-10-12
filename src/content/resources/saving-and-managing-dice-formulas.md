---
fullArticleAvailable: true
title: "Saving and Managing Dice Formulas"
summary: "How to save, load, import, and export saved dice formulas."
category: "dice-roller"
order: 2
icon: "fa-slab fa-regular fa-floppy-disk"
duration: "5 min read"
updated: "2025-09-21"
tags: ["dice", "formulas", "saved-formulas", "import", "export"]
keywords:
  - Saved Formulas
  - Dice formulas
  - Import
  - Export
  - JSON
downloads:
  - label: "Empty Template"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
  - label: "Saved Formulas Schema"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
related:
  - formula-schema
  - dice-formulas-and-customization
---

## Where to find it

- Open the Dice Roller.
- Use the on‑screen controls:
  - Desktop: “Save Formula” and “Manage Formulas” buttons in the Dice Studio panel.
  - Open Dice Studio. On a phone, Save Formula and Manage Formulas are buttons under the formula field, and on a tablet or desktop they are above it.

## What you’ll use

- Empty template, filled sample, and optional schema (find them in the Downloads section below)

### No programming required

- “JSON” is just a structured text file. The app creates, opens, and exports it for you.
- A “schema” is a rulebook for tools to double‑check a file. You can ignore it.
- You never need to edit JSON by hand—use the app’s buttons.

## Core actions

1) Save your current formula(s)
   - Tap “Save Formula” to add the current formula to your Saved list. Give it a short, recognizable name.

2) Manage the list
   - Tap “Manage Formulas” to reorder or remove entries.
   - Formulas are global (not per journal) so they’re available across sessions.

3) Export
   - Tap “Manage Formulas” → Export to download a JSON file you can back up or share.
   - You can rename the exported file. Import does not require a particular file name. In the native apps, the file must end in .json (in any letter case). On the web, the file picker asks for .json files, but the app does not check the extension separately. A file name does not make the contents valid.

4) Import
   - Tap “Manage Formulas” → Import and pick a JSON file.
   - Import does not ask. It adds every formula in the file to the end of your list, including ones you already have.

## Tips

- Keep names short; add any extra context in the description.
- You can organize favorites into separate files. Import adds to your list and never replaces it, so importing a second set leaves both sets in the list. Importing a set that is already in your list adds a second copy of each formula. Each imported formula gets its own new id, so Edit and Delete on a copy affect only that copy.
- Export to keep a copy of your list. The app cannot restore that copy over your current list, because Import only adds entries.

## Power users

- Import accepts two shapes: an object with a formulas list, or a top-level array of formula objects. Export always writes the first.
- See the [Formula Schema](/resources/formula-schema/) for field names and a minimal example.

> ##### Syntax engine and docs
> The roller uses the app's own version of Adventuresmith's dart_dice_parser. The pub.dev page describes the original package, so check a formula in the app before you rely on it. For the full grammar and additional examples, see: https://pub.dev/packages/dart_dice_parser

## Related guides

- Build more complex expressions and see per‑system starters: [Dice Formulas & Customization](/resources/dice-formulas-and-customization/)
- Reference fields and JSON shape: [Formula Schema](/resources/formula-schema/)
