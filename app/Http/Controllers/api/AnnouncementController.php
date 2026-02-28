<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /** List announcements (newest first) – for user dashboard feed */
    public function index()
    {
        $list = Announcement::with('creator:id,name')
            ->orderByDesc('created_at')
            ->get();
        return response()->json($list);
    }

    /** Create announcement (admin only) */
    public function store(Request $request)
    {
        if ($request->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);
        $announcement = Announcement::create([
            'title' => $data['title'],
            'body' => $data['body'],
            'created_by' => $request->user()->id,
        ]);
        $announcement->load('creator:id,name');
        return response()->json($announcement);
    }

    /** Update announcement (admin only) */
    public function update(Request $request, Announcement $announcement)
    {
        if ($request->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $data = $request->validate([
            'title' => 'sometimes|string|max:255',
            'body' => 'sometimes|string',
        ]);
        $announcement->update($data);
        return response()->json($announcement->fresh(['creator:id,name']));
    }

    /** Delete announcement (admin only) */
    public function destroy(Request $request, Announcement $announcement)
    {
        if ($request->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $announcement->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
