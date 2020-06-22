const url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/champions?search[name]=u&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";

function getData(champion, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}



function getTableHeaders(obj) {
    var tableHeaders = [];
    
    Object.keys(obj).forEach(function(key) {
        delete attackspeedoffset;
      
        tableHeaders.push(`<td class="table-header">${key}</td>`)
    });
    

    return `<tr>${tableHeaders}</tr>`;
}



function writeToDocument(champion) {
    
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";
    

    getData(champion, function(data) {
      
        
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
           
            var dataRow = [];

            Object.keys(item).forEach(function(key){
              


                    
                    dataRow.push(`<td class="table-cell">${item[key]}</td>`);
                    
            });
           
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table class="table-api">${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    });
}