import React, { Component } from 'react';
import styled from "styled-components";

const PageFooter = styled.footer`
  background-color: aqua;
`;

class Footer extends Component {
  render() {
    return (

      <PageFooter>
        Footer
      </PageFooter>

    );
  }
}

export default Footer;