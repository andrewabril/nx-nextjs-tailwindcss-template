const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        primary: {
          50: '#FDF0E8',
          100: '#FADECC',
          200: '#F5BF9E',
          300: '#F09E6B',
          400: '#EB803D',
          500: '#D96016',
          600: '#B04E12',
          700: '#823A0D',
          800: '#582709',
          900: '#2A1304',
        },
        secondary: colors.amber,
        tertiary: colors.stone,
      },
      fontFamily: {
        title: "'Title', serif",
        main: "'Main', sans-serif",
        // mono: ["'Some Mono'", ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
        // Complex site-specific column configuration
        article: '80ch minmax(0, 1fr)',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
