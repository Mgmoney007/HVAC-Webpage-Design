import { useEffect, useRef, useState } from 'react'
import { callNowLabel, callShortLabel, nav, phone } from '../content/site'
import { Icon } from './Icon'

/**
 * Sticky nav. The promo bar above it scrolls away; once the header reaches the top it
 * sticks and picks up a soft shadow. Below the desktop breakpoint the links move into a
 * menu panel opened by the hamburger button.
 */
export function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const sentinel = useRef<HTMLDivElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  // Shadow on once the zero-height marker above the header has scrolled out of view
  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Close the menu on Escape, and when the viewport grows to desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1025px)')
    const onWide = () => desktop.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onWide)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <div ref={sentinel} aria-hidden="true" />
      <header
        className={`sticky top-0 z-(--z-header) bg-paper transition-shadow duration-(--dur) ${
          stuck || open ? 'shadow-stuck' : ''
        }`}
      >
        <div className="container-site flex min-h-(--nav-h) items-center gap-7 max-md:gap-3">
          <a href="#" className="rounded-field whitespace-nowrap leading-none text-ink no-underline" aria-label={nav.logo.name}>
            {nav.logo.src ? (
              <img
                src={nav.logo.src}
                srcSet={nav.logo.srcSet}
                sizes={nav.logo.sizes}
                alt={nav.logo.name}
                width={480}
                height={222}
                className="block h-(--logo-h) w-auto"
              />
            ) : (
              <>
                <span className="text-logo font-(--fw-black) tracking-(--ls-logo)">{nav.logo.name}</span>
                <small className="mt-1 block text-micro font-medium tracking-(--ls-tagline) max-md:hidden">
                  {nav.logo.tagline}
                </small>
              </>
            )}
          </a>

          <nav aria-label={nav.navLabel} className="ml-8 hidden lg:block">
            <ul className="m-0 flex list-none gap-5 p-0 text-nav font-bold">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link rounded-field no-underline hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex flex-wrap items-center justify-end gap-x-6 gap-y-1 max-md:gap-x-3">
            <a className="btn btn-secondary max-md:hidden" href={nav.requestHref}>
              {nav.requestLabel}
            </a>
            <a className="btn btn-primary whitespace-nowrap" href={phone.href} aria-label={callNowLabel}>
              <span className="max-md:hidden">{callNowLabel}</span>
              <span className="md:hidden">{callShortLabel}</span>
            </a>
            {nav.phoneNote && (
              <span className="basis-full text-right text-note text-muted">{nav.phoneNote}</span>
            )}
          </div>

          <button
            ref={toggle}
            type="button"
            className="-mr-2 inline-flex size-tap flex-none cursor-pointer items-center justify-center rounded-field border-0 bg-transparent text-ink transition-colors duration-(--dur-fast) hover:bg-ice active:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeLabel : nav.menuLabel}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-(--icon-md)" />
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label={nav.navLabel}
            className="absolute inset-x-0 top-full border-t border-rule bg-paper shadow-stuck lg:hidden"
          >
            <ul className="container-site m-0 grid list-none gap-0 py-2 text-nav font-bold">
              {nav.links.map((l) => (
                <li key={l.href} className="border-b border-rule last:border-b-0">
                  <a
                    href={l.href}
                    onClick={close}
                    className="link flex min-h-tap items-center rounded-field px-2 no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-site grid gap-3 pb-5 md:grid-cols-2">
              <a className="btn btn-secondary" href={nav.requestHref} onClick={close}>
                {nav.requestLabel}
              </a>
              <a className="btn btn-primary" href={phone.href} onClick={close}>
                {callNowLabel}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
