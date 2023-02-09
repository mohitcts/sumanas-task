<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
	
	public function index()
	{
		return view('product-index');
	}
	
	public function indexAjaxPost(Request $request) {
		
		if ( ! $request->ajax() ) {
			abort(404);
		}
		
		//dd($request->all());
		$page = ($request->page) ? $request->page : 1;
		$category = ($request->category) ? $request->category : '';
		$search = ($request->search) ? $request->search : '';
		$data = [];
		$limit = 10;
		$offset = ($page - 1) * $limit;		
		
		$products = Product::select('*');
		
		$recordsTotal = $products->count();
		
		//$recordsFiltered = $products->count();
		
		$products->orderBy('id', 'DESC');
		$products->offset($offset);
		$products->limit($limit);
		
		$data['page'] = $page;
		$data['recordsTotal'] = $recordsTotal;
		$data['totalPage'] = ceil($recordsTotal / $limit);  
		$data['recordsFiltered'] = $recordsTotal;
		$data['data'] = $products->get();
		$data['request'] = $request->all();
		
		return response()->json($data);
	}
	
}
