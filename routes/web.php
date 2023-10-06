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
    $metaDescription = "Bienvenue sur le site de North Botanica";

    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'metaDescription' => $metaDescription,
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

Route::get('/services/servicesCollectivity', function () {
    return Inertia::render('Catalogue/CatalogueCollectivity');
})->name('catalogue.collectivity');


Route::get('/about', function () {
    return Inertia::render('Aboutv2', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('aboutv2');

Route::post('/contact/send', [MailController::class, 'sendMessageGoogle'])->name('contact.send');
Route::get('/contact', [MailController::class, 'formMessageGoogle'])->name('contact');
