<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/thong-tin')->name('profile.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Profile/Account/Info');
    })->name('index');
    Route::get('/doi-mat-khau', function () {
        return Inertia::render('Profile/Account/ChangePassword');
    })->name('changePassword');
    Route::get('/gioi-thieu-ban-be', function () {
        return Inertia::render('Profile/Account/Affiliate');
    })->name('affiliate');
});
