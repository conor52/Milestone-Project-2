$(document).ready(function() {
     
         writeToDocument('teams');
         
   
});

const url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.champions?filter[name]=Brand,Twitch&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";

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
    
    data = Object.keys(obj)
    tableHeaders.push('<td class="table-header">'+data[0]+'</td><td class="table-header">'+data[1]+'</td>');
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
            dataRow.push('<td class="table-cell">'+item['armor']+'</td>>');
         
           
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table class="table-api">${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    });
}

