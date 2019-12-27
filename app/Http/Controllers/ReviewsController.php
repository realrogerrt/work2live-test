<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;

class ReviewsController extends Controller
{
    public function create(Request $request)
    {
        $review = new Review;
        $review->hotel_id = $request->json('hotel_id');
        $review->review = $request->json('review');
        $review->user_id = $request->user()->id;
        $review->save();
        
        return $review->id;
    }
}
