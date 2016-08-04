$( window ).on('turbolinks:load', function(){
  // var button = document.getElementById('direction-button');
  var mapNoDirections = document.getElementById('no-direction-map');
  var mapDirections = document.getElementById('show-map');

  $("#direction-button").click(function() {
    if (mapNoDirections.style.display !== 'none' || mapDirections.style.opacity === 0)
    {
        mapDirections.style.opacity = 100;
        mapNoDirections.style.display = 'none';
    }
    else {
        mapDirections.style.opacity = 0;
        mapNoDirections.style.display = 'block';
    }
  });
});
