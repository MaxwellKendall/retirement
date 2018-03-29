import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';

export default class Quiz extends Component {
  static propTypes = {
    getQuiz: PropTypes.func.isRequired,
  }

  state = {
    index: 0,
    buttonValue: 'Next Question!',
    submit: false,
    selectedAnswers: [...new Set()],
  }

  componentDidMount() {
    this.props.getQuiz('first');
  }

  selectAnswer = (selectedAnswer, questionId) => {
    const answer = selectedAnswer;
    const id = questionId;
    const filteredState = this.state.selectedAnswers.filter(obj => obj.questionId !== questionId);
    this.setState(prevState => ({ ...prevState, selectedAnswers: [...filteredState, { questionId, answer }],
    }));
  }

  submit = () => {
    console.log('submit');
  }

  goNext = () => {
    console.log('index: ', this.state.index, 'quiz length: ', this.props.quiz.length);
    if (this.state.index === this.props.quiz.length - 2) {
      this.setState(prevState => ({ ...prevState, buttonValue: 'Submit Quiz!' }));
    } else if (this.state.index !== this.props.quiz.length - 1) {
      this.setState(prevState => ({ ...prevState, index: prevState.index + 1 }));
    }
  }

  goPrevious = () => {
    console.log('index: ', this.state.index, 'quiz length: ', this.props.quiz.length);
    if (this.state.index !== 0) {
      this.setState(prevState => ({ ...prevState, index: prevState.index - 1 }));
    }
  }

  renderQuiz = () => {
    const { quiz } = this.props;
    const { selectedAnswers } = this.state;
    return (
      <div className="quiz__body">
        <h1>{quiz[this.state.index].question}</h1>
        <ul className="quiz__answers">
          {quiz[this.state.index].answers.map((answer, index) => (
            <li
              key={index}
              className={cx({ 'selected': selectedAnswers.some(selectedAnswer => selectedAnswer.answer === answer.answer )})}>
              <input data-question={answer.question_id} value={answer.answer} onClick={() => this.selectAnswer(answer.answer, answer.question_id)} type="text" read-only="true" />
            </li>
          ))}
        </ul>
        <Button onClick={this.state.submit ? this.submit : this.goNext}>{this.state.buttonValue}</Button>
        <Button className={cx({'hidden': this.state.index === 0})} onClick={this.goPrevious}>Previous Question</Button>
      </div>
    );
  }

  render() {
    return (
      <div className="quiz">
        {!this.props.quiz && <h2>Loading...</h2>}
        {this.props.quiz && this.renderQuiz()}
      </div>
    );
  }
}
