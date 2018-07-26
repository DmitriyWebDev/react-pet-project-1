import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import UserLocationDisplay from './UserLocationDisplay'
import ModalWindowSignUp from './ModalWindowSignUp'


class Root extends Component {
  render() {
    return (
      <div>

        <Header/>

        <div className="container">
          <UserLocationDisplay/>
        </div>

        <Footer/>

        <ModalWindowSignUp show={false} />

      </div>
    );
  }
}

export default Root;