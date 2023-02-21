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
      grey: '#e3e2e7',
    },
    extend: {
      lineHeight: {
        'xl-loose': '7.5rem',
        'l-loose': '7rem',
        'm-loose': '5rem',
      },
      height: {
        300: '18.75rem',
        350: '21.875rem',
      },
      width: {
        500: '31.25rem',
      },
      maxWidth: {
        1600: '100rem',
      },
    },
  },
  plugins: [],
};
