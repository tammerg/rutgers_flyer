function initMap(){
  var myLatLng = {lat: 40.4862157, lng: -74.4518188};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title:"EY YO!"
  });
}
initMap();
