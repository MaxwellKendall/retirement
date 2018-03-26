import { connect } from 'react-redux';
import App from '../components/App';
import * as actions from '../actions/comments';
import * as uiActions from '../actions/ui';

const mapStateToProps = state => ({
  user: state.ui.activeUser,
  loading: state.ui.loading,
  activeUser: state.ui.activeUser,
});

const mapDispatchToProps = dispatch => ({
  getComments: index => dispatch(actions.getComments(index)),
  setActiveUser: user => dispatch(uiActions.setActiveUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
