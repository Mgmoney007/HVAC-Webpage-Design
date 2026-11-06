import { services } from '../content/site'
import { Icon } from './Icon'

export function Services() {
  return (
    <section id={services.id} className="py-section text-center">
      <div data-reveal className="container-site">
        <h2 className="m-0 mb-7.5 py-2.5 text-h2 leading-tight font-bold">{services.title}</h2>
        <div className="grid gap-7 text-left md:grid-cols-2 lg:grid-cols-4">
          {services.cols.map((col) => (
            <div key={col.title}>
              {col.image ? (
                <img
                  src={col.image}
                  srcSet={col.imageSrcSet}
                  sizes="36px" /* = --icon; the sizes attribute cannot read CSS variables */
                  alt=""
                  width={500}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto mb-3 block size-(--icon)"
                />
              ) : (
                <Icon name={col.icon} className="mx-auto mb-3 block size-(--icon) text-band" />
              )}
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
