mathFunctions = function(number)
{
  with(document.Math)
  switch (number) {
    case 1:
      resultNumber.value = Math.abs(inputNumber.value);
      break;
    case 2:
      resultNumber.value = Math.round(inputNumber.value);
      break;
    case 3:
      resultNumber.value = Math.sin(convertDegree(inputNumber.value));
      break;
    case 4:
      resultNumber.value = Math.cos(convertDegree(inputNumber.value));
      break;
    case 5:
      resultNumber.value = Math.tan(convertDegree(inputNumber.value));
      break;
    case 6:
      resultNumber.value = Math.log(inputNumber.value);
      break;
    case 7:
      resultNumber.value = Math.floor(inputNumber.value);
      break;
    case 8:
      resultNumber.value = Math.ceil(inputNumber.value);
      break;
    case 9:
      resultNumber.value = Math.sqrt(inputNumber.value);
      break;
    case 10:
      resultNumber.value = Math.pow(inputNumber.value, 2);
      break;
    case 11:
      resultNumber.value = Math.max(inputNumber.value, prompt("Enter a number"));
      break;
    case 12:
      resultNumber.value = Math.min(inputNumber.value, prompt("Enter a number"));
      break;
    case 13:
      resultNumber.value = Math.exp(inputNumber.value);
      break;
    case 14:
        resultNumber.value = Math.PI;
        break;
    default:
        console.log("Oh!!!");
  }
}

convertDegree = function(n)
{
  return n / 57.295779513;
}
