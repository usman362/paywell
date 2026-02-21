<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Library;
use App\Models\PlatformSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login',  'register', 'login_token','secure_login']]);
    }


    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = $this->guard()->attempt($credentials)) {
            if (request()->user() && request()->user()->is_disabled) {
                $this->guard()->logout();
                return response()->json(['error' => 'Account disabled'], 403);
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
        if ($token = $this->guard()->login($user)) {
            if ($user && $user->is_disabled) {
                $this->guard()->logout();
                return response()->json(['error' => 'Account disabled'], 403);
            }
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
        if ($token = $this->guard()->login($user)) {
            if ($user && $user->is_disabled) {
                $this->guard()->logout();
                return response()->json(['error' => 'Account disabled'], 403);
            }
            return $this->respondWithToken($token , $library);
        }
    
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function register(Request $request)
    {
        $registrationRequiresPayment = filter_var(
            PlatformSetting::getValue('registration_requires_payment', config('paywall.registration_requires_payment')),
            FILTER_VALIDATE_BOOLEAN
        );

        if ($registrationRequiresPayment) {
            return response()->json([
                'message' => 'Registration requires payment',
                'price' => PlatformSetting::getValue('registration_price', config('paywall.registration_price')),
            ], 402);
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
            'is_paid' => false,
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
