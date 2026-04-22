const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
        // Design System font families
        'display-serif': ['MongoDB Value Serif', 'Georgia', 'serif'],
        'body-ui': ['Euclid Circular A', 'Inter', 'system-ui', 'sans-serif'],
        'code-label': ['Source Code Pro', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        // Design System radius scale
        'ds-minimal': 'var(--ds-radius-minimal)',
        'ds-subtle': 'var(--ds-radius-subtle)',
        'ds-standard': 'var(--ds-radius-standard)',
        'ds-card': 'var(--ds-radius-card)',
        'ds-toggle': 'var(--ds-radius-toggle)',
        'ds-large': 'var(--ds-radius-large)',
        'ds-image': 'var(--ds-radius-image)',
        'ds-hero': 'var(--ds-radius-hero)',
        'ds-pill': 'var(--ds-radius-pill)',
        'ds-full': 'var(--ds-radius-full)',
      },
      screens: {
        sm: '0px',
        lg: '997px',
      },
      colors: {
        // Existing Docusaurus colors (for compatibility)
        primary: {
          DEFAULT:
            'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
          100: 'rgb(var(--docs-color-primary-100, 26 144 255) / <alpha-value>)',
          200: 'rgb(var(--docs-color-primary-200, 33 96 253) / <alpha-value>)',
        },
        secondary: {
          DEFAULT:
            'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          1000: 'rgb(var(--docs-color-secondary-1000, 0 0 0) / <alpha-value>)',
          900: 'rgb(var(--docs-color-secondary-900, 25 25 25) / <alpha-value>)',
          800: 'rgb(var(--docs-color-secondary-800, 38 38 38) / <alpha-value>)',
          700: 'rgb(var(--docs-color-secondary-700, 71 71 71) / <alpha-value>)',
        },
        text: {
          400: 'rgb(var(--docs-color-text-400, 153 153 153) / <alpha-value>)',
        },
        // Design System brand colors
        'ds-forest': 'var(--ds-color-forest-black)',
        'ds-green': 'var(--ds-color-mongodb-green)',
        'ds-green-dark': 'var(--ds-color-dark-green)',
        'ds-blue': 'var(--ds-color-action-blue)',
        'ds-blue-hover': 'var(--ds-color-hover-blue)',
        'ds-teal': 'var(--ds-color-teal-active)',
        'ds-teal-deep': 'var(--ds-color-deep-teal)',
        'ds-teal-gray': 'var(--ds-color-teal-gray)',
        'ds-slate': 'var(--ds-color-dark-slate)',
        'ds-gray': 'var(--ds-color-cool-gray)',
        'ds-silver': 'var(--ds-color-silver-teal)',
        'ds-input': 'var(--ds-color-light-input)',
        'ds-white': 'var(--ds-color-pure-white)',
        'ds-black': 'var(--ds-color-black)',
      },
      boxShadow: {
        // Design System shadows
        'ds-forest': 'var(--ds-shadow-forest)',
        'ds-standard': 'var(--ds-shadow-standard)',
        'ds-subtle': 'var(--ds-shadow-subtle)',
      },
      spacing: {
        // Design System spacing scale (base 8px)
        'ds-1': 'var(--ds-space-1)',
        'ds-4': 'var(--ds-space-4)',
        'ds-7': 'var(--ds-space-7)',
        'ds-8': 'var(--ds-space-8)',
        'ds-10': 'var(--ds-space-10)',
        'ds-12': 'var(--ds-space-12)',
        'ds-14': 'var(--ds-space-14)',
        'ds-15': 'var(--ds-space-15)',
        'ds-16': 'var(--ds-space-16)',
        'ds-18': 'var(--ds-space-18)',
        'ds-20': 'var(--ds-space-20)',
        'ds-24': 'var(--ds-space-24)',
        'ds-32': 'var(--ds-space-32)',
      },
      fontSize: {
        // Design System typography scale
        'ds-display-hero': [
          'var(--ds-type-display-hero-size)',
          {
            lineHeight: 'var(--ds-type-display-hero-line-height)',
            fontWeight: 'var(--ds-type-display-hero-weight)',
          },
        ],
        'ds-display-secondary': [
          'var(--ds-type-display-secondary-size)',
          {
            lineHeight: 'var(--ds-type-display-secondary-line-height)',
            fontWeight: 'var(--ds-type-display-secondary-weight)',
          },
        ],
        'ds-section-heading': [
          'var(--ds-type-section-heading-size)',
          {
            lineHeight: 'var(--ds-type-section-heading-line-height)',
            fontWeight: 'var(--ds-type-section-heading-weight)',
          },
        ],
        'ds-subheading': [
          'var(--ds-type-subheading-size)',
          {
            lineHeight: 'var(--ds-type-subheading-line-height)',
            fontWeight: 'var(--ds-type-subheading-weight)',
          },
        ],
        'ds-body-large': [
          'var(--ds-type-body-large-size)',
          {
            lineHeight: 'var(--ds-type-body-large-line-height)',
            fontWeight: 'var(--ds-type-body-large-weight)',
          },
        ],
        'ds-body': [
          'var(--ds-type-body-size)',
          {
            lineHeight: 'var(--ds-type-body-line-height)',
            fontWeight: 'var(--ds-type-body-weight)',
          },
        ],
        'ds-body-light': [
          'var(--ds-type-body-light-size)',
          {
            lineHeight: 'var(--ds-type-body-light-line-height)',
            fontWeight: 'var(--ds-type-body-light-weight)',
          },
        ],
        'ds-button': [
          'var(--ds-type-button-size)',
          {
            lineHeight: 'var(--ds-type-button-line-height)',
            fontWeight: 'var(--ds-type-button-weight)',
          },
        ],
        'ds-code-label': [
          'var(--ds-type-code-label-size)',
          {
            lineHeight: 'var(--ds-type-code-label-line-height)',
            fontWeight: 'var(--ds-type-code-label-weight)',
          },
        ],
      },
      transitionDuration: {
        'ds-fast': 'var(--ds-transition-fast)',
        'ds-normal': 'var(--ds-transition-normal)',
        'ds-slow': 'var(--ds-transition-slow)',
      },
    },
  },
  plugins: [],
};
