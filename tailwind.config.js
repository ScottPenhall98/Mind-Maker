module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      burple: '6100ff',
      white: '#fff',
      gray: {
        darkTheme: '#5a5a5a'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
