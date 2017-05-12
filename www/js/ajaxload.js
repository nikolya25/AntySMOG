var normaPM10 = 50;
var normaNO2 = 200;
var normaCO = 10000;
var normaBenzen = 5;
var normaPM25 = 25;
var normaSO2 = 350;
var normaO3;
$.ajax({
	method: "GET",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    for (var x=0; x<=data.length; x++) {
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
	    	document.getElementById('station3NameH').innerHTML = data[x].stationName;
    		document.getElementById('station3Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan3 ) {
			  document.getElementById('station3Stan').innerHTML = stan3.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 402) {
	    	document.getElementById('station4Name').innerHTML = data[x].stationName;
	    	document.getElementById('station4NameH').innerHTML = data[x].stationName;
    		document.getElementById('station4Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan4 ) {
			  document.getElementById('station4Stan').innerHTML = stan4.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10447) {
	    	document.getElementById('station5Name').innerHTML = data[x].stationName;
	    	document.getElementById('station5NameH').innerHTML = data[x].stationName;
    		document.getElementById('station5Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan5 ) {
			  document.getElementById('station5Stan').innerHTML = stan5.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10119) {
	    	document.getElementById('station6Name').innerHTML = data[x].stationName;
	    	document.getElementById('station6NameH').innerHTML = data[x].stationName;
    		document.getElementById('station6Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan6 ) {
			  document.getElementById('station6Stan').innerHTML = stan6.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 437) {
	    	document.getElementById('station7Name').innerHTML = data[x].stationName;
	    	document.getElementById('station7NameH').innerHTML = data[x].stationName;
    		document.getElementById('station7Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan7 ) {
			  document.getElementById('station7Stan').innerHTML = stan7.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 401) {
	    	document.getElementById('station8Name').innerHTML = data[x].stationName;
	    	document.getElementById('station8NameH').innerHTML = data[x].stationName;
    		document.getElementById('station8Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan8 ) {
			  document.getElementById('station8Stan').innerHTML = stan8.stIndexLevel.indexLevelName;
			});
		}
		if (data[x].id == 10435) {
	    	document.getElementById('station9Name').innerHTML = data[x].stationName;
	    	document.getElementById('station9NameH').innerHTML = data[x].stationName;
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
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10123", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
}

// ładowanie danych ze stacji 2

function station2dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16377", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16516", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm2NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm2NO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10121", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 3

function station3dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2750", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2747", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now
			    	break;
			    }
			}
			
	});
	//CO
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationCO').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationCODate').innerHTML = dane1.values[x].date;
			    	normCONow=(dane1.values[x].value / normaCO)*100;
			    	document.getElementById('stationCONorm').innerHTML = normCONow
			    	break;
			    }
			}
			
	});
	//Benzen
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16500", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationBenzen').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationBenzenDate').innerHTML = dane1.values[x].date;
			    	normBenzenNow=(dane1.values[x].value / normaBenzen)*100;
			    	document.getElementById('stationBenzenNorm').innerHTML = normBenzenNow
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2752", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now=(dane1.values[x].value / normaPM25)*100;
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/400", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationCOStan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationBenzenStan').innerHTML = stan.c6h6IndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 4

function station4dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2792", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2788", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now
			    	break;
			    }
			}
			
	});
	//CO
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2783", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationCO').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationCODate').innerHTML = dane1.values[x].date;
			    	normCONow=(dane1.values[x].value / normaCO)*100;
			    	document.getElementById('stationCONorm').innerHTML = normCONow
			    	break;
			    }
			}
			
	});
	//Benzen
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2779", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationBenzen').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationBenzenDate').innerHTML = dane1.values[x].date;
			    	normBenzenNow=(dane1.values[x].value / normaBenzen)*100;
			    	document.getElementById('stationBenzenNorm').innerHTML = normBenzenNow
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2794", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now=(dane1.values[x].value / normaPM25)*100;
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now
			    	break;
			    }
			}
			
	});
	//SO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2797", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationSO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationSO2Date').innerHTML = dane1.values[x].date;
			    	normSO2Now=(dane1.values[x].value / normaSO2)*100;
			    	document.getElementById('stationSO2Norm').innerHTML = normSO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/402", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationCOStan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationBenzenStan').innerHTML = stan.c6h6IndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;
			  document.getElementById('stationSO2Stan').innerHTML = stan.so2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 5

function station5dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/17309", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10447", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
}

// ładowanie danych ze stacji 6

function station6dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16488", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationO3').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationO3Date').innerHTML = dane1.values[x].date;
			    	normO3Now=(dane1.values[x].value / normaO3)*100;
			    	document.getElementById('stationO3Norm').innerHTML = normO3Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16486", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm2NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm2NO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10119", function( stan ) {
			  document.getElementById('stationO3Stan').innerHTML = stan.o3IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 7

function station7dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/3023", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/3020", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now
			    	break;
			    }
			}
			
	});
	//SO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/3026", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationSO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationSO2Date').innerHTML = dane1.values[x].date;
			    	normSO2Now=(dane1.values[x].value / normaSO2)*100;
			    	document.getElementById('stationSO2Norm').innerHTML = normSO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/437", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationSO2Stan').innerHTML = stan.so2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 8

function station8dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2770", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2766", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now=(dane1.values[x].value / normaNO2)*100;
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now
			    	break;
			    }
			}
			
	});
	//O3
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2768", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationO3').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationO3Date').innerHTML = dane1.values[x].date;
			    	normO3Now=(dane1.values[x].value / normaO3)*100;
			    	document.getElementById('stationO3Norm').innerHTML = normO3Now
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2772", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now=(dane1.values[x].value / normaPM25)*100;
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now
			    	break;
			    }
			}
			
	});
	//SO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2774", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationSO2').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationSO2Date').innerHTML = dane1.values[x].date;
			    	normSO2Now=(dane1.values[x].value / normaSO2)*100;
			    	document.getElementById('stationSO2Norm').innerHTML = normSO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/401", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationO3Stan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;
			  document.getElementById('stationSO2Stan').innerHTML = stan.so2IndexLevel.indexLevelName;

			})
}

// ładowanie danych ze stacji 9

function station9dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/17243", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = dane1.values[x].value;
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now=(dane1.values[x].value / normaPM10)*100;
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10435", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
}