<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
