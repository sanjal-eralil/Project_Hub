var button=document.getElementById("button");


button.addEventListener("click",display);

function display(){
  var response=document.getElementById("response");
  response.innerHTML="Your project has been successfully added";
}
