



 document.getElementById("appearN").style.display = "none";   // for dispalying name after 10 seconds.
 setTimeout(function(){
     document.getElementById("appearN").style.display = "block";      
 },10000);





 var x = new Date();   // to display date.

 document.getElementById("vam").innerHTML = x.toLocaleDateString();