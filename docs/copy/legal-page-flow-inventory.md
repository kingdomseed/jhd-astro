# Legal Page Flow Inventory

Last updated: 2026-05-28

This inventory keeps the legal-page copy pass separate from v2 exploration. It
captures current page structure, source checks, and copy risks before wording is
approved section by section.

## Scope

- Production English legal pages: `src/pages/privacy.astro` and
  `src/pages/terms.astro`.
- Portuguese legal pages: `src/pages/pt/privacy.astro` and
  `src/pages/pt/terms.astro`, to be adapted after the English legal wording is
  approved.
- V2 legal pages are out of scope for this pass.

## Guardrails

- This pass is copy and factual-alignment work, not legal advice.
- Substantive legal sufficiency should be reviewed by counsel if the business
  needs legal certainty.
- Current app behavior and current official provider/store documentation win
  over old website copy.
- High-risk claims should either be source-backed or generalized so they do not
  go stale quickly.
- Legal copy should be sharp without overpromising: say what the apps actually
  do, avoid absolute guarantees unless the fact is durable, and prefer "may,"
  "where applicable," or provider/platform-specific wording when behavior can
  vary by platform, version, region, store, or plan.
- Legal copy can use more formal precision than marketing copy, but it should
  still be plain and readable.
- Work one section at a time. After approval, apply the copy, update this
  inventory/tracker, then show the next section.

## Current Source Checks

Local app facts checked against
`/Users/jholt/development/jhd-business/mythicgme2e`:

- Current app version in `pubspec.yaml`: `1.6.4+1117`.
- Current dependencies include `posthog_flutter` and `sentry_flutter`.
- Current dependencies do not include Firebase Analytics/Crashlytics packages;
  remaining Firebase mentions are comments, old changelog material, Firebase
  Test Lab references, or stale docs.
- Current analytics implementation is PostHog only. It is opt-in, disabled in
  debug, disabled on web, subject to internal age/compliance gating, and
  currently emits a single `daily_active` ping when enabled. Public copy should
  not describe this as the app identifying minors or knowing a player's age.
- Current analytics event methods for screen views, dice rolls, table usage,
  premium interactions, and custom events are intentionally no-op for PostHog
  event capture.
- Current PostHog config disables session replay, feature flags, surveys,
  person profiles, application lifecycle capture, and error autocapture.
- Current Sentry error reporting initializes in release builds by default.
- Current Sentry Session Replay is separate from analytics and only applies to
  iOS/Android. It uses `sessionSampleRate = 0.0` and on-error replay only when
  internal compliance checks allow it and Session Replay has been explicitly
  enabled.
- The app disclosure says basic error reporting is always enabled, with Sentry
  for error reporting and PostHog for analytics.
- Settings expose toggles for analytics and Session Replay. No current Settings
  control was found for disabling basic crash/error reporting itself.

Site context facts:

- Use "official partner" for marketing trust, but "licensed" or "officially
  licensed" when legal precision matters.
- Mythic GME Mobile is the mobile app for iPhone, iPad, Android, and Fire
  tablets.
- Mythic GME Digital is the desktop app for Windows, macOS, and Linux.
- Public copy should keep the "No subscriptions" claim. Mobile stores sell a
  one-time Expanded Features unlock; Microsoft Store and itch.io sell desktop
  as a one-time purchase.
- Exact prices should be avoided unless freshly verified.

Official external source checks:

- PostHog pricing currently describes Free as one project with one-year data
  retention, and pay-as-you-go as six projects with seven-year data retention:
  <https://posthog.com/pricing>.
- PostHog data-storage docs describe data storage location options, IP
  discarding, and data deletion tooling:
  <https://github.com/PostHog/posthog.com/blob/master/contents/docs/privacy/data-storage.mdx>.
- Sentry Help Center currently says Sentry SaaS error logs are stored for 30
  days on Free, 90 days on self-serve Team/Business, and custom retention is
  available on Enterprise:
  <https://sentry.zendesk.com/hc/en-us/articles/27118913621019-How-Long-Are-Errors-Events-Stored-in-Sentry>.
- Apple refund guidance points users to `reportaproblem.apple.com` and says
  refund eligibility varies by country or region:
  <https://support.apple.com/en-us/118223>.
