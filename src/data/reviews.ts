// Centralized quotes dataset for Reviews Rotator
// Keep entries short, positive, and include proper attribution + source link.
// Icons use Font Awesome brand classes.

const quotes = [
  // Apple App Store
  { text: 'There was bug, hour later, no bug.', src: 'App Store — Roaet', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Good dev. Good program.', src: 'App Store — Roaet', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is a very good game master emulator!', src: 'App Store — Alex', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'I requested a change, and Jason was super responsive. He quickly implemented it in the next update.', src: 'App Store — Patasssf', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is a very valuable tool that will immensely help me accelerate my solo games.', src: 'App Store — M. H.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'A polished, easy‑to‑use app — a great conversion of Tana Pigeon’s toolkit.', src: 'App Store — Dirk', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'What can I say… just perfect.', src: 'App Store — Siera', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'It’s worth its price for every one of its functions.', src: 'App Store — S.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Makes it so easy to play games solo! Can’t recommend it enough.', src: 'App Store — Ryan', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is my favorite app for playing games 👍👍👍', src: 'App Store — Elsa', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: '…brings another order of magnitude ease of use to solo gaming RPGs.', src: 'App Store — Troy', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'It has all the tools I would want… Thank you for not making it a subscription!', src: 'App Store — Ember', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'A great time saver that keeps you engaged in the story rather than bookkeeping.', src: 'App Store — Celstra', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Do a solo session on a plane! Loved it.', src: 'App Store — Chrome', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'An amazing, helpful companion to the book.', src: 'App Store — Stefan', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },

  // itch.io
  { text: 'Thanks Jason, I really appretiate that we have a DRM‑free version without the need to be tied to a platform to install it.', src: 'itch.io — F.', href: 'https://itch.io/t/4636117/very-happy-with-my-purchase', icon: 'fa-itch-io' },
  { text: 'Just bought your Windows and Android (Expansion) apps, and I gotta say, THANK YOU!!!!', src: 'itch.io — S.', href: 'https://itch.io/t/5214037/custom-tables', icon: 'fa-itch-io' },
  { text: 'I found the area where I can add my own custom tables and stuff!', src: 'itch.io — S.', href: 'https://itch.io/t/5214037/custom-tables', icon: 'fa-itch-io' },

  // Reddit (user-provided)
  { text: 'Wow this is getting even better! Amazing work!', src: 'Reddit — B. E.', href: 'https://www.reddit.com/r/mythic_gme/comments/1mmtxnh/mythic_gme_mobile_digital_v15_custom_tables/', icon: 'fa-reddit-alien' },
  { text: 'Awesome! I didn’t even notice the Premium stuff… I’ll be sure to upgrade.', src: 'Reddit — K. F.', href: 'https://www.reddit.com/r/mythic_gme/comments/1mmtxnh/mythic_gme_mobile_digital_v15_custom_tables/', icon: 'fa-reddit-alien' },
  { text: 'I officially love it even more now.', src: 'Reddit — M. W.', href: 'https://www.reddit.com/r/mythic_gme/comments/1ihmhf6/mythic_gme_mobile_digital_v140/', icon: 'fa-reddit-alien' },
  { text: 'All of them?? This is a bargain.', src: 'Reddit — B.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'That is indeed fantastic. ❤️', src: 'Reddit — V.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'Yeah — it’s pretty great!', src: 'Reddit — S.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'One of the few paid apps on my phone that I’m happy with and use a lot!', src: 'Reddit — D.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'Wait, WHAT?! TAKE MY MONEY!!!', src: 'Reddit — P.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'I can’t wait! Mythic is my favorite way to solo play.', src: 'Reddit — K.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'You did such a great job with this! Thank you!', src: 'Reddit — R.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },

  { text: 'This app is seriously good. Easy to use, not bloated, and perfectly usable on the fly.', src: 'Reddit — D.', href: 'https://www.reddit.com/r/solo_roleplaying/comments/1e5m5x8/mythic_gme_mobiledigital_v15_release/', icon: 'fa-reddit-alien' },
  { text: 'Overall, very good work and I\'m really happy the app is still getting updates. :)', src: 'Reddit — C.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'Looks awesome! Incredible work <3', src: 'Reddit — C.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'Looks great and just in time for my new adventure.', src: 'Reddit — M.', href: 'https://www.reddit.com/r/mythic_gme/comments/1jkbarw/itchio_official_release_mythic_gme_digital_v147/', icon: 'fa-reddit-alien' },
  { text: 'Looks great. I\'m glad to see someone pick this up again. I used the old app quite often.', src: 'Reddit — S.', href: 'https://www.reddit.com/r/solo_roleplaying/comments/1e5m5x8/mythic_gme_mobiledigital_v15_release/', icon: 'fa-reddit-alien' },
  { text: 'It\'s great and a fantastic job, congratulations!', src: 'Reddit — C.', href: 'https://www.reddit.com/r/mythic_gme/comments/1mmtxnh/mythic_gme_mobile_digital_v15_custom_tables/', icon: 'fa-reddit-alien' },
  // Google Play / AppBrain (user-provided)
  { text: 'This is a truly exceptional app that implements the Mythic GME 2E... I would highly recommend it.', src: 'Google Play — Jason', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'This is such a clean solution for the tool! I\'m glad I got it. Does its job and works incredibly well.', src: 'Google Play — A. B.', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'Simply the most useful and user-oriented tools for Mythic GME!', src: 'Google Play — Aleh', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'I absolutely LOVE this app... Overall, well worth it!', src: 'Google Play — Adam', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'It\'s great, I love mythic 2e, but I think the design could make playing a game with nothing but your phone more streamlined.', src: 'Google Play — Steven', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'It\'s well worth it for all the features… I am especially looking forward to the note management coming soon.', src: 'Google Play — Taylor', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'I\'m very satisfied. The dice roller is amazing. User interface is handy. This is so much faster than looking up tables!', src: 'Google Play — Rik', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'Great app and constantly getting better... even in its current state the app is super solid.', src: 'Google Play — James', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'Had an issue, but the Team swiftly took care of it. Very excited for the app and to use it!', src: 'Google Play — Mark', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'There is no better way to play RPG solo digitally with the Mythic GME than with this app... having this digital app for running the GME engine is amazing.', src: 'Google Play — Gus', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'Great app! If you ever wanted to test drive the Mythic Game Master Emulator 2nd edition... this is an easy way to do it.', src: 'Google Play — Sean', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'I was so excited for this and it\'s great! I find this super useful for both solo and GM-less... It\'s even good for writing!', src: 'Google Play — M.', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'A great solo roleplay tool.', src: 'Google Play — John', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'I love Mythic and mainly bought this to support them... indispensable tool. This is the best companion app for a tabletop game that I\'ve ever used.', src: 'Google Play — Rhys', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'What a time saver! I bought the book and was in the process of writing some code to do a fraction of what this app does... Glad it was available!', src: 'Google Play — Jim', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'This is an excellent tool for on-the-go solo Roleplaying Games. It has everything you need... I can\'t recommend the Mythic system enough.', src: 'Google Play — Dean', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'The Mythic GME app is officially back, and better than ever! The graphical interface is sleek, modern, and intuitive... Highly recommended!!', src: 'Google Play — Austin', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'This companion app... is amazing. I really like the UI layout... streamlined and categorized to make finding what you want fast and easy.', src: 'Google Play — Chico', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
];

export default quotes;
