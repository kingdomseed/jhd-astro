// Billboard carousel — delegates core logic to shared carousel utility.
import { createCarousel, type CarouselHandle } from './carousel';

function togglePause(carousel: CarouselHandle, btn: HTMLButtonElement) {
  if (carousel.isPaused()) {
    carousel.resume();
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Pause autoplay');
    btn.textContent = '\u23F8';
  } else {
    carousel.pause();
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'Play autoplay');
    btn.textContent = '\u25B6';
  }
}

function activateSlide(imgs: HTMLImageElement[], statusEl: HTMLElement | null, index: number) {
  imgs.forEach((im, idx) => im.classList.toggle('is-active', idx === index));
  if (statusEl) statusEl.textContent = `Slide ${index + 1} of ${imgs.length}`;
}

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
    onActivate: (index) => activateSlide(imgs, statusEl, index),
    intervalMs: 10000,
    pauseTargets: [plate],
    keyboardTarget: controls,
  });

  btnPrev.addEventListener('click', () => carousel.prev());
  btnNext.addEventListener('click', () => carousel.next());
  btnPause.addEventListener('click', () => togglePause(carousel, btnPause));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBillboard);
} else {
  initBillboard();
}
