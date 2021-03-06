<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;

class HotelsController extends Controller
{
    public function index()
    {
        return Hotel::with('reviews', 'reviews.user')->get();
    }

    public function get($id)
    {
        return Hotel::with('reviews', 'reviews.user')->find($id);
    }
}
