import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Minute extends Component {
  static propTypes = {
    minute: PropTypes.number.isRequired,
  };

  state = {}
  render() {
    return (
      <div className="countdown__unit seconds">
        <div className="countdown__number">
          <span>{this.props.minute}</span>
          <h3 className="countdown__subtitle">Minutes</h3>
        </div>
      </div>
    );
  }
}

export default Minute;