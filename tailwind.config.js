const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
