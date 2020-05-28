var map;
var markers = [];
var infoWindow;
function initMap() {
  var losAngeles = {
    lat: 34.06338,
    lng: -118.35808,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.06338, lng: -118.35808 },
    zoom: 8,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "rgb(51, 218, 115)" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "rgb(51, 218, 115)" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });

  infoWindow = new google.maps.InfoWindow(); //we defined the info window at the top global scope
  displayStores();
  showStoreMarkers();
}

function displayStores() {
  var storesHtml = "";
  stores.forEach(function (store, index) {
    var address = store.addressLines;
    var phone = store.phoneNumber;
    storesHtml += `
    <div class="store-container">
      <div class="store-info-container">
        <div class="store-address">
          <address>${address[0]}</address>
          <address>${address[1]}</address>
        </div>
        <div class="store-phone-number">
          <p>
            <i class="fas fa-phone-volume">&ThickSpace;</i>Phone: ${phone}
          </p>
        </div>
      </div>

      <div class="store-number-container">
        <div class="store-number">${index + 1}</div>
      </div>
    </div>`;
  });

  document.querySelector(".stores-list").innerHTML = storesHtml;
}

//////////////////Showing the markers////////////////////////
function showStoreMarkers() {
  var bounds = new google.maps.LatLngBounds();
  stores.forEach(function (store, index) {
    var latlng = new google.maps.LatLng( //to spread the markers
      store.coordinates.latitude,
      store.coordinates.longitude
    );
    console.log(latlng);
    var name = store.name;
    var address = store.addressLines[0]; //we only get the first part of the address
    var openStatus = store.openStatusText;
    var phoneNumber = store.phoneNumber;
    bounds.extend(latlng); //for extending the bound if any markers are outside
    //of the bound to fit it!
    createMarker(latlng, name, address, openStatus, phoneNumber);
  });
  map.fitBounds(bounds); // to spread the markers
}

///////////////////Creating Markers here for google maps////////////////
function createMarker(latlng, name, address, openStatus, phoneNumber, color) {
  var html =
    "<b style='font-size:18px; color:rgb(56, 66, 92);'>" +
    name +
    "</b> <br/>" +
    "<span style='color: rgb(182, 182, 182)'>" +
    openStatus +
    "</span> <br/>" +
    "<hr style='border-top:none; border-bottom:0.2px dashed rgb(182, 182, 182)'>" +
    "<span style='font-size:15px; color:rgb(56, 66, 92);'>" +
    "<i class='fas fa-location'>" +
    address +
    "</i> <br/>" +
    "<span style='font-size:15px; color:rgb(56, 66, 92);'>" +
    "<i class='fas fa-location' style='font-size:15px; color:rgb(56, 66, 92)'>Phone: " +
    phoneNumber +
    "</i>";

  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
  });
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}
