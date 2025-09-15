<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;


Route::group(["prefix" => "v0.1"], function(){
    Route::post("/login", [AuthController::class , "login"]);
    Route::post("/register", [AuthController::class , "register"]);

    Route::middleware('jwt.auth')->group(function() {
        Route::post('/logout', [AuthController::class, 'logout']);

        Route::post("/updateUser/{id}", [UserController::class, "updateUser"]);
        Route::get("/user/{id}", [UserController::class , "getUser"]);

        Route::get("/News/{id?}", [NewsController::class, "getNews"]);

        Route::middleware('admin')->group(function() {
            Route::post("/addNews", [NewsController::class, "addNews"]);
            Route::post("/deleteNews/{id}", [NewsController::class, "deleteNews"]);
        });
    });

});
