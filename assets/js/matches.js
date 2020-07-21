$(document).ready(function() {
    for (ctr = 1; ctr < 6; ctr++) {
        writeToDocument(ctr);
    } 
});

function getData(match, cb) {
    var xhr = new XMLHttpRequest();
    var url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/matches?filter[id]=" + match + "&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

function writeToDocument(match) {
    var match = '';
    var game_number='';
    switch(match) {
        case 1:
            match = 560862;
            game_number=1;
            break;
        case 2:
            match = 560863;
            game_number=2;
            break;
        case 3:
            match = 560864;
            game_number=3;
            break;
        case 4:
            match = 560865;
            game_number=4;
            break;
        case 5:
            match = 560866;
            game_number=5;
            break;
    }

    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-"+game_number);
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });

    getData(match, function(data) {
        var gameDetails = []
        var el = document.getElementById("league-and-format-"+game_number);
        data.forEach(function(item) {
            var matchRow = [];
           matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        
        console.log(gameDetails.length)
        if(gameDetails.length > 0){
            el.innerHTML = `<p>${gameDetails}</p>`;
        }
    });
}