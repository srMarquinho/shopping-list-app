function getItemLocation(){
  $.ajax({
    type: 'GET',
    url: '/items/get_item_location',
    success: function(json) {
      alertMessage(json);
    }
  });
}

function alertMessage(json) {
  var itemsBefore = itemCounter;
  if (json.length !== itemsBefore) {
    var alertString = "Don't forget to pick up:\n";
    json.forEach(function(item) {
      alertString += ("* " + item.name + " from " + item.place_name + "\n");
    });
    alertUser(alertString);
    itemCounter = json.length;
  }
}

function alertUser(string) {
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    cordova.plugins.notification.local.schedule({
      id: 1,
      text: string,
      every: 'minute',
      autoClear: false,
      at: new Date(new Date().getTime() + 5 * 1000)
    });
  }
}
