var javascript = document.getElementById("javascript");

javascript.addEventListener("click", function(){
  console.log("It is clicked");
});

var divetion = document.getElementsByClassName("child")[0];

divetion.addEventListener("click", function(e){
  console.log(e.target.nodeName +" is clicked");
  e.stopPropagation();
});

document.addEventListener("click", function(){
  console.log("Something is clicked");
});

var ancorTag = document.createElement("a");
ancorTag.textContent = "Google";
ancorTag.setAttribute("href", "https://www.google.com/");
document.body.appendChild(ancorTag);

ancorTag.addEventListener("click", function(e){
  e.preventDefault();
  console.log(e.target.nodeName +" is clicked" );
  e.stopPropagation();
});

divetion.addEventListener("mouseenter", function(){
  console.log("Mouse was enter");
});
