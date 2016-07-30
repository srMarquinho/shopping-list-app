$.ajax({
  type: 'POST',
  url: '/items/get_user_location',
  success: function(json) {
    // console.log(json);
    json.forEach(function(item) {
    console.log(item)
    console.log("hello")
    });
  }
});
