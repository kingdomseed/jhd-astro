---
fullArticleAvailable: true
title: "Formula Schema"
summary: "Reference for Saved Formulas JSON, with a minimal example and local downloads."
category: "advanced"
order: 2
icon: "fa-slab fa-regular fa-map"
duration: "Reference"
updated: "2025-02-01"
tags: ["schema", "formulas", "reference", "download"]
keywords:
  - Schema
  - Saved formulas
  - JSON
  - Download
downloads:
  - label: "Saved Formulas Schema"
    href: "/downloads/saved_formulas.schema.json"
    format: "JSON"
  - label: "Empty Template"
    href: "/downloads/saved_formulas_template.json"
    format: "JSON"
  - label: "Filled Sample"
    href: "/downloads/saved_formulas_sample.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - dice-formulas-and-customization
---
## Overview

This page documents the JSON format for Saved Formulas so your files can be validated and shared between devices or tools. For a practical walkthrough of saving, loading, importing, and exporting formulas from the UI, see [Saving and Managing Dice Formulas](/resources/saving-and-managing-dice-formulas/).

Plain English: You don’t need to know code to use this. “JSON” is just a structured text file the app reads and writes, and the “schema” is a rulebook for tools to double‑check that a file looks right. Most players can ignore the details below.

## Downloads

See the Downloads section at the bottom of this page for files.

Important: Import does not require a particular file name. In the native apps, the file must end in .json (in any letter case). On the web, the file picker asks for .json files, but the app does not check the extension separately. A file name does not make the contents valid. Only the app's own storage file must be named saved_formulas.json.

## Format (canonical)

An exported file is a wrapped object. The app's own storage file is a plain array of formula objects.

Exported files contain these fields:

- `formulas` (array): The list of saved formulas.
- version (string): Export always writes "1.0". Import ignores this field.
- schemaVersion (string): Export writes "1". Import ignores this field.

### Formula object fields

- formula (required string): must be non-empty and valid dice notation. If any entry in the file fails, nothing in the file is imported.
- `name` (optional string): Display label; defaults to `formula` if missing.
- `description` (optional string): Extra context.
- dateAdded (optional ISO 8601 string): when the formula was created. On import, a missing or unreadable value becomes the time of the import.
- id (optional string): Export writes an id for each formula, but Import ignores it and gives every imported formula a new id. Importing the same file twice adds two separate entries.

### Minimal import example

This is a minimal import template, not a complete captured export. An export also includes `description`, `dateAdded`, and `id` for each formula. On import, `id` is ignored and a new one is assigned.

```json
{
  "version": "1.0",
  "schemaVersion": "1",
  "formulas": [
    { "formula": "2d6+3", "name": "Sword attack" }
  ]
}
```

### Compatibility

- Import accepts the wrapped object shown above or a top-level array of formula objects. A single formula object on its own is rejected.
