<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api', 'active.user']);
    }

    public function feed()
    {
        return response()->json(
            Announcement::where('is_active', true)
                ->latest('published_at')
                ->paginate(20)
        );
    }
}
