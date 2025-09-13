// Sticky header: adds a class once the page is scrolled
// Keeps JS minimal and guards against nulls

function initHeaderSticky() {
  const header = document.querySelector<HTMLElement>('header.header-nav');
  if (!header) return;

  let ticking = false;
  const onScroll = () => {
    const scrolled = window.scrollY > 4; // tiny threshold to avoid flicker
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', scrolled);
        ticking = false;
      });
      ticking = true;
    }
  };

  // Initial state + listener
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderSticky);
} else {
  initHeaderSticky();
}

