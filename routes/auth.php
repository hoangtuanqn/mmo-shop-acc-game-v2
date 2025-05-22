<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("auth")->name('auth.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Login/index');
    })->name('login');

    Route::get('/register', function () {
        return Inertia::render('Register/index');
    })->name('register');

    Route::get('/forgot-password', function () {
        return Inertia::render('ForgotPassword/index');
    })->name('forgot-password');

    Route::get('/confirm-reset-password', function () {
        // Demo truyền email xuống, sau này lấy token, sau đó mới truyền email xuống
        return Inertia::render('ConfirmResetPassword/index', [
            "email" => 'phamhoangtuanqn@gmail.com'
        ]);
    })->name('confirm-reset-password');
});

Route::get('/login', function () {
    return Inertia::render('Login/index');
})->name('login');
