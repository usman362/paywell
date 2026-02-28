<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ChatRoom;
use App\Models\ChatMessage;
use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    protected function ensureAdmin()
    {
        if (request()->user()->role != 2) {
            abort(403, 'Forbidden');
        }
    }

    /** List chat rooms: admin sees all, users see only their rooms */
    public function index()
    {
        $user = request()->user();
        if ($user->role == 2) {
            $rooms = ChatRoom::withCount(['messages', 'members'])
                ->with('creator:id,name,email')
                ->orderByDesc('updated_at')
                ->get();
        } else {
            $rooms = $user->chatRooms()
                ->withCount(['messages', 'members'])
                ->with('creator:id,name,email')
                ->orderByDesc('updated_at')
                ->get();
        }
        return response()->json($rooms);
    }

    /** Create a chat room (admin) */
    public function store(Request $request)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'user_ids' => 'nullable|array',
            'user_ids.*' => 'exists:users,id',
        ]);
        $room = ChatRoom::create([
            'name' => $data['name'],
            'description' => $data['description'] ?? null,
            'created_by' => $request->user()->id,
        ]);
        if (!empty($data['user_ids'])) {
            $room->members()->sync(array_unique($data['user_ids']));
        }
        $room->loadCount(['messages', 'members'])->load('creator:id,name,email');
        return response()->json($room);
    }

    /** Get room with messages and members (admin) */
    public function show(ChatRoom $chat_room)
    {
        $this->ensureAdmin();
        $room = $chat_room->load(['members:id,name,email', 'creator:id,name,email']);
        $messages = $chat_room->messages()->with('user:id,name,email')->orderBy('created_at')->get();
        return response()->json([
            'room' => $room,
            'messages' => $messages,
        ]);
    }

    /** Update room (admin) */
    public function update(Request $request, ChatRoom $chat_room)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
        ]);
        $chat_room->update($data);
        return response()->json($chat_room->fresh(['creator:id,name,email']));
    }

    /** Delete room (admin) */
    public function destroy(ChatRoom $chat_room)
    {
        $this->ensureAdmin();
        $chat_room->delete();
        return response()->json(['message' => 'Room deleted']);
    }

    /** Add members to room (admin) */
    public function addMembers(Request $request, ChatRoom $chat_room)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id',
        ]);
        $chat_room->members()->syncWithoutDetaching($data['user_ids']);
        return response()->json(['members' => $chat_room->members()->get(['id', 'name', 'email'])]);
    }

    /** Remove member from room (admin) */
    public function removeMember(ChatRoom $chat_room, User $user)
    {
        $this->ensureAdmin();
        $chat_room->members()->detach($user->id);
        return response()->json(['message' => 'Member removed']);
    }

    /** Get messages for room (admin or member) */
    public function messages(ChatRoom $chat_room)
    {
        $me = request()->user();
        $isAdmin = $me->role == 2;
        $isMember = $chat_room->members()->where('user_id', $me->id)->exists();
        if (!$isAdmin && !$isMember) {
            abort(403, 'Not in this room');
        }
        $messages = $chat_room->messages()->with('user:id,name,email')->orderBy('created_at')->get();
        return response()->json($messages);
    }

    /** Send message (admin or member) */
    public function sendMessage(Request $request, ChatRoom $chat_room)
    {
        $me = request()->user();
        $isAdmin = $me->role == 2;
        $isMember = $chat_room->members()->where('user_id', $me->id)->exists();
        if (!$isAdmin && !$isMember) {
            abort(403, 'Not in this room');
        }
        $data = $request->validate(['body' => 'required|string|max:5000']);
        $message = ChatMessage::create([
            'chat_room_id' => $chat_room->id,
            'user_id' => $me->id,
            'body' => $data['body'],
        ]);
        $message->load('user:id,name,email');
        $chat_room->touch();
        return response()->json($message);
    }

    /** Delete message (moderate) – admin only */
    public function destroyMessage(ChatRoom $chat_room, ChatMessage $chat_message)
    {
        $this->ensureAdmin();
        if ($chat_message->chat_room_id != $chat_room->id) {
            abort(404);
        }
        $chat_message->delete();
        return response()->json(['message' => 'Message deleted']);
    }

    /** List users for adding to room (admin) */
    public function users()
    {
        $this->ensureAdmin();
        return response()->json(User::where('role', 1)->get(['id', 'name', 'email']));
    }
}
