function myInterval(msg) {
  console.log(msg);
}

var count = 0;

var Interval = setInterval(function () {
  myInterval('Hello');
  count++;
  if (count == 5) {
    clearInterval(Interval);
  }
}, 1000);
