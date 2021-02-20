<?php

namespace App\Http\Controllers;


use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        return Inertia::render('Home/Home');
    }
    public function  discogsSelector(){
        return Inertia::render('Discogs/DiscogsSelector');
    }
}