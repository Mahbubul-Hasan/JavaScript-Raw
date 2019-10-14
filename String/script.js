console.log('I am a fun string');
console.log('I am a "fun" string');
console.log('I\'m a "fun" string');

var string = 'I am Mahbubul';

console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log('The position of "Mah" is ' + string.indexOf('Mah'));
console.log('The position of "Hasan" is ' + string.indexOf('Hasan'));

var string_1 = 'abc';
var string_2 = 'ABC';

if (string_1 < string_2)
{
  document.write('a < A');
}
else
{
  document.write('a > A');
}
