import { createAction } from 'redux-actions';
import axios from 'axios';

import { defineEndPoint } from '../utils';

const endPoint = defineEndPoint();

export const setQuiz = createAction('SET_QUIZ');
export const submitQuiz = createAction('SUBMIT_QUIZ');

export const getQuiz = name => (
  dispatch => (
    axios.get(`${endPoint}/api/quiz`, { params: name })
      .then(res => dispatch(setQuiz(res.data)))
      .catch(err => console.log('getQuiz error: ', err))
  )
);

export const getQuizResults = userid => (
  dispatch => (
    axios.get(`${endPoint}/api/quiz/results`, { userid })
      .then(results => dispatch(submitQuiz(results)))
      .catch(err => console.log('Error on get api/quiz/results: ', err))
  )
);

export const postQuizResults = (result, id, name) => (
  dispatch => (
    axios.post(`${endPoint}/api/quiz/results`, { result, id, name })
      .then(results => dispatch(submitQuiz(results)))
      .catch(err => console.log('Error on Post api/quiz: ', err))
  )
);
