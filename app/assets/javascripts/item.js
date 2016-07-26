$(document).ready(function(){
  $(".item-check").bind("change", function(){
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    })
  })
})