- Google Play refund guidance says app/game/IAP refunds may depend on how long
  it has been since purchase, with a 48-hour path through Google Play and
  developer troubleshooting after that:
  <https://support.google.com/googleplay/answer/15574908>.
- itch.io Terms say refund requests can be made through support when content
  cannot run, access fails, or the product does not match what was advertised:
  <https://itch.io/docs/legal/terms>.
- Microsoft Support says digital goods like apps are not refundable unless the
  offer or applicable law makes them eligible, and provides a refund process for
  Microsoft Store apps/games:
  <https://support.microsoft.com/en-us/account-billing/get-a-refund-for-apps-and-games-purchased-from-microsoft-store-81629012-aa4f-f48b-2394-8596f415072b>.
- Amazon IAP docs point users with valid refund reasons to Amazon customer
  service through Contact Us or Help after logging in:
  <https://developer.amazon.com/docs/in-app-purchasing/iap-faqs.html>.
- Apple App Privacy Details require developers to understand each collected
  data type, whether it is linked to the user, and whether it is used for
  tracking:
  <https://developer.apple.com/app-store/app-privacy-details/>.
- Google Play Data Safety requires a global Data Safety form per package and
  requires disclosure of third-party SDK collection/sharing:
  <https://support.google.com/googleplay/android-developer/answer/10787469>.
- FTC COPPA guidance says the rule applies to services directed to children
  under 13 or services with actual knowledge they are collecting personal
  information from children under 13:
  <https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa>.
- ANPD guidance on data-subject rights lists LGPD rights such as information,
  confirmation/access, correction, anonymization/blocking/deletion,
  portability, deletion where consent is the basis, and consent withdrawal:
  <https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares>.
- CNPD guidance for Portugal lists RGPD rights such as access, rectification,
  erasure, restriction, portability, opposition, complaint channels, and the
  one-month response expectation:
  <https://www.cnpd.pt/cidadaos/direitos/>.
- Brazil consumer guidance from MJ/Senacon describes mandatory consumer rights
  for online purchases, including the right of regret under Article 49 of the
  Consumer Defense Code:
  <https://www.gov.br/mj/pt-br/assuntos/noticias/consumidor-tem-direito-ao-arrependimento-em-compras-on-line>.
- Portugal's Decreto-Lei n.º 84/2021 regulates consumer rights for goods,
  digital content, and digital services:
  <https://diariodarepublica.pt/redirect/LinkAntigo.aspx?search=172938301>.
