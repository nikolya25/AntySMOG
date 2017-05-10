$.ajax({
	method: "GET",
	//url: "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {
    document.getElementById('station1name').innerHTML = data[71].stationName;
	console.log(data);
});


