<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\ChatMessage;
use App\Models\ChatRoom;
use App\Models\PlatformSetting;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AdminPlatformController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api', 'active.user']);
    }

    private function ensureAdmin()
    {
        if ((int) request()->user()->role !== 0) {
            abort(403, 'Admin access only');
        }
    }

    public function getPaywallSettings()
    {
        $this->ensureAdmin();

        return response()->json([
            'free_library_limit' => (int) PlatformSetting::getValue('free_library_limit', config('paywall.free_library_limit')),
            'library_price' => PlatformSetting::getValue('library_price', config('paywall.library_price')),
            'registration_requires_payment' => filter_var(PlatformSetting::getValue('registration_requires_payment', config('paywall.registration_requires_payment')), FILTER_VALIDATE_BOOLEAN),
            'registration_price' => PlatformSetting::getValue('registration_price', config('paywall.registration_price')),
        ]);
    }

    public function updatePaywallSettings(Request $request)
    {
        $this->ensureAdmin();

        $data = $request->validate([
            'free_library_limit' => 'required|integer|min:0',
            'library_price' => 'required|numeric|min:0',
            'registration_requires_payment' => 'required|boolean',
            'registration_price' => 'required|numeric|min:0',
        ]);

        foreach ($data as $key => $value) {
            PlatformSetting::setValue($key, (string) $value);
        }

        return response()->json(['message' => 'Settings updated']);
    }

    public function disableUser(User $user)
    {
        $this->ensureAdmin();
        $user->is_disabled = true;
        $user->save();

        return response()->json(['message' => 'User disabled']);
    }

    public function enableUser(User $user)
    {
        $this->ensureAdmin();
        $user->is_disabled = false;
        $user->save();

        return response()->json(['message' => 'User enabled']);
    }

    public function createRoom(Request $request)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_active' => 'nullable|boolean',
        ]);

        $room = ChatRoom::create([
            'name' => $data['name'],
            'description' => $data['description'] ?? null,
            'is_active' => $data['is_active'] ?? true,
            'created_by' => request()->user()->id,
        ]);

        return response()->json($room);
    }

    public function updateRoom(ChatRoom $chatRoom, Request $request)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_active' => 'required|boolean',
        ]);

        $chatRoom->update($data);
        return response()->json($chatRoom);
    }

    public function deleteRoom(ChatRoom $chatRoom)
    {
        $this->ensureAdmin();
        $chatRoom->messages()->delete();
        $chatRoom->delete();

        return response()->json(['message' => 'Room deleted']);
    }

    public function allRooms()
    {
        $this->ensureAdmin();
        return response()->json(ChatRoom::withCount('messages')->latest()->get());
    }

    public function adminMessages()
    {
        $this->ensureAdmin();
        return response()->json(
            ChatMessage::with(['user:id,name,email', 'room:id,name'])
                ->latest()
                ->paginate(100)
        );
    }

    public function sendMassEmail(Request $request)
    {
        $this->ensureAdmin();

        $data = $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'roles' => 'nullable|array',
            'roles.*' => 'integer',
            'user_ids' => 'nullable|array',
            'user_ids.*' => 'integer',
        ]);

        $query = User::query();
        if (!empty($data['roles'])) {
            $query->whereIn('role', $data['roles']);
        }
        if (!empty($data['user_ids'])) {
            $query->whereIn('id', $data['user_ids']);
        }

        $users = $query->get();
        foreach ($users as $user) {
            if (!$user->email) {
                continue;
            }
            Mail::raw($data['message'], function ($mail) use ($user, $data) {
                $mail->to($user->email)->subject($data['subject']);
            });
        }

        return response()->json(['message' => 'Mass email sent', 'recipients' => $users->count()]);
    }

    public function createAnnouncement(Request $request)
    {
        $this->ensureAdmin();

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'is_active' => 'nullable|boolean',
        ]);

        $announcement = Announcement::create([
            'title' => $data['title'],
            'body' => $data['body'],
            'is_active' => $data['is_active'] ?? true,
            'published_at' => now(),
            'created_by' => request()->user()->id,
        ]);

        return response()->json($announcement);
    }

    public function updateAnnouncement(Announcement $announcement, Request $request)
    {
        $this->ensureAdmin();
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'is_active' => 'required|boolean',
        ]);
        $announcement->update($data);

        return response()->json($announcement);
    }

    public function deleteAnnouncement(Announcement $announcement)
    {
        $this->ensureAdmin();
        $announcement->delete();

        return response()->json(['message' => 'Announcement deleted']);
    }

    public function allAnnouncements()
    {
        $this->ensureAdmin();
        return response()->json(Announcement::latest()->get());
    }
}
