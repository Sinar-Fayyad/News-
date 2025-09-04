<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;


Route::group(["prefix" => "v0.1"], function(){
    Route::post("/login", [AuthController::class , "login"]);
    Route::post("/register", [AuthController::class , "register"]);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::get("/user/{id}", [UserController::class , "getUser"]);
        Route::post("/updateUser/{id}", [UserController::class, "updateUser"]);

        Route::post("/addNews", [NewsController::class, "addNews"]);
        Route::get("/News/{id?}", [NewsController::class, "getNews"]);
        Route::post("/deleteNews/{id}", [NewsController::class, "deleteNews"]);
    });
});
