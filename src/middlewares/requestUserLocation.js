import {GET_USER_LOCATION, SUCCESS, FAIL} from '../constants'
import appController from '../appController'

export default store => next => action => {
  const {type, ...rest} = action

  if (type !== GET_USER_LOCATION) return next(action);

  console.log( 'requestUserLocation in middleware' )

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserLocationAdvancedData);
  }

  function getUserLocationAdvancedData(data) {

    const userLatitude  = data['coords']['latitude'];
    const userLongitude = data['coords']['longitude'];

    appController.getWeatherDataByCoordinates(userLatitude, userLongitude)
      .then(function (response) {
        console.log('Middleware response');
        console.log( response )
        return response;
      })
      .then(response => next({...rest, type: type + SUCCESS, response}))
      .catch(error => next({...rest, type: type + FAIL, error}));

  }

}