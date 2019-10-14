var number = prompt("Enter a number");

factorial = function (n) {
  if (n == 0)
    return 1;

  else {
    return (n * factorial(n - 1));
  }
};

document.write(factorial(number));
