import { callNowLabel, financing, phone } from '../content/site'
import { Photo } from './Photo'

/**
 * Desktop: the wide photo fills the whole section and the copy sits over its empty
 * left side, as in preview.png. Tablet and phone: copy first, cropped photo below
 * (at tablet widths the crop puts the subject under the copy).
 */
export function Financing() {
  return (
    <section id={financing.id} className="relative isolate flex flex-col bg-mist lg:block">
      <Photo
        src={financing.photo.src}
        alt={financing.photo.alt}
        placeholder={financing.photoPlaceholder}
        /* stacked: centre on the subject; desktop: pin left so the open wall sits behind the copy */
        className="-z-10 h-60 w-full object-[80%_50%] md:h-80 lg:absolute lg:inset-0 lg:h-full lg:object-left max-lg:order-last"
      />
      <div className="flex items-center lg:min-h-(--financing-min-h) max-lg:order-first">
        <div className="pl-container py-16 pr-6 lg:w-1/2 max-lg:py-12 max-md:px-6 max-md:py-9">
          {/* Badge sits beside the heading so the section keeps its height and the photo crop holds */}
          <div className="mb-6 flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-4">
            <img
              src={financing.badgeImage.src}
              alt={financing.badgeImage.alt}
              width={300}
              height={300}
              loading="lazy"
              className="size-(--badge-sm) flex-none object-contain"
            />
            <h2 className="m-0 max-w-(--hero-h1-max) text-h2 leading-tight font-bold">{financing.title}</h2>
          </div>
          <p className="m-0 text-md leading-relaxed">{financing.body}</p>
          <ul className="mt-4 mb-10 list-disc pl-4 text-md leading-relaxed">
            {financing.points.map((p) => (
              <li key={p.lead} className="mb-1">
                <strong className="font-bold">{p.lead}</strong> – {p.text}
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href={phone.href}>
            {callNowLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
