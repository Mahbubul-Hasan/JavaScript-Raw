testFunction = function () {
  var text = document.getElementsByTagName('h4')[0].innerHTML;

  if (/e/.test(text))
    console.log('"' + /e/.exec(text) + '" is exist in text');
  else
    console.log('"' + /e/.exec(text) + '" is not exist in text');
};
