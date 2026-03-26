// Skip link focus management
// Makes the #main region programmatically focusable only when a skip link is used.
// This keeps non-interactive regions out of the tab order while preserving a11y.

function focusTarget(target: HTMLElement) {
  const prevTabIndex = target.getAttribute('tabindex');
  const needsTabIndex = prevTabIndex === null;
  if (needsTabIndex) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: false });
  const onBlur = () => {
    if (needsTabIndex) target.removeAttribute('tabindex');
    target.removeEventListener('blur', onBlur);
  };
  target.addEventListener('blur', onBlur);
}

function handleSkipClick(e: Event, link: HTMLAnchorElement) {
  const id = (link.getAttribute('href') || '').slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  focusTarget(target);
}

function enableSkipLinkFocus() {
  const skipLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a.skip[href^="#"], a[href="#main"].skip'));
  skipLinks.forEach((link) => {
    link.addEventListener('click', (e) => handleSkipClick(e, link));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enableSkipLinkFocus);
} else {
  enableSkipLinkFocus();
}
