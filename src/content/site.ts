/**
 * All page copy lives here. Strings containing "YOUR CONTENT HERE" are
 * placeholders that need real, client-approved content before launch.
 * Do not invent reviews, prices, offers, guarantees, or certifications.
 */

export const phone = {
  display: '(201) 988-8313',
  href: 'tel:+12019888313',
}

export const callNowLabel = `Call Now ${phone.display}`
export const callShortLabel = 'Call Now' // header button on phones, where the full number does not fit

export const promo = {
  // Replace with: your availability line, e.g. hours or emergency service policy
  text: 'YOUR CONTENT HERE: availability line',
}

export const nav = {
  logo: {
    src: '/images/ac-quality-air-logo.webp',
    // smaller copy for phones and 2x screens; sizes = rendered logo width (--logo-h x 480/222)
    srcSet: '/images/ac-quality-air-logo-320.webp 320w, /images/ac-quality-air-logo.webp 480w',
    sizes: '(max-width: 767px) 113px, 156px',
    name: 'A&C QUALITY AIR',
    tagline: 'HEATING • COOLING • NEW JERSEY',
  },
  links: [
    { label: 'Deals', href: '#deals' },
    { label: 'Services', href: '#services' },
    { label: 'Financing', href: '#financing' },
    { label: 'Guarantee', href: '#guarantee' },
    { label: 'Service Area', href: '#areas' },
  ],
  requestLabel: 'Request Service',
  requestHref: '#request',
  // mobile menu button (screen-reader labels)
  navLabel: 'Main',
  menuLabel: 'Open menu',
  closeLabel: 'Close menu',
  // YOUR CONTENT HERE: short line under the phone button (leave empty to hide)
  phoneNote: '',
}

export type HeroIcon = 'tools' | 'shield' | 'calendar' | 'award'

export const hero = {
  title: 'Dependable Heating and Cooling for New Jersey Residents',
  ticks: [
    { icon: 'tools', label: 'Installation' },
    { icon: 'shield', label: 'Repair' },
    { icon: 'calendar', label: 'Maintenance' },
    { icon: 'award', label: 'Expert care, all year long' },
  ] as { icon: HeroIcon; label: string }[],
  callLine: 'Call us to schedule your service today',
  photo: {
    src: '/images/hero-technician-homeowner.webp',
    srcSet: '/images/hero-technician-homeowner-800.webp 800w, /images/hero-technician-homeowner.webp 1600w',
    sizes: '(min-width: 768px) 50vw, 100vw',
    alt: 'A&C Quality Air technician reviewing a tablet with a homeowner beside a company van',
    position: '72% 50%',
  },
  photoPlaceholder: 'HERO PHOTO (technician and homeowner)',
}

export const request = {
  id: 'request',
  title: 'Request Service',
  intro: 'Our team will be in touch right away to schedule fast, reliable service tailored to your needs.',
  servicePlaceholder: 'Service Needed',
  services: [
    'Air Conditioner Installation',
    'Air Conditioner Repair',
    'Furnace Installation',
    'Boiler Installation',
    'Water Heater Installation',
    'HVAC Maintenance',
  ],
  // Each step shows two fields and a button. Values are kept when moving between steps.
  steps: [
    { button: 'Step 1 of 3', fields: ['zip', 'service'] },
    { button: 'Step 2 of 3', fields: ['firstName', 'lastName'] },
    { button: 'Submit', fields: ['phone', 'email'] },
  ] as { button: string; fields: RequestField[] }[],
  labels: {
    zip: 'ZIP code',
    service: 'Service Needed',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone Number',
    email: 'Email Address',
  } as Record<RequestField, string>,
  backLabel: 'Back',
  sendingLabel: 'Sending…',
  // Inline validation messages, shown under a field after a submit attempt
  errors: {
    zip: 'Enter a 5-digit ZIP code.',
    service: 'Choose the service you need.',
    firstName: 'Enter your first name.',
    lastName: 'Enter your last name.',
    phone: 'Enter a phone number with area code.',
    email: 'Enter a valid email address, like name@example.com.',
  } as Record<RequestField, string>,
  // YOUR CONTENT HERE: URL that receives the form as a JSON POST (e.g. a form service or the client's CRM).
  // Until this is set, the last step does not send anything and shows notConnected instead of thanks.
  endpoint: '' as string,
  thanks: 'Thank you! Our team will be in touch right away to schedule your service.',
  notConnected: 'This form is not connected yet. Please call us at (201) 988-8313.',
  error: 'Something went wrong sending your request. Please call us at (201) 988-8313.',
  // YOUR CONTENT HERE: consent and privacy wording approved by the client (texting, autodialed calls, email).
  // Do not copy another company's consent text.
  consent: 'YOUR CONTENT HERE: consent to be contacted by phone, text and email.',
  privacyLabel: 'Privacy Policy',
  // YOUR CONTENT HERE: privacy policy URL
  privacyHref: '#',
}

