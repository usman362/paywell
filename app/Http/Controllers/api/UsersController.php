<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;
use App\Models\File;
use App\Models\Library;

class UsersController extends Controller
{

    public function allfiles (Library $library) {
        $files = File::where('library_id' , $library->id)->latest()->get();
        return response()->json($files);
    }

    public function alllibraries() {
        $libraries = Library::where('user_id' , request()->user()->id)->latest()->get();
        return response()->json($libraries->loadCount('files'));
    }
    public function addNewLibrary() {
        request()->validate([
            'name' => 'required',
            'password' => 'required',

        ]);
        $library =  new Library ;
        $library->name = request()->name;
        $library->user_id = request()->user()->id;
        $library->is_lock   = request()->is_lock;
        $library->is_hidden   = request()->is_hidden;
        $library->password   = request()->password;
        if (request()->logo) {
            $library->logo   = request()->logo;   
        }
        $library->save();
        $library->user_login_token = $library->id . rand(00000, 99999);
        $library->save();
        return response()->json($library);
    }
    
    public function addnewFile() {
        request()->validate([
            'name' => 'required',
            'url' => 'required',
            'library_id' => 'required'
        ]);
        $file =  new File ;

        $file->name = request()->name;
        $file->library_id = request()->library_id;
        $file->description   = request()->description;
        $file->version   = request()->version;
        $file->package   = request()->package;
        $file->url   = request()->url;
        $file->type   = request()->type;
        $file->logo = request()->logo;
        $file->save();
        return response()->json($file);

    }
    


    public function editLibrary(Library $library) {
        request()->validate([
            'name' => 'required',
            'password' => 'required'
        ]);

        $library->name = request()->name;
        $library->password   = request()->password;
        $library->is_lock   = request()->is_lock;
        $library->is_hidden   = request()->is_hidden;
        if (request()->logo) {
             $library->logo   = request()->logo;
           }
        if(request()->user_login_token) {
            request()->validate(['user_login_token' => 'required|unique:users,user_login_token|unique:libraries,user_login_token,'.$library->id]);
            $library->user_login_token = request()->user_login_token;
        }
        $library->save();
        return response()->json($library->loadCount('files'));

    }

    public function editFile(File $file) {
        request()->validate([
            'name' => 'required',
        ]);

        $file->name = request()->name;
        $file->description   = request()->description;
        $file->version   = request()->version;
        $file->package   = request()->package;
        $file->url   = request()->url;
        $file->type   = request()->type;
        $file->logo = request()->logo;
        $file->save();
        return response()->json($file);

    }

    

    public function deletefile(File $file) {
        $file->delete();
        return response()->json(['message' => 'success']);
    }

    public function deleteLibrary(Library $library) {
        if($library->files) {
          $library->files()->delete();
        }
        $library->delete();
        return response()->json(['message' => 'success']);
    }

    
}
