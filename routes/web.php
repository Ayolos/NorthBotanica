<?php

use App\Http\Controllers\MailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/services', function () {
    return Inertia::render('Catalogue/CatalogueHome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('catalogue');

Route::get('/services/servicesPro', function () {
    return Inertia::render('Catalogue/CataloguePro');
})->name('catalogue.pro');

Route::get('/services/servicesCustomer', function () {
    return Inertia::render('Catalogue/CatalogueCustomer');
})->name('catalogue.customer');


Route::get('/about', function () {
    return Inertia::render('Aboutv2', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('aboutv2');

Route::post('/contact/send', [MailController::class, 'sendMessageGoogle'])->name('contact.send');
Route::get('/contact', [MailController::class, 'formMessageGoogle'])->name('contact');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
