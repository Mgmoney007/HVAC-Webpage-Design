# A&C Quality Air landing page

Goal: a landing page for A&C Quality Air (NJ HVAC) in the layout style of the reference captured in `reference/preview.png`. Content, logo, photos, and offers must be the client's own. Never copy the reference company's name, logo, photos, offers, or legal text.

## Source of truth
- `reference/design-brief.md`: section order, colors, type, components.
- `reference/tokens.json`: design tokens. All colors, sizes, and radii come from CSS variables derived from this file. No hardcoded values.
- `reference/scaffold.html`: single-file prototype of the full page. Port it into components, do not redesign it.
- `reference/preview.png`: ground-truth screenshot at 1440 wide.

## Rules
- Copy lives in one file (`src/content/site.ts`). Items marked YOUR CONTENT HERE need real client content. Do not invent reviews, prices, offers, guarantees, or certifications.
- Client facts known so far: phone (201) 988-8313, services and towns listed in `design-brief.md`.
- One component per section, in the page order from `design-brief.md`.
- Verify each section at 1440, 768, and 390 widths by screenshotting the dev build and comparing to the reference before calling it done.
- Self-host Roboto. No CDN font links in production.
- Do not commit or push unless asked.
