# Imberion Texture System v2 — usage guide

## Core principle
Do not use one repeated background across the entire page. Use a small family of related textures so the site feels editorial and bespoke, while still staying recognizably Imberion.

## Recommended assignment

1. Hero
   File: 01_hero_dust_navy.png
   Class: .hero / .hero-section
   Reason: keep the background quiet. The existing animation should create the signal.

2. Light / white content sections
   File: 03_white_editorial_grain.png
   Class: .section-white or .bg-white-textured
   Use when the section is mostly white and currently feels flat.

3. Warm paper sections
   File: 02_paper_grain_visible.png
   Class: .section-paper
   Use for broad editorial sections, testimonials, text-heavy explanations.

4. Strategic transition / “how it works”
   File: 04_directional_signal_light.png
   Class: .section-signal-light
   Use once or twice only.

5. “Why Imberion” / conceptual sections
   File: 05_radial_focus_paper.png
   Class: .section-focus
   Use where you want a visual center of gravity.

6. Dark premium sections
   File: 06_dark_editorial_flow.png
   Class: .section-dark-flow
   Use for a strong chapter break, methodology, or impact section.

7. Dark data / intelligence sections
   File: 07_dark_signal_field.png
   Class: .section-dark-signal
   Use sparingly, ideally one section only.

8. Split-layout sections
   File: 08_left_panel_mist.png or 09_right_panel_mist.png
   Class: .section-left-panel / .section-right-panel

9. Use-case / commercial intelligence sections
   File: 10_gridless_data_haze.png
   Class: .section-data-haze

`04_diagonal_section_divider.png` — transition/divider between dark and light sections.

## Claude Code implementation prompt

Copy the PNGs into:
assets/textures/

Copy imberion-textures-v2.css into:
assets/css/imberion-textures-v2.css

Then import it after the main brand CSS:
<link rel="stylesheet" href="/assets/css/imberion-textures-v2.css">

Update section classes as follows:
- Hero: use hero dust only. Remove any stronger background pattern from the hero.
- Do not repeat the same texture in adjacent sections.
- Use white editorial grain on white sections so they stop looking flat.
- Use directional signal light in only one transition section.
- Use dark editorial flow in one high-emphasis section.
- Preserve Imberion’s existing typography, spacing, colors, and animations.
- Do not introduce green, cyan, neon, star fields, circuit-board lines, literal arrows, or sci-fi UI patterns.
- Keep all textures low-contrast and editorial.

Rule of thumb:
If a background is noticeable before the content, it is too strong.
If a white background looks like plain #fff on a real screen, it is too weak.
