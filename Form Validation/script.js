var name = myForm.nameText;
var email = myForm.emailText;
var phone = myForm.phoneText;
var noCall = myForm.checkBox;
var selectedBox = myForm.selectBox;
var comment = myForm.textAreaBox;

formSubmit = function() {
  var emailRegularEx = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
  var name = myForm.nameText;

  if (name.value == "") {
    document.getElementsByClassName("innerText")[0].innerHTML = "Please enter your Name";
  } else if (email.value == "" || !emailRegularEx.test(email.value)) {
    document.getElementsByClassName("innerText")[0].innerHTML = "Please enter your valid e-mail";
  } else if (phone.value == "" && !noCall.checked) {
    document.getElementsByClassName("innerText")[0].innerHTML = "Please enter your phone number";
  } else if (selectedBox.selectedIndex < 1) {
    document.getElementsByClassName("innerText")[0].innerHTML = "Please select our service";
  } else if (comment.value == "") {
    document.getElementsByClassName("innerText")[0].innerHTML = "Please enter your comment";
  } else {
    document.write("Thank you for your feedback");
  }
}

callFunction = function() {

  if (noCall.checked) {
    phone.disabled = true;
  } else {
    phone.disabled = false;
  }
}
