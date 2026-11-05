import { callNowLabel, callShortLabel, nav, phone } from '../content/site'

export function Header() {
  return (
    <header className="bg-paper">
      <div className="container-site flex min-h-(--nav-h) items-center gap-7">
        <a href="#" className="whitespace-nowrap leading-none text-ink no-underline" aria-label={nav.logo.name}>
          {nav.logo.src ? (
            <img
              src={nav.logo.src}
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

        <ul className="ml-8 hidden gap-5 text-nav font-bold lg:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="no-underline hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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
      </div>
    </header>
  )
}
