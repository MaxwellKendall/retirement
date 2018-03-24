import { connect } from 'react-redux';
import Comments from '../components/Comments';
import * as actions from '../actions/comments';

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

const mapDispatchToProps = dispatch => ({
  getComments: index => dispatch(actions.getComments(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
