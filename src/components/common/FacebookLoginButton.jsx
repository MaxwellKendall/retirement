import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

import secrets from '../../../secrets';

const FacebookLoginButton = props => (
  <FacebookLogin
    appId={`${secrets.facebook}`}
    autoLoad={false}
    fields="name,email,picture"
    callback={props.onClick}
    icon="fa-facebook"
    redirectUri="google.com"
  >
    Sign in with Facebook
  </FacebookLogin>
);

FacebookLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FacebookLoginButton;
