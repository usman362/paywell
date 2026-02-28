<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Library;
use App\Models\PaywallSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login',  'register', 'login_token','secure_login']]);
        $this->middleware('active', ['except' => ['login', 'register', 'login_token', 'secure_login']]);
    }


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = $this->guard()->attempt($credentials)) {
            $user = $this->guard()->user();
            if (!$user->is_active) {
                $this->guard()->logout();
                return response()->json([
                    'error' => 'Account disabled',
                    'message' => 'Your account has been disabled. Please contact support.',
                ], 403);
            }
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
    
     public function login_token(Request $request)
    {
        $library = null;
        $user = User::where('user_login_token' , $request->user_login_token)->first();
        if($user === null){
         $lib =  Library::where('user_login_token' , $request->user_login_token)->first();
         if($lib !== null) {
          $library = $lib;
          $user = $lib->user;
          
         }
        }
        if ($user && !$user->is_active) {
            return response()->json([
                'error' => 'Account disabled',
                'message' => 'Your account has been disabled. Please contact support.',
            ], 403);
        }
        if ($token = $this->guard()->login($user)) {
            return $this->respondWithToken($token , $library);
        }
    
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function secure_login(Request $request)
    {
        $user = null;
        $library =  Library::where(['id' => $request->id , 'password' => $request->pin_code])->first();
        if($library !==  null){
            $user = $library->user;
        }
        if ($user && !$user->is_active) {
            return response()->json([
                'error' => 'Account disabled',
                'message' => 'Your account has been disabled. Please contact support.',
            ], 403);
        }
        if ($token = $this->guard()->login($user)) {
            return $this->respondWithToken($token , $library);
        }
    
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function register(Request $request)
    {
        $paywall = PaywallSettings::get();
        if (!$paywall->registration_enabled) {
            return response()->json([
                'message' => 'Registration is currently disabled. Please contact support.',
            ], 403);
        }

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
        ]);

       $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $user->user_login_token = $user->id . rand(0000, 9999); 
        $user->save();

        return $this->login($request);
    }


    public function me()
    {
        return response()->json($this->guard()->user());
    }


    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }


    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }


    protected function respondWithToken($token , $library=null)
    {
        return response()->json([
            'access_token' => $token,
            'user' => request()->user(),
            'library' =>$library,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ]);
    }
    
    public function savePushToken(User $user , Request $request)
    {
        $request->validate(['push_token' => 'required']);
        $user->push_token = $request->push_token;
        $user->save();
        return response()->json([
            'message' => 'success',
        ]);
    }


    public function guard()
    {
        return Auth::guard();
    }
}
