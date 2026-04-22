# Design System Implementation Guide

**Status**: ✅ Applied to geodocs.dev-ui  
**Date**: 2026-04-22  
**Version**: 1.0 (Foundation Phase - v1 scope)

## Overview

The MongoDB-inspired design system has been successfully integrated into geodocs.dev-ui while maintaining full Docusaurus structure compatibility. This implementation follows the design-system.md specification (sections 1-9) and geodocs-specific adaptation layer (sections 10.2-10.4).

### Design System Architecture

The system is organized into three CSS files:

```
src/css/
├── design-tokens.css      (Core tokens, variables, utilities)
├── homepage.css           (Homepage-specific component styling)
└── custom.css            (Docusaurus integration + component styling)
```

All tokens are automatically available in:
- **CSS**: Via `var(--ds-*)` variables
- **Tailwind**: Via `tw-ds-*` utility classes (after Tailwind compilation)

---

## 1. Design Tokens Reference

### Color Palette (CSS Variables)

#### Primary Brand
```css
--ds-color-forest-black: #001e2b;      /* Primary dark background */
--ds-color-mongodb-green: #00ed64;     /* Primary brand accent - neon */
--ds-color-dark-green: #00684a;        /* Button borders, functional */
```

#### Interactive
```css
--ds-color-action-blue: #006cfa;       /* Secondary accent - links */
--ds-color-hover-blue: #3860be;        /* Link hover state */
--ds-color-teal-active: #1eaedb;       /* Button hover background */
```

#### Neutral Scale
```css
--ds-color-deep-teal: #1c2d38;         /* Dark button backgrounds */
--ds-color-teal-gray: #3d4f58;         /* Dark borders */
--ds-color-cool-gray: #5c6c75;         /* Muted text on dark */
--ds-color-silver-teal: #b8c4c2;       /* Borders on light surfaces */
--ds-color-pure-white: #ffffff;        /* Light section background */
--ds-color-black: #000000;             /* Text on light */
```

### Typography System

All typography tokens follow this naming: `--ds-type-[role]-[property]`

Examples:
```css
--ds-type-display-hero-size: 6rem;     /* 96px */
--ds-type-display-hero-weight: 400;
--ds-type-body-large-size: 1.25rem;    /* 20px */
--ds-type-body-light-weight: 300;      /* Distinctive light weight */
--ds-type-code-label-letter-spacing: 2px;
```

Font families:
```css
--ds-font-display-serif: 'MongoDB Value Serif', Georgia, serif;
--ds-font-body-ui: 'Euclid Circular A', 'Inter', system-ui, sans-serif;
--ds-font-code-label: 'Source Code Pro', 'Fira Code', monospace;
```

### Shadows (Forest-tinted aesthetic)

```css
--ds-shadow-forest: 
  rgba(0, 30, 43, 0.12) 0px 26px 44px,  /* Primary elevation - teal-tinted */
  rgba(0, 0, 0, 0.13) 0px 7px 13px;

--ds-shadow-standard: rgba(0, 0, 0, 0.15) 0px 3px 20px;
--ds-shadow-subtle: rgba(0, 0, 0, 0.1) 0px 2px 4px;
```

### Spacing Scale (Base 8px)

```css
--ds-space-1: 1px
--ds-space-4: 4px
--ds-space-8: 8px
--ds-space-12: 12px
--ds-space-16: 16px
--ds-space-24: 24px
--ds-space-32: 32px
```

### Border Radius Scale

```css
--ds-radius-minimal: 1px;      /* Small badges */
--ds-radius-subtle: 4px;       /* Inputs, small buttons */
--ds-radius-standard: 8px;     /* Cards, standard */
--ds-radius-card: 16px;        /* Card containers */
--ds-radius-image: 32px;       /* Image corners */
--ds-radius-hero: 48px;        /* Hero cards */
--ds-radius-pill: 100px;       /* Buttons, navigation */
--ds-radius-full: 9999px;      /* Full circle */
```

---

## 2. Component Utilities

### Typography Components

