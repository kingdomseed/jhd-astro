// Mobile nav toggle: slide-out panel with ARIA updates
// Minimal, accessible behavior to match CSS off-canvas nav

function initHeaderMobile() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;
  const closeBtn = nav.querySelector<HTMLButtonElement>('.nav-close');

  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  };
  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };
  const isOpen = () => nav.classList.contains('is-open');

  // Toggle button
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    isOpen() ? close() : open();
  });

  // Close button inside the panel
  closeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpen()) {
      close();
      toggle.focus();
    }
  });

  // Close when clicking outside the nav when open
  document.addEventListener('click', (e) => {
    const t = e.target as Node | null;
    if (!t) return;
    if (isOpen() && !nav.contains(t) && !toggle.contains(t)) {
      close();
    }
  });

  // Close on Escape and return focus to the toggle
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      e.preventDefault();
      close();
      toggle.focus();
    }
  });

  // Close on route selection
  nav.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest('a')) {
      close();
    }
  });

  // Ensure consistent state on resize: close when leaving mobile breakpoint
  const mql = window.matchMedia('(max-width: 900px)');
  const handleBreakpoint = () => {
    if (!mql.matches && isOpen()) close();
  };
  mql.addEventListener ? mql.addEventListener('change', handleBreakpoint) : mql.addListener(handleBreakpoint as any);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderMobile);
} else {
  initHeaderMobile();
}
