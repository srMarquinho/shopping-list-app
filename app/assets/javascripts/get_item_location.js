function getItemLocation(){
  $.ajax({
    type: 'GET',
    url: '/items/get_item_location',
    success: function(json) {
      json.forEach(function(item) {
          counter += 1;
          if (counter === 1){
              alert("Don't forget to pick up: " + item.name)
          }
      });
    }
  });
};
