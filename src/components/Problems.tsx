import { problems } from '../content/site'
import { Photo } from './Photo'

export function Problems() {
  return (
    <section className="bg-ice py-20 max-md:py-10">
      <div className="container-site grid items-start gap-15 lg:grid-cols-2 lg:items-stretch max-lg:gap-8">
        <Photo
          {...problems.photo}
          placeholder={problems.photoPlaceholder}
          className="h-(--problems-photo-h) w-full rounded-box lg:h-full"
        />
        <div>
          <h2 className="m-0 mb-6 text-h2 leading-tight font-bold">{problems.title}</h2>
          <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
            {problems.items.map((p) => (
              <div key={p.title}>
                <h3 className="m-0 mb-1 text-h3 font-bold">{p.title}</h3>
                <ul className="m-0 list-disc pl-4 text-md text-soft">
                  {p.points.map((pt) => (
                    <li key={pt} className="mb-1">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
