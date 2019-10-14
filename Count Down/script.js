var countDown = 10;

startCounting = function () {
  count = setTimeout(function () {
    if (countDown >= 0) {
      document.getElementsByClassName('divetion')[0].innerHTML = countDown;
      countDown--;
      startCounting();
    }
  }, 1000);
};

stopCounting = function () {
  clearTimeout(count);
  document.getElementsByClassName('divetion')[0].innerHTML = 'Stopped';
};
