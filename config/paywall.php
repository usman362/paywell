<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Free library limit
    |--------------------------------------------------------------------------
    | Number of libraries a new account can create before payment is required.
    | Overridden by admin-editable value in paywall_settings table when present.
    */
    'free_library_limit' => (int) env('PAYWALL_FREE_LIBRARY_LIMIT', 1),

    /*
    |--------------------------------------------------------------------------
    | Subscription price
    |--------------------------------------------------------------------------
    | Default price and currency. Overridden by admin-editable value in DB.
    */
    'price' => (float) env('PAYWALL_PRICE', 9.99),
    'currency' => env('PAYWALL_CURRENCY', 'USD'),

    /*
    |--------------------------------------------------------------------------
    | Registration enabled
    |--------------------------------------------------------------------------
    | When false, new account creation is behind paywall (disabled).
    | Overridden by admin-editable value in paywall_settings table when present.
    */
    'registration_enabled' => env('PAYWALL_REGISTRATION_ENABLED', true),
];
