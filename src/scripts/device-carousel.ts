// Device carousel: simple accessible prev/next for phone-shaped screenshots
function initDeviceCarousel(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.device-stage');
  const frames = stage ? Array.from(stage.querySelectorAll<HTMLElement>('.device-frame')) : [];
  const status = root.querySelector<HTMLElement>('.device-status');
  const btnPrev = root.querySelector<HTMLButtonElement>('.dc-prev');
  const btnNext = root.querySelector<HTMLButtonElement>('.dc-next');
  if (!stage || frames.length === 0) return;

  let i = 0;
  const stageEl = stage as HTMLElement;
  const setStageHeight = () => {
    const active = stageEl.querySelector<HTMLElement>('.device-frame.is-active .device-shot');
    if (active) {
      // Use rendered height to adapt to CSS breakpoints
      const h = (active as HTMLElement).clientHeight;
      if (h > 0) stageEl.style.height = h + 'px';
    }
  };

  const setActive = (idx: number) => {
    frames.forEach((f, j) => f.classList.toggle('is-active', j === idx));
    if (status) status.textContent = `Slide ${idx + 1} of ${frames.length}`;
    i = idx;
    setTimeout(setStageHeight, 0);
  };
  const next = () => setActive((i + 1) % frames.length);
  const prev = () => setActive((i - 1 + frames.length) % frames.length);

  if (btnPrev) btnPrev.addEventListener('click', prev);
  if (btnNext) btnNext.addEventListener('click', next);

  root.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  });

  // Basic swipe support (touch/pointer)
  let startX = 0, startY = 0, dragging = false;
  const threshold = 30; // px
  const onStart = (x: number, y: number) => { startX = x; startY = y; dragging = true; };
  const onMove = (x: number, y: number, e: Event) => {
    if (!dragging) return;
    const dx = x - startX; const dy = y - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
      // horizontal intent: prevent page scroll jitter
      e.preventDefault();
    }
  };
  const onEnd = (x: number, y: number) => {
    if (!dragging) return;
    const dx = x - startX; const dy = y - startY;
    dragging = false;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
      if (dx < 0) next(); else prev();
    }
  };

  // Touch
  root.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0]; if (!t) return;
    onStart(t.clientX, t.clientY);
  }, { passive: true });
  root.addEventListener('touchmove', (e) => {
    const t = e.changedTouches[0]; if (!t) return;
    onMove(t.clientX, t.clientY, e);
  }, { passive: false });
  root.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0]; if (!t) return;
    onEnd(t.clientX, t.clientY);
  });

  // Pointer (mouse drag on desktop if desired)
  root.addEventListener('pointerdown', (e) => { onStart(e.clientX, e.clientY); });
  root.addEventListener('pointermove', (e) => { onMove(e.clientX, e.clientY, e); });
  root.addEventListener('pointerup', (e) => { onEnd(e.clientX, e.clientY); });
  root.addEventListener('pointercancel', () => { dragging = false; });

  // Auto-advance with reduced motion respect
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer: number | null = null;
  const stop = () => { if (timer !== null) { window.clearInterval(timer); timer = null; } };
  const start = () => { if (!prefersReduced) { stop(); timer = window.setInterval(next, 6000); } };

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Click to enlarge (lightbox)
  const openLightbox = (src: string, alt: string) => {
    const ov = document.createElement('div');
    ov.className = 'lightbox';
    ov.innerHTML = `<div class="lb-inner"><img src="${src}" alt="${alt}"><button class="lb-close" aria-label="Close">×</button></div>`;
    const closeLb = () => { document.body.classList.remove('lb-open'); ov.remove(); };
    ov.addEventListener('click', (e) => { if (e.target === ov) closeLb(); });
    ov.querySelector('.lb-close')?.addEventListener('click', closeLb);
    document.addEventListener('keydown', function onKey(e) { if (e.key === 'Escape') { closeLb(); document.removeEventListener('keydown', onKey); } });
    document.body.appendChild(ov);
    document.body.classList.add('lb-open');
  };
  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement | null;
    if (t && t.classList.contains('device-shot')) {
      const src = (t as HTMLImageElement).currentSrc || (t as HTMLImageElement).src;
      const alt = (t as HTMLImageElement).alt || '';
      openLightbox(src, alt);
    }
  });

  window.addEventListener('resize', () => setStageHeight());
  setActive(0);
  start();
}

function initAll() {
  document.querySelectorAll<HTMLElement>('.device-carousel').forEach(initDeviceCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
