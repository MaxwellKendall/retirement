import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments';
import ui from './ui';

const rootReducer = combineReducers({
  router: routerReducer, // from reduxRouter
  comments,
  ui,
});

export default rootReducer;
