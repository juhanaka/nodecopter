var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var start = new Date;

client.takeoff();

keepAltitude = function (data) {
	var now = new Date
	if (now >= start + 30000) {
		client.land();
		process.exit();} 
	if (data.demo.altitudeMeters < 1.5) {
		client.up(0.5); }
	else if (data.demo.altitudeMeters >= 2.0) {   
		client.down(0.5);
	}
};


client.on('navdata', keepAltitude);


