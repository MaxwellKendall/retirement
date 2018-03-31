import { handleActions } from 'redux-actions';
import * as actions from '../actions/comments';

const initialState = {
  comments: [{ msg: 'hey Guyz' }],
};

export default handleActions({
  [actions.setComments]: (state, action) => ({ ...state, comments: [...action.payload] }),
}, initialState);