export type RequestField = 'zip' | 'service' | 'firstName' | 'lastName' | 'phone' | 'email'

export const offers = {
  id: 'deals',
  title: 'Limited Time Offers in New Jersey',
  sub: 'Simply share or mention these offers to your A&C Quality Air team member and save on your service!',
  // Replace with: real, client-approved offers only. Do not publish placeholder prices.
  // image: optional client coupon artwork (1000x1000, shown at up to 500px so it stays sharp on 2x screens). When set it replaces the text card;
  // the text fields stay as the alt text, so the image and the fields must say the same thing.
  items: [
    { big: '$60 Off', what: 'Heating and Cooling Repairs', cta: 'Book Now!', expires: '12/01/2026', image: '/images/60off.webp' },
    { big: '$25', what: 'Seasonal Maintenance', cta: 'Schedule Today!', expires: '12/01/2026', image: '/images/25off.webp' },
    { big: 'Save Now, Pay Later', what: '0% Financing on new heating and cooling systems', cta: 'Book Now!', expires: '12/01/2026', image: '/images/savenow.webp' },
  ] as { big: string; what: string; cta: string; expires: string; image?: string }[],
  expiresLabel: 'Expires',
}

export type ServiceIcon = 'ac-repair' | 'ac-install' | 'heat-repair' | 'heat-install'

export const services = {
  id: 'services',
  title: 'Complete Heating & Cooling Services Across New Jersey',
  cols: [
    {
      icon: 'ac-repair',
      image: '/images/maintenance-icon.webp',
      imageSrcSet: '/images/maintenance-icon-108.webp 108w, /images/maintenance-icon.webp 500w',
      title: 'A/C Repair & Maintenance',
      items: ['Air conditioner repair service', 'Inconsistent cooling diagnosed', 'Tune-ups for a longer lifespan'],
    },
    {
      icon: 'ac-install',
      image: '/images/ac-install-icon.webp',
      imageSrcSet: '/images/ac-install-icon-108.webp 108w, /images/ac-install-icon.webp 500w',
      title: 'A/C Installation',
      items: ['Replace your aging system', 'Air conditioner installation', 'Expert installation'],
    },
    {
      icon: 'heat-repair',
      image: '/images/heater-repair-icon.webp',
      imageSrcSet: '/images/heater-repair-icon-108.webp 108w, /images/heater-repair-icon.webp 500w',
      title: 'Heater Repair & Maintenance',
      items: ['Furnace and boiler service', 'Steam boiler repair', 'Heating tune-ups'],
    },
    {
      icon: 'heat-install',
      image: '/images/heater-install-icon.webp',
      imageSrcSet: '/images/heater-install-icon-108.webp 108w, /images/heater-install-icon.webp 500w',
      title: 'Heater Installation',
      items: ['Furnace installation', 'Boiler installation service', 'Water heater installation and replacement'],
    },
  // image: optional client icon artwork; when set it replaces the line icon. Decorative (the title says what it is).
  ] as { icon: ServiceIcon; image?: string; imageSrcSet?: string; title: string; items: string[] }[],
}

