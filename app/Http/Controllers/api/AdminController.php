<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\File;
use App\Models\Library;
use App\Models\PaywallSettings;
use Image;

class AdminController extends Controller
{
    public function allusers () {
        return response()->json(User::where('role',1)->get());
    }
   
     public function alllibraries (User $user) {
        $libraries = Library::where('user_id' , $user->id)->latest()->get();
        return response()->json(['libraries' => $libraries->loadCount('files') 
        , 'user' => $user]);
     }

     public function addNewLibrary(User $user) {
        $paywall = PaywallSettings::get();
        $currentCount = Library::where('user_id', $user->id)->count();
        if ($currentCount >= $paywall->free_library_limit) {
            return response()->json([
                'message' => 'User has reached library limit. Payment is required to create more libraries.',
                'paywall' => true,
                'free_library_limit' => $paywall->free_library_limit,
                'price' => $paywall->price,
                'currency' => $paywall->currency,
            ], 402);
        }

        request()->validate([
            'name' => 'required',
            'password' => 'required',
        ]);
        $library =  new Library ;
        $library->name = request()->name;
        $library->user_id = $user->id;
        $library->is_lock   = request()->is_lock;
        $library->is_hidden   = request()->is_hidden;
        $library->password   = request()->password;
        if (request()->logo) {
            $library->logo   = request()->logo;   
        }
        $library->save();
        $library->user_login_token  = $library->id . rand(00000, 99999);
        $library->save();
        return response()->json($library);
    }
    public function addNewUser() {
       $data = request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
        ]);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);
        $user->user_login_token = $user->id . rand(0000, 9999); 
        $user->save();
        return response()->json($user);
    }

    public function editUser(User $user) {
        if (request()->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);
         
        $user->name = request()->name;
        $user->email = request()->email;
        if (request()->has('is_active')) {
            $user->is_active = (bool) request()->is_active;
        }
        if(request()->password) {
            request()->validate(['password' => 'required|confirmed|min:6']);
            $user->password  = Hash::make(request()->password);
        }
        if(request()->user_login_token) {
            request()->validate(['user_login_token' => 'required|unique:users,user_login_token,'.$user->id]);
            $user->user_login_token  = request()->user_login_token;
        }
        $user->save();
        return response()->json($user);
    }

    /**
     * Enable or disable a user (admin only). Body: { "is_active": true|false }
     */
    public function toggleUserActive(User $user) {
        if (request()->user()->role != 2) {
            return response()->json(['message' => 'Forbidden'], 403);
        }
        request()->validate(['is_active' => 'required|boolean']);
        $user->is_active = request()->is_active;
        $user->save();
        return response()->json([
            'user' => $user->fresh(),
            'message' => $user->is_active ? 'User enabled' : 'User disabled',
        ]);
    }

    public function getUser(Library $library) {
       $files = File::where('library_id' ,$library->id)->latest()->get();
       $user = User::where('id' , $library->user_id)->first();
       return response()->json(['user' => $user , 'files' => $files]);
    }

    public function deleteUser(User $user) {
        if($user) {
            $user->delete();
        }

        return response()->json(['message' => 'success']);
    }

    public function addnewFile(Library $library) {
        request()->validate([
            'name' => 'required',
            'url' => 'required'
        ]);
        $file =  new File ;
        $file->name = request()->name;
        $file->library_id = $library->id;
        $file->description   = request()->description;
        $file->version   = request()->version;
        $file->package   = request()->package;
        $file->url   = request()->url;   
        $file->type   = request()->type;
        $file->logo   = request()->logo;
        $file->save();
        return response()->json($file);

    }
}
