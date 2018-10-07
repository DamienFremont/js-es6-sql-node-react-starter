import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import App from '../../App';
import AppLocaleSelector from './AppLocaleSelector';

/**
 * @see https://reactstrap.github.io/components/navbar/
 */
class AppNavbar extends React.Component {

    constructor(props, state) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const logo = this.props.logo;
        const isOpen = this.state.isOpen;
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">
                    {logo ?
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        : null}
                    {intl.get('app.title')}
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <AppLocaleSelector locales={App.LOCALES} />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}
export default AppNavbar;