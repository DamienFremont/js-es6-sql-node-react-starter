import React from 'react';
import './StickyFooter.css';

/**
 * @see https://getbootstrap.com/docs/4.1/examples/sticky-footer/
 */
class StickyFooter extends React.Component {

    render() {
        return (
            <footer className={ "footer "+this.props.className }>
                <div className="container">
                    {this.props.children}
                </div>
            </footer>
        );
    }
}
export default StickyFooter;