- US state privacy rights list verification, checked 2026-05-28: the current
  page's named list of Virginia, Colorado, and Connecticut is incomplete. IAPP's
  US State Privacy Legislation Tracker was updated 2026-05-26 and tracks the
  broader comprehensive state privacy landscape:
  <https://iapp.org/resources/article/us-state-privacy-legislation-tracker/>.
  NCSL lists additional effective comprehensive state privacy laws beyond
  Virginia, Colorado, and Connecticut, including Utah, Texas, Florida, Oregon,
  Montana, Iowa, Tennessee, and Indiana:
  <https://www.ncsl.org/in-dc/task-forces/task-force-on-artificial-intelligence-cybersecurity-and-privacy/legislator-privacy-guide-and-glossary-of-privacy-terms>.
  Official state sources also confirm examples outside the current page list:
  Texas effective 2024-07-01
  (<https://www.texasattorneygeneral.gov/consumer-protection>) and Oregon
  effective 2024-07-01
  (<https://www.doj.state.or.us/consumer-protection/id-theft-data-breaches/>).

## Current Privacy Page Flow

| Order | Section | Current job | Copy/fact risk |
| --- | --- | --- | --- |
| 1 | Metadata and page header | Establish privacy-policy page and last updated date. | Last updated is stale if this pass changes the page. |
| 2 | Intro and controller | Names Jason Holt Digital LLC, privacy email, and straight-talk posture. | Mostly good, but "exactly" may overpromise if provider details are summarized. |
| 3 | Apps covered | Lists Mythic GME Mobile as iOS/Android/macOS/Web and Mythic GME Digital as Windows/macOS/Linux. | Conflicts with current site terminology: Mobile is iPhone/iPad/Android/Fire tablets; Digital is Windows/macOS/Linux. Web status needs care. |
| 4 | What data is collected | Claims PostHog and Firebase capture screen views, feature interactions, dice rolls, table searches, list actions, settings changes, and support actions. | Stale. Current app uses PostHog only and currently sends only a minimal daily active ping when analytics is enabled. Current app disclosure says dice rolls, table results, questions, journal writing, and gameplay are not tracked. |
| 5 | Crash/errors | Says Sentry crash/error reporting is opt-in, then later says it is on by default. | Internally inconsistent. Current app says basic error reporting is always enabled; Session Replay is separate and opt-in. |
| 6 | Analytics choice | Explains consent dialog, analytics off by default, crash/error on by default, Session Replay separately controlled. | Direction is mostly right, but the crash-reporting disable claim appears unsupported by current Settings. |
| 7 | No sale/share | Strong no-sale/no-share posture. | Updated to keep the no-sale/no-targeted-advertising point without "Ever" or speculative business-sale wording. |
| 8 | Providers and retention | Detailed PostHog, Firebase/GA4, and Sentry bullets. | Firebase is stale as an active provider. Exact provider retention should be refreshed or generalized to reduce drift. |
| 9 | Local storage and iCloud | Explains local game data, import/export, iCloud, and no Jason server storage. | Updated to avoid absolute "never uploads" wording; says Jason Holt Digital does not host game content on its servers. |
| 10 | GDPR/legal basis | Consent for analytics; legitimate interests for crash/error and support. | Needs review after current data practices are corrected. |
| 11 | Do Not Sell/Share | CCPA/CPRA statement. | Good posture; legal adequacy should not be over-expanded without counsel. |
| 12 | Privacy rights | Universal, GDPR, CCPA/CPRA, VA/CO/CT, LGPD. | Updated after 2026-05-28 verification showed the named US state list was incomplete; now uses broad "depending on where you live" rights wording. |
| 13 | How to exercise rights | Email route and response times. | Updated to remove "2 business days," fixed 30/45-day promise list, and "fastest response"; now commits to applicable-law timeframes. |
| 14 | Privacy controls | Settings toggles and device-level controls. | Updated to remove unsupported crash-reporting toggle and exact OS settings paths that can drift. |
| 15 | Platform differences | Explains limited desktop analytics. | Updated to reflect PostHog-only daily ping and current debug/web reporting gates. |
| 16 | Children's privacy | Under-13 and EU analytics consent age. | Updated to say the apps are not directed to children under 13 and do not ask for birth date, without implying age identification. |
| 17 | Changes/future features/contact | Explains updates, future cloud features, contact routes. | Updated to soften notification/future-feature promises and remove speed promises from contact language. |
| 18 | App Store compliance | Google Play Data Safety and Apple Privacy Nutrition Labels summaries. | Updated in the factual-core pass to align with current PostHog/Sentry provider list and app-store disclosure categories. |

## Approved Legal Copy Decisions

- Privacy factual core approved on 2026-05-28.
- Remove Firebase/GA4 as an active analytics provider.
- Describe analytics as optional PostHog only, off by default, currently limited
  to a daily activity ping with basic technical properties.
- Do not claim the apps collect detailed gameplay analytics such as dice rolls,
  table results, Fate Questions, journal text, Scene/List content, or table
  contents.
- Describe basic Sentry error reporting as enabled in release builds for app
  reliability and diagnostics.
- Describe Session Replay separately from analytics: off by default, supported
  only on mobile platforms where available, and configured for on-error
  debugging rather than continuous recording.
- Do not claim Session Replay is disabled for "users identified as minors" or
  imply that the app knows a player's age. Age-related or compliance behavior
  can be discussed later only if the wording avoids implying age identity
  collection.
- Avoid absolute "never uploads" claims about play content because diagnostics
  can include limited UI context depending on platform/settings. Use narrower
  claims: core play data is stored locally, and play content is not sent as
  analytics.
- Privacy rights copy should not maintain a partial US state-law list unless
  reviewed by counsel. The current production wording should use broad
  "depending on where you live" rights language.
- Avoid response-speed promises such as "2 business days" or "fastest response"
  on legal pages. Commit to the timeframe required by applicable law.
- Children's privacy copy should avoid implying the app knows or verifies a
  player's age. It can say the apps are not directed to children under 13 and do
  not require accounts or birth dates.
- Avoid exact device settings paths on legal pages because OS labels move over
  time. Describe system-level controls generally.
- Avoid future-feature guarantees that may outpace actual implementation. Use
  "where required or appropriate" and keep optional analytics/Session Replay
  consent under user control.
- Terms product/legal copy should use **Licensed Apps** and **Word Mill Creative
  LLC** rather than warmer partnership language. Avoid saying Mythic GME Mobile
  covers macOS or web.
- Terms user-content copy should mirror local-first privacy language: player
  content remains theirs and is stored locally unless they export, share, sync,
  or send it in a support request.
- Portuguese legal pages should adapt the approved English legal copy for
  Brazilian Portuguese readers and explicitly cover Brazil/Portugal legal
  posture: LGPD/ANPD, RGPD/CNPD, and broad mandatory consumer-rights safeguards.

## Current Terms Page Flow

| Order | Section | Current job | Copy/fact risk |
| --- | --- | --- | --- |
| 1 | Metadata and page header | Establish terms page and last updated date. | Updated to May 28, 2026 after English Terms edits. |
| 2 | Intro summary | Explains licensing, purchases, refunds, and third-party services. | Updated to explain what the terms cover without sounding like marketing copy. |
| 3 | Agreement to Terms | Standard agreement language. | Lightly updated to include apps and website and define "our." |
| 4 | Products Covered | Lists Mobile as iOS/Android/macOS/web and Digital as Windows/macOS/Linux. | Updated to current product vocabulary: Mobile is iPhone, iPad, Android, and Fire tablets; Digital is Windows, macOS, and Linux. |
| 5 | IP notice | Names Word Mill Creative LLC and licensed digital companions. | Updated with legal-precision wording: Word Mill Creative LLC owns related Mythic names, text, tables, and trademarks; JHD develops the officially licensed companion apps. |
| 6 | License and Use | Personal/non-commercial use, official content, user content, prohibited use. | Updated to keep the license narrow, clarify licensed Mythic content stays in-app, and align user-content wording with local-first legal claims. |
| 7 | Purchases, Subscriptions, and Taxes | Describes Apple, Google Play, and itch.io purchases. | Updated to "Purchases and Taxes," states no subscriptions, covers mobile Expanded Features unlock and desktop one-time purchases, and includes Apple, Google, Amazon, Microsoft, and itch.io surfaces. |
| 8 | Refunds | Links Apple/Google/itch.io refund paths. | Updated with freshly checked official store/provider refund paths and no refund-eligibility promise. |
| 9 | Third-party services | Points to Privacy Policy and says no ad SDKs. | Updated to cover store distribution, purchases, optional analytics, diagnostics, and support paths while pointing to the Privacy Policy. |
| 10 | Disclaimers/liability/indemnity/termination/governing law | Legal boilerplate. | High legal sensitivity. Favor minimal copy cleanup only. |
| 11 | App Store requirements | Mentions Apple and Google only. | Updated to "Platform Store Requirements" and covers Apple, Google Play, Amazon Appstore, Microsoft Store, and itch.io without overpromising support duties. |
| 12 | Contact | Legal email and mail address. | Good if address is current. |

## Recommended Section Order

1. Privacy factual correction: covered apps, data collected, analytics,
   diagnostics, Session Replay, providers, and retention.
2. Privacy rights/contact cleanup: rights wording, response promises, children,
   app-store compliance summaries.
3. Terms product and license sections: product names/platforms, licensed content,
   user content.
4. Terms purchases/refunds/store terms: no subscriptions, Expanded Features
   unlock, Amazon/Microsoft coverage, platform refund paths.
5. Portuguese legal adaptation after English approval. Status: Done for
   production Portuguese Privacy and Terms on 2026-05-28.

## Current Status And Outstanding Work

English and Portuguese legal-page copy is complete for this production pass.
The Privacy page has been updated for factual provider behavior, privacy
rights, contact language, children's privacy wording, device-control drift, and
overpromise/verified incomplete state-law listing risk. Terms product, license,
purchase, refund, third-party, store, and change wording has also been updated.
Portuguese legal pages have been adapted after English approval with
Brazil/Portugal legal framing.

Remaining work is not copy grilling unless Jason explicitly starts it:

- Counsel review if the business needs legal sufficiency rather than factual
  public copy alignment.
- Fresh fact checks if app behavior, analytics/error reporting providers, store
  policies, purchase models, or relevant laws change.
- A targeted legal metadata refresh only when the legal page copy itself is
  changed again.
