<?php

namespace App\Services;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserService
{
    static function getUser($id){
        return User::find($id);
    }
   
    static function updateUser($data, $user){

        $validator = Validator::make($data, [
            'username' => 'sometimes|required|string|max:255',
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
       
        $user->username = $data["username"]? $data["username"]: $user->username; 

        $user->save();
        return $user;
    }
}
