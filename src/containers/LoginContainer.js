import { connect } from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/ui';

const mapStateToProps = state => ({
  activeUser: state.ui.activeUser,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  setLoading: bool => dispatch(actions.setLoading(bool)),
  setActiveUser: user => dispatch(actions.setActiveUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
