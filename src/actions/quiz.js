import { createAction } from 'redux-actions';
import axios from 'axios';

export const setQuiz = createAction('SET_QUIZ');

export const getQuiz = name => (
  dispatch => (
    axios.get('/api/quiz', { params: name })
      .then(res => dispatch(setQuiz(res.data)))
      .catch(err => console.log('getQuiz error: ', err))
  )
);
