// Reviews rotator logic extracted to a TS module
// Cycles through quotes with accessible controls and reduced-motion respect.

function initReviewsRotator() {
  const container = document.querySelector<HTMLElement>('.reviews-rotator');
  if (!container) return;

  const pEl = document.getElementById('quote');
  const prev = container.querySelector<HTMLButtonElement>('.rev-prev');
  const next = container.querySelector<HTMLButtonElement>('.rev-next');
  if (!pEl || !prev || !next) return;
  const p = pEl as HTMLElement; // narrowed non-null for use below

  const quotes: Array<{ text: string; src: string; href: string; icon: string }> = [
    { text: 'Another order of magnitude ease of use for solo RPGs.', src: 'App Store reviewer', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
    { text: 'I focus more on the unfolding story than the mechanics.', src: 'App Store reviewer', href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147', icon: 'fa-apple' },
    { text: "It's great, I love Mythic 2e.", src: 'Google Play reviewer', href: 'https://play.google.com/store/apps/details?id=com.jasonholtdigital.mythicgme2e', icon: 'fa-google-play' },
    { text: 'Very happy with my purchase!', src: 'itch.io player', href: 'https://jasonholtdigital.itch.io/mythic-gme-digital', icon: 'fa-itch-io' },
    { text: 'The Mythic app is back—better than ever.', src: 'r/mythic_gme', href: 'https://www.reddit.com/r/mythic_gme/comments/1gwr9ho/the_mythic_gme_app_is_back/', icon: 'fa-reddit' },
  ];

  if (!quotes.length) return;

  let i = 0;
  let id: number | null = null;
  let paused = false;

  function render() {
    const q = quotes[i % quotes.length];
    const quoteElement = p; // narrowed non-null for use below
    quoteElement.innerHTML = `<i class="fa-brands ${q.icon}" aria-hidden="true"></i> “<a href="${q.href}" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline dotted">${q.text}</a>” — <span style="opacity:.8">${q.src}</span>`;
  }
  function show() { render(); i++; }
  function start() { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; id = window.setInterval(show, 5000); }
  function stop() { if (id) window.clearInterval(id); id = null; }

  prev.addEventListener('click', () => { stop(); i = (i - 1 + quotes.length * 100) % quotes.length; render(); start(); });
  next.addEventListener('click', () => { stop(); show(); start(); });
  p.addEventListener('mouseenter', () => { paused = true; stop(); });
  p.addEventListener('mouseleave', () => { if (paused) { paused = false; start(); } });

  render();
  start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsRotator);
} else {
  initReviewsRotator();
}
