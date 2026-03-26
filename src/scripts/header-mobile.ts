// Mobile navigation: accessible off-canvas menu with keyboard support

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(
    'a, button, [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
}

function setAriaState(toggle: HTMLButtonElement, nav: HTMLElement, overlay: HTMLElement, open: boolean) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.setAttribute('aria-hidden', String(!open));
  overlay.setAttribute('aria-hidden', String(!open));
}

function setVisualState(nav: HTMLElement, overlay: HTMLElement, open: boolean) {
  document.body.classList.toggle('mobile-nav-open', open);
  nav.classList.toggle('nav--mobile-open', open);
  overlay.classList.toggle('mobile-overlay--visible', open);
}

function trapFocus(e: KeyboardEvent, container: HTMLElement) {
  if (e.key !== 'Tab') return;
  const focusable = getFocusableElements(container);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
  } else {
    if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }
}

function initMobileNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-mobile-toggle]');
  const nav = document.querySelector<HTMLElement>('[data-mobile-nav]');
  const overlay = document.querySelector<HTMLElement>('[data-mobile-overlay]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-mobile-close]');

  if (!toggle || !nav || !overlay) return;

  let isOpen = false;
  let lastActiveElement: HTMLElement | null = null;

  const open = () => {
    isOpen = true;
    lastActiveElement = document.activeElement as HTMLElement;
    setAriaState(toggle, nav, overlay, true);
    setVisualState(nav, overlay, true);
    getFocusableElements(nav)[0]?.focus();
  };

  const close = () => {
    isOpen = false;
    setAriaState(toggle, nav, overlay, false);
    setVisualState(nav, overlay, false);
    (lastActiveElement ?? toggle).focus();
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpen) close(); else open();
  });

  if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); close(); });
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') { close(); return; }
    trapFocus(e, nav);
  });

  nav.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) close();
  });

  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (isOpen && window.innerWidth > 900) close(); }, 150);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileNavigation);
} else {
  initMobileNavigation();
}
