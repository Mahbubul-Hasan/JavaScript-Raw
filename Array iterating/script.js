var array1 = ["One", "Two", "Three","Four","Five"];
var array2 = [1,2,3,4,5];
var array3 = ["One", "Two", "Three", 4, 5];

array1.forEach(function(value , index)                //forEach == for loop
  {
    console.log("Index of " +value+ " is " +index);
  }
);

array1.every(function(value)                           //every = to check "string" or number
{
  console.log(typeof value == "string");
});

array2.every(function(value)                           //every = to check "string" or number
{
  console.log(typeof value != "number");
});

array3.filter(function(value)                          //filter = to check "string" or number
{
  console.log(typeof value == "string");
});
