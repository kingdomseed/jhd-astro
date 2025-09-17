---
title: "v1.2.5 — App Relaunch"
summary: "Dice notation validation, journal safety, support options, and clarity pass"
category: "Release Notes"
date: "2024-11-12"
readTime: "4 min read"
isSample: false
tags: ["pre-release", "series:beta-to-first-release", "product:apps", "v1.2.5", "dice-roller", "journal", "accessibility", "support"]
---

Released November 12, 2024 (Getting close to launch!)

This post is part of the Beta → First Release series.

# Change Log — Upcoming Release Build → v1.2.5

## Dice Roller Improvements
- Fixed and validated support for complex dice notations including:
  - Keep/Drop operations (e.g., `4d6kh3`)
  - Advantage/Disadvantage rolls (`2d20kh1` / `2d20kl1`)
  - Fudge/Fate dice (`dF`)
  - Percentile dice (`d%`)
  - D66 rolls
  - Complex arithmetic combinations
- Improved handling of modifiers in dice formulas
- Added comprehensive test suite to verify dice roll calculations
- Enhanced validation for all supported dice notations
- Clear All functionality is more clear for both buttons

## Journal Features
- Confirmation modal when deleting journal entries
- Haptic feedback on list interactions in Adventure Lists
- Improved data management and safety features

## General Improvements
- Enhanced error handling across dice rolling operations
- Better validation for dice roll results
- Improved feedback for user actions
- Updated help text for clarity
- New Support screen with Contact Support options
- Meaning Tables have copiable text
