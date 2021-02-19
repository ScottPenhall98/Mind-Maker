<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## About ScottPenhall98
NZ born and bred. This read me has information about the stack I used, so I have left a lot of Laravel Jibberish on here for those of you who have no idea what it is, feel free to browse over it.
Before we get onto the code here is a list of the main components of the stack:

- Lando, I used lando to run the application locally with ease and speed
- Laravel (PHP framework) useful for MVC applications
- React, All front end sources are made in react which has to be integrated with inertia to be used in laravel. (laravels default is blade)

## Setting up the project in Lando
Obviously, install lando first. 
- [How to install Lando, check on the left nav for your required OS](https://docs.lando.dev/basics/installation.html#hardware-requirements)
- change directory to the folder with the .lando file
- run `lando start`
- once the application is running do a `lando composer install`
- When I started the project I used node `v14.15.3` and npm `7.5.4`. To make it easier to switch between them I used the nvm package which in the near future I will make a file to set the appropriate npm and node versions
- Using Laravel Mix means you have to run `npm run prod | dev | watch | hot` depending on what you want to do. if you are just playing around, run prod this will run all the react and JS components

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

