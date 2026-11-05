import { services } from '../content/site'
import { Icon } from './Icon'

export function Services() {
  return (
    <section id={services.id} className="pt-14 pb-16 text-center max-md:py-10">
      <div className="container-site">
        <h2 className="m-0 text-h2 leading-tight font-bold">{services.title}</h2>
        <div className="mt-4 mb-7.5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sub font-medium max-md:text-md">
          {services.checks.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <Icon name="check" className="size-(--icon-sm)" />
              {c}
            </span>
          ))}
        </div>
        <div className="grid gap-7 text-left md:grid-cols-2 lg:grid-cols-4">
          {services.cols.map((col) => (
            <div key={col.title}>
              <Icon name={col.icon} className="mx-auto mb-3 block size-(--icon) text-band" />
              <h3 className="m-0 mb-4 text-center text-h3 font-bold">{col.title}</h3>
              <ul className="m-0 list-disc pl-4 text-list leading-relaxed text-soft">
                {col.items.map((i) => (
                  <li key={i} className="mb-1">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
