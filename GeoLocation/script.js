if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition(function(currentPosition)        //current Position
  {
    console.log(currentPosition);
  });

  navigator.geolocation.getCurrentPosition(function(positionError)         //position Error
  {
    console.log(positionError);
  });

  var watchPosition = navigator.geolocation.watchPosition(function(watchPosition)             //very currrent position
  {
    console.log("Accuracy: "+watchPosition.coords.latitude +"\nLaittude :"+watchPosition.coords.latitude + "\nLongitude" +watchPosition.coords.longitude);
  });

  //navigator.geolocation.clearWatch(watchPosition);                  //stop to sync current position
}
