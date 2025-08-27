// Billboard carousel logic extracted to a TS module
// Accessible controls, reduced motion respect, and keyboard support.

function initBillboard() {
  const plate = document.querySelector<HTMLElement>('.billboard-plate');
  if (!plate) return;
  const stage = plate.querySelector<HTMLElement>('.bb-stage');
  const imgs = stage ? Array.from(stage.querySelectorAll<HTMLImageElement>('.billboard-img:not(.bb-sizer)')) : [];
  const statusEl = document.getElementById('bb-status');
  const btnPrev = plate.querySelector<HTMLButtonElement>('.bb-prev');
  const btnNext = plate.querySelector<HTMLButtonElement>('.bb-next');
  const btnPause = plate.querySelector<HTMLButtonElement>('.bb-pause');
  const controls = plate.querySelector<HTMLElement>('.bb-controls');

  if (!stage || !imgs.length || !btnPrev || !btnNext || !btnPause || !controls) return;

  let i = 0;
  let paused = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer: number | null = null;

  function setActive(index: number) {
    imgs.forEach((im, idx) => {
      if (idx === index) im.classList.add('is-active');
      else im.classList.remove('is-active');
    });
    if (statusEl) statusEl.textContent = `Slide ${index + 1} of ${imgs.length}`;
  }

  function next() { i = (i + 1) % imgs.length; setActive(i); }
  function prev() { i = (i - 1 + imgs.length) % imgs.length; setActive(i); }

  function stop() { if (timer !== null) { window.clearInterval(timer); timer = null; } }
  function start() { if (prefersReduced || paused) return; stop(); timer = window.setInterval(next, 7000); }

  function togglePause() {
    paused = !paused;
    if (btnPause) {
      btnPause.setAttribute('aria-pressed', String(paused));
      btnPause.setAttribute('aria-label', paused ? 'Play autoplay' : 'Pause autoplay');
      btnPause.textContent = paused ? '▶' : '⏸';
    }
    if (paused) stop(); else start();
  }

  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  btnPause.addEventListener('click', togglePause);

  // Keyboard support on the controls container (focus is on the buttons)
  controls.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  });

  // Pause on hover/focus
  const hoverPause = () => { if (!paused) stop(); };
  const hoverResume = () => { if (!paused) start(); };
  plate.addEventListener('mouseenter', hoverPause);
  plate.addEventListener('mouseleave', hoverResume);
  plate.addEventListener('focusin', hoverPause);
  plate.addEventListener('focusout', hoverResume);

  if (imgs.length) setActive(0);
  if (!prefersReduced) start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBillboard);
} else {
  initBillboard();
}
