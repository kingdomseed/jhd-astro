// Reviews rotator logic extracted to a TS module
// Cross-fade between quotes with accessible controls and reduced-motion respect.
import quotesData from './reviews-data.ts';

function initReviewsRotator() {
  const container = document.querySelector<HTMLElement>('.reviews-rotator');
  if (!container) return;

  const stage = container.querySelector<HTMLElement>('.rev-stage');
  const statusEl = document.getElementById('rev-status');
  if (!stage) return;
  const stageEl = stage as HTMLElement;

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
  // Shuffle helper (Fisher–Yates)
  function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const MAX_QUOTES = 20; // target a readable set per session
  const quotes: Quote[] = shuffle([...quotesData as Quote[]]).slice(0, Math.min(MAX_QUOTES, (quotesData as Quote[]).length));

  if (!quotes.length) return;

  let i = Math.floor(Math.random() * quotes.length);
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

  // No visible controls; autoplay only with hover/focus pause

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
