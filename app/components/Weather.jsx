var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
			isLoading: true,
			errorMessage : undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location : location,
				temp: temp,
				isLoading: false
			})
		}, function(e){
			that.setState({
				isLoading: false,
				location: '',
				temp: '',
				errorMessage: e.message
			});

		});

	},	

    render: function () {
    	console.log(this.state);

    	var {isLoading, location, temp, errorMessage} = this.state;

    		function renderMessage () {
    			if(isLoading) {
    				return <h3 createClass="text-center">Fetching Weather...</h3>
    			}else if(location, temp) {
    				return <WeatherMessage location= {location} temp= {temp} />
    			}
    		}

    		function renderErrorMessage () {
    			console.log('asdsadasdasdas', typeof errorMessage);
    			if(typeof errorMessage === 'string') {
    				return (
    					<ErrorModal/>
    					)
    			}
    		}

        return (
            <div>
                <h1 createClass="text-center">Get Weather</h1>
                <WeatherForm onSearch= {this.handleSearch}/>
                {renderMessage()}
                {renderErrorMessage()}
            </div>    
        );
    }
});

module.exports = Weather;

