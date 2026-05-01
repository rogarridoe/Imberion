# Imberion Web Textures

Generated using the live Imberion visual system:
- Navy anchor: #0A1828
- Deep navy: #06101C
- Warm paper: #F6F4F0 / #CFCBC6
- Muted slate support tones

Recommended usage:
1. `01_noise_to_signal_dark.png` — hero, dark section intros, final CTA.
2. `02_paper_navy_veil.png` — editorial sections with text over light/paper side.
3. `03_white_data_grain.png` — capability cards, modules, white content bands.
4. `04_diagonal_section_divider.png` — transition/divider between dark and light sections.

Suggested CSS:
```css
.texture-hero {
  background-image: linear-gradient(rgba(6,16,28,.18), rgba(6,16,28,.18)), url('/assets/textures/01_noise_to_signal_dark.png');
  background-size: cover;
  background-position: center;
}

.texture-paper-veil {
  background-image: url('/assets/textures/02_paper_navy_veil.png');
  background-size: cover;
  background-position: center;
}

.texture-data-field {
  background-image: url('/assets/textures/03_white_data_grain.png');
  background-size: cover;
  background-position: center;
}

.texture-divider {
  background-image: url('/assets/textures/04_diagonal_section_divider.png');
  background-size: cover;
  background-position: center;
}
```
