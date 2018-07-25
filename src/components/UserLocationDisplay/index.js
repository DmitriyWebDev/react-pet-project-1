import React, { Component } from 'react'
import styled from "styled-components"
import {connect} from 'react-redux'
import {getUserLocation} from '../../AC'

const UserLocationBlock = styled.div`  
  position: relative;
`;



class UserLocationDisplay extends Component {

  constructor(props) {
    super(props);

    console.log( this.props );
    this.props.getUserLocation();

  }

  render() {

    return (
      <UserLocationBlock>
        Your location
      </UserLocationBlock>
    );

  }

}

export default connect(null, {getUserLocation}, null, {pure: false})(UserLocationDisplay)
