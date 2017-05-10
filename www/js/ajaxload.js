$.ajax({
	method: "GET",
	//url: "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    document.getElementById('station1Name').innerHTML = data[20].stationName;
    document.getElementById('station1Adress').innerHTML = data[20].addressStreet;
    $.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[20].id, function( stan1 ) {
	  document.getElementById('station1Stan').innerHTML = stan1.stIndexLevel.indexLevelName;
	  if (stan1.stIndexLevel.indexLevelName == Dobry) {
	    document.getElementById('station1Btn').style.color="green";
		}
	});
    document.getElementById('station2Name').innerHTML = data[22].stationName;
    document.getElementById('station2Adress').innerHTML = data[22].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[22].id, function( stan2 ) {
	  document.getElementById('station2Stan').innerHTML = stan2.stIndexLevel.indexLevelName;
	});
    document.getElementById('station3Name').innerHTML = data[71].stationName;
    document.getElementById('station3Adress').innerHTML = data[71].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[71].id, function( stan3 ) {
	  document.getElementById('station3Stan').innerHTML = stan3.stIndexLevel.indexLevelName;
	});
    document.getElementById('station4Name').innerHTML = data[92].stationName;
    document.getElementById('station4Adress').innerHTML = data[92].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[92].id, function( stan4 ) {
	  document.getElementById('station4Stan').innerHTML = stan4.stIndexLevel.indexLevelName;
	});
    document.getElementById('station5Name').innerHTML = data[100].stationName;
    document.getElementById('station5Adress').innerHTML = data[100].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[100].id, function( stan5 ) {
	  document.getElementById('station5Stan').innerHTML = stan5.stIndexLevel.indexLevelName;
	});
    document.getElementById('station6Name').innerHTML = data[123].stationName;
    document.getElementById('station6Adress').innerHTML = data[123].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[123].id, function( stan6 ) {
	  document.getElementById('station6Stan').innerHTML = stan6.stIndexLevel.indexLevelName;
	});
    document.getElementById('station7Name').innerHTML = data[125].stationName;
    document.getElementById('station7Adress').innerHTML = data[125].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[125].id, function( stan7 ) {
	  document.getElementById('station7Stan').innerHTML = stan7.stIndexLevel.indexLevelName;
	});
    document.getElementById('station8Name').innerHTML = data[142].stationName;
    document.getElementById('station8Adress').innerHTML = data[142].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[142].id, function( stan8 ) {
	  document.getElementById('station8Stan').innerHTML = stan8.stIndexLevel.indexLevelName;
	});
    document.getElementById('station9Name').innerHTML = data[160].stationName;
    document.getElementById('station9Adress').innerHTML = data[160].addressStreet;
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[160].id, function( stan9 ) {
	  document.getElementById('station9Stan').innerHTML = stan9.stIndexLevel.indexLevelName;
	});    
	console.log(data);
});




