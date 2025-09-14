// Tokens que são os mesmos em ambos os temas
const commonTokens = {
  fontSizes: {
    sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem',
  },
  spacing: {
    xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
  },
  borderRadius: {
    sm: '0.25rem', md: '0.5rem', lg: '1rem',
  },
  transitionDuration: '200ms',
};

// Tema Claro
export const lightTheme = {
  ...commonTokens,
  colors: {
    background: '#FFFFFF',
    surface: '#F9FAFB',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryContrast: '#FFFFFF',
    tagPromoBg: '#FEE2E2',
    tagPromoText: '#B91C1C',
    tagNewBg: '#DBEAFE',
    tagNewText: '#1E40AF',
    starRating: '#FBBF24',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
};

// Tema Escuro
export const darkTheme = {
  ...commonTokens,
  colors: {
    background: '#111827',
    surface: '#1F2937',
    textPrimary: '#F9FAFB',
    textSecondary: '#9CA3AF',
    border: '#374151',
    primary: '#60A5FA',
    primaryHover: '#93C5FD',
    primaryContrast: '#111827',
    tagPromoBg: '#450A0A',
    tagPromoText: '#FECACA',
    tagNewBg: '#1E293B',
    tagNewText: '#BFDBFE',
    starRating: '#FBBF24', // Mantemos a mesma cor para a estrela
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.2)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
  },
};