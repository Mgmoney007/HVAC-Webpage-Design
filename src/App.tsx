import { PromoBar } from './components/PromoBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { RequestService } from './components/RequestService'
import { Offers } from './components/Offers'
import { Services } from './components/Services'
import { Problems } from './components/Problems'
import { Financing } from './components/Financing'
import { Guarantee } from './components/Guarantee'
import { Reviews } from './components/Reviews'
import { ServiceAreas } from './components/ServiceAreas'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        {/* Request card and offers share one blue band so the card can overlap the hero */}
        <div className="on-dark relative flow-root bg-band">
          <RequestService />
          <Offers />
        </div>
        <Services />
        <Problems />
        <Financing />
        <Guarantee />
        <Reviews />
        <ServiceAreas />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
