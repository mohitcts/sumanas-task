<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* 

Route::get('/', function () {
    return view('welcome');
});

*/

Route::get('/', [\App\Http\Controllers\ProductController::class, 'index'])->name('product.index');
Route::post('/indexAjaxPost', [\App\Http\Controllers\ProductController::class, 'indexAjaxPost'])->name('product.index.ajax');

Route::get('/purchase/{id}', [\App\Http\Controllers\PaymentController::class, 'index'])->name('purchase.index');
Route::post('/purchase/{id}', [\App\Http\Controllers\PaymentController::class, 'indexPost'])->name('purchase.index.post');