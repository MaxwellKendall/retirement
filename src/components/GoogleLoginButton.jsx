import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

import GoogleIcon from './GoogleIcon';
import secrets from '../../secrets';

const GoogleLoginButton = () => {
  const googleResponse = (resp) => {
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
      });
  };
  return (
    <GoogleLogin
      clientId={`${secrets.google}`}
      className="google"
      scope="profile"
      icon="fa-facebook"
      onFailure={googleResponse}
      onSuccess={googleResponse}
    >
      <GoogleIcon /><p>Sign in with Google</p>
    </GoogleLogin>
  );
};

export default GoogleLoginButton;
