// Set up fetch request.
//method
var cityName = 'Tohatchi'
// concatenation for Geocoding API
fetch('api.openweathermap.org/data/2.5/forecast?q=' + cityName + '& appid=70e43b9f8bfe1d2806261c345fcd05fb')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // Make two variables for lat and long.
        var lat = '';
        var lon = '';
        // Use the 5 day/3 hour forecast data
        // Pass lat and long to the next fetch request next line. 
        // units = imperial (avoid Kelvin units)
        fetch('api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=70e43b9f8bfe1d2806261c345fcd05fb')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
    });

