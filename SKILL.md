---
name: verfix-design
description: Use this skill to generate well-branded interfaces and assets for VerfiX, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand in one line:** VerfiX — Swiss trust infrastructure for regulated onboarding. "Verify once. Trust everywhere." Confident, precise, measured. No emoji, no exclamation marks.
- **Three colors only:** VerfiX Red `#C8252A`, Ink Navy `#1A1F2E`, White. Red is used sparingly (CTAs, accents, the wordmark X). Status colors (green/amber/red/blue) signal state only.
- **Two fonts:** Bricolage Grotesque (display + body, heavy & tight-tracked) and IBM Plex Mono (labels, numerals, code). Mono kickers are UPPERCASE, wide-tracked, red, with a short dash.
- **Flagship concept:** the Trust Engine™ fuses verification signals into a 0–100 Trust Score → Approve / Review / Reject (green / amber / red, fixed mapping).
- **Visual feel:** flat solid backgrounds (no gradients), 1px hairline borders, tight radii (3/5/8/10px), low cool shadows — it sits flush, never floats. The recurring motif is the red IconChip (Font Awesome icon in a tinted red square).
- **Icons:** Font Awesome 6 (CDN). Never emoji, never hand-drawn SVG.

## Files
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, repo index.
- `styles.css` + `tokens/` — link `styles.css` to inherit all CSS custom properties (`--vx-red`, `--font-display`, `--radius-md`, …).
- `components/` — React primitives (Button, Label, IconChip, Card, Tag, Badge, Input, Stat, TrustScore, DecisionPill). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — full interactive site + product console recreation; copy screens as starting points.
- `assets/` — logo + imagery.

When building HTML mocks: link `styles.css`, load Font Awesome + the React/Babel pinned tags, load `_ds_bundle.js`, and read components via `const { Button, ... } = window.VerfiXDesignSystem_1000e3`. Wrap each separate `text/babel` file in an IIFE to avoid `const` scope collisions.
