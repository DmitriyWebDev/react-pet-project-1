import React, { Component } from 'react'
//import logo from './logo.svg'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './App.css'
import Root from "./components/Root"
import store from "./store"
import {Provider} from 'react-redux'

// Add Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faSignInAlt, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add( faSearch, faTimes, faSignInAlt, faArrowCircleDown );
// END Add Font awesome


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
