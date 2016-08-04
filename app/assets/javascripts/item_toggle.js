$(document).ready(function(){
  $(".fa-check-square-o").click(function(){
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    });
    $(this).toggleClass('fa-check-square-o');
    $(this).toggleClass('fa-shopping-cart');
    $('#card-complete'+this.id).toggleClass('card-complete');
    $('#card-complete'+this.id).toggleClass('card-incomplete');
  });

  // $('.card-complete').click(function(){
  //   $(this).toggleClass('card-complete');
  //   $(this).toggleClass('card-incomplete');
  // });

  $(".fa-shopping-cart").click(function(){
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    });
    $(this).toggleClass('fa-shopping-cart');
    $(this).toggleClass('fa-check-square-o');
    $('#card-incomplete'+this.id).toggleClass('card-complete');
    $('#card-incomplete'+this.id).toggleClass('card-incomplete');
  });

  // $('.card-incomplete').click(function(){
  //   $(this).toggleClass('card-incomplete');
  //   $(this).toggleClass('card-complete');
  // });
});