Use these classes to apply complete typography styles:

```css
.ds-display-hero         /* 96px MongoDB Value Serif, line-height 1.2 */
.ds-display-secondary    /* 64px MongoDB Value Serif, line-height 1.0 */
.ds-body-large          /* 20px body text, line-height 1.6 */
.ds-body                /* 18px body text, line-height 1.33 */
.ds-body-light          /* 16px body text, weight 300 (distinctive light) */
.ds-code-label          /* 14px uppercase with 2px letter-spacing */
.ds-code-micro          /* 9px uppercase with 2.5px letter-spacing */
```

**Usage:**
```html
<h1 class="ds-display-hero">Main headline with forest aesthetic</h1>
<p class="ds-body-light">Reading-friendly body text at weight 300</p>
<span class="ds-code-label">ARTIFACT TYPE</span>
```

### Button Components

```css
.ds-btn-primary         /* MongoDB green (#00684a), pill-shaped */
.ds-btn-dark           /* Deep teal with hover transition */
```

**Usage:**
```html
<button class="ds-btn-primary">Start Audit</button>
<button class="ds-btn-dark">Learn More</button>
```

### Card & Section Components

```css
.ds-card               /* White bg, silver border, forest shadow */
.ds-card-elevated      /* Higher elevation shadow */
.ds-card-subtle        /* Lower elevation shadow */
.ds-section-dark       /* Forest black background */
.ds-section-light      /* White background */
```

**Usage:**
```html
<div class="ds-card">
  <h3>Card Title</h3>
  <p>Card content with proper spacing and shadows</p>
</div>
```

### Accent Elements

```css
.ds-accent-underline   /* Green gradient underline on hover */
.ds-source-label       /* Technical category marker in MongoDB green */
```

---

## 3. Tailwind Integration

All design tokens are available as Tailwind utilities with `ds-` prefix:

### Colors
```tailwind
bg-ds-forest          /* Forest black background */
text-ds-green         /* MongoDB green text */
border-ds-teal        /* Teal border */
shadow-ds-forest      /* Forest-tinted shadow */
```

### Spacing
```tailwind
p-ds-24              /* Padding 24px */
gap-ds-16            /* Gap 16px */
m-ds-12              /* Margin 12px */
```

### Typography
```tailwind
text-ds-display-hero     /* 96px with all props */
text-ds-body-light       /* 16px weight 300 */
font-ds-code-label       /* Source Code Pro with tracking */
```

### Border Radius
```tailwind
rounded-ds-card      /* 16px border-radius */
rounded-ds-pill      /* 100px (buttons) */
rounded-ds-hero      /* 48px (hero cards) */
```

### Transitions
```tailwind
duration-ds-fast     /* 150ms */
duration-ds-normal   /* 250ms */
duration-ds-slow     /* 350ms */
```

---

## 4. Homepage Component Classes

Homepage-specific styling uses the `homepage__` namespace:

### Structure
```html
<div class="homepage__hero">
  <div class="homepage__hero-content">
    <h1>Main <span class="homepage__hero-accent">headline</span></h1>
    <div class="homepage__hero-cta">
      <button class="homepage__hero-btn">Primary CTA</button>
      <button class="homepage__hero-btn-secondary">Secondary CTA</button>
    </div>
  </div>
</div>

<section class="homepage__guides">
  <div class="homepage__section-header">
    <span class="homepage__section-label">PLAYBOOKS</span>
    <h2 class="homepage__section-title">GEO Strategy Guides</h2>
    <p class="homepage__section-subtitle">Action-first guides for implementation</p>
  </div>

  <div class="homepage__card-grid">
    <article class="homepage__card">
      <span class="homepage__card-artifact-type">CHECKLIST</span>
      <h3 class="homepage__card-title">GEO Audit Checklist</h3>
      <p class="homepage__card-subtitle">30-point audit covering domain, content, and citation readiness</p>
      <span class="homepage__card-role">For SEO Specialists</span>
    </article>
  </div>
</section>
```

### Key Classes

