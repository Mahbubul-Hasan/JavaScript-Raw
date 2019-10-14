func = function()
{
  // private
  x = 100;
  y = 200;
  z = function()
  {
    console.log("Private");
  }

  // Public
  this.a = 1000;
  this.b = 2000;
  this.c = function()
  {
    console.log("private");
  }
}

var funcObject = new func();
console.log(funcObject.a);
