# PostHog App Analytics Tracking Plan

Last updated: 2025-08-27

Scope: Native app telemetry only (Flutter). Not website analytics.

## Conventions

- Event names: lower_snake_case, feature_action format (e.g., `log_copy`, `table_roll`).
- Properties: lower_snake_case keys. Booleans when possible; enums as strings.
- Avoid PII. Hash any IDs before sending (stable salt, app-local only).
- Always include common properties below to aid segmentation.

### Common properties to include on all events

- app_version
- build_channel: dev | beta | prod
- platform: iOS | Android | macOS | Windows | Linux | Web
- locale
- current_screen (auto-enriched by AnalyticsService; see Screen names below)
- source_component (optional): button id, widget id
- has_premium_access (if available): true/false
- journal_id_hash (when in a journal context)
- scene_id_hash (when in a scene context)
- table_id_hash (when interacting with a table)
- list_type (when relevant): characters | threads | features
- list_id_hash (if applicable)

Notes:

- Hashing: Prefer SHA-256 with a per-install salt that never leaves the device.
- Distinct ID: Use PostHog distinct_id (stable per install). If you also have an account/user id, set as user property but do not send PII.

## Integration with existing AnalyticsService

- Service: use `lib/core/services/app/analytics_service.dart`; do not create a new analytics service.
- Consent: uses `PreferencesService.getAnalyticsEnabled()` and `posthogToggle(enabled)`.
- Dual logging during sunset: Firebase Analytics remains until fully sunset; PostHog screen capture is live. We'll add PostHog capture for custom events inside `AnalyticsService.logEvent()` so both backends receive events without duplicate instrumentation.
- Error-safety: All analytics calls are wrapped in try/catch within `AnalyticsService`, and UI callers defensively guard calls. If the user disables analytics, `PreferencesService.getAnalyticsEnabled()` ensures PostHog/Firebase calls become no-ops. The app will not crash if analytics are disabled or unavailable.
- Enrichment: `AnalyticsService` auto-adds common properties like `current_screen` and `timestamp` to every event.

### Screen names

- Allowed `screenName` values (from `_getScreenClass`):
  - fate_chart, fate_check
  - meaning_tables
  - custom_tables
  - adventure_lists
  - scenes
  - dice_roller
  - settings
  - premium
  - support

Note: `AnalyticsService` auto-enriches events with `current_screen`. Some helpers also attach `screen`; we will standardize on `current_screen` moving forward.

### Existing event names in service

- feature_usage (params: feature_name, action, ...context)
- dice_roll (params: dice_type, result, context, screen)
- table_usage (params: table_name, table_type, result, screen)
- premium_interaction (params: feature, action, has_access, screen)
- journal_operation (params: operation, journal_id, ...)

### Mapping guidance

- Use existing names when available:
  - Dice Roller → `dice_roll` (extend properties below).
  - General UI taps/toggles can go through `feature_usage` with a clear `feature_name`/`action`.
  - Meaning Tables rolls may remain `table_roll` in PostHog, but can mirror to Firebase as `table_usage`.

---

## Fate Chart + Game Log

- log_copy
  - When: user copies from game log widget
  - Props: selection_length, total_log_length

- log_clear
  - When: user clears game log
  - Props: previous_log_length, confirmed: true/false

- chaos_factor_change
  - When: chaos factor changes
  - Props: from, to

- scene_adjustment_called
  - When: a scene adjustment action is invoked from Fate Chart
  - Props: adjustment_type (e.g., interrupt, altered, none)

- settings_opened_from_fate_chart (optional)
  - When: settings opened from within Fate Chart context

## Settings (global and in-context)

- Status: Implemented (SettingsView + SettingsViewModel)
  - Implementation files: `lib/features/settings/view/settings_view.dart`, `lib/features/settings/view_model/settings_viewmodel.dart`
  - Emitted via `AnalyticsService` with consent + error-safety.

- settings_opened
  - When: settings screen opened

- setting_changed
  - When: any setting toggled/edited
  - Props: setting_key, from_value, to_value, changed_in: settings_screen | in_context

