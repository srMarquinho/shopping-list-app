function getItemLocation(){
  var itemsBefore = itemCounter;
  $.ajax({
    type: 'GET',
    url: '/items/get_item_location',
    success: function(json) {
      if (json.length !== itemsBefore) {
        var alertString = "Don't forget to pick up:\n";
        json.forEach(function(item) {
          alertString += ("- " + item.name + " from " + item.place_name + "\n");
        });
        // alert(alertString);
        itemCounter = json.length;
      }
    }
  });
}
