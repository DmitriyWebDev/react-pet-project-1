import React, { Component } from 'react'
//import logo from './logo.svg'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './App.css'
import Root from "./components/Root"
import store from "./store"
import {Provider} from 'react-redux'
import appController from './appController'

// Add Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faSignInAlt, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add( faSearch, faTimes, faSignInAlt, faArrowCircleDown );
// END Add Font awesome


// test appController, get New York city weather
appController.getWeatherDataByCity( 'New York' );
// test appController, get London ( default ) city weather
appController.getWeatherDataByCity();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}

export default App;
