import React, { Component } from 'react';
import countdown from 'countdown';
import moment from 'moment-timezone';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login-component';

import CountDownCard from './CountDownCard';
import CountDown from './CountDown';
import BasicModal from './common/BasicModal';

import secrets from '../../secrets';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.targetDate = moment.tz([2018, 5, 29, 17, 0, 0], 'America/New_York');
  }

  state = {
    timeLeft: countdown(this.targetDate),
  }

  componentDidMount() {
    setInterval(this.updateState, 1000);
  }

  getComments = (e) => {
    const index = e.target.value;
    axios.get('/api/comments/', { params: { index } })
      .then(res => console.log('comments: ', res));
  }

  updateState = () => {
    this.setState(prevState => ({ ...prevState, timeLeft: countdown(this.targetDate) }));
  }

  googleResponse = (resp) => {
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
  }

  facebookResponse = (resp) => {
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
      });
  }

  test = () => console.log('hello111');

  render() {
    const { timeLeft } = this.state;
    return (
      <div ref={(main) => { this.main = main; }} className="main">
        <CountDown>
          <CountDownCard type="months" value={timeLeft.months} />
          <CountDownCard type="days" value={timeLeft.days} />
          <CountDownCard type="hours" value={timeLeft.hours} />
          <CountDownCard type="minutes" value={timeLeft.minutes} />
          <CountDownCard type="seconds" value={timeLeft.seconds} />
        </CountDown>
        <BasicModal>
          <FacebookLogin
            appId={`${secrets.facebook}`}
            autoLoad
            fields="name,email,picture"
            callback={this.facebookResponse}
            icon="fa-facebook"
          >Login with Facebook
          </FacebookLogin>
          <GoogleLogin
            socialId={`${secrets.google}`}
            className="google"
            scope="profile"
            fetchBasicProfile
            responseHandler={this.googleResponse}
            buttonText="Login With Google"
          />
        </BasicModal>
        <button className="comments" onClick={this.getComments} value="10">comments</button>
      </div>
    );
  }
}
