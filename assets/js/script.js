<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Weather Dashboard</title>
</head>

<body>
    <header class="container-fluid text-center text-white bg-dark p-2">
        <h1 style="font-size: 36px;">Weather Dashboard</h1>
    </header>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 bg-light">
                <h5 class="mt-1" style="font-size: 20px;">Search for a City:</h5>
                <div class="input-group mb-3">
                    <input id="enter-city" type="text" class="form-control" placeholder="Enter a city" aria-label="Enter a city">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="search-button">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <button class="btn btn-primary mb-3" type="button" id="clear-history" style="font-size: 16px;">Clear history</button>
                <form id="history"></form>
            </div>
            <div class="col-lg-9">
                <div class="row mr-0">
                    <div class="col-lg-11 card m-3 d-none" id="today-weather">
                        <div class="card-body">
                            <h3 id="city-name" class="city-name align-middle" style="font-size: 28px;"></h3>
                            <img id="current-pic" alt="">
                            <p id="temperature" style="font-size: 20px;"></p>
                            <p id="humidity" style="font-size: 20px;"></p>
                            <p id="wind-speed" style="font-size: 20px;"></p>
                            <p id="UV-index" style="font-size: 20px;"></p>
                        </div>
                    </div>
                </div>
                <div class="row d-none" id="fiveday-header">
                    <div class="col-12">
                        <h3 style="font-size: 24px;">5-Day Forecast</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 forecast bg-primary text-white m-2 rounded"></div>
                    <div class="col-md-2 forecast bg-primary text-white m-2 rounded"></div>
                    <div class="col-md-2 forecast bg-primary text-white m-2 rounded"></div>
                    <div class="col-md-2 forecast bg-primary text-white m-2 rounded"></div>
                    <div class="col-md-2 forecast bg-primary text-white m-2 rounded"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./assets/script.js"></script>
</body>

</html>
