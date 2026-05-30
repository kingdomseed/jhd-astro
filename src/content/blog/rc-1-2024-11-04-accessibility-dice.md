---
title: "Release Candidate 1 — Release Notes"
summary: "Accessibility overhaul, new dice roller core, safer storage, and platform hardening"
category: "Release Notes"
date: "2024-11-04"
readTime: "5 min read"
isSample: false
keywords: ["release notes", "Mythic GME Apps"]
tags: ["beta", "series:beta-to-first-release", "rc1", "product:apps", "accessibility", "dice-roller", "platform"]
---

Released November 4, 2024.

This post is part of the Beta → First Release series.

At the time, this was the Release Candidate after several beta builds in one
weekend. If nothing broke, this was the version headed to the stores pending
approval timelines.

## Accessibility Enhancements

### Semantic Structure Improvements
- Comprehensive semantic heading structure across all pages
- Proper semantic labels and roles for better screen reader compatibility
- Improved navigation flow for assistive technologies
- Reorganized content hierarchy for clarity
- Dynamic text scaling support across all screens
- Improved contrast ratios for readability

### Color Vision Deficiency Support
- Added support for six color‑vision profiles:
  - Protanopia (red‑blind)
  - Deuteranopia (green‑blind)
  - Tritanopia (blue‑blind)
  - Protanomaly (red‑weak)
  - Deuteranomaly (green‑weak)
  - Tritanomaly (blue‑weak)
- Color‑blind‑friendly UI elements and indicators
- High‑contrast mode option
- Enhanced visual feedback mechanisms

## Dice Roller Improvements

### Core Functionality
- Complete rewrite of Dice Roller view and viewmodel
- Full integration with `dart_dice_parser`
- Advanced notation support:
  - Standard dice (d4, d6, d8, d10, d12, d20, d100)
  - Multiple dice (2d6, 3d8, …)
  - Modifiers (+1, −2, …)
  - Keep highest/lowest (kh1, kl2, …)
  - Rerolls (r1, r<3, …)
  - Exploding dice (!)
  - Target numbers (t6, t>4, …)

### User Interface Enhancements
- Dedicated dice roll log
- Toggle switches for common settings
- Clear visual feedback for results
- Enhanced history display
- Quick access to frequently used combinations

## Backend Improvements

### File Handling
- Fixed critical journal loading bug affecting persistence
- Safer file read/write operations
- Better error handling for file operations
- Optimized storage mechanisms

### Platform Optimization
- Reduced required permissions on Android and iOS
- Streamlined file access permissions
- Removed unnecessary storage access
- Optimized background operations

## General Improvements
- Cleaned up and standardized UI styling
- Better performance with large datasets
- Improved error messaging and user feedback
- Updated documentation and help sections

## Known Issues
- None reported for RC1 at the time

## Installation Notes
- Clean installation recommended
- Back up existing data before updating
- Check app permissions after update

At the time, I was doing thorough compliance and permissions checks to ensure no
data was being pulled from your device by accident.
