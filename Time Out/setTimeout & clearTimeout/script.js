SetTimeout = function () {
  timeOut = setTimeout(time, 3000);
  document.getElementsByClassName('divetion')[0].innerHTML = "It's begin";
};

time = function () {
  document.getElementsByClassName('divetion')[0].innerHTML = 'It just end after 3 sec';
};

ClearTimeout = function () {
  clearTimeout(timeOut);
  document.getElementsByClassName('divetion')[0].innerHTML = 'It clear that time';
};
