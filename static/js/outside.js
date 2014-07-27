

// function geosucess(position) {
// 	long01 = position.coords.longitude;
// 	lat01 = position.coords.latitude;
// 	$("#stuff").text(lat01);
// }
$(document).ready(function(){

//0 is stage name, 1 is latitude, 2 is longitued
var stages = [
	 ["Weebly",37.7974090,-122.4048560, 000174722],
	 ["Sutro",37.770187, -122.492540, .000529869],
	 ["Lands End", 37.767875, -122.493699, 0.000514615],
	 ["Twin Peaks", 37.769709, -122.483429, 0.000259695]
	 ];
var distanceLimit;


var myLon;
var myLat;
console.log("hi");
var stuff = $("#stuff");

	$('#getCoords').on("click", function(){
		console.log("hello");
		initGeolocation();
	});




function geosuccess(position) {
	var crd = position.coords;
	console.log(crd);
    myLon = position.coords.longitude;
    myLat = position.coords.latitude;
    console.log("LAT" + myLat);
    console.log("LONG" + myLon);


 //    myLat = 3;
	// myLon = 4;
	distance(myLat, myLon, stages);
    // initialize();
}


function distance(myLat, myLon, stages){
	var myDistance;
	var lat;
	var lon;
	for (var x=0; x<stages.length; x++){
		lat = stages[x][1];
		lon = stages[x][2];
		distanceLimit = stages[x][3];
		console.log(stages[x]);
		console.log(stages[x][1]);
		myDistance = Math.sqrt(Math.pow((myLat-lat),2) + Math.pow((myLon-lon), 2));
		console.log(myDistance);
		if (myDistance < distanceLimit){
			console.log("You are at " + stages[x][0]);
			stuff.text("You are at " + stages[x][0]);
			
		}
		else{
			$('#moveCloser').toggleClass("active inactive");
			console.log("not close to " +stages[x][0]);
		}
	};
};

function geoerror(err){
	// jquery toggle class to open up element telling user they need to turn on their gps.
	//refresh button
	$('#errorMessage').toggleClass("active inactive");
	console.log("no work" + err.message);
	$('#refresh').on("click", function(){
		location.reload();
	});

}
function initGeolocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(geosuccess, geoerror);
		console.log("initstuff");
		
	}
	else {
		console.log("Major Error.");
		geoerror();
	}
}



});







// var x=document.getElementById("demo");
// function getLocation()
//   {
//   if (navigator.geolocation)
//     {
//     navigator.geolocation.watchPosition(showPosition);
//     }
//   else{x.innerHTML="Geolocation is not supported by this browser.";}
//   }
// function showPosition(position)
//   {
//   x.innerHTML="Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;	
//   }
// </script>