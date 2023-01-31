<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/logo.svg" />
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/sass/landing-page/scss/style.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
							<a href="/" class="text-decoration-none d-inline-flex align-items-center">
								<img class="header-logo-image" src="/logo.svg" alt="Logo">
                                <span class="text-sm p-2 text-white">Traktir</span>    
                            </a>
                        </h1>
                    </div>
                    <div class="position-relative z-100">
                        <a role="button" href="{{ route('register') }}" class="text-decoration-none">
                            <button class="btn btn-primary">Daftar</button>
                        </a>

                        <a role="button" href="{{ route('login') }}" class="text-decoration-none">
                            <button class="btn">Masuk</button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
