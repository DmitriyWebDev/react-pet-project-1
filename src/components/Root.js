import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'


class Root extends Component {
  render() {
    return (
      <div>

        <Header/>

        <div>
          Content
        </div>

        <Footer/>

      </div>
    );
  }
}

export default Root;