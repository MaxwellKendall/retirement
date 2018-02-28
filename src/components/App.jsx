import React, { Component } from 'react';
import countdown from 'countdown';
import moment from 'moment-timezone';
import Button from 'semantic-ui-react';
import CountDownCard from './CountDownCard';
import CountDown from './CountDown';

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

  updateState = () => {
    this.setState(prevState => ({ ...prevState, timeLeft: countdown(this.targetDate) }));
  }

  render() {
    const { timeLeft } = this.state;
    return (
      <div className="main">
        <CountDown>
          <CountDownCard type="months" value={timeLeft.months} />
          <CountDownCard type="days" value={timeLeft.days} />
          <CountDownCard type="hours" value={timeLeft.hours} />
          <CountDownCard type="minutes" value={timeLeft.minutes} />
          <CountDownCard type="seconds" value={timeLeft.seconds} />
        </CountDown>
      </div>
    );
  }
}
