---
title: "Saving and Managing Dice Formulas"
summary: "Save, load, import, and export your Saved Formulas file—no coding required."
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
  - Desktop: “Save Formulas” and “Manage Formulas” buttons in the Dice Roller panel.
  - Mobile: “Save Formulas” and “Manage Formulas” buttons below the roller.

## What you’ll use

- Empty template, filled sample, and optional schema (find them in the Downloads section below)

### No programming required

- “JSON” is just a structured text file. The app creates, opens, and exports it for you.
- A “schema” is a rulebook for tools to double‑check a file. You can ignore it.
- You never need to edit JSON by hand—use the app’s buttons.

## Core actions

1) Save your current formula(s)
   - Tap “Save Formulas” to add the current formula to your Saved list. Give it a short, recognizable name.

2) Manage the list
   - Tap “Manage Formulas” to reorder or remove entries.
   - Formulas are global (not per journal) so they’re available across sessions.

3) Export
   - Tap “Manage Formulas” → Export to download a JSON file you can back up or share.
   - Important: Do not rename the file; keep it as `saved_formulas.json`. (Custom names will be supported later with Dice Bags.)

4) Import
   - Tap “Manage Formulas” → Import and pick a JSON file.
   - If you import a list that overlaps with your existing entries, choose whether to merge or replace.

## Tips

- Keep names short; add any extra context in the description.
- You can organize favorites into separate files—export one set, then import another set when needed.
- If in doubt, export first to create a backup.

## Power users

- The app understands a few compatible shapes on import and exports a canonical wrapped format.
- See the [Formula Schema](/resources/formula-schema/) for field names and a minimal example.

## Related guides

- Build more complex expressions and see per‑system starters: [Dice Formulas & Customization](/resources/dice-formulas-and-customization/)
- Reference fields and JSON shape: [Formula Schema](/resources/formula-schema/)