**Sections & Headers:**
- `.homepage__section-label` - Technical category marker (green)
- `.homepage__section-title` - Section heading (36px)
- `.homepage__section-subtitle` - Supporting text (18px gray)

**Cards:**
- `.homepage__card` - Card container with hover effects
- `.homepage__card-artifact-type` - Uppercase label (CHECKLIST, TEMPLATE, etc.)
- `.homepage__card-title` - Card title (24px)
- `.homepage__card-role` - Target audience chip (blue/green)

**Framework Steps:**
- `.homepage__framework-step` - Step container with left green border
- `.homepage__framework-step-number` - Step counter (NEW, PLAN, EXECUTE, MEASURE, OPERATE)

**CTA Section:**
- `.homepage__cta-section` - Dark gradient background
- `.homepage__cta-title` - Large CTA title
- `.homepage__cta-button` - Prominent green button

---

## 5. Dark Mode Handling

Dark mode is automatic via Docusaurus `data-theme="dark"` attribute.

**Key dark mode colors:**
```css
html[data-theme='dark'] {
  --ds-color-text-primary: var(--ds-color-pure-white);
  --ds-color-bg-primary: var(--ds-color-forest-black);
  --ds-color-border: var(--ds-color-teal-gray);
}
```

**Example conditional styling:**
```css
.my-element {
  color: var(--ds-color-forest-black);
}

html[data-theme='dark'] .my-element {
  color: var(--ds-color-pure-white);
}
```

---

## 6. Design System Migration Path

### v1 Scope (Current - Foundation Phase)
- ✅ Core tokens implemented (colors, typography, spacing, shadows, radius)
- ✅ Component utilities created (.ds-card, .ds-btn-primary, etc.)
- ✅ Docusaurus integration complete (navbar, footer, badges, code)
- ✅ Homepage styling structure in place
- 🟡 MongoDB Value Serif not yet loaded (fallback to Georgia serif)
- 🟡 Euclid Circular A not yet loaded (fallback to Inter)

### v1.1 (Polish Phase - After v1 Launch)
- [ ] Load MongoDB Value Serif font
- [ ] Load Euclid Circular A font
- [ ] Update all headings to use serif for hero scales
- [ ] Full visual audit and refinement
- [ ] Performance optimization (font subsetting, lazy loading)

### v1.2 (Extension Phase)
- [ ] Design system documentation site
- [ ] Component library with interactive examples
- [ ] Figma design file export
- [ ] Accessibility audit (WCAG AA compliance)

---

## 7. Key Design Decisions

### 1. **Forest Black Over Pure Black**
`#001e2b` instead of `#000000` for dark backgrounds creates a uniquely MongoDB aesthetic - it evokes a forest canopy rather than digital void.

### 2. **Neon Green as Electric Accent**
`#00ed64` is used sparingly (only ~5% of UI) for maximum impact. It signals interactivity, importance, and brand presence without overwhelming.

### 3. **Weight 300 for Body Text**
Euclid Circular A at weight 300 (light) is the default body weight, creating an airy reading experience that contrasts beautifully with forest-dark backgrounds.

### 4. **Wide-tracked Monospace Labels**
Source Code Pro at 1px-3px letter-spacing creates "database field label" aesthetics that signal system/technical content.

### 5. **Teal-tinted Shadows**
Shadows use `rgba(0, 30, 43, 0.12)` - the forest-black color at lower opacity - to maintain visual cohesion even on light surfaces.

### 6. **Dual-mode Sections**
Dark hero/feature sections (`#001e2b`) alternate with light content sections (`#ffffff`) to create dramatic visual breaks and readability zones.

---

## 8. Backward Compatibility

The design system maintains full backward compatibility with existing Docusaurus styles:

```css
/* Docusaurus vars still work */
--docs-color-primary         /* Maps to --ds-color-action-blue */
--ifm-color-primary          /* Maps to --ds-color-action-blue */
--docs-color-background      /* Maps to --ds-color-pure-white (light) */
```

Existing components automatically receive updated colors via CSS variable inheritance. No breaking changes to HTML structure.

