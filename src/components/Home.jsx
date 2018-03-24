import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.setLoading(false);
  }

  render() {
    return (
      <div className="home">
      HOME!!!!
        <div className="home__memories">
          <Link to="/memories">Click here for memories!</Link>
        </div>
        <div className="home__quiz">
          <Link to="/quiz">Click here for a quiz!</Link>
        </div>
        <h2>Feed will go here showing memories and quiz scores</h2>
      </div>
    );
  }
}
