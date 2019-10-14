var obj1 = {
  one: "This is one"
};
var obj2 = {
  two: "This is two"
};
if (!Object.prototype.specialProperty)
  Object.prototype.specialProperty = "This is prototype Object"; //open with chrome , specialProperty just a name

console.log(obj2);

var myArray1 = ["one", "two", "three"];
var myArray2 = [1, 2, 3, 4, 5];
if (!Array.prototype.arrayType)
  Array.prototype.arrayType = "This is protype Array";

console.log(myArray1.arrayType);
console.log(myArray2);

var address = {
  city: "Dhanmondi",
  country: "Bangladesh"
};

address.postalCode = "1200";

Object.keys(address).forEach(function(value) {
  console.log(address[value]);
});
