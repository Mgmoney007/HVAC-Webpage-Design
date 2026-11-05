import { callNowLabel, finalCta, phone } from '../content/site'

export function FinalCta() {
  return (
    <div className="on-dark bg-accent py-7.5 text-paper">
      <div data-reveal className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
        <h2 className="m-0 text-cta font-medium">{finalCta.title}</h2>
        <a className="btn btn-white" href={phone.href}>
          {callNowLabel}
        </a>
      </div>
    </div>
  )
}
