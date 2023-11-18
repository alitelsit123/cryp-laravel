<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>@yield('title',config('app.name'))</title>

  <link rel="shortcut icon" href="{{url('favicon.png')}}" type="image/x-icon" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

  @viteReactRefresh
  @vite(['resources/js/app.ts','resources/css/app.css'])

</head>

<body>
  <div id="root"></div>
</body>

</html>
