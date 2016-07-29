var items = [];
$.ajax({
  type: 'GET',
  url: '/items/get_items',
  success: function(json) {
    console.log(json);
    // json.forEach(function(item) {
    //   items.push(item);
    //   // console.log(item.latitude);
    //   // console.log(item.longitude);
    // });
  }
});
