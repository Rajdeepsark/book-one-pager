---
version: alpha
name: Portfolio Final Final — Playful Editorial
description: Book landing page in the style of fedor.design/product-design-portfolio-book. Clean white canvas, heavy Manrope headlines, one loud orange CTA, and "physical objects" (book, sticky notes, paper letter) that carry the personality.
source: https://fedor.design/product-design-portfolio-book (Framer; values extracted from the live CSS, Oct 2026)
colors:
  primary: "#FE5101"          # CTA buttons, orange bento card
  accent: "#ED5A2B"           # inline text emphasis ("So you can finally land your dream job.")
  ink: "#242323"              # headings — warm near-black, never pure #000
  text: "#333333"             # body copy, review text
  muted: "#5B5858"            # roles, captions, nav
  label: "rgba(36, 35, 35, 0.7)"  # uppercase eyebrows ("ALSO AVAILABLE ON")
  lead-in: "#A5A5A5"          # grey heading that introduces a list
  surface: "#FFFFFF"          # page background
  surface-warm: "#F7F6F4"     # pricing / bundle cards
  surface-soft: "#FAFAFA"     # bento feature cards
  border: "rgba(0, 0, 0, 0.08)"
  toc-blue: "#0799FF"         # table-of-contents panel
  success: "#0DBF80"          # active step indicator
  sticky-yellow: "#FFE780"
  sticky-blue: "#BEEAFB"
  sticky-green: "#C5FFB5"
typography:
  display:          # hero H1
    fontFamily: "Manrope"
    fontSize: "42px"            # tablet 30px/36px, mobile 32px/38px
    fontWeight: 800
    lineHeight: "51px"
    letterSpacing: "-0.03em"
    color: "{colors.ink}"
  headline-section: # "Who this book is for", "What readers are saying"
    fontFamily: "Manrope"
    fontSize: "24px"            # tablet 21px, mobile 20px
    fontWeight: 800
    lineHeight: "32px"
    letterSpacing: "-0.02em"
  headline-card:    # bento card titles
    fontFamily: "Manrope"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Manrope"
    fontSize: "13px"
    fontWeight: 700             # small text is bold-ish, not light
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Manrope"
    fontSize: "12px"
    fontWeight: 600
    textTransform: uppercase
    color: "{colors.label}"
  button:
    fontFamily: "Manrope"
    fontSize: "12px"
    fontWeight: 800
    textTransform: uppercase
  quote:            # featured testimonial
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "30px"
  serif-letter:     # author's letter
    fontFamily: "Lora"
    fontSize: "20px"            # mobile 18px
    fontWeight: 400
    lineHeight: 1.5
  serif-toc:        # chapter titles in the TOC panel
    fontFamily: "Lora"
    fontSize: "18px"
    fontWeight: 700
rounded:
  sm: 8px          # screenshots, small media
  md: 12px
  lg: 16px         # bento + review cards
  xl: 24px
  pill: 300px      # every button, avatars, chips
spacing:
  container: 1040px
  container-wide: 1200px
  grid-gap: 16px-20px
  card-padding: 24px
  section: 80px-120px
  breakpoints: "desktop ≥1200, tablet 810–1199, mobile <810"
shadows:
  flat: none                                     # cards
  hairline: "0 1px 2px rgba(0,0,0,0.05)"
  object: "layered 8-step shadow, e.g. 0 1px 1px -0.2px #00000017 … 0 46px 83px -1.75px #00000029"  # book, paper, sticky notes, secondary button
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 48px"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "#3B3B3B"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    shadow: "{shadows.object}"
  bento-card:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.lg}"
    padding: "24px 24px 0"     # title on top, image bleeds off the bottom edge
  review-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: "20px"
  pricing-card:
    backgroundColor: "{colors.surface-warm}"
    rounded: "{rounded.lg}"
  sticky-note:
    backgroundColor: "{colors.sticky-yellow} | {colors.sticky-blue} | {colors.sticky-green}"
    rounded: 0
    rotate: "-5deg … 3deg"
    shadow: "{shadows.object}"
  toc-panel:
    backgroundColor: "{colors.toc-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.lg}"
---

# Portfolio Final Final — Playful Editorial

## Overview
A product landing page that looks like a clean design tool canvas with real objects dropped onto it. The layout and type are disciplined and almost corporate. The personality comes from props: a book cover with a Figma-style selection box around the title and a marker scribble through "Final", tilted sticky notes, and a stack of paper with a serif letter and handwritten signature. The page itself stays white and calm, and the objects are the only things that look physical.

## Colors
- **Orange #FE5101** is the only loud color. It's used for every buy button and for one hero bento card. A second orange, #ED5A2B, is for inline text emphasis.
- **Ink #242323** is used for headings, never pure black. Body text is #333 and secondary text is #5B5858.
- **Neutral surfaces** step down slightly: white page, #FAFAFA bento cards, #F7F6F4 pricing cards. There are no dark sections.
- **One saturated panel:** the table of contents sits on bright blue #0799FF with white text. It's the only other big block of color.
- **Pastels appear only on sticky notes:** yellow, blue and green.

## Typography
- **Manrope does most of the work.** Headlines are heavy (800) with tight negative tracking. Small text is also fairly heavy (600–700), which keeps it crisp at 12–13px.
- **Lora (serif) is used in two places only:** the author's letter and the chapter titles. That switch makes those sections feel like printed pages.
- **Uppercase is limited to tiny 12px eyebrows and button labels.**
- **The grey lead-in pattern:** a grey heading ("In this book, you'll learn how to") followed by a checklist of dark headings, ending on an orange payoff line.

## Layout
- **Container:** single centered column, about 1040px wide on desktop.
- **Section order:**
  1. Hero: book cover on the left; headline, subtitle, CTAs and an Amazon rating on the right.
  2. Social proof: avatar stack plus a greyscale logo row.
  3. Featured quote card.
  4. Checklist.
  5. Bento grid: 2-column, then the full-width TOC panel, then 1/3 + 2/3 rows, then three columns.
  6. "Who this book is for" sticky notes.
  7. Author: photo and bio on the left, paper letter on the right.
  8. Masonry testimonials in three columns.
  9. Pricing: two cards.
  10. Bundle.
- **Bento cards:** the title sits at the top center, and the image bleeds off the bottom edge.
- **Spacing:** generous vertical space between sections (80–120px) and tight gaps between cards (16–20px).
- **Breakpoints:** 1200px and 810px.

## Elevation & Depth
There are two kinds of depth, and they should not be mixed:
- **Interface elements are flat.** Cards are flat fills or have a hairline border.
- **Physical objects get a soft, layered, realistic shadow.** This covers the book, paper, sticky notes and the white secondary button.

## Shapes
- **Pill (300px radius):** all buttons and avatars.
- **16px radius:** cards.
- **Square corners, rotated a few degrees:** sticky notes and paper.

## Do's and Don'ts
- Do repeat the orange buy button: in the nav, the hero, and pricing.
- Do use real artifacts (cover, pages, checklists, screenshots) as card imagery instead of icons.
- Do add handmade touches: scribbles, tilted notes, a signature, a selection box.
- Don't use pure black or light-weight headlines. Headings should be heavy and warm-black.
- Don't put shadows on cards or add a second accent color to the UI chrome.
- Don't use the serif outside the letter and the TOC.
