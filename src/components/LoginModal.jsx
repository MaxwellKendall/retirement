import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Modal } from 'semantic-ui-react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GoogleIcon from './GoogleIcon';
import secrets from '../../secrets';
import Loading from './common/Loading';

class LoginModal extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    parent: PropTypes.node.isRequired,
  }

  state = { open: false, loading: false, provider: null }

  show = size => () => this.setState({ size, open: true })

  close = () => this.setState({ open: false })

  googleResponse = (resp) => {
    this.setState(prevState => ({ ...prevState, provider: 'google' }));
    const { Eea, Paa, U3, ig } = resp.w3;
    const data = {
      name: ig,
      email: U3,
      picture: Paa,
      id: Eea,
      provider: 'google',
    };
    axios.post('/login', data)
      .then((res) => {
        console.log(res.data);
        this.close();
      });
  };

  facebookResponse = (resp) => {
    this.setState(prevState => ({ ...prevState, provider: 'facebook' }));
    const { name, email, picture, id, accessToken } = resp;
    axios.post('/login', {
      name,
      email,
      picture,
      id,
      accessToken,
      provider: 'facebook',
    })
      .then((response) => {
        console.log(response.data);
        this.close();
      });
  };

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Button onClick={this.show('small')}>Log in</Button>
        <Modal
          dimmer="blurring"
          size={size}
          open={open}
          onClose={this.close}
          mountNode={this.props.parent}
          onMount={() => { console.log('hey Guyz'); }}
        >
          <Modal.Header>
            {this.props.header}
          </Modal.Header>
          <Modal.Content>
            <div className="login">
              <div className="facebook">
                <FacebookLogin
                  appId={`${secrets.facebook}`}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.facebookResponse}
                  icon="fa-facebook"
                >
                  Sign in with Facebook
                </FacebookLogin>
              </div>
              <GoogleLogin
                clientId={`${secrets.google}`}
                className="google"
                scope="profile"
                icon="fa-facebook"
                onFailure={this.googleResponse}
                onSuccess={this.googleResponse}
              >
                <GoogleIcon /><p>Sign in with Google</p>
              </GoogleLogin>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
