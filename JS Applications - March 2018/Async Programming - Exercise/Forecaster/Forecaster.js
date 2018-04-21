function forecaster() {
    const LOCATIONS = "https://judgetests.firebaseio.com/locations.json";
    const TODAY = "https://judgetests.firebaseio.com/forecast/today/";
    const UPCOMING = "https://judgetests.firebaseio.com/forecast/upcoming/";

    $('#submit').on('click', getWeather);

    function getWeather() {
        let location = $('#location').val();
        let currentForecast = $('#current');
        let upcomingForecast = $('#upcoming');

        $.ajax({
            type: "GET",
            url: LOCATIONS
        }).then(function (res) {
            res.forEach(city => {
                $.get(TODAY + `${city.code}.json`).then(function (today) {
                    if (location === city.name) {
                        $(currentForecast).empty();
                        $('#forecast').css('display', 'block');
                        $(currentForecast)
                            .append($('<div class="label">Current conditions</div>'))
                            .append($(`<span class="condition symbol">${getSymbol(today.forecast.condition)}</span>`))
                            .append($('<span class="condition">')
                                .append($(`<span class="forecast-data">${today.name}</span>`))
                                .append($(`<span class="forecast-data">${today.forecast.low + "&#176;" + '/' + today.forecast.high + "&#176;"}</span>`))
                                .append($(`<span class="forecast-data">${today.forecast.condition}</span>`)))
                    }
                });
                $.get(UPCOMING + `${city.code}.json`).then(function (upcoming) {
                    if (location === city.name) {
                        $(upcomingForecast).empty();
                        $(upcomingForecast).append($('<div class="label">Three day forecast</div>'));
                        for (let forecast of upcoming.forecast) {
                            $(upcomingForecast)
                                .append($('<span class="upcoming">')
                                    .append($(`<span class="symbol">${getSymbol(forecast.condition)}</span>`))
                                    .append($(`<span class="forecast-data">${forecast.low + "&#176;" + '/' + forecast.high + "&#176;"}</span>`))
                                    .append($(`<span class="forecast-data">${forecast.condition}</span>`)))
                        }
                    }
                })
            })
        }).catch(function (err) {
            console.log(err)
        });

        function getSymbol(condition) {
            switch (condition) {
                case 'Sunny':
                    return "&#x2600;";
                    break;
                case 'Partly sunny':
                    return "&#x26C5;";
                    break;
                case 'Overcast':
                    return "&#x2601;";
                    break;
                case 'Rain':
                    return "&#x2614;";
                    break;
            }
        }
    }
}