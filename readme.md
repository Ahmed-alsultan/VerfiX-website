# VerfiX Design System

The brand + UI system for **VerfiX AG** — Swiss trust infrastructure for regulated digital onboarding (KYC, KYB, AML, fraud intelligence, and the Trust Engine™).

This project is the single source of truth for designing VerfiX surfaces: brand foundations, reusable React primitives, and a full click-through recreation of the marketing site and verification console.

---

## Company & product context

VerfiX is a Lausanne-based company providing the identity + compliance layer behind regulated onboarding. Its positioning line is **"Verify once. Trust everywhere."** The flagship concept is the **Trust Engine™** — many verification signals (document, face/liveness, AML/sanctions, KYB registry, device & fraud) fused into a single explainable **0–100 Trust Score** that resolves to one of three decisions: **Approve / Review / Reject**.

Target buyers are compliance and risk teams in regulated sectors: banking, fintech, insurance, crypto, government, healthcare, telecom, mobility, marketplaces, real estate. Trust signals lean heavily on Swiss/EU regulatory frameworks (nFADP, GDPR, eIDAS, FINMA AMLA, ISO 27001, SOC 2) and Swiss data residency.

### Sources used to build this system
- **GitHub — marketing site:** `Ahmed-alsultan/VerfiX-website` (https://github.com/Ahmed-alsultan/VerfiX-website). Primary source: `main.css` (token + color system), `index.html` (hero/Trust-Engine/industries copy & structure), `banking-deck.html` (industry landing), `01-VerfiX-Company-Overview.docx`. **Explore this repo further to recreate site sections with higher fidelity.**
- **GitHub — product:** `Ahmed-alsultan/VerfiX` (https://github.com/Ahmed-alsultan/VerfiX) — overview README.
- **Upload:** `LOGO.PNG` (primary logo lockup → `assets/verfix-logo-full.png`).
- The brand fonts in the live site are **Bricolage Grotesque** (display + body) and **IBM Plex Mono** (labels, numerals, code), both loaded from Google Fonts.

---

## CONTENT FUNDAMENTALS — how VerfiX writes

- **Voice:** confident, precise, infrastructural. VerfiX talks like a system of record, not a hype startup. Short declaratives over adjectives.
- **Signature constructions:** terse two-part statements, often with a period in the middle — *"Verify once. Trust everywhere."*, *"Every signal. One decision."*, *"Trust is infrastructure."* Use these sparingly as headlines.
- **Person:** addresses the customer as **you** / **your onboarding**, refers to itself as **VerfiX** or **we** (rarely). Never "I".
- **Casing:** Sentence case for body and most headings; the wordmark is **VerfiX** (capital V, capital X). Product/feature names are Title Case with a ™ on **Trust Engine™** and **Trust Score™**. Mono kicker labels are UPPERCASE with wide tracking.
- **Numbers & specifics:** concrete and technical — `<3s`, `190+ countries`, `14,000+ ID types`, `0–100 score`. Numerals render in IBM Plex Mono. Don't invent precision you can't back; prefer ranges/`+`.
- **Compliance literacy:** name real frameworks (nFADP, GDPR, eIDAS, FINMA AMLA). This is a trust signal, not decoration — keep it accurate.
- **Tone toward risk:** calm and matter-of-fact. Decisions are "Approve / Review / Reject", never alarmist.
- **Emoji:** never. **Exclamation marks:** effectively never. The brand earns trust by being measured.
- **CTAs:** action-first and short — *Book a Demo*, *Explore Platform*, *Read the docs*, *Talk to Sales*, *Get API keys*.

---

## VISUAL FOUNDATIONS

- **Color:** the entire brand runs on **three colors** — VerfiX Red `#C8252A`, Ink Navy `#1A1F2E`, and White. Everything else is a neutral gray step or a muted status accent. Red is used **deliberately and sparingly**: primary CTAs, the wordmark's X, icon glyphs, accent lines, and the active/selected state. It is never a flood-fill background except on the single most important CTA. Navy carries dark sections, the product sidebar, and footers.
- **Status colors** exist only to signal state: green `#16A34A` (approve/verified), amber `#D97706` (review/pending), red `#C8252A` (reject/danger), blue `#2563EB` (informational/categorical). The Trust Engine's Approve/Review/Reject map to green/amber/red and that mapping is fixed — never restyle it.
- **Type:** two families only. **Bricolage Grotesque** does display + body; display headings are heavy (**700–800**) with tight negative tracking (`-0.03` to `-0.045em`) and a near-1.0 line-height. **IBM Plex Mono** does every kicker label, big numeral, code block, and ID string — it's the "machine voice" of the brand. Mono kickers are small (~0.62rem), UPPERCASE, wide-tracked (`0.12em`), usually red, often prefixed with a short red dash.
- **Backgrounds:** flat solid color — white, off-white `#F7F8FA`, or navy. **No gradients** (the one exception: a soft red glow shadow on the primary CTA and the navy→deep-navy section transitions). No photographic hero imagery, no illustrations, no textures or repeating patterns. Visual interest comes from product-mockup panels (the verification queue, the API code block, the Trust Score dial), not decoration.
- **Borders:** 1px hairlines `#E5E7EB` everywhere — dividers, card edges, table rows. Inputs use a 1.5px border that turns **red on focus**. The signature card treatment is a **3px red top accent line** on feature cards.
- **Corner radii:** tight and technical. Badges/tags `3px`, buttons/inputs `5px`, cards `8px`, panels/mockups `10px`. The `100px` pill radius is reserved for kicker pills and filter chips — **never** soft-rounded cards.
- **Shadows:** low, cool, restrained — VerfiX **sits flush, it doesn't float**. Resting cards usually have only a border; hover adds a subtle `0 4px 18px rgba(26,31,46,.09)` lift. Big mockups get a larger soft shadow. The red CTA gets a colored `rgba(200,37,42,.35)` glow on hover.
- **Cards:** white (or navy `dark` variant), 1px border, 8px radius, ~1.35rem padding, flush by default. `accent` adds the red top line; `hover` adds a 2px translateY lift + shadow.
- **Iconography:** the recurring motif is the **IconChip** — a single Font Awesome icon in a tinted red rounded square with a red-line border (or solid red for active). See ICONOGRAPHY below.
- **Animation:** minimal and functional. Transitions are fast (`0.13–0.15s`) on hover/focus color and a 1–2px lift. The Trust Score dial animates its ring with a `0.6s` ease-out (`cubic-bezier(.16,1,.3,1)`). No bounces, no infinite loops, no parallax. Respect reduced-motion.
- **Hover states:** buttons lift 1px and deepen color (red→`#A01E22`); links shift to red; cards lift 2px + shadow.
- **Press/active states:** selected rows/filters fill with red (chips) or red tint (table rows); active nav item is red text.
- **Transparency & blur:** the sticky top nav is `rgba(255,255,255,.88)` + `backdrop-filter: blur(12px)`. On navy sections, overlay surfaces use `rgba(255,255,255,.04–.1)` fills with `rgba(255,255,255,.1)` borders. Used purposefully, not decoratively.
- **Layout:** centered `1160px` max-width container, `0 2rem` gutters, generous `~5rem` section vertical rhythm, sticky 64px nav. Product console uses a fixed 210px navy sidebar + fluid main + 320px detail rail.

---

## ICONOGRAPHY

- **System:** **Font Awesome 6** (Free, solid `fas` + brands `fab`), loaded from CDN (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`). The live site uses Font Awesome classes throughout (`fas fa-face-smile`, `fas fa-shield-halved`, etc.), so this matches the source.
- **Treatment:** icons are almost always **red** and frequently wrapped in the **IconChip** (tinted red square). Standalone icons inside list rows, stats, and nav are red at small sizes. On navy, icons stay red against translucent-white chips.
- **Common glyphs:** `fa-shield-halved`, `fa-fingerprint` (logo mark), `fa-gauge-high` (Trust Engine), `fa-id-card` (documents), `fa-face-smile` (face/liveness), `fa-magnifying-glass-dollar` (AML), `fa-building` (KYB), `fa-scroll` (audit), `fa-circle-check`, `fa-lock`, `fa-scale-balanced`. Industry/brand glyphs: `fa-landmark`, `fa-bolt`, `fa-coins`, `fa-building-columns`, plus `fab` logos for SDK languages.
- **No emoji. No hand-drawn SVG.** The fingerprint logo mark is rendered as `fa-fingerprint` in a red square; the uploaded `LOGO.PNG` is the full external lockup (see `assets/`).
- **Substitution flag:** the original repo references Font Awesome by class but its self-hosted icon binaries weren't in the importable tree, so icons are loaded from the Font Awesome CDN. If you have a self-hosted/licensed Font Awesome kit, drop it in `assets/` and swap the `<link>`.

---

## Foundations index (Design System tab)

| Group | Cards |
|---|---|
| **Colors** | Brand Core · Red Scale · Neutrals · Status & Decision |
| **Type** | Display · Body & UI · Mono labels · Type scale |
| **Spacing** | Spacing scale · Radius · Shadows |
| **Brand** | Logo · Tagline lockup |
| **Components** | Core (Button/Label/IconChip/Card/Tag) · Feedback (Badge) · Data (TrustScore/DecisionPill/Stat) · Forms (Input) |
| **VerfiX Website** | Full interactive site + console |
| **Developer Portal** | API dashboard, keys, sandbox, webhooks, logs, rate limits, docs, auth, errors, SDKs |
| **Rules Builder** | No-code workflow + decision simulator |
| **KYB Company Profile** | Registry, directors, UBO graph, risk, adverse media, timeline |
| **Case Management** | Investigation workspace, notes, audit trail, decisions |
| **Compliance Center** | Audit logs, consent, retention, GDPR/nFADP, exports, reports |
| **Trust Engine Analytics** | Volume, approval, fraud, geo risk, AML, providers, KPIs |
| **Documentation Center** | Docs home + API/SDK/compliance articles, guides, whitepapers |

---

## Repository index

- **`styles.css`** — global entry point. Consumers link this one file. It only `@import`s:
  - `tokens/fonts.css` — Bricolage Grotesque + IBM Plex Mono (`@font-face` via Google Fonts).
  - `tokens/colors.css` — brand, neutral, status & decision colors + semantic aliases.
  - `tokens/typography.css` — families, sizes, weights, tracking, line-heights.
  - `tokens/spacing.css` — spacing scale, radii, borders, shadows, layout, motion.
- **`components/`** — reusable React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` + a directory `@dsCard`:
  - `core/` — **Button, Label, IconChip, Card, Tag**
  - `feedback/` — **Badge**
  - `forms/` — **Input**
  - `data/` — **Stat, TrustScore, DecisionPill**
- **`ui_kits/website/`** — full click-through recreation: `index.html` (the interactive app shell) + `Homepage`, `Platform`, `Industries`, `Developers`, `Company`, `DemoModal`, `ProductApp` (sign-in → verification console), `Chrome` (nav + footer). See its own `README.md`.
- **`ui_kits/` — enterprise platform surfaces** (the product, beyond marketing). Each is a self-contained interactive app (`index.html` + `.jsx`) that composes the design-system primitives and links back to the site. Reachable from the website footer:
  - **`developer-portal/`** — Stripe/Persona-grade API console: dashboard, API keys (reveal/rotate), sandbox (live request→response), webhooks, API logs (filterable), rate limits, API docs, authentication, error reference, SDK downloads.
  - **`rules-builder/`** — no-code verification workflow: draggable rule blocks (condition/risk/AML/country/threshold/escalation), an inspector for per-block config, and a live **decision simulator** that recomputes risk → Approve/Review/Reject.
  - **`kyb-profile/`** — KYB company profile with tabs: overview, registry, directors & UBOs, **ownership graph**, risk & adverse media, verification timeline.
  - **`case-management/`** — investigation workspace: case queue, investigation, **notes & internal comments** (live-posting), attachments, audit trail, decision history.
  - **`compliance-center/`** — audit logs, consent records, data retention, GDPR/nFADP (DSAR handling), user activity, export center, regulatory reports.
  - **`analytics/`** — Trust Engine analytics: volume bars, risk-distribution donut, approval breakdown, fraud-trend line, geographic risk, AML alerts, provider performance, operational KPIs.
  - **`docs-center/`** — documentation portal: docs home, sidebar tree, and an article reader with on-page TOC (API/SDK/compliance docs, integration & quick-start guides, whitepapers).
  - **`future-vision/`** — forward-looking **concept** surface (clearly labelled "not shipped"): Identity Gateway (one API), open Verification Marketplace, and the Trust Engine™ as a standalone product.
- **`guidelines/`** — foundation specimen cards (`*.card.html`), plus the **Enterprise QA Audit** and **QA Verification Report**.
- **`assets/`** — `verfix-logo-full.png` (logo), `verfix-og-image.jpg`.
- **`SKILL.md`** — Agent-Skills-compatible entry point.

> Compiler-generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are written automatically — do not edit by hand. In `@dsCard` HTML the bundle exposes components under `window.VerfiXDesignSystem_1000e3`.

---

## Caveats / substitutions
- **Fonts** are loaded from Google Fonts (matching the live site's setup), not self-hosted binaries.
- **Icons** are loaded from the Font Awesome CDN (the repo referenced FA classes but didn't ship the binaries).
- The repo's "decks" (`banking-deck.html` etc.) are HTML **industry landing pages**, not slide decks — so no slide-template kit was created.
