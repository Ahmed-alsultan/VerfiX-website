# VerfiX Website — UI kit

An interactive, high-fidelity recreation of the VerfiX marketing site **and** product console, built entirely from the design-system primitives (`window.VerfiXDesignSystem_1000e3`).

Open **`index.html`** — it's a single-page click-through shell with working in-app navigation (no broken links).

## Surfaces

| File | Surface |
|---|---|
| `index.html` | App shell — routing, sticky nav, footer, demo modal |
| `Chrome.jsx` | `NavBar`, `Footer`, `Logo` — shared site chrome |
| `Homepage.jsx` | Hero + live-queue mock, Trust Engine™ flow, industry bar, stats, industries grid, CTA |
| `Platform.jsx` | Product detail — capability cards, Trust Engine spotlight with signal bars |
| `Industries.jsx` | Sector grid with Live / Coming-soon badges |
| `Developers.jsx` | Docs landing — API code block, endpoints table, SDK grid |
| `Company.jsx` | About / trust & security — values, stats, certifications |
| `DemoModal.jsx` | Multi-field "Book a Demo" lead form → confirmation |
| `ProductApp.jsx` | Sign-in → verification **console**: queue table, filters, stat strip, drill-in detail rail with TrustScore dial & signal breakdown |

## Interactions to try
- Click any **nav item** (Platform / Industries / Developers / Company) — pages route in place.
- Click **Book a Demo** anywhere → modal → fill → confirmation.
- Click **Sign in** → fill email/password → **verification console**.
- In the console: click queue rows to drill in (the Trust Score dial + signal bars recolor by decision band), toggle the **All / Approve / Review / Reject** filters, **Sign out** returns to the site.

## Notes
- Every link routes within the SPA — footer columns map to the closest page; there are no dead `href="#"` links.
- Components are loaded as separate `text/babel` files; each is wrapped in an IIFE so their top-level `const { … } = window.VerfiXDesignSystem_1000e3` destructures don't collide in the shared Babel global scope.
- This is a cosmetic recreation for design reference — forms and auth are faked, no real requests are made.
