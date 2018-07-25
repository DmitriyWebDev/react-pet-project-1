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
  }

  componentDidMount() {

    const {userLocation, getUserLocation} = this.props;

    if( !userLocation.locationRequested ) {
      getUserLocation();
    }

  }


  render() {

    return (
      <UserLocationBlock>
        Your location is {this.props.userLocation.userCity ? this.props.userLocation.userCity : 'Xz'}
      </UserLocationBlock>
    );

  }

}

function mapStateToProps(state) {
  return {
    userLocation: state.userLocation,
  }
}

export default connect(mapStateToProps, {getUserLocation}, null, {pure: false})(UserLocationDisplay)
