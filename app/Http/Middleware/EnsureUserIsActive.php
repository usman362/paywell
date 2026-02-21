<?php

namespace App\Http\Middleware;

use Closure;

class EnsureUserIsActive
{
    public function handle($request, Closure $next)
    {
        $user = $request->user();

        if ($user && $user->is_disabled) {
            auth()->guard('api')->logout();
            return response()->json(['message' => 'Your account has been disabled by an administrator.'], 403);
        }

        return $next($request);
    }
}
