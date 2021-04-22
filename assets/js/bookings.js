fetch("https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=LON", {
	"method": "GET",
	"headers": {
		"Authorization": "Bearer 7F6181tTEcOxezLJegYRU67807KJ"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});