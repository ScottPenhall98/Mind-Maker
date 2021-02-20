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
      animation: {
        'spin-slow': 'spin-anti-clockwise 0.5s linear infinite',
      },
      keyframes: {
        'spin-anti-clockwise': {
          '0%' : {transform: 'rotate(360deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
