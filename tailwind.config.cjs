const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      darkBlue: '#021727',
      webotsGreen: '#02FC74',
      grey: '#CBCBCB',
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif', ...defaultTheme.fontFamily.sans],
        raleway: ['"Raleway"', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(2, 252, 116, 1) 0%, rgba(9, 58, 61, 1) 72.92%, rgba(2, 23, 39, 0.2) 100%)',
      },
    },
    plugins: [],
  }
};
