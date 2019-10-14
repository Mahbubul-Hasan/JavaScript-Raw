buttonFunction = function() {
  var text = myForm.inputBox.value;
  if (text == "") {
    alert('Please enter your input');
  }
  else {
    document.write(text);
  }
}
