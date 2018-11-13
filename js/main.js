function openNav() {
    var sidebar = document.getElementById("mySideNav");
    sidebar.style.width = "25%";
}

function closeNav() {
    var sidebar = document.getElementById("mySideNav");
    sidebar.style.width = "0%";
}

//------Google Maps-----//
var map,
        geocoder,
        infoWindow,
        givenLocation;

var markers = [];

//Constants
var ZOOM = 10;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.8283, lng: -98.5795},
        zoom: 5
    });

    //Adds event listener to map that records where the click was and transforms it into latLng coordinates
    google.maps.event.addListener(map, 'click', function (event) {
        //console.log(event.latLng);
        reverseGeocode(event.latLng);
    });

    geocoder = new google.maps.Geocoder();
    infoWindow = new google.maps.InfoWindow();
}

//Find location on map based on given address using Google's Geocoding API
function geocodeAddress() {
    deleteMarkers();
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(ZOOM);
            givenLocation = results[0].geometry.location;
            addMarker(results[0]);
        } else {
            window.alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

//Find location info based on given coordinates
function reverseGeocode(latLng) {
    geocoder.geocode({'location': latLng}, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                console.log(results[0].formatted_address);
                givenLocation = results[0].geometry.location;
                addMarker(results[0]);
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}

//Find user's current location
function geolocateAddress() {
    deleteMarkers();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            map.setZoom(ZOOM);
            reverseGeocode(pos);

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

//Error handling for geolocation
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


//Adds a marker to the markers array
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location.geometry.location,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(location.formatted_address);
        infoWindow.open(map, this);
    });

    markers.push(marker);
    showMarkers();
}

//Sets the markers' map setting to the given map, displaying them on said map
function setMaps(map) { //local map variable
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

//Sets the markers' map setting to null, taking them off said map
function clearMarkers() {
    setMaps(null);
}

//Passes global map variable to setMaps(), showing markers
function showMarkers() {
    setMaps(map);
}

//Clears map and resets markers array
function deleteMarkers() {
    clearMarkers();
    markers = [];
}
