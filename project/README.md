# Imberion — Design System

Brand and UI reference for **Imberion**, a Commercial Intelligence & Execution System. Imberion helps organizations move from discretionary, reactive commercial decisions to structured, economically optimized decision‑making across pricing, promotions, portfolio, trade terms, and go‑to‑market.

> **Brand line:** _from noise to signal_  
> **One unified brand across industries** (industrial, consumer, services). The core system does not change — only its application.

---

## Sources this was built from

| Source | Where | Notes |
|---|---|---|
| Marketing site codebase | [github.com/rogarridoe/Imberion](https://github.com/rogarridoe/Imberion) (branch `main`) | Live HTML + CSS for `index.html`, `how-it-works.html`, `distribuidores.html`, `arm-a/b/c.html`, `how-we-operate.html`. The primary source of truth for colors, type, spacing, components. |
| Brand docs | `reference/BRAND_GUIDELINES.md`, `reference/DESIGN_SYSTEM.md`, `reference/CONTENT_GUIDE.md` | Imported from the repo's `brand_assets/`. Prose guidance for tone, imagery, layout. |
| Logo kit | `assets/logos/` | Wordmark (navy / white / solid), signal-only mark (navy / white), two favicons. Imported from repo `brand_assets/`. |
| Client logos | `assets/logos-clientes/` | Representative subset of the carousel on the live site. |
| Product stills | `assets/arm-a-flow.png`, `assets/arm-b-simulator.png` | Hero/simulator imagery used on the live site. |

Assume the reader does **not** have access to the repo; everything needed is mirrored here.

---

## Content fundamentals

Imberion writes like a top‑tier consulting firm — not a SaaS startup, not a McKinsey deck either. Short, structural, confident.

**Voice properties** (from `reference/CONTENT_GUIDE.md`): direct, intelligent, controlled, concise, strategic, assured. Never inflated, buzzword‑heavy, or overly abstract.

### Tone rules

- **Third‑person "we" → "you."** Client‑facing framing. No "I". No "customers" — "organizations," "companies," or the specific role (manufacturers, distributors, retailers).
- **Sentence case** for headlines. Title Case is reserved for proper nouns and product modules (_Pricing Intelligence_, _Trade Terms Optimization_).
- **Serif headline + sans subhead** carries almost all hierarchy. Italics are used sparingly in display type for emphasis (`<em>noise</em>`).
- **No exclamation marks.** No emoji. No contractions in primary messaging (okay in short bridge copy: "we don't," "we've").
- **Em dashes** ( — ) are the brand punctuation. Used to isolate counter‑clauses. Example: _"Not a tool. Not a project. A working system."_
- **Three‑beat rhythm** is a recurring pattern. _"Decisions. Execution. Measurable impact."_ / _"Statement. Explanation. Proof."_

### What copy looks like

**Hero pattern** (from live site):

> Commercial Intelligence & Execution System  
> **From _noise_ to signal.**  
> Most commercial decisions are made blind. Not for lack of talent — for lack of a system.  
> We build it. Connecting data, decisions, and execution end‑to‑end. Deployed where the need is greatest. Integrated with what works. Replacing what doesn't.  
> _Not a tool. Not a project. A working system._

**Section header pattern:**

> WHAT WE SOLVE (eyebrow, all caps, letter‑spaced)  
> **Decisions. Execution.** _(serif h2)_  
> **Measurable impact.**  
> Most companies can answer some of these questions.  
> Very few can act on them — consistently, at scale. _(lead)_

**CTA language:** _Book a 30‑min call · See how it works · Explore in depth → · Talk to us_ — never "Get started," "Learn more," "Try for free."

### Framework translation

Internal model is **Arm A → B → C** (Information Infrastructure → Intelligence Layer → Execution & Value Capture). Internal language is allowed, but always pair it with a client‑facing translation ("We structure your data · We generate decision‑ready insights · We help you execute and capture value"). Never leave a user staring at "Arm B" without context.

### Vocabulary to use

commercial intelligence · decision‑making · margin · pricing discipline · trade spend · route‑to‑market · fragmented data · baseline · learning loop · scenario · elasticity · pay‑for‑performance · execution · governance · playbook · KPI tracking · uplift · portfolio · assortment · SKU

### Vocabulary to avoid

unlock · unleash · empower · democratize · supercharge · synergy · AI‑powered · revolutionize · game‑changer · seamless · cutting‑edge · world‑class · best‑in‑class · next‑generation · transform (overused) · disruption · frictionless · delightful

---

## Visual foundations

Rooted in the live codebase. All numeric tokens live in `colors_and_type.css`.

### Color

Palette is intentionally narrow — one navy anchor, one paper neutral, one muted blue‑grey, one restrained green accent. No gradients as focal elements. No semantic reds/ambers/blues for UI states; use tonal variations of navy instead.

| Role | Value | Use |
|---|---|---|
| Navy (anchor) | `#0A1828` | Primary brand color. Dark hero, nav, footer, body text on light. |
| Navy soft | `#1B2A3B` | Alt navy on `how-it-works.html`. Use when `#0A1828` is too heavy. |
| Paper (beige) | `#CFCBC6` | Default light background. **Not white.** Warm, editorial. |
| Paper soft | `#EDEAE4` | Tinted sections, cards on beige. |
| Paper warm | `#F6F4F0` | Even warmer surface (used on `how-it-works`). |
| White | `#FFFFFF` | Card fills on beige. Never a full page background. |
| Slate deep | `#3C4E60` | Secondary surfaces on navy. |
| Slate | `#6F859C` | Eyebrows, captions, secondary links on both surfaces. |
| Slate soft | `#8FA3B8` | Lighter slate — dividers, disabled. |
| Slate mist | `#C8D2DC` | Hairlines, quiet backgrounds on paper. |

**Alpha ramps** on navy (`06/12/20/40/60/80`) and white (`06/12/25/45/65/85`) are used for borders, dividers, and muted text — avoid inventing new hex values; reach for these first.

### Type

- **Display / headings:** Cormorant Garamond (serif) at weight **300** for hero display, **400** otherwise. Italic reserved for emphasis words. Letter‑spacing `-0.01em` on larger sizes.
- **Body / UI:** DM Sans (sans) at weights **400/500/600**. Line‑height `1.65` body, `1.75` leads. Never below 13px except eyebrow (11px).
- **Eyebrow:** 11px DM Sans, 600, `letter‑spacing: .18em`, uppercase, slate‑colored. Always paired with an h2 or h3.
- Strong contrast between heading and body. Do not use serif for body copy. Do not bold heading text.

See `colors_and_type.css` for the full scale and semantic helpers (`.imb-display`, `.imb-h2`, `.imb-eyebrow`, `.imb-lead`, `.imb-quote`).

### Spacing & rhythm

- **8pt base scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 120 px. No arbitrary pixel values.
- **Section padding:** 96–120px desktop, 64px mobile. The site breathes — whitespace is functional, not decorative.
- **Container:** 1140px default, 1280px max. Gutters 36px desktop, 20px mobile.
- **Grids use `gap: 2px`** (not 24px) when cells should read as one table. `gap: 24/40/80px` when cells are parallel but separate.

### Backgrounds

- **No gradients as focal backgrounds.** Subtle radial washes (navy at 15% opacity) are used to add depth to dark heroes — see `.page-hero-bg` in `how-it-works.html`.
- **No repeating patterns or illustrations.** No hand‑drawn anything.
- **No full‑bleed photography** on most surfaces. When imagery _is_ used (sparingly), it's a single strong image per section with a navy overlay to reduce saturation and align the color temperature.
- **Animated canvas noise** on the hero at ~35% opacity is permitted as a brand signature (particle field, very subtle, slow). See `#noiseCanvas` in `index.html`.

### Borders, shadows, corners

- **Radii: 2–4px only.** 6px is the max. Never pill. Never 12px+.
- **Borders:** 1px, usually `rgba(10,24,40,.12)` on light or `rgba(255,255,255,.08)` on dark. Use borders sparingly; prefer negative space to separate sections.
- **Shadows are rare.** A single subtle card‑lift shadow is defined (`0 2px 12px rgba(27,42,59,.10)`) — used only on product previews and modals. Never on buttons.
- **No inner shadows.** No glow. No neon accent lines.

### Cards

Three styles only:

1. **Paper card** — white on beige, 48px padding, 2px colored top border that lights up on hover (slate → navy).
2. **Tinted card** — paper‑soft on beige, same padding, no border.
3. **Dark card** — white‑06 on navy, 1px white‑06 border, white‑45 text.

Cards do **not** use shadow by default. Hover shift is `translateY(-4px)` + top‑border color change. Never scale.

### Motion

- **Opacity fades** and **2–4px transforms** only. No bounces, no spring physics.
- `transition: all` is banned (explicit property list only).
- Durations: `.18s` micro‑interactions, `.22s` hover, `.4s` section reveal on scroll.
- Easing: `cubic-bezier(.2,.8,.2,1)` (ease‑out) for entries, `cubic-bezier(.4,0,.2,1)` (ease‑in‑out) for state toggles.
- A single hero canvas runs a continuous low‑opacity noise animation. No other persistent motion.

### Hover / press states

- **Links:** color brightens (navy → navy‑80, or white‑45 → white) over 200ms. No underline unless inline‑body.
- **Buttons primary:** background darkens slightly (`#fff` → `var(--imb-paper)`). No transform.
- **Buttons outline:** border opacity rises from 22% to 55%, background becomes `rgba(255,255,255,.05)`.
- **Cards:** `translateY(-4px)` + top‑accent color swap.
- **Press:** no dedicated press state on most surfaces. Buttons can use `:active { transform: translateY(1px) }`.

### Transparency & blur

Transparency is used for hierarchy on dark backgrounds (white‑85 → 65 → 45 → 25). **No backdrop blur.** No glassmorphism.

### Imagery color grading

- Real‑world environments (plants, retail, office) are preferred over stock people shots.
- Grade everything toward navy: desaturate to ~70%, add a subtle navy overlay (`rgba(10,24,40,.3)` on light imagery, `rgba(10,24,40,.6)` on anything bright).
- No mixed styles across sections. Pick one register — editorial photo _or_ schematic diagram _or_ product screenshot — and hold it.

### Layout rules

- Left‑to‑right reading. Headlines anchor left; proof/CTA lives right.
- **Negative space is the main decoration.** If a section feels empty, reduce content further — don't add.
- One dominant idea per section. If you need a second idea, make it a second section.
- Asymmetric grids are allowed when they improve hierarchy (5‑col `problem-grid`, 4‑col `impact-grid`, 3‑col `three-arms`).

---

## Iconography

Imberion does **not** use an icon font or an SVG icon system. Instead, it uses **single Unicode geometric glyphs** as decorative markers, drawn in the display serif or in a muted navy‑40.

Examples from the codebase (letter = glyph):

```
◈  ◉  ◧  ⊞  ⊡  ≡  ◌  ◯  ◰   (primary set, arm-b modules)
◈  ◉  ◌  ≈  ⊟  ⊞  ◌  ≡   (arm-b capability grid)
→  ↺  ›                      (inline arrows)
A  B  C                      (numbered arms — display serif)
```

### Rules

- Icons are **never semantic.** They are typographic ornament. The meaning lives in the label beside them.
- Color is `var(--imb-navy-40)` on light, `rgba(255,255,255,.4)` on dark.
- Size: 16–20px inline, 2–3.5rem for "big number" serif ornaments (Arm letter `A`/`B`/`C`, problem number `01`).
- **No emoji. Ever.** Not in product UI, marketing, or docs.
- **No Lucide, Heroicons, Phosphor, Feather, or any other icon library.** If you reach for a pictogram and a Unicode geometric shape won't work, stop and reconsider whether the icon is needed at all.
- **Logo mark** (the sine‑wave‑in‑circle) is the only brand glyph. Use `assets/logos/imberion-signal-*.png` when a monogram is needed.

### Arrows

Use the HTML entities `&rarr;` → and `&larr;` ← or the Unicode `↺` for loops. Inline CTAs end with `→` preceded by a space.

---

## File index

```
Imberion Design System/
├── README.md                          ← this file
├── SKILL.md                           ← agent-skill manifest
├── colors_and_type.css                ← tokens, semantic classes
│
├── reference/                         ← source-of-truth docs (imported from repo)
│   ├── BRAND_GUIDELINES.md
│   ├── DESIGN_SYSTEM.md
│   └── CONTENT_GUIDE.md
│
├── assets/
│   ├── logos/                         ← wordmark, signal mark, favicons (PNG)
│   ├── logos-clientes/                ← representative client logos
│   ├── arm-a-flow.png                 ← product still: data flow
│   └── arm-b-simulator.png            ← product still: pricing simulator
│
├── preview/                           ← design-system cards (registered assets)
│   ├── logo.html
│   ├── colors-primary.html
│   ├── colors-neutrals.html
│   ├── ...
│
└── ui_kits/
    └── marketing-site/                ← recreation of imberion.com
        ├── README.md
        ├── index.html                 ← clickable home screen
        └── *.jsx                      ← Hero, Nav, ArmsGrid, ImpactBand, CTA, Footer
```

---

## Open items / caveats

- **Fonts** are loaded from Google Fonts (Cormorant Garamond + DM Sans). No local TTF/WOFF files were shipped with the repo. If you plan to self‑host for offline use, grab both families from [fonts.google.com](https://fonts.google.com) and drop into `fonts/`.
- The brand guide lists navy as `#1F3347` and a forest green accent, but per client direction **the green is removed** — the live system is navy + paper + slate only. The live navy `#0A1828` is used (deeper and more executive than `#1F3347`). Flag if the softer navy is ever required.
- No slide template exists in the repo, so the `slides/` folder is not populated. A marketing‑site UI kit is provided instead.