- Note: No Settings search UI exists; skip `settings_searched` for now.

Recommendation: maintain a canonical list of setting_key values in code to avoid typos.

## Lists (Characters, Threads, Features)

- notes_opened
  - When: notes UI opened from Lists screen
  - Props: list_type

- notes_saved
  - When: notes saved/updated
  - Props: list_type, content_length

- features_list_opened
  - When: Features list tab/view opened

- list_expand
  - When: user expands the visible entries
  - Props: list_type, expand_to_count (up to 25)

- list_collapse
  - When: user collapses entries
  - Props: list_type, collapse_to_count

- list_roll
  - When: rolling on a list from Lists screen
  - Props: list_type, list_id_hash

- list_item_created
  - When: new character/thread/feature created
  - Props: list_type

- list_item_deleted
  - When: item deleted
  - Props: list_type

## Scenes

- scene_created
  - When: a new scene is created
  - Props: input_method: typed | paste | import

- scene_edited
  - When: scene content updated
  - Props: change_size: small | medium | large (bucket by char delta), contains_markdown: true/false

- scene_markdown_action
  - When: markdown toolbar or formatting action used
  - Props: action: bold | italic | heading | code | link | checklist | etc.

- journal_scene_count_snapshot
  - When: on journal open and after scene create/delete
  - Props: scene_count

## Meaning Tables

- table_favorited
  - When: a meaning table is favorited/unfavorited
  - Props: table_id_hash, favorited: true/false

- table_search
  - When: searching within meaning tables
  - Props: query_length, results_count (if cheap to compute)

- table_tap
  - When: user taps a table card/entry
  - Props: table_id_hash, press_type: single | double

- table_roll
  - When: a roll is performed from Meaning Tables
  - Props: table_id_hash, roll_source: meaning_tables_screen | fate_chart_panel

- roll_result_interaction
  - When: user interacts with roll result
  - Props: action: copy | save | expand | share | dismiss

## Dice Roller

- Status: Implemented (Dice Roller ViewModel)
  - Implementation file(s): `lib/features/dice_roller/notifiers/dice_roller_viewmodel_notifier.dart`
  - Emitted via: `AnalyticsService.logEvent()` with consent and common property enrichment.

- dice_roll
  - When: any roll executed
  - Props: expression_text (redact if needed), uses_modifiers: true/false, term_count, operator_count, is_complex (derived), method: manual | saved, error: true/false
  - Notes:
    - expression_text is truncated to a max of 200 characters before sending.
    - term_count/operator_count derived via `FormulaTokenizer` tokens.
    - uses_modifiers derived from presence of modifier tokens in expression.
    - is_complex heuristic: multiple operators, parentheses present, or >5 terms.
    - method is determined by matching the expression to saved formulas: manual | saved.
    - error is false for successful rolls (errors are captured separately below).

- dice_roll_error
  - When: expression fails to parse/evaluate
  - Props: error_type, expression_length
  - Notes:
    - Captured in `performRoll()` catch block in `DiceRollerViewModelNotifier`.
    - error_type is derived from the runtime exception type.

- saved_formula_created

- saved_formula_deleted

## Table Editor (Custom Tables)

- table_created
  - Props: category_id_hash (if applicable), is_built_in: false

- table_edited
  - When: any edit to a table's metadata (name/description)
  - Props: table_id_hash, is_built_in: true/false

- table_deleted
  - Props: table_id_hash, is_built_in: true/false

- category_created

- category_deleted

- table_rows_added
  - Props: table_id_hash, count

- table_rows_deleted
  - Props: table_id_hash, count

- table_imported
  - Props: source: file | clipboard | url, row_count

- table_exported
  - Props: format: json | csv | tsv | txt, row_count

- built_in_table_modified
  - Props: table_id_hash

## Support

- Status: Implemented (SupportView)
  - Implementation file: `lib/features/support/support_view.dart`
  - Emitted via `AnalyticsService` with consent + error-safety.

