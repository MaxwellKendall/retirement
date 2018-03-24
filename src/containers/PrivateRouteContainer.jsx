import { connect } from 'react-redux';
import PrivateRoute from '../components/common/PrivateRoute';

const mapStateToProps = state => ({
  activeUser: state.ui.activeUser,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
