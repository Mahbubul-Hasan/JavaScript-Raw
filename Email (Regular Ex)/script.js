// blurFunction = function () {
//   var textEmail = document.getElementsByTagName("input")[0];
//   var email = textEmail.value;
//   var emailRegularEx = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
//
//   if (emailRegularEx.test(email))
//     textEmail.style.color = "black";
//   else
//     textEmail.style.color = "red";
// }
myFunction = function () {
  var emailTake =  document.getElementsByTagName('input')[0].value;
  var emailRegEx = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
  // document.getElementsByTagName('input')[0].style.backgroundColor = 'red';
  if (emailRegEx.test(emailTake)) {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'green';
  } else {
    document.getElementsByTagName('input')[0].style.backgroundColor = 'red';
  }
};
