// Shared carousel logic: index tracking, navigation, auto-advance, pause/resume, a11y.
// Each consumer configures behavior via CarouselConfig; the returned handle
// exposes imperative controls for consumer-specific features (swipe, crossfade, lightbox).

export interface CarouselConfig {
  /** Total number of items in the carousel */
  itemCount: number;
  /** Called when active index changes — consumer updates DOM here */
  onActivate: (index: number) => void;
  /** Auto-advance interval in ms (0 to disable) */
  intervalMs?: number;
  /** Element(s) whose hover/focus pauses auto-advance */
  pauseTargets?: HTMLElement[];
  /** Element to attach keyboard listeners to */
  keyboardTarget?: HTMLElement;
  /** Start index (default 0) */
  startIndex?: number;
}

export interface CarouselHandle {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
  isPaused: () => boolean;
  currentIndex: () => number;
  destroy: () => void;
}

export function createCarousel(config: CarouselConfig): CarouselHandle {
  const {
    itemCount,
    onActivate,
    intervalMs = 0,
    pauseTargets = [],
    keyboardTarget,
    startIndex = 0,
  } = config;

  let index = startIndex;
  let paused = false;
  let hoverPaused = false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer: number | null = null;

  function stopTimer() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    if (prefersReduced || paused || hoverPaused || intervalMs <= 0) return;
    stopTimer();
    timer = window.setInterval(next, intervalMs);
  }

  function goTo(newIndex: number) {
    index = ((newIndex % itemCount) + itemCount) % itemCount;
    onActivate(index);
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function pause() { paused = true; stopTimer(); }
  function resume() { paused = false; startTimer(); }

  const onHoverPause = () => { hoverPaused = true; stopTimer(); };
  const onHoverResume = () => { hoverPaused = false; startTimer(); };

  for (const el of pauseTargets) {
    el.addEventListener('mouseenter', onHoverPause);
    el.addEventListener('mouseleave', onHoverResume);
    el.addEventListener('focusin', onHoverPause);
    el.addEventListener('focusout', onHoverResume);
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };
  if (keyboardTarget) {
    keyboardTarget.addEventListener('keydown', onKeydown);
  }

  onActivate(index);
  startTimer();

  function destroy() {
    stopTimer();
    for (const el of pauseTargets) {
      el.removeEventListener('mouseenter', onHoverPause);
      el.removeEventListener('mouseleave', onHoverResume);
      el.removeEventListener('focusin', onHoverPause);
      el.removeEventListener('focusout', onHoverResume);
    }
    if (keyboardTarget) {
      keyboardTarget.removeEventListener('keydown', onKeydown);
    }
  }

  return {
    next, prev, goTo, pause, resume, destroy,
    isPaused: () => paused,
    currentIndex: () => index,
  };
}
