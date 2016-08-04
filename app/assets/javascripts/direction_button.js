$( window ).on('turbolinks:load', function(){
  var mapNoDirections = document.getElementById('no-direction-map');
  var mapDirections = document.getElementById('show-map');
  button.onclick = function() {
    if (mapNoDirections.style.display !== 'none' || mapDirections.style.opacity == 0)
    {
        mapDirections.style.opacity = 100
        mapNoDirections.style.display = 'none';
    }
    else {
        mapDirections.style.opacity = 0;
        mapNoDirections.style.display = 'block';
        ;
    }
  }
});
