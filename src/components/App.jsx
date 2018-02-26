import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import countdown from 'countdown';
import moment from 'moment';

import Month from './Month';
import Day from './Day';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';

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
      <div className="countdown__container">
        <Month month={timeLeft.months} />
        <Day day={timeLeft.days} />
        <Hour hour={timeLeft.hours} />
        <Minute minute={timeLeft.minutes} />
        <Second second={timeLeft.seconds} />
      </div>
    );
  }
}
