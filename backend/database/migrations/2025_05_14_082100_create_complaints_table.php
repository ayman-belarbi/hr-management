<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->enum('type', ['harassment', 'discrimination', 'working_conditions', 'salary', 'other']);
            $table->enum('status', ['pending', 'investigating', 'resolved', 'dismissed']);
            $table->foreignId('assigned_to')->nullable()->constrained('employees')->onDelete('set null');
            $table->text('resolution')->nullable();
            $table->date('resolution_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complaints');
    }
};
