/* eslint-disalbe quote-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    getComments: PropTypes.func.isRequired,
  }

  state = {
    hideComments: true,
  }

  componentDidMount() {
    setInterval(this.updateState, 1000);
    this.props.getComments(10);
  }

  getComments = () => {
    this.setState(prevState => ({ ...prevState, hideComments: !prevState.hideComments }));
  }

  displayComments = comments => (
    comments.map((el, index) => (
      <li key={index}>
        <h3>{el.name}</h3>
        <img src={el.photoUrl} alt="avatar" />
        <span>{el.message}</span>
      </li>
    ))
  );

  render() {
    const { comments, activeUser } = this.props;
    const { hideComments } = this.state;
    return (
      <div>
        <button className="comments" onClick={this.getComments} value="10">
          {hideComments ? 'View Comments' : 'Hide Comments'}
        </button>
        <ul className={cx('comments', { 'hidden': hideComments })}>
          {this.displayComments(comments)}
        </ul>
        <Form action="/api/comments" method="POST" large>
          <Form.Field>
            <h2>What should I say?</h2>
            <p>The idea here is to remind Ross of a good experience you've had with him at work. It could be something as simple as a regular lunch. Don't be shy!</p>
          </Form.Field>
          <Form.Field>
            <input name="userid" value={activeUser.id} className="hidden" />
            <label htmlFor="memory">Enter a Memory</label>
            <textarea name="memory" cols="30" rows="10"></textarea>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}
