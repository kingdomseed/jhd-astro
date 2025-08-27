// Centralized quotes dataset for Reviews Rotator
// Keep entries short, positive, and include proper attribution + source link.
// Icons use Font Awesome brand classes.

const quotes = [
  // Apple App Store
  { text: 'There was bug, hour later, no bug.', src: 'App Store — R.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Good dev. Good program.', src: 'App Store reviewer', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is a very good game master emulator!', src: 'App Store — A. C.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'I requested a change, and Jason was super responsive. He quickly implemented it in the next update.', src: 'App Store — P.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is a very valuable tool that will immensely help me accelerate my solo games.', src: 'App Store — M. H.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'A polished, easy‑to‑use app — a great conversion of Tana Pigeon’s toolkit.', src: 'App Store — D. V.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'What can I say… just perfect.', src: 'App Store — S.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'It’s worth its price for every one of its functions.', src: 'App Store — S.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Makes it so easy to play games solo! Can’t recommend it enough.', src: 'App Store — P. R.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'This is my favorite app for playing games 👍👍👍', src: 'App Store — E. T.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: '…brings another order of magnitude ease of use to solo gaming RPGs.', src: 'App Store — T. K.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'It has all the tools I would want… Thank you for not making it a subscription!', src: 'App Store — E. W.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'A great time saver that keeps you engaged in the story rather than bookkeeping.', src: 'App Store — C.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
  { text: 'Do a solo session on a plane! Loved it.', src: 'App Store — C. A.', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },

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

  // Google Play / AppBrain (user-provided)
  { text: 'There is no better way to play RPG solo digitally with the Mythic GME than with this app…', src: 'Google Play — AppBrain user', href: 'https://www.appbrain.com/app/mythic-gme-2e/com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'I love Mythic and mainly bought this to support them… this is the best companion app for a tabletop game that I\'ve ever used.', src: 'Google Play — AppBrain user', href: 'https://www.appbrain.com/app/mythic-gme-2e/com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
  { text: 'It\'s great, I love mythic 2e, but I think the design could make playing a game with nothing but your phone more streamlined.', src: 'Google Play — User review', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
];

export default quotes;
