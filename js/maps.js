function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9385526,30.3232812)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/point.png";
  var myLatLng = new google.maps.LatLng(59.9385,30.3232);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
