import React, {Component} from 'react';
import styled from 'styled-components';
import HeaderSearch from '../HeaderSearch';
import TemperatureMeasurementSwitcher from '../TemperatureMeasurementSwitcher';
import RegisterButtons from '../RegisterButtons';


const PageHeader = styled.header`
  background: #353432;
  color: #ecf0f1;
  border-bottom: 1px solid #666;
`;

const PageHeaderTopLineRegisterBtnsWrap = styled.div`
  
`;

const PageHeaderTopLineTempSwitcher = styled.div`
  
  
`;

const PageHeaderTopLine = styled.div`
  
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

        <div className="container">

          <PageHeaderTopLine>

            <div className="row">

              <div className="col-sm-7">
                <PageHeaderTopLineSearch>
                  <HeaderSearch/>
                </PageHeaderTopLineSearch>
              </div>

              <div className="col-sm-3">
                <PageHeaderTopLineRegisterBtnsWrap>
                  <RegisterButtons/>
                </PageHeaderTopLineRegisterBtnsWrap>
              </div>

              <div className="col-sm-2">
                <PageHeaderTopLineTempSwitcher>
                  <TemperatureMeasurementSwitcher/>
                </PageHeaderTopLineTempSwitcher>
              </div>

            </div>

          </PageHeaderTopLine>

          <PageHeaderBottomLine>

            <div className="row">

              bottom line

            </div>

          </PageHeaderBottomLine>

        </div>

      </PageHeader>

    );
  }
}

export default Header;