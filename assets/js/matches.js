$(document).ready(function () {
	for (ctr = 1; ctr < 6; ctr++) { // the for loop allows me to only write out the writeToDocument function once, the for loop is iterated through 5 times, one for every match.
		writeToDocument(ctr);
	}
});

function getData(match, cb) {
	var xhr = new XMLHttpRequest(); // a built in object that is necessary to allow us to consume API's
	var url = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co/matches?filter[id]=" + match + "&token=oWifVYBc_fpdoTvkGprkPZF3o02OMFXcex1mS647lASrhZjhxeg";
	//The match variable allows to reuse the above block of code over and over which is important for creating a less cluttered, more efficient system.
	xhr.onreadystatechange = function () { // this will run a check on the xhr object, status 200 means that the request has suceeded. readystate 4 means that the calling has been completed
		if (this.readyState == 4 && this.status == 200) {
			cb(JSON.parse(this.responseText)); // This line of code is responsible for getting the data outside of the onreadystatechange function, this has to be done to prevent issues down the line.
		}
	};
	xhr.open("GET", url); // this will open the connection if there is a successful connection. It requires a GET method (which is used to retrieve information from the server) and also the url, which I have made a variable called url.
	xhr.send();
}

function writeToDocument(match) {
	var game_number; // I declare this variable here. game_number is appended onto "game-" and acts as the unique ID on the html page. reusing the variable for each switch case means less lines of code and a more efficient program.
	switch (match) { // Instead of writing out the writeToDocument function 5 gimes, the switch statement will save me the hassle. each time I change match value to read a different game in the API and game_number.
		case 1:
			match = 560862;
			game_number = 1;
			break;
		case 2:
			match = 560863;
			game_number = 2;
			break;
		case 3:
			match = 560864;
			game_number = 3;
			break;
		case 4:
			match = 560865;
			game_number = 4;
			break;
		case 5:
			match = 560866;
			game_number = 5;
			break;
	}
	getData(match, function (data) {
		var gameDetails = []; // this empty array will be used to store the object inside the API
		var el = document.getElementById("game-" + game_number); //The line of code used to actually connect with the html page and display the information within the Div. the game_number variable will provide it with a unique ID.
		data.forEach(function (item) { // a loop that will iterate through the API object
			var matchRow = []; // A new empty array that will store the item variable with the key "name"
			matchRow.push('<p class="matchup-style white match-table-font">' + item['name'] + '</p>'); // Pushes the data into the array
			gameDetails.push(`<p>${matchRow}</p>`); // Finally, this will push the data inside matchRow arrray outside of the for each loop and into the gameDetails array
		});
		el.innerHTML = `<p>${gameDetails}</p>`;
	});
	getData(match, function (data) { // The similiar line of code as above, this step is repeated since its working with a different elementID in the html page.
		var gameDetails = [];
		var el = document.getElementById("league-and-format-" + game_number);
		data.forEach(function (item) {
			var matchRow = [];
			matchRow.push('<p class="white match-table-font">' + item['league']['name'] + '<br>Best of 1</p>');
			gameDetails.push(`<p>${matchRow}</p>`);
		});
		if (gameDetails.length > 0) {
			el.innerHTML = `<p>${gameDetails}</p>`;
		}
	});
}
