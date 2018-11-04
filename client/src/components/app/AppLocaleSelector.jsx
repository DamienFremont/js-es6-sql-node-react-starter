import React from 'react';
import intl from 'react-intl-universal';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import './AppLocaleSelector.css';

/**
 * @see https://github.com/alibaba/react-intl-universal/blob/master/examples/browser-example/
 */
class AppLocaleSelector extends React.Component {

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {intl.getInitOptions().currentLocale}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.locales.map(this.renderItem)}
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    /**
     *  @see https://www.flaticon.com/packs/countrys-flags
     */
    renderItem(value, index) {
        const url = "/?lang=" + value.value;
        const imgSrc = "/locales/" + value.value + ".png";
        return (
            <DropdownItem key={index}>
                <Button color="link" href={url}>
                    <img src={imgSrc} className="AppLocaleSelector_flag" alt="AppLocaleSelector_flag" />
                    {' '}
                    {value.name}
                </Button>
            </DropdownItem>
        );
    }
}
export default AppLocaleSelector;