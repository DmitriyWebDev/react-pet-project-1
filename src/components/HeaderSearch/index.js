import React, { Component } from 'react';
import styled from "styled-components";

const HeaderSearchBlock = styled.div`
  
`;

const HeaderSearchBlockToggleBtn = styled.div`
  
`;

const HeaderSearchBlockForm = styled.form`
  
`;

const HeaderSearchBlockFormTextInput = styled.input`
  
`;

const HeaderSearchBlockFormSubmitBtn = styled.div`
  
`;


class HeaderSearch extends Component {
  render() {
    return (
      <HeaderSearchBlock>

        <HeaderSearchBlockToggleBtn>
          Whether in your city
        </HeaderSearchBlockToggleBtn>

        <HeaderSearchBlockForm>

          <HeaderSearchBlockFormTextInput placeholder="Search" type="text" name="search-input" />

          <HeaderSearchBlockFormSubmitBtn>
            Go
          </HeaderSearchBlockFormSubmitBtn>

        </HeaderSearchBlockForm>

      </HeaderSearchBlock>
    );
  }
}

export default HeaderSearch;