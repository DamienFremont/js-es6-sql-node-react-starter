import { faFileContract, faFileSignature, faQuestionCircle, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../logo.svg';

// TODO: move logo
class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/">{intl.get('breadcrumb.home')}</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/help">{intl.get('breadcrumb.help')}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.about')}</BreadcrumbItem>
        </Breadcrumb>
        <div className="text-right">
          <Button color="link" tag={Link} to="/help#getstarted">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </div>
        
        <Container>
          <p>
            {intl.get('about.title')}
          </p>

          <ListGroup>
            <ListGroupItem>
              {logo ?
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                : null}
              {intl.get('app.title')}
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.version')} {' : '}
              {process.env.REACT_APP_VERSION}
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.gethelp', { appname: intl.get('app.title') })}
              <Button color="link" tag={Link} to="/help" >
                <FontAwesomeIcon icon={faShareSquare} fixedWidth />{' '}
              </Button >
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.reportissue')}
              <Button color="link" tag={Link} to="/contact" >
                <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
              </Button>
            </ListGroupItem>
          </ListGroup>

          <div>&nbsp;</div>

          <ListGroup>
            <ListGroupItem>
              <p>{intl.get('app.title')}</p>
              <p>{intl.get('about.copyright', { company: intl.get('app.company') })}</p>
              <p>{intl.get('about.terms')}
                <Button color="link" href="/terms.html" target="_blanck">
                  <FontAwesomeIcon icon={faFileContract} fixedWidth />{' '}
                </Button >
              </p>
            </ListGroupItem>
          </ListGroup>

        </Container >
      </div >
    );
  }
}
export default About;