---
name: imberion-design
description: Use this skill to generate well-branded interfaces and assets for Imberion — a Commercial Intelligence & Execution System — either for production or throwaway prototypes, slides, and mocks. Contains essential design guidelines, colors, type, fonts, assets, and a marketing-site UI kit for prototyping. Brand voice is editorial, premium, restrained ("top-tier consulting, not SaaS startup").
user-invocable: true
---

Read `README.md` inside this skill first, then explore the other files:

- `colors_and_type.css` — tokens, type scale, semantic helpers (`.imb-eyebrow`, `.imb-h2`, `.imb-lead`, `.imb-quote`).
- `reference/` — the three source-of-truth docs: `BRAND_GUIDELINES.md`, `DESIGN_SYSTEM.md`, `CONTENT_GUIDE.md`.
- `assets/logos/` — wordmark (navy/white/solid), signal-only mark, favicons. **Do not draw these.** Always `<img>` them.
- `ui_kits/marketing-site/` — a pixel-accurate recreation of imberion.com. Start here when building new pages; copy components and strip or extend as needed.
- `preview/*.html` — design-system cards (one concept per card: colors, type specimens, buttons, cards, section patterns).

### How to use this skill

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets you need out and produce static HTML that links `colors_and_type.css`. Keep the system narrow:

1. **Navy `#0A1828` is the anchor. Beige `#CFCBC6` is the default light background — not white.** Slate `#6F859C` carries all support text; there is no green accent.
2. **Cormorant Garamond (serif, weight 300/400) for headings; DM Sans for everything else.** Italics sparingly in display type.
3. **Eyebrow → serif headline → lead paragraph → body** is the canonical section rhythm. Use it liberally.
4. **Radii 2–4px. No shadows on buttons. No gradients. No emoji. No Lucide/Heroicons.** Unicode geometric glyphs (◈ ◉ ◧ ⊞ ◌ ◯) are the only permitted "icons."
5. **Copy reads like consulting:** three-beat rhythm, em dashes, no exclamation marks, no SaaS buzzwords. _"Not a tool. Not a project. A working system."_

If working on production code, read `reference/DESIGN_SYSTEM.md` for layout/component rules and `reference/BRAND_GUIDELINES.md` for logo/color/tone specifics.

### When invoked with no guidance

Ask the user what they want to build, what industry context it serves (industrial, CPG, services — the brand adapts language and imagery, not visuals), and how many variations they want. Then act as an expert designer who outputs HTML artifacts or production code, depending on the need.

### Hard rules (from the repo's own CLAUDE.md)

- No filler sections.
- No new brand direction.
- No generic SaaS defaults.
- Do not use `transition: all`.
