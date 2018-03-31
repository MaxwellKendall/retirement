// set active user
import { handleActions } from 'redux-actions';
import * as actions from '../actions/ui';
import { loadState } from '../utils';

const persistedState = loadState();
const initialState = {
  activeUser: persistedState,
  loading: false,
  error: false,
  retired: false,
};

export default handleActions({
  [actions.setActiveUser]: (state, action) => ({ ...state, activeUser: action.payload }),
  [actions.setLoading]: (state, action) => ({ ...state, loading: action.payload }),
}, initialState);