---

## 9. Build & Deployment

### Development
```bash
npm run build          # Compiles Docusaurus + CSS
npm run start         # Local dev server with hot reload
npm run serve         # Static server for preview
```

### CSS Processing
- Tailwind scans `src/**/*.{jsx,tsx,html}` for utility classes
- Design tokens are available immediately via `@layer base`
- No additional build steps required

### File Size Impact
- `design-tokens.css`: ~12KB (uncompressed)
- `homepage.css`: ~18KB (uncompressed)
- **Total overhead**: ~30KB (~3KB gzipped)
- Included in main stylesheet (no additional HTTP request)

---

## 10. Common Usage Patterns

### Hero Section with Green Accent
```html
<div class="homepage__hero">
  <h1 class="ds-display-hero">
    Your GEO Journey
    <span class="homepage__hero-accent">Starts Now</span>
  </h1>
</div>
```

### Artifact Card with Role Lane
```html
<article class="homepage__card">
  <span class="homepage__card-artifact-type">CHECKLIST</span>
  <h3 class="homepage__card-title">GEO Audit Checklist</h3>
  <p class="homepage__card-subtitle">30-point audit for domain readiness</p>
  <span class="homepage__card-role">For SEO Specialists</span>
</article>
```

### Role Switcher for ICP Lanes
```html
<div class="homepage__role-switcher">
  <button class="homepage__role-chip active">
    SEO Specialists
  </button>
  <button class="homepage__role-chip">
    Developers
  </button>
  <button class="homepage__role-chip">
    Marketing Managers
  </button>
</div>
```

### Framework Step
```html
<div class="homepage__framework-step">
  <span class="homepage__framework-step-number">STEP 1: LEARN</span>
  <h3>Understand GEO Fundamentals</h3>
  <p>Read the foundation docs before auditing your domain.</p>
</div>
```

---

## 11. Troubleshooting

### Tokens Not Applying
**Problem**: Styles not showing  
**Solution**: Ensure `design-tokens.css` is imported at top of custom.css

### Colors Wrong in Dark Mode
**Problem**: Colors don't match design system in dark theme  
**Solution**: Add `html[data-theme='dark']` selector override

### Tailwind Classes Not Working
**Problem**: `text-ds-green` not compiling  
**Solution**: 
1. Rebuild Tailwind: `npm run build`
2. Check that filename matches content glob in tailwind.config.cjs
3. Verify CSS variable names in tailwind.config.cjs extend section

### Font Not Loading
**Problem**: Text still using fallback fonts  
**Solution**: v1.1 will add MongoDB Value Serif and Euclid Circular A fonts. For now, fallbacks (Georgia, Inter) maintain brand aesthetic.

---

## 12. Next Steps

1. **Homepage Integration** (Day 2-3)
   - Apply homepage classes to existing components
   - Update HeroSection, GuidesAndSamples, SDKs, etc.
   - Verify dark mode rendering

2. **Content Pages** (Day 4-5)
   - Apply source labels to article sections
   - Update card designs in article previews
   - Ensure code block styling matches brand

3. **Brand Assets** (Day 5+)
   - Logo update to match forest aesthetic
   - Favicon with green accent
   - Social media preview images

4. **Visual QA** (Day 7)
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Mobile responsiveness audit
   - Performance profile (Lighthouse)

---

## 13. References

- **Design System Spec**: `_docs/design-system.md` (sections 1-9)
- **Geodocs Adaptation**: `_docs/design-system.md` (sections 10.2-10.4)
- **Execution Plan**: `_docs/OFFICE-HOURS-EXECUTION-REVIEW-V2.md` (UI/UX v1 timeline)
- **CSS Token Files**: 
  - `src/css/design-tokens.css`
  - `src/css/homepage.css`
  - `src/css/custom.css`
- **Tailwind Config**: `tailwind.config.cjs`

---

**Last Updated**: 2026-04-22  
**Status**: Ready for homepage integration  
**Maintained By**: Design System Working Group
