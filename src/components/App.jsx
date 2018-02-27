import React, { Component } from 'react';
import countdown from 'countdown';
import moment from 'moment';

import CountDownCard from './CountDownCard';
import CountDown from './Countdown';

export default class App extends Component {
  state = {
    date: moment([2018, 5, 29, 17, 0, 0]),
    timeLeft: countdown(moment([2018, 5, 29, 17, 0, 0])),
  }

  componentDidMount() {
    setInterval(this.test, 1000);
  }

  test = () => {
    this.setState(prevState => ({ ...prevState, timeLeft: countdown(this.state.date) }));
  }

  render() {
    const { timeLeft } = this.state;
    return (
      <CountDown>
        <CountDownCard type="month" value={timeLeft.months} />
        <CountDownCard type="days" value={timeLeft.days} />
        <CountDownCard type="hours" value={timeLeft.hours} />
        <CountDownCard type="minutes" value={timeLeft.minutes} />
        <CountDownCard type="seconds" value={timeLeft.seconds} />
      </CountDown>
    );
  }
}
