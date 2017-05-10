
$.ajax({
	method: "GET",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    for (var x=0; x<162; x++) {
    	if (data[x].id == 10123) {
	    	document.getElementById('station1Name').innerHTML = data[x].stationName;
    		document.getElementById('station1Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan1 ) {
			  document.getElementById('station1Stan').innerHTML = stan1.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10121) {
	    	document.getElementById('station2Name').innerHTML = data[x].stationName;
    		document.getElementById('station2Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan2 ) {
			  document.getElementById('station2Stan').innerHTML = stan2.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 400) {
	    	document.getElementById('station3Name').innerHTML = data[x].stationName;
    		document.getElementById('station3Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan3 ) {
			  document.getElementById('station3Stan').innerHTML = stan3.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 402) {
	    	document.getElementById('station4Name').innerHTML = data[x].stationName;
    		document.getElementById('station4Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan4 ) {
			  document.getElementById('station4Stan').innerHTML = stan4.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10447) {
	    	document.getElementById('station5Name').innerHTML = data[x].stationName;
    		document.getElementById('station5Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan5 ) {
			  document.getElementById('station5Stan').innerHTML = stan5.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10119) {
	    	document.getElementById('station6Name').innerHTML = data[x].stationName;
    		document.getElementById('station6Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan6 ) {
			  document.getElementById('station6Stan').innerHTML = stan6.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 437) {
	    	document.getElementById('station7Name').innerHTML = data[x].stationName;
    		document.getElementById('station7Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan7 ) {
			  document.getElementById('station7Stan').innerHTML = stan7.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 401) {
	    	document.getElementById('station8Name').innerHTML = data[x].stationName;
    		document.getElementById('station8Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan8 ) {
			  document.getElementById('station8Stan').innerHTML = stan8.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10435) {
	    	document.getElementById('station9Name').innerHTML = data[x].stationName;
    		document.getElementById('station9Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan9 ) {
			  document.getElementById('station9Stan').innerHTML = stan9.stIndexLevel.indexLevelName;
			});
		}
	}

});

function station1dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16786", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station1PM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('station1PM10Date').innerHTML = dane1.values[x].date;
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10123", function( stan1PM10 ) {
			  document.getElementById('station1PM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
}