export const problems = {
  title: 'Heating or Cooling Issues? We’ve Got You Covered.',
  photo: {
    src: '/images/technician-ac-repair.webp',
    srcSet: '/images/technician-ac-repair-800.webp 800w, /images/technician-ac-repair.webp 1600w',
    sizes: '(min-width: 1025px) 570px, 100vw',
    alt: 'Technician in a hard hat repairing the wiring of an outdoor air conditioning unit',
    position: '62% 50%',
  },
  photoPlaceholder: 'TECHNICIAN PHOTO',
  // Client-supplied copy
  items: [
    {
      title: 'Poor Cooling',
      points: [
        'Diagnose airflow restrictions and cooling problems.',
        'Identify refrigerant leaks and faulty components.',
        'Restore consistent, dependable cooling.',
      ],
    },
    {
      title: 'Aging Equipment',
      points: [
        'Assess equipment condition and performance.',
        'Explore affordable repair and replacement options.',
        'Upgrade to modern, energy-efficient equipment.',
      ],
    },
    {
      title: 'Uneven Temperatures',
      points: [
        'Identify hot and cold spots throughout your home.',
        'Inspect ductwork, airflow, and thermostat settings.',
        'Restore balanced temperatures in every room.',
      ],
    },
    {
      title: 'Unusual Sounds or Unpleasant Smells',
      points: [
        'Investigate rattling, buzzing, and grinding noises.',
        'Identify sources of unusual HVAC odors.',
        'Resolve issues before they become costly repairs.',
      ],
    },
    {
      title: 'Rising Heating & Cooling Costs',
      points: [
        'Pinpoint inefficiencies increasing energy consumption.',
        'Improve system performance and operating efficiency.',
        'Recommend solutions to help lower monthly utility bills.',
      ],
    },
    {
      title: 'Recurring HVAC Repairs',
      points: [
        'Identify the underlying causes of repeated failures.',
        'Repair worn or malfunctioning system components.',
        'Help prevent unexpected breakdowns with routine maintenance.',
      ],
    },
  ],
}

export const financing = {
  // This photo section now carries the guarantee copy, so it answers the nav's "Guarantee" link
  id: 'guarantee',
  badgeImage: { src: '/images/one-year-guarantee.webp', alt: '1 year warranty guarantee badge' },
  title: 'Your Comfort Is Backed by Our 1-Year Satisfaction Guarantee',
  body: 'At A&C Quality Air, we stand behind our workmanship. If you’re not satisfied with our work within one year of your original invoice, we’ll make every effort to make it right.',
  points: [
    { lead: '100% Satisfaction Commitment', text: 'We work to ensure you’re completely satisfied with the service we provide.' },
    { lead: 'One Full Year of Protection', text: 'Our satisfaction guarantee applies for one year from your original invoice date.' },
    { lead: 'Your Money Back', text: 'If we can’t meet your expectations, we’ll remove our equipment (if applicable) and refund 100% of your money.' },
  ],
  // Wide banner with open space on the left: used as a full-bleed background behind the copy on desktop
  photo: {
    src: '/images/homeowner-warranty.webp',
    srcSet: '/images/homeowner-warranty-1100.webp 1100w, /images/homeowner-warranty.webp 2172w',
    sizes: '100vw',
    alt: 'Homeowner on the phone reviewing her warranty paperwork',
    // crop is set in Financing.tsx: it differs between stacked and desktop layouts
  },
  photoPlaceholder: 'LIFESTYLE PHOTO',
}

