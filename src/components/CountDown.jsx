import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CountDown = props => (
  <div className="countdown__container">
    {props.children}
  </div>
);

CountDown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountDown;
