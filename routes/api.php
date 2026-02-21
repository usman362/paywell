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
    'middleware' => ['api', 'auth:api', 'active.user'],
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

    Route::get('chat/rooms', 'ChatController@rooms');
    Route::get('chat/rooms/{chatRoom}/messages', 'ChatController@messages');
    Route::post('chat/rooms/{chatRoom}/messages', 'ChatController@send');

    Route::get('announcements/feed', 'AnnouncementController@feed');

    Route::get('getallfiles/{library}', 'ApiController@getallfiles');
    Route::get('get_libraries', 'ApiController@get_libraries');
});

Route::group([
    'middleware' => ['api', 'auth:api', 'active.user'],
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

    Route::put('admin/users/{user}/disable', 'AdminPlatformController@disableUser');
    Route::put('admin/users/{user}/enable', 'AdminPlatformController@enableUser');

    Route::get('admin/paywall', 'AdminPlatformController@getPaywallSettings');
    Route::put('admin/paywall', 'AdminPlatformController@updatePaywallSettings');

    Route::get('admin/chat/rooms', 'AdminPlatformController@allRooms');
    Route::post('admin/chat/rooms', 'AdminPlatformController@createRoom');
    Route::put('admin/chat/rooms/{chatRoom}', 'AdminPlatformController@updateRoom');
    Route::delete('admin/chat/rooms/{chatRoom}', 'AdminPlatformController@deleteRoom');
    Route::get('admin/chat/messages', 'AdminPlatformController@adminMessages');

    Route::get('admin/announcements', 'AdminPlatformController@allAnnouncements');
    Route::post('admin/announcements', 'AdminPlatformController@createAnnouncement');
    Route::put('admin/announcements/{announcement}', 'AdminPlatformController@updateAnnouncement');
    Route::delete('admin/announcements/{announcement}', 'AdminPlatformController@deleteAnnouncement');

    Route::post('admin/mass-email', 'AdminPlatformController@sendMassEmail');
});
