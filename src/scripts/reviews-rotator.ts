// Reviews rotator logic extracted to a TS module
// Cross-fade between quotes with accessible controls and reduced-motion respect.

function initReviewsRotator() {
  const container = document.querySelector<HTMLElement>('.reviews-rotator');
  if (!container) return;

  const stage = container.querySelector<HTMLElement>('.rev-stage');
  const statusEl = document.getElementById('rev-status');
  const btnPrev = container.querySelector<HTMLButtonElement>('.rev-prev');
  const btnNext = container.querySelector<HTMLButtonElement>('.rev-next');
  const btnPause = container.querySelector<HTMLButtonElement>('.rev-pause');
  const controls = container.querySelector<HTMLElement>('.rev-controls');
  if (!stage || !btnPrev || !btnNext || !btnPause || !controls) return;
  const stageEl = stage as HTMLElement;
  const btnPrevEl = btnPrev as HTMLButtonElement;
  const btnNextEl = btnNext as HTMLButtonElement;
  const btnPauseEl = btnPause as HTMLButtonElement;
  const controlsEl = controls as HTMLElement;

  // Use existing <p id="quote"> as one buffer; create a second for cross-fade
  let qA = stage.querySelector<HTMLParagraphElement>('#quote');
  if (!qA) {
    qA = document.createElement('p');
    qA.id = 'quote';
    stage.appendChild(qA);
  }
  qA.classList.add('rev-quote');
  const qB = document.createElement('p');
  qB.className = 'rev-quote';
  stageEl.appendChild(qB);

  type Quote = { text: string; src: string; href: string; icon: string };
  const quotes: Quote[] = [
    // Verified sources
    {
      text: 'The app brings another order of magnitude ease of use to solo gaming RPGs… I find myself focusing more on the unfolding story than scene and game mechanics.',
      src: 'App Store reviewer',
      href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147',
      icon: 'fa-apple',
    },
    {
      text: 'If you use the Second Edition of the Mythic Gamemaster Emulator, this app comes in very handy.',
      src: 'App Store reviewer',
      href: 'https://apps.apple.com/us/app/mythic-gme-mobile/id6726999147',
      icon: 'fa-apple',
    },
    {
      text: 'The app is looking better than ever :)',
      src: 'r/mythic_gme',
      href: 'https://www.reddit.com/r/mythic_gme/comments/1gwr9ho/the_mythic_gme_app_is_back/',
      icon: 'fa-reddit',
    },
  ];

  if (!quotes.length) return;

  let i = 0;
  let paused = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer: number | null = null;

  function setStatus(index: number) {
    if (statusEl) statusEl.textContent = `Quote ${index + 1} of ${quotes.length}`;
  }

  function renderHTML(q: Quote) {
    return `<i class="fa-brands ${q.icon}" aria-hidden="true"></i> “<a href="${q.href}" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline dotted">${q.text}</a>” — <span style="opacity:.8">${q.src}</span>`;
  }

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }
  function start() {
    if (prefersReduced || paused) return;
    stop();
    timer = window.setInterval(next, 8000);
  }

  function crossFade(toIndex: number) {
    const active = qA!.classList.contains('is-active') ? qA! : (qB as HTMLParagraphElement);
    const other = active === qA ? qB : qA!;
    other.innerHTML = renderHTML(quotes[toIndex]);
    // Ensure stage has a stable height based on incoming content
    stageEl.style.height = `${other.offsetHeight}px`;
    requestAnimationFrame(() => {
      active.classList.remove('is-active');
      other.classList.add('is-active');
      i = toIndex;
      setStatus(i);
    });
  }

  function next() { crossFade((i + 1) % quotes.length); }
  function prev() { crossFade((i - 1 + quotes.length) % quotes.length); }

  function togglePause() {
    paused = !paused;
    btnPauseEl.setAttribute('aria-pressed', String(paused));
    btnPauseEl.setAttribute('aria-label', paused ? 'Play autoplay' : 'Pause autoplay');
    btnPauseEl.textContent = paused ? '▶' : '⏸';
    if (paused) stop(); else start();
  }

  btnPrevEl.addEventListener('click', () => { stop(); prev(); start(); });
  btnNextEl.addEventListener('click', () => { stop(); next(); start(); });
  btnPauseEl.addEventListener('click', togglePause);
  controlsEl.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  });

  // Pause on hover/focus
  const hoverPause = () => { if (!paused) stop(); };
  const hoverResume = () => { if (!paused) start(); };
  container.addEventListener('mouseenter', hoverPause);
  container.addEventListener('mouseleave', hoverResume);
  container.addEventListener('focusin', hoverPause);
  container.addEventListener('focusout', hoverResume);

  // Initial render
  qA!.innerHTML = renderHTML(quotes[i]);
  qA!.classList.add('is-active');
  // Set initial stage height to avoid layout jump
  stageEl.style.height = `${qA!.offsetHeight}px`;
  setStatus(i);
  if (!prefersReduced) start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsRotator);
} else {
  initReviewsRotator();
}
