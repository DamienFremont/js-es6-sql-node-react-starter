import './Home.css';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import HelloAPI from '../api/HelloAPI';
import img from '../logo.svg';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    HelloAPI.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => this.setState({ response: "error" }));
  }

  render() {
    return (
      <div>

        <div className="jumbotron text-center">
          <div>
            <img src={img} className="Home-logo" alt="logo" />
          </div>
          <div>
            <h1>{intl.get('home.welcome', { appname: intl.get('app.title') })}</h1>
          </div>
        </div>

        <div className="text-right">
          <Button color="link" tag={Link} to="/help#getstarted">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
        </div>

        <div className="text-center">
          <p className="text-success">
            {this.state.response}
          </p>
        </div>

        <div className="text-center">
          <Button color="primary" onClick={this.handleClick}>
            {intl.get('home.button')}
          </Button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    const response = this.state.response;
    this.setState({
      response: response + " ...clicked!"
    });
  };
}
export default Home;