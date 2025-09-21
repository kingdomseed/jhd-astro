---
title: "Getting Started with the Dice Roller"
summary: "Roll faster with presets, queues, and in-line oracle prompts."
category: "dice-roller"
order: 1
icon: "fa-slab fa-regular fa-star"
duration: "5 min read"
updated: "2025-02-01"
tags: ["dice", "getting-started"]
keywords:
  - Dice roller
  - Getting started
  - Roll dice
---

The Dice Roller helps you build expressions quickly and see clear, readable results. This quick start shows the basics so you can roll confidently right away.

## The layout at a glance
- Formula field + Roll button: Type a formula (e.g., `1d20+5`) and tap Roll.
- Quick‑add buttons: One‑tap actions to insert dice (`d2`, `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, `d%`, `dF`), common modifiers (advantage/disadvantage `kh/kl`, keep/drop `kh/kl/-H/-L`, explode/compound `!/!!`, reroll `r/ro`, count `#`), and operators (`+`, `-`, `*`, parentheses) into the formula field.
  - Numeric bonuses are typed by you after inserting the `+` or `-` operator (for example: `+2`).
- Result list: Shows your total and the important details (kept dice, drops, explosions, counts). Entries are easy to scan.

## Build your first rolls
1) Tap a die button (e.g., `d20`) and add a modifier (e.g., `+5`).
2) Or type directly: `1d20+5`
3) Press Roll — the total appears at the top of the result, with a helpful breakdown beneath.

### Common examples
- D20 + bonus: `1d20+3`
- Advantage/Disadvantage: `2d20kh+5` (keep highest) or `2d20kl+5` (keep lowest)
- Damage dice: `2d6+3`
- Percentile: `1d%` (same as `1d100`)
- Fudge/Fate dice: `4dF`

### Helpful basics you can try later
- Keep/Drop: `3d20kh2` (keep 2 highest) or `4d6-L` (drop lowest)
- Exploding/Compounding: `4d6!` (explode) or `5d6!!` (compound); add `o` for once (`!o`, `!!o`)
- Reroll: `4d6r1` (reroll 1s), `4d6ro<2` (reroll once results under 2)
- Count successes: `6d6#>=5` (how many 5+)
- D66 (uppercase): `1D66` (lowercase `d66` is a 66‑sider)

Tip: Use parentheses for clarity when mixing pools, e.g., `(1d8!!+1d6!!) kh` (Savage Worlds trait + wild, keep highest).

## Saving and managing formulas
- Save Formulas: Saves the current expression and lets you name/describe it.
  - Desktop: buttons appear above the formula field.
  - Mobile: buttons appear below the roller.
- Manage Formulas: Import/Export, reorder, rename, and delete.
  - Import merges a JSON file into your Saved list.
  - Manual placement requires the exact filename `saved_formulas.json`.

## Results and readability
- The result list highlights the total and important details (kept dice, dropped dice, explosions, counts) so you don’t have to parse walls of text.
- Short names and simple modifiers keep formulas scannable; add context in the Saved entry’s description when you save.

## Related guides
- Expression patterns + system recipes: “Dice Formulas & Customization”
- Save / Manage / Import / Export: “Saving and Managing Dice Formulas”
- File shape + schema: “Importing & Exporting Saved Formulas” and “Formula Schema”
