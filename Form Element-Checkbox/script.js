onFunction = function () {
  var number = myForm.inputBox.value;
  
  if (myForm.chBox.checked) {
    myForm.textArea.value = Math.pow(number, 2);
  }
  else {
    myForm.textArea.value = number * 2;
  }
}
