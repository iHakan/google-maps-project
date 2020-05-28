var map;
function initMap() {
    var losAngeles = {
        lat:34.063380 ,
        lng:-118.358080
    }
    var istanbul = {
        lat:41.015137 , //latitute  
        lng:28.979530   //longtitute
    }
    var kocaEli = {
        lat:40.766666 ,
        lng:29.916668
    }
    var bursa = {
        lat:40.193298 ,
        lng:29.074202
    }
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.015137, lng: 28.979530},
    zoom: 8,
    styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: 'rgb(51, 218, 115)'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: 'rgb(51, 218, 115)'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]
  });
  var marker1 = new google.maps.Marker({position: losAngeles, map: map});
  var marker2 = new google.maps.Marker({position: istanbul, map: map});
  var marker3 = new google.maps.Marker({position: kocaEli, map: map});
  var marker4 = new google.maps.Marker({position: bursa, map: map});

  displayStores();
}

function displayStores(){
    stores.forEach(function(store){
        var storesHtml = "";
        console.log(store);

    });
}