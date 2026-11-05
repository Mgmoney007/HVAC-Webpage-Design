import { callNowLabel, hero, phone } from '../content/site'
import { Icon } from './Icon'
import { Photo } from './Photo'

export function Hero() {
  return (
    <section className="relative bg-brand text-paper">
      <div className="grid md:min-h-(--hero-min-h) md:grid-cols-2">
        <div className="pl-container pt-20 pr-6 pb-22 max-md:px-6 max-md:py-9">
          <div className="lg:pl-(--hero-inset)">
          <h1 className="m-0 max-w-(--hero-h1-max) text-h1 leading-tight font-bold">{hero.title}</h1>
          <ul className="my-5 grid list-none gap-2 p-0 text-lead">
            {hero.ticks.map((t) => (
              <li key={t.label} className="flex items-center gap-4">
                <Icon name={t.icon} />
                {t.label}
              </li>
            ))}
          </ul>
          <p className="mt-8 mb-4 text-lead">{hero.callLine}</p>
          <a className="btn btn-primary" href={phone.href}>
            {callNowLabel}
          </a>
          </div>
        </div>
        <Photo
          {...hero.photo}
          placeholder={hero.photoPlaceholder}
          eager
          className="size-full min-h-(--hero-min-h)"
        />
      </div>
    </section>
  )
}
