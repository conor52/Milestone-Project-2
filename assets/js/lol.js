const url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/champions?token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";

function getData(cb) {
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }

    };

}






