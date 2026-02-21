<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ChatMessage;
use App\Models\ChatRoom;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api', 'active.user']);
    }

    public function rooms()
    {
        return response()->json(ChatRoom::where('is_active', true)->withCount('messages')->latest()->get());
    }

    public function messages(ChatRoom $chatRoom)
    {
        return response()->json(
            $chatRoom->messages()->with('user:id,name,email')->latest()->paginate(100)
        );
    }

    public function send(ChatRoom $chatRoom, Request $request)
    {
        if (!$chatRoom->is_active) {
            return response()->json(['message' => 'Chat room is inactive'], 422);
        }

        $data = $request->validate([
            'message' => 'required|string|max:3000',
        ]);

        $message = ChatMessage::create([
            'chat_room_id' => $chatRoom->id,
            'user_id' => $request->user()->id,
            'message' => $data['message'],
            'is_admin' => (int) $request->user()->role === 0,
        ]);

        return response()->json($message->load('user:id,name,email'));
    }
}
