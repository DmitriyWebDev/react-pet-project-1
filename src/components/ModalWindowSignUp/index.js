import React, { Component } from 'react'
import styled, { keyframes }  from "styled-components"

const modalOverlayFadeIn = keyframes`
  from { opacity: 0; }
  to   { display:block; opacity: 1; }
`;

const ModalWindowOverlay = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba( 0, 0, 0, 0.5 );
  animation: ${modalOverlayFadeIn} 1s linear;
`;




class ModalWindowSignUp extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {

    return (

      <div>

        <ModalWindowOverlay show={this.props.show}/>

        Sigh up modal window

      </div>

    );

  }

}

export default ModalWindowSignUp;