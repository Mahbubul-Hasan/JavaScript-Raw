matchFunction = function () {
  document.getElementsByTagName('textarea')[0].innerHTML = '';
  var string = document.getElementsByTagName('input')[0].value;
  var number = string.match(/\d+/g);

  // document.getElementsByTagName('textarea')[0].innerHTML = number;        //online

  for (var i = 0; i < number.length; i++) {
    document.getElementsByTagName('textarea')[0].innerHTML += number[i] + '\n';
  }
};

// man-163 get-364 set-56
