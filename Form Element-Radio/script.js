radioFunction = function () {
  for (var i = 0; i < 5; i++) {
    var myValue = myFrom.radioBox[i];
    if (myValue.checked) {
      document.write('Your Are selected ' + myValue.value);
    }
  }
};
