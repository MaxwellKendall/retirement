import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountDownCard extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  };

  state = {};

  render() {
    const { value, type } = this.props;
    const camelCase = `${type[0].toUpperCase()}${type.substr(1, type.length)}`;
    return (
      <div className={`countdown__unit ${type}`}>
        <div className="countdown__number">
          <span className={`countdown__${type}`}>{value}</span>
        </div>
        <h3>{camelCase}</h3>
      </div>
    );
  }
}
