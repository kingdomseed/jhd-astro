---
title: Dice Formulas & Customization
summary: "Build the rolls you want: advantage, thresholds, exploding/compounding, keep/drop, and more—no programming required."
category: dice-roller
order: 3
icon: fa-slab fa-regular fa-sliders
duration: 12 min read
updated: 2025-09-21
tags:
  - dice
  - formulas
  - systems
  - advanced
  - guides
keywords:
  - customization
  - dice formula
  - roll dice
  - save formulas
downloads:
  - label: "D&D 5e Saved Formulas"
    href: "/downloads/formulas_dnd5e.json"
    format: "JSON"
  - label: "Pathfinder 2e Saved Formulas"
    href: "/downloads/formulas_pf2.json"
    format: "JSON"
  - label: "Shadowrun Saved Formulas"
    href: "/downloads/formulas_shadowrun.json"
    format: "JSON"
  - label: "Blades in the Dark Saved Formulas"
    href: "/downloads/formulas_blades.json"
    format: "JSON"
  - label: "Savage Worlds Saved Formulas"
    href: "/downloads/formulas_savage_worlds.json"
    format: "JSON"
  - label: "Year Zero Engine Saved Formulas"
    href: "/downloads/formulas_year_zero.json"
    format: "JSON"
  - label: "Vampire V5 Saved Formulas"
    href: "/downloads/formulas_vampire_v5.json"
    format: "JSON"
  - label: "Powered by the Apocalypse (PbtA) Saved Formulas"
    href: "/downloads/formulas_pbta.json"
    format: "JSON"
  - label: "Fate Core Saved Formulas"
    href: "/downloads/formulas_fate.json"
    format: "JSON"
  - label: "Call of Cthulhu 7e Saved Formulas"
    href: "/downloads/formulas_coc7e.json"
    format: "JSON"
  - label: "Cypher System Saved Formulas"
    href: "/downloads/formulas_cypher.json"
    format: "JSON"
  - label: "Warhammer d6 Pools Saved Formulas"
    href: "/downloads/formulas_warhammer_d6.json"
    format: "JSON"
  - label: "Lancer Saved Formulas"
    href: "/downloads/formulas_lancer.json"
    format: "JSON"
  - label: "Ironsworn Saved Formulas"
    href: "/downloads/formulas_ironsworn.json"
    format: "JSON"
  - label: "Starforged Saved Formulas"
    href: "/downloads/formulas_starforged.json"
    format: "JSON"
  - label: "Dungeon Crawl Classics Saved Formulas"
    href: "/downloads/formulas_dcc.json"
    format: "JSON"
  - label: "The One Ring Saved Formulas"
    href: "/downloads/formulas_one_ring.json"
    format: "JSON"
related:
  - saving-and-managing-dice-formulas
  - formula-schema
---

## Read this first (no programming required)

- Formulas are simple, readable expressions (like `2d6+3`).
- You can type a formula, roll it, and click “Save Formulas” to keep it for later.
- Where to find the buttons:
  - Mobile: “Save Formulas” and “Manage Formulas” are below the text field.
  - Desktop: they’re above the text field.
- Save stores whatever is currently in the text field and lets you name it and add a description. Manage lets you import, export, rename, reorder, and delete.

Tip: To save, you only need the formula text—no need to understand every option below. Come back here when you want to do something more advanced.

## Basics cheat sheet

- Roll dice: `XdY` (e.g., `2d6`, `1d20`, `1d%` for d100)
- Special dice: `1D66` (uppercase D), `4dF` (Fate dice), custom faces: `2d[2,3,5,7]`
- Math & grouping: `+`, `-`, `*`, parentheses `( )` (division is not supported)
- Keep / Drop: `kh` keep highest, `kl` keep lowest, `-H` drop highest, `-L` drop lowest (e.g., `3d20kh2`, `4d6-L`)
- Explode / Compound: `!` (explode), `!!` (compound), add `o` for once: `!o`, `!!o` (e.g., `4d6!`, `5d10!!o>=8`)
- Reroll: `r` (reroll matches), `ro` (reroll once) (e.g., `4d4r<=2`, `4d4ro<2`)
- Count / Score:
  - `#` returns a count (discards individual dice results): `6d6#>=5`astro
  - Metadata counters keep dice results and record counts in metadata: `#s`, `#f`, `#cs`, `#cf` (e.g., `6d6 #f<=2 #s>=5 #cs6 #cf1`)
- Clamp (cap): `C<` and `C>` (e.g., `4d20 C<5`, `4d20 C>15`)

Order and precedence gotchas
- Order matters with counters and keep/drop. If you do `2d20 kh #cf #cs`, the low die is dropped before counting. If you want to count all rolled dice first, write `2d20 #cf #cs kh`.
- Drop/filter operators bind tighter than arithmetic. `(5d6+5d10)-L2` drops from the combined pool; `5d6+5d10-L2` drops only from the d10s.
- Use uppercase `D66` (lowercase `d66` is a 66‑sider, not D66).

## Patterns you’ll use a lot

