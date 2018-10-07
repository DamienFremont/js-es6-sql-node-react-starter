import React from 'react';
import intl from 'react-intl-universal';

class GetStartedHelp extends React.Component {

    render() {
        return (
            <div>
                <h2>{intl.get('help.getstarted.title', { appname: intl.get('app.title') })}</h2>
                <p>{intl.get('help.getstarted.desc')}</p>
            </div>
        );
    }
}
export default GetStartedHelp;
