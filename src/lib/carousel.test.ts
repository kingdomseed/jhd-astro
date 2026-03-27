import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createCarousel } from './carousel';

beforeEach(() => {
  vi.stubGlobal('window', {
    matchMedia: vi.fn().mockReturnValue({ matches: false }),
    setInterval: vi.fn().mockReturnValue(1),
    clearInterval: vi.fn(),
  });
});

describe('createCarousel', () => {
  it('starts at index 0 by default', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 5, onActivate });
    expect(handle.currentIndex()).toBe(0);
    expect(onActivate).toHaveBeenCalledWith(0);
  });

  it('starts at specified index', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 5, onActivate, startIndex: 3 });
    expect(handle.currentIndex()).toBe(3);
    expect(onActivate).toHaveBeenCalledWith(3);
  });

  it('advances to next item', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 3, onActivate });
    handle.next();
    expect(handle.currentIndex()).toBe(1);
    expect(onActivate).toHaveBeenCalledWith(1);
  });

  it('wraps around at the end', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 3, onActivate, startIndex: 2 });
    handle.next();
    expect(handle.currentIndex()).toBe(0);
  });

  it('wraps around backwards', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 3, onActivate, startIndex: 0 });
    handle.prev();
    expect(handle.currentIndex()).toBe(2);
  });

  it('goes to a specific index', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 5, onActivate });
    handle.goTo(4);
    expect(handle.currentIndex()).toBe(4);
  });

  it('pauses and resumes', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 3, onActivate });
    expect(handle.isPaused()).toBe(false);
    handle.pause();
    expect(handle.isPaused()).toBe(true);
    handle.resume();
    expect(handle.isPaused()).toBe(false);
  });

  it('starts auto-advance timer when intervalMs > 0', () => {
    const onActivate = vi.fn();
    createCarousel({ itemCount: 3, onActivate, intervalMs: 5000 });
    expect(window.setInterval).toHaveBeenCalledWith(expect.any(Function), 5000);
  });

  it('does not start timer when intervalMs is 0', () => {
    const onActivate = vi.fn();
    createCarousel({ itemCount: 3, onActivate, intervalMs: 0 });
    expect(window.setInterval).not.toHaveBeenCalled();
  });

  it('cleans up on destroy', () => {
    const onActivate = vi.fn();
    const handle = createCarousel({ itemCount: 3, onActivate, intervalMs: 5000 });
    handle.destroy();
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it('skips timer when prefers-reduced-motion', () => {
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockReturnValue({ matches: true }),
      setInterval: vi.fn().mockReturnValue(1),
      clearInterval: vi.fn(),
    });
    const onActivate = vi.fn();
    createCarousel({ itemCount: 3, onActivate, intervalMs: 5000 });
    expect(window.setInterval).not.toHaveBeenCalled();
  });
});
