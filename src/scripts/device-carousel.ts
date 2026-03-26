// Device carousel — delegates core logic to shared carousel utility.
// Retains device-specific features: height adaptation, swipe, lightbox.
import { createCarousel } from './carousel';

function initDeviceCarousel(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.device-stage');
  const frames = stage
    ? Array.from(stage.querySelectorAll<HTMLElement>('.device-frame'))
    : [];
  const status = root.querySelector<HTMLElement>('.device-status');
  if (!stage || frames.length === 0) return;

  const stageEl = stage as HTMLElement;
  const setStageHeight = () => {
    const active = stageEl.querySelector<HTMLElement>('.device-frame.is-active .device-shot');
    if (active) {
      const h = active.clientHeight;
      if (h > 0) stageEl.style.height = h + 'px';
    }
  };

  const carousel = createCarousel({
    itemCount: frames.length,
    onActivate: (index) => {
      frames.forEach((f, j) => f.classList.toggle('is-active', j === index));
      if (status) status.textContent = `Slide ${index + 1} of ${frames.length}`;
      setTimeout(setStageHeight, 0);
    },
    intervalMs: 6000,
    pauseTargets: [root],
    keyboardTarget: root,
  });

  const btnPrev = root.querySelector<HTMLButtonElement>('.dc-prev');
  const btnNext = root.querySelector<HTMLButtonElement>('.dc-next');
  if (btnPrev) btnPrev.addEventListener('click', () => carousel.prev());
  if (btnNext) btnNext.addEventListener('click', () => carousel.next());

  // Swipe support (touch/pointer)
  let startX = 0;
  let startY = 0;
  let dragging = false;
  const threshold = 30;

  const onStart = (x: number, y: number) => { startX = x; startY = y; dragging = true; };
  const onMove = (x: number, y: number, e: Event) => {
    if (!dragging) return;
    if (Math.abs(x - startX) > Math.abs(y - startY) && Math.abs(x - startX) > 6) e.preventDefault();
  };
  const onEnd = (x: number) => {
    if (!dragging) return;
    const dx = x - startX;
    dragging = false;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) carousel.next(); else carousel.prev();
    }
  };

  root.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; if (t) onStart(t.clientX, t.clientY); }, { passive: true });
  root.addEventListener('touchmove', (e) => { const t = e.changedTouches[0]; if (t) onMove(t.clientX, t.clientY, e); }, { passive: false });
  root.addEventListener('touchend', (e) => { const t = e.changedTouches[0]; if (t) onEnd(t.clientX); });
  root.addEventListener('pointerdown', (e) => onStart(e.clientX, e.clientY));
  root.addEventListener('pointermove', (e) => onMove(e.clientX, e.clientY, e));
  root.addEventListener('pointerup', (e) => onEnd(e.clientX));
  root.addEventListener('pointercancel', () => { dragging = false; });

  // Lightbox
  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    if (t && t.classList.contains('device-shot')) {
      const imgEl = t as HTMLImageElement;
      openLightbox(imgEl.currentSrc || imgEl.src, imgEl.alt || '');
    }
  });

  window.addEventListener('resize', () => setStageHeight());
}

function openLightbox(src: string, alt: string) {
  const ov = document.createElement('div');
  ov.className = 'lightbox';

  const inner = document.createElement('div');
  inner.className = 'lb-inner';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  inner.appendChild(img);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lb-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '\u00d7';
  inner.appendChild(closeBtn);

  ov.appendChild(inner);

  const closeLb = () => { document.body.classList.remove('lb-open'); ov.remove(); };
  ov.addEventListener('click', (e) => { if (e.target === ov) closeLb(); });
  closeBtn.addEventListener('click', closeLb);
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') { closeLb(); document.removeEventListener('keydown', onKey); }
  });
  document.body.appendChild(ov);
  document.body.classList.add('lb-open');
}

function initAll() {
  document.querySelectorAll<HTMLElement>('.device-carousel').forEach(initDeviceCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
