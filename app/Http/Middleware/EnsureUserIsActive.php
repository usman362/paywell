<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureUserIsActive
{
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();
        if ($user && !$user->is_active) {
            return response()->json([
                'error' => 'Account disabled',
                'message' => 'Your account has been disabled. Please contact support.',
            ], 403);
        }
        return $next($request);
    }
}
