import { faFileSignature, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'reactstrap';
import BreadcrumbItem from 'reactstrap/lib/BreadcrumbItem';

class Contact extends React.Component {

  render() {
    const mail = "test@test.com"
    const mailto = "mailto:" + mail;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/">{intl.get('breadcrumb.home')}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.contact')}</BreadcrumbItem>
        </Breadcrumb>
        <div className="text-right">
          <Button color="link" tag={Link} to="/help#getstarted">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div>
            <FontAwesomeIcon icon={faFileSignature} size="4x" />
          </div>
          <h1> {intl.get('contact.title')}</h1>
          <p> {intl.get('contact.desc')}</p>
          <Button color="primary" size="sm" href={mailto}>
            {intl.get('contact.button')}
          </Button>
        </div>
      </div>
    );
  }
}
export default Contact;