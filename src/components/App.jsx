import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countdown from 'countdown';
import moment from 'moment-timezone';
import axios from 'axios';
import cx from 'classnames';

import CountDownCard from './CountDownCard';
import CountDown from './CountDown';
import LoginModal from './LoginModal';

export default class App extends Component {
  static propTypes = {
    getComments: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.targetDate = moment.tz([2018, 5, 29, 17, 0, 0], 'America/New_York');
  }

  state = {
    showComments: false,
    timeLeft: countdown(this.targetDate),
  }

  componentDidMount() {
    setInterval(this.updateState, 1000);
    this.props.getComments(5);
  }

  getComments = () => {
    // const index = e.target.value;
    // this.props.getComments(index);
    this.setState(prevState => ({ ...prevState, showComments: !prevState.showComments }));
  }

  updateState = () => {
    this.setState(prevState => ({ ...prevState, timeLeft: countdown(this.targetDate) }));
  }

  render() {
    const { timeLeft, showComments } = this.state;
    const { comments } = this.props;
    const commentsStyle = cx('comments', { 'hidden': !showComments });
    return (
      <div ref={(main) => { this.main = main; }} className="main">
        <CountDown>
          <CountDownCard type="months" value={timeLeft.months} />
          <CountDownCard type="days" value={timeLeft.days} />
          <CountDownCard type="hours" value={timeLeft.hours} />
          <CountDownCard type="minutes" value={timeLeft.minutes} />
          <CountDownCard type="seconds" value={timeLeft.seconds} />
        </CountDown>
        <LoginModal
          parent={this.main}
          closeOnDocumentClick
          dimmer="blurring"
          header="Log in with Facebook or Google to Congratulate Ross!"
        />
        <button className="comments" onClick={this.getComments} value="10">
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
        <div className={commentsStyle} >
          <ul>
            {comments.map(el => (
              <li>
                <h3>{el.name}</h3>
                <img src={el.photoUrl} alt="avatar" />
                <span>{el.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
