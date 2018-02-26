import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Month extends Component {
  static propTypes = {
    month: PropTypes.number.isRequired,
  };

  state = {}
  render() {
    return (
      <div className="countdown__unit seconds">
        <div className="countdown__number">
          <span>{this.props.month}</span>
          <h3 className="countdown__subtitle">Months</h3>
        </div>
      </div>
    );
  }
}

export default Month;