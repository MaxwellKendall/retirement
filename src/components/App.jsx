import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import countdown from 'countdown';

export default class App extends Component {
  state = {
    timeLeft: countdown(new Date(2018, 5, 30) ).toString(),
  }

  componentDidMount() {
    setInterval(this.test, 1000);
  }

  test = () => {
    console.log('test fired');
    this.setState(prevState => ({ ...prevState, timeLeft: countdown(new Date(2018, 5, 30)).toString() }));
  }

  render() {
    return (
      <div className="main">
        <h1>Count Down! {this.state.timeLeft}</h1>
      </div>
    );
  }
}
