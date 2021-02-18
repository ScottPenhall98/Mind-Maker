const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 |
 |
 | Now to run hot I have to run in http. I will have to try find a way
 | to run hot within https but for now I am limited to http. To do this
 | you need to import certs on chrome
 | Lando Certs Security page:
 | https://docs.lando.dev/config/security.html#certificates
 | I didn't realise that its the Authorities Tab, not certificates Tab
 | so make sure you get the right tab
 */



mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
  ]);
