let geo = navigator.geolocation;
geo.getCurrentPosition(function (pos) {
  let lat = pos.coords.latitude;
  alert(lat);
},
function (error) {
  alert(error.code);

}

)
