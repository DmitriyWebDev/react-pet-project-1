import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderSearchBlock = styled.div`
  
`;

const HeaderSearchBlockOpenBtn = styled.div`
  cursor: pointer;
`;

const HeaderSearchBlockForm = styled.form`
  
`;

const HeaderSearchBlockFormFieldsWrap = styled.div`
  
`;

const HeaderSearchBlockFormCloseBtnWrap = styled.div`
  
`;

const HeaderSearchBlockFormCloseBtn = styled.div`
  cursor: pointer;
`;

const HeaderSearchBlockFormTextInput = styled.input`
  
`;

const HeaderSearchBlockFormSubmitBtn = styled.div`
  
`;


class HeaderSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }


  render() {

    return (
      <HeaderSearchBlock>
        {this.getOpenBtn()}
        {this.getSearchBlockForm()}
      </HeaderSearchBlock>
    );

  }

  toggleSearchBlock = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getOpenBtn = () => {

    const openBtn =
      <HeaderSearchBlockOpenBtn onClick={this.toggleSearchBlock}>
        <FontAwesomeIcon icon="search"/>
        Whether in your city
      </HeaderSearchBlockOpenBtn>;

    if( !this.state.isOpen ) {
      return openBtn
    }

    return null

  };

  getSearchBlockForm = () => {

    const searchForm =

      <HeaderSearchBlockForm>

        <HeaderSearchBlockFormFieldsWrap>

          <HeaderSearchBlockFormTextInput placeholder="Search" type="text" name="search-input" />

          <HeaderSearchBlockFormSubmitBtn>
            Go
          </HeaderSearchBlockFormSubmitBtn>

        </HeaderSearchBlockFormFieldsWrap>

        <HeaderSearchBlockFormCloseBtnWrap>

          <HeaderSearchBlockFormCloseBtn onClick={this.toggleSearchBlock}>
            <FontAwesomeIcon icon="times" />
          </HeaderSearchBlockFormCloseBtn>

        </HeaderSearchBlockFormCloseBtnWrap>

      </HeaderSearchBlockForm>;

    if( this.state.isOpen ) {
      return searchForm
    }

    return null

  };

}

export default HeaderSearch;