console.log('HELLO FROM INSIDE BUT OUTSIDE')

$(document).ready(function(){
  $(".item-check").bind("change", function(){
    console.log('HELLO FROM WITHIN ITEM.JS')
    $.ajax({
      url: "/items/"+this.id+"/toggle",
      type: "POST"
    })
  })
})
