// Header download dropdown: accessible toggle with keyboard support

let lastInput: 'keyboard' | 'pointer' = 'pointer';

function markKeyboard() { lastInput = 'keyboard'; }
function markPointer() { lastInput = 'pointer'; }

function closeMenu(btn: HTMLButtonElement, menu: HTMLElement, restoreFocus: boolean) {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  if (restoreFocus) btn.focus();
}

function navigateItems(items: HTMLAnchorElement[], direction: 1 | -1) {
  const active = document.activeElement as Element | null;
  const i = active ? items.indexOf(active as HTMLAnchorElement) : -1;
  const next = direction === 1
    ? (items[(i + 1) % items.length] || items[0])
    : (items[i - 1] || items[items.length - 1]);
  next?.focus();
}

function initHeaderDropdown() {
  const btn = document.querySelector<HTMLButtonElement>('.cta-download');
  const menu = document.getElementById('downloadMenu');
  if (!btn || !menu) return;

  const items = Array.from(menu.querySelectorAll<HTMLAnchorElement>('a'));

  document.addEventListener('pointerdown', markPointer, true);

  btn.addEventListener('click', (e) => {
    if (e.detail === 0) markKeyboard();
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen && lastInput === 'keyboard') {
      items[0]?.focus();
    } else if (!isOpen && lastInput === 'keyboard') {
      btn.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      markKeyboard();
      closeMenu(btn, menu, true);
      return;
    }
    if (['Tab', 'Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
      markKeyboard();
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node | null;
    if (target && !menu.contains(target) && !btn.contains(target)) {
      closeMenu(btn, menu, false);
    }
  });

  menu.addEventListener('keydown', (e) => {
    markKeyboard();
    if (e.key === 'ArrowDown') { e.preventDefault(); navigateItems(items, 1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); navigateItems(items, -1); }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderDropdown);
} else {
  initHeaderDropdown();
}
