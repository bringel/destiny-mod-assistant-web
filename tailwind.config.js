const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'light-level': '#DDCB59',
        'energy-stasis': '#4D88FF',
        'energy-void': '#B185DF',
        'energy-solar': '#F0631E',
        'energy-arc': '#5ac0cb' //'#7AECF3'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
