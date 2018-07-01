
$("#add").on("click",function(){
  var n1 = parseInt($('#userinput1').val());
  var n2 = parseInt($('#userinput2').val());
  var r = n1 + n2;
  alert("sum of 2 No= " + r);
});

$("#subtract").on("click",function(){
  var n1 = parseInt($('#userinput1').val());
  var n2 = parseInt($('#userinput2').val());
  var r = n1 - n2;
  alert("sum of 2 No= " + r);
});

$("#multiply").on("click",function(){
  var n1 = parseInt($('#userinput1').val());
  var n2 = parseInt($('#userinput2').val());
  var r = n1 * n2;
  alert("sum of 2 No= " + r);
});

$("#divide").on("click",function(){
  var n1 = parseInt($('#userinput1').val());
  var n2 = parseInt($('#userinput2').val());
  var r = n1 / n2;
  alert("sum of 2 No= " + r);
});
