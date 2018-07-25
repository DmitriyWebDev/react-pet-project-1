import React, { Component } from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderSearchBlock = styled.div`  
  position: relative;
`;

const HeaderSearchBlockOpenBtn = styled.div`
  
  padding: 10px 10px 11px;
  transition: background .5s;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  max-height: 37px;
  
  &:hover {
    background: #242424;
  }
  
  & .search-icon {
    display: inline-flex;
    margin-right: 3px;
  }
  
`;

const HeaderSearchBlockForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
`;

const HeaderSearchBlockFormFieldsWrap = styled.div`
  width: 222px;
  height: 26px;
  position: relative;
`;

const HeaderSearchBlockFormTextInput = styled.input`
  background: #484848;
  color: #ccc;
  border-radius: 4px;
  padding: 0 12px 0 12px;
  border-width: 0;
  display: block;
  width: 100%;
  height: 26px;
  box-shadow: none;
  outline: none;
`;

const HeaderSearchBlockFormSubmitBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  cursor: pointer;
  width: 29px;
  height: 26px;
  border-radius: 0 4px 4px 0;
  background-color: #ecf0f1;
`;

const HeaderSearchBlockFormCloseBtnWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 37px;
  cursor: pointer;
  
  
  
  
`;

const HeaderSearchBlockFormCloseBtn = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: background .5s;
  border-radius: 4px;

  &:hover {
    background: #242424;
  }
  
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
        <FontAwesomeIcon icon="search" className="search-icon" />
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
            <FontAwesomeIcon icon="search" color="#333" />
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