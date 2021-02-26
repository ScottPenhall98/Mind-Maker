module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      burple: '6100ff',
      white: '#fff',
      gray: {
        leftNav: '#343434',
        darkTheme: '#272727',
        active: '#5a5a5a',
      },
    },
    extend: {
      animation: {},
      keyframes: {
        'spin-anti-clockwise': {
          '0%' : {transform: 'rotate(var(--rotate-end))'},
          '100%': {transform: 'rotate(var(--rotate-start))'},
        },
        'spin-clockwise': {
          '0%' : {transform: 'rotate(var(--rotate-start))'},
          '100%': {transform: 'rotate(var(--rotate-end))'},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
