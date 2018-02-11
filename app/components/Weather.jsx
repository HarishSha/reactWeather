var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass ({

	getInitialState : function() {
		return {
			isLoading : false
		};
	},

	handleSearch : function(location) {
		var that = this;
		this.setState({
			isLoading: true
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location : location,
				temp: temp,
				isLoading: false
			})
		}, function(error){
			that.setState({
				isLoading: false,
				location: '',
				temp: ''
			});
			alert(error);
		});

	},	

    render: function () {
    	console.log(this.state);

    	var {isLoading, location, temp} = this.state;

    		function renderMessage () {
    			if(isLoading) {
    				return <h3>Fetching Weather...</h3>
    			}else if(location, temp) {
    				return <WeatherMessage location= {location} temp= {temp} />
    			}
    		}

        return (
            <div>
                <h2>Weather App</h2>
                <WeatherForm onSearch= {this.handleSearch}/>
                {renderMessage()}
            </div>    
        );
    }
});

module.exports = Weather;

