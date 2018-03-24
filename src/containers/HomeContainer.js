import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actions from '../actions/ui';

const mapStateToProps = state => ({
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  setLoading: bool => dispatch(actions.setLoading(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
