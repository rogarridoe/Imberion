# Imberion — Marketing Site UI Kit

Pixel-level recreation of the Imberion marketing site, assembled from the design system tokens in `../../colors_and_type.css` and the live CSS in the Imberion repo.

## What's in here

`index.html` — full single-page recreation with live interactions:
- Fixed navy navigation + EN/ES/PT language toggle (clickable)
- Editorial serif hero on navy ("From noise to signal")
- Client logo band
- "What We Solve" — 5-column bordered problem grid
- "How It Works" — closed decision loop (4 stages) on navy-soft
- "Nine Analytical Modules" — 3×3 bordered grid
- Impact band — 4 stats on navy-deep
- Industries — tabbed panels (CPG / Industrial / Services / Retail)
- Editorial quote on paper-soft
- Final CTA on navy-deep
- Footer with 4-column link structure

## Component patterns

| Pattern | Where | Notes |
|---|---|---|
| `.nav` | top bar | 68px · navy/94 w/ blur · white-06 border |
| `.hero` | header | 160px top padding · serif 300 · italic emphasis |
| `.sec-label` | all sections | 10px 600 · 0.18em tracking · 24px line |
| `.sec-h` | all sections | serif 400 · em for accent · 780px max |
| `.btn-primary` / `.btn-outline` / `.btn-dark` / `.btn-light-outline` | everywhere | 4px radius · no pills · 12px 22px |
| `.problem .grid` · `.modules .grid` | 5-col / 3-col | 1px navy-12 borders, hover navy-06 |
| `.how .loop` | 4-col steps on dark | 2px slate top rule, white-06 spacer |
| `.impact .stats` | 4 stat cells | serif 300 numerals in slate on navy |
| `.industries .tabs` | switcher | underline only, 2px navy border |

## Design decisions

- **No icon library.** Unicode geometric glyphs (◈ ◉ ◧ ⊞ ⊡ ◌ ◯ ◰ ≡) used as numerals in the module grid — subtle, structural, deliberately non-semantic.
- **Single accent.** There is no green. The palette is navy + paper + slate; emphasis comes from serif italics, weight, and composition — not from color. Keep it that way.duct views.
- **No imagery in the hero.** Per brand rules, the hero leans on typography + palette rather than stock imagery. Real environmental photography (industrial plants, retail floors, back-offices) would sit in a dedicated "Industries" sub-page, one strong image per sub-section.
- **Interactions** are confined to nav, language toggle, and industry tabs — no carousels, no auto-advance, no modals.

## Known placeholders / caveats

- Client logos are real (carried over from the Imberion repo) but some may be subject to partnership review before public use.
- Quote is illustrative — the live site should swap in a named, verifiable voice.
- "Approach" sub-page is not built — the footer link is a placeholder.
- Hero could accept one grounded, monochrome environmental image behind the serif wordmark; held back here to keep the surface quiet per brand rules.
