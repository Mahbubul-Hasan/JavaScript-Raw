if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition(currentPosition, timeError);
  // var watchPosition = navigator.geolocation.watchPosition(watchPosition);
  // navigator.geolocation.clearWatch(watchPosition);
}

function currentPosition(currentPosi)
{
  console.log(currentPosi)
}

function timeError(error)
{
  console.log(error);
}

function watchPosition(watchPosi)
{
  console.log("Accuracy" + watchPosi.coords.accuracy + "\nLatitude" + watchPosi.coords.latitude + "\nLongitude" + watchPosi.coords.longitude);
}
