Sum = function (x, y) {
  this.a = x;
  this.b = y;
  this.add = function () {
    console.log(this.a + this.b);
  };
};

Product = function (x, y) {
  this.a = x;
  this.b = y;
  this.multy = function () {
    console.log(this.a * this.b);
  };
};

Product.prototype = new Sum();

var productObj = new Product(5, 10);

productObj.add();
