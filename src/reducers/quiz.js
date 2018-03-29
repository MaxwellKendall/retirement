// set active user
import { handleActions } from 'redux-actions';
import * as uiActions from '../actions/ui';
import * as actions from '../actions/quiz';

const initialState = {
  quiz: null,
};

export default handleActions({
  [actions.setQuiz]: (state, action) => ({ ...state, quiz: action.payload }),
}, initialState);
