<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/index');
});
Route::get('/login', function () {
    return Inertia::render('Login/index');
});
Route::get('/register', function () {
    return Inertia::render('Register/index');
});
