// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Habilita o dark mode baseado em classe
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        border: 'var(--color-border)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          contrast: 'var(--color-primary-contrast)',
        },
        tag: {
          promo: {
            bg: 'var(--color-tag-promo-bg)',
            text: 'var(--color-tag-promo-text)',
          },
          new: {
            bg: 'var(--color-tag-new-bg)',
            text: 'var(--color-tag-new-text)',
          },
        },
        star: 'var(--color-star-rating)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      fontSize: {
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};