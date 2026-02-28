<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePaywallSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('paywall_settings', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('free_library_limit')->default(1);
            $table->decimal('price', 10, 2)->default(9.99);
            $table->string('currency', 3)->default('USD');
            $table->boolean('registration_enabled')->default(true);
            $table->timestamps();
        });

        DB::table('paywall_settings')->insert([
            'free_library_limit' => 1,
            'price' => 9.99,
            'currency' => 'USD',
            'registration_enabled' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('paywall_settings');
    }
}
