// Mobile nav toggle: slide-out panel with ARIA updates
// Minimal, accessible behavior to match CSS off-canvas nav

function initHeaderMobile() {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;
  const closeBtn = nav.querySelector<HTMLButtonElement>('.nav-close');

  // Lazy-created overlay to capture outside clicks
  let overlay: HTMLDivElement | null = null;
  const ensureOverlay = () => {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      overlay.addEventListener('click', () => close());
    }
    return overlay;
  };

  const open = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('has-nav-open');
    const ov = ensureOverlay();
    if (!ov.isConnected) document.body.appendChild(ov);
  };
  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('has-nav-open');
    if (overlay && overlay.isConnected) overlay.remove();
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
    close();
    toggle.focus();
  });

  // Outside clicks are handled by overlay now (added on open)

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
