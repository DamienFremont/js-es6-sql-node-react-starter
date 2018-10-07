import './MainLayout.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import AppFooter from '../components/app/AppFooter';
import AppNavbar from '../components/app/AppNavbar';
import AppSidebar from '../components/app/AppSidebar';

class MainLayout extends React.Component {

  render() {
    return (
      <div>
        <header>
          <AppNavbar logo={this.props.logo}/>
        </header>
        <main>
          <Container fluid className="no-gutters">
            <Row noGutters>
              <Col xs={2} sm="1" md="1" lg="3" xl="2">
                <AppSidebar className="sidebar-sticky" />
              </Col>
              <Col xs={10} sm="11" md="11" lg="9" xl="10">
                {this.props.children}
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </div>
    );
  }

}
export default MainLayout;