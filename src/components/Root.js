import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import UserLocationDisplay from './UserLocationDisplay'


class Root extends Component {
  render() {
    return (
      <div>

        <Header/>

        <div className="container">
          <UserLocationDisplay/>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default Root;