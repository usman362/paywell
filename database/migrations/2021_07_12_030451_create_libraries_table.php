<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibrariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('libraries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable();
            $table->string('user_login_token')->nullable();
            $table->text('logo')->nullable();
            $table->string('name')->nullable();
            $table->text('desc')->nullable();
            $table->unsignedInteger('is_lock')->comment("0 > false 1 > true")->default(0);
            $table->unsignedInteger('is_hidden')->comment("0 > false 1 > true")->default(0);
            $table->string('password')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('libraries');
    }
}
