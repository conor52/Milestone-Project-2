const url="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/champions?token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg&filter[name]=Sejuani";


                    function getData(type, cb) {

                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url);
                    xhr.send();

                    xhr.onreadystatechange = function() {

                        if(this.readyState == 4 && this.status == 200 ) {
                            console.log((this.responseText));
                        cb(JSON.parse(this.responseText));
                        }
                    };

                    }

                    function writeToDocument(type) {

                        getData(type, function(data){
                            console.dir(data);

                            document.getElementById("data").innerHTML = data;
                        });
                    }











