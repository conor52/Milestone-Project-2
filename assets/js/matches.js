$(document).ready(function() {
    writeToDocumentG1('match');
});
$(document).ready(function() {
    writeToDocumentG2('match');
});
$(document).ready(function() {
    writeToDocumentG3('match');
});
$(document).ready(function() {
    writeToDocumentG4('match');
});
$(document).ready(function() {
    writeToDocumentG5('match');
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
function writeToDocumentG1(match) {
    match = 560862;
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-1");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
}
function writeToDocumentG2(match) {
    match = 560863;
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-2");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format-2");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
}
function writeToDocumentG3(match) {
    match = 560864;
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-3");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format-3");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
}
function writeToDocumentG4(match) {
    match = 560865;
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-4");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format-4");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
}
function writeToDocumentG5(match) {
    match = 560866;
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("game-5");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="matchup-style">' + item['name'] + '</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
    getData(match, function(data) {
        var gameDetails = [];
        var el = document.getElementById("league-and-format-5");
        data.forEach(function(item) {
            var matchRow = [];
            matchRow.push('<p class="league-and-format-style">' + item['league']['name'] + '<br>Best of 1</p>');
            gameDetails.push(`<tr>${matchRow}</tr>`);
        });
        el.innerHTML = `<p>${gameDetails}</p>`;
    });
}