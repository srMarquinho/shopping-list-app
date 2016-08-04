function initMap() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var myLat = position.coords.latitude;
      var myLng = position.coords.longitude;
      var myLocation = new google.maps.LatLng(myLat, myLng);
      var directionsDisplay = new google.maps.DirectionsRenderer(document.getElementById('direction-display'));
      var directionsService = new google.maps.DirectionsService(document.getElementById('direction-service'));

      // Creating Maps
      var mapNoDirections = new google.maps.Map(document.getElementById('no-direction-map'), {
          center: { lat: itemLatitude, lng: itemLongitude },
          zoom: 15,
        });
      var mapDirections = new google.maps.Map(document.getElementById('show-map'), {
        center: { lat: itemLatitude, lng: itemLongitude },
        zoom: 15,
      });


      // Setting Icons
      var youIcon = 'https://s31.postimg.org/m9bv4fq7f/you_icon.png'
      var itemIcon = 'https://s32.postimg.org/loajgnlg5/item_icon.png'

      // Creating & Setting Markers

      var myMarker = new google.maps.Marker({ map: mapDirections, icon: youIcon });
      var myMarker2 = new google.maps.Marker({ map: mapNoDirections, icon: youIcon });
      myMarker.setPosition(myLocation);
      myMarker2.setPosition(myLocation);

      // Creating Item Markers

      var itemMarker = new google.maps.Marker({
        position: { lat: itemLatitude, lng: itemLongitude },
        map: mapDirections,
        icon: itemIcon
      });
      var itemMarker2 = new google.maps.Marker({
        position: { lat: itemLatitude, lng: itemLongitude },
        map: mapNoDirections,
        icon: itemIcon
      });


    // Setting up Display Services
    directionsDisplay.setPanel(document.getElementById('panel'));
      var request = {
        origin: myLocation,
        destination: {lat: itemLatitude, lng: itemLongitude},
        travelMode: google.maps.DirectionsTravelMode.WALKING
      };
    directionsService.route(request, function (response, status){
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    // Setting the map
    directionsDisplay.setMap(mapDirections);

    });
  });
 }
}
