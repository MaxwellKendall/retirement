import { handleActions } from 'redux-actions';
import * as actions from '../actions/reducer';

/**
 * initialState will be the first thing passed to the reducers and is therefore what you state * * will be by default until any actions are executed
 */

const initialState = {
};

export default handleActions({
  // make each action return the object you want state to be for the given property
  [actions.reducer]: (state, action) => ({ ...state, stateProperty: action.payload }),
}, initialState);
