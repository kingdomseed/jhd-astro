// Mobile navigation: accessible off-canvas menu with keyboard support
// This module runs on the client. Astro/Vite will transpile TS to JS.

function initMobileNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-mobile-toggle]');
  const nav = document.querySelector<HTMLElement>('[data-mobile-nav]');
  const overlay = document.querySelector<HTMLElement>('[data-mobile-overlay]');
  const closeBtn = document.querySelector<HTMLButtonElement>('[data-mobile-close]');

  if (!toggle || !nav || !overlay) return;

  // Get all focusable elements in the mobile menu
  const getFocusableElements = (): HTMLElement[] => {
    return Array.from(nav.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
  };

  let isOpen = false;
  let lastActiveElement: HTMLElement | null = null;

  const open = () => {
    isOpen = true;
    lastActiveElement = document.activeElement as HTMLElement;

    // Update ARIA states
    toggle.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');

    // Add CSS classes for animation and scroll lock
    document.body.classList.add('mobile-nav-open');
    nav.classList.add('nav--mobile-open');
    overlay.classList.add('mobile-overlay--visible');

    // Focus the first focusable element
    const focusableElements = getFocusableElements();
    focusableElements[0]?.focus();
  };

  const close = () => {
    isOpen = false;

    // Update ARIA states
    toggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');

    // Remove CSS classes (includes scroll lock restoration)
    document.body.classList.remove('mobile-nav-open');
    nav.classList.remove('nav--mobile-open');
    overlay.classList.remove('mobile-overlay--visible');

    // Return focus to toggle button
    if (lastActiveElement) {
      lastActiveElement.focus();
    } else {
      toggle.focus();
    }
  };

  // Toggle menu on button click
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpen) {
      close();
    } else {
      open();
    }
  });

  // Close menu on close button click (if it exists)
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      close();
    });
  }

  // Close menu on overlay click
  overlay.addEventListener('click', close);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;

    // Close on Escape
    if (e.key === 'Escape') {
      close();
      return;
    }

    // Tab trapping
    if (e.key === 'Tab') {
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }
  });

  // Close menu on navigation link click (for better UX)
  nav.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
      close();
    }
  });

  // Close menu on window resize if it becomes desktop size
  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (isOpen && window.innerWidth > 900) {
        close();
      }
    }, 150);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileNavigation);
} else {
  initMobileNavigation();
}