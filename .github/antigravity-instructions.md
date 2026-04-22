# Geodocs – Antigravity AI Agent Coding Rules

These rules apply to Antigravity AI agent working in this repository.

## Core Principle

> Preserve the existing Docusaurus structure. Reuse what is already there. Add as little new code as possible.

---

## Rules (Non-Negotiable)

### 1. Do Not Break Docusaurus Structure

- Never add, rename, or remove a `docusaurus.config.js` top-level field without checking the Docusaurus 3.x schema first.
- Never change `plugins`, `presets`, `themeConfig`, or `navbar` unless the change is explicitly in scope.
- `onBrokenLinks` and `onBrokenAnchors` warnings in existing legacy docs are pre-existing and must not be "fixed" by deleting files or routes.
- Do not restructure the `docs/` directory tree. Route paths must remain stable.

### 2. Reuse Existing Components First

Before creating a new component, search for an existing one:

- Check `src/components/homepage/` for homepage sections.
- Check `src/components/` for shared UI elements.
- Check `src/theme/` for Docusaurus-swizzled overrides.

Only create a new file if no existing component can be extended with props or a minor CSS class.

### 3. Reuse Existing CSS Classes First

- All design tokens live in `src/css/design-tokens.css`. Use `var(--ds-*)` variables.
- All global Docusaurus integration styles live in `src/css/custom.css`.
- Homepage-specific styles live in `src/css/homepage.css`.
- Do not add inline `style={{}}` props for values that can be expressed as a design token or Tailwind class.
- Prefer existing Tailwind utility classes over new CSS rules.
- Do not add new CSS files unless absolutely necessary.

### 4. Minimize Code Changes

- Change only what is required to fulfil the request. Nothing more.
- Do not refactor, rename, or reformat code that is not in scope.
- Do not add comments, docstrings, or type annotations to code you did not write.
- Do not add error handling for scenarios outside system boundaries.
- If a requirement cannot be fulfilled without breaking another rule, stop and ask.

### 5. Content Changes Are Separate from Structure Changes

- Changing copy (text, labels, headings) does not require structural changes.
- Changing layout requires justification and must reuse existing Tailwind/DS classes.
- Do not reorganise imports, component order, or file structure when making copy changes.

### 6. Build Must Pass

- After every code change, `npm run build` must succeed (exit 0).
- Broken anchor warnings in `web-core/reference/*` and similar legacy pages are pre-existing and do not count as new failures.
- Do not commit or propose changes that fail to compile.

---

## File Reference

| What | Where |
|---|---|
| Design tokens | `src/css/design-tokens.css` |
| Global styles | `src/css/custom.css` |
| Homepage styles | `src/css/homepage.css` |
| Tailwind config | `tailwind.config.cjs` |
| Docusaurus config | `docusaurus.config.js` |
| Sidebar config | `sidebars-default.js` |
| Homepage components | `src/components/homepage/` |
| Navigation taxonomy | `_docs/GEODOCS-TAXONOMY-SCHEMA.md` |
| Product foundation | `_docs/GEODOCS-FOUNDATION.md` |
| Webpack customisation | `plugins/webpack-plugin.cjs` |

---

## Change Scope Decision Tree

```
Is the request about copy/text only?
  YES → Edit only the relevant .tsx/.jsx/.mdx file. Do not touch CSS or config.
  NO ↓

Does an existing component cover this?
  YES → Extend it with props or a new CSS class. Do not create a new file.
  NO ↓

Does an existing CSS class or design token cover the visual need?
  YES → Add the class. Do not write new CSS.
  NO ↓

Is a new file truly required?
  YES → Create it. Follow naming conventions of the folder it lives in.
  NO  → Use what exists.
```

---

## What Requires Human Approval Before Implementation

- Adding a new Docusaurus plugin.
- Changing `routeBasePath` of any existing doc section.
- Removing or renaming any existing route.
- Modifying `sidebars-default.js` in a way that breaks autogeneration.
- Changing the Tailwind `content` array in `tailwind.config.cjs`.
- Altering the `build` or `start` npm scripts.
