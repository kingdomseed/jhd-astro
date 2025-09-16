// Header download dropdown: accessible toggle with keyboard support
// This module runs on the client. Astro/Vite will transpile TS to JS.

function initHeaderDropdown() {
  const btn = document.querySelector<HTMLButtonElement>('.cta-download');
  const menu = document.getElementById('downloadMenu');
  if (!btn || !menu) return;

  const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>('a'));

  let lastInput: 'keyboard' | 'pointer' = 'pointer';
  const markKeyboard = () => {
    lastInput = 'keyboard';
  };
  const markPointer = () => {
    lastInput = 'pointer';
  };

  const close = (restoreFocus = lastInput === 'keyboard') => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (restoreFocus) btn.focus();
  };

  document.addEventListener('pointerdown', markPointer, true);

  btn.addEventListener('click', (e) => {
    if (e.detail === 0) markKeyboard();
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      if (lastInput === 'keyboard') {
        items[0]?.focus();
      }
    } else if (lastInput === 'keyboard') {
      btn.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Escape') {
      markKeyboard();
      close(true);
      return;
    }
    if (key === 'Tab' || key === 'Enter' || key === ' ' || key === 'ArrowDown' || key === 'ArrowUp') {
      markKeyboard();
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node | null;
    if (target && !menu.contains(target) && !btn.contains(target)) close();
  });

  menu.addEventListener('keydown', (e) => {
    markKeyboard();
    const active = document.activeElement as Element | null;
    const i = active ? items.indexOf(active as HTMLAnchorElement) : -1;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      (items[(i + 1) % items.length] || items[0])?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      (items[i - 1] || items[items.length - 1])?.focus();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderDropdown);
} else {
  initHeaderDropdown();
}
