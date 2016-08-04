$(document).ready(function(){
  $(".fa-check-square-o").click(function(){
    console.log("I've been clicked!")
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    });
  });

  $(".fa-shopping-cart").click(function(){
    console.log("I've been clicked!")
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    });
  });
});
