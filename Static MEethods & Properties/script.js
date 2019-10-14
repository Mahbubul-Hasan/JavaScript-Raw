staticFunction = function()
{
  this.x = 100;
  this.y = 200;
  this.sum = function()
  {
    console.log(this.x + this.y);
  }
}

staticFunction.prototype.z = 400;
staticFunction.w = 500                        //Stattic

var staticObject = new staticFunction();
console.log(staticObject.z);


console.log(staticFunction.w);              //call static Function
