import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    getComments: PropTypes.func.isRequired,
  }

  state = {
    showComments: false,
  }

  componentDidMount() {
    setInterval(this.updateState, 1000);
    this.props.getComments(5);
  }

  getComments = () => {
    this.setState(prevState => ({ ...prevState, showComments: !prevState.showComments }));
  }

  render() {
    const commentsStyle = cx('comments', { 'hidden': !showComments });
    const { comments } = this.props;
    const { showComments } = this.state;
    return (
      <div className={commentsStyle} >
        <button className="comments" onClick={this.getComments} value="10">
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
        <ul>
          {comments.map(el => (
            <li>
              <h3>{el.name}</h3>
              <img src={el.photoUrl} alt="avatar" />
              <span>{el.message}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
