import {GET_USER_LOCATION, SUCCESS} from '../constants'
import appController from '../appController'

export default store => next => action => {
  const {type, ...rest} = action

  if (type !== GET_USER_LOCATION) return next(action)

  console.log( 'requestUserLocation' )

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  appController.getWeatherDataByCoordinates();

  function showPosition(data) {

    const userLatitude  = data['coords']['latitude'];
    const userLongitude = data['coords']['longitude'];

    appController.getWeatherDataByCoordinates(userLatitude, userLongitude);

  }

  // http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true

  //dev only!!!!
  // setTimeout(() => fetch(callAPI)
  //     .then(res => res.json())
  //     .then(response => next({...rest, type: type + SUCCESS, response}))
  //     .catch(error => next({...rest, type: type + FAIL, error}))
  //   , 1000)
}