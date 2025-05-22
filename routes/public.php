<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/index');
});
Route::get("/account/{slug}", function ($slug) {
    return Inertia::render('Accounts/index', [
        'slug' => $slug
    ]);
});
