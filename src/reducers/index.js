import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import comments from './comments';
import quiz from './quiz';

const rootReducer = combineReducers({
  router: routerReducer, // from reduxRouter
  ui,
  comments,
  quiz,
});

export default rootReducer;
