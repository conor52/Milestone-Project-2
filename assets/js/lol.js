$(document).ready(function() {
    
    
    // $("#btn-champions").click(function(){
    //     writeToDocument('teams')
    // });
    //alert('heyhey')
    //$.get("https://api.pandascore.co/players?name=Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg", function(data, status){
        //console.log(data)
    //});
    // $.ajax({
    //     url: "https://api.pandascore.co/players?name=Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg",
    //     type: 'GET',
    //     dataType: 'json', // added data type
    //     success: function(res) {
    //         console.log(res);
    //         //alert(res);
    //     }
    // });
    showPlayers()
    //getData("https://api.pandascore.co/players?name=Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg")
});

const url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/lol/champions?search[name]=u&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";
const url_champion = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/players?name=Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg"



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

function getDataPlayers(champion, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url_champion);
    xhr.send();
}



function getTableHeaders(obj) {
    var tableHeaders = [];
    
    data = Object.keys(obj)
    console.log(data)
    tableHeaders.push('<td class="table-header">'+data[0]+'</td><td class="table-header">'+data[1]+'</td>');

    //Object.keys(obj).forEach(function(key) {
        
        //delete attackspeedoffset;
        
        //
    //});
    

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
            dataRow.push('<td class="table-cell">'+item['armor']+'</td><td class="table-cell">'+item['armorperlevel']+'</td>');
            //alert(item['armor'])
            //alert(item['armorperlevel'])
            //Object.keys(item).forEach(function(key){
                    //dataRow.push(`<td class="table-cell">${item[key]}</td>`);
            //});
           
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table class="table-api">${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
    });

    
}

function showPlayers(champion) {
    getDataPlayers(champion, function(data) {
        data.forEach(function(item) {
            if(item['current_videogame']['slug'] == "league-of-legends"){
                console.log(item)
            }
            
        });
        
    });
}