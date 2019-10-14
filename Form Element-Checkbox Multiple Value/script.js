myFunction = function () {
  document.write('You are selected' + selectedFunction());
};

selectedFunction = function () {
  var list = '<ul>';
  for (var i = 0; i < 5; i++) {
    var myValue = myForm.chBox[i];
    if (myValue.checked) {
      list += '<li>' + myValue.value + '</li>';
    }
  }

  list += '</ul>';
  return list;
};





// var array = [];
// myFunction = function (check) {
//   array.push(check);
// };
//
// submitFunction = function () {
//   var list = '<ul>';
//   for (var i = 0; i < array.length; i++) {
//     list += '<li>' + document.write(array[i]) + '</li>';
//   }
//
//   list += '</ul>';
// };