export const guarantee = {
  // This blue band now carries the financing copy, so it answers the nav's "Financing" link
  id: 'financing',
  // Client-supplied financing copy (this blue band now carries financing; the photo section above carries the guarantee)
  title: 'Flexible Financing That Works for You.',
  fine: 'A new heating or cooling system shouldn’t put your budget on hold. At A&C Quality Air, we help you explore financing options so you can enjoy a comfortable home without the burden of paying everything upfront.',
  // Shown as the checkmark list on the right
  points: [
    'Affordable Monthly Payment Options',
    'Quick & Easy Application Process',
    'Flexible Plans to Fit Your Budget',
    'Low or No Down Payment Options',
  ],
}

export const reviews = {
  title: 'See why New Jersey customers trust A&C Quality Air',
  // Rating snapshot from the client's Google Business profile, 5.0 from 33 reviews as of 2026-11-05.
  // Update the count when it changes.
  rating: { score: '5.0', count: '33 Google reviews' },
  // Client's Google Business profile (tracking parameters removed)
  sourceHref:
    'https://www.google.com/maps/place/A%26C+Quality+Air/@40.8736372,-74.1386006,17z/data=!3m1!4b1!4m6!3m5!1s0xacb07be89eee881d:0x4400ea6c14f792f4!8m2!3d40.8736372!4d-74.1386006!16s%2Fg%2F11rq2d6zh2' as string,
  // Real Google reviews supplied by the client side, text verbatim. All three are 5-star.
  items: [
    {
      name: 'Eve St John',
      text: 'Caesar, was so great to work with. He is very knowledgeable , honest, hard worker. He fixed our Central AC unit which was fairly new which was installed by another contractor who didn’t bother to even come and look to fix it.',
    },
    {
      name: 'Andrew Passaro',
      text: 'AC Quality Air is the one. My AC unit recently went out, and the level of service I received was absolutely amazing from start to finish. They arrived on time, I will absolutely be using them for all my future HVAC needs.',
    },
    {
      name: 'Kelly Lopez',
      text: 'The few times I’ve had an emergency, Cesar answered and addressed our issues immediately and either came the same day or the following day. He’s reliable, efficient, explains in detail and doesn’t rush the job. I’ve used other services in the past and have decided to contact A&C quality only moving forward. He’s very knowledgeable and I trust he knows what he’s doing with our very dated machine. He doesn’t push services or unnecessary work. Highly recommend.',
    },
  ],
  sourceLabel: 'Google review',
}

export const areas = {
  id: 'areas',
  title: 'We are proud to serve the following areas:',
  map: {
    src: '/images/Map_New_Jersey_north_NA.jpg',
    alt: 'Map of New Jersey; A&C Quality Air serves Bergen, Passaic, Essex and Morris counties',
    position: '50% 32%', // portrait map: keep the Paterson to Newark area in the crop
  },
  mapPlaceholder: 'SERVICE AREA MAP',
  // Verify county assignments with the client before launch.
  counties: [
    { name: 'Bergen County', towns: 'Ridgewood, Ramsey, Upper Saddle River, East Rutherford, Hasbrouck Heights, Oakland' },
    { name: 'Passaic County', towns: 'Clifton, Wayne' },
    { name: 'Essex County', towns: 'Verona, West Caldwell, Livingston, North Arlington' },
    { name: 'Morris County', towns: 'Chatham, East Hanover' },
  ],
  moreLabel: 'See more',
}

export const finalCta = {
  title: 'Call Us for All of Your New Jersey HVAC Needs',
}

export const footer = {
  // Replace with: client-approved offer terms and warranty disclaimers. Do not copy another company's legal text.
  terms: ['YOUR CONTENT HERE: offer terms, warranty and guarantee disclaimers'],
  copyright: `© ${new Date().getFullYear()} A&C QUALITY AIR LLC. ALL RIGHTS RESERVED.`,
  // YOUR CONTENT HERE: privacy policy URL
  links: [{ label: 'PRIVACY POLICY', href: '#' }],
}
