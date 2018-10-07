import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { StickyFooter } from '../common';

class AppFooter extends React.Component {

    render() {
        return (
            <StickyFooter className="bg-light">
                <Button color="link" size="sm" tag={Link} to="/contact">
                    {intl.get('footer.contact')}
                </Button>{' '}
                <Button color="link" size="sm" tag={Link} to="/help">
                    {intl.get('footer.help')}
                </Button>{' '}
                <Button color="link" size="sm" href="/terms.html" target="_blanck">
                    {intl.get('footer.copyright')}
                </Button>
            </StickyFooter>
        );
    }
}
export default AppFooter;