import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import requestUserLocation from '../middlewares/requestUserLocation'

const composeEnhancers = compose;
const enhancer = composeEnhancers(applyMiddleware(requestUserLocation))

const store = createStore(reducer, enhancer);
window.store = store;

export default store