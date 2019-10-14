var array1 = ['Banana', 'Orange', 'Mango', 'Apple'];

console.log(array1);
console.log('After sorting \n' + array1.sort());

var array2 = [50, 10, 150, 53, 153, 664, 3, 87, 22, 33];

array2.sort(function (a, b) { return a - b;});

console.log(array2);
