var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ee9cba8d1e2dfb11c07d9dad50a82cc9&units=metric';

// ee9cba8d1e2dfb11c07d9dad50a82cc9

module.exports =  {
	getTemp: function(location) {
		var encoded_location = encodeURIComponent(location);
		var request_url =  `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;

		return axios.get(request_url).then(function(res){
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			}else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.response.data.message);
		});

	}

}