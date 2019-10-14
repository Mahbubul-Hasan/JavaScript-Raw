searchFunction = function () {
  var string = document.getElementsByTagName('h4')[0].innerHTML;
  document.write(string.search(/Web/i));
};
