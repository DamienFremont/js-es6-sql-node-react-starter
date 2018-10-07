import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';

class FixProblemsHelp extends React.Component {

    render() {
        return (
            <div>
                <h2>{intl.get('help.fixproblems.title')}</h2>
                <p>
                    {intl.get('help.fixproblems.desc', { appname: intl.get('app.title') })}
                    <Button color="link" tag={Link} to="/contact" >
                        <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
                    </Button>
                </p>
            </div>
        );
    }
}
export default FixProblemsHelp;