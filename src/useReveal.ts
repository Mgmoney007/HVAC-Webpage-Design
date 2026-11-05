import { useEffect } from 'react'

/**
 * Fades [data-reveal] blocks up into place the first time they enter the viewport.
 * Does nothing for users who prefer reduced motion, or without IntersectionObserver;
 * the hiding CSS only applies once html.reveal-ready is set here, so content is never
 * stuck invisible.
 */
export function useReveal() {
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm || !('IntersectionObserver' in window)) return

    const els = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-revealed')
          io.unobserve(e.target) // once only
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    // anything already on screen at load shows immediately, without animating
    const vh = window.innerHeight
    for (const el of els) {
      if (el.getBoundingClientRect().top < vh) el.classList.add('is-revealed')
      else io.observe(el)
    }
    document.documentElement.classList.add('reveal-ready')
    return () => io.disconnect()
  }, [])
}
