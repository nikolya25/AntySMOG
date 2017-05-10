var normaPM10 = 50;
var normaNO2 = 200;
var normaCO = 10000;
var normaBenzen = 5;
var normaPM25 = 25;
$.ajax({
	method: "GET",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    for (var x=0; x<162; x++) {
    	if (data[x].id == 10123) {
	    	document.getElementById('station1Name').innerHTML = data[x].stationName;
	    	document.getElementById('station1NameH').innerHTML = data[x].stationName;
    		document.getElementById('station1Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan1 ) {
			  document.getElementById('station1Stan').innerHTML = stan1.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10121) {
	    	document.getElementById('station2Name').innerHTML = data[x].stationName;
	    	document.getElementById('station2NameH').innerHTML = data[x].stationName;
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

// ładowanie danych ze stacji 1

function station1dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16786", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station1PM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('station1PM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('station1PM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10123", function( stan1PM10 ) {
			  document.getElementById('station1PM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
}

// ładowanie danych ze stacji 2

function station2dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16377", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station2PM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('station2PM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('station2PM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16516", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station2NO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('station2NO2Date').innerHTML = dane1.values[x].date;
			    	norm2NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('station2NO2Norm').innerHTML = norm2NO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10121", function( stan ) {
			  document.getElementById('station2PM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('station2NO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 3

function station3dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2750", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station3PM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('station3PM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('station3PM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2747", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station3NO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('station3NO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('station3NO2Norm').innerHTML = norm3NO2Now
			    	break;
			    }
			}
			
	});
	//CO
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station3CO').innerHTML = dane1.values[x].value;
			    	document.getElementById('station3CODate').innerHTML = dane1.values[x].date;
			    	normCONow=(dane1.values[x].value / normaCO)*100;
			    	document.getElementById('station3CONorm').innerHTML = normCONow
			    	break;
			    }
			}
			
	});
	//Benzen
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16500", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station3Benzen').innerHTML = dane1.values[x].value;
			    	document.getElementById('station3BenzenDate').innerHTML = dane1.values[x].date;
			    	normBenzenNow=(dane1.values[x].value / normaBenzen)*100;
			    	document.getElementById('station3BenzenNorm').innerHTML = normBenzenNow
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2752", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('station3PM25').innerHTML = dane1.values[x].value;
			    	document.getElementById('station3PM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now=(dane1.values[x].value / normaPM25)*100;
			    	document.getElementById('station3PM25Norm').innerHTML = normPM25Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/400", function( stan ) {
			  document.getElementById('station3PM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('station3NO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('station3COStan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('station3BenzenStan').innerHTML = stan.c6h6IndexLevel.indexLevelName;
			  document.getElementById('station3PM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;

			})
}



