/* eslint-disalbe quote-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import cx from 'classnames';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import { defineEndPoint } from '../utils';

const endPoint = defineEndPoint();

export default class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    getComments: PropTypes.func.isRequired,
  }

  state = {
    msg: '',
    loading: false,
    success: false,
    index: 10,
  }

  componentDidMount() {
    this.props.getComments(10);
  }

  getComments = () => {
    this.props.getComments(this.state.index);
    // this.setState(prevState => ({ ...prevState, hideComments: !prevState.hideComments }));
  }

  displayComments = (comments) => {
    if (comments.length === 0) {
      return <li>No comments yet! Be the first one to share a memory!</li>;
    } return (
      comments.map((el, index) => (
        <li key={index}>
          <img src={el.photoUrl} alt="avatar" />
          <h3>{el.name}</h3>
          <p>{el.message}</p>
        </li>
      ))
    );
  }

  updateMessage = (e) => {
    e.persist();
    this.setState(prevState => ({ ...prevState, msg: e.target.value }));
  }

  handleSubmit = () => {
    axios.post(`${endPoint}/api/comments`, { userid: this.props.activeUser.id, memory: this.state.msg })
      .then(() => {
        this.setState(prevState => ({ ...prevState, success: true, msg: '' }));
        this.getComments(this.state.index);
      })
      .catch(err => console.log('error'));
  }

  seeMore = () => {
    this.setState(prevState => ({ ...prevState, index: prevState.index + 5 }), this.getComments);
  }

  seeLess = () => {
    this.setState(prevState => ({ ...prevState, index: prevState.index - 5 }), this.getComments);
  }

  render() {
    const { comments, activeUser } = this.props;
    const { msg } = this.state;
    return (
      <div className="main__comments_body">
        <ul className={cx('comments')}>
          {this.displayComments(comments)}
        </ul>
        <span className="comments__toggleView">
          <a className="comments__toggleView--more" onClick={this.seeMore}>See More</a>
          <a className="comments__toggleView--less" onClick={this.seeLess}>See Less</a>
        </span>
        <Form className={'comments__form'} onSubmit={this.handleSubmit} success={this.state.success} >
          <Form.Field className="comments__explaination">
            <h2>What should I say?</h2>
            <p>The idea here is to remind Ross of a good experience you've had with him at work. It could be something as simple as a regular lunch. Don't be shy!</p>
          </Form.Field>
          <Form.Field className="comments__field">
            <label htmlFor="memory">Enter a Memory</label>
            <textarea
              className="comments__textarea"
              maxLength="1000"
              name="memory"
              cols="30"
              rows="10"
              onChange={this.updateMessage}
              value={msg}
              placeholder={`Ross! It's your ole pal ${activeUser.name}! Remember when... Hope you have a great day!`}
            />
          </Form.Field>
          <Button onSubmit={this.handleSubmit} type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}
