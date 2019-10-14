var getName = myForm.name;
var getEmail = myForm.email;
var getPhone = myForm.phone;
var getDonotcall = myForm.donotcall;
var getSelectBox = myForm.selectBox;
var getComment = myForm.comment;

myFunction = function () {
  var emailRegEx = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
  var phoneRegEx = /\((?<AreaCode>\d{3})\)\s*(?<Number>\d{3}(?:-|\s*)\d{4})/;

  if (getName.value == '') {
    document.getElementById('demo').innerHTML = 'Please enter your name';
    return false;
  } else if (getEmail.value == '' || emailRegEx.test(getEmail.value) == false) {
    document.getElementById('demo').innerHTML = 'Please enter your valid email';
    return false;
  } else if (!getDonotcall.checked && (!getPhone.value || !phoneRegEx.test(getPhone.value))) {
    document.getElementById('demo').innerHTML = 'Please enter your valid phone number';
    return false;
  } else if (getSelectBox.selectedIndex < 1) {
    document.getElementById('demo').innerHTML = 'Please select for your help';
    return false;
  } else if (getComment.value == '') {
    document.getElementById('demo').innerHTML = 'Please enter your comment';
    return false;
  } else {
    document.write('Thank you for your feedback');
  }
};

checkTest = function () {
  if (getDonotcall.checked) {
    getPhone.disabled = true;
  } else {
    getPhone.disabled = false;
  }
};
