<?php

use Illuminate\Database\Seeder;
use App\Review;
use App\User;
use App\Hotel;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hotels = factory(Hotel::class, 100)->create();
        $users = factory(User::class, 200)->create();
        
        factory(Review::class, 1000)->create()->each(function($review) use ($hotels, $users) {
            $review->hotel()->associate($hotels->random()->id)->save();
            $review->user()->associate($users->random()->id)->save();
        });
    }
}
