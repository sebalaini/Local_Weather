$(document).ready(function(){

// LOCATION request
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
var lat = position.coords.latitude;
var long = position.coords.longitude;

var url = "http://api.openweathermap.org/data/2.5/weather?lat=";
var appid = "&APPID=a4b3eb234adddc9781ee965ab3aba708";
  
  //AJAX request weather API
  $.getJSON( url + lat + "&lon=" + long + appid, function(data) {

  var city = data.name;
  var country = data.sys.country;
  var condition = data.weather[0].description;
  var temperature = data.main.temp;
  var temperature_c = (temperature - 273).toFixed(2); 
  var temperature_f = (((temperature - 273) * 9 / 5) + 32).toFixed(2); 

  $("#city").html(city + ". " + country);
  $(".temperature_f").html(temperature_f);
  $(".temperature_c").html(temperature_c);
  $("#condition").html(condition);

if (condition.indexOf("clear") !== -1) {
    $("body").css("background", "url(img/clear.jpg)");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  } 
  else if (condition.indexOf("cloud") !== -1){
    $("body").css("background", "url(img/clouds.jpg)");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("drizzle") !== -1){
    $("body").css("background", "url(img/drizzle.jpg)");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("mist") !== -1){
    $("body").css("background", "url(img/mist.jpg)");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("rain") !== -1){
    $("body").css("background", "url(img/rain.jpg)");
  }
  else if (condition.indexOf("snow") !== -1){
    $("body").css("background", "url(img/snow.jpg)");
  }
  else if (condition.indexOf("thunderstorm") !== -1){
    $("body").css("background", "url(img/thunderstorm.jpg)");
  }
  else {
    $("body").css("background", "url(img/default.jpg)");
  }

  $("button.change").click(function() {
  if ($("#unitC").hasClass("hidden")) {
    $(".temperature_c").removeClass("hidden");
    $(".temperature_f").addClass("hidden");
    $("#unitF").addClass("hidden");
    $("#unitC").removeClass("hidden");
  } else {
      $(".temperature_c").addClass("hidden");
      $(".temperature_f").removeClass("hidden");
      $("#unitF").removeClass("hidden");
      $("#unitC").addClass("hidden");
  }
}); //end change unit click

  console.log (data);
    }); //end JSON weather API

  });
}

}); //end ready

