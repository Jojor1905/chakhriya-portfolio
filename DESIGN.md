---
name: Chakhriya Korada Portfolio
description: A cinematic editorial system for a product-design and creative-technology portfolio.
colors:
  background-dark: "#101B18"
  background-light: "#F5F0E4"
  surface: "#FFFDF8"
  surface-muted: "#E8E3D7"
  text-dark: "#202522"
  text-light: "#F8F4EA"
  text-muted: "#627069"
  accent: "#657141"
  accent-strong: "#4A5530"
  accent-light: "#AEB98B"
  border: "#D3D3C8"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3.5rem, 7.3vw, 7.8rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  h1:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  h2:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  h3:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
  lead:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.04em"
  caption:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  control: "4px"
  surface: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "clamp(72px, 10vw, 144px)"
components:
  button-primary:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.background-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
  content-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.surface}"
    padding: "clamp(20px, 3vw, 40px)"
---

# Design System: Chakhriya Korada Portfolio

## Overview

**Creative North Star: “The Studio Field Notes”**

This portfolio opens like a composed studio plate, then moves into a calm paper-based record of work, learning, and contribution. It is personal without becoming informal, and technical without adopting generic AI-product tropes. The dark field establishes focus; the warm ivory body gives evidence room to breathe.

The experience is for recruiters and hiring teams reviewing a designer and creative technologist. It should make Chakhriya’s work feel considered, legible, and human before asking visitors to explore case studies.

## Colours

All colours are semantic CSS custom properties. Never introduce a second accent family.

- `--background-dark` is the deep ink green-black field used for the Hero and Footer.
- `--background-light` is the warm ivory page field.
- `--surface` and `--surface-muted` are the reading and transition layers.
- `--text-dark`, `--text-light`, and `--text-muted` govern legible hierarchy.
- `--accent`, `--accent-strong`, and `--accent-light` are shades of one muted olive annotation family.
- `--border` is a quiet stone structural line.
- `--shadow-soft` is the only elevation token: a broad, low-opacity, downward shadow used selectively for imagery and skills surfaces.

Muted olive marks action, active navigation, short labels, and small moments of direction. It never carries long paragraphs or turns a light section into a decorative colour field.

## Typography

**Instrument Serif** is a display instrument: Hero H1 and rare, oversized editorial statements only. It is never used for navigation, cards, labels, controls, dense metadata, or body copy. The desktop Hero display uses `clamp(3.85rem, 7.3vw, 7.8rem)` and reduces to `clamp(3.5rem, 16vw, 5.15rem)` on narrow screens.

**IBM Plex Sans** carries every interface task: navigation, headings after the Hero, buttons, project metadata, cards, and reading copy. Its compact, precise character keeps the portfolio technical and clear.

Display type uses responsive `clamp()` sizing, compact line-height, and negative tracking only at large scale. Body copy stays close to 65–75 characters per line and never relies on a fixed-height container.

## Hero treatment

The Hero is a full-height powder-blue sky composition. Editorial copy lives on the left, and the existing portrait takes the right as the human evidence of the portfolio. The atmosphere stays open behind the heading and portrait, with the denser cloud forms entering from the upper edge and outer right.

The background uses the local `luxury-clouds.mp4` asset through a reusable `SkyAtmosphere`, with a soft pale-blue and white readability overlay, a transparent local foreground cloud asset, and a static powder-blue fallback. No stock imagery, canvas, WebGL, external assets, contour lines, abstract geometry, or decorative copy belong in this layer. The video autoplays inline without controls and is hidden for reduced-motion contexts, which retain the static composition and foreground cloud.

## Components and surfaces

- Header: dark while the home Hero is visible, then light for the ivory document; route pages are light throughout. It remains simple, legible, and keyboard visible.
- Buttons: 4px corners, 44px minimum touch height, olive-filled primary action, and a precise outlined secondary action.
- Projects: image-led, open compositions with no default media border; the selected-work region uses soft stone as its transition field.
- Skills: borderless paper surfaces with the single soft elevation token. Do not nest more card treatments inside them.
- Activities: alternating media-and-text evidence layouts remain intact; the dark alternate activity uses the ink field rather than a separate accent colour.
- Certificates: retain the accessible carousel controls and smooth scroll, with restrained transitions only.
- Footer: a full-width dark closing field that mirrors the Hero without duplicating it.

## Layout and responsive behaviour

Desktop uses a spacious editorial grid with asymmetry concentrated in the Hero and selected work. Mobile preserves document order: Hero copy, actions, scroll cue, then portrait. It never hides core content, requires hover, or permits decorative typography to create horizontal overflow.

At narrow widths the Hero switches to one column, reduces decorative scale, disables pointer movement, keeps actions comfortably tappable, and preserves the portrait’s natural crop. The system is tested from 320px upward and uses clamp-based spacing rather than device-specific compositions.

## Motion

Motion is brief, purposeful, and off by default for reduced-motion preferences.

- The Hero heading reveals through masked lines; subtitle and actions fade upward; the portrait enters with a subtle scale.
- Major sections reveal on scroll via the existing `Reveal` component.
- Project imagery receives a small scale response only for fine-pointer hover.
- Divider lines animate once as they enter view.
- Certificate navigation uses native smooth scrolling, falling back to instant movement when reduced motion is requested.

No bouncing, spinning, continuous floating, scroll hijacking, custom cursor, or full-page parallax is permitted.

## Do’s and don’ts

### Do

- Lead with real portfolio evidence and existing imagery.
- Use dark surfaces strategically: Hero, Footer, and selected dark activity evidence only.
- Let whitespace, crop, scale, and type carry premium character.
- Keep semantic structure, visible focus, meaningful alternative text, and strong contrast intact.
- Use one original code-native contour shape as atmosphere, not illustration.

### Don’t

- Copy reference-site layouts, branding, content, imagery, or code.
- Reintroduce the previous burgundy accent or any competing brass/neon colour.
- Use glassmorphism, visual clutter, generic AI graphics, decorative gradients, or nested card stacks.
- Put dense interface content in Instrument Serif.
- Animate every paragraph, rely on hover for content, or add background video.
