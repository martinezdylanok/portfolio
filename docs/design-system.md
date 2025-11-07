# Design System Documentation

**Aesthetic:** Swiss Grid + Brutalism  
**Philosophy:** Precision meets boldness. Clean structure with raw edges.

---

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Shapes & Borders](#shapes--borders)
4. [Animations](#animations)
5. [Component Patterns](#component-patterns)
6. [Code Conventions](#code-conventions)

---

## Color System

### Available Palettes

#### 1. **Sky** (Default) — Blue/Lavender
Soft, approachable, current design

#### 2. **Concrete** — Gray/Orange  
Professional, bold, brutalist

### Switching Palettes

Update the `data-palette` attribute on `<html>`:

```tsx
// In your theme provider or main component
document.documentElement.setAttribute('data-palette', 'concrete');
```

### Semantic Color Tokens

**⚠️ ALWAYS use semantic names in components. NEVER use hex values or palette names directly.**

#### Backgrounds
```tsx
bg-bg-page        // Main page background
bg-bg-section     // Section containers
bg-bg-card        // Card/list item backgrounds
bg-bg-card-hover  // Hover state for interactive elements
bg-bg-overlay     // Translucent overlays (modals, tooltips)
```

#### Text
```tsx
text-text-heading  // Large headings, titles
text-text-body     // Body text, paragraphs
text-text-muted    // Secondary text, captions
text-text-accent   // CTAs, links, emphasis
```

#### Borders
```tsx
border-border-default  // Standard borders
border-border-subtle   // Minimal borders
border-border-strong   // Emphasis borders
```

### Usage Examples

```tsx
// ❌ BAD: Hardcoded colors
<div className={`${mode === "light" ? "bg-[#ABC4FF]" : "bg-[#EDF2FB]"}`}>

// ✅ GOOD: Semantic tokens
<div className="bg-bg-page">

// ❌ BAD: Palette names
<div className="bg-palette-primary">

// ✅ GOOD: Semantic tokens with context
<div className="bg-bg-card hover:bg-bg-card-hover">
```

### Current Color Values

#### Sky Palette (Light Mode)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-page` | `#ABC4FF` | Main background |
| `--bg-section` | `#EDF2FB` | Sections |
| `--bg-card` | `#D7E3FC` | Cards |
| `--text-heading` | `#EDF2FB` | Headings |
| `--text-accent` | `#ABC4FF` | Accents |

#### Concrete Palette (Light Mode)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-page` | `#F7F7F7` | Main background |
| `--bg-section` | `#FFFFFF` | Sections |
| `--text-heading` | `#2C3E50` | Headings |
| `--text-accent` | `#FF5722` | CTAs, links |

---

## Typography

### Font Families

```tsx
font-hanken-grotesk  // Primary — body, UI
font-host-grotesk    // Secondary — display, special
```

### Type Scale

Swiss Grid principles: Use a modular scale, maintain rhythm.

```tsx
text-[200px]  // Hero/Display (PROJECT text)
text-[160px]  // Section headers
text-[80px]   // Subheadings
text-4xl      // Large headings
text-2xl      // Medium headings
text-xl       // Small headings
text-base     // Body text
text-sm       // Captions, secondary
text-xs       // Fine print
```

### Type Rules

1. **Bold for impact** — Use `font-bold` liberally for Swiss clarity
2. **Leading (line-height)** — Tight leading (`leading-none`, `leading-tight`) for brutalist feel
3. **Tracking** — Normal spacing, avoid excessive letter-spacing
4. **Hierarchy** — Clear size jumps, no subtle differences

---

## Shapes & Borders

### Border Radius Scale

**Philosophy:** Minimal rounding. Brutalism favors sharp edges.

```tsx
rounded-none    // 0px — Pure brutalism, section containers
rounded-xs      // 2px — Minimal softening (rare)
rounded-sm      // 4px — Form inputs, subtle elements
rounded (DEFAULT) // 4px — Most interactive elements
rounded-md      // 6px — Rare, special cases
rounded-lg      // 8px — Reserved for modals/overlays
rounded-full    // Pills, avatars, icons
```

### Component Shape Rules

| Component Type | Border Radius | Rationale |
|----------------|---------------|-----------|
| Page sections | `rounded-none` | Full-width, structural |
| Cards/List items | `rounded-sm` | Subtle, functional |
| Buttons | `rounded-sm` | Clickable, clean |
| Form inputs | `rounded-sm` | Standard forms |
| Modals/Dialogs | `rounded-lg` | Elevated, special |
| Hover cards | `rounded-lg` | Emphasis, floating |
| Images (decorative) | `rounded-sm` or `rounded-none` | Context-dependent |
| Icons/Avatars | `rounded-full` | Small graphics |

### Border Width

```tsx
border      // 1px — Default
border-2    // 2px — Standard emphasis
border-3    // 3px — Brutalist chunky
border-4    // 4px — Strong emphasis
border-5    // 5px — Section dividers
border-8    // 8px — Ultra bold (rare)
```

**Brutalist Rule:** Don't be afraid of thick borders. Use `border-3` or `border-4` for visual weight.

---

## Animations

### Transition Timing

**Brutalist animations:** Mechanical, snappy, deliberate. Avoid overly smooth "bouncy" animations.

```tsx
duration-mechanical  // 100ms — Instant feedback
duration-fast        // 150ms — Quick interactions
duration (DEFAULT)   // 200ms — Standard transitions
duration-slow        // 300ms — Deliberate, emphasized
```

### Easing Functions

```tsx
ease-brutalist  // Sharp, mechanical (preferred)
ease-swiss      // Precise, calculated
ease-linear     // No easing, pure brutalism
```

### Animation Guidelines

1. **Hover states:** Quick, obvious (`duration-fast` or `duration-mechanical`)
2. **Page transitions:** Direct, no fancy fades (`ease-linear` or `ease-brutalist`)
3. **Scroll animations:** Abrupt reveals, not smooth slides
4. **Avoid:** Bounce effects, elastic easing, excessive motion

### Examples

```tsx
// ❌ BAD: Smooth, bouncy
<div className="transition-all duration-500 ease-in-out hover:scale-110">

// ✅ GOOD: Sharp, mechanical
<div className="transition-all duration-mechanical ease-brutalist hover:scale-105">

// ✅ GOOD: Swiss precision
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }} // Swiss easing
>
```

---

## Component Patterns

### Standard Component Structure

```tsx
<ComponentWrapper
  // 1. Key/Ref
  key={item.id}
  
  // 2. Accessibility
  aria-label="Description"
  
  // 3. Styling
  className="bg-bg-card border-2 border-border-default rounded-sm"
  
  // 4. Event handlers
  onClick={handleClick}
>
  <ComponentContent />
</ComponentWrapper>
```

### Grid System

Swiss Grid principles:

```tsx
// Use explicit grid columns
<div className="grid grid-cols-4 gap-6">

// Asymmetric layouts are encouraged
<div className="grid grid-cols-[2fr_1fr] gap-8">

// Visible structure with borders
<div className="border-border-strong border-3">
```

---

## Code Conventions

### 1. JSX Attribute Ordering

**ALWAYS follow this order:**

```tsx
<element
  key={...}                    // 1. React key
  ref={...}                    // 2. React ref
  id={...}                     // 3. HTML ID
  data-testid={...}            // 4. Test attributes
  aria-label={...}             // 5. ARIA attributes
  className={...}              // 6. Styling
  src={...}                    // 7. Native HTML attributes
  alt={...}
  onClick={...}                // 8. Event handlers
  onMouseEnter={...}
  customProp={...}             // 9. Custom props
/>
```

### 2. Color Usage

```tsx
// ❌ NEVER do this
const color = mode === "light" ? "#ABC4FF" : "#EDF2FB";

// ✅ ALWAYS do this
<div className="bg-bg-card text-text-heading">
```

### 3. Component File Structure

```
ComponentName/
├── ComponentName.tsx           # Main component
├── components/                 # Sub-components
│   └── SubComponent.tsx
├── data/
│   └── componentData.ts        # Data/constants
└── tests/
    └── ComponentName.test.tsx
```

### 4. Import Ordering

```tsx
// 1. React/External libraries
import { useState } from "react";
import { motion } from "framer-motion";

// 2. Internal utilities/hooks
import { useThemeContext } from "../../utils/hooks/useTheme";

// 3. Components
import SubComponent from "./components/SubComponent";

// 4. Data/Constants
import { COMPONENT_DATA } from "./data/componentData";

// 5. Types
import type { ComponentProps } from "./types";
```

---

## Migration Checklist

When refactoring components to use the design system:

- [ ] Replace hardcoded colors with semantic tokens
- [ ] Update border radius to match brutalist aesthetic
- [ ] Check attribute ordering
- [ ] Use mechanical transitions
- [ ] Remove unnecessary smooth animations
- [ ] Test in both light/dark modes
- [ ] Test with both "sky" and "concrete" palettes
- [ ] Verify accessibility (ARIA labels)

---

## Testing Palettes

To quickly switch between palettes for comparison:

```tsx
// In your ThemeProvider or a debug component
const togglePalette = () => {
  const current = document.documentElement.getAttribute('data-palette');
  const next = current === 'concrete' ? 'sky' : 'concrete';
  document.documentElement.setAttribute('data-palette', next);
};
```

---

## Resources

- [Swiss Design Principles](https://www.smashingmagazine.com/2009/07/lessons-from-swiss-style-graphic-design/)
- [Brutalism in Web Design](https://brutalistwebsites.com/)
- [Design Tokens](https://designtokens.org/)

---

**Last Updated:** [Date]  
**Maintained by:** Dylan Martinez

