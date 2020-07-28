// the function initMap will be called when scripts on esports-events.html are loaded
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), { //this object is provided by the google maps API. getElementById will render the API/ map to the  web browser
        zoom: 3,
        center: { // this is the cordinates as to where the map will be fixed on. I have it conveniently placed over south Korea
            lat: 42.619261,
            lng: 125.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //This will differentiate between the labels on the map, which will provide a better UX.

    var locations = [{ //This array contains the marker locations of differnt stadiums in South Korea. Without it, the map wouldn't be well fited for the website.
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
    var marker = locations.map(function (location, i) { //The map method works like a for each function
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length] //The module operater prevents an error if there is more than 26 labels
        });
    });

    var markerCluster = new MarkerClusterer(map, marker, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

