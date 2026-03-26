// Billboard carousel — delegates core logic to shared carousel utility.
import { createCarousel } from './carousel';

function initBillboard() {
  const plate = document.querySelector<HTMLElement>('.billboard-plate');
  if (!plate) return;
  const stage = plate.querySelector<HTMLElement>('.bb-stage');
  const imgs = stage
    ? Array.from(stage.querySelectorAll<HTMLImageElement>('.billboard-img:not(.bb-sizer)'))
    : [];
  const statusEl = document.getElementById('bb-status');
  const btnPrev = plate.querySelector<HTMLButtonElement>('.bb-prev');
  const btnNext = plate.querySelector<HTMLButtonElement>('.bb-next');
  const btnPause = plate.querySelector<HTMLButtonElement>('.bb-pause');
  const controls = plate.querySelector<HTMLElement>('.bb-controls');

  if (!stage || !imgs.length || !btnPrev || !btnNext || !btnPause || !controls) return;

  const carousel = createCarousel({
    itemCount: imgs.length,
    onActivate: (index) => {
      imgs.forEach((im, idx) => im.classList.toggle('is-active', idx === index));
      if (statusEl) statusEl.textContent = `Slide ${index + 1} of ${imgs.length}`;
    },
    intervalMs: 10000,
    pauseTargets: [plate],
    keyboardTarget: controls,
  });

  btnPrev.addEventListener('click', () => carousel.prev());
  btnNext.addEventListener('click', () => carousel.next());
  btnPause.addEventListener('click', () => {
    if (carousel.isPaused()) {
      carousel.resume();
      btnPause.setAttribute('aria-pressed', 'false');
      btnPause.setAttribute('aria-label', 'Pause autoplay');
      btnPause.textContent = '\u23F8';
    } else {
      carousel.pause();
      btnPause.setAttribute('aria-pressed', 'true');
      btnPause.setAttribute('aria-label', 'Play autoplay');
      btnPause.textContent = '\u25B6';
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBillboard);
} else {
  initBillboard();
}
