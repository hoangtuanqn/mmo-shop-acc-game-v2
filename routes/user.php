<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/profile', function () {
    return Inertia::render('Profile/index');
});
