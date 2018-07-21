import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  font-size: 12px;
`;

const RegisterButtonsBlockSignInBtn = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 10px 11px;
  transition: background .5s;
  cursor: pointer;
  
  &:hover {
    background: #242424;
  }
  
  & .sign-in-ico {
    display: block;
    width: 12px;
    height: 13px;
    margin-right: 2px;
  }
  
`;

const RegisterButtonsBlockSignUpBtn = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 10px 11px;
  transition: background .5s;
  cursor: pointer;
  
  &:hover {
    background: #242424;
  }
  
  & .sign-up-ico {
    display: block;
    width: 12px;
    height: 13px;
    margin-right: 2px;
  }
  
`;

class RegisterButtons extends Component {

  render() {

    return (

      <RegisterButtonsBlock>

        <RegisterButtonsBlockSignInBtn>
          <FontAwesomeIcon icon="sign-in-alt" className="sign-in-ico"/>
          Sign In
        </RegisterButtonsBlockSignInBtn>

        <RegisterButtonsBlockSignUpBtn>
          <FontAwesomeIcon icon="arrow-circle-down" className="sign-up-ico"/>
          Sign Up
        </RegisterButtonsBlockSignUpBtn>

      </RegisterButtonsBlock>

    );

  }

}

export default RegisterButtons;