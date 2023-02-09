<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Session;
use Stripe;

class PaymentController extends Controller
{
    //
	
	public function index(Request $request)
	{
		$product = Product::findOrFail($request->id);
		$data = [];
		$data['product'] = $product;
		return view('purchase-index', $data);
	}
	
	public function indexPost(Request $request)
    {
		$product = Product::findOrFail($request->id);
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        Stripe\Charge::create ([
                "amount" => $product->price * 100,
                "currency" => "USD",
                "source" => $request->stripeToken,
                "description" => "This is test payment",
        ]);
		   
        Session::flash('success', 'Payment Successful !');           
        return Redirect::back();
    }
	
}
