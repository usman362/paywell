<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\MassEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MassEmailController extends Controller
{
    /** Send mass email to all users or selected (admin only) */
    public function send(Request $request)
    {
        if ($request->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        $data = $request->validate([
            'subject' => 'required|string|max:255',
            'body' => 'required|string',
            'recipient_type' => 'required|in:all,selected',
            'user_ids' => 'required_if:recipient_type,selected|array',
            'user_ids.*' => 'exists:users,id',
        ]);
        $query = User::where('role', 1)->where('is_active', true)->whereNotNull('email');
        if ($data['recipient_type'] === 'selected' && !empty($data['user_ids'])) {
            $query->whereIn('id', $data['user_ids']);
        }
        $recipients = $query->get();
        $sent = 0;
        foreach ($recipients as $user) {
            try {
                Mail::to($user->email)->send(new MassEmail($data['subject'], $data['body']));
                $sent++;
            } catch (\Exception $e) {
                report($e);
            }
        }
        return response()->json([
            'message' => "Email sent to {$sent} recipient(s).",
            'sent_count' => $sent,
        ]);
    }
}
