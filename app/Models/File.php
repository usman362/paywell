<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [];

    public function library() {
       return $this->belongsTo(Library::class);
    }

    public function getTypeAttribute($attribute)
    {
         return [
            0 => 'apk',
            1 => 'pdf',
            2 => "audio",
            3 => 'video',
            4 => 'other'

         ][$attribute];
    }

}
