var array = [5, 1, 2, 3, 4, 5, 6, 7, 8, 5, 10];

console.log(array.indexOf(5));            //indexOf
console.log(array.indexOf(5, 2));         //nth indexOf
console.log(array.lastIndexOf(5));        //lastIndexOf

if (array.indexOf(0) > -1) {
  console.log('Yes!!! It is exist');
} else {
  console.log('No!!! It is not exist');
}
