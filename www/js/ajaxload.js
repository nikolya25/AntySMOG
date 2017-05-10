$.ajax({
	method: "GET",
	//url: "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    document.getElementById('station1Name').innerHTML = data[20].stationName;
    document.getElementById('station1Adress').innerHTML = data[20].addressStreet;
    $.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10123", function( stan1 ) {
	  document.getElementById('station1Stan').innerHTML = stan1.stIndexLevel.indexLevelName;
	});
    document.getElementById('station2Name').innerHTML = data[22].stationName;
    document.getElementById('station2Adress').innerHTML = data[22].addressStreet;
    document.getElementById('station3Name').innerHTML = data[71].stationName;
    document.getElementById('station3Adress').innerHTML = data[71].addressStreet;
    document.getElementById('station4Name').innerHTML = data[92].stationName;
    document.getElementById('station4Adress').innerHTML = data[92].addressStreet;
    document.getElementById('station5Name').innerHTML = data[100].stationName;
    document.getElementById('station5Adress').innerHTML = data[100].addressStreet;
    document.getElementById('station6Name').innerHTML = data[123].stationName;
    document.getElementById('station6Adress').innerHTML = data[123].addressStreet;
    document.getElementById('station7Name').innerHTML = data[125].stationName;
    document.getElementById('station7Adress').innerHTML = data[125].addressStreet;
    document.getElementById('station8Name').innerHTML = data[142].stationName;
    document.getElementById('station8Adress').innerHTML = data[142].addressStreet;
    document.getElementById('station9Name').innerHTML = data[160].stationName;
    document.getElementById('station9Adress').innerHTML = data[160].addressStreet;
    
	console.log(data);
});




