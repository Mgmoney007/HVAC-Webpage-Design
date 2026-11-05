# A&C Quality Air Design System
> Source: https://ajperri.ars.com/HVAC | Extracted: 2026-11-05
> Brand: A&C Quality Air, dependable cooling and heating installation, repair and maintenance for New Jersey residents.
> (css) = read from the page's stylesheets or computed branding. (est) = measured by eye from preview.png; verify in devtools.

## Typography
Font: Roboto, weights 100 to 900 loaded (css). Self-host it for production instead of linking Google Fonts.
Sizes (css): h1 48px, h2 36px, body 14px, small 12px. Other sizes seen in the stylesheet: 0.75rem, 0.875rem, 1rem, 1.25rem, 1.5rem, 2rem.
Hero h1 is white on blue, left-aligned, bold, about 3 lines wide at 1440 (est). Section headings are bold, near-black (#231F20).

## Color Palette
| Role | Value | Where |
|------|-------|-------|
| Primary blue | #243DAE | Hero left panel, guarantee section (css, `--color-primaty`) |
| Band blue | #0058A3 | Promo bar, request band, offers band (css, branding secondary) |
| Red | #E4002B | Primary buttons, offer prices, stars, final CTA band, links (css) |
| Navy ink | #0B2744 | Input borders (css) |
| Ice blue | #F0F8FF | "HVAC problem" section background (css) |
| Light grey | #F4F4F4 | Financing section background (css) |
| Text / footer | #231F20 | Body text and footer background (css) |

## Spacing
Base unit 4px (css). Container max width 1188px, content columns about 1140px wide at 1440 (est). Section vertical padding about 48 to 56px (est).

## Motion
No custom easing or durations found. Accordion and hover states are the only interactions seen. Check hover and focus states in devtools before finalizing.

## Layout Patterns
Section order, top to bottom, at 1440 desktop:
1. Promo bar, blue, centered bold text.
2. Nav, white, solid. Logo left, five links, outlined "Request Service" button, red "Call Now" button, small line under the phone button.
3. Hero, two columns. Left half primary blue with h1, four icon rows, a "call us" line and a red button. Right half is a full-bleed photo.
4. Request Service card, white, overlapping the hero's bottom edge and the blue band. ZIP input, service select, red "Step 1 of 3" button.
5. Limited Time Offers, blue band, three white cards with a large red price, description, "Book Now", and an expiry row.
6. Services, white, centered h2, two check items, four columns each with an outline icon, heading and three bullets.
7. Problems, ice-blue. Photo left, h2 and a 2x3 grid of symptom blurbs right.
8. Financing, light grey. Text and bullets left, photo filling the right half, red button.
9. Guarantee, primary blue. Round badge left with h2 and fine print, bold checklist right.
10. Testimonials, white. Heading left, two bordered review cards right with red stars.
11. Service areas, white. Heading and map left, accordion rows right with "See more".
12. Final CTA, full-width red band, white pill button.
13. Footer, dark, small legal text, copyright row.
Breakpoints (css): 767px, 768px, 1024px, 1025px, 1188px.

## Component Patterns
Primary button: red fill, white text, 40px radius (css). Secondary button: transparent, dark text, red 1px border, 40px radius (css).
Inputs and selects: white, black text, 1px #0B2744 border, 3px radius, no shadow (css).
Cards: white, soft shadow, about 8px radius (est).
Icons: thin outline, about 36px, blue (est).
Framework detected: Bootstrap (css).

## Content notes for A&C Quality Air (from the client's current page)
Phone (201) 988-8313. Services: air conditioner installation and repair, furnace installation, boiler and steam boiler installation, water heater installation and replacement, HVAC service. Trust points: Affordable Prices, Ample Experience, Guaranteed Satisfaction, Skilled Workmanship, 100 Percent Satisfaction. Towns served: Clifton, Wayne, Verona, West Caldwell, Oakland, Ridgewood, Ramsey, Upper Saddle River, East Rutherford, Hasbrouck Heights, North Arlington, Livingston, Chatham, East Hanover. Three Google reviews (Eve St John, Andrew Passaro, Kelly Lopez) were supplied separately and are in the reviews section verbatim, with 5-star icons and no dates, plus a 5.0 from 33 reviews snapshot taken 2026-11-05. No offers, financing terms, hours, or guarantee wording were found, so those sections are marked placeholders in scaffold.html and need real client content before launch.
