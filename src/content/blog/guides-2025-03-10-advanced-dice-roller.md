---
title: "Advanced Dice Roller — Notation & Tips"
summary: "Power‑user dice notation for Mythic GME Apps, with saved formulas and advanced operations"
category: "Guides"
date: "2025-03-10"
readTime: "7 min read"
isSample: false
keywords: ["guide", "dice roller", "reference", "Mythic GME Apps"]
tags: ["guide", "product:apps", "dice-roller", "notation", "reference", "advanced"]
---

On March 10th, 2025 — The Dice Roller included in the apps is quite advanced, especially if you spend some time to type and save formulas that are specific to your game. This is an implementation of the Dart Dice Parser and the text below is adapted from their support page for convenience.

> Tip: Save common formulas in the app so they’re one‑tap away during play.

## Dice notation

### Examples

- `2d20 #cf #cs` — roll 2d20, result will include counts of critical successes (20) and failures (1)
- Advantage
  - `2d20-L` — drop lowest
  - `2d20k`, `2d20kh` — keep highest
- Disadvantage
  - `2d20-H` — drop highest
  - `2d20-kl` — keep lowest
- `(2d10+3d20)-L3` — roll 2d10 and 3d20, combine the two results lists, and drop lowest 3 results
- `20d10-<3->8#` — roll 20 d10, drop any less than 3 or greater than 8 and count the number of remaining dice

### Supported notation

- `2d6` — roll 2 dice of 6 sides
- Special dice variations:
  - `4dF` — roll 4 fudge dice (sides: `[-1, -1, 0, 0, 1, 1]`)
  - `1d%` — percentile dice (equivalent to `1d100`)
  - `1D66` — D66 (`1d6*10 + 1d6`) — use uppercase `D66`
  - `2d[2,3,5,7]` — custom face values

#### Exploding dice
- `4d6!` — explode on max (6)
- `4d6!=5` or `4d6!5` — explode on 5
- `4d6 !>=4` / `!<=2` / `!>5` / `!<2`
- One explosion only: `!o` (e.g., `4d6 !o<5`)

#### Compounding dice
Like exploding, but additional rolls are added together as a single result.
- `5d6 !!` — compound
- `5d6!!=5` or `5d6!!5`
- `5d6 !!>=4` / `!!<=4` / `!!>5` / `!!<3`
- Once only: `!!o` (e.g., `5d6 !!o<2`)

#### Re‑rolling dice
- `4d4 r2` — re‑roll any result `=2`
- `4d4 r=2`, `r<=2`, `r>=3`, `r<2`, `r>3`
- Re‑roll once: `ro` (e.g., `4d4 ro<2`)

#### Keeping / Dropping dice
- Keeping: `3d20 k2`, `kh2`, `kl2`
- Dropping: `4d6 -H`, `-L`, `-H2`, `-L2`, `->5`, `-<2`, `->=5`, `-<=2`, `-=1`

Notes:
- Drop operators have higher precedence than arithmetic: `4d10-L2+2` == `(4d10-L2)+2`
- Drop is not subtraction. `4d6 - 3` subtracts 3; `4d6 -L` drops lowest.

#### Cap / Clamp
- `4d20 C<5` — change any value `<5` to 5
- `4d20 C>15` — change any value `>15` to 15

#### Scoring dice rolls
- Count: `4d6 #>3`, `#<3`, `#>=5`, `#<=2`, `#=5`
- Successes/Failures without discarding dice:
  - `6d6 #f<=2 #s>=5 #cs6 #cf1`
  - Returns metadata with successes/failures and crits

Order matters. Example: `2d20 kh #cf #cs` drops the 1 before counting; move counts earlier if needed (e.g., `2d20 #cf #cs kh`).

#### Arithmetic
- Parentheses for order of operations.
- Addition can sum integers or aggregate roll results: `(5d6+5d10)-L2`.
- `*` multiply; `-` subtract; division is not supported.

## Saved formula tips
- Organize common rolls by activity (combat, travel, exploration).
- Use short labels so they fit and are scannable.
- Group by game system if you play multiple systems.

## References
- Dart Dice Parser project: https://pub.dev/packages/dart_dice_parser
- GitHub repository: https://github.com/greymour/dart_dice_parser
