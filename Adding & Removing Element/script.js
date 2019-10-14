var divetion = document.getElementsByClassName("child")[0];
var javascript = document.getElementById("javascript");

divetion.appendChild(javascript);

var secondDiv = document.getElementsByTagName("h2")[1];
divetion.insertBefore(javascript, secondDiv);

var thirdDiv = document.getElementsByTagName("h3")[1];
divetion.removeChild(thirdDiv);
var secondHead = document.getElementsByTagName("h2")[0];
// document.body.removeChild(secondHead);

if(document.body.contains(secondHead))
  document.body.removeChild(secondHead);

var fifthDiv = document.createElement("h5");
fifthDiv.textContent = "I am the fifth child of div";

divetion.appendChild(fifthDiv);

var thirdHead = document.getElementsByTagName("h3")[0];
document.body.replaceChild(javascript, thirdHead);
