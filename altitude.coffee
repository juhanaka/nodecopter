arDrone = require('ar-drone')
client = arDrone.createClient()

client.takeoff()
start = Date.now()

client.on('navdata', (data) ->
	keepAltitude = () ->
		if data.demo.altitudeMeters < 1.5
			client.up(0.1)
		else if
			client.down(0.1)
	keepAltitude while Date.now() - start <= 30000
	client.land() 

	)