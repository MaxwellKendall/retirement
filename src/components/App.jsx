import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';
import My404Component from './common/My404Component';
import CommentsContainer from '../containers/CommentsContainer';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
// import QuizContainer from '../containers/QuizContainer';
import Header from './Header';
// import Form from './Form';

const App = props => (
  <Router>
    <div>
      <Header logOut={props.setActiveUser} activeUser={props.activeUser} />
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        {/* <PrivateRoute activeUser={props.activeUser} exact path="/memories" component={CommentsContainer} /> */}
        {/* <PrivateRoute activeUser={props.activeUser} exact path="/quiz" component={QuizContainer} /> */}
        {/* <PrivateRoute activeUser={props.activeUser} exact path="/quiz" component={Form} /> */}
        <PrivateRoute activeUser={props.activeUser} exact path="/" component={CommentsContainer} />
        <Route component={My404Component} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  activeUser: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired,
  // getComments: PropTypes.func.isRequired,
  setActiveUser: PropTypes.func.isRequired,
};

export default App;
