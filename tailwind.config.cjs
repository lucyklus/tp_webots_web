const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', 'sans-serif', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      blue: '#1b1a44',
      turquoise: '#67d8d6cc',
      purple: '#861670',
      mauve: '#D2CDF4',
      grey: '#e3e2e7',
    },
    extend: {
    },
  },
  plugins: [],
};
