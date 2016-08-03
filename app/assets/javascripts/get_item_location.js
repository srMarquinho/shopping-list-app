function getItemLocation(){
  var itemsBefore = itemCounter;
  $.ajax({
    type: 'GET',
    url: '/items/get_item_location',
    success: function(json) {
      if (json.length !== itemsBefore) {
        var alertString = "Don't forget to pick up:\n";
        json.forEach(function(item) {
          alertString += ("* " + item.name + " from " + item.place_name + "\n");
        });

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
          cordova.plugins.notification.local.schedule({
            id: 1,
            text: alertString,
            every: 'minute',
            autoClear: false,
            at: new Date(new Date().getTime() + 1 * 1000)
          });
        }
        
        itemCounter = json.length;
      }
    }
  });
}
