var driver_name = "Mahbubul";

var myCar =
{
  maxspeed : 150,
  driver_name : "Rahul",
  drive : function(speed , time)
  {
    console.log(speed * time + " kph");
  },
  driver : function()
  {
    console.log("The driver name is " + this.driver_name);
  }
};

myCar.drive(110 , 4);
myCar.driver();
