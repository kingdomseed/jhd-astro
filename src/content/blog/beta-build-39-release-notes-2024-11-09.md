---
title: "Beta Release Notes — Build 39"
summary: "Core gameplay logging fixes, refined Fate UI, and accessible controls"
category: "Release Notes"
date: "2024-11-09"
readTime: "4 min read"
isSample: false
tags: ["beta", "series:beta-to-first-release", "product:apps", "build-39", "accessibility", "logging", "dice-roller", "ui"]
---

Released November 9, 2024

This post is part of the Beta → First Release series.

## 🎯 Core Gameplay Improvements
- “Set Odds” renamed to “Fate” with updated Odds Wheel labeling
- Fixed display and tracking of non‑roll fate events in the log
- Enhanced event logging for:
  - Scene checks
  - Random events
  - Fate checks
  - Scene adjustments

## 🎨 Interface Updates
- Refined Chaos Factor and Fate displays
  - Improved spacing and margins
  - Better text scaling with FittedBox
  - More consistent vertical rhythm with flexible layouts
- Consistent margins via shared resource definitions
- Improved icons

## ⚡ Accessibility Enhancements
- Unified Odds Selector wheel control with screen reader support
- Added semantic labels and navigation for:
  - Meaning Tables expansion panels
  - Dice Roller controls and saved formulas
  - Tab navigation
- Improved assistive technology feedback

## 📱 Usability Features — Dice Roller
- Manage formulas: edit, reorder, and delete
- Improved tab organization and navigation

## 💾 Data & State Management
- Better log entry handling
  - Proper display of non‑roll events
  - Synchronized journal and on‑screen log entries
  - Improved scene adjustment tracking

## 🐛 Bug Fixes
- Restored missing log entries for:
  - Non‑roll fate events
  - Event focus results
  - Random events
  - Scene adjustments
- Corrected sync between journal and visible log

Note: This build primarily addresses log display issues and accessibility while adding new dice roller formula management features.
