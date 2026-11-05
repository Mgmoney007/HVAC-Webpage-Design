import { offers } from '../content/site'
import { Icon } from './Icon'

export function Offers() {
  return (
    <section id={offers.id} className="pt-10 pb-5 text-center text-paper max-md:pb-10">
      <div data-reveal className="container-site">
        <h2 className="m-0 text-h2 leading-tight font-bold">{offers.title}</h2>
        <p className="m-0 mt-1 mb-7.5 text-sub font-bold">{offers.sub}</p>
        <div className="grid gap-10 md:grid-cols-3 md:max-lg:gap-4">
          {offers.items.map((o, i) => (
            <article
              key={i}
              className="card relative flex min-h-(--offer-min-h) flex-col rounded-box border border-dashed border-muted/50 bg-paper px-4 pt-12 pb-4 text-copy shadow-box"
            >
              <Icon name="tag" className="absolute top-3 right-4 size-(--icon-sm) text-muted" />
              <div className="text-price leading-tight font-bold text-accent">{o.big}</div>
              <div className="my-3 text-lead font-medium">{o.what}</div>
              <div className="mt-auto pb-4 text-md text-muted">{o.cta}</div>
              <div className="flex justify-between border-t border-mist pt-2.5 text-md text-muted">
                <span>{offers.expiresLabel}</span>
                <span>{o.expires}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