- support_opened
  - When: Support screen first shown (post-frame) via `logScreenView('support')` and `logEvent('support_opened')`.

- support_link_clicked
  - Props: link_id: email | discord | website | docs | review | other
  - Implemented link_id values: email, website, discord, docs

- support_action
  - Props: action: email_support | rate_app | open_github | open_docs | other
  - Implemented actions: rate_app

## Settings (detailed)

- setting_changed (see above)
  - Suggested keys to monitor in dashboards: theme_mode, roll_display_mode, language, cloud_sync_enabled, cloud_sync_provider, analytics_enabled, show_animated_dice_rolls, show_dice_roller_total, show_fate_rolls, show_odds, use_fate_check_mode, auto_edit_new_scenes.

### Canonical setting_key values (from PreferenceKeys)

User-facing (track via `setting_changed`):

- theme_mode
- colorblind_mode
- left_handed_mode
- use_accessible_layout
- show_roll_system_type
- show_fate_rolls
- show_scene_check_rolls
- show_event_focus_rolls
- show_odds
- show_chaos_factor
- show_question
- ask_question_before_roll
- show_timestamps
- roll_display_mode
- show_dice_roller_total
- show_animated_dice_rolls
- input_rolls
- selected_event_focus_table
- default_action1_meaning_table_id
- default_action2_meaning_table_id
- use_fate_check_mode
- never_roll_choose
- auto_edit_new_scenes
- dice_roller_split_ratio
- auto_add_operator_between_dice
- cloud_sync_enabled
- cloud_sync_provider
- use_documents_table_loading
- auto_restore_tables
- disable_table_editing
- language
- double_roll_non_paired
- table_double_roll_overrides
- meaning_tables_auto_flip
- analytics_enabled

Other preferences (usually not user-triggered settings changes; avoid noisy tracking by default):

- last_journal
- journal_order
- custom_storage_path
- use_custom_storage
- security_bookmark
- last_sync_time
- icloud_migration_performed
- has_premium_access
- premium_expiry_date
- cached_premium_entitlements
- cached_premium_purchase_dates
- premium_entitlements_cached_at
- device_id
- dice_bag_expanded_indices
- favorite_meaning_tables

Deprecated/legacy:

- show_journal_manager_on_launch (cleaned up by `PreferencesService`)

---

## Derived metrics and dashboards (examples)

- Adoption: % users who used Features list; % who edited a built-in table; % who used saved formulas
- Engagement: median scenes per journal; average list rolls per session; dice rolls per session
- Feature usage: distribution of dice expression complexity; top tables rolled; top settings changed
- Funnels: new user → first scene → first roll → first custom table

## Implementation notes

- Centralize tracking in an Analytics service to keep UI clean and unit-testable
- Emit events from Notifiers/ViewModels for state changes; from Widgets for pure UI actions
- Guard with analytics opt-in and platform checks
- Batch context-specific IDs using hashed values only

## Open questions to confirm

1) Enumerate concrete setting_key values to track (full list)
2) Confirm ability to detect paste vs typed in Scenes (platform text field hooks)
3) Confirm max list expand target (25) and all list_types in scope
4) Define `adjustment_type` taxonomy for scene adjustments
5) Support: additional links/actions can be added later (e.g., GitHub/issues) — taxonomy above already accounts for these.

## Next steps

1. QA Support screen events in dev: verify `support_opened`, `support_link_clicked(link_id)`, `support_action(rate_app)` in PostHog with correct `current_screen`.
2. QA Settings screen events in dev: verify `settings_opened` and `setting_changed(setting_key, from_value, to_value, changed_in)` in PostHog with correct `current_screen`.
3. QA Dice Roller events in dev: verify `dice_roll` and `dice_roll_error` with properties above; confirm `current_screen` enrichment and consent behavior.
4. Instrument Meaning Tables: `table_search`, `table_tap`, `table_roll`, `roll_result_interaction`.
5. Define dashboards: adoption, engagement, key funnels; add Support usage metrics.
6. Run end-to-end QA: confirm consent toggles result in no-ops, verify error-safety across platforms.
