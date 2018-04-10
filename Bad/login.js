var showMap = $('#map-canvas');

  $(document).ready(function(){
    downloadMap();
    downloadWeather();

      $('#logInButton').on('click',logIn)
  });


function logIn() {

  if ( $("#studentID").val() == "100523538" && $("#password").val() == "100523538"){
  window.location = "classes.html"; // Redirecting to other page.
} else {
  alert("Incorrect Password Or Username, Please Try Again")
}
}

function downloadMap(){
  var mapOptions = {
    center: { lat: 43.9459, lng: 78.8967},
    zoom: 8
};
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

}

function downloadWeather(){
  var latitude = $('#lat').val();
  var longitude = $('#lon').val();


  var url = 'http://api.apixu.com/v1/forecast.json?key=0c4d4e086108490d8b733747180603&q=43.9459,78.8967+&days=7'

      $.getJSON(url, function(data) {
        var current = data.current.temp_c;
        var high = data.forecast.forecastday[0].day.maxtemp_c;
        var low = data.forecast.forecastday[0].day.mintemp_c;
        var feelsLike = data.current.feelslike_c;
        var condition = data.current.condition.text;
        var cloudCover = data.current.cloud;
        var humidity = data.current.humidity;
        var pressure = data.current.pressure_mb;
        var direction = data.current.wind_dir;
        var speed = data.current.wind_kph;



        $('#weather').css("background-color", "lightBlue");
        $('#weather').css("border-color", "black");
        $('#weather').css("border-width", "2px");
        $('#weather').css("border-style", "solid");
        $('#weather').css("list-style-type", "none");

        $('#weather').append('<p><b>Temperature</b></p>')
        $('#weather').append('<li>Current: ' + current + '&deg;C</li>')
        $('#weather').append('<li>High: ' + high + '&deg;C</li>')
        $('#weather').append('<li>Low: ' + low + '&deg;C</li>')

        $('#weather').append('<li>Feels Like: ' + feelsLike + '&deg;C</li>')
        $('#weather').append('<p></p>')
        $('#weather').append('<p><b>Condition</b></p>')
        $('#weather').append('<li>' + condition + '</li>')
        $('#weather').append('<li>Cloud Cover: ' + cloudCover + '%</li>')
        $('#weather').append('<li>Humidity: ' + humidity + '%</li>')
        $('#weather').append('<li>Pressure: ' + pressure + ' mB</li>')
        $('#weather').append('<p></p>')
        $('#weather').append('<p><b>Wind</b></p>')
        $('#weather').append('<li>Direction: ' + direction + '</li>')
        $('#weather').append('<li>Speed: ' + speed + ' km/h</li>')

      });

}
