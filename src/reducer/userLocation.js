import {GET_USER_LOCATION, START, SUCCESS, FAIL} from '../constants'

const defaultState = {
  locationRequested: false,
  userLocation: false
}

export default (state = defaultState, action) => {
  const {type} = action
  switch (type) {
    case GET_USER_LOCATION + SUCCESS:
      return state + 1
  }

  return state
}
