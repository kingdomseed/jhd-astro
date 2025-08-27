// Header download dropdown: accessible toggle with keyboard support
// This module runs on the client. Astro/Vite will transpile TS to JS.

function initHeaderDropdown() {
  const btn = document.querySelector<HTMLButtonElement>('.cta-download');
  const menu = document.getElementById('downloadMenu');
  if (!btn || !menu) return;

  const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>('a'));

  const close = () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  };
  const open = () => {
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    items[0]?.focus();
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) items[0]?.focus();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node | null;
    if (target && !menu.contains(target) && !btn.contains(target)) close();
  });

  menu.addEventListener('keydown', (e) => {
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
