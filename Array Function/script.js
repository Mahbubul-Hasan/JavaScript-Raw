var array = ['One', 'Tow', 'Three'];
console.log(array);
console.log('Length = ' + array.length);      //Length

console.log('push()');                        //push
array.push('Four');
console.log(array);

console.log('unShift()');                     //unshift
array.unshift('Zero');
console.log(array);

console.log('pop()');                         //pop
array.pop();
console.log(array);

console.log('shift()');                       //shift
array.shift();
console.log(array);

console.log('splice()');                      //splice
array.splice(0, 2);
console.log(array);

array = ['One', 'Tow', 'Three'];

array.splice(0, 3, 'a', 'b', 'c');
console.log(array);

console.log('reverse()');                     //reverse
array.reverse();
console.log(array);

console.log('join()');                       //join
console.log(array.join(' 001'));
console.log(array.join());
console.log(array.join(''));
