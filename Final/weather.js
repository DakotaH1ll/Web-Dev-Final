$(document).ready(function(){

    $("#mapLink").click(function(){
        window.location.href = "map.html";
    });

    $("#weatherLink").click(function(){
        window.location.href = "weather.html";
    });

    $("#addLink").click(function(){
        window.location.href = "classes.html";
    });

    var weatherURL = "http://api.apixu.com/v1/forecast.json?q=43.9459,-78.8967&key=7f7c75d89bce4396af7192649181903";
    $.getJSON(weatherURL,function(data){
        $("#weather").append("<h3>Temprature</h3>");
        $("#weather").append("<h6>Current: " + data.current.temp_c + "&#176C </h6>");
        $("#weather").append("<h6>Low: " + data.forecast.forecastday[0].day.mintemp_c + "&#176C </h6>");
        $("#weather").append("<h6>High: " + data.forecast.forecastday[0].day.maxtemp_c + "&#176C </h6>");
        $("#weather").append("<h6>Feels Like: " + data.current.feelslike_c + "&#176C </h6>");

        $("#weather2").append("<h3>Condition</h3>");
        $("#weather2").append("<h6>" + data.current.condition.text +"</h6>");
        $("#weather2").append("<h6>Cloud cover: " + data.current.cloud + "% </h6>");
        $("#weather2").append("<h6>Humidty: " + data.current.humidity + "% </h6>");
        $("#weather2").append("<h6>Pressure: " + data.current.pressure_mb + "mb </h6>");

        $("#weather3").append("<h3>Wind</h3>");
        $("#weather3").append("<h6>Direction: " + data.current.wind_dir +"&#176</h6>");
        $("#weather3").append("<h6>Speed: " + data.current.wind_kph + "km/h </h6>");
    });
});
