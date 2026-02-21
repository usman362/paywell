<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\File;
use App\Models\Library;
use Image;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:api', 'active.user']);
        $this->middleware(function ($request, $next) {
            if ((int) $request->user()->role !== 0) {
                return response()->json(['message' => 'Admin access only'], 403);
            }
            return $next($request);
        });
    }

    public function allusers () {
        return response()->json(User::where('role',1)->get());
    }
   
     public function alllibraries (User $user) {
        $libraries = Library::where('user_id' , $user->id)->latest()->get();
        return response()->json(['libraries' => $libraries->loadCount('files') 
        , 'user' => $user]);
     }

     public function addNewLibrary(User $user) {
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
        request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);
         
        $user->name = request()->name;
        $user->email = request()->email;
        if(request()->password) {
            request()->validate(['password' => 'required|confirmed|min:6']);
            $user->password  = Hash::make(request()->password);
        }
        if(request()->has('is_disabled')) {
            $user->is_disabled = (bool) request()->is_disabled;
        }
        if(request()->has('is_paid')) {
            $user->is_paid = (bool) request()->is_paid;
        }
        if(request()->user_login_token) {
            request()->validate(['user_login_token' => 'required|unique:users,user_login_token,'.$user->id]);
            $user->user_login_token  = request()->user_login_token;
        }
        $user->save();
        return response()->json($user);

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
