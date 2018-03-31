import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countdown from 'countdown';
import moment from 'moment-timezone';
import cx from 'classnames';
import CountDownCard from './CountDownCard';
import CountDown from './CountDown';

export default class Header extends Component {
  static propTypes = {
    activeUser: PropTypes.object,
    logOut: PropTypes.func.isRequired,
  }

  static defaultProps = {
    activeUser: null,
    loading: false,
  }

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

  handleLogOut = () => {
    this.props.logOut(null);
    this.setState(prevState => ({ ...prevState, hideLogOut: true }));
  }

  render() {
    const { timeLeft } = this.state;
    return (
      <div ref={(main) => { this.main = main; }} className="main">
        <button
          className={cx('logout', { 'hidden': !this.props.activeUser})}
          onClick={this.handleLogOut}
        >
          Log Out
        </button>
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
