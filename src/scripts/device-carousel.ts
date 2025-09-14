// Device carousel: simple accessible prev/next for phone-shaped screenshots
function initDeviceCarousel(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('.device-stage');
  const frames = stage ? Array.from(stage.querySelectorAll<HTMLElement>('.device-frame')) : [];
  const status = root.querySelector<HTMLElement>('.device-status');
  const btnPrev = root.querySelector<HTMLButtonElement>('.dc-prev');
  const btnNext = root.querySelector<HTMLButtonElement>('.dc-next');
  if (!stage || frames.length === 0 || !btnPrev || !btnNext) return;

  let i = 0;
  const setActive = (idx: number) => {
    frames.forEach((f, j) => f.classList.toggle('is-active', j === idx));
    if (status) status.textContent = `Slide ${idx + 1} of ${frames.length}`;
    i = idx;
  };
  const next = () => setActive((i + 1) % frames.length);
  const prev = () => setActive((i - 1 + frames.length) % frames.length);

  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  root.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  });

  setActive(0);
}

function initAll() {
  document.querySelectorAll<HTMLElement>('.device-carousel').forEach(initDeviceCarousel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

