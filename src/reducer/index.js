import {combineReducers} from 'redux'
import userLocation from './userLocation'

function test() {
  return {
    entities : [1,2,3]
  }
}

export default combineReducers({
  test : test,
  userLocation
})