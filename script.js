// JavaScript File
$(document).ready(function () {
  
  $("#button").click(function() {

var correctvalue = 7;
var userinput = $("#userinput").val();

 if (userinput==="7"){
   $("h1").text("Correct answer");
 }
else if (userinput>correctvalue){
    $("h1").text("Too High");
}
else {
    $("h1").text("Too Low");
}


});
  
  
  
});








