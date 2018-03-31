/* eslint-disalbe quote-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cx from 'classnames';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    getComments: PropTypes.func.isRequired,
  }

  state = {
    msg: '',
    loading: false,
    success: false,
  }

  componentDidMount() {
    this.props.getComments(10);
  }

  getComments = () => {
    this.props.getComments(10);
    // this.setState(prevState => ({ ...prevState, hideComments: !prevState.hideComments }));
  }

  displayComments = comments => (
    comments.map((el, index) => (
      <li key={index}>
        <img src={el.photoUrl} alt="avatar" />
        <h3>{el.name}</h3>
        <span>{el.message}</span>
      </li>
    ))
  );

  updateMessage = (e) => {
    e.persist();
    this.setState(prevState => ({ ...prevState, msg: e.target.value }));
  }

  handleSubmit = () => {
    axios.post('/api/comments', { userid: this.props.activeUser.id, memory: this.state.msg })
      .then(() => {
        this.setState(prevState => ({ ...prevState, success: true, msg: '' }));
      })
      .catch(err => console.log('error'));
  }

  render() {
    const { comments, activeUser } = this.props;
    const { msg } = this.state;
    return (
      <div className="main__comments_body">
        <ul className={cx('comments')}>
          {this.displayComments(comments)}
        </ul>
        <Form onSubmit={this.handleSubmit} success={this.state.success} >
          <Form.Field>
            <h2>What should I say?</h2>
            <p>The idea here is to remind Ross of a good experience you've had with him at work. It could be something as simple as a regular lunch. Don't be shy!</p>
          </Form.Field>
          <Form.Field>
            <label htmlFor="memory">Enter a Memory</label>
            <textarea
              maxLength="1000"
              name="memory"
              cols="30"
              rows="10"
              onChange={this.updateMessage}
              value={msg}
              placeholder={`Ross! It's your ole pal ${activeUser.name}! Remember when... Hope you have a great day!`}
            />
          </Form.Field>
          <Button type='submit' disabled={this.state.success}>Submit</Button>
        </Form>
      </div>
    );
  }
}
