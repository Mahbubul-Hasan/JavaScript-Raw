var myArray1 = [1, 2, 3, 4, 5];
var myArray2 = [4, 5, 6, 7, 8];

var array = myArray1.concat(myArray2);
console.log(array);

array.sort(function (a, b) {
  return a - b;
});

for (var i = 0; i < array.length; i++) {
  if (array[i] === array[i + 1]) {
    continue;
  }

  console.log(array[i]);
}
