<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function hotel()
    {
        return $this->hasOne(Hotel::class);
    }
    
    public function user()
    {
        return $this->hasOne(User::class);
    }
}
