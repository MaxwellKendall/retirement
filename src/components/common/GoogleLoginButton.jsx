import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

import GoogleIcon from '../GoogleIcon';
import secrets from '../../../secrets';

const GoogleLoginButton = props => (
  <GoogleLogin
    clientId={`${secrets.google}`}
    className="google"
    scope="profile"
    icon="fa-facebook"
    onFailure={props.onClick}
    onSuccess={props.onClick}
  >
    <GoogleIcon /><p>Sign in with Google</p>
  </GoogleLogin>
);

GoogleLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
