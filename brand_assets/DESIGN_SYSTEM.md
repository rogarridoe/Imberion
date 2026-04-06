# DESIGN_SYSTEM.md — Imberion

## Purpose
This file defines the web design system for Imberion.

The system should help produce pages that feel:
- clear
- premium
- strategic
- restrained
- highly legible

The system should reduce visual noise and cognitive load.

---

## Core Principles
1. clarity first
2. one dominant idea per section
3. fewer components, better chosen
4. typography before decoration
5. whitespace is functional
6. hierarchy must be obvious
7. avoid generic SaaS patterns by default

---

## Grid and Layout
### Page Width
Recommended max-width:
- `1200px` to `1280px`

### Layout Structure
- use a clean grid
- not every section needs the same symmetry
- asymmetry is allowed when it improves hierarchy
- avoid mechanical repetition

### Section Spacing
Recommended vertical rhythm:
- `80px` to `120px` between major sections
- reduce on mobile as needed

### Inner Spacing
Use a consistent spacing scale such as:
- 8
- 16
- 24
- 32
- 48
- 64
- 96

Avoid random spacing values unless truly necessary.

---

## Page Rhythm
Pages should not feel like a stack of interchangeable boxes.

Preferred rhythm:
- statement
- explanation
- proof
- next step

A good page alternates between:
- open sections
- structured sections
- proof / credibility moments
- CTA moments

Avoid repeating the exact same section pattern too many times.

---

## Hero Section
### Purpose
The hero must make the business legible immediately.

### Hero must answer
- what this is
- why it matters
- what to do next

### Rules
- clear headline
- short supporting subhead
- clear CTA
- strong hierarchy
- no visual clutter
- avoid leading with abstraction alone

### Avoid
- vague positioning with no explanation
- overcrowded hero layouts
- unnecessary interface decoration
- multiple competing CTAs

---

## Navigation
### Purpose
Simple orientation and action.

### Rules
- keep navigation short
- logo should be easy to see
- one primary CTA max
- avoid too many links

### Avoid
- overloaded nav
- too many actions
- decorative nav elements

---

## Section Types
### 1. Statement Section
Use for strong positioning or transition moments.

Characteristics:
- large heading
- minimal supporting copy
- open layout
- high typographic emphasis

### 2. Explanation Section
Use when introducing process, value, or context.

Characteristics:
- short paragraphs
- scannable structure
- obvious hierarchy

### 3. Proof Section
Use for:
- credibility
- client fit
- outcomes
- evidence

### 4. CTA Section
Use to move the user forward clearly.

Characteristics:
- clear action
- minimal noise
- strong contrast
- direct language

---

## Cards
Cards should be used selectively.

### Use cards when
- grouping truly parallel items
- improving scanability
- comparing related concepts
- presenting structured proofs or offers

### Avoid cards when
- open layout would communicate better
- cards are being used as a default habit
- too many equally weighted boxes flatten hierarchy

### Card Style
- restrained borders
- subtle background contrast
- minimal shadow
- calm spacing
- clear heading/body separation

Avoid:
- flashy hover effects
- heavy elevation
- noisy badges
- excessive card grids

---

## Typography System
### Heading Style
- serif for major display moments if aligned with brand
- large enough to create real contrast
- elegant, not bulky

### Body Style
- sans-serif
- readable line-height
- moderate line length
- calm paragraph spacing

### Hierarchy Rules
- H1 should dominate clearly
- H2 should structure the page
- supporting text should never compete with headings
- labels and UI text should be small but legible

### Avoid
- too many heading levels in one section
- flattening all type sizes
- dense text walls
- excessive bold emphasis

---

## Color Application
### Rules
- navy anchors the system
- neutrals provide breathing room
- green is a restrained accent
- use muted greys for secondary information
- color should support hierarchy and clarity

### Avoid
- using accent colors everywhere
- decorative gradients by default
- default framework colors
- color used without semantic purpose

---

## Buttons
### Principles
Buttons must feel clear and premium.

### Recommended
- one strong primary button per major moment
- secondary actions should be visibly secondary
- readable size
- restrained radius
- clear hover and focus states

### Avoid
- too many primary buttons
- oversized pill buttons unless clearly intentional
- loud glow effects by default
- decorative motion with no UX value

---

## Links
Links should be obvious but calm.

Recommended:
- underline on hover
- subtle color distinction
- readable contrast

Avoid:
- low-contrast invisible links
- gimmicky link animations
- over-styled inline links

---

## Motion
Motion should support clarity, not distract from it.

### Allowed
- opacity fades
- transform transitions
- subtle reveals
- gentle hover motion
- restrained background motion

### Avoid
- constant motion
- flashy entrance effects
- over-animated interfaces
- distracting loops
- `transition-all`

### Rule
If motion makes the content harder to read, remove it.

---

## Imagery and Graphics
Use only when they help:
- explain
- support
- signal quality
- reinforce the brand

Avoid decorative imagery that adds no meaning.

---

## Responsiveness
### Mobile Rules
- preserve headline clarity
- maintain spacing rhythm
- reduce clutter
- stack content cleanly
- keep CTA visible and obvious

Avoid simply shrinking desktop layouts without rethinking hierarchy.

---

## Anti-Generic Rules
Do not default to:
- generic feature grids
- endless testimonial sections
- startup-style statistic blocks everywhere
- random glowing UI
- fake dashboards
- design patterns that could belong to any AI tool

The site must feel specific to Imberion.

---

## Review Questions
Before finalizing a page or section, ask:
- Is the main point obvious on first scan?
- Is the hierarchy clear?
- Can anything be removed?
- Is the section too card-heavy?
- Does it feel premium and deliberate?
- Does it reduce or increase cognitive load?