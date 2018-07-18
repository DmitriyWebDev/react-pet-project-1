import {combineReducers} from 'redux'

function test() {
  return {
    entities : [1,2,3]
  }
}

export default combineReducers({
  test : test
})