import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import GoogleLoginButton from './common/GoogleLoginButton';
import FacebookLoginButton from './common/FacebookLoginButton';
import LoginModal from './LoginModal';
import { defineEndPoint } from '../utils';

const endPoint = defineEndPoint();

export default class Login extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
    setActiveUser: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    activeUser: {},
  }

  state = {};

  facebookResponse = (resp) => {
    const { name, email, picture, id, accessToken } = resp;
    axios.post(`${endPoint}/login`, {
      name,
      email,
      picture,
      id,
      accessToken,
      provider: 'facebook',
    })
      .then((response) => {
        // this.props.setLoading(true);
        this.props.setActiveUser(response.data);
        this.props.history.push('/');
      });
  };

  googleResponse = (resp) => {
    const { Eea, Paa, U3, ig } = resp.w3;
    const data = {
      name: ig,
      email: U3,
      picture: Paa,
      id: Eea,
      provider: 'google',
    };
    axios.post(`${endPoint}/login`, data)
      .then((res) => {
        // this.props.setLoading(true);
        this.props.setActiveUser(res.data);
        this.props.setActiveUser('yamom');
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div className="login">
        {this.props.loading && <h2>Loading...</h2>}
        {!this.props.loading &&
          <div className="login__body">
            <div className="img__container">
              <div className="img" />
            </div>
            <div className="login__buttons">
              <h3>Log in to share a memory or leave a comment!</h3>
                <p>Weekly quiz on fascinating Ross Kendall facts begins this Friday, April 7th at 12 PM EST!</p>
              <FacebookLoginButton onClick={this.facebookResponse} />
              <GoogleLoginButton onClick={this.googleResponse} />
              {/* <LoginModal
                header="Sign in with a Username and Password"
              >
                <form action="/login" id="form__sign-in" method="POST">
                  <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" />
                    <label htmlFor="email">Password:</label>
                    <input type="password" name="password" />
                    <input type="submit" value="Log In" />
                  </fieldset>
                </form>
              </LoginModal> */}
            </div>
          </div>
        }
      </div>
    );
  }
}
