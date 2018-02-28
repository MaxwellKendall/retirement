import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CountDown = props => (
  <div className="countdown__container">
    <div className="contdown__subtitle">
      <h2>Countdown til' Friday, June 29th 2018 at 5PM EST</h2>
    </div>
    <div className="countdown__cards">
      {props.children}
    </div>
  </div>
);

CountDown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountDown;
