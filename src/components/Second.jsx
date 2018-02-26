import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Second extends Component {
  static propTypes = {
    second: PropTypes.number.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.second !== nextProps.second) {
    }
  }
  render() {
    return (
      <div className="countdown__unit seconds">
        <div className="countdown__number">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <span>{this.props.second}</span>
          </ReactCSSTransitionGroup>
          <h3 className="countdown__subtitle">Seconds</h3>
        </div>
      </div>
    );
  }
}

export default Second;