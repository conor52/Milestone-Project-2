$(document).ready(function () {
	for (ctr = 1; ctr < 6; ctr++) { // the for loop allows me to only write out the writeToDocument function once, the for loop is iterated through 5 times, one for every match.
		writeToDocument(ctr);
	}
});



function writeToDocument(match) {
	var game_number; // I declare this variable here. game_number is appended onto "game-" and acts as the unique ID on the html page. reusing the variable for each switch case means less lines of code and a more efficient program.
	switch (match) { // Instead of writing out the writeToDocument function 5 games, the switch statement will save me the hassle. each time I change match value to read a different game in the API and game_number.
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
			gameDetails.push(`<p>${matchRow}</p>`); // Finally, this will push the data inside matchRow array outside of the for each loop and into the gameDetails array
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
