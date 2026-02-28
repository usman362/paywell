<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class PaywallSettings extends Model
{
    const CACHE_KEY = 'paywall_settings';
    const CACHE_TTL = 3600;

    protected $fillable = [
        'free_library_limit',
        'price',
        'currency',
        'registration_enabled',
    ];

    protected $casts = [
        'free_library_limit' => 'integer',
        'price' => 'decimal:2',
        'registration_enabled' => 'boolean',
    ];

    /**
     * Get the single paywall settings row (singleton).
     * Uses cache to avoid hitting DB on every request.
     */
    public static function get(): self
    {
        return Cache::remember(self::CACHE_KEY, self::CACHE_TTL, function () {
            $row = self::first();
            if ($row) {
                return $row;
            }
            return new self([
                'free_library_limit' => config('paywall.free_library_limit', 1),
                'price' => config('paywall.price', 9.99),
                'currency' => config('paywall.currency', 'USD'),
                'registration_enabled' => config('paywall.registration_enabled', true),
            ]);
        });
    }

    /**
     * Update settings and clear cache.
     */
    public static function updateSettings(array $data): self
    {
        $settings = self::first();
        if (!$settings) {
            $settings = self::create($data);
        } else {
            $settings->update($data);
        }
        Cache::forget(self::CACHE_KEY);
        return $settings->fresh();
    }

    protected static function booted()
    {
        static::saved(fn () => Cache::forget(self::CACHE_KEY));
        static::deleted(fn () => Cache::forget(self::CACHE_KEY));
    }
}
