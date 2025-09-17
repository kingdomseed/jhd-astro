---
title: "v1.4.5 — Release Notes"
summary: "Full Portuguese, iCloud sync rebuilt, content from MM49, accessibility and stability across platforms"
category: "Release Notes"
date: "2025-03-03"
readTime: "7 min read"
isSample: false
tags: [
  "release",
  "v1.4.5",
  "localization",
  "portuguese",
  "icloud",
  "android",
  "windows",
  "linux",
  "macos",
  "amazon",
  "accessibility",
  "performance"
]
---

Released March 3, 2025

# Mythic GME Mobile 1.4.5

## Status
- iOS / macOS Apple App Store — Released / Released
- Android Google Play — Released
- Amazon AppStore — Released
- Microsoft Store — Released
- Itch.io Windows — Released
- Itch.io Linux — Released
- Itch.io macOS — **Delayed**

## Highlights
- **Complete Portuguese Support**: Full translation of all tables, interface elements, and game content
- **New Language Support**: Initial support for Spanish, French, and Italian (UI ONLY — set by OS)
- **Improved iCloud Sync**: Completely rebuilt synchronization with automatic backups and better reliability
- **New Content**: Evil Deed table and Mythic Magazine 49 content (culture descriptors, history, production, society growth)
- **Enhanced Accessibility**: Improved screen reader support with proper semantic headings
- **Fixed Critical Bugs**: Resolved issues across all platforms
- **Performance Improvements**: Better widget rebuilding efficiency and file operation handling

## Platform-Specific Improvements

### iOS and macOS
- Rewrote iCloud sync using native FileManager APIs
- Added proper ubiquity container URL handling
- Implemented security scoped bookmarks for iOS
- Fixed URL encoding for special characters
- Added automatic retry for failed operations
- Enhanced error resilience in file operations
- Fixed settings persistence between launches

### Android
- Fixed critical journal deletion bug in log service
- Enhanced widget rebuilding efficiency
- Improved file operation error handling
- Added real-time sync status reporting
- Fixed display log reversal order
- Optimized journal view performance

### Linux
- Added RPM package with proper dependencies
- Created AppImage for portable use
- Updated DEB package configurations
- Fixed desktop entry paths
- Enhanced file system integration
- Improved build configurations

### Windows
- Fixed ScaffoldMessenger null check issues
- Enhanced desktop mode UI responsiveness
- Improved focus management system
- Added proper semantic structure
- Fixed message handling across panels

## Language Support
- **Portuguese (Brazil)**: Completed full translation of all tables, interface elements, and game content
- **Spanish, French, Italian**: Added initial support with core interface elements translated (UI only, not selectable)
- **Localization Infrastructure**: Improved localization system to support dynamic language switching

## Content Additions
- **Evil Deed Table**: New table for generating evil deeds in your adventures
- **Mythic Magazine 49 Content**: Added new tables including:
  - Culture Descriptors
  - History
  - Production
  - Society Growth
- **All new content available in Portuguese**: Fully translated new tables

## Bug Fixes
- Fixed critical bug that could cause log entry deletion
- Corrected display log reversal order
- Fixed ScaffoldMessenger null check issues
- Resolved build context lifecycle issues
- Fixed bugs in the Fate view
- Improved tabbing in desktop mode for better keyboard navigation
- Fixed layout issues in the dice help bottom sheet
- Resolved adventure lists loading issues
- Fixed purchase restoration functionality

## Technical Improvements
- Migrated to GetIt for dependency injection
- Enhanced error reporting with Sentry
- Added comprehensive widget tests
- Fixed build context lifecycle issues
- Improved widget rebuilding efficiency
- Enhanced file operation error handling
- Added proper semantic structure for accessibility
- Optimized journal view performance
- Improved focus management system
