$.ajax({
  type: 'GET',
  url: '/items/get_item_location',
  success: function(json) {
    json.forEach(function(item) {
        if(!item.completed) window.alert(item.name + " is near you!");
    });
  }
});
