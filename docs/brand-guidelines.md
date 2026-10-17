# Realtor-Go Brand Guidelines (2026)

Comprehensive brand identity and design system specifications for **Realtor-Go**.

---

## 1. Brand Overview

Realtor-Go pairs deep technical precision with a calm, modern identity. The brand system is built around high-contrast minimalism, purposeful typography, and a distinct geometric mark.

---

## 2. Logo System

### 2.1 Main Logo
The **Realtor-Go** logo combines a custom letterform with a radiating geometric mark. The symbol reads as a "K" / compass star from multiple angles, giving it a distinct, ownable identity that remains recognizable at any size.
- **Primary Lockup:** Horizontal lockup containing the icon mark alongside the `Realtor Go` wordmark.
- **Usage:** This is the primary brand lockup and should be used wherever space allows.

### 2.2 Logo Variations
Three lockups are provided to accommodate all layouts:

| Variation | Layout Description | Recommended Usage |
| :--- | :--- | :--- |
| **Horizontal Logo** | Symbol to the left of `Realtor Go` wordmark | Headers, navigation bars, and wide horizontal layouts |
| **Vertical Logo** | Symbol centered above `Realtor Go` wordmark | Centered layouts, square cards, and splash screens |
| **Logo Symbol** | Standalone radiating geometric mark | Favicons, app icons, browser tabs, and profile avatars |

### 2.3 Safe Zone & Clear Space
- **Rule:** A minimum clear space must be maintained around the logo at all times.
- **Padding:** Equal to the full height of the icon.
- **Restriction:** Never place text, secondary graphics, borders, or layout edges within this exclusion zone.

### 2.4 Logo on Backgrounds & Contrast
The logo is designed to hold strong contrast across light, dark, and brand-colored surfaces:
- Always select the logo colorway that maintains maximum contrast with the background.
- **Pine Teal / Onyx surfaces:** Use off-white (**Mint Cream**) or accent (**Palm Leaf**) marks.
- **Mint Cream / Light surfaces:** Use dark (**Pine Teal** or **Onyx**) marks.
- **Palm Leaf surfaces:** Use dark (**Pine Teal** / **Onyx**) or light (**Mint Cream**) marks.
- **Avoid:** Placing the mark on tones too close to its own color, as this diminishes legibility.

---

## 3. Brand Colors

The color palette pairs deep teal and near-black with a muted olive accent and a soft off-white base.
- **Pine Teal** and **Onyx** carry the primary weight across most applications.
- **Palm Leaf** is used sparingly for accents and strategic emphasis.
- **Mint Cream** provides the soft, clean foundational canvas.
- Together, they keep the brand calm and technical without feeling flat.

### Color Palette Specifications

| Color Name | Role | HEX | RGB | Preview |
| :--- | :--- | :--- | :--- | :--- |
| **Pine Teal** | Primary Dark / Brand Base | `#1C3D36` | `rgb(28, 61, 54)` | `■` |
| **Onyx** | Near-Black / Text & Structure | `#0A1511` | `rgb(10, 21, 17)` | `■` |
| **Palm Leaf** | Accent / Highlight & Emphasis | `#A9AC5B` | `rgb(169, 172, 91)` | `■` |
| **Mint Cream** | Base Surface / Light Background | `#EAF0EC` | `rgb(234, 240, 236)` | `■` |

---

## 4. Typography

The typography system combines an editorial serif for headings with a contemporary, highly legible grotesque for all other text. Both fonts are served from Google Fonts via Next.js (`next/font/google`) with exactly 1 fallback font.

### 4.1 Headings & Display Typeface: Playfair Display
- **Role:** Headings (`h1`–`h4`), display numbers, emphasized brand statements, and wordmarks.
- **Provider:** Google Fonts via `next/font/google` (`Playfair_Display`).
- **Fallback:** `serif` (single fallback).
- **Purpose:** Adds an elegant, authoritative, editorial presence to headings and hero statements.

### 4.2 Body & General Text Typeface: Schibsted Grotesk
- **Role:** All other text—including body copy, paragraphs, buttons, navigation links, UI badges, labels, and forms.
- **Provider:** Google Fonts via `next/font/google` (`Schibsted_Grotesk`).
- **Fallback:** `sans-serif` (single fallback).
- **Purpose:** Delivers modern Scandinavian grotesque clarity, high legibility across screens, and clean UI aesthetics.

---

## 5. Implementation & Digital Applications

### 5.1 Standalone Symbol Sizing
- The standalone radiating symbol is optimized to retain crisp legibility down to **16px**.
- Intended for favicons, app icons, and browser tab indicators.

### 5.2 Theme Adaptations
- **Light Theme:**
  - Background: Mint Cream (`#EAF0EC`)
  - Typography & Logo: Onyx (`#0A1511`) or Pine Teal (`#1C3D36`)
  - Accent: Palm Leaf (`#A9AC5B`)
- **Dark Theme:**
  - Background: Onyx (`#0A1511`) or deep Pine Teal (`#1C3D36`)
  - Typography & Logo: Mint Cream (`#EAF0EC`)
  - Accent: Palm Leaf (`#A9AC5B`)

---

## 6. CSS Tokens Reference

```css
:root {
  /* Brand Palette */
  --color-pine-teal: #1C3D36;
  --color-palm-leaf: #A9AC5B;
  --color-onyx: #0A1511;
  --color-mint-cream: #EAF0EC;

  /* Typography (Google Fonts via next/font/google with single fallback) */
  --display: var(--font-display), serif;
  --body: var(--font-body), sans-serif;
}
```
