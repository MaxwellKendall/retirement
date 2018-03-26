// set active user
import { handleActions } from 'redux-actions';
import * as actions from '../actions/ui';
import { loadState } from '../localStorage';

const persistedState = loadState();
const initialState = {
  activeUser: persistedState.activeUser,
  loading: false,
  error: false,
  retired: false,
};

export default handleActions({
  [actions.setActiveUser]: (state, action) => ({ ...state, activeUser: action.payload }),
  [actions.setLoading]: (state, action) => ({ ...state, loading: action.payload }),
}, initialState);
