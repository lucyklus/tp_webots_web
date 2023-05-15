const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    colors: {
      blue: '#1b1a44',
      orange: '#fe824e',
      white: '#ffffff',
      darkBlue: '#021727',
      turquoise: '#42FFFF',
      lightgreen: '#6cff93d2',
      webotsGreen: '#02FC74',
      purple: '#861670',
      mauve: '#D2CDF4',
      grey: '#CBCBCB',
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif', ...defaultTheme.fontFamily.sans],
        raleway: ['"Raleway"', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
