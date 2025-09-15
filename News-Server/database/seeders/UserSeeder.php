<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Sinar',
            'last_name' => 'Fayyad',
            'email' => 'sinar@example.com',
            'password' => Hash::make('sino2005'),
            'role' => 'admin',
        ]);

        User::create([
            'first_name' => 'Wassim',
            'last_name' => 'Mahmoud',
            'email' => 'wassim@example.com',
            'password' => Hash::make('wisso2005'),
            'role' => 'admin',
        ]);
    }
}
