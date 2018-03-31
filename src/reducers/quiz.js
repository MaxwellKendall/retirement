// set active user
import { handleActions } from 'redux-actions';
import * as uiActions from '../actions/ui';
import * as actions from '../actions/quiz';

const initialState = {
  quiz: null,
  results: null,
};

export default handleActions({
  [actions.setQuiz]: (state, action) => ({ ...state, quiz: action.payload }),
  [actions.submitQuiz]: (state, action) => ({ ...state, results: action.payload }),
}, initialState);
