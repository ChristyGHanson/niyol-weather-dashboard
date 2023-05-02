// Set up fetch request.
var cityName = 'Tohatchi'
// concatenation for Geocoding API
// must be an http link
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=70e43b9f8bfe1d2806261c345fcd05fb')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.city.coord);
        // Make two variables for latitude (lat) and longitude(lon).
        // Grab data from lat and lon from the API. 
        var lat = data.city.coord.lat;
        var lon = data.city.coord.lon;
        // Use the 5 day/3 hour forecast data
        // Pass lat and lon to the next fetch request next line. 
        // units = imperial (avoid Kelvin units)
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=70e43b9f8bfe1d2806261c345fcd05fb')
            .then(function (response) {
                // Returns the response. .json makes it readable.
                return response.json();
            })
            .then(function (data) {
                // We can console log it because we returned the .json response.
                console.log(data);
            })
    });

