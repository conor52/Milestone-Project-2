$(document).ready(function() {
    
    
  
    showPlayers();
  
});


$(document).ready(function() {
    
    writeToDocument('teams')
  
   
  
});

const url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/players?filter[name]=Caps&Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";





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






function writeToDocument(champion) {
    
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";
    

    getData(champion, function(data) {
      
        

        data.forEach(function(item) {
           
            var dataRow = [];
            dataRow.push('<td class="player-cell">'+item['current_team']["name"]+'</td><td class="table-cell">'+item['role']+'</td>><td class="table-cell">'+item['name']+'</td>');
            
           
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table class="table-api">${tableRows}</table>`.replace(/,/g, "");
    });

    
}


function showPlayers(champion) {
    getData(champion, function(data) {
        data.forEach(function(item) {
            if(item['current_videogame']['slug'] == "league-of-legends"){
                console.log(item)
            }
            
        });
        
    });
}


