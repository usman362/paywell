<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
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
    'middleware' => ['api', 'auth:api', 'active'],
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
    'middleware' => ['api', 'auth:api', 'active'],
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('allusers','AdminController@allusers');
    Route::post('addNewUser', 'AdminController@addNewUser');
    Route::put('editUser/{user}', 'AdminController@editUser');
    Route::put('disableUser/{user}', 'AdminController@toggleUserActive');
    Route::delete('deleteUser/{user}', 'AdminController@deleteUser');
    Route::post('addNewLibrary/{user}', 'AdminController@addNewLibrary');
    Route::get('alllibraries/{user}', 'AdminController@alllibraries');
    Route::get('getUser/{library}', 'AdminController@getUser');
    Route::post('addnewFile/{library}', 'AdminController@addnewFile');
});

// Chat (admin: full; users: only their rooms via same endpoints)
Route::group([
    'middleware' => ['api', 'auth:api', 'active'],
    'namespace' => 'App\Http\Controllers\api',
    'prefix' => 'chat',
], function ($router) {
    Route::get('users', 'ChatController@users');
    Route::get('rooms', 'ChatController@index');
    Route::post('rooms', 'ChatController@store');
    Route::get('rooms/{chat_room}', 'ChatController@show');
    Route::put('rooms/{chat_room}', 'ChatController@update');
    Route::delete('rooms/{chat_room}', 'ChatController@destroy');
    Route::post('rooms/{chat_room}/members', 'ChatController@addMembers');
    Route::delete('rooms/{chat_room}/members/{user}', 'ChatController@removeMember');
    Route::get('rooms/{chat_room}/messages', 'ChatController@messages');
    Route::post('rooms/{chat_room}/messages', 'ChatController@sendMessage');
    Route::delete('rooms/{chat_room}/messages/{chat_message}', 'ChatController@destroyMessage');
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('getallfiles/{library}', 'ApiController@getallfiles');
    Route::get('get_libraries', 'ApiController@get_libraries');
});

// Paywall settings: public read, admin write
Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::get('paywall/settings', 'PaywallSettingsController@show');
    Route::put('paywall/settings', 'PaywallSettingsController@update')->middleware(['auth:api', 'active']);
});

// Announcements feed (list for everyone; create/update/delete admin only)
Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers\api',
    'prefix' => 'announcements',
], function ($router) {
    Route::get('/', 'AnnouncementController@index');
    Route::post('/', 'AnnouncementController@store')->middleware(['auth:api', 'active']);
    Route::put('{announcement}', 'AnnouncementController@update')->middleware(['auth:api', 'active']);
    Route::delete('{announcement}', 'AnnouncementController@destroy')->middleware(['auth:api', 'active']);
});

// Mass email (admin only)
Route::group([
    'middleware' => ['api', 'auth:api', 'active'],
    'namespace' => 'App\Http\Controllers\api',
], function ($router) {
    Route::post('mass-email/send', 'MassEmailController@send');
});
