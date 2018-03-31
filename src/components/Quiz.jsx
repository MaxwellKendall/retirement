import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';

export default class Quiz extends Component {
  static propTypes = {
    getQuiz: PropTypes.func.isRequired,
    postQuizResults: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
  }

  state = {
    index: 0,
    selectedAnswers: [...new Set()],
    score: null,
  }

  componentDidMount() {
    this.props.getQuiz('first');
  }

  submit = () => {
    const { selectedAnswers } = this.state;
    const { quiz, activeUser } = this.props;
    const result = Math.floor(selectedAnswers.filter(answer => answer.key === 1).length / quiz.length * 100);
    this.props.postQuizResults(result, activeUser.id, 'first');
  }

  selectAnswer = (selectedAnswer, questionId, answerKey) => {
    const answer = selectedAnswer;
    const id = questionId;
    const key = answerKey;
    const filteredState = this.state.selectedAnswers.filter(obj => obj.id !== id);
    this.setState(prevState => ({
      ...prevState, selectedAnswers: [...filteredState, { id, answer, key }],
    }));
  }

  goNext = () => {
    if (this.state.index !== this.props.quiz.length - 1) {
      this.setState(prevState => ({ ...prevState, index: prevState.index + 1 }));
    }
  }

  goPrevious = () => {
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
              <input value={answer.answer} onClick={() => this.selectAnswer(answer.answer, answer.question_id, answer.answer_key)} type="text" read-only="true" />
            </li>
          ))}
        </ul>
        <Button onClick={this.goNext}>Next Question</Button>
        <Button className={cx({'hidden': this.state.index === 0})} onClick={this.goPrevious}>Previous Question</Button>
        <Button onClick={this.submit} disabled={this.state.selectedAnswers.length !== quiz.length}>Submit Quiz</Button>
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
