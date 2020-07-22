function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 42.619261,
            lng: 125.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
        lat:37.516002,
        lng:127.072793
    },
    {
        lat:37.568497,
        lng: 126.897299
    },
    {
        lat:35.190370, 
        lng:129.058241
    }];
    var marker = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, marker, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    google.maps.event.addListener(marker,'click',function() {
               map.setZoom(9);
               map.setCenter(marker.getPosition());
            });
}

