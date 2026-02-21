<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('logins', 'AuthController@login');
    Route::post('login_token', 'AuthController@login_token');
    Route::post('secure_login', 'AuthController@secure_login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::put('savePushToken/{user}', 'AuthController@savePushToken');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::post('addnewFile', 'UsersController@addnewFile');
    Route::delete('deletefile/{file}', 'UsersController@deletefile');
    Route::get('allfiles/{library}', 'UsersController@allfiles');
    Route::get('alllibraries', 'UsersController@alllibraries');
    Route::post('addNewLibrary', 'UsersController@addNewLibrary');
    Route::put('editFile/{file}', 'UsersController@editFile');
    Route::put('editLibrary/{library}', 'UsersController@editLibrary');
    Route::delete('deleteLibrary/{library}', 'UsersController@deleteLibrary');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('allusers','AdminController@allusers');
    Route::post('addNewUser', 'AdminController@addNewUser');
    Route::put('editUser/{user}', 'AdminController@editUser');
    Route::delete('deleteUser/{user}', 'AdminController@deleteUser');
    Route::post('addNewLibrary/{user}', 'AdminController@addNewLibrary');
    Route::get('alllibraries/{user}', 'AdminController@alllibraries');
    Route::get('getUser/{library}', 'AdminController@getUser');
    Route::post('addnewFile/{library}', 'AdminController@addnewFile');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('getallfiles/{library}', 'ApiController@getallfiles');
    Route::get('get_libraries', 'ApiController@get_libraries');
});
