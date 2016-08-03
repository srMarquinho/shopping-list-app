function initMap(itemLat, itemLng) {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var myLat = position.coords.latitude
    var myLng = position.coords.longitude
    var myLocation = new google.maps.LatLng(myLat, myLng);
    var directionsDisplay = new google.maps.DirectionsRenderer(document.getElementById('direction-display'));
    var directionsService = new google.maps.DirectionsService(document.getElementById('direction-service'));
    var map = new google.maps.Map(document.getElementById('show-map'), {
        center: {
          lat: itemLat,
          lng: itemLng
        },
        zoom: 15,
      });

      var map2 = new google.maps.Map(document.getElementById('no-direction-map'), {
          center: {
            lat: itemLat,
            lng: itemLng
          },
          zoom: 15,
        });

       directionsDisplay.setMap(map);

        var youIcon = 'https://s31.postimg.org/m9bv4fq7f/you_icon.png'
        var itemIcon = 'https://s32.postimg.org/loajgnlg5/item_icon.png'
        var myMarker = new google.maps.Marker({
          map: map,
          icon: youIcon,
        });

        var myMarker2 = new google.maps.Marker({
          map: map2,
          icon: youIcon,
        });


        myMarker.setPosition(myLocation);
        myMarker2.setPosition(myLocation);

        var itemMarker = new google.maps.Marker({
          position: { lat: itemLat, lng: itemLng },
          map: map,
          icon: itemIcon
        });

        var itemMarker2 = new google.maps.Marker({
          position: { lat: itemLat, lng: itemLng },
          map: map2,
          icon: itemIcon
        });



        directionsDisplay.setPanel(document.getElementById('panel'));
        var request = {
          origin: myLocation,
          destination: {lat: itemLat, lng: itemLng},
          travelMode: google.maps.DirectionsTravelMode.WALKING
        };

        directionsService.route(request, function (response, status){
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      });
     }
   }
