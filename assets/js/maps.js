function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
        lat: 40.750700,
        lng: -73.993385
    },
    {
        lat: 39.993206,
        lng: 116.396436
    },
    {
        lat: 34.043178,
        lng: -118.267286
    }];
    var marker = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length];
        });
    });

    var markerCluster = new MarkerClusterer(map, marker, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    google.maps.event.addListener(marker, 'click', function () {
        map.panTo(this.getPosition());
    });

}
