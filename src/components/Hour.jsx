import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hour extends Component {
  static propTypes = {
    hour: PropTypes.number.isRequired,
  };

  state = {}
  render() {
    return (
      <div className="countdown__unit seconds">
        <div className="countdown__number">
          <span>{this.props.hour}</span>
          <h3 className="countdown__subtitle">Hours</h3>
        </div>
      </div>
    );
  }
}

export default Hour;