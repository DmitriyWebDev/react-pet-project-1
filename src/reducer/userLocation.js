import {GET_USER_LOCATION, START, SUCCESS, FAIL} from '../constants'

const defaultState = {
  locationRequested: false,
  userCity: false,
  userLatitude : false,
  userLongitude : false
}

export default (state = defaultState, action) => {
  const {type, response} = action

  switch (type) {
    case GET_USER_LOCATION + SUCCESS:
      console.log( 'Reducer success' )
      console.log( action )

      const newObg = {
        locationRequested: true,
        userCity: response.name,
        userLatitude : response.coord.lat,
        userLongitude : response.coord.lon
      }

      console.log( newObg )

      return newObg;

  }

  return state
}
