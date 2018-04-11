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
  var location = {lat: 43.9459 ,lng: -78.8967 };
  var map = new google.maps.Map(document.getElementById('map-canvas'),{
    zoom: 4,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
});
