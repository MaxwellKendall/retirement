import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

import secrets from '../../secrets';

const FacebookLoginButton = () => {
  const facebookResponse = (resp) => {
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

  return (
    <FacebookLogin
      appId={`${secrets.facebook}`}
      autoLoad={false}
      fields="name,email,picture"
      callback={facebookResponse}
      icon="fa-facebook"
    >
      Sign in with Facebook
    </FacebookLogin>
  );
};

export default FacebookLoginButton;
