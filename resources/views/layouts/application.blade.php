<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
		<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<meta name="description" content="">
		<!-- <link rel="icon" type="image/png" href="assets/images/favicon.png" /> -->
		
		<!-- CSRF Token -->
		<meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        

        <!-- Styles -->	
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/bootstrap.min.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/fontawesome.min.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/ekko-lightbox.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/vendors.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/style.css') }}" />
		<link rel="stylesheet" type="text/css" href="{{ asset('assets/admin/css/theme-style.css') }}" />
		
		@yield('style')
		
		<script src="{{ asset('assets/admin/js/jquery.min.js') }}" type="text/javascript"></script>
		
    </head>
    <body>
		
		@include('header')
		@yield('content')
		@include('footer')
		 
	<!-- Scripts -->
	
	<script src="{{ asset('assets/admin/js/vendors.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/admin/js/app.js') }}" type="text/javascript"></script>
    <!-- Modal Efects -->
    <script src="{{ asset('assets/admin/js/velocity.min.js') }}"></script>
    <script src="{{ asset('assets/admin/js/velocity.ui.min.js') }}"></script>
	<script src="{{ asset('assets/admin/js/ekko-lightbox.min.js') }}"></script>
    <script src="{{ asset('assets/admin/js/custom.js') }}" type="text/javascript"></script>
    @yield('javascript')
	
	</body>
</html>