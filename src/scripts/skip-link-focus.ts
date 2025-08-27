// Skip link focus management
// Makes the #main region programmatically focusable only when a skip link is used.
// This keeps non-interactive regions out of the tab order while preserving a11y.

function enableSkipLinkFocus() {
  const skipLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a.skip[href^="#"], a[href="#main"].skip'));
  if (!skipLinks.length) return;

  function focusTarget(target: HTMLElement) {
    const prevTabIndex = target.getAttribute('tabindex');
    const needsTabIndex = prevTabIndex === null;
    if (needsTabIndex) target.setAttribute('tabindex', '-1');
    (target as HTMLElement).focus({ preventScroll: false });
    // Clean up on blur to avoid leaving tabindex on non-interactive element
    const onBlur = () => {
      if (needsTabIndex) target.removeAttribute('tabindex');
      target.removeEventListener('blur', onBlur);
    };
    target.addEventListener('blur', onBlur);
  }

  skipLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = (link.getAttribute('href') || '').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      focusTarget(target);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', enableSkipLinkFocus);
} else {
  enableSkipLinkFocus();
}
