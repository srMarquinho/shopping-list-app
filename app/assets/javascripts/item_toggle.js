$(document).ready(function(){
  $(".item-check").click(function(){
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    });
  });
});
