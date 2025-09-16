<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function getUser($id){
        $user = UserService::getUser($id);
        if ($user) {
            return $this->responseJSON($user);
        } else {
            return $this->responseJSON(null, "User not found", 404);
        }
    }

    function updateUser(Request $request, $id){

        $user = UserService::getUser($id);
        if (!$user) {
            return $this->responseJSON(null, "User not found", 404);
        }
        try {
            $user = UserService::updateUser($request->all(), $user);
            return $this->responseJSON($user);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return $this->responseJSON(null, $e->errors(), 422);
        }
    }
}
