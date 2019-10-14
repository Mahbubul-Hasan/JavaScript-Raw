var myDate = new Date();
console.log(myDate);

var DOB = new Date("1996 07 19");
console.log(DOB);

var anotherDate = new Date("March 01 2001");
console.log(anotherDate);


console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());

console.log(myDate.getUTCDay());
console.log(myDate.getUTCMonth());
console.log(myDate.getUTCFullYear());

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(myDate.toUTCString());
