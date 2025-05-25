<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/index');
});
Route::prefix("/tai-khoan")->name("accounts.")->group(function () {
    Route::get("/{slug}", function ($slug) {
        return Inertia::render('Accounts/index', [
            'slug' => $slug
        ]);
    })->name('list');
    Route::get("/chi-tiet/{slug}", function ($slug) {
        return Inertia::render('Account/index', [
            'slug' => $slug
        ]);
    })->name('detail');
    Route::get("/thu-van-may/{slug}", function ($slug) {
        return Inertia::render('Random/index', [
            'slug' => $slug
        ]);
    })->name('random');
});
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


Route::prefix("/tin-tuc")->name("news.")->group(function () {
    Route::get("/", function () {
        return Inertia::render('News/index');
    })->name('list');
    Route::get("/chi-tiet/{slug}", function ($slug) {
        return Inertia::render('News/Detail', [
            'slug' => $slug
        ]);
    })->name('detail');
});
