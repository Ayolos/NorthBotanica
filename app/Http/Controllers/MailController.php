<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class MailController extends Controller
{
    // Le formulaire du message
    public function formMessageGoogle () {
        return Inertia::render('Contact', []);
    }

    // Envoi du mail aux utilisateurs
    public function sendMessageGoogle (Request $request) {

        Mail::to($request->mail)->send(new ContactMail($request->all()));
        $request->session()->flash('alert', 'Le mail à bien été envoyé.');

        return back()->withInput();
    }
}
