import { areas } from '../content/site'
import { Icon } from './Icon'
import { Photo } from './Photo'

export function ServiceAreas() {
  return (
    <section id={areas.id} className="py-section-lg">
      <div data-reveal className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] max-lg:gap-8">
        <div>
          <h2 className="m-0 mb-6 text-h2 leading-tight font-bold">{areas.title}</h2>
          <Photo
            {...areas.map}
            placeholder={areas.mapPlaceholder}
            className="h-(--map-h) w-full max-w-(--map-max) rounded-box"
          />
        </div>
        <div>
          {areas.counties.map((c) => (
            <details key={c.name} className="accordion group border-b border-rule first:border-t">
              {/* padding sits on the summary so the whole row is the tap target */}
              <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between rounded-field px-2.5 py-4 text-h3 font-bold group-open:pb-2 [&::-webkit-details-marker]:hidden">
                {c.name}
                <Icon
                  name="chevron"
                  className="size-(--icon-sm) transition-transform duration-(--dur-slow) group-open:rotate-180"
                />
              </summary>
              <p className="m-0 px-2.5 pb-4 text-md text-soft">{c.towns}</p>
            </details>
          ))}
          {/* "See more" in the reference expands a longer county list; wire it up once the client confirms more counties */}
          <p className="mt-6 text-center text-h3 font-bold underline">{areas.moreLabel}</p>
        </div>
      </div>
    </section>
  )
}
