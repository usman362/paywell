<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\PaywallSettings;
use Illuminate\Http\Request;

class PaywallSettingsController extends Controller
{
    /**
     * Get paywall settings (public – used by frontend for limit, price, registration_enabled).
     */
    public function show()
    {
        $settings = PaywallSettings::get();
        return response()->json([
            'free_library_limit' => (int) $settings->free_library_limit,
            'price' => (float) $settings->price,
            'currency' => (string) $settings->currency,
            'registration_enabled' => (bool) $settings->registration_enabled,
        ]);
    }

    /**
     * Update paywall settings (admin only).
     */
    public function update(Request $request)
    {
        if ($request->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        $validated = $request->validate([
            'free_library_limit' => 'sometimes|integer|min:0',
            'price' => 'sometimes|numeric|min:0',
            'currency' => 'sometimes|string|size:3',
            'registration_enabled' => 'sometimes|boolean',
        ]);

        $settings = PaywallSettings::updateSettings($validated);

        return response()->json([
            'free_library_limit' => (int) $settings->free_library_limit,
            'price' => (float) $settings->price,
            'currency' => (string) $settings->currency,
            'registration_enabled' => (bool) $settings->registration_enabled,
        ]);
    }
}
