import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Root from "./components/Root";
import store from "./store";
import {Provider} from 'react-redux'


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
