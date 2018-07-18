import React, {Component} from 'react';
import styled from 'styled-components';
import HeaderSearch from '../HeaderSearch';


const PageHeader = styled.header`
  background: #353432;
  color: #ecf0f1;
  border-bottom: 1px solid #666;
`;

const PageHeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`;

const PageHeaderTopLine = styled.div`
  background: red;
  
`;

const PageHeaderTopLineEmail = styled.div`
  
  
`;

const PageHeaderTopLineSearch = styled.div`
  
  
`;

const PageHeaderBottomLine = styled.div`
  background: black;
  
`;


class Header extends Component {
  render() {
    return (
      <PageHeader>

        <div className="content">

          <PageHeaderInner>

            <PageHeaderTopLine>

              <PageHeaderTopLineEmail>
                support@email
              </PageHeaderTopLineEmail>

              <PageHeaderTopLineSearch>
                <HeaderSearch/>
              </PageHeaderTopLineSearch>

            </PageHeaderTopLine>

            <PageHeaderBottomLine>

              bottom line

            </PageHeaderBottomLine>

          </PageHeaderInner>

        </div>

      </PageHeader>

    );
  }
}

export default Header;