import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Day extends Component {
  static propTypes = {
    day: PropTypes.number.isRequired,
  };

  state = {}
  render() {
    return (
      <div className="countdown__unit seconds">
        <div className="countdown__number">
          <span>{this.props.day}</span>
          <h3 className="countdown__subtitle">Days</h3>
        </div>
      </div>
    );
  }
}

export default Day;