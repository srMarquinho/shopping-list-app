var x = document.getElementById("user-coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
           "<br>Longitude: " + position.coords.longitude;

  $.ajax({
    type: 'POST',
    url: '/items/get_user_location',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({ lat: position.coords.latitude,
                           lng: position.coords.longitude }),
    success: function(json){
      json.forEach(function(item){
        alert("Don't forget to pick up " + item.name + ". You're not far away!")
      });
    }
  });

};
setInterval(function() {
  getLocation();
}, 10000);
