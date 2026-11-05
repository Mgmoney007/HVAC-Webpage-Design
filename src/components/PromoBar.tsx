import { promo } from '../content/site'

export function PromoBar() {
  return (
    <div className="bg-band px-3 py-2 text-center text-promo font-bold text-paper max-md:text-small">
      {promo.text}
    </div>
  )
}
