# Blog Writing Guide

Last updated: 2026-05-28

This guide defines the repeatable writing workflow for Blog posts and release
notes on the Jason Holt Digital site. It should be used with `CONTEXT.md` and
the current app repo at `/Users/jholt/development/jhd-business/mythicgme2e`.

## Goal

Blog posts should help players understand what changed, why it matters in play,
and where to go next. They should sound like Jason after careful editing:
direct, concrete, and honest without turning every post into a product pitch.

## Source Of Truth

- Use `CONTEXT.md` for public voice, approved terms, and grammar constraints.
- Use the Mythic app repo for shipped release facts, current version, changelog
  source material, and app behavior.
- Use existing site copy only when it still matches current facts and approved
  terminology.
- Do not guess current release status, prices, store behavior, privacy
  providers, or roadmap timing.

## Workflow With Codex

1. Inventory the post or release group before rewriting.
2. Pull current facts from the Mythic app repo.
3. Identify stale terms, future-tense claims, old provider names, and old
   purchase language.
4. Draft English first.
5. Review the English structure and tone before adapting Portuguese.
6. Adapt Portuguese from the approved English meaning in natural Brazilian
   Portuguese.
7. Run `npx astro check` and `npm run build` before publishing.

## Release Note Structure

Use this backbone for every release note:

- Frontmatter with a clear title, summary, date, language, keywords, and tags.
- A short update note when the post was originally a preview or has been revised
  to reflect a shipped release line.
- A short opening paragraph that names the player-facing purpose of the release.
- `Highlights` for the most important player outcomes.
- `Added`, `Changed`, and `Fixed` sections when they help players scan.
- Patch sections for release lines such as `1.6.0-1.6.4`.

Older beta and release-candidate notes may be shorter because many were compiled
from Discord threads. They should still use the same backbone, current terms,
and a brief beta-context note when old names would otherwise confuse players.
Do not over-normalize these notes into fake formal changelogs; preserve their
archive feel when the only needed work is terminology, timeline, or metadata
cleanup.

## Voice Rules

- Lead with what changed for players.
- Keep implementation details secondary unless the post is intentionally
  technical.
- Prefer concrete app terms over clever language.
- Keep the tone calm and practical, even when the release is exciting.
- Use first person sparingly; when Jason speaks, make it sound like him.
- Avoid over-polished phrasing, hype, slogans, and corporate release language.
- Avoid the claim-colon explanation pattern except in structured release-note
  bullets where a label genuinely helps scanning.

## Terminology Rules

- Use `player`, not customer or consumer, when the context is play.
- Use `Adventure Log`, `Journals`, `Custom Tables`, `Meaning Tables`, `Event
  Focus`, `Progress Tracks`, `Discovery Checks`, and `Keyed Scenes`.
- Use `Expanded Features` and `one-time unlock` for mobile purchase language.
- Avoid raw `IAP`, `Premium`, `Pro`, and subscription-like wording in public
  posts unless quoting historical source material with a clear note.
- Do not name Firebase/GA4 as current analytics providers. Current privacy copy
  says analytics is PostHog-only and optional, while Sentry handles release
  error reporting.
- Replace `coming soon` language after a feature has shipped.

## Portuguese Adaptation

- Adapt from approved English meaning; do not mechanically translate.
- Use natural Brazilian Portuguese.
- Keep product names in English: Mythic GME Mobile, Mythic GME Digital, Mythic
  GME 2e, Word Mill Creative.
- Preferred PT terms include `jogadores`, `sessões`, `sem mestre`, `Diário de
  Aventura`, `Tabelas de Significado`, `Foco de Evento`, `Tabelas
  Personalizadas`, `Recursos Expandidos`, and `desbloqueio único`.
- For current app release notes, use current PT mechanic names consistently:
  `Trilhas de Progresso`, `Jogo Híbrido`, `Verificações de Descoberta`, and
  `Cenas com Gatilho`.

## Definition Of Done

- English and Portuguese posts agree on facts and structure.
- The post no longer reads as future-tense when the feature has shipped.
- Visible frontmatter title and summary are sharp enough for the Blog index,
  detail page header, SEO metadata, and social previews.
- Stale provider, purchase, partner, and roadmap language has been removed or
  clearly framed as historical.
- `npx astro check` and `npm run build` pass.
