<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/thong-tin')->name('info.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Profile/index');
    })->name('index');
    Route::get('/doi-mat-khau', function () {
        return Inertia::render('Profile/Account/ChangePassword');
    })->name('changePassword');
});
