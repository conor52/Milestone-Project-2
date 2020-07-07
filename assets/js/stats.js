
$(document).ready(function() {
    writeToDocumentCaps('player')
});



$(document).ready(function() {
    writeToDocumentJankos('player')
});

$(document).ready(function() {
    writeToDocumentRekkles('player')
});

$(document).ready(function() {
    writeToDocumentCarzzy('player')
});

$(document).ready(function() {
    writeToDocumentFinn('player')
});

$(document).ready(function() {
    writeToDocumentAlphari('player')
});

$(document).ready(function() {
    writeToDocumentHansSama('player')
});

$(document).ready(function() {
    writeToDocumentLarssen('player')
});

$(document).ready(function() {
    writeToDocumentNukeduck('player')
});

$(document).ready(function() {
    writeToDocumentPerkz('player')
});

$(document).ready(function() {
    writeToDocumentShadow('player')
});

$(document).ready(function() {
    writeToDocumentWunder('player')
});








function getData(player, cb) {
    var xhr = new XMLHttpRequest();

    
   var url="https://cors-anywhere.herokuapp.com/https://api.pandascore.co/players?filter[name]="+player+"&Souffle&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";




    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET",url);
    xhr.send();
    
}

function writeToDocumentCaps(player) {
    player="Caps";
    var playerDetails = [];
    var el = document.getElementById("Caps");
    

    getData(player, function(data) {
      
        data.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+' .Coming off 4 consecutative titles, he is definetly the mid to watch in the LEC. From what we have seen thus far, he is already back to a world class level after coming of a roleswap from adc.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
        
    });
   
}

function writeToDocumentJankos(player) {
    player="Jankos";
    var playerDetails = [];
    var el = document.getElementById("Jankos");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+' .Often touted the Polish Prince, or the First Blood King, Jankos is known for his early snowball style of jungling.With the help of Caps and their Mid-Jungle pressure,It is his meta to dominate.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentRekkles(player) {
    player="Rekkles";
    var playerDetails = [];
    var el = document.getElementById("Rekkles");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+' .No player matches his experience of being a top pro for so long. He has had a few shaky weeks trying soroka in the bot lane. We fully expect him to dominate again come playoffs.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentCarzzy(player) {
    player="Carzzy";
    var playerDetails = [];
    var el = document.getElementById("Carzzy");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. Perhaps the most promosing rookie in European history since Perkz, Carzzy looks to the title in his rookie year of competition while being the tip of the spear for his team.The only thing holding him back for being a European all star is his championships. This is his time to shine.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentFinn(player) {
    player="Finn";
    var playerDetails = [];
    var el = document.getElementById("Finn");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. As good looking as his play, Finn has remained one of the better top laners this split. No other team should be able to exploit his stable laning  when he plays champions such as Ornn and Malphite.The question is, can he pull out carrie in the big games? We will soon find out.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentAlphari(player) {
    player="Alphari";
    var playerDetails = [];
    var el = document.getElementById("Alphari");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. The best player in the league, his team is falling apart around him. You can always count on him getting solo kills and jungle attention, but often its not enough for a struggling Origen to close out games.His Jungler, Xerxe, should consider changing his playstyle towards top lane.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentHansSama(player) {
    player="Hans sama";
    var playerDetails = [];
    var el = document.getElementById("Hans-sama");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {                                
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'He has only recently came off a year of a  struggling Misfits with his superstar LCK support, Gorilla,  Hans has stepped up his game to  match the level of his team, who remains in second place.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentLarssen(player) {
    player="Larssen";
    var playerDetails = [];
    var el = document.getElementById("Larssen");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. He is called the Froggen of Europe(ironic, I know, since Froggen plays in NA but is European), mirroring his super safe yet stable laning style, you can always count on him getting 20+cs leads.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}


function writeToDocumentNukeduck(player) {
    player="Nukeduck";
    var playerDetails = [];
    var el = document.getElementById("Nukeduck");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. He failed this year and in 2019 to live up to the narrative of the "year of Nukeduck" due to his rather medicore performance. A return to form would massively skyrocket Origens rankings.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentPerkz(player) {
    player="Perkz";
    var playerDetails = [];
    var el = document.getElementById("Perkz");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'. He is called the best player in the entire west, due to his mehcanics and leadership inside and outside of the game. He has not regained form yet, but he has had too little time to practice. Comem worlds, we expect him to be the best adc at the tournament.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentShadow(player) {
    player="Shad0w";
    var playerDetails = [];
    var el = document.getElementById("Shad0w");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+'.He is easily the most promosing rookie alongside Carzzy, the synergy developed between himself and Humanoid rivals G2 and even Fnatic in 2018. As we saw last playoffs,it only take one or two pop games from Shad0w to win a best of five vs g2. </p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

function writeToDocumentWunder(player) {
    player="Wunder";
    var playerDetails = [];
    var el = document.getElementById("Wunder");
    

    getData(player, function(data2) {
      
        data2.forEach(function(item) {
           
            var playerItems = [];
            playerItems.push('<p>'+item['name']+' is the '+item['role']+' for '+item['current_team']["name"]+' .He was the best player in spring 2019, but has  somewhat fallen from grace since then. While his regular season performances have lately been to be desired, come playoffs he will usually step  up his game massively. In the end, that is all that really matters.</p>');
            playerDetails.push(`${playerItems}`);
        });
        el.innerHTML = `<div>${playerDetails}</div>`;
    });
}

