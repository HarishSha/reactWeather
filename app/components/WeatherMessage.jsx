var React = require('react');

var WeatherMessage = ({temp, location}) => {    	
        return (
            <h3 class="text-center">It's {temp} degree in {location}!</h3>
        );
    }


module.exports = WeatherMessage;
