<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Library;
use Spatie\QueryBuilder\QueryBuilder;

class ApiController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:api', 'active.user']);
    }

    public function getallfiles (Library $library) {
        $files = File::where('library_id' , $library->id)->latest();
        $filter = QueryBuilder::for($files)->allowedFilters(['name'])
            ->paginate(20)->appends(request()->query());
        return \response()->json($filter);
    }

    public function get_libraries () {
        $libraries = Library::where(['user_id' => request()->user()->id , 'is_hidden' => 0])->withCount('files')->latest();
        $filter = QueryBuilder::for($libraries)->allowedFilters(['name'])
            ->paginate(30)->appends(request()->query());
        return \response()->json($filter);
    }
}