- Advantage / Disadvantage: `2d20kh+MOD` and `2d20kl+MOD`
- Best / Worst of N: `NdXkh1` or `NdXkl1` (e.g., `3d6kh1`)
- Ability scores (4d6 drop lowest): `4d6-L`
- Explode once vs. freely: `4d6!o` (explode only once) vs `4d6!` (repeat)
- Compound (Shadowrun/L5R‑style): `5d6!!` or thresholded `5d6!!>=5`
- Threshold successes: `NdX#>=TN` (e.g., `6d6#>=5`)
- Reroll once vs. repeat: `ro` vs `r` (e.g., `4d6ro1` vs `4d6r1`)
- Keep/drop across combined pools: `(1d8!!+1d6!!) kh` (Savage Worlds trait + wild die)

## System starting points (quick recipes)

These examples give you solid starting formulas. Some systems use custom symbol dice—those are noted as “Not supported”.

D&D 5e / Pathfinder 2e
- Attack/check: `1d20+MOD`
- Advantage/Disadvantage: `2d20kh+MOD` / `2d20kl+MOD`
- Ability scores: `4d6-L`
- Crits: roll double damage dice manually (e.g., `2d6` → `4d6`)

Powered by the Apocalypse (PbtA)
- Core move: `2d6+STAT` → interpret 10+, 7–9, 6- manually

Fate Core
- Fate dice: `4dF` (already supported)

Blades in the Dark
- Pool take highest: `Nd6kh1` (e.g., `3d6kh1`)
- Spot crits (two 6s): add `Nd6#=6` to count sixes alongside your roll

Shadowrun (hits & glitches)
- Hits: `Nd6#>=5`
- Track 1s for glitch rules: add `Nd6#f=1`

Savage Worlds (trait + wild die)
- Roll both, keep highest: `(TRAIT!! + 1d6!!) kh + MOD`
- Raises (+4) are interpreted manually from the total

Vampire: The Masquerade (V5)
- Successes: `Nd10#>=6`
- Track 10s: add `Nd10#=10` (critical pairs/impacts require table rules)

Call of Cthulhu 7e
- Roll-under: `1d100` vs skill
- Bonus/Penalty dice: handle as a two‑step manual method (tens die replacement not encoded)

Cypher System
- Task roll: `1d20+MOD` (step/difficulty remains narrative)

Warhammer/40K‑style d6 pools
- Hits/wounds: `Nd6#>=TN` (set TN for your table)

Dungeon Crawl Classics (dice chain)
- Odd dice sizes are fine: `1d7`, `1d16`, `1d24`, `1d30`

Lancer (accuracy/difficulty)
- Accuracy: `1d20 + (Xd6kh1) + MOD`
- Difficulty: `1d20 - (Xd6kh1) + MOD`

Year Zero Engine (Free League: Alien, Forbidden Lands, Vaesen, etc.)
- Three colored pools (base/skill, stress, gear): roll each pool separately to keep counts distinct.
- Successes: `Nd6#s=6` on each pool; track 1s on stress/gear with `#f=1`.
- Push (reroll once, lock 6s and 1s): add `ro<6 ro>1` to reroll only 2–5 exactly once, e.g., `Nd6 ro<6 ro>1 #s=6`.
- Limitations: color tagging isn’t encoded in a single expression; roll each color as its own line. Panic/breakage resolution remains table‑side.

The One Ring 2e (approximation)
- Roughly: `1d12 + Nd6`
- Notes: Gandalf/Eye and Tengwar sixes are symbol effects; treat specials manually

Legend of the Five Rings
- AEG 1e–4e (Roll & Keep, exploding 10s): `Xd10!!khY`
- FFG/Edge 5e (symbol dice): Not supported

Genesys / FFG Star Wars (narrative dice)
- Uses custom symbol dice: Not supported

Ironsworn / Starforged
- Action roll: `1d6+MOD` vs two challenge dice `2d10` → compare manually (beat both=Strong Hit; one=Weak Hit; none=Miss).
- Progress moves: roll `2d10` vs current progress value (0–10) and compare manually.

## Starter downloads

Download sample Saved Formulas for popular systems that are ready to import. Use Manage Formulas → Import to merge them into your list. See the Downloads section at the bottom for files.

Important: If you manually drop a file in place rather than importing, name it exactly `saved_formulas.json`. The Import flow accepts any filename.

## Save, load, import, export (UI recap)

- Mobile: “Save Formulas” and “Manage Formulas” are under the formula text field.
- Desktop: both appear above the text field.
- Save adds the current formula to your Saved list and opens a dialog to name/describe it.
- Manage lets you import, export, reorder, rename, and delete.
- Import allows merging or replacing—export first if you want a backup.

## Troubleshooting & gotchas

- My counts look off with advantage
  - Put counters before keep/drop: `2d20 #cf #cs kh`.
- `4d6-L2+2` didn’t do what I expected
  - Drop binds tighter than `+`. Use parentheses for aggregate: `(4d6-L2)+2`.
- My D66 looks wrong
  - Use uppercase: `1D66`.
- I need exploding “once”
  - Use `!o` (explode once) or `!!o` (compound once).
- I want to keep the total but also know successes/failures
  - Use metadata counters: `#s/#f/#cs/#cf` so rolls remain visible and counts are recorded in metadata.

## Next steps

- Save your favorite expressions: see “Saving and Managing Dice Formulas”.
- Share and maintain a portable list: see “Formula Schema”.

> ##### Syntax engine and docs
> The roller is powered by Adventuresmith’s dart_dice_parser. For the full grammar and additional examples, see: https://pub.dev/packages/dart_dice_parser

## See a problem?

Help me keep this page and content up-to-date! If you see a problem, please report it: support@jasonholtdigital.com
