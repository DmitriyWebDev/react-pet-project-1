// 'appController' is a step ( 'adapter' ) between an application view and model communication.
// Scheme ( application data flow ):
// 1) View ( react.js app ) -> Controller ( appController.js module ) -> Model ( backend services, APIs, etc. ),
// 2) View ( react.js app ) <-- Controller ( appController.js module ) <-- Model ( backend services, APIs, etc. ).

// 'appController' - this is a module contains functions
// for an interaction of the view ( React.js app ) with
// the model ( backend database services, or browser webWorkers, serviceWorkers etc ).

// 'appController' supplies functions - wrappers for a client - server communication, user data saving.
// The functions do network - requests to extraneous APIs, work with local storage,
// cookies, webWorkers, browser indexed database etc.

// 'appController' - this is an all app functionality provider in the browser
// beyond View ( in this case beyond React.js app ).


const appController = function () {

  const openWeatherApiProtocol = 'http';
  const openWeatherApiDomain   = 'api.openweathermap.org';
  const openWeatherApiKey      = '67209e988f814f4a8b8ae8a448cb5bc1'; // test api key
  const openWeatherApiUri      = `${openWeatherApiProtocol}://${openWeatherApiDomain}`;

  const defaultCityName = 'London';
  const defaultCityCoordinates = {
    latitude  : 51.508530,
    longitude : -0.076132
  };

  return {

    getWeatherDataByCity : function ( city = defaultCityName ) {

      fetch(`${openWeatherApiUri}/data/2.5/weather?q=${city}&APPID=${openWeatherApiKey}`)
        .then(function (response) {
          console.log('Fetch success');
          return response.json();
        }).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });

    },
    getWeatherDataByCoordinates : function ( latitude = defaultCityCoordinates['latitude'], longitude = defaultCityCoordinates['longitude'] ) {

      fetch(`${openWeatherApiUri}/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${openWeatherApiKey}`)
        .then(function (response) {
          console.log('Fetch success');
          return response.json();
        }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });

    }

  }

}();

export default appController;
