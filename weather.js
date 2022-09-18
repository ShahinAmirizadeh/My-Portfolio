"use strict"

const url = "https://api.openweathermap.org/data/2.5/weather?q=Honolulu&APPID=a958bd2ce124fd1cc112fa481d3d7ae4";

$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
        console.log(result.name);

        //output the location
        let displayCity = `Current weather in ${result.name}`;
        $("#location").html(displayCity);

        //display the temperature
        let F = Math.round(result.main.temp * (9 / 5) - 459.67);
        let displayTemp = `Temperature: ${F}&#176;F`;
        $("#temperature").html(displayTemp);

        //display the wind
        let windSpeed = Math.round(result.wind.speed / .44704);
        let displayWind = `Wind : ${windSpeed} mph`;
        $("#wind").html(displayWind);

        //display the sky condition
        let displaySky = `Sky condition: ${result.weather[0].description}`;
        $("#sky").html(displaySky);

    }
})