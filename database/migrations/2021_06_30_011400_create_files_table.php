<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->foreignId('library_id')->nullable();
            $table->text('logo')->nullable();
            $table->string('package')->nullable();
            $table->text('description')->nullable();
            $table->text('url')->nullable();
            $table->string('version')->nullable();
            $table->unsignedInteger('type')->comment("0 > apk 1 > pdf 2 > audio 3 > video 4 > other")->default(0);
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
        Schema::dropIfExists('files');
    }
}
