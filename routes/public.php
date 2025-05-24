<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/index');
});
Route::get("/tai-khoan/{slug}", function ($slug) {
    return Inertia::render('Accounts/index', [
        'slug' => $slug
    ]);
})->name('account');
Route::get("/dich-vu/{slug}", function ($slug) {
    return Inertia::render('Services/index', [
        'slug' => $slug
    ]);
})->name('service');
Route::get("/vong-quay/{slug}", function ($slug) {
    return Inertia::render('GameTryYourLuck/index', [
        'slug' => $slug,
        'type' => 'luckyWheel'
    ]);
})->name('lucky');
Route::get("/lat-the/{slug}", function ($slug) {
    return Inertia::render('GameTryYourLuck/index', [
        'slug' => $slug,
        'type'  => 'flipCard'
    ]);
})->name('flip-card');
