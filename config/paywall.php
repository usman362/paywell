<?php

return [
    'free_library_limit' => env('PAYWALL_FREE_LIBRARY_LIMIT', 1),
    'library_price' => env('PAYWALL_LIBRARY_PRICE', '9.99'),
    'registration_requires_payment' => env('PAYWALL_REGISTRATION_REQUIRES_PAYMENT', false),
    'registration_price' => env('PAYWALL_REGISTRATION_PRICE', '4.99'),
];
