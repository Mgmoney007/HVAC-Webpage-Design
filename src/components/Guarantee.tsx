import { guarantee } from '../content/site'
import { Icon } from './Icon'

export function Guarantee() {
  return (
    <section id={guarantee.id} className="on-dark bg-brand py-section-lg text-paper">
      <div data-reveal className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="m-0 mb-4 text-h2 leading-tight font-bold">{guarantee.title}</h2>
          <p className="m-0 max-w-measure text-md opacity-90">{guarantee.fine}</p>
        </div>
        <ul className="m-0 grid list-none gap-4 p-0 text-h3 font-bold">
          {guarantee.points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <Icon name="check" className="size-(--icon-md)" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
